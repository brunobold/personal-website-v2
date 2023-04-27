import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image';

import { faLeftLong } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Layout from "../../components/Layout";

export default function About() {
    return (
        <>
        <Head>
            <title>About | Bruno Bold</title>
            <meta name="description" content="Home Page of BrunoBold.com" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <Layout>
            <div className="px-6 lg:px-64">
                <div className="py-8">                    
                    <h1 className="text-sky-500 text-lg font-bold">ABOUT ME</h1>
                    <h2 className="text-4xl lg:text-6xl font-medium pt-4">Hi, my name is <span className="font-bold">Bruno</span> 👋</h2>
                    <div className="pt-2 hover:-translate-y-1 transition ease-out">
                        <Link href="/" className="font-bold text-sm text-gray-700">
                            <FontAwesomeIcon className="pr-2" icon={faLeftLong}>Back Home</FontAwesomeIcon>
                            Back Home
                        </Link>
                    </div>
                </div>

                <div className="text-left py-4 lg:py-16">
                    <div className="bg-white p-8 rounded-2xl">
                        <div>
                            <h1 className="text-sky-600 text-3xl lg:text-4xl font-bold">About Me</h1>
                            <div className="lg:grid grid-cols-3 pt-6 px-2 gap-8">
                                <div className="col-span-2">
                                    <p className="text-slate-700 text-md lg:text-lg">
                                        Hi there, I'm Bruno, a 19-year-old software developer based in England. With a passion for coding, I've worked on a diverse range of projects such as full-stack web apps, chatbots, and computer games.
                                        <br/><br/>Currently, I'm focused on learning React and NextJS, and you can find my latest web app projects on my <Link className="text-sky-600 font-medium underline" href="/projects">projects page</Link>. I always strive to expand my knowledge and skills by exploring new languages, frameworks, and tech stacks.
                                        <br/><br/>When I'm not programming, you can find me creating 3D models on Blender. I love converting these models into STL files and 3D printing them. As well as this, my interest in Arduino and Raspberry Pi microcontrollers goes hand-in-hand with this hobby.
                                        <br/><br/>Feel free to reach out to me if you'd like to connect, collaborate, or just talk tech. You can get in touch with me via my <Link className="text-sky-600 font-medium underline" href="/contact">contact page</Link> or <Link className="text-sky-600 font-medium underline" href="https://www.linkedin.com/in/bold/">LinkedIn</Link>.
                                    </p>
                                </div>
                                <div className="cols-span-1 pt-2">
                                    <Image className="rounded-xl shadow-xl" src="https://media.tenor.com/DMpbzFxAxRYAAAAd/snorlax.gif" width={1200} height={500} alt="Spotify Art Guesser Placeholder Image"/>
                                </div>
                            </div>
                        </div>
                        <div className="pt-16">
                            <h1 className="text-sky-600 text-3xl lg:text-4xl font-bold">Experience</h1>
                            <div className="lg:grid grid-cols-2 pt-8 px-4">

                                <div className="col-span-1">
                                    <h2 className="text-black text-xl font-medium">Viker Games</h2>
                                    <h4 className="text-sky-800 text-sm">October 2022 - Present</h4>

                                    <ul className="text-slate-700 list-disc pl-8 pt-2 max-w-md leading-relaxed space-y-2">
                                        <li>Develop chatbots built in NodeJS using DynamoDB, for the community & social aspects of the business.</li>
                                        <li>Design and build frontend webpages using JQuery and AWS Lambda functions for API calls.</li>
                                        <li>Collaborate with various teams across the studio in various departments including Engineers, Artists & Marketing.</li>
                                        <li>Manage and run an online community with thousands of daily active users.</li>
                                    </ul>
                                </div>

                                <div className="col-span-1 pt-12 lg:pt-0">
                                    <h2 className="text-black text-xl font-medium">Hobby Programmer</h2>
                                    <h4 className="text-sky-800 text-sm">???</h4>

                                    <ul className="text-slate-700 list-disc pl-8 pt-2 max-w-md leading-relaxed space-y-2">
                                        <li>Be a super cool self taught programmer.</li>
                                    </ul>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
        </>
    )
}