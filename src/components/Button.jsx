import React from 'react'

const Button = ({onClick}) => {
  return (
    <button className="bg-amber-500 text-white rounded-full px-8 py-3 text-xl hover:bg-amber-600 my-5 m-auto block mt-16" onClick={onClick}>Надіслати</button>
  )
}

export default Button