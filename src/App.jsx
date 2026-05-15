import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, X, ArrowRight, ArrowLeft,
  Phone, Mail, MapPin, ChevronRight,
  Building2, HardHat, Factory,
  Key, FileText, CheckCircle2, Clock, Users, Trophy,
  Eye, Target, ShieldCheck
} from 'lucide-react';

// Images
import commercialProjectImage from './images/Commercial/Tetra Pak - Main Entrance.jpg';
import residentialProjectImage from './images/Residential/Suman Sudha Apartments.jpg';
import industrialProjectImage from './images/Industrial/Ice Cube Cold Storage.jpg';
import institutionalProjectImage from './images/Institutional/M.E.S. Renavikar School.jpg';
import tetraPakOfficeBuildingImage from './images/Commercial/Tetra Pak - Office Building.jpg';
import tetraPakOfficeInteriorImage from './images/Commercial/Tetra Pak - Office inteior.jpg';
import tetraPakImage from './images/Commercial/Tetra Pak.jpg';
import renavikarSchoolImage from './images/Institutional/Renavikar school.jpg';
import snehalayaSchoolImage from './images/Institutional/Snehalaya_s English Medium School.jpg';
import mrDhirdeResidenceImage from './images/Residential/Mr. Dhirde_s Residence.jpg';
import mrJundreResidenceImage from './images/Residential/Mr. Jundre_s Residence.jpg';
import mrPrashantAdhavImage from './Founder/Mr Prashant Adhav.jpg';
import mrPrasadAdhavImage from './Founder/Mr Prasad Adhav.jpg';

// --- ANIMATION VARIANTS ---
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
};

const wordReveal = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } }
};

// --- TIMELINE DATA ---
const projectsData = [
  { year: "2023", name: "Shriram Engineering", location: "MIDC, Ahilyanagar", area: "5,000 sq.ft", type: "Industrial", period: "5" },
  { year: "2022", name: "Row DKRB Houses", location: "Tapovan Road, Ahilyanagar", area: "8,000 sq.ft", type: "Residential", period: "12" },
  { year: "2020", name: "Samarth Hydraulics Shed", location: "MIDC, Ahilyanagar", area: "12,000 sq.ft", type: "Industrial", period: "12" },
  { year: "2017", name: "Ice Cube Cold Storage", location: "MIDC, Ahilyanagar", area: "15,000 sq.ft", type: "Industrial", period: "18" },
  { year: "2014", name: "Commercial & Residential Complex", location: "Gauri Ghumat, Ahilyanagar", area: "12,000 sq.ft", type: "Mixed Use", period: "12" },
  { year: "2013", name: "Reliance Trading Corp", location: "Ahilyanagar", area: "6,000 sq.ft", type: "Mixed Use", period: "12" },
  { year: "2012", name: "Snehalaya English Med. School", location: "Ahilyanagar", area: "15,000 sq.ft", type: "Institutional", period: "12" },
  { year: "2010", name: "Suman Sudha Apts (3 Phases)", location: "Ahilyanagar", area: "60,000 sq.ft", type: "Residential", period: "36" },
  { year: "2009", name: "Reliance Foundation School", location: "Nagothane", area: "20,000 sq.ft", type: "Institutional", period: "9" },
  { year: "2007", name: "Tetra Pak Commercial Office", location: "Ahilyanagar", area: "20,000 sq.ft", type: "Commercial", period: "6" },
  { year: "2005", name: "M.E.S. Renavikar School", location: "Ahilyanagar", area: "18,000 sq.ft", type: "Institutional", period: "6" },
  { year: "2004", name: "Jankalyan Blood Bank", location: "Ahilyanagar", area: "5,000 sq.ft", type: "Institutional", period: "3" },
  { year: "2001", name: "Atithi Jain Bhavan", location: "Ahilyanagar", area: "12,000 sq.ft", type: "Institutional", period: "12" },
  { year: "1996", name: "Shantiban Commercial Complex", location: "Dalmandai, Ahilyanagar", area: "12,000 sq.ft", type: "Commercial", period: "18" },
  { year: "1995", name: "Lunar Engineering Godown", location: "MIDC, Ahilyanagar", area: "5,000 sq.ft", type: "Industrial", period: "6" },
  { year: "1994", name: "Sundarban Apartments", location: "Ahilyanagar", area: "6,000 sq.ft", type: "Residential", period: "18" },
  { year: "1992", name: "Police Club & Guest House", location: "Shirdi", area: "18,000 sq.ft", type: "Commercial", period: "12" },
];

