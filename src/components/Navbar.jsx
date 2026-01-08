import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Home,
  User,
  FlaskConical,
  BookOpen,
  Award,
  Phone,
  Menu,
  X,
} from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#e6ccbb] shadow-sm">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Left: Logo */}
        <div>
          <div className="text-2xl font-serif italic text-[#3C2F2B]">
            Dr. Harish Chandra
          </div>
          <div className="text-sm text-[#3C2F2B]">
            Assistant Professor
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-2 ml-auto">
          <NavItem to="/" icon={<Home size={16} />} label="Home" />
          <NavItem to="/profile" icon={<User size={16} />} label="Profile" />
          <NavItem to="/research" icon={<FlaskConical size={16} />} label="Research" />
          <NavItem to="/publications" icon={<BookOpen size={16} />} label="Publications" />
          <NavItem to="/achievements" icon={<Award size={16} />} label="Achievements" />
          <NavItem to="/contact" icon={<Phone size={16} />} label="Contact" />
        </div>

        {/* Mobile Hamburger */}
        <button
          className="lg:hidden text-[#3C2F2B]"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <div className="lg:hidden bg-[#e6ccbb] border-t shadow-md">
          <MobileNavItem to="/" label="Home" onClick={() => setOpen(false)} />
          <MobileNavItem to="/profile" label="Profile" onClick={() => setOpen(false)} />
          <MobileNavItem to="/research" label="Research" onClick={() => setOpen(false)} />
          <MobileNavItem to="/publications" label="Publications" onClick={() => setOpen(false)} />
          <MobileNavItem to="/achievements" label="Achievements" onClick={() => setOpen(false)} />
          <MobileNavItem to="/contact" label="Contact" onClick={() => setOpen(false)} />
        </div>
      )}
    </header>
  );
};

const NavItem = ({ to, icon, label }) => (
  <Link
    to={to}
    className="
      flex items-center gap-1 px-3 py-2 rounded-md
      text-[#3C2F2B]
      hover:bg-[#3C2F2B] hover:text-white
      transition-colors duration-200
    "
  >
    {icon}
    <span>{label}</span>
  </Link>
);

const MobileNavItem = ({ to, label, onClick }) => (
  <Link
    to={to}
    onClick={onClick}
    className="
      block px-6 py-3
      text-[#3C2F2B]
      hover:bg-[#3C2F2B] hover:text-white
      transition-colors duration-200
    "
  >
    {label}
  </Link>
);

export default Navbar;
