import React from 'react';
import ContactForm from '../components/ContactForm';
import Header from './Header';
import Footer from './Footer';

const Contact = () => {
  const handleFormSubmit = () => {
    
    console.log('Form submitted!');
  };

  return (
    <div className="container mt-5">
    <Header />
    
        <div className="text-center">
      <h2>Contact Us</h2>
      <p>Feel free to reach out to us with any questions or concerns.</p>
      <ContactForm onSubmit={handleFormSubmit} />
      </div>
    <Footer />
    </div>
  );
};

export default Contact;
