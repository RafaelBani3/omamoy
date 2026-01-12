export default function Badge({ children, className = "" }) {
  return (
    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-honey-yellow/20 text-dark-honey ${className}`}>
      {children}
    </span>
  );
}
