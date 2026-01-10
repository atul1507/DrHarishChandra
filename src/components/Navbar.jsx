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
  ChevronDown,
  Presentation,
  Users,
  Mic,
  Briefcase,
  Trophy,
  Image,
} from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [researchOpen, setResearchOpen] = useState(false);
  const [mobileResearchOpen, setMobileResearchOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#F9C97C] shadow-sm relative group">
      {/* Lighter animation on hover */}
      <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/10 to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700" 
           style={{
             backgroundSize: '200% 100%',
             animation: 'lightSweep 2s ease-in-out'
           }} />
      
      <style>{`
        @keyframes lightSweep {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        @keyframes slideFromLeft {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
      
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between relative z-10">

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
          
          {/* Research Dropdown */}
          <div 
            className="relative group/research"
            onMouseEnter={() => setResearchOpen(true)}
            onMouseLeave={() => setResearchOpen(false)}
          >
            <button
              className="
                group relative flex items-center gap-1 px-3 py-2 rounded-md
                text-black
                hover:bg-linear-to-r hover:from-gray-50 hover:to-gray-100
                hover:shadow-md
                transition-all duration-300 ease-out
                before:absolute before:bottom-0 before:left-1/2 before:-translate-x-1/2
                before:w-0 before:h-0.5 before:bg-linear-to-r before:from-[#F9A825] before:to-[#F9C97C]
                before:transition-all before:duration-300 before:ease-out
                hover:before:w-full
                after:absolute after:inset-0 after:rounded-md after:bg-[#F9A825]/5
                after:scale-0 after:transition-transform after:duration-300
                hover:after:scale-100
              "
            >
              <span className="relative z-10 transition-transform duration-300 group-hover:rotate-6">
                <FlaskConical size={16} />
              </span>
              <span className="relative z-10 transition-all duration-300 group-hover:font-semibold">
                Research
              </span>
              <ChevronDown size={14} className="relative z-10" />
            </button>
            
            {researchOpen && (
              <div 
                className="absolute top-full left-0 mt-0 w-64 bg-white shadow-lg rounded-md border border-gray-200 overflow-hidden z-50"
                style={{ animation: 'slideFromLeft 0.3s ease-out' }}
              >
                <DropdownItem to="/research" icon={<FlaskConical size={16} />} label="Research Projects" />
                <DropdownItem to="/publications" icon={<BookOpen size={16} />} label="Publications" />
                <DropdownItem to="/workshops" icon={<Briefcase size={16} />} label="Workshop" />
                <DropdownItem to="/paper-presentation" icon={<Presentation size={16} />} label="Paper Presentation" />
                <DropdownItem to="/participation" icon={<Users size={16} />} label="Miscellaneous Participation" />
                <DropdownItem to="/talks" icon={<Mic size={16} />} label="Talk Delivered" />
                <DropdownItem to="/extra-academic-activity" icon={<Trophy size={16} />} label="Extra Academic Activity" />
              </div>
            )}
          </div>
          
          <NavItem to="/achievements" icon={<Award size={16} />} label="Achievements" />
          <NavItem to="/awarded" icon={<GraduationCap size={16} />} label="Awarded" />
          <NavItem to="/gallery" icon={<Image size={16} />} label="Gallery" />
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
        <div className="lg:hidden bg-[#F9C97C] border-t shadow-md relative z-10">
          <MobileNavItem to="/" label="Home" onClick={() => setOpen(false)} />
          <MobileNavItem to="/profile" label="Profile" onClick={() => setOpen(false)} />
          <MobileNavItem to="/teaching" label="Teaching" onClick={() => setOpen(false)} />
          
          {/* Mobile Research Dropdown */}
          <div>
            <button
              onClick={() => setMobileResearchOpen(!mobileResearchOpen)}
              className="
                w-full text-left group relative flex items-center justify-between px-6 py-3 overflow-hidden
                text-black
                hover:bg-gray-100 hover:text-black
                transition-all duration-300 ease-out
              "
            >
              <span className="relative z-10 inline-block transition-all duration-300">
                Research
              </span>
              <ChevronDown size={16} className={`transition-transform duration-300 ${mobileResearchOpen ? 'rotate-180' : ''}`} />
            </button>
            
            {mobileResearchOpen && (
              <div className="bg-gray-50">
                <MobileSubNavItem to="/research" label="Research Projects" icon={<FlaskConical size={16} />} onClick={() => setOpen(false)} />
                <MobileSubNavItem to="/publications" label="Publications" icon={<BookOpen size={16} />} onClick={() => setOpen(false)} />
                <MobileSubNavItem to="/workshops" label="Workshop" icon={<Briefcase size={16} />} onClick={() => setOpen(false)} />
                <MobileSubNavItem to="/paper-presentation" label="Paper Presentation" icon={<Presentation size={16} />} onClick={() => setOpen(false)} />
                <MobileSubNavItem to="/participation" label="Miscellaneous Participation" icon={<Users size={16} />} onClick={() => setOpen(false)} />
                <MobileSubNavItem to="/talks" label="Talk Delivered" icon={<Mic size={16} />} onClick={() => setOpen(false)} />
                <MobileSubNavItem to="/extra-academic-activity" label="Extra Academic Activity" icon={<Trophy size={16} />} onClick={() => setOpen(false)} />
              </div>
            )}
          </div>
          
          <MobileNavItem to="/achievements" label="Achievements" onClick={() => setOpen(false)} />
          <MobileNavItem to="/awarded" label="Awarded" onClick={() => setOpen(false)} />
          <MobileNavItem to="/gallery" label="Gallery" onClick={() => setOpen(false)} />
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
      hover:shadow-md
      transition-all duration-300 ease-out
      before:absolute before:bottom-0 before:left-1/2 before:-translate-x-1/2
      before:w-0 before:h-0.5 before:bg-linear-to-r before:from-[#F9A825] before:to-[#F9C97C]
      before:transition-all before:duration-300 before:ease-out
      hover:before:w-full
      after:absolute after:inset-0 after:rounded-md after:bg-[#F9A825]/5
      after:scale-0 after:transition-transform after:duration-300
      hover:after:scale-100
    "
  >
    <span className="relative z-10 transition-transform duration-300 group-hover:rotate-6">
      {icon}
    </span>
    <span className="relative z-10 transition-all duration-300">
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
      transition-all duration-300 ease-out
      before:absolute before:left-0 before:top-0 before:h-full before:w-1.5
      before:bg-linear-to-b before:from-[#F9A825] before:to-[#F9C97C]
      before:scale-y-0 before:origin-top before:transition-transform before:duration-300
      hover:before:scale-y-100
      after:absolute after:left-0 after:top-1/2 after:-translate-y-1/2
      after:w-0 after:h-0 after:bg-[#F9A825]/10 after:rounded-full
      after:transition-all after:duration-300
      hover:after:w-full hover:after:h-full
    "
  >
    <span className="relative z-10 inline-block transition-all duration-300">
      {label}
    </span>
  </Link>
);

const DropdownItem = ({ to, icon, label }) => (
  <Link
    to={to}
    className="
      group flex items-center gap-3 px-4 py-3 text-black
      hover:bg-[#F9C97C]/20
      transition-all duration-300
      border-b border-gray-100 last:border-b-0
    "
  >
    <span className="transition-transform duration-300 group-hover:rotate-6 text-[#F9A825]">
      {icon}
    </span>
    <span className="transition-all duration-300 text-sm">
      {label}
    </span>
  </Link>
);

const MobileSubNavItem = ({ to, label, onClick, icon }) => (
  <Link
    to={to}
    onClick={onClick}
    className="
      group relative flex items-center gap-3 px-10 py-2.5 overflow-hidden
      text-black text-sm
      hover:bg-gray-200 hover:text-black
      transition-all duration-300 ease-out
    "
  >
    {icon && (
      <span className="transition-transform duration-300 text-[#F9A825]">
        {icon}
      </span>
    )}
    <span className="relative z-10 inline-block transition-all duration-300">
      {label}
    </span>
  </Link>
);

export default Navbar;