create database employeedb;

use employeedb;

create table Employee_Table (id int PRIMARY KEY, name varchar(50), email varchar(50), password varchar(50), emp_id int, dname varchar(50), doj DATE);


insert into Employee_Table values (100, 'Masood Ahmad', 'masood@lab.com', 'masood@123', 500, 'dev', '2019-11-01' );
insert into Employee_Table values (101, 'Shivam Kumar', 'shivam@lab.com', 'shivam@123', 501, 'dev', '2018-06-01' );

insert into Employee_Table values (102, 'Vaibhav Shinde', 'vaibhav@lab.com', 'vaibhav@123', 502, 'test', '2020-05-01' );
insert into Employee_Table values (103, 'Harsh Honm', 'harsh@lab.com', 'harsh@123', 503, 'test', '2021-07-01' );


