'use client';

import { Section } from '@/components/ui/section';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MotionDiv, staggerContainer, fadeInUp } from '@/providers/motion-provider';
import {
  AcademicCapIcon,
  BuildingOffice2Icon,
  CalendarDaysIcon,
} from '@/components/icons';

const skills = [
  'JavaScript', 'TypeScript', 'React', 'Next.js', 'Node.js', 'Express',
  'Python', 'Django', 'PostgreSQL', 'MongoDB', 'Docker', 'AWS',
  'Git', 'Tailwind CSS', 'Framer Motion', 'Jest', 'Cypress', 'GraphQL'
];

const experiences = [
  {
    title: 'Senior Full Stack Developer',
    company: 'Tech Solutions Inc.',
    period: '2022 - Presente',
    description: 'Desenvolvimento de aplicações web complexas usando React, Next.js e Node.js. Liderança técnica de equipe de 5 desenvolvedores.',
  },
  {
    title: 'Full Stack Developer',
    company: 'Digital Agency Co.',
    period: '2020 - 2022',
    description: 'Criação de sites e aplicações web para clientes diversos. Especialização em React, Vue.js e APIs REST.',
  },
  {
    title: 'Frontend Developer',
    company: 'StartupXYZ',
    period: '2019 - 2020',
    description: 'Desenvolvimento frontend com foco em experiência do usuário. Trabalho com React, Redux e integração de APIs.',
  },
];

const education = [
  {
    degree: 'Bacharelado em Ciência da Computação',
    institution: 'Universidade de São Paulo',
    period: '2015 - 2019',
  },
  {
    degree: 'Curso de React Avançado',
    institution: 'Rocketseat',
    period: '2020',
  },
  {
    degree: 'AWS Solutions Architect',
    institution: 'Amazon Web Services',
    period: '2021',
  },
];

export default function SobrePage() {
  return (
    <main className="pt-16">
      {/* Hero Section */}
      <Section id="sobre-hero" className="text-center">
        <MotionDiv variants={fadeInUp}>
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="heading-gradient">Sobre Mim</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Desenvolvedor apaixonado por tecnologia, sempre em busca de novos desafios 
            e oportunidades para crescer profissionalmente.
          </p>
        </MotionDiv>
      </Section>

      {/* Bio Section */}
      <Section id="bio">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <MotionDiv variants={fadeInUp}>
            <h2 className="text-3xl font-bold mb-6 heading-gradient">Minha História</h2>
            <div className="space-y-4 text-gray-300">
              <p>
                Comecei minha jornada na programação em 2015, durante a faculdade de 
                Ciência da Computação. Desde então, venho me especializando em 
                desenvolvimento web full stack, com foco especial em tecnologias 
                JavaScript e Python.
              </p>
              <p>
                Ao longo dos anos, trabalhei em diversos projetos, desde startups 
                até grandes corporações, sempre buscando entregar soluções de alta 
                qualidade e com foco na experiência do usuário.
              </p>
              <p>
                Atualmente, trabalho como Senior Full Stack Developer, liderando 
                projetos e mentorando desenvolvedores juniores. Minha paixão é 
                transformar ideias complexas em soluções digitais elegantes e eficientes.
              </p>
            </div>
          </MotionDiv>
          
          <MotionDiv variants={fadeInUp}>
            <Card className="bg-dark-800 border-dark-700">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold text-emerald-400 mb-6">
                  Principais Competências
                </h3>
                <div className="grid grid-cols-2 gap-4 text-gray-300">
                  <div>
                    <h4 className="font-medium mb-2">Frontend</h4>
                    <ul className="text-sm space-y-1">
                      <li>React & Next.js</li>
                      <li>TypeScript</li>
                      <li>Tailwind CSS</li>
                      <li>Framer Motion</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Backend</h4>
                    <ul className="text-sm space-y-1">
                      <li>Node.js & Express</li>
                      <li>Python & Django</li>
                      <li>PostgreSQL</li>
                      <li>MongoDB</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">DevOps</h4>
                    <ul className="text-sm space-y-1">
                      <li>Docker</li>
                      <li>AWS</li>
                      <li>Vercel</li>
                      <li>GitHub Actions</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Tools</h4>
                    <ul className="text-sm space-y-1">
                      <li>Git & GitHub</li>
                      <li>Jest & Cypress</li>
                      <li>Figma</li>
                      <li>VS Code</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </MotionDiv>
        </div>
      </Section>

      {/* Skills Section */}
      <Section id="skills">
        <MotionDiv variants={fadeInUp} className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 heading-gradient">
            Tecnologias & Ferramentas
          </h2>
          <p className="text-xl text-gray-300">
            Linguagens e tecnologias que domino
          </p>
        </MotionDiv>
        
        <MotionDiv
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-wrap gap-3 justify-center"
        >
          {skills.map((skill) => (
            <MotionDiv key={skill} variants={fadeInUp}>
              <Badge 
                variant="secondary" 
                className="bg-dark-800 border-dark-700 text-white hover:border-emerald-600/50 transition-colors px-4 py-2 text-sm"
              >
                {skill}
              </Badge>
            </MotionDiv>
          ))}
        </MotionDiv>
      </Section>

      {/* Experience Section */}
      <Section id="experience">
        <MotionDiv variants={fadeInUp} className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 heading-gradient">
            Experiência Profissional
          </h2>
        </MotionDiv>
        
        <MotionDiv
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-8"
        >
          {experiences.map((exp, index) => (
            <MotionDiv key={index} variants={fadeInUp}>
              <Card className="bg-dark-800 border-dark-700 hover:border-emerald-600/50 transition-colors">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-white">{exp.title}</h3>
                      <div className="flex items-center gap-2 text-emerald-400">
                        <BuildingOffice2Icon className="h-4 w-4" />
                        <span>{exp.company}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-gray-400">
                      <CalendarDaysIcon className="h-4 w-4" />
                      <span className="text-sm">{exp.period}</span>
                    </div>
                  </div>
                  <p className="text-gray-300">{exp.description}</p>
                </CardContent>
              </Card>
            </MotionDiv>
          ))}
        </MotionDiv>
      </Section>

      {/* Education Section */}
      <Section id="education">
        <MotionDiv variants={fadeInUp} className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 heading-gradient">
            Formação
          </h2>
        </MotionDiv>
        
        <MotionDiv
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {education.map((edu, index) => (
            <MotionDiv key={index} variants={fadeInUp}>
              <Card className="bg-dark-800 border-dark-700 hover:border-emerald-600/50 transition-colors h-full">
                <CardContent className="p-6">
                  <div className="flex items-start gap-3">
                    <AcademicCapIcon className="h-6 w-6 text-emerald-400 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-white mb-2">{edu.degree}</h3>
                      <p className="text-gray-300 text-sm mb-2">{edu.institution}</p>
                      <p className="text-gray-400 text-xs">{edu.period}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </MotionDiv>
          ))}
        </MotionDiv>
      </Section>
    </main>
  );
}