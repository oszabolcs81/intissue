import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Home", path: "/" },
  { label: "Videos", path: "/videos" },
  { label: "Team", path: "/team" },
  { label: "Contact", path: "/contact" },
];

const Navbar = () => {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-20">
        {/* Left logo */}
        <Link to="/" className="flex items-center gap-3">
          <div className="w-12 h-12 relative">
            <svg viewBox="0 0 60 60" className="w-full h-full text-foreground" fill="none" stroke="currentColor" strokeWidth="1.5">
              <polygon points="30,5 50,15 55,35 40,55 20,55 5,35 10,15" />
              <line x1="30" y1="5" x2="40" y2="55" />
              <line x1="10" y1="15" x2="55" y2="35" />
              <line x1="50" y1="15" x2="5" y2="35" />
              <line x1="20" y1="55" x2="30" y2="5" />
            </svg>
          </div>
        </Link>

        {/* Center nav */}
        <div className="hidden md:flex items-center gap-10">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`text-sm tracking-widest uppercase transition-colors duration-300 ${
                location.pathname === item.path
                  ? "text-foreground font-semibold"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Right logo - InTissue mark */}
        <div className="hidden md:flex items-center">
          <div className="flex items-end gap-0.5 border border-muted-foreground/30 p-1.5">
            <div className="w-2.5 h-8 flex flex-col items-center justify-start pt-1">
              <div className="w-2 h-2 rounded-full bg-primary" />
            </div>
            <div className="w-1.5 h-10 bg-foreground" />
            <div className="w-1.5 h-8 bg-foreground" />
          </div>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-background border-t border-border px-6 py-4 space-y-3">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setMobileOpen(false)}
              className={`block text-sm tracking-widest uppercase ${
                location.pathname === item.path
                  ? "text-foreground font-semibold"
                  : "text-muted-foreground"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
