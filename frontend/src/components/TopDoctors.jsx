import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext'

const TopDoctors = () => {
    const navigate = useNavigate();
    const {doctors} = useContext(AppContext)
  return (
    <div className='flex flex-col items-center gap-4 my-16 text-gray-900 md:mx-10'>
        <h1 className='text-3xl font-medium'>Top Doctors to Book</h1>
        <p className='sm:w-1/3 text-center text-sm'>Simply browse through our extensive list of trusted doctors.</p>
        <div className='w-full grid grid-cols-auto gap-4 pt-5 gap-y-6 px-3 sm:px-0'>
            {/* Doctor Card */}
            {doctors.slice(0,10).map((doctor, index) => (
                <div onClick={()=>{navigate(`/appointment/${doctor._id}`); scrollTo(0,0)}} className='border border-blue-200 rounded-xl cursor-pointer hover:translate-y-[-10px] transition-all duration-500 flex flex-col items-center gap-4 p-4]' key={index}>
                    <img className='bg-blue-50 rounded-xl' src={doctor.image} alt="" />
                    <div className='p-4'>
                        <div className='flex  items-center gap-2 text-center text-green-500'>
                            <p className='w-2 h-2 bg-green-500 rounded-full'></p><p>Available</p>
                        </div>
                        <div>
                            <p className='text-lg font-medium text-gray-900'>
                                {doctor.name}
                            </p>
                            <p className='text-sm text-gray-600'>{doctor.speciality}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
        <button onClick={(()=>{navigate('/doctors'); scrollTo(0,0)})} className='bg-blue-50 text-gray-600 px-16 py-3 rounded-full mt-10'>More</button>
    </div>
  )
}

export default TopDoctors