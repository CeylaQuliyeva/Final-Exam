import React, { useContext, useEffect, useState } from 'react'
import { Helmet } from 'react-helmet-async'
import "./style.css"
import axios from 'axios'
import { WishlistContext } from '../../Context/WishlistProvider'
import { Link } from 'react-router'
import Hero from '../../Components/Hero/Hero'
import Shop from '../../Components/Shop/Shop'
import Men from '../../Components/Men/Men'
import Related from '../../Components/Related/Related'

function Home() {
    const [data, setData] = useState([])
    const { handleWishlist, checkAtWishlist } = useContext(WishlistContext)

    useEffect(() => {
        axios
            .get('http://localhost:3000')
            .then(res => setData(res.data))
    }, [])

    return (
        <>
            <Helmet>
                <title>Home</title>
            </Helmet>
            <Hero />
            <Shop />
            <Men />
            <div className='home'>
                <div className='homeTitle'>
                    <h2>New realeased Products for Women</h2>
                    <p>Who are in extremely love with eco friendly system.</p>
                </div>

                <div className='cards'>
                    {
                        data.map((x) =>
                            <div key={x._id} className='card'>
                                <div className='cardImg'> <img src={x.img} alt="" /></div>
                                <div className='cardTitle'>
                                    <h4>{x.name}</h4>
                                    <p>${x.price.toFixed(2)}</p>
                                </div>
                                <div className='cardBtn'>
                                    <button onClick={() => handleWishlist(x)}>{checkAtWishlist(x) ? "♥️" : '♡'}</button>
                                    <Link to={`detail/${x._id}`}><button>Detail</button></Link>
                                </div>
                            </div>)
                    }
                </div>
            </div>

            <Related />



        </>
    )
}

export default Home