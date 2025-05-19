import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="relative w-full h-[70vh] flex items-center justify-center">
      <Image
        src="/images/hero1.jpg"
        alt="Logo"
        width={3840}
        height={2160}
        className="w-full h-full absolute inset-0 object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black to-black/5 px-10 xl:px-28 py-10 flex items-center text-white">
        <div className="w-full xl:w-5/12">
          <h1 className="text-2xl xl:text-4xl font-bold mb-4">
            Verte lograr tus metas nos permite presentar las oportunidades de
            nuestro país
          </h1>
          <p className="text-lg mb-6">
            Capacítate aquí desde cualquier parte del mundo totalmente libre de
            costo
          </p>
          <Button
            asChild
            className="bg-sky-500 hover:bg-sky-600 duration-300 text-white font-bold py-2 px-4 rounded"
          >
            <Link href="/plataforma/login/index.php">Comenzar</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
