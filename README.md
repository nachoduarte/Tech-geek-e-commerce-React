# Tech-geek Computacion 
This is an e-commerce project of hardware and computers developed entirely on React JS for Coderhouse's course.

## Installing the environment

in order to run the app on your computer you must have **Node.JS** so you can install all the corresponding modules.

Once in the project folder you must run `npm i or npm install` 
This will provide you with all the neccesary dependencies to make the app work.

You will also have to install some extra dependencies:
-firebase@9.6.1 --> for access to the database
-react-router-dom@5.2 --> for route navigation between components
-react-bootstrap@2.0.2 --> for styling components

To run the app you type `npm start` on project folder. If after a few minutes doesn´t start automatically, you can go to [http: // localhost: 3000] on your browser.

## Languages 

This project was developed using

- Html5
- CSS
- JavaScript

## APP routes 

- / -> **ItemListContainer** --> takes you to the landing page
- /category/:category -> **ItemListContainer** --> takes you to the desired product category on the landing page
- /item/:id -> **ItemDetailContainer** --> takes you to the desired product detail
- /cart -> **Cart** --> takes you to the cart component
- /checkout -> **CheckoutForm** --> takes you to the checkout form

## Components and its logics

- `CartContext` it contains the functions and the respective cart array. When you add an item to the cart, it contains an object data of the type {item, quantity}, being **item** the selected product´s data and **quantity** the selected amount of the same element.
- `ItemListContainer` it contains the functions whose will get the list of items from firebase, and set the entire list of items. It will also have the filter category logic.
- `ItemDetailContainer` same as ItemListContainer, it will get the data from a determined item from the list.
- `Cart` it renders a list of all the items in the cart array, the info is taken from the **CartContext** component.
- `CheckoutForm` it contains the logic for creating your checkout object. The checkout object will contain a **buyer** who´s data will be picked up from the form; the **items** located in the cart array, and the **total** of the purchase. Once the form is completed it will create the object and post it to the **Firestore** database, then the form will unmount and show you a success message with the purchase´s ID.


