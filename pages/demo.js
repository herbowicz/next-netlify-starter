import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
    return (
        <div className="container">
            <Head>
                <title>Demo</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main>
                <Header title="This is a demo!" />
                <p className="description">
                    Wow looks amazing!
                </p>
            </main>

            <Footer />
        </div>
    )
}
