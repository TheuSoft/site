"use client";

import { useState } from "react";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import {
  MotionDiv,
  fadeInUp,
  staggerContainer,
} from "@/providers/motion-provider";
import {
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
  CheckCircleIcon,
  ArrowRightIcon,
} from "@/components/icons";

const contactInfo = [
  {
    icon: EnvelopeIcon,
    label: "Email",
    value: "contato@portfolio.com",
    href: "mailto:contato@portfolio.com",
  },
  {
    icon: PhoneIcon,
    label: "Telefone",
    value: "+55 (11) 99999-9999",
    href: "tel:+5511999999999",
  },
  {
    icon: MapPinIcon,
    label: "Localização",
    value: "São Paulo, Brasil",
    href: "#",
  },
];

const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com",
    icon: "📘",
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com",
    icon: "💼",
  },
  {
    name: "Twitter",
    url: "https://twitter.com",
    icon: "🐦",
  },
  {
    name: "Instagram",
    url: "https://instagram.com",
    icon: "📷",
  },
];

export default function ContatoPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simular envio do formulário
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setIsSubmitted(true);

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 3000);
  };

  return (
    <main className="pt-16">
      {/* Hero Section */}
      <Section id="contato-hero" className="text-center">
        <MotionDiv variants={fadeInUp}>
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="heading-gradient">Entre em Contato</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Tem um projeto em mente? Vamos conversar! Estou sempre aberto a
            novos desafios e oportunidades interessantes.
          </p>
        </MotionDiv>
      </Section>

      {/* Contact Form & Info */}
      <Section id="contact-content">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <MotionDiv variants={fadeInUp}>
            <Card className="bg-dark-800 border-dark-700">
              <CardHeader>
                <CardTitle className="text-white text-2xl">
                  Envie uma Mensagem
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                {isSubmitted ? (
                  <div className="text-center py-8">
                    <CheckCircleIcon className="h-16 w-16 text-emerald-400 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-white mb-2">
                      Mensagem Enviada!
                    </h3>
                    <p className="text-gray-400">
                      Obrigado pelo contato. Retornarei em breve!
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-sm font-medium text-gray-300 mb-2"
                        >
                          Nome
                        </label>
                        <input
                          id="name"
                          name="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 bg-dark-900 border border-dark-600 rounded-md text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent"
                          placeholder="Seu nome"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-gray-300 mb-2"
                        >
                          Email
                        </label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 bg-dark-900 border border-dark-600 rounded-md text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent"
                          placeholder="seu@email.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="subject"
                        className="block text-sm font-medium text-gray-300 mb-2"
                      >
                        Assunto
                      </label>
                      <input
                        id="subject"
                        name="subject"
                        type="text"
                        required
                        value={formData.subject}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 bg-dark-900 border border-dark-600 rounded-md text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent"
                        placeholder="Sobre o que você gostaria de falar?"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-gray-300 mb-2"
                      >
                        Mensagem
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={6}
                        required
                        value={formData.message}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 bg-dark-900 border border-dark-600 rounded-md text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent resize-none"
                        placeholder="Conte-me mais sobre seu projeto ou ideia..."
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-emerald-600 hover:bg-emerald-700 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <div className="flex items-center gap-2">
                          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          Enviando...
                        </div>
                      ) : (
                        <div className="flex items-center gap-2">
                          <ArrowRightIcon className="h-4 w-4" />
                          Enviar Mensagem
                        </div>
                      )}
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </MotionDiv>

          {/* Contact Information */}
          <MotionDiv variants={fadeInUp} className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-white mb-6">
                Informações de Contato
              </h2>
              <div className="space-y-4">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <div key={index} className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-emerald-600/20 rounded-lg flex items-center justify-center">
                        <Icon className="h-6 w-6 text-emerald-400" />
                      </div>
                      <div>
                        <p className="text-gray-400 text-sm">{info.label}</p>
                        <a
                          href={info.href}
                          className="text-white hover:text-emerald-400 transition-colors"
                        >
                          {info.value}
                        </a>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-white mb-4">
                Redes Sociais
              </h3>
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-dark-800 border border-dark-700 rounded-lg flex items-center justify-center text-2xl hover:border-emerald-600/50 hover:bg-emerald-600/10 transition-colors"
                    aria-label={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            <Card className="bg-gradient-to-br from-emerald-600/10 to-emerald-400/5 border-emerald-600/20">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-white mb-3">
                  Disponibilidade
                </h3>
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                  <span className="text-emerald-400 font-medium">
                    Disponível para projetos
                  </span>
                </div>
                <p className="text-gray-400 text-sm">
                  Atualmente aceitando novos projetos freelance e oportunidades
                  de trabalho full-time. Tempo de resposta médio: 24 horas.
                </p>
              </CardContent>
            </Card>
          </MotionDiv>
        </div>
      </Section>

      {/* FAQ Section */}
      <Section
        id="faq"
        className="bg-gradient-to-r from-emerald-600/5 to-emerald-400/5 border-y border-emerald-600/10"
      >
        <MotionDiv variants={fadeInUp} className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 heading-gradient">
            Perguntas Frequentes
          </h2>
        </MotionDiv>

        <MotionDiv
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-6"
        >
          {[
            {
              question: "Qual é o seu processo de trabalho?",
              answer:
                "Começo com uma reunião para entender suas necessidades, depois crio um plano detalhado, desenvolvo a solução e mantenho comunicação constante durante todo o processo.",
            },
            {
              question: "Quanto tempo leva um projeto?",
              answer:
                "Depende da complexidade, mas sites simples levam 2-4 semanas, enquanto aplicações complexas podem levar 2-6 meses. Sempre fornecerei um cronograma detalhado.",
            },
            {
              question: "Você oferece suporte pós-entrega?",
              answer:
                "Sim! Ofereço 30 dias de suporte gratuito após a entrega, e também serviços de manutenção contínua se necessário.",
            },
            {
              question: "Como funciona o pagamento?",
              answer:
                "Geralmente trabalho com 50% antecipado e 50% na entrega. Para projetos maiores, podemos dividir em mais parcelas conforme os marcos do projeto.",
            },
          ].map((faq, index) => (
            <MotionDiv key={index} variants={fadeInUp}>
              <Card className="bg-dark-800 border-dark-700 h-full">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-white mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-gray-400">{faq.answer}</p>
                </CardContent>
              </Card>
            </MotionDiv>
          ))}
        </MotionDiv>
      </Section>
    </main>
  );
}
