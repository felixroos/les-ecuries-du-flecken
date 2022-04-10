/* This example requires Tailwind CSS v2.0+ */
import { Popover, Transition } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import React, { Fragment } from 'react';
import { isContext } from 'vm';
import { useLocales } from '../pages/api/useLocales';
import { LanguageSwitcher } from './Flags';
import Img from './Img';
import icon from '../public/img/logo2.png.webp';

//  className="flex items-center"

export default function Menu() {
  const [fr, de] = useLocales();
  const navigation = [
    ...(!de
      ? []
      : [
          { label: 'Unser Hof', id: 'hof' },
          { label: 'Wanderreiten', id: 'wanderreiten' },
          { label: 'Pension', id: 'pension' },
          { label: 'Über Uns', id: 'about' },
          { label: 'Kontakt', id: 'footer' },
        ]),
    ...(!fr
      ? []
      : [
          { label: 'Nos Installations', id: 'hof' },
          { label: 'Tourisme Équestre', id: 'wanderreiten' },
          { label: 'Pension', id: 'pension' },
          { label: 'Qui sommes-nous ?', id: 'about' },
          { label: 'Contact', id: 'footer' },
        ]),
  ];
  return (
    <div className="fixed w-full z-10">
      <Popover className="relative bg-white z-10">
        <div className="border-b-2 border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-4">
            <div className="flex justify-between items-center py-6 lg:justify-start lg:space-x-10">
              <div className="flex justify-start lg:w-0 lg:flex-1 items-center">
                <a href="#" className="flex items-center">
                  <span className="sr-only">Les Écuries du Flecken</span>
                  <Img className="h-8 w-auto" src={icon.src} alt="" width={8} height={8} />
                  <h1 className="ml-2 text-md">Les Écuries du Flecken</h1>
                </a>
              </div>
              <div className="-mr-2 -my-2 lg:hidden">
                <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-900 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-secondary">
                  <span className="sr-only">Open menu</span>
                  <MenuIcon className="h-6 w-6" aria-hidden="true" />
                </Popover.Button>
              </div>
              <Popover.Group as="nav" className="hidden lg:flex space-x-6 items-center">
                {navigation.map(({ label, id }, i) => (
                  <a
                    key={i}
                    href={`#${id}`}
                    className="text-base font-medium hover:text-primary hover:underline text-gray-900"
                  >
                    {label}
                  </a>
                ))}
                <LanguageSwitcher />
              </Popover.Group>
            </div>
          </div>

          <Transition
            as={Fragment}
            enter="duration-200 ease-out"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="duration-100 ease-in"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Popover.Panel
              focus
              className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right lg:hidden"
            >
              {({ close }) => (
                <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
                  <div className="pt-5 pb-6 px-5">
                    <div className="flex items-center justify-between">
                      <div>
                        <Img className="h-8 w-auto" src={icon.src} alt="Les Écuries du Flecken" />
                      </div>
                      <div className="-mr-2">
                        <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-secondary">
                          <span className="sr-only">Close menu</span>
                          <XIcon className="h-6 w-6" aria-hidden="true" />
                        </Popover.Button>
                      </div>
                    </div>
                  </div>
                  <div className="py-6 px-5 space-y-6">
                    <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                      {navigation.map(({ label, id }, i) => (
                        <Fragment key={i}>
                          <a
                            href={`#${id}`}
                            onClick={() => {
                              close();
                            }}
                            className="text-base font-medium text-gray-900 hover:text-gray-700 col-start-1"
                          >
                            {label}
                          </a>
                          {!i && (
                            <div className="col-start-2 place-self-end">
                              <LanguageSwitcher />
                            </div>
                          )}
                        </Fragment>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </Popover.Panel>
          </Transition>
        </div>
      </Popover>
    </div>
  );
}
