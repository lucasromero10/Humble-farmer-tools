import Link from 'next/link'


const Navbar = () => {
    return ( 
        <nav>
            <div className= "logo">
            <h1>Humble Farmer Tools</h1>
            </div>
           <Link href= "/"> 
            <a>Home</a>
           </Link>

           <Link href= "/farms" > 
                <a>Farms</a>
           </Link>
           <Link href= "/resources" > 
                <a>Resources</a>
           </Link>
           <Link href= "/about">  
           <a>About</a>
           </Link>

        </nav>
     );
}
 
export default Navbar;