create database flight_system;
use flight_system;

CREATE TABLE Countries (
Id INTEGER PRIMARY KEY AUTO_INCREMENT,
Name VARCHAR(255) NOT NULL
);


CREATE TABLE Airlines (
Id INTEGER PRIMARY KEY AUTO_INCREMENT,
Name VARCHAR(255) NOT NULL,
Country_Id INTEGER NOT NULL
);


CREATE TABLE Flights (
Id INTEGER PRIMARY KEY AUTO_INCREMENT,
Airline_Id INTEGER NOT NULL,
Origin_Country_Id INTEGER NOT NULL,
Destination_Country_Id INTEGER NOT NULL,
Departure_Time DATETIME NOT NULL,
Landing_Time DATETIME NOT NULL,
Remaining_Tickets INTEGER NOT NULL,
FOREIGN KEY (Airline_Id) REFERENCES Airlines(Id),
FOREIGN KEY (Origin_Country_Id) REFERENCES Countries(Id),
FOREIGN KEY (Destination_Country_Id) REFERENCES Countries(Id)
);

CREATE TABLE Customers (
Id INTEGER PRIMARY KEY AUTO_INCREMENT,
First_Name VARCHAR(255) NOT NULL,
Last_Name VARCHAR(255) NOT NULL,
Address VARCHAR(255) NOT NULL,
Phone_No VARCHAR(255) NOT NULL,
Credit_Card_No VARCHAR(255) NOT NULL,
Username VARCHAR(255) NOT NULL,
Password VARCHAR(255) NOT NULL
);

CREATE TABLE Tickets (
Id INTEGER PRIMARY KEY AUTO_INCREMENT,
Flight_Id INTEGER NOT NULL,
Customer_Id INTEGER NOT NULL,
UNIQUE(Flight_Id, Customer_Id),
FOREIGN KEY (Flight_Id) REFERENCES Flights(Id)
ON DELETE CASCADE,
FOREIGN KEY (Customer_Id) REFERENCES Customers(Id)
);


CREATE TABLE Administrators (
Id INTEGER PRIMARY KEY AUTO_INCREMENT,
Username VARCHAR(255) NOT NULL,
Password VARCHAR(255) NOT NULL
);