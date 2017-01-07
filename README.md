# Yet Another React boilerplate

This project is intended as a lightweight boilerplate for getting started with full-stack 
NodeJS development using React & friends on the client-side.

## Features
*  Complete skeleton for full-stack application development 
*  Both API and bundle served from same port
*  Builds production-ready static assets in one command
*  Redux with thunk, redux-pack and DevTools chrome plugin integration
*  React Hot Loader 3
*  webpack 2 with preconfigured dev environment
*  Sass stylesheets
*  Scalable folder structure
*  .. more to come

## Folder structure
```/components``` Folder containing reusable components  
```/views``` Complete page views composed from reusable ```/components```

### A note about components
The components in the ```/components``` folder should be structured as such:
*  one folder per component
*  one main entry file per component, named index.js
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
*  Demonstrate basic client/server interaction
*  ~~Sass support~~
*  react-router
*  ~~Use same port for client/server?~~
*  ~~Production build~~
*  DB integration?
*  ~~Redux~~
*  favicon (through html webpack plugin)
*  tests backend
*  graphQL?
*  eslint
*  a11y
*  autoprefixer
*  integration with GitLab and GitHub CI?
*  shallow rendering tests frontend..?
*  cool utils like react-storybook, react-fix-it, webpack-bundle-analyzer, redux-bug-reporter..
*  PWA integration 
*  grid system that isn't bootstrap


[1]: https://webpack.github.io/analyse/
[2]: https://chrisbateman.github.io/webpack-visualizer/