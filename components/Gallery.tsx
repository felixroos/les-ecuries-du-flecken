const files = [
  {
    title: 'Boxen',
    size: 'Insgesamt 1000 Stellplätze',
    source: './img/box.JPG',
  },
  {
    title: 'Stall',
    size: 'Mit toller Aussicht',
    source: './img/72388f66-2e40-42f0-b9d9-78cf8a75c89b.JPG',
  },
  {
    title: 'Koppel',
    size: 'Unendlich weiter Wiesen',
    source: './img/0e8a0425-c30a-4ec2-9a42-bf4dfdaebc47.JPG',
  },
  {
    title: 'Ball',
    size: 'Gegen die Langeweile',
    source: './img/31a57abb-4cb9-4e0d-a1e3-1ea0a1ba5b5f.JPG',
  },
];

export default function Example() {
  return (
    <ul role="list" className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
      {files.map((file) => (
        <li key={file.source} className="relative">
          <div className="group block w-full aspect-w-10 aspect-h-7 rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 focus-within:ring-indigo-500 overflow-hidden">
            <img src={file.source} alt="" className="object-cover pointer-events-none group-hover:opacity-75" />
            <button type="button" className="absolute inset-0 focus:outline-none">
              <span className="sr-only">View details for {file.title}</span>
            </button>
          </div>
          <p className="mt-2 block text-sm font-medium text-gray-900 truncate pointer-events-none">{file.title}</p>
          <p className="block text-sm font-medium text-gray-500 pointer-events-none">{file.size}</p>
        </li>
      ))}
    </ul>
  );
}
