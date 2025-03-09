import React from "react";
import { useLocales } from "../pages/api/useLocales";
import Anchor from "./Anchor";
import ContactButton from "./ContactButton";
import Heading from "./Heading";
import Img from "./Img";
import offenstall from "../public/img/offenstall.jpg.webp";
import jaziaschlafend from "../public/img/jaziaschlafend.jpg.webp";
import enjoy from "../public//img/enjoy.jpg.webp";

const Spacer = () => <div className="py-4 md:py-6"></div>;
const Divider = () => (
  <div className={`border-b-2 border-gray-100 py-2 md:py-6`} />
);
const Centered = ({ children }) => (
  <div className="flex flex-col md:items-center">{children}</div>
);
const Slim = ({ children }) => <div className="max-w-lg">{children}</div>;

export default function Pension() {
  const [fr, de] = useLocales();
  return (
    <>
      <Anchor id={"pension"} />
      <Centered>
        <Heading>Pension</Heading>
        <div className="prose">
          <Img
            src={offenstall.src}
            className="rounded-xl mx-auto mb-4"
            alt=""
            layout="responsive"
          />
          {fr && <p>Renseignements et tarifs, nous consulter</p>}
          {de && <p>Auskünfte und Preise auf Anfrage</p>}
        </div>
        <ContactButton>
          {de && "Jetzt kontaktieren"}
          {fr && "Contactez nous"}
        </ContactButton>
        <div className="prose">
          {fr && <h2>Pension retraite et pension poulains/jeunes chevaux</h2>}
          {de && <h2>Pension für Rentnerpferde oder Fohlen / Jungpferde</h2>}
          <Img
            src={jaziaschlafend.src}
            className="rounded-xl mx-auto mb-4"
            alt=""
            layout="responsive"
          />
          {fr && (
            <p>
              Vous souhaitez nous confier votre compagnon à quatre pattes afin
              qu’il soit entre de bonnes mains, accompagné et bichonné pour une
              retraite paisible ? Vous souhaitez que votre poulain – ou jeune
              cheval - profite d&apos;une vie avec ses congénères, en troupeau
              pendant sa croissance ? Nous mettons notre savoir-faire au service
              de votre animal, et avons exactement ce dont vous et, surtout,
              votre cheval, avez besoin.
            </p>
          )}
          {de && (
            <p>
              Möchten Sie Ihren vierbeinigen Freund während seiner Rente in
              guten Händen wissen? Oder möchten Sie, dass ihr Fohlen / Jungpferd
              mit seinen Artgenossen in der Herde aufwächst? Wir setzen für Ihr
              Tier unser ganzes Savoir Faire ein und geben ihm genau das was es
              braucht.
            </p>
          )}
          {/* <p>Une pension tout compris à un tarif préférentiel ! (renseignements au 06 99 93 64 34 )</p> */}
          {fr && <p>Services compris:</p>}
          {de && <p>Wir bieten:</p>}
          <ul>
            {fr && <li>Vermifuges deux fois par an</li>}
            {de && <li>Wurmkur 2 mal im Jahr</li>}
            {fr && (
              <li>
                Foin à volonté (filet à foin pour réguler les plus gourmands, et
                étaler l’affouragement sur la journée)
              </li>
            )}
            {de && (
              <li>
                Heu nach Belieben (in Heunetzen, um die Mahlzeit auf den Tag zu
                verteilen)
              </li>
            )}
            {fr && (
              <li>
                Aliments adaptés aux besoins du cheval fournis (âge, corpulence,
                ...) de la gamme St Hippolyt. Compléments minéraux et vitaminés
                (en supplément).
              </li>
            )}
            {de && (
              <li>
                Mineral- und Vitaminfutter oder eine speziell an die Bedürfnisse
                des Pferdes (Alter, Körperbau...) angepasste Ernährung mit
                Futtermitteln von St Hippolyt
              </li>
            )}
            {fr && <li>Parage des sabots max. 8 fois par an</li>}
            {de && <li>Ausschneiden der Hufe bis zu acht mal im Jahr</li>}
            {fr && (
              <li>
                Soins d&apos;entretien hebdomadaire (brossage, nettoyage des
                sabots)
              </li>
            )}
            {de && (
              <li>Wöchentliche Körperpflege (Bürsten, Hufe auskratzen...)</li>
            )}
            {fr && <li>Soins vétérinaires</li>}
            {de && <li>Tierärztliche Versorgung</li>}
            {fr && (
              <li>
                Manipulation du poulain/jeune cheval (désensibilisation -
                renforcement positif) et travail éthologique au sol (selon les
                besoins – embarquement en van, ...){" "}
              </li>
            )}
            {de && (
              <li>
                Arbeit mit dem Fohlen oder Jungpferd (Desensibilisierung durch
                positive Verstärkung) Bodenarbeit nach Bedarf, z.B.
                Verladetraining
              </li>
            )}
            {fr && (
              <li>
                Nouvelles hebdomadaires de votre cheval (vidéos et photos)
              </li>
            )}
            {de && (
              <li>Wöchentlich Neuigkeiten in Form von Videos und Fotos</li>
            )}
            {fr && (
              <li>
                Hébergement en stabulation – parcours, ou stabulation intérieure
                avec accès au pré. Vie en groupe.
              </li>
            )}
            {de && (
              <li>
                Unterbringung im Offenstall mit Zugang zur Koppel. Leben in der
                Herde.
              </li>
            )}
          </ul>
        </div>
        <ContactButton>
          {de && "Preise auf Anfrage"}
          {fr && "Tarifs sur demande"}
        </ContactButton>
        <div className="prose">
          {fr && <h2>Pension juments gestantes - poulinage</h2>}
          {de && <h2>Pension für trächtige Stuten -Abfohlüberwachung </h2>}
          <Img
            src={enjoy.src}
            className="rounded-xl mx-auto mb-4"
            alt=""
            layout="responsive"
          />
          {fr && (
            <p>
              Pour préparer la venue d’un poulain en toute sérénité. Nous nous
              chargeons de la surveillance et de l’accompagnement des juments
              gestantes, leur prodiguant les soins nécessaires. Et ce jusqu’au
              poulinage et sevrage du poulain.
            </p>
          )}
          {de && (
            <p>
              Um die Ankunft eine Fohlens in aller Ruhe vorzubereiten, begleiten
              und überwachen wir trächtige Stuten und gewährleisten so die
              nötige Pflege. Und das bis zum Abfohlen und späteren Absetzen des
              Fohlens.
            </p>
          )}
        </div>
        <ContactButton>
          {de && "Preise auf Anfrage"}
          {fr && "Tarifs sur demande"}
        </ContactButton>
      </Centered>
    </>
  );
}
