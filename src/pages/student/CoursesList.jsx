import React from 'react'
import { AppContext } from '../../context/AppContext'

const CoursesList = () => {
  const {navigate}= useContext(AppContext)
  return (
    <div>
      <div>
        <h1>Course List</h1>
        <p className='text-gray-500'>
          <span className='text-blue-600 cursor-poiter'>Home</span> / <span>Course List</span></p>

      </div>
    </div>
  )
}

export default CoursesList