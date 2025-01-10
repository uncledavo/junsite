export default function Spinner() {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="text-4xl animate-spin-slow opacity-80">☻</div>
    </div>
  );
}