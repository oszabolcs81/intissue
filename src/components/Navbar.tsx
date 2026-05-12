import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import logoLeft from "@/assets/logo-left.avif";
import logoRight from "@/assets/logo-right.avif";

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
          <img src={logoLeft} alt="InTissue logo" className="h-12 w-auto object-contain" />
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
          <img src={logoRight} alt="InTissue mark" className="h-12 w-auto object-contain" />
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
