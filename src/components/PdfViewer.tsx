"use client";

import Image from "next/image";
import { Download } from "lucide-react";
import cvImage from "@/assets/image.png";

interface PdfViewerProps {
  fileUrl: string;
}

const PdfViewer = ({ fileUrl }: PdfViewerProps) => {
  return (
    <div className="relative group flex flex-col items-center w-full max-h-[85vh] overflow-y-auto custom-scrollbar bg-card/50 backdrop-blur-xl border border-white/10 rounded-2xl p-4 sm:p-6">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none" />
      
      {/* Download button for mobile or as auxiliary */}
      <div className="flex w-full justify-between items-center mb-4 relative z-10 px-2">
        <h3 className="text-lg font-bold gradient-text">Mi Curriculum Vitae</h3>
        <a 
          href={fileUrl} 
          download="CV_Kevin_Martinez.pdf"
          className="flex items-center gap-2 px-6 py-2.5 bg-primary text-primary-foreground rounded-xl text-sm font-bold hover:bg-primary/90 transition-all shadow-lg shadow-primary/20 active:scale-95"
        >
          <Download size={18} />
          Descargar PDF
        </a>
      </div>

      {/* CV Image Container */}
      <div className="relative w-full aspect-[1/1.414] rounded-xl overflow-hidden shadow-2xl border border-white/5 bg-white/5 ring-1 ring-white/10">
        <Image
          src={cvImage}
          alt="CV Kevin Martinez"
          className="object-contain w-full h-full"
          priority
          quality={100}
        />
        
        {/* Hover overlay hint */}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
          <p className="text-white font-medium px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20">
            Vista Previa del CV
          </p>
        </div>
      </div>
    </div>
  );
};

export default PdfViewer;
