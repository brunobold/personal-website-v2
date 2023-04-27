import Link from 'next/link';
import Image from 'next/image';

import { Prism } from '@mantine/prism';

import { faLeftLong } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Layout from "../../../components/Layout";

let supabaseServerSnippet = `
// supabase-server.js
import { createServerComponentSupabaseClient } from '@supabase/auth-helpers-nextjs';
import { cookies, headers } from 'next/headers';

export default () =>
  createServerComponentSupabaseClient({
    headers,
    cookies,
  });
`

let supabaseBrowserSnippet = `
// supabase-browser.js
import { createBrowserSupabaseClient } from '@supabase/auth-helpers-nextjs';

const supabase = createBrowserSupabaseClient();

export default supabase;
`

export default function Blog() {
    return (
        <>
        <Layout>
            <div className="px-6 pb-16 lg:px-64">
                <div className="py-8">
                    <h1 className="text-sky-500 text-lg font-bold">POKEBOX</h1>
                    <h2 className="text-4xl lg:text-6xl font-medium pt-4">A Pokemon Save File Manager?..</h2>
                    <div className="pt-2 hover:-translate-y-1 transition ease-out">
                        <Link href="/projects" className="font-bold text-sm text-gray-700">
                            <FontAwesomeIcon className="pr-2" icon={faLeftLong}>Back Home</FontAwesomeIcon>
                            Back to Projects
                        </Link>
                    </div>

                    <div className="pt-16 lg:px-32 lg:leading-loose text-slate-700">
                        <h2 className="text-sky-600 text-xl font-bold pb-4">Introduction</h2>
                        <p className="lg:text-justify text-md lg:text-lg">One evening I was deep in the YouTube reccomended rabbit hole <i>(nothing out of the ordinary)</i>, and I stumbled across a video from a YouTuber known as <Link className="text-sky-600 underline font-medium" href="https://www.youtube.com/@LiveOverflow">LiveOverflow</Link> who has made various videos on IT security and hacking topics. This video in particular focused on dissecting the hex data of a Pokemon Red Savegame file.</p>
                        <div className="py-8 lg:px-16">
                            <div className="aspect-w-16 aspect-h-9">
                                <iframe className="rounded-xl shadow-md" src="https://www.youtube.com/embed/VVbRe7wr3G4" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                            </div>
                        </div>
                        <p className="lg:text-justify text-md lg:text-lg">After previously using Pokemon save file editor tools such as <Link className="text-sky-600 font-medium underline" href="https://github.com/kwsch/PKHeX">PKHeX</Link>, I decided that I would want to make my own. But instead I would build it as a webapp using JavaScript but with a <i>twist</i>, as PKHeX is based in .NET. <br/><br/>My aim with this project, is to create a webapp where you can upload your save files across all games & Pokemon generations to build up and complete your PokeDex, with a very similar concept to Pokemon Home but without the restrictions with being stuck in Nintendo's ecosystem.</p>
                        <h2 className="text-sky-600 text-xl font-bold pt-12 pb-4">Supabase Setup</h2>
                        <p className="lg:text-justify text-md lg:text-lg">The first thing that I decided to setup in my project was Supabase and user authentication, as I knew that if I didn't organise it at the start, I would keep on putting it off. <br/><br/>This project gave me the opportunity to try out NextJS's new <Link className="text-sky-600 underline font-medium" href="https://nextjs.org/blog/next-13">version 13</Link> features. In order to support both Server and Client components, I will need to create two seperate Supabase clients, Browser & Server Components.</p>
                        <ul className="pl-8 pt-4 lg:text-justify text-md lg:text-lg">
                            <li><span className="text-slate-800 font-medium">- Server Client:</span> used only with server components.</li>
                            <li><span className="text-slate-800 font-medium">- Browser Client:</span> used for client components in the browser.</li>
                        </ul>
                        <div className="pt-4 pb-8">
                            <div>
                                <p className="text-slate-800 font-bold">supabase-server.js</p>
                                <Prism className="bg-slate-200 rounded-lg" withLineNumbers language="js">{supabaseServerSnippet}</Prism>
                            </div>
                            <div className="pt-4">
                                <p className="text-slate-800 font-bold">supabase-server.js</p>
                                <Prism className="bg-slate-200 rounded-lg" withLineNumbers language="js">{supabaseBrowserSnippet}</Prism>
                            </div>
                        </div>
                        <p className="text-md lg:text-lg">Now with this setup, I could get started using Supabase in my project. The first thing I started work on was a login system, I won't bore you with all the source code for it, <span className="italic">as it's pretty lengthy.</span><br/><br/>If you are interested in how I designed the authenitication system, then you can take a look at the <Link className="text-sky-600 underline font-medium" href="https://github.com/brunobold/pokebox">source code</Link> of the project, or this <Link className="text-sky-600 underline font-medium" href="https://www.misha.wtf/blog/supabase-auth-next-13">guide</Link> that I used as reference.</p>
                        {/* <div className="py-6 px-16">
                            <Image className="rounded-xl shadow-lg" src="/projects/pokebox/supabase-auth.png" width={1648} height={824}/>
                            <p className="pt-4 text-slate-800 text-sm text-center">Supabase Authentication Dashboard</p>
                        </div> */}
                        <h2 className="text-sky-600 text-xl font-bold pt-12 pb-4">Dissecting Hex Data</h2>
                        <p className="lg:text-justify text-md lg:text-lg">Now on to the interesting stuff... How exactly is Pokemon save file data structured?<br/><br/>Let's look into how Generation 1 as an example. The save data structure is stored in a cartridge's volatile battery-locked RAM chip, or as a <span className="px-1 bg-slate-200 text-slate-800 rounded-sm">.sav</span> file by most emulators. This structure comprises 32 KB of data divided into 4 banks, each containing 8 KB <em>(or 0x2000)</em> of information, containg hundreds of variables. However, there are certain areas that remain unaltered, only read from, or solely written to.<br/><br/>Here is an example of what a game save file looks like if you open it up in a hex editor.</p>
                        <div className="py-6 lg:px-16">
                            <Image className="rounded-xl shadow-md" src="/projects/pokebox/pokemon-red-hex.png" width={1600} height={1022}/>
                            <p className="pt-4 text-slate-800 text-sm text-center">Pokemon Red Save File</p>
                        </div>
                        <p className="lg:text-justify text-md lg:text-lg">As you can see, none of this data is able to be interpreted in ASCII format, it just looks like a jumbled mess of characters.</p>

                        <div className="pt-16">
                            <div className="lg:px-64">
                                <Image className="rounded-xl shadow-md" src="https://media.tenor.com/splChnZkobQAAAAC/hi-nikky.gif" width={1600} height={1022}/>
                            </div>
                            <p className="pt-4 text-slate-800 text-xl font-medium text-center">More documentation is being written, come back soon!</p>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
        </>
    )
}