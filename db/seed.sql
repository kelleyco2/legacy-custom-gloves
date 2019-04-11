CREATE TABLE PRODUCT(
    id serial PRIMARY KEY,
    glove_size integer,
    web_style varchar (30),
    hand varchar (30),
    info varchar (500)
)

CREATE TABLE CART(
    product_id integer references PRODUCT(id),
    quantity Varchar(20) NOT NULL DEFAULT(0)
)

CREATE TABLE ORDERS(
    id serial primary key,
    product_id integer references PRONDUCT(id),
    cart_quantity integer references Cart(quantity),
    first_name varchar (20),
    last_name varchar (20),
    address varchar (30),
    phone_number varchar (300),
    email varchar(50),
    stripeId text
)