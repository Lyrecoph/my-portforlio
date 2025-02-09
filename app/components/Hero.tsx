/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Section from './Section';
import GithubIcon from './icons/GithubIcon';
import Link from 'next/link';
import { Code } from './Code';

const Hero = () => {
  return (
    // Ajout de "relative" ici pour que les éléments absolus se positionnent par rapport à ce conteneur
    <Section className="relative flex max-md:flex-col items-start gap-4">
      {/* Gradient en haut */}
      <div
        className="absolute inset-x-0 top-10 -z-10 transform-gpu overflow-hidden blur-3xl"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%+3rem)] aspect-1155/678 w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#22c55e] to-[#059669] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        ></div>
      </div>

      <div className="flex-[3] w-full flex flex-col gap-2">
        <div className="relative">
          <div className="transform-gpu blur-3xl">
            <div
              className="absolute z-10 w-56 h-64 bg-gradient-to-tr from-[#65a873] to-[#059669]"
              style={{
                clipPath:
                  "polygon(25% 0%, 75% 0%, 99% 19%, 70% 75%, 25% 100%, 3% 40%)",
              }}
            ></div>
            <h2 className="font-caption font-bold text-3xl text-primary">
              Phidias AHOUANDJINOU
            </h2>
          </div>
        </div>
        <h3 className="text-2xl font-caption">Développeur web</h3>
        <p className="text-base">
          Développeur passionné et curieux, j&apos;explore sans cesse de nouvelles
          technologies pour donner vie à des projets innovants et ambitieux. Retrouvez
          mes réalisations, contributions open source et collaborations sur&nbsp;
          <Link href="https://github.com/Lyrecoph">
            <Code className="inline-flex items-center gap-1">
              <GithubIcon size={16} className="inline" />
              GitHub
            </Code>
          </Link>.
        </p>
      </div>
      <div className="flex-[2] max-md:m-auto ml-auto">
        <img
          src="Ph.JPG"
          alt="phidias picture"
          className="w-32 h-auto max-w-xs max-md:w-56 rounded-full"
        />
      </div>
    </Section>
  );
};

export default Hero;
