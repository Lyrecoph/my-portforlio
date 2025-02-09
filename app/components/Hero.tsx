/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Section from './Section';
import GithubIcon from './icons/GithubIcon';
import Link from 'next/link';
import { Code } from './Code';

const Hero = () => {
  return (
    <Section className="flex max-md:flex-col items-start gap-4">
      <div className='flex-[3] w-full flex flex-col gap-2'>
        <h2 className='font-caption font-bold text-3xl text-primary'>Phidias AHOUANDJINOU</h2>
        <h3 className='text-2xl font-caption'>Développeur web</h3>
        <p className="text-base">
          Développeur passionné et curieux, j&apos;explore sans cesse de nouvelles technologies pour donner vie à des projets innovants et ambitieux. Retrouvez mes réalisations, contributions open source et collaborations sur&nbsp;
          <Link href="https://github.com/Lyrecoph">
            <Code className="inline-flex items-center gap-1">
              <GithubIcon size={16} className="inline" />
              GitHub
            </Code>
          </Link>.
        </p>
      </div>
      <div className='flex-[2] max-md:m-auto ml-auto'>
        <img 
            src='Ph.JPG'  
            alt='phidias picture'
            className="w-32 h-auto max-w-xs max-md:w-56 rounded-full"
        />
      </div>
    </Section>
  );
}

export default Hero;
