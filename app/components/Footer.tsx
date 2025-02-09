import React from 'react';
import Section from './Section';

const Footer = () => {
  return (
    <footer className='bg-card'>
        <Section className='py-8'>
            <p className='text-muted-foreground text-sm'>@Copywrite { new Date().getFullYear()} Phidias AHOUANDJINOU</p>
        </Section>
    </footer>
  );
}

export default Footer;
