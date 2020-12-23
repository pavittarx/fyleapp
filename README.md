# Part 2: Fyleapp

This is Part 2 of assignment covered in [Part1](https://github.com/pavittarx/fyleserver)

### Problem Statement

Develop a Single Page App

The app should list and search for banks that are fetched from the API developed in Part 1. There should be a dropdown for cities (just put in 5 cities in there) and there is a search bar. As I type in the search area, the table should be dynamically filtered (client-side filtering). Search should be across all fields.

Essentials your applications should have:

1. bank search screen which would show a list of banks
2. user should be able to search by text for the banks, across all the fields (important: there would be no search button)
3. pagination for the results of the search, the user should be able to select page size
4. mark some banks as **favourites**. View banks that were marked as favourites (favourites should persist state event if the website is refreshed or reloaded)
5. API calls should be cached
6. your application should be deployed to Heroku

For extra fun, you can try the following:

1. clicking on bank name would redirect to a bank page, with a route like *banks/{bankid}* that displays the details of the bank


### Project Structure 

/src - contains all react or UI code

```
.
├── assets
│   ├── icons
│   │   ├── down.svg
│   │   ├── next.svg
│   │   ├── prev.svg
│   │   └── search.svg
│   └── images
│       ├── fyleapp.png
│       └── preloader.svg
├── index.css 
├── index.html
├── index.tsx
├── libs
│   ├── constants.ts 
│   └── pouch.ts
├── pages
│   ├── App.tsx
│   └── home
│       ├── home.context.ts  // state management via Context API
│       ├── home.footer.tsx
│       ├── home.header.tsx
│       ├── home.main.tsx
│       ├── home.scripts.ts  // vanilla Javascript code
│       ├── home.styles.ts
│       ├── home.tsx         // root for home
│       └── types.ts         // typescript types
├── shared               // shared components
│   ├── dropdown.tsx
│   └── preloader.tsx

```

* UI Framework: React
* Caching done via : PouchDb
* Syling: styled-components


