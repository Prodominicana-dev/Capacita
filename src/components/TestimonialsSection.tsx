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
import Link from "next/link";

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Esmeralda Taveras",
      role: "Estudiante",
      text: "El curso fue increíble, aprendí mucho y los instructores fueron muy profesionales.",
      image: "/images/avatars/esmeralda.png",
    },
    {
      name: "Maria Lopez",
      role: "Estudiante",
      text: "Una experiencia única, me ayudó a mejorar mis habilidades en el comercio exterior.",
      image: "/images/avatars/esmeralda.png",
    },
    {
      name: "Esmeralda Taveras",
      role: "Estudiante",
      text: "Recomiendo este curso a todos los que quieran aprender sobre comercio internacional.",
      image: "/images/avatars/esmeralda.png",
    },
  ];
  return (
    <section className="flex flex-col justify-center items-center bg-white py-16">
      <h1 className="text-4xl text-black font-bold mb-10">Testimonios</h1>
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
                <p className="text-gray-600 text-center text-xl">
                  {testimonial.text}
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
