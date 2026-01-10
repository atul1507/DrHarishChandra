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
  GraduationCap,
} from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#F9C97C] shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between">

        {/* Left: Logo */}
        <div>
          <div className="text-lg sm:text-xl md:text-2xl font-serif italic text-black">
            Dr. Harish Chandra
          </div>
          <div className="text-xs sm:text-sm text-black">
            Assistant Professor
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-2 ml-auto">
          <NavItem to="/" icon={<Home size={16} />} label="Home" />
          <NavItem to="/profile" icon={<User size={16} />} label="Profile" />
          <NavItem to="/teaching" icon={<GraduationCap size={16} />} label="Teaching" />
          <NavItem to="/research" icon={<FlaskConical size={16} />} label="Research" />
          <NavItem to="/publications" icon={<BookOpen size={16} />} label="Publications" />
          <NavItem to="/achievements" icon={<Award size={16} />} label="Achievements" />
          <NavItem to="/contact" icon={<Phone size={16} />} label="Contact" />
        </div>

        {/* Mobile Hamburger */}
        <button
          className="lg:hidden text-black"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <div className="lg:hidden bg-[#F9C97C] border-t shadow-md">
          <MobileNavItem to="/" label="Home" onClick={() => setOpen(false)} />
          <MobileNavItem to="/profile" label="Profile" onClick={() => setOpen(false)} />
          <MobileNavItem to="/teaching" label="Teaching" onClick={() => setOpen(false)} />
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
      group relative flex items-center gap-1 px-3 py-2 rounded-md
      text-black
      hover:bg-linear-to-r hover:from-gray-50 hover:to-gray-100
      hover:scale-110 hover:shadow-xl
      transition-all duration-500 ease-out
      before:absolute before:bottom-0 before:left-1/2 before:-translate-x-1/2
      before:w-0 before:h-0.5 before:bg-linear-to-r before:from-[#F9A825] before:to-[#F9C97C]
      before:transition-all before:duration-500 before:ease-out
      hover:before:w-full
      after:absolute after:inset-0 after:rounded-md after:bg-[#F9A825]/10
      after:scale-0 after:transition-transform after:duration-500
      hover:after:scale-100
    "
  >
    <span className="relative z-10 transition-transform duration-500 group-hover:rotate-12 group-hover:scale-125">
      {icon}
    </span>
    <span className="relative z-10 transition-all duration-500 group-hover:tracking-wider group-hover:font-semibold">
      {label}
    </span>
  </Link>
);

const MobileNavItem = ({ to, label, onClick }) => (
  <Link
    to={to}
    onClick={onClick}
    className="
      group relative block px-6 py-3 overflow-hidden
      text-black
      hover:bg-gray-100 hover:text-black
      hover:pl-10
      transition-all duration-500 ease-out
      before:absolute before:left-0 before:top-0 before:h-full before:w-1.5
      before:bg-linear-to-b before:from-[#F9A825] before:to-[#F9C97C]
      before:scale-y-0 before:origin-top before:transition-transform before:duration-500
      hover:before:scale-y-100
      after:absolute after:left-0 after:top-1/2 after:-translate-y-1/2
      after:w-0 after:h-0 after:bg-[#F9A825]/20 after:rounded-full
      after:transition-all after:duration-500
      hover:after:w-full hover:after:h-full
    "
  >
    <span className="relative z-10 inline-block transition-all duration-500 group-hover:translate-x-1 group-hover:font-semibold group-hover:tracking-wide">
      {label}
    </span>
  </Link>
);

export default Navbar;
