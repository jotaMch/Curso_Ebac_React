import React from 'react'
import { Link } from 'react-router-dom';


function Header() {
    return(
        <>
        <header
        className='bg-red-600 text-white flex justify-between items-center px-4 h-20' 
        >
            <h1>olá</h1>
            <ul
            className='flex justify-around w-60 font-bold'
            >
                <Link to='/'>
                    <li>init</li>
                </Link>
                <Link to='/form'>
                    <li>Cadastro</li>
                </Link>
                <Link to='/list'>
                    <li>Lista</li>
                </Link>
            </ul>
        </header>
        </>
    )
}

export default Header;