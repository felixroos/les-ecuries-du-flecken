import React from 'react';
import Heading from './Heading';
import Anchor from './Anchor';
import { useLocales } from '../pages/api/useLocales';
import Img from './Img';
import wanderreiten from '../public/img/wanderreiten.jpg.webp';
import box from '../public/img/gallery/box.jpg.webp';
import cocosaddled from '../public/img/cocosaddled.jpg.webp';

const Service = ({ heading, children, className, id }: any) => (
  <>
    <div className={`py-8 md:p-6 ${className || ''}`}>
      {id && <Anchor id={id} />}
      <Heading>{heading}</Heading>
      <div className="text-lg">{children}</div>
    </div>
  </>
);

const ServiceImage = ({ src, alt, className }: any) => {
  /* <Parallax className="overflow-hidden" y={[-16, 16]} tagOuter="figure"> */
  return <Img src={src} alt={alt} className={`${className || ''}`} />;
  /* </Parallax> */
};

export default function Services() {
  const [fr, de] = useLocales();
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-2 items-center">
      <Service
        heading={
          <>
            {fr && 'Tourisme équestre'}
            {de && 'Wanderreiten'}
          </>
        }
        className="row-start-2 md:row-start-1"
        id="wanderreiten-teaser"
      >
        {fr && (
          <p>
            Notre structures équestre, labellisée &quot;Tourisme Équestre&quot;, est le point de départ de nombreux
            sentiers de randonnées. N’hésitez pas à nous demander conseil pour organiser votre séjour.
          </p>
        )}
        {de && (
          <p>
            Gelegen im Herzen des UNESCO-Biosphärenreservats Pfälzerwald-Nordvogesen ist unser mit dem „Centre de
            Tourisme Équestre“-Label ausgezeichneter Hof Ausgangspunkt für viele Wandertouren. Fragen Sie uns bei der
            Planung Ihres Wanderritts gerne um Rat!
          </p>
        )}
        {/* 
        <p>
          Située dans le magnifique Parc naturel régional des Vosges du Nord, notre structure équestre est le point de
          départ de nombreux sentiers de randonnées. Etape-clé du circuit “Entre l’Alsace et la Moselle” (
          <a href="https://alsaceacheval.com/itineraires/circuit-entre-lalsace-et-la-moselle/">
            https://alsaceacheval.com/itineraires/circuit-entre-lalsace-et-la-moselle/
          </a>
          ), vous pourrez vous émerveiller devant les ruines des châteaux, chevaucher sur des sentiers où la beauté de
          la nature et un monde enchanteur et féérique se côtoient. Hélène et Sylvain sont référents pour ce circuit
          élaboré par le comité régional de tourisme équestre du Grand Est et le comité de tourisme équestre Alsace.
          N’hésitez pas à nous demander conseil pour organiser votre séjour (hébergements, tracés) !
        </p>
        <p>Hébergement : 15€/cheval/nuit.</p>
        <p>
          Notre gîte étant momentanément non ouvert à la réservation, plusieurs gîtes et hôtels peuvent héberger nos
          randonneurs à Lembach. Un projet de développement touristique est en cours sur notre structure. Vous en saurez
          bientôt plus ! En attendant : possibilité de bivouac sur la ferme, et organisation de soirées à thème pour les
          grands groupes.
        </p> */}
        <a
          href="#wanderreiten"
          className="mt-6 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-black bg-secondary hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
        >
          {de && 'Mehr erfahren'}
          {fr && 'En savoir plus'}
        </a>
      </Service>
      <ServiceImage alt="" src={wanderreiten.src} />

      <ServiceImage alt="" src={box.src} />
      <Service
        heading={
          <>
            {fr && 'Pension'}
            {de && 'Pferdepension'}
          </>
        }
      >
        {fr && (
          <p>
            Pour chevaux et poneys, jeunes chevaux, poulains, poulinières, retraités.... Nous nous adaptons aux besoins
            de votre compagnon. L&apos;idéal? C&apos;est d&apos;en discuter ensemble pour trouver la meilleure solution!
          </p>
        )}
        {de && (
          <p>
            Für Pferde, Ponies, Jungpferde, Fohlen, Zuchtstuten, Rentner… Wir passen uns den Bedürfnissen Ihres
            Gefährten an. Unser Ziel? Im Gespräch gemeinsam die beste Lösung zu finden!
          </p>
        )}
        <a
          href="#pension"
          className="mt-6 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-black bg-secondary hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
        >
          {de && 'Mehr erfahren'}
          {fr && 'En savoir plus'}
        </a>
      </Service>
      <Service
        heading={
          <>
            {fr && 'Elevage'}
            {de && 'Zucht'}
          </>
        }
        id="zucht-teaser"
      >
        {fr && (
          <>
            <p>
              Notre passion, nous la vivons également au travers de l’élevage. Attendu pour le printemps 2022, nous
              avons hâte de découvrir notre premier poulain de race Quarter Horse.
            </p>
            <p>
              Vous aurez aussi l’occasion de voir nos vaches de race Vosgienne au détour d’une pâture. Elles participent
              à l’entretien des prés. Ce système d’éco-pâturage contribue au maintien d’une merveilleuse biodiversité
              sur notre domaine.
            </p>
          </>
        )}
        {de && (
          <>
            <p>
              Unsere Leidenschaft leben wir auch in der Zucht. Im Frühling 2022 erwarten wir unser erstes Quarter Horse
              Fohlen.
            </p>
            <p>
              Auf einem Umweg über die Weide können Sie außerdem unsere Vogeser Kühe bewundern. Unsere Wiederkäuer
              helfen uns beim Instandhalten der Wiese und tragen so zu einer höheren Biodiversität bei.
            </p>
          </>
        )}
      </Service>
      <ServiceImage alt="" src={cocosaddled.src} className="row-start-5 md:row-start-3 md:col-start-2" />
    </div>
  );
}
