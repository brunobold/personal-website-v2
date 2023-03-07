import Link from 'next/link';

import { faLeftLong } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Layout from "../../../components/Layout";

export default function Blog() {
    return (
        <>
        <Layout>
            <div className="px-6 lg:px-64">
                <div className="py-8">
                    <h1 className="text-sky-500 text-lg font-bold">SPOTIFY ART GUESSER</h1>
                    <h2 className="text-6xl font-medium pt-4">Did someone say <span className="font-bold">Spotify?</span></h2>
                    <div className="pt-2 hover:-translate-y-1 transition ease-out">
                        <Link href="/projects" className="font-bold text-sm text-gray-700">
                            <FontAwesomeIcon className="pr-2" icon={faLeftLong}>Back Home</FontAwesomeIcon>
                            Back to Projects
                        </Link>
                    </div>

                    <p className="pt-16 text-2xl font-medium text-center italic">Well I did, but there's nothing here yet. So come check back later!</p>
                </div>
            </div>
        </Layout>
        </>
    )
}