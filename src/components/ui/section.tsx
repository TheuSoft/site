"use client";

import { cn } from "@/helpers/cn";
import { MotionSection } from "@/providers/motion-provider";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  containerClassName?: string;
  animate?: boolean;
}

const fadeInUp = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut" as const,
    },
  },
};

export function Section({
  children,
  className,
  id,
  containerClassName,
  animate = true,
}: SectionProps) {
  if (animate) {
    return (
      <MotionSection
        id={id}
        className={cn("section-padding py-16 sm:py-20 lg:py-24", className)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeInUp}
      >
        <div className={cn("container-responsive", containerClassName)}>
          {children}
        </div>
      </MotionSection>
    );
  }

  return (
    <section
      id={id}
      className={cn("section-padding py-16 sm:py-20 lg:py-24", className)}
    >
      <div className={cn("container-responsive", containerClassName)}>
        {children}
      </div>
    </section>
  );
}
