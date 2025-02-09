import React from 'react';
import Section from './Section';
import { Card } from '@/components/ui/card';
import { NotepadText, NotepadTextDashedIcon, Tickets } from 'lucide-react';
import { SideProject, SideProjectProps } from './SideProject';
import { Work, WorkProps } from './Work';
import { ContactCard } from './ContactCard';

const SIDE_PROJECTS: SideProjectProps[] = [
  {
    Logo: NotepadText,
    title: "Invoice Management",
    description: "InVoice est une application web de gestion de factures développée avec Next.js et TypeScript.",
    url: "/"
  },
  {
    Logo: NotepadTextDashedIcon,
    title: "Invoice CSV",
    description: "Ce projet est une application web permettant aux utilisateurs de télécharger des fichiers CSV ou Excel contenant des données de facturation.",
    url: "/"
  },
  {
    Logo: Tickets,
    title: "Busticket",
    description: "Système de réservation et de suivi de voyages en bus",
    url: "https://github.com/Lyrecoph/busticket"
  }
];

const WORK: WorkProps[] = [
  {
    image: "GidLogo.png",
    title: "Gid Sarl",
    role: "Développeur web",
    date: "2021 - 2024",
  },
  {
    image: "InosoftLogo.jpeg",
    title: "Inosoft Technology",
    role: "Développeur web",
    date: "2020 - présent",
    freelance: true
  },
  {
    image: "https://media.licdn.com/dms/image/v2/D4E0BAQFBukqjZXjY4Q/company-logo_200_200/company-logo_200_200/0/1720803864087/inawo_logo?e=1747267200&v=beta&t=vJuMGq_o-uzmlWwwhr2S64WPbzPzptmN3icjHnZvVz4",
    title: "Inawo Technologies",
    role: "Développeur web",
    date: "2019 - 2020",
    url: "https://www.inawo.pro"
  }
];

const Status = () => {
  return (
    <Section className="flex flex-col gap-4">
      {/* Grille à deux colonnes pour harmoniser la largeur */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
        {/* Colonne de gauche : Side Projects */}
        <div>
          <Card className="w-full p-4 flex flex-col gap-4">
            <p className="text-lg text-muted-foreground">Mes projets.</p>
            <div className="flex flex-col gap-4">
              {SIDE_PROJECTS.map((project, index) => (
                <SideProject key={index} {...project} />
              ))}
            </div>
          </Card>
        </div>
        {/* Colonne de droite : Work & Contact */}
        <div className="flex flex-col gap-4">
          <Card className="p-4 flex flex-col gap-2">
            {WORK.map((work, index) => (
              <Work key={index} {...work} />
            ))}
          </Card>
          <Card className="p-4">
            <p className="text-lg text-muted-foreground">Contactez-moi</p>
            <div className="flex flex-col gap-4">
              <ContactCard 
                name="phidias25@gmail.com" 
                image="/Ph.JPG" 
                mediumImage='data:image/png;base64,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' 
                description="Envoyez-moi un email pour toute demande."
                url="mailto:phidias25@gmail.com"
              />
              <ContactCard 
                name="Phidias AHOUANDJINOU" 
                image="/Ph.JPG" 
                mediumImage='data:image/png;base64,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' 
                description='Suivez-moi sur LinkedIn' 
                url="https://www.linkedin.com/in/phidias-ahouandjinou-bb7086195/"
              />
            </div>
          </Card>
        </div>
      </div>
    </Section>
  );
}

export default Status;
