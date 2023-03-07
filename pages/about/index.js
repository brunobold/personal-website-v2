import Link from 'next/link';

import { faLeftLong } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Layout from "../../components/Layout";

export default function About() {
    return (
        <>
        <Layout>
            <div className="px-6 lg:px-64">
                <div className="py-8">                    
                    <h1 className="text-sky-500 text-lg font-bold">ABOUT ME</h1>
                    <h2 className="text-5xl lg:text-6xl font-medium pt-4">Hi, my name is <span className="font-bold">Bruno</span></h2>
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
                            <p className="text-slate-700 text-md lg:text-lg pt-6">I'll eventually get around to writing this...</p>
                        </div>
                        <div className="pt-16">
                            <h1 className="text-sky-600 text-3xl lg:text-4xl font-bold">Experience</h1>
                            <div className="lg:grid grid-cols-2 pt-8">

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