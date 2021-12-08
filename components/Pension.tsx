import React from 'react';
import { useLocales } from '../pages/api/useLocales';
import Anchor from './Anchor';
import ContactButton from './ContactButton';
import Heading from './Heading';
import Img from './Img';
import offenstall from '../public/img/offenstall.png';
import jaziaschlafend from '../public/img/jaziaschlafend.png';
import enjoy from '../public//img/enjoy.jpg';

const Spacer = () => <div className="py-4 md:py-6"></div>;
const Divider = () => <div className={`border-b-2 border-gray-100 py-2 md:py-6`} />;
const Centered = ({ children }) => <div className="flex flex-col md:items-center">{children}</div>;
const Slim = ({ children }) => <div className="max-w-lg">{children}</div>;

export default function Pension() {
  const [fr, de] = useLocales();
  return (
    <>
      <Anchor id={'pension'} />
      <Centered>
        <Heading>Pension</Heading>
        <div className="prose">
          <Img src={offenstall.src} className="rounded-xl mx-auto mb-4" alt="" layout="responsive" />
          {fr && <p>Pour chevaux et poneys, à partir de 260 € / mois</p>}
          {de && <p>Für Pferde und Ponies, ab 260€/Monat</p>}
          {fr && <p>Différents types d’hébergement (tous équipés d’abreuvoirs anti-gel):</p>}
          {de && <p>Verschiedene Unterbringungsmöglichkeiten (alle ausgestattet mit frostsicheren Tränken)</p>}
          <ul>
            {fr && <li>En box (au minimum 3,5m x 4m – pouvant aller jusqu’à 5m x 5m)</li>}
            {de && <li>In der Box (von mindestens 3,5m x 4m bis 5m x5m)</li>}
            {fr && <li>En stabulation aménagée avec sciure et filet à foin</li>}
            {de && <li>Im Laufstall auf Späne mit Heunetz</li>}
            {fr && <li>En stabulation ouverte sur parcours</li>}
            {de && <li>Im Offenstall</li>}
          </ul>
          {fr && <p>Services compris:</p>}
          {de && <p>Wir leisten</p>}
          <p></p>
          <ul>
            <li>
              {fr && <p>Foin matin et soir (entièrement produit sur la ferme)</p>}
              {de && <p>Heu morgens und abends (von unseren Wiesen)</p>}
            </li>
            {fr && (
              <li>
                Distribution d&apos;1 L d’orge aplati (ou aliment de la gamme St Hippolyt à un prix avantageux en
                supplément) - la distribution d’un aliment fourni par le propriétaire est non facturé. Les CMV –
                compléments minéraux et vitaminés - sont à fournir par le propriétaire (une commande groupée - Reverdy-
                est possible)
              </li>
            )}
            {de && (
              <li>
                Fütterung mit 1l gequetschter Gerste (oder Futter der Marke St Hippolyt zum vergünstigten Preis)
                Fütterung von eigenem Futter ist kostenlos. Mineral-und Vitaminfutter werden vom Besitzer selbst besorgt
                (eine Gruppenbestellung bei Reverdy ist möglich)
              </li>
            )}
            {fr && <li>Mise à disposition de sel pour chaque cheval</li>}
            {de && <li>Salzlecksteine zur freien Verfügung </li>}
            {fr && <li>Un casier individuel</li>}
            {de && <li>Persönlicher Spind</li>}
            {fr && <li>Accès au manège éclairé et mise à disposition de plots, barres, chandeliers...</li>}
            {de && <li>Zugang zur lichtdurchfluteten Reithalle mit Stangen und anderem Bodenarbeitszubehör</li>}
            {fr && <li>Accès aux chemins de randonnées (badge pour accès au domaine fourni)</li>}
            {de && <li>Zugang zu Reitwegen im Wald (Ausweis für den Zugang zum Wald)</li>}
            {fr && <li>Sorties quotidiennes</li>}
            {de && <li>Täglicher Auslauf</li>}
          </ul>

          {fr && <p>Tous nos pensionnaires ont accès aux pâtures afin de vivre leur vie de cheval. </p>}
          {de && <p>Alle Pferde haben Zugang zu den Weiden um ein artgerechtes Leben führen zu können.</p>}
          {fr && (
            <p>
              Nous offrons une vie en troupeau au minimum 6 mois dans l’année à nos pensionnaires. Chaque nouveau cheval
              est intégré progressivement. Pour les chevaux à problèmes (boiterie, embonpoint, fourbure,...), un accès
              restreint selon les besoins physiologiques est possible avec intégration dans un troupeau adapté.{' '}
            </p>
          )}
          {de && (
            <p>
              Wir bieten unseren Pensionspferden mindestens 6 Monate Herdenhaltung auf der Weide im Jahr. Jedes neue
              Pferd wird langsam in die bestehende Herde integriert. Für Pferde mit körperlichen Problemen (Lahmheit,
              Übergewicht, Hufrehe...) besteht die Möglichkeit auf begrenzten Weidezugang in einer passenden Herde.
            </p>
          )}
          {fr && (
            <p>
              A la fin de la belle saison (mi-octobre, début novembre), les chevaux regagnent progressivement leurs
              quartiers d’hiver. Les sorties – comprises dans le prix de pension – sont quotidiennes en hiver (en
              paddock ou manège suivant la météo).
            </p>
          )}
          {de && (
            <p>
              Geht die milde Jahreszeit zu Ende (Mitte Oktober, Anfang November), ziehen die Pferde langsam in ihr
              Winterquartier um. Je nach Wetter dürfen die Pferde täglich zusammen auf den Paddock oder in die Halle.
            </p>
          )}
        </div>
        <ContactButton />
        <div className="prose">
          {fr && <h2>Pension retraite et pension poulains/jeunes chevaux</h2>}
          {de && <h2>Pension für Rentnerpferde oder Fohlen / Jungpferde</h2>}
          <Img src={jaziaschlafend.src} className="rounded-xl mx-auto mb-4" alt="" layout="responsive" />
          {fr && (
            <p>
              Vous souhaitez confier votre compagnon à quatre pattes afin qu’il soit entre de bonnes mains, accompagné
              et bichonné pour une retraite paisible ? Ou bien, vous souhaitez que votre poulain – ou jeune cheval -
              profite d&apos;une vie avec ses congénères, en troupeau pendant sa croissance ? Nous mettons notre
              savoir-faire au service de votre animal, et avons exactement ce dont vous et, surtout, votre cheval avez
              besoin.
            </p>
          )}
          {de && (
            <p>
              Möchten Sie Ihren vierbeinigen Freund während seiner Rente in guten Händen wissen? Oder möchten Sie, dass
              ihr Fohlen / Jungpferd mit seinen Artgenossen in der Herde aufwächst? Wir setzen für Ihr Tier unser ganzes
              Savoir Faire ein und geben ihm genau das was es braucht.
            </p>
          )}
          {/* <p>Une pension tout compris à un tarif préférentiel ! (renseignements au 06 99 93 64 34 )</p> */}
          {fr && <p>Services compris :</p>}
          {de && <p>Wir leisten</p>}
          <ul>
            {fr && <li>Vermifuges deux fois par an</li>}
            {de && <li>Wurmkur 2 mal im Jahr</li>}
            {fr && (
              <li>
                Foin à volonté (filet à foin pour réguler les plus gourmands, et étaler l’affouragement sur la journée)
              </li>
            )}
            {de && <li>Heu nach Belieben (in Heunetzen, um die Mahlzeit auf den Tag zu verteilen)</li>}
            {fr && (
              <li>
                Compléments minéraux et vitaminés. Et si besoin, en complément, alimentation adaptée aux besoins du
                cheval (âge, corpulence, ...) de la gamme St Hippolyt.
              </li>
            )}
            {de && (
              <li>
                Mineral- und Vitaminfutter oder eine speziell an die Bedürfnisse des Pferdes (Alter,
                Körperbau...) angepasste Ernährung mit Futtermitteln von St Hippolyt
              </li>
            )}
            {fr && <li>Parage des sabots (max. 8 par an)</li>}
            {de && <li>Ausschneiden der Hufe (bis zu acht mal im Jahr)</li>}
            {fr && <li>Soins d&apos;entretien hebdomadaire (brossage, nettoyage des sabots)</li>}
            {de && <li>Wöchentliche Körperpflege (Bürsten, Hufe auskratzen...)</li>}
            {fr && <li>Soins vétérinaires (si blessures, traitements, ou suite à visite vétérinaire)</li>}
            {de && <li>Tierärztliche Versorgung (bei Verletzungen, Nachuntersuchungen oder anderen Behandlungen) </li>}
            {fr && (
              <li>
                Manipulation du poulain/jeune cheval (désensibilisation - renforcement positif) et travail éthologique
                au sol (selon les besoins – embarquement en van, ...){' '}
              </li>
            )}
            {de && (
              <li>
                Arbeit mit dem Fohlen oder Jungpferd (Desenibilisierung-positive Verstärkung) Bodenarbeit (nach Bedarf-
                Verladetraining, etc.)
              </li>
            )}
            {fr && <li>Nouvelles hebdomadaires de votre cheval (vidéos et photos)</li>}
            {de && <li>Wöchentlich Neuigkeiten in Form von Videos und Fotos</li>}
            {fr && (
              <li>
                Hébergement en stabulation – parcours, avec accès au pré. Accès au minimum 6 mois dans l’année à la vie
                en troupeau sur plusieurs hectares.
              </li>
            )}
            {de && (
              <li>
                Unterbringung im Offenstall mit Zugang zur Koppel. Mindestens sechs Monate im Jahr Herdenhaltung auf
                mehreren Hektar Weidefläche.{' '}
              </li>
            )}
          </ul>
        </div>
        <ContactButton />
        <div className="prose">
          {fr && <h2>Pension juments gestantes - poulinage</h2>}
          {de && <h2>Pension für trächtige Stuten -Abfohlüberwachung </h2>}
          <Img src={enjoy.src} className="rounded-xl mx-auto mb-4" alt="" layout="responsive" />
          {fr && (
            <p>
              Pour préparer la venue d’un poulain en toute sérénité. Nous nous chargeons de la surveillance et de
              l’accompagnement des juments gestantes, leur prodiguant les soins nécessaires. Et ce jusqu’au poulinage et
              sevrage du poulain.
            </p>
          )}
          {de && (
            <p>
              Um die Ankunft eine Fohlens in aller Ruhe vorzubereiten, begleiten und überwachen wir trächtige Stuten und
              gewährleisten so die nötige Pflege. Und das bis zum Abfohlen und späteren Absetzen des Fohlens.
            </p>
          )}
        </div>
        <ContactButton />
      </Centered>
    </>
  );
}
