import Link from "next/link";
function Tempo(props) {
    console.log('> Passando pelo Frontend;')
    const dynamicDate = new Date();
    const dynamicDateString = dynamicDate.toGMTString();
    return(
        <div>
            <div>{dynamicDateString} (dinâmico)</div>
            <div>{props.staticDateString} (estático)</div>

            <h1>Tempo</h1>
        <Link href="/">
            <a>Acessar a página Home</a>
        </Link><br></br>
        <Link href="/sobre">
            <a>Acessar a página Sobre</a>
        </Link>
        </div>
        
    )
}

export async function getStaticProps() {
    console.log('> Passando pelo getStaticProps();');
    const staticDate = new Date();
    const staticDateString = staticDate.toGMTString();

    return {
        props: {
            staticDateString
        },
        revalidate: 1
    }
}

export default Tempo;