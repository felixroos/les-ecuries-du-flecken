/* This example requires Tailwind CSS v2.0+ */
import { ColorSwatchIcon, RefreshIcon } from '@heroicons/react/solid';
import { SparklesIcon } from '@heroicons/react/solid';
import { CheckIcon, ThumbUpIcon, UserIcon } from '@heroicons/react/solid';

const timeline = [
  {
    id: 1,
    content: 'Übernahme des Hofes',
    target: 'Wir sind voller Ideen Tatendrang',
    href: '#',
    date: 'November 2020',
    datetime: '2020-09-20',
    icon: SparklesIcon,
    iconBackground: 'bg-yellow-400',
  },
  {
    id: 2,
    content: 'Neugestaltung der Boxen',
    target: 'Jetzt ist alles viel sauberer und besser',
    href: '#',
    date: 'Dezember 20020',
    datetime: '2020-09-22',
    icon: RefreshIcon,
    iconBackground: 'bg-blue-500',
  },
  {
    id: 3,
    content: '27 neue Ferienwohnungen gebaut',
    target: '',
    href: '#',
    date: 'Januar 2020',
    datetime: '2020-09-28',
    icon: CheckIcon,
    iconBackground: 'bg-green-500',
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function History() {
  return (
    <div className="flow-root">
      <ul role="list" className="-mb-8">
        {timeline.map((event, eventIdx) => (
          <li key={event.id}>
            <div className="relative pb-8">
              {eventIdx !== timeline.length - 1 ? (
                <span className="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200" aria-hidden="true" />
              ) : null}
              <div className="relative flex space-x-3">
                <div>
                  <span
                    className={classNames(
                      event.iconBackground,
                      'h-8 w-8 rounded-full flex items-center justify-center ring-8 ring-white'
                    )}
                  >
                    <event.icon className="h-5 w-5 text-white" aria-hidden="true" />
                  </span>
                </div>
                <div className="min-w-0 flex-1 pt-1.5 flex justify-between space-x-4">
                  <div>
                    <p className="text-sm text-gray-500 text-left">
                      {event.content}{' '}
                      <a href={event.href} className="font-medium text-gray-900">
                        {event.target}
                      </a>
                    </p>
                  </div>
                  <div className="text-right text-sm whitespace-nowrap text-gray-500">
                    <time dateTime={event.datetime}>{event.date}</time>
                  </div>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
