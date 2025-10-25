"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Section } from "@/components/ui/section";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CertificateModal } from "@/components/ui/certificate-modal";
import { courses } from "@/data/courses";
import { Course } from "@/types/course";
import { MotionDiv } from "@/providers/motion-provider";
import { FloatingParticles } from "@/components/ui/floating-particles";
import { AcademicCapIcon } from "@/components/icons";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

function CourseCard({ course }: { course: Course }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleViewCertificate = () => {
    if (course.certificateImage) {
      setIsModalOpen(true);
    }
  };

  return (
    <>
      <MotionDiv variants={itemVariants}>
        <Card className="h-full bg-gradient-to-br from-slate-900/50 to-slate-800/50 border-slate-700/50 hover:border-emerald-500/30 transition-all duration-300 group hover:shadow-[0_0_30px_rgba(16,185,129,0.15)] flex flex-col">
          <div className="relative overflow-hidden rounded-t-xl">
            <Image
              src={course.image}
              alt={course.title}
              width={400}
              height={200}
              className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
          </div>

          <CardHeader className="pb-4 flex-grow">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-slate-400">{course.duration}</span>
              {course.completedAt && (
                <span className="text-xs text-emerald-400 font-mono">
                  {course.completedAt}
                </span>
              )}
            </div>
            <CardTitle className="text-xl font-bold text-white group-hover:text-emerald-400 transition-colors">
              {course.title}
            </CardTitle>
            <CardDescription className="text-slate-300 text-sm leading-relaxed">
              {course.description}
            </CardDescription>
            <div className="text-sm text-slate-400 mt-2">
              <AcademicCapIcon className="h-4 w-4 inline mr-2" />
              <span className="font-medium">Instrutor:</span>{" "}
              {course.instructor}
            </div>
          </CardHeader>

          <CardContent className="pt-0 mt-auto">
            <div className="flex flex-wrap gap-2 mb-4">
              {course.technologies.slice(0, 4).map((tech) => (
                <Badge
                  key={tech}
                  variant="outline"
                  className="text-xs bg-slate-800/50 text-slate-300 border-slate-600 hover:border-emerald-500/50"
                >
                  {tech}
                </Badge>
              ))}
              {course.technologies.length > 4 && (
                <Badge
                  variant="outline"
                  className="text-xs bg-slate-800/50 text-slate-400 border-slate-600"
                >
                  +{course.technologies.length - 4}
                </Badge>
              )}
            </div>

            {(course.certificateImage || course.certificateUrl) && (
              <>
                {course.certificateImage ? (
                  <Button
                    size="sm"
                    className="w-full bg-emerald-600 hover:bg-emerald-700 text-white border-emerald-500"
                    onClick={handleViewCertificate}
                  >
                    Ver Certificado
                  </Button>
                ) : course.certificateUrl ? (
                  <Button
                    asChild
                    size="sm"
                    className="w-full bg-emerald-600 hover:bg-emerald-700 text-white border-emerald-500"
                  >
                    <Link
                      href={course.certificateUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Ver Certificado
                    </Link>
                  </Button>
                ) : null}
              </>
            )}
          </CardContent>
        </Card>
      </MotionDiv>

      {/* Modal do Certificado */}
      {course.certificateImage && (
        <CertificateModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          certificate={{
            title: course.title,
            image: course.certificateImage,
            instructor: course.instructor,
            completedAt: course.completedAt || "Data não informada",
          }}
        />
      )}
    </>
  );
}

export default function CoursesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      {/* Floating Particles Background */}
      <FloatingParticles />

      <main className="relative pt-16 overflow-hidden">
        {/* Hero Section */}
        <Section className="pt-32 pb-16">
          <div className="text-center">
            <MotionDiv
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-emerald-400 via-blue-400 to-purple-400 bg-clip-text text-transparent mb-6">
                Meus Cursos
              </h1>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
                Jornada de aprendizado contínuo em tecnologia, design e
                desenvolvimento. Cada curso representa um passo na evolução
                profissional.
              </p>
            </MotionDiv>
          </div>
        </Section>

        {/* Courses Grid */}
        <Section className="py-16">
          <div className="mb-8">
            <p className="text-slate-400">
              {courses.length} curso{courses.length !== 1 ? "s" : ""} disponível
              {courses.length !== 1 ? "eis" : ""}
            </p>
          </div>

          <MotionDiv
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {courses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </MotionDiv>
        </Section>
      </main>
    </div>
  );
}
