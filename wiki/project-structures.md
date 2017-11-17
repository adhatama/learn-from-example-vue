## Project Structures

- build
- config
- src
    - assets
    - components
        - admin
            - layouts
                - AdminHeader.vue
                - AdminMain.vue
                - AdminSidebar.vue
            - Admin.vue
        - home
            - layouts
                - HomeHeader.vue
                - HomeMain.vue
            - Home.vue
    - mixins
    - resources
    - router
    - styles
    - App.vue
    - main.js
- static
- test
- index.html

----

#### Explanation

- build
    - This folder contains Webpack-related configuration. You won't need to touch it for now.
- config
    - Something like dot env (.env) to place your spesific constant variable based on your environment. If you want to set API_HOST or some Secret key, set it in here
- src
    - Your main business logic apps
    - Everything in here will be compiled by Webpack into one js file. Only js file will be compiled. For css, it will be outputed in html directly without files
    - `main.js` 
        - is the entry point where you define your Vue Instance. This is where you import custom vue library and node modules. 
        - Vue Instance will load its main Component which is `App.vue`. 
    - `App.vue`
        - This is the main Component. 
        - Ideally, you just need to add `<router-view/>` in this Component, because you will use Vue Router and that `<router-view/>` will be filled with the selected Component by the router.
    - `router/index.js`
        - The router. This is where you put the mapping of a url with a component.
        - If you see the `router/index.js`, the `/` url, which is the root url, it shows that the `/` url will use `Home` Component.
    - `components/home/Home.vue`
        - This is `Home` Component. Its purpose is for layouting. You can see that it contains other Components like `HomeHeader` and `HomeMain`
        - `HomeHeader` is just normal vue file
        - `HomeMain` contains `<router-view/>` again.
            - If you see the `router/index.js`, the `/` url have route children. So actually the route children is the route that will be used. The route children has route with `/` url again. It shows the default children route, so when the browser access `/`, it will show the route children too. So the `<router-view/>` in the `HomeMain` will be filled with the router children Component, which is `HomeIndex`.
    - For more information, please read the comments in the code.
- static
    - This contains files like assets, but it won't be compiled by Webpack
- test
    - For automated test
- index.html
    - Entry point of your Vue apps