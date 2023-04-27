import Link from 'next/link';

import Layout from "../../components/Layout";

export default function Contact() {
    return (
        <>
        <Layout>
        <div className="px-6 lg:px-64">
            <div className="py-8">
                <h1 className="text-sky-500 text-lg font-bold">CONTACT ME</h1>
                <h2 className="text-4xl lg:text-6xl font-medium pt-4">Need to get in <span className="font-bold">contact?</span></h2>
            </div>
        </div>
        <div className="px-2 pt-8 lg:pt-16">
            <p className="text-md lg:text-lg text-center">Don't worry, I know this page needs some TLC, I'm working on it!<br/> Looking to get in contact with me? You can reach out to me via <Link className="text-sky-600 font-medium underline" href="https://www.linkedin.com/in/bold/">LinkedIn</Link></p>
        </div>
        </Layout>
        </>
    )
}