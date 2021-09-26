export default function Wrapper({ children }) {
  return (
    <div className="max-w-7xl mx-auto px-0 sm:px-0 pb-0 bg-white shadow-lg overflow-hidden" style={{ paddingTop: 80 }}>
      {children}
    </div>
  );
}
