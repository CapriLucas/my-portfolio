import React, { useEffect, useState } from "react";
import sanityClient from "../client.js";
import BlockContent from "@sanity/block-content-to-react";
import urlFor from "../helpers/imagerUrl";

export default function About() {
    const [author, setAuthor] = useState(null);
    useEffect(() => {
        sanityClient.fetch(`*[_type == "author"]{
            name,
            bio,
            "authorImage":image.asset->url
        }`)
            .then((data) => setAuthor(data[0]))
            .catch(console.error);
    }, []);

    if (!author) return <div>Loading...</div>;

    return (
        <main className="bg-green-50 min-h-screen p-5">

            <div className=" lg:pt-20 container mx-auto relative">
                <section className="bg-gray-50 rounded-lg shadow-2xl lg:flex p-8">
                    <img src={urlFor(author.authorImage).url()} className="rounded w-auto h-96 lg:w-auto lg:h-96 mr-8" alt={author.name} />
                    <div className="text-lg flex flex-col justify-center">
                        <h1 className="cursive text-6xl text-green-300 mb-4 mt-5">
                            Hey there. I'm{" "}
                            <span className="text-green-500">{author.name}</span>
                        </h1>
                        <div className="prose lg:prose-xl ">
                            <BlockContent blocks={author.bio} projectId="0bnmee57" dataset="production" />
                        </div>
                    </div>
                </section>
            </div>
        </main>
    );

}