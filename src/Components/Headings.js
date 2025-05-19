import React from 'react'

export default function Headings(prop) {
  return (
    <nav className='navbar mt-5 craft-heading textColor justify-content-center w-10 h-10'>
      {prop.heading}
    </nav>
  )
}