const Timeline = ({ onBack, onNavigate }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen relative font-sans text-white"
    >
      <div 
        className="fixed inset-0 pointer-events-none z-50 opacity-[0.05]"
        style={{
          backgroundImage: "url('./images/background-vector.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      ></div>

      <div className="absolute inset-0 bg-[url('./images/background-vector.jpg')]"></div>
      <div className="absolute inset-0 bg-[#00543b]/90 z-0"></div>

      <div className="relative z-10">
        <style>{`
          h1, h2, h3, h4, h5, h6, .font-heading, body, p, span, div, a {
            font-family: 'Tw Cen MT', 'Century Gothic', sans-serif !important;
          }
        `}</style>

        <header className="sticky top-0 z-30 bg-[#00543b]/90 backdrop-blur-md border-b border-white/10">
          <div className="max-w-7xl mx-auto px-4 py-4 md:px-12 md:py-4 flex items-center justify-between gap-4">
            <button
              type="button"
              className="text-white text-xl sm:text-2xl md:text-3xl font-bold tracking-tight"
              onClick={() => onNavigate('home')}
            >
              PrithviCo.
            </button>
            <div className="hidden md:flex gap-1 items-center bg-white/5 backdrop-blur-md px-2 py-1.5 rounded-full border border-white/10">
              {['Home', 'About Us', 'Services', 'Projects', 'Our Story', 'Contact'].map((item) => {
                const id = item === 'Our Story' ? 'timeline' : item.toLowerCase().replace(' ', '-');
                return (
                  <button
                    key={item}
                    onClick={() => id === 'timeline' ? null : onNavigate(id)}
                    className={`px-4 lg:px-6 py-2 rounded-full text-sm lg:text-base font-medium transition-all duration-300 ${
                      id === 'timeline' ? 'bg-white text-[#00543b] shadow-md font-bold cursor-default' : 'text-white hover:bg-white/10'
                    }`}
                  >
                    {item}
                  </button>
                );
              })}
            </div>
          </div>
        </header>

        <div className="py-8 md:py-10 px-4 sm:px-6 md:px-20">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="max-w-4xl mx-auto mb-20"
          >
            <span className="inline-block py-1 px-3 rounded-full border border-white/30 text-white/80 text-sm tracking-widest uppercase mb-4 backdrop-blur-sm bg-white/5 font-bold">
              Our History
            </span>
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight font-heading">
              Completed Projects
            </h1>
            <p className="text-white/80 text-xl max-w-2xl font-medium">
              A timeline of engineering excellence and trust built over three decades.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto relative pl-4 md:pl-8">
            <div className="absolute left-[39px] md:left-[47px] top-0 h-full w-0.5 bg-white/20"></div>
            
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="space-y-16"
            >
              {projectsData.map((project, idx) => (
                <motion.div key={idx} variants={fadeInUp} className="relative flex items-center group">
                  <div className="absolute left-0 w-20 h-20 md:w-24 md:h-24 rounded-full border-4 border-[#00543b] bg-white text-[#00543b] flex items-center justify-center font-bold text-base md:text-xl shadow-lg z-10 font-heading">
                    {project.year}
                  </div>
                  
                  <div className="ml-28 md:ml-36 w-full max-w-xl">
                    <motion.div 
                      whileHover={{ scale: 1.02 }}
                      className="bg-[#F6F1E9] text-[#1a1a1a] p-5 md:p-6 rounded-xl shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-1 duration-300 relative overflow-hidden"
                    >
                      <div className="absolute top-0 right-0 bg-[#00543b] text-white px-3 py-1 rounded-bl-lg shadow-sm flex items-center gap-2">
                        <Clock size={12} />
                        <span className="font-bold text-[10px] md:text-xs tracking-wide font-heading">{project.period} Mo.</span>
                      </div>
                      <div className="pr-12">
                        <h3 className="text-base md:text-xl font-bold text-[#00543b] mb-2 font-heading leading-tight">{project.name}</h3>
                      </div>
                      <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs md:text-sm font-semibold text-gray-700 mt-1 opacity-80">
                        <span className="bg-[#00543b]/10 px-2 py-0.5 rounded text-[#00543b] uppercase text-[9px] tracking-wider font-heading">
                          {project.type}
                        </span>
                        <span className="text-[#00543b] opacity-40">|</span>
                        <span>{project.location}</span>
                        <span className="text-[#00543b] opacity-40">|</span>
                        <span>{project.area}</span>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <div className="mt-14 text-center">
              <button
                onClick={onBack}
                className="inline-flex items-center gap-2 border border-white/40 text-white px-6 py-3 rounded-full hover:bg-white hover:text-[#00543b] transition-colors font-bold tracking-wide uppercase text-sm"
              >
                <ArrowLeft size={16} /> Back to Home Page
              </button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// --- MAIN APP COMPONENT ---

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeTab, setActiveTab] = useState('home');
  const [showTimeline, setShowTimeline] = useState(false);
  const scrollRef = useRef(null);

  const services = [
    {
      title: "Industrial Construction Projects",
      icon: <Factory size={28} />,
      desc: "Civil and PEB Construction for Industries.",
      sub: "MEP and Infra Development."
    },
    {
      title: "Commercial, Institutional Projects",
      icon: <Building2 size={28} />,
      desc: "Drawings to Delivery. Audit-ready Industrial and Commercial facilities on time.",
      sub: "Documented and transparent workflow."
    },
    {
      title: "Complete Turnkey Solutions",
      icon: <Key size={28} />,
      desc: "Critical Path based planning.",
      sub: "Coordination with consultants for Audits, Inspections, and Certifications."
    }
  ];

  const projectImages = [
    { label: 'Tetra Pak', image: commercialProjectImage },
    { label: 'Ice Cube Cold Storage', image: industrialProjectImage },
    { label: 'M.E.S. Renavikar School', image: institutionalProjectImage },
    { label: 'Tetra Pak', image: tetraPakOfficeBuildingImage },
    { label: 'Renavikar School', image: renavikarSchoolImage },
    { label: 'Snehalaya English Medium School', image: snehalayaSchoolImage },
    { label: 'Tetra Pak', image: tetraPakImage },
    { label: 'Mr. Dhirde Residence', image: mrDhirdeResidenceImage },
    { label: 'Mr. Jundre Residence', image: mrJundreResidenceImage },
    { label: 'Tetra Pak', image: tetraPakOfficeInteriorImage },
    { label: 'Suman Sudha Apartments', image: residentialProjectImage },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      const sections = ['home', 'about-us', 'services', 'projects', 'leadership', 'contact'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top >= -200 && rect.top <= 400) {
            setActiveTab(section);
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    if (id === 'timeline' || id === 'our-story') {
      setShowTimeline(true);
      setActiveTab('timeline');
      setIsMenuOpen(false);
      return;
    }

    if (showTimeline) {
      setShowTimeline(false);
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const element = document.getElementById(id);
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    }
    setActiveTab(id);
    setIsMenuOpen(false);
  };

  return (
    <div className="font-sans antialiased text-[#1a1a1a] bg-[#F6F1E9] overflow-x-hidden relative">
      <AnimatePresence mode="wait">
        {showTimeline ? (
          <Timeline key="timeline" onBack={() => setShowTimeline(false)} onNavigate={scrollToSection} />
        ) : (
          <motion.div 
            key="home"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <style>{`
              @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@600;700;800&display=swap');
              
              :root { --color-brand: #00543b; }
              
              h1, h2, h3, h4, h5, h6, .font-cal-sans {
                font-family: 'Plus Jakarta Sans', sans-serif !important;
                letter-spacing: -0.02em;
              }
              
              body, button, p, span, div, a {
                font-family: 'Tw Cen MT', 'Century Gothic', sans-serif;
              }
              
              html { scroll-behavior: smooth; }

              .hide-scrollbar::-webkit-scrollbar { display: none; }
              .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }

              .vector-overlay {
                position: fixed;
                inset: 0;
                background-image: url('./images/background-vector.jpg');
                background-size: cover;
                background-position: center;
                background-repeat: no-repeat;
                opacity: 0.05;
                pointer-events: none;
                z-index: 50;
              }
            `}</style>
            
            <div className="vector-overlay"></div>

            <nav className={`fixed top-0 left-0 w-full z-40 px-4 py-4 md:px-12 md:py-6 flex justify-between items-center transition-all duration-500 ${scrolled ? 'bg-[#00543b] shadow-lg md:py-4 py-3' : 'bg-transparent'}`}>
              <button 
                type="button" 
                className={`text-white text-xl sm:text-2xl md:text-3xl font-bold tracking-tight transition-all duration-500 ${scrolled ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}`} 
                onClick={() => scrollToSection('home')}
              >
                PrithviCo.
              </button>

              <div className="hidden md:flex gap-1 items-center bg-white/5 backdrop-blur-md px-2 py-1.5 rounded-full border border-white/10">
                {['Home', 'About Us', 'Services', 'Projects', 'Our Story', 'Contact'].map((item) => (
                  <button 
                    key={item}
                    onClick={() => scrollToSection(item === 'Our Story' ? 'timeline' : item.toLowerCase().replace(' ', '-'))}
                    className={`px-6 py-2 rounded-full text-base font-medium transition-all duration-300 ${
                      activeTab === (item === 'Our Story' ? 'timeline' : item.toLowerCase().replace(' ', '-')) 
                        ? 'bg-white text-[#00543b] shadow-md font-bold' 
                        : 'text-white hover:bg-white/10'
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>

              <button className="md:hidden text-white bg-white/10 p-2 rounded-lg backdrop-blur-sm" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </nav>

            {isMenuOpen && (
              <motion.div 
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                className="fixed inset-0 bg-[#00543b] z-30 pt-28 px-6 md:hidden"
              >
                <div className="flex flex-col gap-6 text-white text-3xl font-cal-sans">
                  {['Home', 'About Us', 'Services', 'Projects', 'Our Story', 'Contact'].map((item) => (
                    <button 
                      key={item} 
                      onClick={() => scrollToSection(item === 'Our Story' ? 'timeline' : item.toLowerCase().replace(' ', '-'))} 
                      className="text-left border-b border-white/10 pb-4"
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Hero Section (Restored to full height) */}
            <header id="home" className="relative min-h-[90vh] md:h-screen w-full bg-[#00543b] overflow-hidden flex flex-col justify-center items-center pt-16">
              <div className="absolute inset-0 z-0 opacity-[0.08] bg-[url('./images/background-vector.jpg')] bg-cover bg-center"></div>
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="relative z-10 px-4 sm:px-6 mt-[-2vh] md:mt-[-5vh] flex flex-col items-start w-full max-w-7xl"
              >
                <h1 className="text-white text-5xl sm:text-6xl md:text-[10rem] font-extrabold tracking-tight mb-3 md:mb-4 leading-none font-cal-sans drop-shadow-2xl">
                  PrithviCo.
                </h1>
                <p className="text-white/80 text-lg sm:text-2xl md:text-4xl font-light tracking-[0.2em] sm:tracking-widest">
                  AWARE. EQUANIMOUS.
                </p>
              </motion.div>
            </header>

            {/* Stats Section (Precise Spacing below Hero) */}
            <section className="px-4 sm:px-6 md:px-12 py-8 md:py-12 bg-[#F6F1E9]">
              <div className="max-w-7xl mx-auto">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                >
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-[#00543b]/10">
                    <div className="py-4">
                      <h4 className="font-bold text-4xl sm:text-5xl md:text-6xl text-[#00543b] mb-1 font-cal-sans">30+</h4>
                      <p className="text-xs uppercase tracking-wider text-gray-500 font-bold">Years of Experience</p>
                    </div>
                    <div className="py-4">
                      <h4 className="font-bold text-4xl sm:text-5xl md:text-6xl text-[#00543b] mb-1 font-cal-sans">120+</h4>
                      <p className="text-xs uppercase tracking-wider text-gray-500 font-bold">Completed Projects</p>
                    </div>
                    <div className="py-4">
                      <h4 className="font-bold text-4xl sm:text-5xl md:text-6xl text-[#00543b] mb-1 font-cal-sans">100%</h4>
                      <p className="text-xs uppercase tracking-wider text-gray-500 font-bold">Satisfied Clients</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </section>

            {/* About Us Section */}
            <section id="about-us" className="px-4 sm:px-6 md:px-12 pt-6 md:pt-10 pb-8 bg-[#F6F1E9] relative overflow-hidden">
              <div className="max-w-7xl mx-auto relative z-10">
                <motion.div 
                  initial="hidden" 
                  whileInView="visible" 
                  viewport={{ once: true, margin: "-100px" }}
                  className="text-left mb-8 md:mb-12 w-full border-l-4 border-[#00543b] pl-4 sm:pl-6"
                >
                  <motion.span variants={fadeInUp} className="text-[#00543b] font-bold tracking-widest uppercase text-sm mb-1 block">Who We Are</motion.span>
                  <motion.h2 
                    variants={staggerContainer}
                    className="text-3xl sm:text-4xl md:text-6xl font-bold text-[#00543b] leading-tight font-cal-sans flex flex-wrap"
                  >
                    {"From Prithvi Constructions to PrithviCo.".split(" ").map((word, i) => (
                      <motion.span key={i} variants={wordReveal} className="mr-3 mb-1">
                        {word}
                      </motion.span>
                    ))}
                  </motion.h2>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-10 text-base sm:text-lg md:text-xl text-gray-800 leading-relaxed text-justify font-light">
                  <motion.p 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    whileHover={{ scale: 1.01, color: "#000" }}
                    transition={{ duration: 0.8 }}
                    className="cursor-default"
                  >
                    Prithvi Constructions was founded in 1990. Prashant's deliberate and consistent work ethic built a reputation for reliability. 
                    The succession of this venture is led by Prasad's next-generation vision under the name PrithviCo. 
                  </motion.p>
                  <motion.p 
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    whileHover={{ scale: 1.01, color: "#000" }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="cursor-default"
                  >
                    The intent behind this evolution is to adapt for the new age while preserving our core: clear commitments, engineering excellence, and integrity without compromise. 
                  </motion.p>
                </div>
              </div>
            </section>

            {/* Core Values Section */}
            <section className="px-4 sm:px-6 md:px-12 py-12 md:py-20 bg-[#F6F1E9] border-t border-[#00543b]/5">
              <div className="max-w-7xl mx-auto">
                <motion.div 
                  initial="hidden"
                  whileInView="visible"
                  variants={staggerContainer}
                  viewport={{ once: true }}
                  className="grid md:grid-cols-3 gap-8"
                >
                  <motion.div variants={fadeInUp} whileHover={{ y: -10 }} className="bg-white p-8 rounded-sm shadow-md border-t-4 border-[#00543b]">
                    <Eye className="text-[#00543b] mb-4" size={40} />
                    <h3 className="text-2xl font-bold text-[#00543b] font-cal-sans mb-3">Vision Statement</h3>
                    <p className="text-gray-700 font-bold leading-relaxed">To be the benchmark of Engineering Excellence in every creation. </p>
                  </motion.div>
                  <motion.div variants={fadeInUp} whileHover={{ y: -10 }} className="bg-white p-8 rounded-sm shadow-md border-t-4 border-[#00543b]">
                    <Target className="text-[#00543b] mb-4" size={40} />
                    <h3 className="text-2xl font-bold text-[#00543b] font-cal-sans mb-3">Mission Statement</h3>
                    <p className="text-gray-700 font-bold leading-relaxed">To deliver every commitment with uncompromising Engineering discipline. </p>
                  </motion.div>
                  <motion.div variants={fadeInUp} whileHover={{ y: -10 }} className="bg-white p-8 rounded-sm shadow-md border-t-4 border-[#00543b]">
                    <ShieldCheck className="text-[#00543b] mb-4" size={40} />
                    <h3 className="text-2xl font-bold text-[#00543b] font-cal-sans mb-3">Core Values</h3>
                    <div className="text-gray-700 font-bold leading-relaxed space-y-1">
                      <p>Clear Commitments.</p>
                      <p>Engineering Excellence.</p>
                      <p>Integrity Without Compromise.</p>
                    </div>
                  </motion.div>
                </motion.div>
              </div>
            </section>

            {/* Services Section */}
            <section id="services" className="py-12 md:py-16 px-4 sm:px-6 md:px-20 bg-[#00543b] text-[#F6F1E9]">
              <div className="max-w-7xl mx-auto">
                <motion.div 
                  initial="hidden"
                  whileInView="visible"
                  variants={fadeInUp}
                  viewport={{ once: true }}
                  className="text-center mb-10 md:mb-12"
                >
                  <span className="bg-[#F6F1E9] text-[#00543b] px-3 py-1 rounded-full text-xs font-bold uppercase mb-3 inline-block">Our Expertise</span>
                  <h2 className="text-3xl md:text-4xl font-extrabold font-cal-sans">Our Services</h2>
                </motion.div>

                <motion.div 
                  initial="hidden"
                  whileInView="visible"
                  variants={staggerContainer}
                  viewport={{ once: true }}
                  className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[#F6F1E9]/20"
                >
                  {services.map((service, idx) => (
                    <motion.div key={idx} variants={fadeInUp} whileHover={{ backgroundColor: "rgba(255,255,255,0.05)" }} className="p-5 md:p-8 flex flex-col items-center text-center group transition-colors duration-300">
                      <div className="mb-6 text-[#F6F1E9] bg-white/10 p-5 rounded-full group-hover:bg-white group-hover:text-[#00543b] transition-all duration-300 transform group-hover:scale-105 shadow-md border border-white/10">
                        {React.cloneElement(service.icon, { size: 40 })} 
                      </div>
                      <h3 className="text-xl md:text-2xl font-bold mb-4 font-cal-sans tracking-wide">{service.title}</h3>
                      <div className="space-y-3">
                        <p className="text-base md:text-lg font-medium opacity-95 leading-relaxed">{service.desc}</p>
                        <p className="text-base md:text-lg font-medium opacity-95 leading-relaxed">{service.sub}</p>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </section>

            {/* Why Us Section */}
            <section className="px-4 sm:px-6 md:px-12 py-16 md:py-24 bg-[#0f1f18] text-white">
              <motion.div 
                initial="hidden"
                whileInView="visible"
                variants={fadeInUp}
                viewport={{ once: true }}
                className="max-w-7xl mx-auto"
              >
                <span className="text-white/70 font-bold tracking-widest uppercase text-sm mb-2 block">Why Choose PrithviCo.</span>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
                  {['Tech Driven Execution', 'Execution Excellence', 'Precise Coordination', 'Risk Mitigation'].map((item, idx) => (
                    <motion.div 
                      key={idx}
                      whileHover={{ scale: 1.05, borderColor: "rgba(255,255,255,0.5)" }}
                      className="bg-white/5 rounded-lg p-6 border border-white/10"
                    >
                      <h3 className="text-lg font-bold mb-2">{item}</h3>
                      <p className="text-white/70 text-sm">Dedicated engineering standards ensuring precision in every square foot delivered. </p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </section>

            {/* Projects Section */}
            <section id="projects" className="px-4 sm:px-6 md:px-12 py-16 md:py-24 bg-[#F6F1E9]">
              <div className="max-w-7xl mx-auto relative px-4 md:px-16">
                <motion.div initial="hidden" whileInView="visible" variants={fadeInUp} className="mb-10 text-left">
                  <span className="text-[#00543b] font-bold uppercase text-sm mb-2 block">Our Portfolio</span>
                  <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#00543b] font-cal-sans">Featured Projects</h2>
                </motion.div>

                <div className="relative group">
                  <button 
                    onClick={() => scrollRef.current.scrollBy({ left: -400, behavior: 'smooth' })}
                    className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-white/80 border-2 border-[#00543b] text-[#00543b] hover:bg-[#00543b] hover:text-white transition-all shadow-lg"
                  >
                    <ArrowLeft size={24} />
                  </button>

                  <div 
                    ref={scrollRef}
                    className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory hide-scrollbar cursor-grab"
                  >
                    {projectImages.map((p, i) => (
                      <motion.div key={i} whileHover={{ y: -5 }} className="min-w-[300px] md:min-w-[450px] snap-center">
                        <div className="overflow-hidden rounded-sm shadow-md h-64 md:h-96 relative group/card">
                          <img src={p.image} className="w-full h-full object-cover transform transition-all duration-700 group-hover/card:scale-110" alt={p.label}/>
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                            <h3 className="text-white text-xl font-bold">{p.label}</h3>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  <button 
                    onClick={() => scrollRef.current.scrollBy({ left: 400, behavior: 'smooth' })}
                    className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-white/80 border-2 border-[#00543b] text-[#00543b] hover:bg-[#00543b] hover:text-white transition-all shadow-lg"
                  >
                    <ArrowRight size={24} />
                  </button>
                </div>
                
                <div className="mt-12 text-center">
                  <motion.button 
                    whileHover={{ x: 5 }}
                    onClick={() => setShowTimeline(true)}
                    className="inline-flex items-center gap-3 border-b-2 border-[#00543b] pb-1 text-[#00543b] font-bold uppercase tracking-widest text-sm"
                  >
                    View Our Story Timeline <ArrowRight size={16} />
                  </motion.button>
                </div>
              </div>
            </section>

            {/* Leadership Section */}
            <section id="leadership" className="px-4 sm:px-6 md:px-12 py-16 md:py-32 bg-white overflow-hidden">
              <div className="max-w-7xl mx-auto">
                <motion.h2 initial="hidden" whileInView="visible" variants={fadeInUp} className="text-[#00543b] font-bold uppercase text-4xl md:text-6xl mb-20 text-center font-cal-sans">Our Leadership</motion.h2>

                <div className="space-y-24">
                  {/* Prashant Adhav */}
                  <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="flex flex-col md:flex-row gap-12 items-center text-center md:text-left">
                    <div className="md:w-1/6 w-1/2">
                      <img src={mrPrashantAdhavImage} alt="Prashant Adhav" className="w-full aspect-[3/4] object-cover rounded-sm shadow-xl" />
                    </div>
                    <div className="md:w-5/6">
                      <h3 className="text-3xl md:text-4xl font-bold text-[#00543b] font-cal-sans mb-4">Mr. Prashant Adhav</h3>
                      <p className="text-[#00543b]/60 uppercase tracking-widest text-sm font-bold mb-6">Founder</p>
                      <div className="text-lg text-gray-700 space-y-4 font-light">
                        <p>When the company was merely an idea, a concept, a seed, his vision shaped its core. His doctrine is to keep the sense of purpose alive; even if that means letting go of short-term gains. </p>
                        <p>His gaze for perfection has been crafted over the years by working with reputed Architects and Designers. His experience brings excellence. Thoughts alone bring only intellectual stimulation, but he ensures that they reflect through every action taken. </p>
                      </div>
                    </div>
                  </motion.div>

                  {/* Prasad Adhav */}
                  <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="flex flex-col md:flex-row-reverse gap-12 items-center text-center md:text-right">
                    <div className="md:w-1/6 w-1/2">
                      <img src={mrPrasadAdhavImage} alt="Prasad Adhav" className="w-full aspect-[3/4] object-cover rounded-sm shadow-xl" />
                    </div>
                    <div className="md:w-5/6">
                      <h3 className="text-3xl md:text-4xl font-bold text-[#00543b] font-cal-sans mb-4">Mr. Prasad Adhav</h3>
                      <p className="text-[#00543b]/60 uppercase tracking-widest text-sm font-bold mb-6">Ambitious Second Generation Lead</p>
                      <div className="grid md:grid-cols-2 gap-8 text-gray-700 text-left mt-6">
                        <div className="bg-[#F6F1E9]/30 p-6 rounded-lg">
                          <h4 className="font-bold text-[#00543b] mb-4 border-b border-[#00543b]/10 pb-2">Educational Background</h4>
                          <ul className="space-y-3 text-sm md:text-base">
                            <li><strong>M.E. (Structures)</strong> — BITS Pilani (CGPA: 9.13) </li>
                            <li><strong>B.E. (Civil Engineering)</strong> — 9th Rank, Pune University (CGPA: 9.54) </li>
                            <li><strong>Diploma (Civil Engineering)</strong> — Govt. Polytechnic (94%) </li>
                          </ul>
                        </div>
                        <div className="bg-[#F6F1E9]/30 p-6 rounded-lg">
                          <h4 className="font-bold text-[#00543b] mb-4 border-b border-[#00543b]/10 pb-2">Experience</h4>
                          <div className="space-y-4 text-sm md:text-base">
                            <div>
                              <p className="font-bold text-xs uppercase text-gray-400">Structural</p>
                              <p>Atkins Realis (Noida), Vivek Apte Consulting Engineers, Hiray Consulting Engineers. </p>
                            </div>
                            <div>
                              <p className="font-bold text-xs uppercase text-gray-400">Academic</p>
                              <p>Teaching Assistant (BITS Pilani), Visiting Lecturer (Govt. Polytechnic). </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="px-4 sm:px-6 md:px-12 py-16 md:py-24 bg-[#F6F1E9]">
              <motion.div 
                initial="hidden" 
                whileInView="visible" 
                variants={fadeInUp} 
                className="max-w-[90rem] mx-auto bg-[#00543b] text-white rounded-xl shadow-2xl overflow-hidden relative p-8 md:p-16 text-center"
              >
                <div className="relative z-10 flex flex-col items-center">
                  <span className="text-white/60 font-bold tracking-widest uppercase text-xs mb-6 block">Get in Touch</span>
                  <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-16 leading-tight font-cal-sans">
                    Let's build something<br />extraordinary.
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-8 border-t border-white/10 pt-16 w-full">
                    
                    <div className="flex flex-col items-center group">
                      <a href="https://maps.app.goo.gl/G8CjNhw8UqizWPVf8" target="_blank" rel="noopener noreferrer" className="p-4 bg-white/5 rounded-full mb-4 group-hover:bg-white group-hover:text-[#00543b] transition-colors"><MapPin size={24} /></a>
                      <h4 className="font-bold text-white/40 text-xs uppercase tracking-wide mb-3">Head Office</h4>
                      <p className="text-white text-sm font-medium leading-relaxed max-w-[200px]">
                        <a href="https://maps.app.goo.gl/G8CjNhw8UqizWPVf8" target="_blank" rel="noopener noreferrer" className="hover:underline">101, Pittruchhaya Apartment, Gulmohar Road, Savedi, Ahilyanagar 414003. </a>
                      </p>
                    </div>

                    <div className="flex flex-col items-center group">
                      <a href="https://maps.app.goo.gl/7KPhWX7AoeCWsBZS6" target="_blank" rel="noopener noreferrer" className="p-4 bg-white/5 rounded-full mb-4 group-hover:bg-white group-hover:text-[#00543b] transition-colors"><Building2 size={24} /></a>
                      <h4 className="font-bold text-white/40 text-xs uppercase tracking-wide mb-3">Corporate Office</h4>
                      <p className="text-white text-sm font-medium leading-relaxed max-w-[200px]">
                        <a href="https://maps.app.goo.gl/7KPhWX7AoeCWsBZS6" target="_blank" rel="noopener noreferrer" className="hover:underline">203, Vinayak 15, Rambaug Colony, Paud Road, Kothrud, Pune 411038. </a>
                      </p>
                    </div>

                    <div className="flex flex-col items-center group">
                      <a href="tel:+918805580654" className="p-4 bg-white/5 rounded-full mb-4 group-hover:bg-white group-hover:text-[#00543b] transition-colors"><Phone size={24} /></a>
                      <h4 className="font-bold text-white/40 text-xs uppercase tracking-wide mb-3">Contact</h4>
                      <p className="text-white text-sm font-medium leading-relaxed">
                        <a href="tel:+918805580654" className="block hover:underline">+91-8805580654 </a>
                        <a href="tel:+919225324755" className="block hover:underline">+91-9225324755 </a>
                      </p>
                    </div>

                    <div className="flex flex-col items-center group">
                      <a href="mailto:info@prithvico.com" className="p-4 bg-white/5 rounded-full mb-4 group-hover:bg-white group-hover:text-[#00543b] transition-colors"><Mail size={24} /></a>
                      <h4 className="font-bold text-white/40 text-xs uppercase tracking-wide mb-3">Email</h4>
                      <p className="text-white text-sm font-medium leading-relaxed">
                        <a href="mailto:info@prithvico.com" className="hover:underline">info@prithvico.com </a>
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </section>

            {/* Footer */}
            <footer className="bg-[#1a1a1a] text-white pt-12 pb-8 px-6 md:px-12 relative z-10 text-center">
              <span className="font-bold text-3xl font-cal-sans block mb-8">PrithviCo.</span>
              <p className="text-xs text-gray-500 border-t border-gray-800 pt-6">Designed and Developed by Shruti Kamble & Parag Bokare </p>
            </footer>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;
