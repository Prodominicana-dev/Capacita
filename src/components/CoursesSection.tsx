"use client";
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import CourseCard from "@/components/CourseCard";

export default function CoursesSection() {
  const courses = [
    {
      title: "Exportar Paso a Paso",
      url: "/plataforma/course/view.php?id=3",
      image: "/images/courses/how-to-export.jpg",
      description:
        "Aprende los fundamentos y etapas clave del proceso de exportación desde cero.",
    },
    {
      title: "Aspectos Fundamentales de E-Commerce",
      url: "/plataforma/course/view.php?id=4",
      image: "/images/courses/e-commerce.jpg",
      description:
        "Conoce los principios básicos del comercio electrónico y su aplicación en mercados globales.",
    },
    {
      title: "Negociaciones Estratégicas, Tácticas y Estilos",
      url: "/plataforma/course/view.php?id=5",
      image: "/images/courses/negotiation.jpg",
      description:
        "Desarrolla habilidades para negociar con eficacia aplicando estrategias, tácticas y estilos diversos.",
    },
    {
      title: "Los Incoterms",
      url: "/plataforma/course/view.php?id=6",
      image: "/images/courses/incoterms.jpg",
      description:
        "Comprende el uso correcto de los Incoterms en contratos internacionales de compraventa.",
    },
    {
      title: "La Gestión Internacional en Procesos de Exportación",
      url: "/plataforma/course/view.php?id=7",
      image: "/images/courses/international-management.jpg",
      description:
        "Explora cómo gestionar eficazmente los procesos involucrados en la exportación internacional.",
    },
    {
      title: "Cultura y Pensamiento Exportador",
      url: "/plataforma/course/view.php?id=8",
      image: "/images/courses/export-culture.jpg",
      description:
        "Fomenta una mentalidad orientada a la exportación y entiende las implicaciones culturales del comercio exterior.",
    },
    {
      title: "Comportamiento del Consumidor",
      url: "/plataforma/course/view.php?id=9",
      image: "/images/courses/customer-behavior.jpg",
      description:
        "Estudia cómo piensan y actúan los consumidores en distintos mercados para mejorar estrategias de venta.",
    },
    {
      title: "Desarrollo del Plan Estratégico para el Exportador",
      url: "/plataforma/course/view.php?id=10",
      image: "/images/courses/export-strategy.jpg",
      description:
        "Aprende a diseñar un plan estratégico para posicionar tus productos en mercados internacionales.",
    },
    {
      title: "Internacionalización de Pymes",
      url: "/plataforma/course/view.php?id=11",
      image: "/images/courses/internationalization.jpg",
      description:
        "Descubre cómo llevar una pequeña o mediana empresa al mercado internacional de forma sostenible.",
    },
    {
      title: "Toma de Decisiones",
      url: "/plataforma/course/view.php?id=12",
      image: "/images/courses/decision.jpg",
      description:
        "Mejora tu capacidad para tomar decisiones empresariales estratégicas y bien fundamentadas.",
    },
    {
      title: "Ley 84-99 Reactivación y Fomento de las Exportaciones",
      url: "/plataforma/course/view.php?id=13",
      image: "/images/courses/export-law.jpg",
      description:
        "Conoce la Ley 84-99 y cómo esta promueve las exportaciones en la República Dominicana.",
    },
    {
      title: "Gestión de Envase, Empaque y Embalaje de Exportación",
      url: "/plataforma/course/view.php?id=14",
      image: "/images/courses/packaging.jpg",
      description:
        "Aprende a seleccionar y gestionar envases, empaques y embalajes adecuados para exportar con éxito.",
    },
    {
      title: "Gestión de Riesgos en el Comercio Exterior",
      url: "/plataforma/course/view.php?id=15",
      image: "/images/courses/risk-management.jpg",
      description:
        "Identifica y mitiga los principales riesgos asociados al comercio internacional.",
    },
    {
      title: "Comunicación Efectiva en los Negocios",
      url: "/plataforma/course/view.php?id=16",
      image: "/images/courses/effective-communication.jpg",
      description:
        "Mejora tus habilidades de comunicación para entornos empresariales y negociaciones internacionales.",
    },
    {
      title: "Gestión Aduanera en la República Dominicana",
      url: "/plataforma/course/view.php?id=17",
      image: "/images/courses/customs-management.jpg",
      description:
        "Conoce los procedimientos aduaneros locales y su importancia en el comercio exterior.",
    },
    {
      title: "Inteligencia Artificial en el Comercio Exterior",
      url: "/plataforma/course/view.php?id=18",
      image: "/images/courses/ai-in-trade.jpg",
      description:
        "Descubre cómo aplicar inteligencia artificial para optimizar procesos de exportación e importación.",
    },
    {
      title: "Inteligencia de Mercados",
      url: "/plataforma/course/view.php?id=19",
      image: "/images/courses/market-intelligence.jpg",
      description:
        "Aprende a recopilar y analizar información de mercados para tomar decisiones comerciales acertadas.",
    },
  ];

  return (
    <section className="flex flex-col justify-center items-center bg-white py-16">
      <h1 className="text-4xl text-black font-bold mb-10">Cursos destacados</h1>
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 5000,
          }),
        ]}
        className="w-11/12"
      >
        <CarouselContent className="-ml-4">
          {courses.map((course, index) => (
            <CarouselItem
              key={index}
              className="pl-8 md:basis-1/2 lg:basis-1/3"
            >
              <CourseCard
                title={course.title}
                description={course.description}
                image={course.image}
                link={course.url}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden xl:flex" />
        <CarouselNext className="hidden xl:flex" />
      </Carousel>
    </section>
  );
}
