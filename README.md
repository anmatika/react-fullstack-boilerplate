# Yet Another React boilerplate

This project is intended as a lightweight boilerplate for getting started with full-stack 
NodeJS development using React & friends on the client-side.

## Features
*  Server with basic API
*  React Hot Loader 3
*  webpack 2 with preconfigured dev environment
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

Furthermore, always split components into container and view components according to their 
responsibilities. A container component should only be concerned with acquiring and passing data
to the view component, whose concern regards rendering the received data -- these concerns should
rarely be covered by the same component.


## To-do:
*  Demonstrate basic client/server interaction
*  Sass/Less/whatever support
*  Use same port for client/server?
*  Production build
*  DB integration?
*  redux?
*  favicon (through html webpack plugin)
*  tests backend
*  integration with GitLab and GitHub CI?
*  shallow rendering tests frontend..?
*  cool utils like react-storybook, react-fix-it, webpack-bundle-analyzer, redux-bug-reporter..
*  PWA integration 
*  grid system that isn't bootstrap