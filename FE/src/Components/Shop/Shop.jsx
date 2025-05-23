import React from 'react'
import './style.css'

function Shop() {
    return (
        <>
            <section className='shop'>
                <div className='homeTitle'>
                    <h2>Shop for Different Categories</h2>
                    <p>Who are in extremely love with eco friendly system.</p>
                </div>

                <div className='shopFoto'>
                    <div className='fotoCommon'>
                        <div className='fotoGirls'>
                            <div><img src="https://preview.colorlib.com/theme/shop/img/c1.jpg" alt="" /></div>
                            <div><img src="https://preview.colorlib.com/theme/shop/img/c2.jpg" alt="" /></div>
                        </div>
                        <div className='fotoGirl'><img src="https://preview.colorlib.com/theme/shop/img/c3.jpg" alt="" /></div>
                    </div>
                    <div className='fotoBoy'><img src="https://preview.colorlib.com/theme/shop/img/c4.jpg" alt="" /></div>
                </div>
            </section>
        </>
    )
}

export default Shop