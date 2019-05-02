# Delete and Put Lecture

Starting with a base project to demo how to use GitHub. Expecting students to setup repo 15 mins prior to lecture.

[https://github.com/scottbromander/get-post-full/tree/delete-put-starter](https://github.com/scottbromander/get-post-full/tree/delete-put-starter)

dowload ZIP

- pushing to origin master (-u is updating the upstream)

## Getting Started

- npm start
    - notice dependency error
    - have to bring in dependencies
- npm install
- npm start
    - now you can see your 
- Create new nickname connection in postico
    - nickname "Restaurants"
- create database "restaurants"
    - cratedb restaurants
- create a new "restaurants" table
    ```
    CREATE TABLE "restaurants" (
        "id" serial primary key,
        "name" varchar(80) not null,
        "address" varchar(120) not null,
        "bestfood" varchar(80) 
    );
    ```
- insert new entries in the table
    ```
    INSERT INTO "restaurants" ("name", "address", "bestfood")
    VALUES ('Mother Cluckers', '1707 Locust St, Kansas City, MO 64108', 'Chicken Sandwich'),
        ('54th St Grill', '7200 NW 86th Terrace, Kansas City, MO 64153', 'Spicy Chicken Sandwich'),
        ('KC Taco Company', '520 Walnut St, Kansas City, MO 64106', 'Skillet Nachos');
    ```

## Deleting in Database

- Run SQL Query
    - DELETE FROM "restaurants" WHERE id='4';
    - painpoint is knowing which id to delete
- Client-side needs a unique identifier to talk to the database (when deleteing)
- Can only send data through a POST not a DELETE so how do we send the data needed to identify the item to be deleted?
- DELETE we will send information through the URL
    - "/restaurants/delete/1"
    - setting up using route parameters
    - '/restaurants' route is spent and left with '/delete/6' where 6 is the id clicked
    - we are going to use '/delete/:id' to pull in the 6 as our id value on the server

## Adding Column and Pactching Data

created new table "restaurants-test" 
update queries to reflect the new table
sort in ascending order by name
Add default false for posting a restaurant

## Branching
