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
![Screenshot 2022-09-16 at 13 13 55](https://user-images.githubusercontent.com/109622201/190636890-3b9c6495-136d-466e-ba21-752d29cc8757.png)



## Project Status

