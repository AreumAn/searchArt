## Intro
Use the [Metropolitan Museum of Art API](https://metmuseum.github.io/#search) to build a UI for searching their collection.


## Table of Contents
- [Intro](#intro)
- [Table of Contents](#table-of-contents)
- [Requirements](#requirements)
- [Setup](#setup)
- [Dev Setup](#dev-setup)
- [Library](#library)
- [API Data](#api-data)
    - [`Object`](#object)
    - [`Search`](#search)
- [Overview](#overview)
    - [`Components`](#components)
    - [`Containers`](#containers)

---
## Requirements
* [x] 1. Search results includes some of art informations like title.
* [x] 2. When a user clicks on a result, it moves to detail page.
* [x] 3. Use debounce to prevent unnecessary API calls: Custom debounce in `utils/debounce.js` (reference: https://dev.to/gabe_ragland/debouncing-with-react-hooks-jci)
* [x] 4. Only show last results: Use axios cancelToken to cancel the previous request, if there is new request called.

## Setup

1. Run `npm install` or `yarn`
2. Run `npm start` or `yarn start`
3. Open your browser to [localhost:3000](http://localhost:3000)

## Dev Setup
- **eslint, prettier**
```
yarn add --dev eslint
yarn run eslint --init
yarn add eslint-config-prettier
```

## Library
- axios : To get api data
- prop-types
- styled-componenets
- react-router-dom : To move detail page

## API Data
[Metropolitan Museum of Art API](https://metmuseum.github.io/#search)

#### `Object`

- `GET /public/collection/v1/objects/[objectID]`

A record for an object, containing all open access data about that object, including its image (if the image is available under Open Access)

#### `Search`

- `GET /public/collection/v1/search`

A listing of all Object IDs for objects that contain the search query within the object’s data

## Overview

#### `Components`
  - SearchForm: Show input box to type search term
  - ArtItemList: It returns each searched items using map
  - ArtItem: A searched item, it shows title, thumnail img, homelink
  - ArtDetail: Show selected item info from the result list
  - Message: To show message, this componenet reduce repeated code

#### `Containers`
  - SearchContainer: Fetch searched data and its info by search term
  - ArtDetailContainer: Fetch selected item detail data, return ArtDetail componenet

