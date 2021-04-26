# salon-mvp
Web platform for small-business salon owners to record and manage all business transactions


Product Requirements DRAFT v1
Salon Project MVP
“some catchy phrase”

Primary Goal

To deliver a web-accessible platform that small-business salon owners can use to easily record and manage all of their business transactions. This is geared to the not-so-tech-savvy community of salon owners who may still be using pen and paper to manage their businesses. It is extremely easy to use and has a low learning curve. Platform enables clientele to make appointments, set preferences and access historical transaction data of previously rendered services. It provides the salon owner with a single tool to manage all business transactions and spits out summary reports that empower the owner with knowledge about the health of the business.

Who’s it for?

Small-business salon owners - those salon owners who have a single location and want to focus primarily on doing their work and going home
Salon clientele - want to get a great experience at the salon without having to deal with the back-and-forth of setting appointments over the phone and with the uncomfortable payments conversation at the end of the service

Why build it?

Portfolio project to present as center-piece of my development capabilities
Streamline management of salon business transactions for a particular customer

What is it?

Owner Dashboard

New Transaction - open new transaction form
Clients - access to client profiles
Reports - run reports of previous transactions
Services - add new services and/or edit existing services
Products - add new products and/or edit existing products
Profile - view and/or edit owner profile
Schedule - view current schedule, handle client scheduling requests and/or create new appointment

	Additional Notes:
ONLY owner can record a transaction occurred. Primary purpose of platform is for owners to manage their business
Client Dashboard

Services and Preferences - can choose service and set preferences for a service. can append pictures to be viewed for reference for specific service
Profile - view and/or edit client profile
Schedule - view current schedule and/or create new appointment

Navigation Bar

Owner Login - ONLY when logged out
Owner Logout - ONLY when owner logged in
Client Login - ONLY when logged out
Client Logout - ONLY when client logged in
Register - ONLY when logged out
About - describes platform's capabilities

User Types

Non-Registered Users - can view 
Registered - people that have registered and can vote on posts but cannot post or comment.
Admins - 


New Transaction Form View
Form can ONLY be created and/or edited by the owner. Once submitted, the client will be notified and has read-only access IFF transaction type is of client_revenue
Transaction type
business_expense, client_revenue, other TDB
Client name
Owner name
Auto-filled in the form. Owner is signed in.
Business name
Auto-filled in the form. Owner is signed in to a specific business, and CANNOT be signed in to multiple businesses simultaneously
Service & price rendered
Multiple services CAN be included in single transaction
Product & sale price
Multiple products CAN be included in single transaction
Images
To record the quality of the work which can be referenced at any time in the future
Notes

Reports View

Notes
Notes are added by the owner inside a specific transaction. 
Purpose of transaction-specific notes: to allow owner to jot down any technical issues or flags that occurred during the service, for future reference. Owner can review these prior to or during later appointments with that particular client.
They can be edited within the transaction. Client DOES NOT have view-access to these transaction notes.

Email Notifications
Users receive the following email notifications:

New Appointment Request - 
Appointment Scheduled - 



Registration Required Info
Owners:

Full Name
Email Address and Phone Number
Business Name and Address

Clients:

Full Name
Email Address and Phone Number

Brainstormed Ideas

Event Sourcing - utilize a append-only data structure for a specific set of data to be able to run analyses
SEO Friendly - 



Open Issues

Undefined Service or Product - if user has not pre-defined a complete set of offered services and products, need to enable opening a new transaction WITHOUT forcing the user to go to separate page and then having to then go to open a new transaction. Needs to be seamless
New Transaction - options for who can record new transaction: only owner, owner or client, owner and client must sign off on transaction
If only owner: should the notes/comments section be hidden from the client?
Services and Preferences - how will services and preference be shared and stored between client and owner
User Models - divide the user models between 'Owner' and 'Client' OR capture within a single 'User' model and use a 'type' element to capture the user type.
If using single model to capture both, how to set validations? Can logic be attached to validations?



Design-Build Schedule
app.js
express router
Home page
Models


Event-sourcing
identify features to capture



For Engineering Hiring Managers
Github - push everything to github
Readme - steps to download locally, directions how to access the live site with a 'guest' username & password
Live Site - site is deployed and can be used by any one who creates an account


Competitors & Product Inspiration - TBD

ABC Co. Link - description
XYZ Co. Link - description


Seeding Users & Content - TBD


Mockups - TBD

New Transaction Form View

Reports View
Others ... View ...

Tech Notes

Technologies
Front-end: HTML, CSS, JS, Bootstrap, EJS
buy fe template?
Backend: NodeJS, Mongoose, Express
Storage: mongoDB, Cloudinary, client-side browser (sessions & cookies)
Testing: Jest or Jasmine
Deployment: Heroku
RESTful URLs
External APIs: 
Authentication: Passport
Mockups/Wireframes: Figma
Package Management: NPM
Packages: joi, method-override, connect-flash, express-session, passport-local, passport, ejs-mate, mongoose, express, dotenv, cookie-parser, multer
Github

Models
Owner
user_name
first_name
last_name
email_address
REF: to business
array to allow multiple
Business
name
physical_address
REF: to owner
array to allow multiple
Client
user_name
first_name
last_name
email_address
REF: to business
array to allow multiple
client may be connecting to multiple businesses
REF: to owner
array to allow multiple
client may be connecting to multiple owners within a business or across different businesses
Transaction
transaction_id
different for each instance
transaction_type
Options: reference to another schema (service, product, etc) OR array of types
array of types: business_expense, client_revenue, other TDB


Service
service_id
different for each instance
service_category
array
service_name
array
service_price
service price can vary 
Product
product_id
different for each instance
Database Architecture





Go to Market - TBD

Reach Out to Local Salon Businesses - 
Offer MVP Service for First Adopters - 
Blog Post - 
Press Release -
Social Media - 
Other ...


Post-Launch Marketing - TBD

Product Deconstructions Blog Posts
Other ...

