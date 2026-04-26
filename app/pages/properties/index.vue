<template>
    <div class="flex flex-col gap-4">
        <h1>Properties</h1>
        <hr>
        <UButton class="w-fit" @click="handleCreateDemoProperty()">Create Demo Property</UButton>

        <UTable
          class="mt-8"
          :columns="columns"
          :data="tableRows"
          :loading="loading"
          :empty-state="{ icon: 'i-heroicons-home', label: 'No properties found.' }"
        >
          <template #cell-actions="{ row }">
            <button
              class="px-2 py-1 text-xs text-red-600 bg-red-50 rounded hover:bg-red-100 transition"
              @click="handleRemoveProperty(row.id)"
              title="Remove Property"
              type="button"
            >
              Remove
            </button>
          </template>
 
  
        </UTable>
    </div>
</template>

<script setup lang="ts">
import { computed, onMounted } from 'vue'
import type { TableColumn } from '@nuxt/ui'
import { usePropertyManager } from '~/domains/properties/property.manager';
import type { Property } from '~/types/property.types'

const manager = usePropertyManager()
const properties = computed(() => manager.properties.value)
const loading = computed(() => manager.loading.value)

type TimestampLike = {
    toDate: () => Date
}

function formatDateValue(value: unknown): string {
    if (value instanceof Date) return value.toLocaleString()

    if (value && typeof value === 'object' && 'toDate' in value) {
        const maybeTimestamp = value as TimestampLike
        if (typeof maybeTimestamp.toDate === 'function') {
            return maybeTimestamp.toDate().toLocaleString()
        }
    }

    return value ? String(value) : ''
}

// Make sure to convert date objects to formatted strings for UTable rendering
const tableRows = computed(() => {
    return properties.value.map(p => ({
        ...p,
        createdAt: formatDateValue(p.createdAt),
        // Optionally, you can do similar for updatedAt or any other date field if needed
    }))
})

type PropertyTableRow = Omit<Property, 'createdAt'> & { createdAt: string }

// Add an Actions column to columns
const columns: TableColumn<PropertyTableRow>[] = [
    { accessorKey: 'title', header: 'Title' },
    { accessorKey: 'type', header: 'Type' },
    { accessorKey: 'listingType', header: 'Listing' },
    { accessorKey: 'price', header: 'Price' },
    { accessorKey: 'city', header: 'City' },
    { accessorKey: 'country', header: 'Country' },
    { accessorKey: 'status', header: 'Status' },
    { accessorKey: 'createdAt', header: 'Created At' },
    {
      accessorKey: 'actions',
      header: '',
      cell: (info: any) => null, // needed for UTable column presence, slot will be used
      // class: 'w-12' // shrink
 
      // Removed invalid 'meta: { slot: true }'
    }
]

function handleCreateDemoProperty() {
    if (!confirm('Are u sure ?')) return null;
    // Demo property data based on Property type
    manager.create({
        title: 'Luxury Apartment in Downtown',
        slug: 'luxury-apartment-downtown-' + Math.random().toString(16).slice(2),
        type: 'apartment',
        listingType: 'rent',
        price: 1200,
        currency: 'USD',
        city: 'Beirut',
        country: 'Lebanon',
        district: 'Ashrafieh',
        address: '123 Main St, Downtown Towers',
        description: 'A spacious luxury apartment in the heart of Beirut, perfect for city living.',
        area: 165,
        bedrooms: 3,
        bathrooms: 2,
        parking: 1,
        media: [
            {
                src: 'https://placehold.co/100',
                type: 'img',
                caption: 'Living room view'
            },
            {
                src: 'https://placehold.co/100',
                type: 'img',
                caption: 'Balcony view'
            }
        ],
        createdAt: new Date(),
        updatedAt: new Date(),
        status: 'available'
    });
}

async function handleRemoveProperty(id: string) {
    if (!id) return
    if (!confirm('Are you sure you want to remove this property?')) return
    try {
        await manager.remove(id)
        // It will auto-update due to reactive fetching manager.fetchAll()
    } catch (e) {
        alert('Failed to remove property. See console for details.')
        // Optionally, handle error/toast here
        // eslint-disable-next-line no-console
        console.error(e)
    }
}

onMounted(() => {
    manager.fetchAll()
})
</script>