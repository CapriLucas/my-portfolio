import React, { useState, useEffect } from "react";
import sanityClient from "../client";

export default function Project() {
    const [projectData, setProjectData] = useState(null);
    useEffect(() => {
        sanityClient.fetch(`*[_type == "project"]{
            title,
            date,
            place,
            description,
            projectType,
            link,
            repoLink,
            tags
        }`).then((data) => setProjectData(data))
            .catch(console.error);
    }, []);
    return (
        <main className="bg-gray-50 min-h-screen py-12 px-9">
            <section className="container mx-auto">
                <h1 className="text-5xl flex justify-center cursive">My Projects</h1>
                <h2 className="text-lg text-gray-600 flex justify-center mb-12"> Welcome to my projects page!</h2>
                <section className={(window.innerWidth < 1200) ? "grid-cols-1 grid gap-8  " : "grid-cols-2 grid gap-8 "}>
                    {projectData &&
                        projectData.map((project, index) => (
                            <article className="relative rounded-lg shadow-xl bg-white p-10">
                                <h3 className="text-gray-800 text-3xl font-bold mb-2 hover:text-red-700">
                                    <a
                                        href={project.link}
                                        alt={project.title}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >{project.title}</a>
                                </h3>
                                <div className="text-gray-500 text-xs space-x-4">
                                    <span>
                                        <strong className="font-bold">Finished on</strong>:{" "}
                                        {new Date(project.date).toLocaleDateString()}
                                    </span>
                                    <span>
                                        <strong className="font-bold">Company</strong>:{" "}
                                        {project.place}
                                    </span>
                                    <span>
                                        <strong className="font-bold">Type</strong>:{" "}
                                        {project.projectType}
                                    </span>
                                    <p className="my-6 text-lg text-gray-700 leading-relaxed">
                                        {project.description}
                                    </p>
                                    <div className="flex-col flex">
                                        <a href={project.link} rel="noopener noreferrer" target="_blank" className="text-red-500 font-bold hover:underline hover text-xl text-red">
                                            View The Project{" "}
                                            <span role="img" aria-label="right-pointer">👉</span>
                                        </a>
                                        <a href={project.repoLink} rel="noopener noreferrer" target="_blank" className="text-red-500 font-bold hover:underline hover text-xl text-red">
                                            View The Repo{" "}
                                            <span role="img" aria-label="right-pointer">👉</span>
                                        </a>
                                    </div>
                                </div>
                            </article>
                        ))}
                </section>
            </section>
        </main>
    );

}