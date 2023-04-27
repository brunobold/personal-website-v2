import Link from 'next/link';
import Image from 'next/image';

import { faLeftLong } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Layout from "../../components/Layout";

export default function Projects() {
    return (
        <>
        <Layout>
        <div className="px-6 lg:px-64">
                <div className="py-8">
                    <h1 className="text-sky-500 text-lg font-bold">MY PROJECTS</h1>
                    <h2 className="text-4xl lg:text-6xl font-medium pt-4">Looking to see some of my <span className="font-bold">work? 📚</span></h2>
                    <div className="pt-2 hover:-translate-y-1 transition ease-out">
                        <Link href="/" className="font-bold text-sm text-gray-700">
                            <FontAwesomeIcon className="pr-2" icon={faLeftLong}>Back Home</FontAwesomeIcon>
                            Back Home
                        </Link>
                    </div>
                </div>

                <div className="pt-8 lg:pt-16">
                    <div className="lg:flex flex-row p-8 bg-gray-100 rounded-2xl">
                        <div className="basis-1/2 px-2 pr-8">
                            <h1 className="text-sky-500 font-bold text-2xl">PokeBox</h1>
                            <p className="pt-4 leading-relaxed">A Pokemon Save File Manager built in NextJS and Supabase that interprets hex data from Pokemon save files, from generation 1 <i>(game dated back to 1998)</i> up to generation 9 <i>(present)</i>.</p>
                            <div className="pt-6 block lg:hidden">
                                <Image className="rounded-xl hover:shadow-lg" src="/projects/pokebox-banner.png" width={1200} height={600} alt="Pokebox Placeholder Image" priority/>
                            </div>
                            <div className="py-4">
                                <span className="text-xs font-medium inline-block py-1 px-2 uppercase rounded-full bg-sky-500 text-sky-800 last:mr-0 mr-1">NextJS</span>
                                <span className="text-xs font-medium inline-block py-1 px-2 uppercase rounded-full bg-sky-500 text-sky-800 last:mr-0 mr-1">Supabase</span>
                                <span className="text-xs font-medium inline-block py-1 px-2 uppercase rounded-full bg-sky-500 text-sky-800 last:mr-0 mr-1">TailwindCSS</span>
                                <span className="text-xs font-medium inline-block py-1 px-2 uppercase rounded-full bg-sky-500 text-sky-800 last:mr-0 mr-1">PokeAPI</span>
                            </div>
                            <div className="py-4">
                                <Link href="/projects/pokebox">
                                    <span className="text-md font-medium py-4 px-6 uppercase rounded-xl bg-sky-500 text-white hover:bg-sky-400 transition duration-200 hover:shadow-md shadow-sm">Read More</span>
                                </Link>
                            </div>
                        </div>
                        <div className="basis-1/2 px-2 hidden lg:block">
                            <Image className="rounded-xl hover:shadow-lg" src="/projects/pokebox-banner.png" width={1200} height={600} alt="Spotify Art Guesser Placeholder Image"/>
                        </div>
                    </div>
                </div>

                <div className="py-8 lg:py-16">
                    <div className="lg:flex flex-row p-8 bg-gray-100 rounded-2xl">
                        <div className="basis-1/2 px-2 pr-8">
                            <h1 className="text-sky-500 font-bold text-2xl">Spotify Art Guesser</h1>
                            <p className="pt-4 leading-relaxed">A recent project, that I have been working on after being inspired by Wordle. Each day, users are given one album cover from their Spotify top artists, and are required to correctly guess the name of the album/single track.</p>
                            <div className="pt-6 block lg:hidden">
                                <Image className="rounded-xl hover:shadow-lg" src="/projects/spotify-banner.webp" width={1200} height={600} alt="Spotify Art Guesser Placeholder Image"/>
                            </div>
                            <div className="py-4">
                                <span className="text-xs font-medium inline-block py-1 px-2 uppercase rounded-full bg-sky-500 text-sky-800 last:mr-0 mr-1">NextJS</span>
                                <span className="text-xs font-medium inline-block py-1 px-2 uppercase rounded-full bg-sky-500 text-sky-800 last:mr-0 mr-1">NextAuth</span>
                                <span className="text-xs font-medium inline-block py-1 px-2 uppercase rounded-full bg-sky-500 text-sky-800 last:mr-0 mr-1   ">TailwindCSS</span>
                            </div>
                            <div className="py-4">
                                <Link href="/projects/spotify-guesser">
                                    <span className="text-md font-medium py-4 px-6 uppercase rounded-xl bg-sky-500 text-white hover:bg-sky-400 transition duration-200 hover:shadow-md shadow-sm">Read More</span>
                                </Link>
                            </div>
                        </div>
                        <div className="basis-1/2 px-2 hidden lg:block">
                            <Image className="rounded-xl hover:shadow-lg" src="/projects/spotify-banner.webp" width={1200} height={600} alt="Spotify Art Guesser Placeholder Image"/>
                        </div>
                    </div>
                </div>

                <div className="pb-16">
                    <div className="lg:flex flex-row p-8 bg-gray-100 rounded-2xl">
                        <div className="basis-1/2 px-2 pr-8">
                            <h1 className="text-sky-500 font-bold text-2xl">Personal Website V2</h1>
                            <p className="pt-4 leading-relaxed">Second iteration of my personal website.</p>
                            <div className="pt-6 block lg:hidden">
                                <Image className="rounded-xl hover:shadow-lg" src="https://dummyimage.com/1200x600&w=3840&q=75" width={1200} height={500} alt="Spotify Art Guesser Placeholder Image"/>
                            </div>
                            <div className="py-4">
                                <span className="text-xs font-medium inline-block py-1 px-2 uppercase rounded-full bg-sky-500 text-sky-800 last:mr-0 mr-1">NextJS</span>
                                <span className="text-xs font-medium inline-block py-1 px-2 uppercase rounded-full bg-sky-500 text-sky-800 last:mr-0 mr-1">Motion</span>
                                <span className="text-xs font-medium inline-block py-1 px-2 uppercase rounded-full bg-sky-500 text-sky-800 last:mr-0 mr-1   ">TailwindCSS</span>
                            </div>
                            <div className="py-4">
                                <Link href="/projects/personal-website">
                                    <span className="text-md font-medium py-4 px-6 uppercase rounded-xl bg-sky-500 text-white hover:bg-sky-400 transition duration-200 hover:shadow-md shadow-sm">Read More</span>
                                </Link>
                            </div>
                        </div>
                        <div className="basis-1/2 px-2 hidden lg:block">
                            <Image className="rounded-xl hover:shadow-lg" src="https://dummyimage.com/1200x600&w=3840&q=75" width={1200} height={500} alt="Spotify Art Guesser Placeholder Image"/>
                        </div>
                    </div>
                </div>

            </div>
        </Layout>
        </>
    )
}