import React from 'react'

const Button = ({ btnText }) => {
    return (
        <div className=' bg-blue-500 py-2 px-4 border-[1.4px] cursor-pointer
        hover:border-black duration-300 rounded-md text-white hover:text-black
        hover:bg-white w-full text-center'>
            {btnText}
        </div>
    )
}

export default Button