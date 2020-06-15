This project is designed to explore and learn more about full-stack development using Spring and React. 

Stack consists of MySQL database, Spring REST repositories, and React front-end.

This application allows users to put items in a cart, and submit their order to the database
 to have an opportunity to see their order history afterwards.

Spring connects to the database and exposes repositories via RESTful API. It allows GET method on /api/items endpoint,
 and POST method on /api/orders endpoint. Controller intercepts POST requests, converts data, and persists it to the database.

Front-end uses Bootstrap to create a more user-friendly layout and Router tag handling navigation between React components.




The project started as a Spring application with Thymeleaf as a rendering engine, but then I chose to introduce React and have front-end on a different URL.

List of items for this project is taken from Mcdonalds menu and is likely reserved by them.


TODO:


1. Add a success and failure page for user to be redirected to after the order is submitted.
2. Create a home page
3. Authorization, additional features like order history for signed in users.
4. Allow users to order from different places on the same website.
 