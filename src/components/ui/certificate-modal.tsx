"use client";

import { useState } from "react";
import Image from "next/image";
import {
  XMarkIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
  MagnifyingGlassPlusIcon,
  MagnifyingGlassMinusIcon,
} from "@heroicons/react/24/outline";
import { AnimatePresence } from "framer-motion";
import { MotionDiv } from "@/providers/motion-provider";
import { Button } from "./button";

interface CertificateModalProps {
  isOpen: boolean;
  onClose: () => void;
  certificate: {
    title: string;
    image: string | string[];
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
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [zoom, setZoom] = useState(1);
  const [panPosition, setPanPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });

  // Garantir que images sempre seja um array
  const images = Array.isArray(certificate.image)
    ? certificate.image
    : [certificate.image];
  const hasMultipleImages = images.length > 1;
  const currentImage = images[currentImageIndex];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1 >= images.length ? 0 : prev + 1));
    setImageLoaded(false);
    resetZoom();
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) =>
      prev - 1 < 0 ? images.length - 1 : prev - 1
    );
    setImageLoaded(false);
    resetZoom();
  };

  const goToImage = (index: number) => {
    setCurrentImageIndex(index);
    setImageLoaded(false);
    resetZoom();
  };

  const zoomIn = () => {
    setZoom((prev) => Math.min(prev * 1.5, 4));
  };

  const zoomOut = () => {
    setZoom((prev) => Math.max(prev / 1.5, 1));
    if (zoom <= 1.5) {
      setPanPosition({ x: 0, y: 0 });
    }
  };

  const resetZoom = () => {
    setZoom(1);
    setPanPosition({ x: 0, y: 0 });
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    if (zoom > 1) {
      setIsDragging(true);
      setDragStart({
        x: e.clientX - panPosition.x,
        y: e.clientY - panPosition.y,
      });
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging && zoom > 1) {
      setPanPosition({
        x: e.clientX - dragStart.x,
        y: e.clientY - dragStart.y,
      });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

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
                <div className="flex items-center gap-2">
                  {/* Controles de Zoom */}
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={zoomOut}
                    disabled={zoom <= 1}
                    className="border-slate-600 hover:border-blue-500 text-slate-400 hover:text-blue-400 disabled:opacity-50"
                  >
                    <MagnifyingGlassMinusIcon className="h-4 w-4" />
                  </Button>
                  <span className="text-xs text-slate-400 font-mono min-w-[3rem] text-center">
                    {Math.round(zoom * 100)}%
                  </span>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={zoomIn}
                    disabled={zoom >= 4}
                    className="border-slate-600 hover:border-blue-500 text-slate-400 hover:text-blue-400 disabled:opacity-50"
                  >
                    <MagnifyingGlassPlusIcon className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={onClose}
                    className="border-slate-600 hover:border-red-500 text-slate-400 hover:text-red-400"
                  >
                    <XMarkIcon className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              {/* Certificate Image */}
              <div className="relative p-6">
                <div
                  className="relative aspect-[4/3] rounded-lg overflow-hidden bg-slate-800 border border-slate-700"
                  onMouseDown={handleMouseDown}
                  onMouseMove={handleMouseMove}
                  onMouseUp={handleMouseUp}
                  onMouseLeave={handleMouseUp}
                  style={{
                    cursor:
                      zoom > 1 ? (isDragging ? "grabbing" : "grab") : "default",
                  }}
                >
                  {/* Setas de navegação */}
                  {hasMultipleImages && (
                    <>
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={prevImage}
                        className="absolute left-2 top-2 z-20 bg-slate-800/80 border-slate-600 hover:border-emerald-500/50 backdrop-blur-sm"
                      >
                        <ArrowLeftIcon className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={nextImage}
                        className="absolute right-2 top-2 z-20 bg-slate-800/80 border-slate-600 hover:border-emerald-500/50 backdrop-blur-sm"
                      >
                        <ArrowRightIcon className="h-4 w-4" />
                      </Button>
                    </>
                  )}

                  {/* Reset Zoom Button */}
                  {zoom > 1 && (
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={resetZoom}
                      className="absolute top-2 left-1/2 -translate-x-1/2 z-20 bg-slate-800/80 border-slate-600 hover:border-blue-500/50 backdrop-blur-sm text-xs"
                    >
                      Reset Zoom
                    </Button>
                  )}

                  <div
                    className="w-full h-full relative overflow-hidden"
                    style={{
                      transform: `scale(${zoom}) translate(${
                        panPosition.x / zoom
                      }px, ${panPosition.y / zoom}px)`,
                      transformOrigin: "center center",
                      transition: isDragging
                        ? "none"
                        : "transform 0.2s ease-out",
                    }}
                  >
                    <Image
                      src={currentImage}
                      alt={`Certificado - ${certificate.title} ${
                        hasMultipleImages
                          ? `(${currentImageIndex + 1}/${images.length})`
                          : ""
                      }`}
                      fill
                      className={`object-contain transition-opacity duration-300 ${
                        imageLoaded ? "opacity-100" : "opacity-0"
                      }`}
                      onLoad={() => setImageLoaded(true)}
                      draggable={false}
                    />
                  </div>

                  {!imageLoaded && (
                    <div className="absolute inset-0 flex items-center justify-center z-10">
                      <div className="animate-spin w-8 h-8 border-2 border-emerald-400 border-t-transparent rounded-full"></div>
                    </div>
                  )}
                </div>

                {/* Indicadores de página */}
                {hasMultipleImages && (
                  <div className="flex justify-center mt-4 gap-2">
                    {images.map((_, index) => (
                      <Button
                        key={index}
                        variant="outline"
                        size="sm"
                        onClick={() => goToImage(index)}
                        className={`w-3 h-3 p-0 rounded-full ${
                          currentImageIndex === index
                            ? "bg-emerald-500 border-emerald-500"
                            : "bg-slate-700 border-slate-600 hover:border-emerald-500/50"
                        }`}
                      />
                    ))}
                  </div>
                )}

                {/* Instruções de uso */}
                {zoom > 1 && (
                  <div className="mt-4 text-center">
                    <p className="text-xs text-slate-400">
                      Arraste para mover • Use os botões + e - para
                      ampliar/reduzir
                    </p>
                  </div>
                )}
              </div>
            </div>
          </MotionDiv>
        </>
      )}
    </AnimatePresence>
  );
}
