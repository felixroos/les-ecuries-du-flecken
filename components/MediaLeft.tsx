/* This example requires Tailwind CSS v2.0+ */
export default function MediaLeft({ media, heading, children }) {
  return (
    <div className="sm:flex">
      <div className="mb-4 flex-shrink-0 sm:mb-0 sm:mr-4">{media}</div>
      <div>
        <h4 className="text-lg font-bold">{heading}</h4>
        <div className="mt-1" />
        {children}
      </div>
    </div>
  );
}
