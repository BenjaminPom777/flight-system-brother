-- insert into Countries table
INSERT INTO Countries (Id, Name) 
VALUES 
(1, 'Israel'),
(2, 'United States'),
(3, 'United Kingdom'),
(4, 'France'),
(5, 'United Arab Emirates');


-- insert into Airlines table
INSERT INTO Airlines (Id, Name, Country_Id) 
VALUES 
(1, 'El Al', 1),
(2, 'United Airlines', 2),
(3, 'British Airways', 3),
(4, 'Air France', 4),
(5, 'Emirates', 5);



-- insert into Flights table
INSERT INTO Flights (id, Airline_Id, Origin_Country_Id, Destination_Country_Id, Departure_Time, Landing_Time, Remaining_Tickets) 
VALUES 
(1,1, 1, 2, '2023-05-10 08:30:00', '2023-05-10 12:00:00', 150),
(2,2, 2, 3, '2023-05-11 12:00:00', '2023-05-11 15:30:00', 250),
(3,3, 3, 4, '2023-05-12 15:30:00', '2023-05-12 18:45:00', 50),
(4,4, 4, 5, '2023-05-13 06:15:00', '2023-05-13 11:00:00', 100),
(5,5, 5, 1, '2023-05-14 22:00:00', '2023-05-15 03:30:00', 75);

-- insert into Customers table
INSERT INTO Customers (Id, First_Name, Last_Name, Address, Phone_No, Credit_Card_No, Username, password) 
VALUES 
(1, 'John', 'Doe', '123 Main St, Anytown USA', '555-1234', '1234-5678-9012-3456', 'John', '1234'),
(2, 'Jane', 'Doe', '456 Oak St, Anytown USA', '555-5678', '5678-9012-3456-1234', 'Jane' , '1234'),
(3, 'Bob', 'Smith', '789 Maple Ave, Anytown USA', '555-9012', '9012-3456-1234-5678', 'Bob' , '1234'),
(4, 'Alice', 'Jones', '321 Elm St, Anytown USA', '555-3456', '3456-1234-5678-9012', 'Alice', '1234'),
(5, 'David', 'Brown', '654 Pine St, Anytown USA', '555-6789', '6789-0123-4567-8901', 'David', '1234');

-- insert into Tickets table
INSERT INTO Tickets (Id, Flight_Id, Customer_Id) 
VALUES 
(1, 1, 1),
(2, 2, 2),
(3, 3, 3),
(4, 4, 4),
(5, 5, 5);



-- Insert data into the Administrators table
INSERT INTO Administrators (Id, Username, Password)
VALUES 
(1, 'admin1', 'password1'),
(2, 'admin2', 'password2'),
(3, 'admin3', 'password3'),
(4, 'admin4', 'password4'),
(5, 'admin5', 'password5');