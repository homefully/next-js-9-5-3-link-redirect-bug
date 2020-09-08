import Link from "next/link"

export default function Home() {
    return (
        <Link
            passHref
            href="/failure"
        ><a>Link to failure, which should be redirected to sucess!</a></Link>
    )
}
