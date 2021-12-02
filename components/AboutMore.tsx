import React from 'react';
import { useLocales } from '../pages/api/useLocales';
import Anchor from './Anchor';
import Heading from './Heading';

const Spacer = () => <div className="py-4 md:py-6"></div>;
const Divider = () => <div className={`border-b-2 border-gray-100 py-2 md:py-6`} />;
const Centered = ({ children }) => <div className="flex flex-col md:items-center">{children}</div>;
const Slim = ({ children }) => <div className="max-w-lg">{children}</div>;

export default function AboutMore() {
  const [fr, de] = useLocales();
  return (
    <>
      <Anchor id={'about'} />
      <Centered>
        <Heading>
          {de && 'Über Uns'}
          {fr && 'Présentation'}
        </Heading>
        <div className="prose">
          <p>
            Les Ecuries du Flecken ont été rachetées en décembre 2019 par Hélène et Sylvain. Depuis, de nombreuses
            améliorations ont été apportées, et plusieurs projets s’apprêtent encore à voir le jour.
          </p>
          <p>
            Le système de litière permanente, qui existait jusqu’alors, a été totalement supprimée. Les stabulations ont
            été repensées, et une stabulation-parcours a été aménagée. Récemment le sol du manège a également été refait
            à neuf.
          </p>
          <p>
            Passionnés depuis l’enfance et propriétaires de chevaux depuis de nombreuses années, nous nous sommes formés
            (Licence professionnelle “Management et Gestion des entreprises de la filière équine” et Galop 7 pour
            Hélène, accompagnateur tourisme équestre (en cours) et Galop 5 d’attelage pour Sylvain) et avons développé
            notre savoir-faire au contact de professionnels (stage gestion de la reproduction et poulinage au Haras de
            Hus, stage de horsemanship avec Andy Booth, …).
          </p>
          <p>
            Compétiteurs dans notre jeunesse (CSO, concours complet, TREC), mais randonneurs dans l’âme, nous partageons
            notre goût pour les chevaux, la nature, le terroir et la découverte de paysages à cheval.
          </p>
          <p>
            Leidenschaftliche Reiter sind wir seit unserer Kindheit und viele Jahre halten wir nun auch selbst Pferde.
            Seither bilden wir uns stetig weiter: Hélène hat die Berufslizenz zur Pferdewirtin („Management et Gestion
            des entreprises de la filière équine“) und den Galop 7, Sylvain den Galop 5 im Fahren und absolviert zur
            Zeit seine Ausbildung zum Wanderrittführer. Verfeinert haben wir unser Savoir-faire während diverser
            Praktika im professionellen Bereich, wie im Zuchtbetrieb des Haras de Hus und beim Horsemanship-Lehrgang bei
            Andy Booth.
          </p>
          <p>
            In unserer Jugend haben wir unser Können auf Springturnieren, Vielseitigkeits- und Orientierungsritten
            gemessen, im Herzen sind wir aber Wanderreiter.
          </p>
          <p>
            Unsere Freude an Pferden und unsere Liebe zur Natur möchten wir mit Ihnen teilen und hoch zu Ross die Gegend
            entdecken und die traumhaften Landschaften der Nordvogesen genießen.
          </p>
        </div>
      </Centered>
    </>
  );
}
