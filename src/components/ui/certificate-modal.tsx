"use client";

import { useState } from "react";
import Image from "next/image";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { AnimatePresence } from "framer-motion";
import { MotionDiv } from "@/providers/motion-provider";
import { Button } from "./button";

interface CertificateModalProps {
  isOpen: boolean;
  onClose: () => void;
  certificate: {
    title: string;
    image: string;
    instructor: string;
    completedAt: string;
  };
}

export function CertificateModal({
  isOpen,
  onClose,
  certificate,
}: CertificateModalProps) {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <MotionDiv
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Modal */}
          <MotionDiv
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ type: "spring", duration: 0.5 }}
          >
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-xl border border-slate-700 shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-slate-700">
                <div>
                  <h3 className="text-xl font-bold text-white font-mono">
                    {certificate.title}
                  </h3>
                  <p className="text-sm text-gray-400 mt-1">
                    {certificate.instructor} • {certificate.completedAt}
                  </p>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={onClose}
                  className="border-slate-600 hover:border-red-500 text-slate-400 hover:text-red-400"
                >
                  <XMarkIcon className="h-4 w-4" />
                </Button>
              </div>

              {/* Certificate Image */}
              <div className="relative p-6">
                <div className="relative aspect-[4/3] rounded-lg overflow-hidden bg-slate-800 border border-slate-700">
                  <Image
                    src={certificate.image}
                    alt={`Certificado - ${certificate.title}`}
                    fill
                    className={`object-contain transition-opacity duration-300 ${
                      imageLoaded ? "opacity-100" : "opacity-0"
                    }`}
                    onLoad={() => setImageLoaded(true)}
                  />
                  {!imageLoaded && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="animate-spin w-8 h-8 border-2 border-emerald-400 border-t-transparent rounded-full"></div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </MotionDiv>
        </>
      )}
    </AnimatePresence>
  );
}
