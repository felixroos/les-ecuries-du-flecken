import React from 'react';
import { Parallax } from 'react-scroll-parallax';
import Heading from './Heading';
import Anchor from './Anchor';

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
  return <img src={src} alt={alt} className={`${className || ''}`} />;
  /* </Parallax> */
};

export default function Services() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-2 items-center">
      <Service heading="Tourisme équestre / Wanderreiten" className="row-start-2 md:row-start-1" id="wanderreiten">
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
        </p>
        <button className="mt-6 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-black bg-secondary hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
          Jetzt anfragen
        </button>
      </Service>
      <ServiceImage alt="" src="./img/wanderreiten.png" />

      <ServiceImage alt="" src="./img/box.jpg" />
      <Service heading="Pension / Pferdepension">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat.
        </p>
        <button className="mt-6 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-black bg-secondary hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
          Jetzt anfragen
        </button>
      </Service>
      <Service heading="Elevage / Zucht" id="zucht">
        <p>
          Notre passion, nous la vivons également au travers de l’élevage. Attendu pour le printemps 2022, nous avons
          hâte de découvrir notre premier poulain de race Quarter Horse. Nous en profitons ici pour remercier toutes les
          personnes ayant contribué à la recherche et à la sélection de notre première jument Quarter Horse....et des
          prochaines !
        </p>
        <p>
          Vous aurez aussi l’occasion de voir nos vaches de race Vosgienne au détour d’une pâture. Un petit cheptel nous
          permettant d’entretenir nos belles pâtures (elles mangent les zones de refus laissées par les chevaux). Ce
          système d’éco-pâturage contribue au maintien d’une merveilleuse biodiversité sur notre domaine.
        </p>
        <button className="mt-6 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-black bg-secondary hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
          Jetzt anfragen
        </button>
      </Service>
      <ServiceImage alt="" src="./img/enjoy.jpg" className="row-start-5 md:row-start-3 md:col-start-2" />
      {/*   */}
    </div>
  );
}
