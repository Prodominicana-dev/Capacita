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
          <CarouselItem className="pl-8 md:basis-1/2 lg:basis-1/3">
            <CourseCard />
          </CarouselItem>
          <CarouselItem className="pl-8 md:basis-1/2 lg:basis-1/3">
            <CourseCard />
          </CarouselItem>
          <CarouselItem className="pl-8 md:basis-1/2 lg:basis-1/3">
            <CourseCard />
          </CarouselItem>
          <CarouselItem className="pl-8 md:basis-1/2 lg:basis-1/3">
            <CourseCard />
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious className="hidden xl:flex" />
        <CarouselNext className="hidden xl:flex" />
      </Carousel>
    </section>
  );
}
