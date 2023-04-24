# CS 465 - Full Stack Application

## Architecture
I used the following architecture for this project:

**Express** - Express is a Node.js web application framework that allows developers to create web applications and APIs with ease. 
It provides a wide range of features such as routing, middleware support, and template engines.

**Angular** - Angular is a frontend web application framework developed by Google. It is built on top of TypeScript and is used to create complex and dynamic web applications. Angular provides features such as two-way data binding, dependency injection, and component-based architecture. 
It is a complete framework that can be used to develop large-scale web applications.

**JavaScript** - JavaScript is a scripting language used to create interactive and dynamic web pages. It is used to add interactivity to a website by allowing developers to manipulate the HTML and CSS of a webpage in real-time. JavaScript can be used to create animations, handle user input, and make asynchronous requests to the server.

**HTML** - HTML (Hypertext Markup Language) is a markup language used to create the structure of web pages. It is the backbone of the web and is used to define the elements on a web page such as headings, paragraphs, links, and images.

**MongoDB** - A NoSQL database for persistent storage of user data.

### Angular vs Express
The Angular project structure serves a different purpose than that of Express. Angular is a front-end JavaScript framework that is used to build single-page web applications. It has a modular architecture that separates code into components, modules, and services. This was designed for a separation of concerts (SoC). The modules use components to build the user interface and the services contain the logic for the application. This makes the application more maintainable. The components are combined to create a single page that is displayed to the user. Express is used to build APIs and so it uses routes and controllers to build and display the url paths and has a folder for the HTML, CSS, and JavaScript files that make up the customer-facing page(s). In summary, Angular uses a modular structure while Express uses a more traditional structure (model, controller, route). 

## Functionality

#### How is JSON different from Javascript and how does JSON tie together the frontend and backend development pieces?
JSON is a lightweight data interchange format that is used to transmit data between servers and web applications. JSON is often used in web development to exchange data between the frontend and backend of an application.
Although JSON is based on JavaScript syntax, it is a language-independent format that can be used with any programming language. JSON is simply a text format that follows a specific structure and encoding rules, and can be easily parsed by JavaScript and other programming languages.
However, JavaScript is a programming language used to create interactive and dynamic web applications. While JSON can be easily parsed by JavaScript, JavaScript is a much more versatile language that can be used to create more complex and interactive applications.
When a web application sends a request to a server for data, the server typically responds with data in JSON format. The frontend application can then parse this data and display it to the user.

#### Provide instances in the full stack process when you refactored code to improve functionality and efficiencies, and name the benefits that come from reusable user interface (UI) components.
When I needed to do further work on the cards that were part of the component for listing trips, it was obvious that the code was getting long, and would eventually be hard to maintain.
It was also at risk of being too tightly coupled to the component, which would make it difficult to reuse in other components. So I turned the card itself into a component that allowed me to reuse it 
anywhere and split the logic of listing trips and the logic of grabbing the data for each individual trip, making it far more maintainable.

## Testing
#### Methods for request and retrieval necessitate various types of API testing of endpoints, in addition to the difficulties of testing with added layers of security. Explain your understanding of methods, endpoints, and security in a full stack application.
Endpoints are specific URLs that are used to interact with the API. The methods for requesting and retrieving data for an API endpoint are GET, POST, PUT, and DELETE. Each method corresponds to a different type of operation that can be performed on the API.
APIs can be vulnerable to security threats such as unauthorized access so security measures such as authentication and encryption are implemented to prevent security flaws. It can be difficult to test APIs when security measures add extra steps to sending the correct
data for the tests. This can be made easier with API testing tools such as Postman.

## Reflection
#### How has this course helped you in reaching your professional goals? What skills have you learned, developed, or mastered in this course to help you become a more marketable candidate in your career field?
This course has helped me to learn how to build a full stack application using the MEAN stack. I have learned how to use Angular to build an SPA for administration purposes and how to use Express to build the custom frontend and API backend. I have also learned how to use MongoDB to store data in a database. 
This will allow me to be a more versatile candidate for future employers as well as allow me to create my own web projects for my portfolio. I have learn Vue and React in the past, and I knew that I would eventually have to learn Angular and this class has been a great step into become an expert in full stack development.