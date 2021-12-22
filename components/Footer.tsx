import { MailIcon, MapIcon, PhoneIcon } from '@heroicons/react/outline';
import React, { useState } from 'react';
import { useLocales } from '../pages/api/useLocales';
import Contact from './Contact';
import { FacebookIcon } from './FacebookIcon';
import Impressum from './Impressum';
import Modal from './Modal';

// SCEA LES ECURIES DU FLECKEN
// SIRET 87946357800010

export default function Footer() {
  const [fr, de] = useLocales();
  const [open, setOpen] = useState(false);
  return (
    <footer className="bg-primary" aria-labelledby="footer-heading" id="footer">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="xl:grid xl:grid-cols-2 xl:gap-8">
          <div className="grid grid-cols-1 gap-8 xl:col-span-2">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                  {de && 'Kontakt'}
                  {fr && 'Contact'}
                </h3>
                <ul role="list" className="mt-4 space-y-4">
                  <li className="flex">
                    <MailIcon className="h-6 text-white mr-2" />{' '}
                    <a href="mailto:lesecuriesduflecken@gmail.com" className="text-base text-gray-300 hover:text-white">
                      lesecuriesduflecken@gmail.com
                    </a>
                  </li>
                  <li className="flex">
                    <PhoneIcon className="h-6 text-white mr-2" />{' '}
                    <a href="#" className="text-base text-gray-300 hover:text-white">
                      06 99 93 64 34 / 06 50 15 85 56
                    </a>
                  </li>
                  <li className="flex">
                    <MapIcon className="h-6 text-white mr-2" />{' '}
                    <a href="#" className="text-base text-gray-300 hover:text-white">
                      22A Rue de Mattstall
                      <br /> 67510 Lembach
                    </a>
                  </li>
                  <li className="flex">
                    <FacebookIcon className="h-6 w-6 text-white mr-2" aria-hidden="true" />
                    <a
                      href="https://www.facebook.com/Les-Ecuries-du-Flecken-107285571760209"
                      className="text-base text-gray-300 hover:text-white"
                      target="_blank"
                      rel="noreferrer"
                    >
                      facebook
                    </a>
                  </li>
                  <li className="flex">
                    <a
                      onClick={() => setOpen(true)}
                      className="cursor-pointer text-base text-gray-300 hover:text-white"
                    >
                      Impressum &amp; Datenschutzerklärung
                    </a>
                  </li>
                </ul>
              </div>
              <Modal open={open} onClose={() => setOpen(false)}>
                <Impressum />
              </Modal>
              <div className="mt-12 md:mt-0">
                {/* <ul role="list" className="mt-4 space-y-4">
                  <li className="flex">
                    <a onClick={() => setOpen(true)} className="cursor-pointer text-base text-gray-300 hover:text-white">
                      Impressum &amp; Datenschutzerklärung
                    </a>
                  </li>
                </ul> */}
                {/* <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                  {fr && 'Écrire un message'}
                  {de && 'Nachricht schreiben'}
                </h3>
                <Contact /> */}
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-8 md:flex md:items-center md:justify-between">
          {/* <div className="flex space-x-6 md:order-2">
            <a href="#" className="text-gray-400 hover:text-gray-300">
              <span className="sr-only">item</span>
              <FacebookIcon className="h-6 w-6" aria-hidden="true" />
            </a>
          </div> */}
          <p className="mt-8 text-base text-gray-400 md:mt-0 md:order-1">
            &copy; {new Date().getFullYear()} Les Ecuries du Flecken
          </p>
        </div>
      </div>
    </footer>
  );
}
