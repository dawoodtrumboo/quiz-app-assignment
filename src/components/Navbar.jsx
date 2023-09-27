import { faBell } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { profile } from '../assets'

const Navbar = () => {
  return (
    <div className='flex justify-between w-full items-center'>
        <h1 className=' text-2xl'>Create Quiz</h1>
        <div className='flex items-center gap-3'>
            <div className='bg-white rounded-full border-[3px] border-[#4F78FE] p-2'>
                <span className='bg-[#4F78FE] p-1 rounded-full'>
                <FontAwesomeIcon icon={faBell} color='#fff' size='lg'/>
                </span>
            </div>
            <img src={profile} alt='img' className='h-[46px] bg-black rounded-full'/>
        </div>
    </div>
  )
}

export default Navbar