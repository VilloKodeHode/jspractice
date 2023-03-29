export default function GridLayout({ children }) {
  return (
    <div className="m-8 border-4 p-8 grid grid-cols-3 grid-flow-row justify-center items-center">
      <>{children}</>
    </div>
  );
}
