import Head from "next/head"
import Header from "./Header"

const Shared = ({children}) => {
    return (
        <div>
            <Head>
                <title>Cards</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header/>
            {children}
        </div>
    )
}

export default Shared
