import Link from 'next/link';

import { faSpotify } from '@fortawesome/free-brands-svg-icons'
import { faSdCard } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function GridLayout() {
    return (
        <div className="md:min-h-full md:max-w-[160vh] mx-auto p-6">
            <div className="grid grid-cols-2 lg:grid-cols-4 grid-rows-4 gap-6">
                <div className="bg-gradient-to-r from-fuchsia-600 to-pink-600 rounded-2xl row-span-4 col-span-2 transition duration-200 hover:scale-[103%] hover:shadow-2xl ease-out">
                     <div className="grid"> {/* bg-spotify bg-center bg-no-repeat bg-cover for svg backdrop  */}
                        <div className="aspect-square">
                            <div className="flex">
                                <div className="block p-8 lg:p-12">
                                    <h2 className="text-gray-200 text-md lg:text-lg leading-tight font-medium mb-2">SHOWCASE</h2>
                                    <h1 className="text-white text-5xl lg:text-6xl font-bold">Pokebox</h1>
                                    <p className="text-white text-xl">Pokemon Gen 1-9 Save File Manager</p>
                                </div>
                            </div>
                        </div>
                        <div className="mb-10 lg:-mt-24 mx-10 lg:mx-16">
                            <Link href="/projects/pokebox">
                                <button className="text-zinc-800 text-lg lg:text-2xl h-12 lg:h-16 w-36 lg:w-48 bg-white hover:bg-gray-200 rounded-xl font-medium">
                                    <FontAwesomeIcon className="pr-2" icon={faSdCard}/>Read More 
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
                <Link href="/projects" className="bg-gradient-to-r from-gray-100 to-gray-300 rounded-2xl row-span-2 col-span-2 transition duration-200 hover:scale-[103%] hover:shadow-xl ease-out">
                    <div className="aspect-[2/1] grid">
                        <div className="block pt-8 lg:pt-12 px-6">
                            <h2 className="text-gray-700 text-md lg:text-lg leading-tight font-medium mb-16">PROJECTS</h2>
                        </div>
                    </div>
                    <div className="mb-6 lg:-mt-20 mx-6">
                        <p className="text-gray-800 text-3xl lg:text-4xl rounded-xl font-medium">View a list of my projects.</p>
                    </div>
                </Link>
                <Link href="/about" className="bg-gradient-to-r from-violet-300 to-violet-400 rounded-2xl row-span-2 transition duration-200 hover:scale-[103%] hover:shadow-2xl ease-out">
                    <div className="aspect-square grid">
                        <div className="block pt-4 lg:pt-12 mx-4 lg:px-4">
                            <h2 className="text-gray-100 text-md lg:text-lg leading-tight font-medium mb-16">ABOUT</h2>
                        </div>
                    </div>
                    <div className="pb-4 -mt-16 mx-4 lg:mx-8">
                        <p className="text-white text-3xl lg:text-4xl rounded-xl font-medium">About Me</p>
                    </div>
                </Link>
                <Link href="/blog" className="bg-gradient-to-r from-sky-400 to-blue-500 rounded-2xl row-span-2 transition duration-200 hover:scale-[103%] hover:shadow-2xl ease-out ">
                    <div className="aspect-square grid">
                        <div className="block pt-4 lg:pt-12 mx-4 lg:px-4">
                            <h2 className="text-gray-100 text-md lg:text-lg leading-tight font-medium mb-16">BLOG</h2>
                        </div>
                    </div>
                    <div className="pb-4 -mt-16 mx-4 lg:mx-8">
                        <p className="text-white text-3xl lg:text-4xl rounded-xl font-medium">Blog</p>
                    </div>
                </Link> 
            </div>
        </div>
    );
}

export default GridLayout;
