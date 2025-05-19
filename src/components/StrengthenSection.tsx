"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function StrengthenSection() {
  return (
    <section className="relative w-full h-[70vh] flex items-center justify-center">
      <Image
        src="/images/hero.jpg"
        alt="Logo"
        width={3840}
        height={2160}
        className="w-full h-full absolute inset-0 object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#D0DEEB] to-[#004B97]/80 px-5 xl:px-28 py-5 xl:py-10 flex items-center text-white">
        <div className="w-10/12 xl:w-5/12 text-[#004B97] space-y-3">
          <h1 className="text-4xl font-bold">
            Fortalece tus capacidades para exportar
          </h1>
          <p className="text-lg">Conviértete en un exportador exitoso</p>
          <div className="flex flex-col items-start gap-2 mt-4">
            <Button
              asChild
              variant="outline"
              className=" border-2 border-sky-500 hover:bg-sky-600 hover:text-sky-400 bg-transparent duration-300 font-bold rounded-full m-0"
            >
              <Link href="/plataforma/login/index.php">Ingresa aquí</Link>
            </Button>
            <Button
              asChild
              variant="link"
              className="text-xs p-0 text-[#004B97] "
            >
              <Link href="/plataforma/login/signup.php">
                Si no tienes un Usuario, Registrate aquí.
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
