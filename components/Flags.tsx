import Link from 'next/link';
import React from 'react';
import { useLocales } from '../pages/api/useLocales';

export function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export const LanguageSwitcher = () => {
  const [fr, de] = useLocales();
  const avatar = 'w-8 h-8 rounded-md overflow-hidden gap-0';
  const activeStyle = 'border-2 border-primary';
  const inactiveStyle = 'border-2 border-gray-200';
  return (
    <div className="flex space-x-2">
      <Link href="/fr">
        <a className={classNames(avatar, 'grid grid-cols-3 bg-red-600', fr ? activeStyle : inactiveStyle)}>
          <div className="bg-blue-900"></div>
          <div className="bg-white"></div>
          <div className="bg-red-600"></div>
        </a>
      </Link>
      <Link href="/de">
        <a className={classNames(avatar, 'grid grid-rows-3', de ? activeStyle : inactiveStyle)}>
          <div className="bg-black"></div>
          <div className="bg-red-600"></div>
          <div className="bg-yellow-400"></div>
        </a>
      </Link>
    </div>
  );
};
