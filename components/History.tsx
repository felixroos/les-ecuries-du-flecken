/* This example requires Tailwind CSS v2.0+ */
import { HomeIcon } from '@heroicons/react/outline';
import { ColorSwatchIcon, RefreshIcon } from '@heroicons/react/solid';
import { SparklesIcon } from '@heroicons/react/solid';
import { CheckIcon, ThumbUpIcon, UserIcon } from '@heroicons/react/solid';

const timeline = [
  {
    id: 1,
    content: 'Übernahme des Hofes',
    target: 'Wir sind voller Ideen Tatendrang',
    href: '#',
    date: '2019',
    icon: SparklesIcon,
    iconBackground: 'bg-yellow-400',
  },
  {
    id: 2,
    content: 'Erneuering der Stallungen',
    target: '',
    href: '#',
    date: '2019',
    datetime: '2020-09-22',
    icon: RefreshIcon,
    iconBackground: 'bg-primary',
  },
  {
    id: 2,
    content: 'Erneuerung der Hallenbodens',
    target: '',
    href: '#',
    date: '2020',
    datetime: '2020-09-22',
    icon: HomeIcon,
    iconBackground: 'bg-primary',
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
                    <p className="text-sm text-gray-900 text-left">
                      {event.content}
                      <br />
                      <span className="font-medium text-gray-500">{event.target}</span>
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
