import React, { useState } from 'react';
import Header from '../header/Header';

function FormToList() {
const [name, setName] = useState('');
const [email, setEmail] = useState('');
const [user, setUser] = useState({});

const submitDados = (e) => {
    e.preventDefault();
    setUser({
        name: name,
        email: email
    });/* 
    setName('');
    setEmail(''); */
};

return (
        <div className='bg-blue-200 h-screen'>
        <Header />
        <form className='bg-blue-200 w-60 mx-auto mt-20' onSubmit={submitDados}>
            <div>
                <label htmlFor="name">Name:</label>
                <input type="text" className='block border-2 border-gray-600 w-full rounded-3xl'
                onChange={(e) => setName(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor="email">Email:</label>
                <input type="email" className='block border-2 border-gray-600 w-full rounded-3xl'
                onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <button type="submit">
                Enviar
            </button>
        </form>
        <div>
            <p>{user.name}</p>
            <p>{user.email}</p>
        </div>
        </div>
    )
}

export default FormToList;