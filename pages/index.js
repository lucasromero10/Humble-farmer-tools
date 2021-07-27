import Head from 'next/head'
import Image from 'next/image'
import Footer from '../comps/Footer'
import Navbar from '../comps/Navbar'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <div >
      <Navbar/>
      <h1>
        The Humble Farmer Tools
      </h1>
             <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus elementum orci quis malesuada auctor. Nulla mollis scelerisque massa sit amet porttitor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nec augue felis. In a aliquam leo. Sed varius mauris tortor, a blandit ex rhoncus sed. Aenean imperdiet sit amet ligula ut lobortis. Nullam lobortis rutrum tempus.
            </p>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus elementum orci quis malesuada auctor. Nulla mollis scelerisque massa sit amet porttitor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nec augue felis. In a aliquam leo. Sed varius mauris tortor, a blandit ex rhoncus sed. Aenean imperdiet sit amet ligula ut lobortis. Nullam lobortis rutrum tempus.
            </p>
            <Link href="/farms/audited-farms">
            <a>See Audited Farms</a>
            </Link>
            <Footer />
    </div>
  )
}
