# Exercise 1

## Problem:

### We need to create a copy of a section of the FreeCodeCamp's page with his heading, images and paragraphs 

## Solution:

## It was made with React and we deleted the CSS files and created new folders, a call 'Components' nested in the 'src' folder, and within Components there was another folder call 'Users' nested and within that a JSX file. Inside the JSX file there is a component that returns several divs tags created with a map function and the props of the component. One div contains the image, the other a headline and a paragraph. And finally in the root components it has been created a constant that has an array of objects, and the properties that is inside them are the characteristics of the persons and passed as a properties of the props in the component User and returned for the component App.