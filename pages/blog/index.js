import Link from 'next/link';

import { faLeftLong } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Layout from "../../components/Layout";

export default function Blog() {
    return (
        <>
        <Layout>
            <div className="px-6 lg:px-64">
                <div className="py-8">
                    <h1 className="text-sky-500 text-lg font-bold">MY BLOG</h1>
                    <h2 className="text-4xl lg:text-6xl font-medium pt-4">Nothing to see here, <span className="font-bold">yet...</span></h2>
                    <div className="pt-2 hover:-translate-y-1 transition ease-out">
                        <Link href="/" className="font-bold text-sm text-gray-700">
                            <FontAwesomeIcon className="pr-2" icon={faLeftLong}>Back Home</FontAwesomeIcon>
                            Back Home
                        </Link>
                    </div>
                </div>
            </div>
        </Layout>
        </>
    )
}