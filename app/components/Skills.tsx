import React from 'react';
import Section from './Section';
import { Badge } from '@/components/ui/badge';
import DjangoIcon from './icons/DjangoIcon';
import ReactIcon from './icons/ReactIcon';
import { Code } from './Code';
import TailwindCSSIcon from './icons/TailwindCSSIcon';

const Skills = () => {
  return (
    // On ajoute "relative" pour que l'élément absolu se positionne correctement
    <Section className="relative flex flex-col items-start gap-6">
      {/* Gradient positionné sur le côté droit */}
      <div
        className="absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-[#22c55e] to-transparent opacity-30 pointer-events-none"
        aria-hidden="true"
      ></div>

      <Badge variant="outline">Compétences</Badge>
      <h2 className="pb-2 text-3xl font-semibold tracking-tight">
        J&apos;adore travailler sur...
      </h2>

      {/* Conteneur des compétences */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
        {/* Bloc Django */}
        <div className="flex flex-col items-start text-left">
          <span className="bg-accent text-accent-foreground p-4 rounded-sm">
            <DjangoIcon size={42} />
          </span>
          <h3 className="text-xl font-semibold mt-2">Django</h3>
          <p className="text-sm text-muted-foreground">
            Mon framework principal est <Code>Django</Code>. Il me permet de développer des backends robustes et scalables, et il constitue la base solide de mes projets.
          </p>
        </div>

        {/* Bloc React & Next.js */}
        <div className="flex flex-col items-start text-left">
          <span className="bg-accent text-accent-foreground p-4 rounded-sm">
            <ReactIcon
              size={42}
              className="animate-spin"
              style={{ animationDuration: "10s" }}
            />
          </span>
          <h3 className="text-xl font-semibold mt-2">React & Next.js</h3>
          <p className="text-sm text-muted-foreground">
            Dès mes premiers pas avec <Code>React</Code> et <Code>Next.js</Code>, 
            j&apos;ai découvert une véritable passion pour le développement front-end.
            Ce qui m&apos;a particulièrement séduit, c&apos;est la polyvalence de <Code>Next.js</Code> : il me permet de construire un frontend moderne et interactif 
            tout en assurant un backend performant. Grâce à cet écosystème, 
            j&apos;utilise des outils intégrés qui rendent le développement  
            rapide et efficace, que ce soit côté client ou côté serveur.
          </p>
        </div>

        {/* Bloc TailwindCSS */}
        <div className="flex flex-col items-start text-left">
          <span className="bg-accent text-accent-foreground p-4 rounded-sm">
            <TailwindCSSIcon size={42} />
          </span>
          <h3 className="text-xl font-semibold mt-2">TailwindCSS</h3>
          <p className="text-sm text-muted-foreground">
            Grâce à <Code>TailwindCSS</Code>, 
            je peux concevoir rapidement des interfaces élégantes 
            et responsives qui complètent parfaitement mes projets, 
            qu&apos;ils soient développés en <Code>Django</Code> ou en front-end 
            avec <Code>React</Code> et <Code>Next.js</Code>.
          </p>
        </div>
      </div>
    </Section>
  );
}

export default Skills;
