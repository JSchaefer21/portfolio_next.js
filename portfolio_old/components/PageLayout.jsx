import Head from 'next/head'

export default function PageLayout ({children, title='J.Schaefer'}) {

    return <>
        <Head>
            <title>{title}</title>
            <meta name="description" content="Portfolio" />
            <link rel="icon" href="/person.ico" />
        </Head>

        <main>
            { children }
        </main>
    </>

}