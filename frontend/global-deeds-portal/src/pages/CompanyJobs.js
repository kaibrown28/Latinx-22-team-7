import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useToken } from '../auth/useToken';
import axios from 'axios'
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';


export const CompanyJobs = () => {
    const jobs = [
        {
            description:"We need help creating a sign-up site for students.",
            company:"Company A",
            pointOfContact:"John Smith",
            skillsNeeded:"HTML, CSS, experience with webforms",
        },    
        {
            description:"Tutor needed for 5th grade students.",
            company:"Company B",
            pointOfContact:"Josh John",
            skillsNeeded:"Tutoring, explaining, working with children",
        },
        
        {
            description:"Community Outreach -  help us spread the word about a ballot initiative.",
            company:"Company C",
            pointOfContact:"David Josh",
            skillsNeeded:"Customer Service, Explaining, Civic Engagement",
        },    
    ]

    const listJobs = () =>{
        <div>
            <ul>{jobs.map(description => <li>{description}</li>)}</ul>
            <ul>{jobs.map(company => <li>{company}</li>)}</ul>
            <ul>{jobs.map(pointOfContact => <li>{pointOfContact}</li>)}</ul>
            <ul>{jobs.map(skillsNeeded => <li>{skillsNeeded}</li>)}</ul>
        </div>
    }
    return (
        <>
        
        <Container>
            
            <Card>
                <div>
                listJobs
                </div>
                
            </Card>

        </Container>
        
    
        </>
        )
};