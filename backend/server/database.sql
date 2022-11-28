CREATE DATABASE students;

CREATE TABLE student(
    student_id SERIAL PRIMARY KEY,
    name VARCHAR (50),
    email VARCHAR(50),
    gender boolean NULL,
    age int,
    ethnicity text,
    phone int,
    school VARCHAR(50),
    schoolWebsite VARCHAR(50),
    interests VARCHAR(255),
    hasParticipated VARCHAR(255),
    awards VARCHAR(255),
    income VARCHAR(255),
    essay varchar(500) 
);

CREATE DATABASE companies;
CREATE TABLE company(
    company_id SERIAL PRIMARY KEY,
    website VARCHAR(50)
    country text,
    usState text,
    city text,
    zipCode text,
    address VARCHAR(100),
    expertise VARCHAR(255),
    description VARCHAR(255),
    hasOpportunities boolean NULL,
);

CREATE TABLE jobs(
    job_id SERIAL PRIMARY KEY,
    description VARCHAR(255),
    pointOfContact VARCHAR(50),
    skillsNeeded VARCHAR(50)

);