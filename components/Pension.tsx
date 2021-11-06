import React from 'react';
import Anchor from './Anchor';
import Heading from './Heading';

const Spacer = () => <div className="py-4 md:py-6"></div>;
const Divider = () => <div className={`border-b-2 border-gray-100 py-2 md:py-6`} />;
const Centered = ({ children }) => <div className="flex flex-col md:items-center">{children}</div>;
const Slim = ({ children }) => <div className="max-w-lg">{children}</div>;

export default function Pension() {
  return (
    <>
      <Anchor id={'pension'} />
      <Centered>
        <Heading>Pension</Heading>
        <div className="prose">
          {/* <p>Pour chevaux et poneys, à partir de 260 € / mois</p> */}
          <p>Für Pferde und Ponies, ab 260€/Monat</p>
          {/* <p>Différents types d’hébergement (tous équipés d’abreuvoirs anti-gel) :</p> */}
          <p>Verschiedene Unterbringungsmöglichkeiten (alle ausgestattet mit frostsicheren Tränken)</p>
          <ul>
            {/* <li>En box (au minimum 3,5m x 4m – pouvant aller jusqu’à 5m x 5m)</li> */}
            <li>In der Box (von mindestens 3,5m x 4m bis 5m x5m)</li>
            {/* <li>En stabulation aménagée avec sciure et filet à foin</li> */}
            <li>Im Laufstall auf Späne mit Heunetz</li>
            {/* <li>En stabulation ouverte sur parcours</li> */}
            <li>Im Offenstall</li>
          </ul>
          {/* <p>Services compris:</p> */}
          <p>Wir Leisten</p>
          <p></p>
          <ul>
            <li>
              {/* <p>Foin matin et soir (entièrement produit sur la ferme)</p> */}
              <p>Heu morgens und abends (von unseren Wiesen)</p>
            </li>
            {/* <li>
              Distribution d'1 L d’orge aplati (ou aliment de la gamme St Hippolyt à un prix avantageux en supplément) -
              la distribution d’un aliment fourni par le propriétaire est non facturé. Les CMV – compléments minéraux et
            </li> */}
            <li>
              Fütterung mit 1l gequetschter Gerste (oder Futter der Marke St Hippolyt zum vergünstigten Preis) Fütterung
              von eigenem Futter ist kostenlos
            </li>
            {/* <li>vitaminés - sont à fournir par le propriétaire (une commande groupée - Reverdy- est possible)</li> */}
            <li>
              Mineral-und Vitaminfutter werden vom Besitzer selbst besorgt (eine Gruppenbestellung bei Reverdy ist
              möglich)
            </li>
            {/* <li>Mise à disposition de sel pour chaque cheval</li> */}
            <li>Salzlecksteine zur freien Verfügung </li>
            {/* <li>Un casier individuel</li> */}
            <li>Persönlicher Spind</li>
            {/* <li>Accès au manège éclairé et mise à disposition de plots, barres, chandeliers...</li> */}
            <li>Zugang zur lichtdurchfluteten Reithalle mit Stangen und anderem Bodenarbeitszubehör</li>
            {/* <li>
          Accès aux chemins de randonnées (badge pour accès au domaine fourni)
        </li> */}
            <li>Zugang zu Reitwegen im Wald (Ausweis für den Zugang zum Wald)</li>
            {/* <li>Sorties quotidiennes</li> */}
            <li>Regelmäßige Ausritte</li>
          </ul>

          {/* <p>Tous nos pensionnaires ont accès aux pâtures afin de vivre leur vie de cheval. </p> */}
          <p>Alle Pferde haben Zugang zu den Weiden um ein artgerechtes Leben führen zu können.</p>
          {/* <p>
            Nous offrons une vie en troupeau au minimum 6 mois dans l’année à nos pensionnaires. Chaque nouveau cheval
            est intégré progressivement. Pour les chevaux à problèmes (boiterie, embonpoint, fourbure,...), un accès
            restreint selon les besoins physiologiques est possible avec intégration dans un troupeau adapté.{' '}
          </p> */}
          <p>
            Wir bieten unseren Pensionspferden mindestens 6 Monate Herdenhaltung auf der Weide im Jahr. Jedes neue Pferd
            wird langsam in die bestehende Herde integriert. Für Pferde mit körperlichen Problemen (Lahmheit,
            Übergewicht, Hufrehe...) besteht die Möglichkeit auf begrenzeten Weidezugang in einer passenden Herde.
          </p>
          {/* <p>
            A la fin de la belle saison (mi-octobre, début novembre), les chevaux regagnent progressivement leurs
            quartiers d’hiver. Les sorties – comprises dans le prix de pension – sont quotidiennes en hiver (en paddock
            ou manège suivant la météo).
          </p> */}
          <p>
            Geht die milde Jahreszeit zu Ende (Mitte Oktober, Anfang November), ziehen die Pferde langsam in ihr
            Winterquartier um. Je nach Wetter dürfen die Pferde zusammen auf den Paddock oder in die Halle.
          </p>
          {/* <h2>Pension retraite et pension poulains/jeunes chevaux</h2> */}
          <h2>Pension für Rentnerpferde oder Fohlen / Jungpferde</h2>
          {/* <p>
            Vous souhaitez confier votre compagnon à quatre pattes afin qu’il soit entre de bonnes mains, accompagné et
            bichonné pour une retraite paisible ? Ou bien, vous souhaitez que votre poulain – ou jeune cheval - profite
            d'une vie avec ses congénères, en troupeau pendant sa croissance ? Nous mettons notre savoir-faire au
            service de votre animal, et avons exactement ce dont vous et, surtout, votre cheval avez besoin.{' '}
          </p> */}
          <p>
            Möchten Sie Ihren vierbeinigen Freund während seiner Rente in guten Händen wissen? Oder möchten Sie, dass
            ihr Fohlen / Jungpferd mit seinen Artgenossen in der Herde aufwächst? Wir setzen für Ihr Tier unser ganzes
            Savoir Faire ein und geben ihm genau das was es braucht.
          </p>
          {/* <p>Une pension tout compris à un tarif préférentiel ! (renseignements au 06 99 93 64 34 )</p> */}
          {/* <p>Services compris :</p> */}
          <p>Wir leisten</p>
          <ul>
            {/* <li>Vermifuges deux fois par an</li> */}
            <li>Wurmkur 2 mal im Jahr</li>
            {/* <li>
              Foin à volonté (filet à foin pour réguler les plus gourmands, et étaler l’affouragement sur la journée)
            </li> */}
            <li>Heu nach Belieben (in Heunetzen, um die Mahlzeit auf den Tag zu verteilen)</li>
            {/* <li>
              Compléments minéraux et vitaminés. Et si besoin, en complément, alimentation adaptée aux besoins du cheval
              (âge, corpulence, ...) de la gamme St Hippolyt.
            </li> */}
            <li>
              Mineral- und Vitaminfutter oder eine spezeill an die Bedürfnisse des Pferdes (Alter,
              Körperbau,...)angepasste Ernährung mit Futtermitteln von St Hippolyt
            </li>
            {/* <li>Parage des sabots (max. 8 par an)</li> */}
            <li>Beschneiden der Hufe (bis zu acht mal im Jahr)</li>
            {/* <li>Soins d'entretien hebdomadaire (brossage, nettoyage des sabots)</li> */}
            <li>Wöchentliche Körperpflege (Bürsten, Hufe auskratzen...)</li>
            {/* <li>Soins vétérinaires (si blessures, traitements, ou suite à visite vétérinaire)</li> */}
            <li>Tierärztliche Versorgung (bei Verletzungen, Nachuntersuchungen oder anderen Behandlungen) </li>
            {/* <li>
              Manipulation du poulain/jeune cheval (désensibilisation - renforcement positif) et travail éthologique au
              sol (selon les besoins – embarquement en van, ...){' '}
            </li> */}
            <li>
              Arbeit mit dem Fohlen oder Jungpferd (Desenibilisierung-positive Verstärkung) Bodenarbeit (nach Bedarf-
              Verladetraining, etc.)
            </li>
            {/* <li>Nouvelles hebdomadaires de votre cheval (vidéos et photos)</li> */}
            <li>Wöchentlich Neuigkeiten in Form von Videos und Fotos</li>
            {/* <li>
              Hébergement en stabulation – parcours, avec accès au pré. Accès au minimum 6 mois dans l’année à la vie en
              troupeau sur plusieurs hectares.
            </li> */}

            <li>
              Unterbringung im Offenstall mit Zugang zur Koppel. Mindestens sechs Monate im Jahr Herdenhaltung auf
              mehreren Hektar Weidefläche.{' '}
            </li>
          </ul>
          {/* <h2>Pension juments gestantes - poulinage</h2> */}
          <h2>Pension für trächtige Stuten -Abfohlüberwachung </h2>
          {/* <p>
            Pour préparer la venue d’un poulain en toute sérénité. Nous nous chargeons de la surveillance et de
            l’accompagnement des juments gestantes, leur prodiguant les soins nécessaires. Et ce jusqu’au poulinage et
            sevrage du poulain.
          </p> */}
          <p>
            Um die Ankunft eine Fohlens in aller Ruhe vorzubereiten, begleiten und überwachen wir trächtige Stuten und
            gewährleisten so die nötige Pflege. Und das bis zum Abfohlen und späteren Absetzen des Fohlens.
          </p>
          {/* <p>Tarifs et renseignements au 06 99 93 64 34</p> */}
          <p>Preise und Infos unter +33 69993634</p>
        </div>
      </Centered>
    </>
  );
}
