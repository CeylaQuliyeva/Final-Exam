import React from 'react'
import { Link } from 'react-router'
import './style.css'

function Navbar() {
    return (
        <>
            <nav>
                <div className='navContact'>
                    <div className='navContactNum'>
                        <div>+12312-3-1209</div>
                        <div>support@colorlib.com</div>
                    </div>
                    <div className='login'>Login</div>
                </div>



                <div className='navbar'>
                    <div>
                        <img src="https://preview.colorlib.com/theme/shop/img/logo.png" alt="" />
                    </div>
                    <div className='navTitle'>
                    <Link to='/'>Home</Link>
                    <Link to='admin'>Admin</Link>
                    <Link to='add'>ADD</Link>
                    <Link to='wishlist'>Wishlist</Link>
                    </div>
                </div>
            </nav>


        </>
    )
}

export default Navbar