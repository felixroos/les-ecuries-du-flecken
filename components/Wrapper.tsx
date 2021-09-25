export default function Wrapper({ children }) {
  /* return <div className="max-w-7xl mx-auto px-4 sm:px-6 pb-4 bg-white shadow-lg pt-24">{children}</div>; */
  return (
    <div className="max-w-7xl mx-auto px-0 sm:px-0 pb-0 bg-white shadow-lg" style={{ paddingTop: 62 }}>
      {children}
    </div>
  );
}
