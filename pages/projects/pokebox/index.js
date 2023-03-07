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
                    <h1 className="text-sky-500 text-lg font-bold">POKEBOX</h1>
                    <h2 className="text-6xl font-medium pt-4">Gone fishing<span className="font-bold"></span></h2>
                    <div className="pt-2 hover:-translate-y-1 transition ease-out">
                        <Link href="/projects" className="font-bold text-sm text-gray-700">
                            <FontAwesomeIcon className="pr-2" icon={faLeftLong}>Back Home</FontAwesomeIcon>
                            Back to Projects
                        </Link>
                    </div>
                    <p className="pt-16 px-16 text-2xl font-medium text-center italic">I'm currently going insane writing maps to translate Nintendo's messy hex, check back later once the voices in my head have stopped.</p>
                </div>
            </div>
        </Layout>
        </>
    )
}