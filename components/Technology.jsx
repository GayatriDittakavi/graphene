import React from 'react'
import { CardHoverEffectDemo } from './HoverCard'

function Technology() {
    return (
        <div id='technology' className='max-w-screen min-h-screen flex items-center justify-center bg-black'>
            <div className="w-screen  h-full max-xl:flex-col items-center justify-between mx-auto xl:px-10 px-3 rounded-xl flex ">
                <img src="https://res.cloudinary.com/dafbhjsmx/image/upload/v1736509774/render_1-removebg-preview_bdw2ko.png" className='h-[30rem] w-[30rem] rounded-full' alt="" />
                <CardHoverEffectDemo />
            </div>
        </div>
    )
}
export default Technology