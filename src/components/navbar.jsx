import React from 'react'

const appbar = ()=>{
    const menuClicked = ()=>{
        console.log('clicked')
    }
    return (
        <nav className='mt-5'>
            <div className='flex justify-between max-w-7xl mx-auto'>
            <div>
                <span className='text-red-500 font-bold text-4xl'>M-</span>
                <span className='text-black-500 font-thin text-4xl'>World</span>
            </div>
            <div>
                <button onClick={menuClicked}></button>
            </div>

            <div>
                <ul className='flex space-x-8'>
                    <li className="menu border-b-4">
                        <a href="#" className='font-body'>All Movies</a>
                    </li >
                    <li  className='menu'>
                        <a href="#" className='font-body'>Comedy</a>
                    </li>
                    <li className='menu'>
                        <a href="#" className='font-body'>Thriller</a>
                    </li>
                    <li  className='menu'>
                        <a href="#" className='font-body'>Romance</a>
                    </li>
                    {/* <li className='px-4 py-2'>
                        <a href="#"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" 
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6 text-green-500">
                        <path strokeLinecap="round" 
                        strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
</svg>
</a>
                    </li> */}
                    <li  className='menu'>
                        <a href="#" className='font-body'>Horrer</a>
                    </li>
                    <li  className='menu'>
                        <a href="#" className='font-body'>Adventure</a>
                    </li>
                </ul>
            </div>
            </div>
        </nav>
    )
}

export default appbar