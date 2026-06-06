import { Link } from "react-router";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-foreground/10 py-16 px-6 bg-muted/20">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div>
            <Link to="/" className="inline-block mb-4">
              <img
                src="/logo.png"
                alt="TPS Logo"
                className="h-12 w-auto object-contain transition-opacity hover:opacity-85"
              />
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Infrastructure Systems IP Company
            </p>
          </div>

          <div>
            <h3 className="text-sm uppercase tracking-wider mb-4 opacity-60">
              Framework
            </h3>
            <div className="space-y-2">
              <Link to="/thesis" className="block text-sm hover:opacity-70 transition-opacity">
                Thesis
              </Link>
              <Link to="/architecture" className="block text-sm hover:opacity-70 transition-opacity">
                Architecture
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-sm uppercase tracking-wider mb-4 opacity-60">
              Implementation
            </h3>
            <div className="space-y-2">
              <Link to="/applications" className="block text-sm hover:opacity-70 transition-opacity">
                Applications
              </Link>
              <Link to="/value-creation" className="block text-sm hover:opacity-70 transition-opacity">
                Value Creation
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-sm uppercase tracking-wider mb-4 opacity-60">
              Company
            </h3>
            <div className="space-y-2">
              <Link to="/tps" className="block text-sm hover:opacity-70 transition-opacity">
                About TPS
              </Link>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-foreground/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>© {currentYear} TPS. Infrastructure Operating Architecture.</p>
          <p className="text-xs">
            Category-defining intellectual property for adaptive infrastructure-energy ecosystems.
          </p>
        </div>
      </div>
    </footer>
  );
}
