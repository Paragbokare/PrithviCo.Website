import React, { useEffect } from 'react';
import { Clock, ArrowLeft } from 'lucide-react';

const projectsData = [
  { year: "1992", name: "Police Club & Guest House", location: "Shirdi", area: "18,000 sq.ft", type: "Commercial", period: "12", img: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&q=80&w=1000" },
  { year: "1994", name: "Sundarban Apartments", location: "Ahilyanagar", area: "6,000 sq.ft", type: "Residential", period: "18", img: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=1000" },
  { year: "1995", name: "Lunar Engineering Godown", location: "MIDC, Ahilyanagar", area: "5,000 sq.ft", type: "Industrial", period: "6", img: "https://images.unsplash.com/photo-1581094794329-cdac82a6cc31?auto=format&fit=crop&q=80&w=1000" },
  { year: "2001", name: "Atithi Jain Bhavan", location: "Ahilyanagar", area: "12,000 sq.ft", type: "Institutional", period: "12", img: "https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&q=80&w=1000" },
  { year: "2007", name: "Tetra Pak Commercial Office", location: "Vadgaon, Pune", area: "20,000 sq.ft", type: "Commercial", period: "6", img: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1000" },
  { year: "2010", name: "Suman Sudha Apts (3 Phases)", location: "Ahilyanagar", area: "60,000 sq.ft", type: "Residential", period: "36", img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1000" },
  { year: "2017", name: "Ice Cube Cold Storage", location: "MIDC, Ahilyanagar", area: "15,000 sq.ft", type: "Industrial", period: "18", img: "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?auto=format&fit=crop&q=80&w=1000" },
  { year: "2023", name: "Shriram Engineering", location: "MIDC, Ahilyanagar", area: "5,000 sq.ft", type: "Industrial", period: "5", img: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=1000" },
];

const Timeline = ({ onBack }) => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    // Background Green (#00543b)
    <div className="min-h-screen bg-[#00543b] text-white py-10 px-6 md:px-20 font-sans">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@600;700;800&display=swap');
        
        h1, h2, h3, h4, h5, h6, .font-heading {
          font-family: 'Plus Jakarta Sans', sans-serif !important;
          letter-spacing: -0.02em;
        }

        body, p, span, div, a {
          font-family: 'Tw Cen MT', 'Century Gothic', sans-serif;
        }
      `}</style>
      
      {/* Back Button */}
      <div className="max-w-4xl mx-auto mb-10">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-white/70 hover:text-white transition-colors uppercase tracking-widest text-xs font-bold cursor-pointer"
        >
          <ArrowLeft size={16} /> Back to Home
        </button>
      </div>

      {/* Page Header */}
      <div className="max-w-4xl mx-auto mb-20">
        <span className="inline-block py-1 px-3 rounded-full border border-white/30 text-white/80 text-sm tracking-widest uppercase mb-4 backdrop-blur-sm bg-white/5 font-bold">
          Our History
        </span>
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight font-heading">
          Completed Projects
        </h1>
        <p className="text-white/80 text-xl max-w-2xl font-medium">
          A timeline of engineering excellence and trust built over three decades.
        </p>
      </div>

      {/* Timeline Container */}
      <div className="max-w-4xl mx-auto relative pl-4 md:pl-8">
        
        {/* Vertical Line - Positioned for bigger circles */}
        <div className="absolute left-[23px] md:left-[31px] top-0 h-full w-0.5 bg-white/20"></div>

        <div className="space-y-12">
          {projectsData.map((project, idx) => (
            <div key={idx} className="relative flex items-start group">
              
              {/* Year Dot - BIGGER SIZE */}
              {/* Mobile: w-12 h-12, Desktop: w-16 h-16 */}
              <div className="absolute left-0 top-1.5 w-12 h-12 md:w-16 md:h-16 rounded-full border-4 border-[#00543b] bg-white text-[#00543b] flex items-center justify-center font-bold text-xs md:text-sm shadow-lg z-10 font-heading">
                {project.year}
              </div>

              {/* Content Card */}
              <div className="ml-20 md:ml-28 w-full">
                <div className="bg-[#F6F1E9] text-[#1a1a1a] p-6 rounded-xl shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-1 duration-300 relative overflow-hidden group">
                  
                  {/* Period Badge - Green Background, White Text */}
                  <div className="absolute top-0 right-0 bg-[#00543b] text-white px-4 py-2 rounded-bl-xl shadow-md flex items-center gap-2 z-10">
                    <Clock size={14} />
                    <span className="font-bold text-sm tracking-wide font-heading">{project.period} Months</span>
                  </div>

                  <div className="pr-24">
                    <h3 className="text-xl md:text-2xl font-bold text-[#00543b] mb-3 font-heading">{project.name}</h3>
                  </div>
                  
                  {/* Info Row with Separators */}
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-base md:text-lg font-semibold text-gray-700 mt-2">
                    <span className="bg-[#00543b]/10 px-2 py-0.5 rounded text-[#00543b] uppercase text-xs tracking-wider font-heading">
                      {project.type}
                    </span>
                    
                    <span className="text-[#00543b] opacity-40">|</span>
                    <span>{project.location}</span>
                    
                    <span className="text-[#00543b] opacity-40">|</span>
                    <span>{project.area}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* End of Timeline Marker */}
        <div className="relative mt-12 flex items-center gap-4">
           {/* Marker adjusted for bigger line alignment */}
           <div className="w-12 h-12 md:w-16 md:h-16 rounded-full border-4 border-[#00543b] bg-[#003d29] flex items-center justify-center z-10">
             <div className="w-3 h-3 bg-white/50 rounded-full animate-pulse"></div>
           </div>
           <span className="text-white/60 text-sm uppercase tracking-widest font-bold">And continuing...</span>
        </div>

      </div>
    </div>
  );
};

export default Timeline;