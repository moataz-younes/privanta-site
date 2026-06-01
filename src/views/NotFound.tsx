import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-4 text-center">
      <p className="font-mono text-sm text-[var(--gold)]">404</p>
      <h1 className="mt-4 text-[var(--text-primary)]">Page not found</h1>
      <p className="prose-narrow mt-3 text-[var(--text-secondary)]">The page you are looking for does not exist or was moved.</p>
      <Link to="/" className="btn-teal mt-8 inline-flex">
        Return to Home
      </Link>
    </div>
  );
};

export default NotFound;
