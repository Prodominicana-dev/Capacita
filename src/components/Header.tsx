"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <nav className="flex justify-between items-center px-24 py-5 bg-white ">
      <Link href="/">
        <Image
          src="/CapacitaLogo.svg"
          alt="Logo"
          width={500}
          height={500}
          className="w-60 object-cover"
        />
      </Link>
      <div className="gap-10 text-[#00295F] font-medium hidden lg:flex">
        <Link
          href="/plataforma/local/staticpage/view.php?page=Cursos-Disponibles"
          className="hover:text-blue-700 duration-300 uppercase"
        >
          Recursos y Herramientas
        </Link>
        <Link
          href="https://prodominicana.gob.do/contacto"
          target="_blank"
          className="hover:text-blue-700 duration-300 uppercase"
        >
          Contacto
        </Link>
      </div>
    </nav>
  );
}
