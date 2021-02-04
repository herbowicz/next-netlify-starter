import Head from 'next/head'
import Demo from '@components/Demo'
import Footer from '@components/Footer'

export default function Home() {
    return (
        <div className="container">
            <Head>
                <title>Demo</title>
            </Head>

            <main>
                <Demo />
            </main>

            <Footer />
        </div>
    )
}
