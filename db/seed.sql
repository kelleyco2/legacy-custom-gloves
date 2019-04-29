CREATE TABLE PRODUCT(
    id serial PRIMARY KEY,
    catigory varchar(15),
    size varchar(15),
    web_style varchar (30),
    hand varchar (30),
    info varchar (500)
)

CREATE TABLE CART(
    product_id integer references PRODUCT(id), b
    quantity Varchar(20) NOT NULL DEFAULT(0)
)

CREATE TABLE ORDERS(
    id serial primary key,
    product_id integer references PRONDUCT(id),
    customproduct_id integer references customproduct(id)
    cart_quantity integer references Cart(quantity),
    first_name varchar (20),
    last_name varchar (20),
    address varchar (30),
    phone_number varchar (300),
    email varchar(50),
    stripeId text
)

CREATE TABLE CUSTOMPRODUCT(
    id serial PRIMARY KEY,
    catigory varchar(15),
    size varchar(15),
    web_style varchar (30),
    hand varchar (30),
    zone1 varchar(15),
    zone2 varchar(15),
    zone3 varchar(15),
    zone4 varchar(15),
    zone5 varchar(15),
    zone6 varchar(15),
    zone7 varchar(15),
    zone8 varchar(15),
    zone9 varchar(15),
    zone10 varchar(15),
    zone11 varchar(15),
    info varchar (500)
)