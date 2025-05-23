import React, { useContext } from 'react'
import { Helmet } from 'react-helmet-async'
import { WishlistContext } from '../../Context/WishlistProvider'
import "../../pages/Home/style.css"

function Wishlist() {
    const { wishlist, handleWishlist, checkAtWishlist } = useContext(WishlistContext)
    return (
        <>
            <Helmet>
                <title>Home</title>
            </Helmet>

            <div className='cards'>
                {
                    wishlist.map((x) =>
                        <div key={x._id} className='card'>
                            <div className='cardImg'> <img src={x.img} alt="" /></div>
                            <div className='cardTitle'>
                                <h4>{x.name}</h4>
                                <p>${x.price}</p>
                            </div>
                            <div>
                                <button onClick={() => handleWishlist(x)}> wishlist {checkAtWishlist(x) ? "♥️" : '♡'}</button>
                            </div>
                        </div>)
                }

            </div>
        </>
    )
}

export default Wishlist