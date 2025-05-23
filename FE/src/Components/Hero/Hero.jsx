import React from 'react'
import './style.css'

function Hero() {
    return (
        <>

            <section className='heroSection'>
                <div className='hero'>
                    <div className='heroImg'><img src="https://preview.colorlib.com/theme/shop/img/header-img.png" alt="" /></div>
                    <div className='heroTitle'>
                        <div className='heroTitleFlat'>
                            <div className='flat'>Flat</div>
                            <div className='off'>75% Off</div>
                        </div>
                        <div className='heroTitleHappening'><h1>It’s Happening this Season!</h1></div>
                        <div ><button className='heroBtn'>PURCHASE NOW</button></div>
                    </div>
                </div>
            </section>


        </>
    )
}

export default Hero