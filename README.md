## Punk-API project
## Content
* [Introduction](#introduction)
* [Description](#description)
* [Example of use](#example-of-use)
* [Project Status](#project-status)

## Introduction
This is a punk API project. This page can display all beers contained in the database, including images, names, descriptions, and most importantly, the alcohol content index.

* Here's the link of Github repository: https://github.com/ChenAmelia/punk-api-project
* Here's the link of live page: https://chenamelia.github.io/punk-api-project/
	
## Description
The project is created with:
* JavaScript
* JavaScript Extention
* SCSS
* HTML

The website was built using React and JSX. The page was separated into 7 components and app.jsx to pass through necessary parameters to different components. 

The basic and crucial part is using the useEffect hook to fetch data. Then use the async function to pass data into setBeers function. Use fetch to ensure the data is fetched and continue to pass data as json file to “data”. Then use useState to preserve data in “beers”. And now the database has been preserved in “beers” as an array.

Passing through the data to Cardlist and using map function to get all elements in array. And pass through different values we need for building the card such as name, tagline and abv. The Key value is necessary here, but in Card.jsx, the key value should not be passed. I build the card and style it in Card component.

There are two functions on the website: search(search box) and filter(checkbox).  The search function allows users to search for the item by the beer’s name. Define when the search box is empty, which means when no input text in it or delete everything in the search box, the page should still display the “beers” array. Or when deleting all the input, the page will be empty because “”(empty string) doesn’t match any name value. With the filter function, I use checkbox to display all qualified items based on values.

## Example of use

This is the original page.

<img width="300" src= "https://user-images.githubusercontent.com/109622201/190637128-160f792e-d8e1-4092-b50d-81c5db9a730f.png">

When input beer's name in the search box, the page will display the the beer qualified. And the search box allows to input both capital letter and lowercase.

<img width="300" src= "https://user-images.githubusercontent.com/109622201/190637828-a8d5f1f6-8a85-4818-92b5-05fc76dd69db.png">

When click the menu image on the top-left corner, the menu will be dragged down and shows all three filters in it.

<img width="300" src= "https://user-images.githubusercontent.com/109622201/190638254-d09e2323-a1ae-43d0-b365-b5f0c035504b.png">

Users can filter beers which abv is higher than 6.0%, firsted brewed before 2010, and the ph less than 4.

<img width="300" src= "(https://user-images.githubusercontent.com/109622201/190638701-393cf761-2ac3-48be-b3b1-6e985ddb0650.png">
<img width="300" src= "https://user-images.githubusercontent.com/109622201/190638708-9c2b9ad4-2ad7-44d7-a85a-a6ba2ac55db4.png">
<img width="300" src= "https://user-images.githubusercontent.com/109622201/190638716-15524954-2c92-455d-a219-aed02ad36aa4.png">

And when unclick the checkbox, the page will display the original page.

## Project Status
Currently this page can only run search and filter functions. In the future, I want to optimize the filter function. First, add more exponents. Second, I will replace the checkbox with a slider, allowing users to arbitrarily select the indicators they want to filter.

In the subsequent revisions, the router function will be added to the page. When clicking on a beer card, a separate card of the beer will be displayed, and more information about the beer will be added to the separate card.

The design of the current page is mainly aimed at mobile phone users, and in the future, it will be adjusted to responsive websites which can adapt to most screens.

