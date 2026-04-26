# Project Overview
`I am building a Website and its Dashboard for the Spectrum Real Estate Company.`

# The Website

**Technical stack** : `Nuxt + Firebase ( Firebase Admin sdk )`

**Rendering**: `SSR - SEO friendly + caching`

**Pages**:

* `Home page ( / ) : will show the company profile info, some featured real estate properties as cards view, contact info, and some static sections like ( FAQ, Testimonials, about )`  
* `Properties page ( /properties ) : will list some featured properties in a table, search bar to search for a specific property with some filters`  
* `Single Property Page ( /properties/slug-title-id || /properties/id ) : showing a single property with full details`


**Design**: `UIUX design will be provided - customised design`

---

# The Dashboard

**Technical Stack**: `Nuxt + Firebase ( Firebase Client Side SDK )`  
**Design**: `UIUX will be provided - minimalist and simple`   
**Rendering**: `CSR - SPA`  
**Pages**:

* `( / ) : home page showing something ( will be provided later )`  
* `( /properties ) : Properties page showing a table that lists some featured properties, a search bar with filters, button to create new property, rows can be selected and then ability to delete property(s), option to update a single property.`  
* `( /properties/id ) : showing full details of a property`  
* `( /property/id/edit ) : page having form to update a property.`  
* `( /property/id/delete ) : showing some details + message + button to delete a property;`  
* `( /login ) : Form to login the user`

**Frontend Architecture**:

* `Will be using Vitest for testing, Sentry for error handling, Pinia for state management, Firebase Emulator, Nuxt UI, Tailwind.`  
* `Setup Firebase plugins for auth , firestore, storage`  
* `Domain Driven Architecture, which means: UI will use ---> composables ---> managers ( like usePropertyManager() accessing CRUD methods )`  
* `Authenticated routes`

**Folder Structure** ( the important part )
```  
    /stores
        useAuth.ts ( saving the auth state , pure ts logic )
        useStatic.ts ( static content ) 
    /domain`  
        /property`  
            /property.manager.ts ( CRUD logic )
            /property.mapper.ts ( data modeling and transformation logic )  
            /property.api.ts ( pure firebase logic ) 
	/types 
	    property.type.ts ( interfaces and types )
	/plugins
	    /firebase
            auth.client.ts ( providing the auth instance and toggling the emulator )` 
            firestore.client.ts ( same but the firestore instance )
```

**Backend Architecture:**  
**Notes**

* `Will be using Firebase services, Firestore, storage and hosting.`  
* `The priority is to super optimise reads over writes. ( max 2 docs read per each visit ). With some search filter limits.`  
* `For now there will be only one admin user used by the company, to login and use the dashboard with.`  
* `Security rules will take into consideration the one admin account situation.`

**Firestore Database Design and Modeling:**  
`The public collection will have two docs, the main one which includes the company profile info and contact info ( for now , we can add later ). And the featured_properties doc which includes a list of smaller versions of each ( max 100 snippet ) property we call it property snippet. Along with some meta data fields.` 

`And we also have the properties where each doc inside represents a real estate property.`
```
/public  
	main {}  
	featured_properties {} 
/properties
	ID {}
```
`This design is optimised for reads, because when someone visited the website and go to the home page for example it will need only 2 docs, and for the /properties route it will still need to fetch the same 2 docs which will include a decent amount of featured properties, and at the same time the ability to perform search and filter which might also fetches a max of 10 docs per query with some limitations and pagination.` 