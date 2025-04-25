import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function CourseCard({
  title,
  description,
  image,
}: {
  title?: string;
  description?: string;
  image?: string;
}) {
  return (
    <div className="flex flex-col gap-3 ">
      <Image
        src="/images/hero.jpg"
        alt="Logo"
        width={3840}
        height={2160}
        className="w-full rounded-2xl"
      />
      <h1 className="text-xl font-bold">Formacion Empresarial</h1>
      <p className="text-gray-400">
        Dirigido a emprendedores, exportadores y potenciales exportadores
      </p>
      <Button
        asChild
        className="w-min bg-blue-500 hover:bg-blue-600 duration-300 text-white font-bold py-2 px-4 rounded"
      >
        <Link href="/register">Aplicar</Link>
      </Button>
    </div>
  );
}
