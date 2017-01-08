# Yet Another React boilerplate

This project is intended as a lightweight boilerplate for getting started with full-stack 
development using Node.js server-side and creating a progressive web app using 
React & Redux on the client-side.

## Features
*  Complete skeleton for full-stack progressive web application development
*  Preconfigured to support PWA features
*  Both API and bundle served from same port
*  Builds production-ready static assets in one command
*  Redux with thunk, redux-pack and DevTools chrome plugin integration
*  React Hot Loader 3
*  webpack 2 with preconfigured dev environment
*  eslint with a11y support for code linting and automatic formatting
*  Sass stylesheets
*  Scalable folder structure
*  .. more to come

## Folder structure
```/components``` Folder containing reusable components  
```/views``` Complete page views composed from reusable ```/components```  
```/public``` Content in this folder will be copied to the resulting build folder, and can be included in ```index.html```

### A note about components
The components in the ```/components``` folder should be structured as such:
*  one folder per component
*  one main entry file per component, named index.jsx
*  the main entry file has one default export, being the component
*  a stylesheet named style.css containing all style rules for the component
*  if the component is a container component: 
   *  the folder should contain the view component in a nested directory named 'View'
   *  the component contained in the view folder should be pure/stateless
   *  the view component should contain all stylesheets

Components should not behave in opinionated ways in regards to their usage context. 
Positioning of the components and similar concerns should always be handled by the container.

Group components according to their usage types and always split components into container and view 
components according to their responsibilities. 
A container component should only be concerned with acquiring and passing data
to the view component, whose concern regards rendering the received data -- these concerns should
rarely be covered by the same component.

### Analysing the webpack bundle
Running ```npm run buildstats``` will generate a *stats.json* file in the project's root directory.
Upload it to a tool like [webpack analyse][1] or [webpack visualizer][2] to get detailed information 
about your bundle's contents.

## To-do:
*  Complete compliance with Lighthouse
*  *"Getting started"* section
*  Section explaining the motivation behind creating this boilerplate
*  FAQ section
*  Commands/scripts explanation section
*  npm scripts for building only statics and hosting with server in production mode
*  Service layer with host config to decouple frontend from backend 
(to allow building only the frontend and using the static files with a different backend)
*  Support hosting production build with server
*  Chunk hashing
*  add fetch and other required polyfills
*  test in different browsers (IE, Safari)
*  Demonstrate sharing sass styling between components
*  react-router (with module/code splitting)
*  DB integration?
*  tests backend
*  graphQL?
*  autoprefixer
*  integration with GitLab and GitHub CI?
*  cool utils like react-storybook, react-fix-it, webpack-bundle-analyzer, redux-bug-reporter..
*  grid system


## Done
*  ~~Demonstrate basic client/server interaction~~
*  ~~Sass support~~
*  ~~PWA integration~~ 
*  ~~eslint~~
*  ~~a11y~~
*  ~~Use same port for client/server?~~
*  ~~Production build~~
*  ~~Redux~~
*  ~~favicon (through html webpack plugin)~~


[1]: https://webpack.github.io/analyse/
[2]: https://chrisbateman.github.io/webpack-visualizer/