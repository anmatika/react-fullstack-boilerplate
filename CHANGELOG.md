## 0.7.0 (08.01.17)
*  Convert application into a Progressive Web Application
*  Add support for service worker, manifest, use offline-plugin for webpack
*  Add favicon support
*  create /public folder which gets bundled with build

## 0.6.1 (07.01.17)
*  Remove deprecated hot reloading entry from webpack dev config
*  Fix proptype validation error for CustomInput

## 0.6.0 (07.01.17)
*  Add eslint using airbnb's config and integrate it with dev environment
Update codebase to comply with code style requirements
*  Add support for .jsx file extension

## 0.5.1 (07.01.17)
*  Fix redux example by completing partial action type renaming
*  Update example application to better demonstrate client and server interaction through redux
*  Bump dependency versions

## 0.5.0 (07.01.17)
*  Add production build support
*  Add build and stats script for webpack to generate stats.json 

## 0.4.0 (27.12.16)
*  Add Redux support
*  Add support for thunks through redux-pack
*  Integrate with Redux DevTools chrome plugin
*  Update example to demonstrate async actions and load delays

## 0.3.0 (26.12.16)
*  Add Sass stylesheet support

## 0.2.0 (25.12.16)
*  Replace webpack-dev-server with webpack-dev-middleware and add webpack-hot-middleware
*  Application now serves both API and output files from same port using a single express server
