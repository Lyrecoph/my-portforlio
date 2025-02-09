import React from 'react';
import Section from './Section';
import { buttonVariants } from '@/components/ui/button';
import GithubIcon from './icons/GithubIcon';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import LinkedInIcon from './icons/LinkedInIcon';

const Header = () => {
  return (
    <header className="sticky top-0 py-4">
      <Section className="flex items-center justify-between">
        <h1 className="text-lg font-bold text-primary">Site sur lequel je me le portforlio</h1>
        <ul className="flex items-center gap-2">
          <Link
            href="https://github.com/Lyrecoph"
            className={cn(buttonVariants({ variant: 'outline' }), "size-6 p-0")}
          >
            <GithubIcon size={12} className="text-foreground" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/phidias-ahouandjinou-bb7086195/"
            className={cn(buttonVariants({ variant: 'outline' }), "size-6 p-0")}
          >
            <LinkedInIcon size={12} className="text-foreground" />
          </Link>
          {/* <Link
            href="https://github.com/Lyrecoph"
            className={cn(buttonVariants({ variant: 'outline' }), "size-6 p-0")}
          >
            <GithubIcon size={12} className="text-foreground" />
          </Link> */}
        </ul>
      </Section>
    </header>
  );
}

export default Header;
