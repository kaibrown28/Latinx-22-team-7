-- student database
CREATE DATABASE students;

CREATE TABLE student(
    student_id SERIAL PRIMARY KEY,
    name VARCHAR (50),
    image VARCHAR(500),
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
    essay varchar(500),
    skills VARCHAR(255),
    aboutMe VARCHAR(255) 
);

CREATE TABLE projects(
    project_id SERIAL PRIMARY KEY,
    description VARCHAR(255),
    video VARCHAR(500),

);

-- company database
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
    rating int,
);

CREATE TABLE jobs(
    job_id SERIAL PRIMARY KEY,
    description VARCHAR(255),
    pointOfContact VARCHAR(50),
    skillsNeeded VARCHAR(50),
);

-- teacher database
-- school database