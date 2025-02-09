/* eslint-disable @next/next/no-img-element */
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export const ContactCard = (props: {
  image: string;
  mediumImage: string;
  name: string;
  description: string;
  url?: string;
  className?: string;
}) => {
  return (
    <Link href={props.url || "#"} className={cn("w-full", props.className)}>
      {/* On impose ici une hauteur fixe (par exemple h-24) */}
      <Card className="p-3 bg-accent/10 hover:bg-accent/30 transition-colors group flex items-center gap-4 h-24">
        {/* Image principale */}
        <div className="relative w-10 h-10 flex-shrink-0">
          <img
            src={props.image}
            alt={props.name}
            className="w-10 h-10 rounded-full object-contain"
          />
          <img
            src={props.mediumImage}
            alt={props.name}
            className="w-4 h-4 absolute -bottom-1 -right-1 rounded-full object-contain"
          />
        </div>
        {/* Conteneur textuel avec gestion du débordement */}
        <div className="flex-1 overflow-hidden">
          <div className="flex items-center gap-2">
            <p className="text-lg font-semibold truncate">{props.name}</p>
          </div>
          <p className="text-xs text-muted-foreground truncate">{props.description}</p>
        </div>
        {/* Icône positionnée à l'extrémité droite */}
        <ArrowUpRight
          className="ml-auto group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform"
          size={16}
        />
      </Card>
    </Link>
  );
};
