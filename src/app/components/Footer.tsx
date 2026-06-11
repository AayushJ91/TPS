import { Link, useNavigate, useLocation } from "react-router";
import TpsWordmark from "./TpsWordmark";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const navigate = useNavigate();
  const location = useLocation();

  const handleContactClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const scrollToContact = () => {
      const target = document.getElementById("contact-section");
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    };

    if (location.pathname === "/tps") {
      scrollToContact();
    } else {
      navigate("/tps");
      // Wait for the new page to render before scrolling
      setTimeout(scrollToContact, 150);
    }
  };

  return (
    <footer className="border-t border-foreground/10 py-16 px-6 bg-muted/20">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div>
            <Link to="/" className="inline-block mb-5 group" style={{ fontSize: "1rem" }}>
              <TpsWordmark variant="light" showTagline={true} className="transition-opacity group-hover:opacity-75" />
            </Link>
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
              <a
                href="/tps#contact-section"
                onClick={handleContactClick}
                className="block text-sm transition-colors duration-300"
                style={{ color: "inherit", cursor: "pointer" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#c9a84c")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "")}
              >
                Contact
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-foreground/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>© {currentYear} TPS. Infrastructure Operating Architecture.</p>
        </div>
      </div>
    </footer>
  );
}
