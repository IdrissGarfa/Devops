import React from 'react'

const Card = ({ card }) => {
    console.log(card);
    return (
        <div className='w-64 rounded-3xl'>
            <div className='bg-gradient-to-bl  overflow-hidden rounded-3xl from-pink-500 via-purple-500 to-indigo-500'>
                <img className='object-cover max-h-64 w-64 relative top-2 left-2 h-full rounded-3xl' src={card.image} alt={card.name} />
            </div>
            <div className='mt-6 text-center'>
                <h2 className='text-white font-semibold text-xl lg:text-2xl leading-normal'>{card.name}</h2>
                <p className='mt-2 text-gray-200 font-light text-lg'>{card.title}</p>
            </div>
        </div>)
}

export default Card