import { MailIcon, MapIcon, PhoneIcon } from '@heroicons/react/outline';
import React from 'react';
import Contact from './Contact';
import { navigation } from './Menu';

export default function Example() {
  return (
    <footer className="bg-gray-800" aria-labelledby="footer-heading" id="footer">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="xl:grid xl:grid-cols-2 xl:gap-8">
          <div className="grid grid-cols-1 gap-8 xl:col-span-2">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Kontakt</h3>
                <ul role="list" className="mt-4 space-y-4">
                  <li className="flex">
                    <MailIcon className="h-6 text-white mr-2" />{' '}
                    <a href="#" className="text-base text-gray-300 hover:text-white">
                      lesecuriesduflecken@gmail.com
                    </a>
                  </li>
                  <li className="flex">
                    <PhoneIcon className="h-6 text-white mr-2" />{' '}
                    <a href="#" className="text-base text-gray-300 hover:text-white">
                      +33 00000000
                    </a>
                  </li>
                  <li className="flex">
                    <MapIcon className="h-6 text-white mr-2" />{' '}
                    <a href="#" className="text-base text-gray-300 hover:text-white">
                      22A Rue de Mattstall
                      <br /> 67510 Lembach
                    </a>
                  </li>
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Nachricht schreiben</h3>
                <Contact />
              </div>
              {/*    <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Navigation</h3>
                <ul role="list" className="mt-4 space-y-4">
                  {navigation.map((label, i) => (
                    <li key={i}>
                      <a href="#" className="text-base text-gray-300 hover:text-white">
                        {label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            */}{' '}
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-8 md:flex md:items-center md:justify-between">
          <div className="flex space-x-6 md:order-2">
            <a href="#" className="text-gray-400 hover:text-gray-300">
              <span className="sr-only">item</span>
              <FacebookIcon className="h-6 w-6" aria-hidden="true" />
            </a>
          </div>
          <p className="mt-8 text-base text-gray-400 md:mt-0 md:order-1">
            &copy; {new Date().getFullYear()} Les Ecuries du Flecken
          </p>
        </div>
      </div>
    </footer>
  );
}

function FacebookIcon(props) {
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
      <path
        fillRule="evenodd"
        d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
        clipRule="evenodd"
      />
    </svg>
  );
}
