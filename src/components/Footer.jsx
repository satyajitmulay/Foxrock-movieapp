import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className='text-center bg-neutral-600 bg-opacity-35 text-neutral-400 py-2'>
      <div className='flex items-center justify-center gap-4'>
        <Link to="/">About</Link>
        <Link to="/">Contact</Link>
      </div>
      <p className='text-sm'>Created By Frontend Developer Satyajit Mule </p>
    </footer>
  )
}
