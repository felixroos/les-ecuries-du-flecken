import React from 'react';
import Anchor from './Anchor';

const Spacer = () => <div className="py-4 md:py-6"></div>;
const Divider = () => <div className={`border-b-2 border-gray-100 py-2 md:py-6`} />;
const Centered = ({ children }) => <div className="flex flex-col md:items-center">{children}</div>;
const Slim = ({ children }) => <div className="max-w-lg">{children}</div>;

export default function Pension() {
  return (
    <>
      <Anchor id={'pension'} />
      <p>Pour chevaux et poneys, à partir de 260 € / mois</p>
      <p>Différents types d’hébergement (tous équipés d’abreuvoirs anti-gel) :</p>
      <p>
        En box (au minimum 3,5m x 4m – pouvant aller jusqu’à 5m x 5m) En stabulation aménagée avec sciure et filet à
        foin En stabulation ouverte sur parcours
      </p>
      <p>Services compris : </p>
      <ul>
        <li>
          <p>Foin matin et soir (entièrement produit sur la ferme)</p>
        </li>
        <li>
          <p>
            Distribution d&#39;1 L d’orge aplati (ou aliment de la gamme St Hippolyt à un prix avantageux en supplément)
            - la distribution d’un aliment fourni par le propriétaire est non facturé. Les CMV – compléments minéraux et
            vitaminés - sont à fournir par le propriétaire (une commande groupée - Reverdy- est possible)
          </p>
          <ul>
            <li>Mise à disposition de sel pour chaque cheval</li>
          </ul>
        </li>
        <li>
          <p>Un casier individuel</p>
        </li>
        <li>
          <p>Accès au manège éclairé et mise à disposition de plots, barres, chandeliers...</p>
        </li>
        <li>
          <p>Accès aux chemins de randonnées (badge pour accès au domaine fourni)</p>
        </li>
        <li>
          <p>Sorties quotidiennes</p>
        </li>
      </ul>
      <p>Tous nos pensionnaires ont accès aux pâtures afin de vivre leur vie de cheval. </p>
      <p>
        Nous offrons une vie en troupeau au minimum 6 mois dans l’année à nos pensionnaires. Chaque nouveau cheval est
        intégré progressivement. Pour les chevaux à problèmes (boiterie, embonpoint, fourbure,...), un accès restreint
        selon les besoins physiologiques est possible avec intégration dans un troupeau adapté.{' '}
      </p>
      <p>
        A la fin de la belle saison (mi-octobre, début novembre), les chevaux regagnent progressivement leurs quartiers
        d’hiver. Les sorties – comprises dans le prix de pension – sont quotidiennes en hiver (en paddock ou manège
        suivant la météo).
      </p>
      <ul className="list-inside">
        <li>classique</li>
        <li>chevaux retraites</li>
        <li>poulains / jeunes chevaux</li>
        <li>poulinage</li>
      </ul>
    </>
  );
}
