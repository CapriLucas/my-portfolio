import React from "react";
import image from "../fondo.jpg"
import '../styles/home.css'
export default function Home() {
    return (
        <main className="overflow-hidden">
            <img
                src={image}
                alt="Stars background"
                className="absolute object-cover fondo-imagen w-full h-full " />
            <section
                className="relative flex justify-center  pt-12 lg:pt-64 px-8"
            >
                <h1 className="text-6xl text-red-800 font-bold cursive leading-none lg:leading-snug home-name">Aloha. I'm CapriLucas</h1>
            </section>
        </main >
    );

}