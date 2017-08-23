/* DROP TABLE Person; */
/* CREATE TABLE Person 
(ID INTEGER PRIMARY KEY AUTOINCREMENT, Name TEXT, Age INTEGER, Height INTEGER, City VARCHAR, FavoriteColor VARCHAR); */
 
/* INSERT INTO Person
(Name, Age, Height, City, FavoriteColor)
VALUES ('Blake', 20, 500, 'Alpine', 'blue'),('Bob', 21, 550, 'Draper', 'red'),('Bill', 19, 540, 'Draper', 'red'),('Adam', 21, 530, 'Draper', 'blue'),('Kyle', 20, 550, 'Highland', 'green'); */
 
/*3*/
/* SELECT * FROM Person
ORDER BY Height ASC; */

/*4*/
/* Select * FROM Person
ORDER BY Height DESC; */

/*5*/
/* SELECT * FROM Person
ORDER BY Age DESC; */

/*6*/
/* SELECT * FROM Person
WHERE Age > 20; */

/*7*/
/* SELECT * FROM Person
WHERE Age = 18; */

/*8*/
/* SELECT * FROM Person
WHERE Age NOT BETWEEN 20 AND 30; */

/*9*/
/* SELECT * FROM Person
WHERE Age != 27; */

/*10*/
/* SELECT * FROM Person
WHERE FavoriteColor != 'red'; */

/*11*/
/* SELECT * FROM Person
WHERE FavoriteColor != 'red' AND FavoriteColor != 'blue'; */

/*12*/
/* SELECT * FROM Person
WHERE FavoriteColor != 'orange' AND FavoriteColor != 'green'; */

/*13*/
/* SELECT * FROM Person
WHERE FavoriteColor IN ('orange','green','blue'); */

/*14*/
/* SELECT * FROM Person
WHERE FavoriteColor IN ('yellow','purple'); */


/*1*/
/* CREATE TABLE Orders
(PersonID INTEGER PRIMARY KEY AUTOINCREMENT , ProductName TEXT, ProductPrice FLOAT, Quantity INTEGER); */

/*INSERT INTO Orders
(ProductName, ProductPrice, Quantity)
VALUES ('Cheerios',7.95,5),('Frost Flakes',6.55,15),('Corn Chomps',8.95,10),('Knockoff Bubs',1.95,45),('Premium Bubs',17.95,12),('Frosted Sugar Bombs',6.95,19); */

/*3*/
/* SELECT * FROM Orders; */

/*4*/
/* SELECT sum(Quantity) FROM Orders; */

/*5*/
/* SELECT sum(ProductPrice) FROM Orders; */

/*6*/
/* SELECT sum(ProductPrice) FROM Orders
WHERE PersonID = 1; */

/* ARTISTS TABLE */
/* INSERT INTO Artist
(Name)
VALUES ('Bob Marley'),('Phil Ivey'),('Marlon Brando'); */

/*2*/
/* SELECT Name FROM Artist
ORDER BY Name DESC LIMIT 10; */

/*3*/
/* SELECT Name FROM Artist
ORDER BY Name LIMIT 5; */

/*4*/
/* SELECT * FROM Artist
WHERE Name LIKE 'Black%'; */

/*5*/
/* SELECT * FROM Artist
WHERE Name LIKE '%Black%'; */



/* Employee Table */

/* SELECT FirstName, LastName FROM Employee
WHERE City = 'Calgary'; */

/*2*/
/* SELECT FirstName, LastName, BirthDate FROM Employee
ORDER BY BirthDate DESC; */

/*3*/
/* SELECT FirstName, LastName, BirthDate FROM Employee
ORDER BY BirthDate ASC; */

/*4*/
/* SELECT * FROM Employee
WHERE ReportsTo = 2; */

/*5*/
/* SELECT count(*) FROM Employee
WHERE City = 'Lethbridge'; */

/* TABLE Invoice */

/* SELECT count(*) FROM Invoice
WHERE BillingCountry = 'USA'; */

/*2*/
/* SELECT * FROM Invoice
ORDER BY Total DESC; */

/*3*/
/* SELECT * FROM Invoice
ORDER BY Total ASC; */

/*4*/
/* SELECT * FROM Invoice
WHERE Total > 5; */

/*5*/
/* SELECT count(*) FROM Invoice
WHERE Total < 5; */

/*6*/
/* SELECT count(*) FROM Invoice
WHERE BillingState IN ('CA','TX','AZ'); */

/*7*/
/* SELECT avg(Total) FROM Invoice; */

/*8*/
/*SELECT sum(Total) FROM Invoice; */
/* DROP TABLE Orders; */
SELECT * FROM Invoice;
