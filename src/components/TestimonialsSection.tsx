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
import Image from "next/image";

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Laura Méndez",
      role: "Estudiante",
      testimony:
        "Gracias a Capacita, ahora entiendo mejor cómo exportar mis productos y he podido llegar a nuevos mercados.",
      image: "/images/avatars/laura-mendez.png",
    },
    {
      name: "Carlos Ramírez",
      role: "Estudiante",
      testimony:
        "Las capacitaciones fueron claras y muy útiles. Me ayudaron a formalizar mi empresa y prepararme para la exportación.",
      image: "/images/avatars/carlos-ramirez.png",
    },
    {
      name: "Sofía Vargas",
      role: "Estudiante",
      testimony:
        "Capacita me permitió conectar con expertos del comercio exterior y mejorar mi estrategia comercial.",
      image: "/images/avatars/sofia-vargas.png",
    },
    {
      name: "José Luis Peña",
      role: "Estudiante",
      testimony:
        "Con Capacita entendí todo el proceso logístico para exportar. Ha sido una herramienta clave para mi negocio.",
      image: "/images/avatars/jose-luis.png",
    },
    {
      name: "Mariela Torres",
      role: "Estudiante",
      testimony:
        "Estoy muy agradecida con ProDominicana por brindar una plataforma tan completa y accesible como Capacita.",
      image: "/images/avatars/mariela-torres.png",
    },
  ];

  return (
    <section className="flex flex-col justify-center items-center bg-white py-16">
      <h1 className="text-4xl text-black font-bold mb-2">Testimonios</h1>
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
        className="w-5/12"
      >
        <CarouselContent>
          {testimonials.map((testimonial, index) => (
            <CarouselItem key={index}>
              <div className="flex flex-col items-center p-2">
                <p className="w-8/12 text-gray-600 text-center text-xl">
                  {testimonial.testimony}
                </p>
                <div className="flex items-center justify-center gap-3 mt-5">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={100}
                    height={100}
                    className="size-16 object-cover rounded-full"
                  />
                  <div>
                    <h2 className="text-xl font-semibold">
                      {testimonial.name}
                    </h2>
                    <p className="text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
}
