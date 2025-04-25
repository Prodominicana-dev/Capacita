import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <section>
      <div className="flex flex-col xl:flex-row xl:justify-between items-center bg-[#004B97] py-16 text-white xl:px-24">
        <div className="flex flex-col gap-4 w-10/12 xl:w-4/12">
          <Image
            src="/CapacitaLogoWhite.svg"
            alt="Logo"
            width={3840}
            height={2160}
            className="w-60 object-cover"
          />
          <p>
            Impulsando el comercio exterior y la inversión extranjera a través
            de la educación de calidad.
          </p>
          <div className="flex gap-3">
            <Link href="https://facebook.com/ProDominicana" target="_blank">
              <Image
                src="/icons/facebook.svg"
                alt="Logo"
                width={500}
                height={500}
                className="w-7 object-cover"
              />
            </Link>
            <Link href="https://x.com/ProDominicana" target="_blank">
              <Image
                src="/icons/x.svg"
                alt="Logo"
                width={500}
                height={500}
                className="w-7 object-cover"
              />
            </Link>
            <Link href="https://instagram.com/ProDominicana" target="_blank">
              <Image
                src="/icons/instagram.svg"
                alt="Logo"
                width={500}
                height={500}
                className="w-7 object-cover"
              />
            </Link>
            <Link
              href="https://www.linkedin.com/company/ceird/posts"
              target="_blank"
            >
              <Image
                src="/icons/linkedin.svg"
                alt="Logo"
                width={500}
                height={500}
                className="w-7 object-cover"
              />
            </Link>
            <Link href="https://youtube.com/ProDominicana" target="_blank">
              <Image
                src="/icons/youtube.svg"
                alt="Logo"
                width={500}
                height={500}
                className="w-7 object-cover"
              />
            </Link>
          </div>
        </div>
        <div className="flex flex-col gap-4 w-10/12 xl:w-4/12 mt-10 xl:mt-0">
          <Link
            href={"https://maps.app.goo.gl/DWncMUF87sRyHcUm8"}
            className="flex items-center gap-3 hover:text-sky-500 duration-300"
            target="_blank"
          >
            <Image
              src="/icons/location.svg"
              alt="Logo"
              width={500}
              height={500}
              className="size-7 object-cover"
            />
            <p>
              Av. 27 de Febrero esq. Av. Gregorio Luperón, frente a la Plaza de
              la Bandera, Santo Domingo, República Dominicana.
            </p>
          </Link>
          <Link
            href="tel:+18095305505"
            className="flex items-center gap-3 hover:text-sky-500 duration-300"
            target="_blank"
          >
            <Image
              src="/icons/phone.svg"
              alt="Logo"
              width={500}
              height={500}
              className="size-7 object-cover"
            />
            <p>809-530-5505</p>
          </Link>
          <Link
            href="mailto:servicios@prodominicana.gob.do"
            className="flex items-center gap-3 hover:text-sky-500 duration-300"
            target="_blank"
          >
            <Image
              src="/icons/mail.svg"
              alt="Logo"
              width={500}
              height={500}
              className="size-7 object-cover"
            />
            <p>servicios@prodominicana.gob.do</p>
          </Link>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center bg-[#512874] py-5 text-xs text-white font-semibold uppercase">
        <h1>
          CopyRight © {year}. ProDominicana Capacita. Todos los derechos
          reservados.
        </h1>
      </div>
    </section>
  );
}
