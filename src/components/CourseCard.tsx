import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function CourseCard({
  title,
  description,
  image,
  link,
}: {
  title: string;
  description: string;
  image: string;
  link: string;
}) {
  return (
    <div className="flex flex-col gap-3 ">
      <Image
        src={image}
        alt="Logo"
        width={3840}
        height={2160}
        className="w-full h-72 object-cover rounded-2xl"
      />
      <h1 className="text-xl font-bold">{title}</h1>
      <p className="text-gray-400">{description}</p>
      <Button
        asChild
        className="w-min bg-blue-500 hover:bg-blue-600 duration-300 text-white font-bold py-2 px-4 rounded"
      >
        <Link href={link}>Aplicar</Link>
      </Button>
    </div>
  );
}
