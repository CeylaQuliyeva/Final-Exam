import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router'

function NoPage() {
    return (
        <>

            <Helmet>
                <title>404</title>
            </Helmet>

            <div className='noPage'>
                404 NOT FOUND
                <Link to="/"><button>Go HOME</button></Link>
            </div>
        </>
    )
}

export default NoPage