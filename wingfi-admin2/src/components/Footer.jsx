import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <div className='text-center bg-white h-[50px] p-3 font-semibold '>
        <h1>Copyright © 2024 Remos. Design with by <Link className='text-sky-400'>Themesflat</Link> All rights reserved.</h1>
    </div>
  )
}
