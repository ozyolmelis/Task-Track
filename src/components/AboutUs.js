import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const AboutUs = () => {
  return (
    
    <div className="container mt-5">
        <Header />
      <h2>About Us</h2>
      <p>Welcome to our Task Track website! We are passionate about productivity and organization, and we created this platform to help individuals and teams manage their tasks efficiently.</p>
      
      <p>At Task Track, we believe that a well-organized task management system can greatly improve productivity and reduce stress. Our goal is to provide a user-friendly and feature-rich solution for all your task management needs.</p>
      
      <p className="mb-4">Key Features:</p>
      <ul>
        <li>Intuitive task creation and management</li>
        <li>Prioritization and categorization of tasks</li>
        <li>Collaboration features for team projects</li>
        <li>Deadline reminders and notifications</li>
      </ul>

      <p>We understand that everyone has unique ways of working, so our platform is designed to be flexible and customizable to suit your preferences. Whether you're a student, professional, or team leader, Task Track is here to streamline your workflow.</p>

      <p className="mt-4">Thank you for choosing Task Track for your task management needs. If you have any questions or feedback, feel free to reach out to us through our <a href="/contact">Contact</a> page.</p>
      <Footer />
    </div>
    
  );
};

export default AboutUs;
