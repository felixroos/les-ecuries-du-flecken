import React from 'react';
import { useLocales } from '../pages/api/useLocales';
import Anchor from './Anchor';
import ContactButton from './ContactButton';
import Heading from './Heading';
import Img from './Img';
import wanderreiten2 from '../public/img/wanderreiten2.png';

const Spacer = () => <div className="py-4 md:py-6"></div>;
const Divider = () => <div className={`border-b-2 border-gray-100 py-2 md:py-6`} />;
const Centered = ({ children }) => <div className="flex flex-col md:items-center">{children}</div>;
const Slim = ({ children }) => <div className="max-w-lg">{children}</div>;

export default function TrailRiding() {
  const [fr, de] = useLocales();
  return (
    <>
      <Anchor id={'wanderreiten'} />
      <Centered>
        <Heading>
          {de && 'Wanderreiten'}
          {fr && 'Tourisme Equestre'}
        </Heading>
        <div className="prose">
          <Img src={wanderreiten2.src} className="rounded-xl mx-auto mb-4" alt="" layout="responsive" />
          {fr && (
            <p>
              Etape-clé du circuit{' '}
              <a
                href="https://alsaceacheval.com/itineraires/circuit-entre-lalsace-et-la-moselle/"
                target="_blank"
                rel="noreferrer"
              >
                “Entre l’Alsace et la Moselle”
              </a>
              , vous pourrez vous émerveiller devant les ruines des châteaux, chevaucher sur des sentiers où beauté de
              la nature et un monde enchanteur et féérique se côtoient.
            </p>
          )}
          {de && (
            <p>
              TODO: Etape-clé du circuit{' '}
              <a
                href="https://alsaceacheval.com/itineraires/circuit-entre-lalsace-et-la-moselle/"
                target="_blank"
                rel="noreferrer"
              >
                “Entre l’Alsace et la Moselle”
              </a>
              , vous pourrez vous émerveiller devant les ruines des châteaux, chevaucher sur des sentiers où beauté de
              la nature et un monde enchanteur et féérique se côtoient.
            </p>
          )}
          {fr && (
            <p>
              Hélène et Sylvain sont référents pour ce circuit élaboré par le comité régional de tourisme équestre du
              Grand Est et le comité de tourisme équestre Alsace.
            </p>
          )}
          {de && (
            <p>
              TODO: Hélène et Sylvain sont référents pour ce circuit élaboré par le comité régional de tourisme équestre
              du Grand Est et le comité de tourisme équestre Alsace.
            </p>
          )}
          {fr && <p>Hébergement (box ou paddock – foin, eau et 1L de concentrés) 15€/cheval/nuit.</p>}
          {de && (
            <p>Unterbringung und Verpflegung (Box oder Paddock- Heu, Wasser und 1l Kraftfutter) 15€/Pferd/Nacht</p>
          )}
          {fr && (
            <p>
              Notre gîte étant momentanément non ouvert à la réservation, plusieurs gîtes et hôtels peuvent héberger nos
              randonneurs à Lembach. Un projet de développement touristique est en cours sur notre structure. Vous en
              saurez bientôt plus!
            </p>
          )}
          {de && (
            <p>
              Unsere Ferienwohnung steht derzeit leider nicht zur Verfügung, in Lembach laden jedoch zahlreiche Hotels
              und Ferienwohnungen zur Übernachtung ein.
            </p>
          )}
          {de && <p>TODO: Wir arbeiten derzeit daran, bald auch Gäste</p>}
          {fr && (
            <p>
              En attendant: possibilité de bivouac sur la ferme, et organisation de soirées à thème pour les grands
              groupes.
            </p>
          )}
          {de && (
            <p>
              TODO: En attendant: possibilité de bivouac sur la ferme, et organisation de soirées à thème pour les
              grands groupes.
            </p>
          )}
        </div>
        <ContactButton />
      </Centered>
    </>
  );
}
