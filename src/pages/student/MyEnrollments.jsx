import React, { useContext, useState } from "react";
import { AppContext } from "../../context/AppContext";
import { Line } from "rc-progress";
import Footer from '../../components/students/Footer'



const MyEnrollments = () => {
  const { enrolledCourses, calculateCourseDuration ,navigate} = useContext(AppContext);

  const [progressArray] = useState([
    { lectureCompleted: 2, totalLectures: 4 },
    { lectureCompleted: 5, totalLectures: 8 },
    { lectureCompleted: 1, totalLectures: 6 },
    { lectureCompleted: 3, totalLectures: 10 },
    { lectureCompleted: 7, totalLectures: 12 },
    { lectureCompleted: 4, totalLectures: 9 },
    { lectureCompleted: 6, totalLectures: 6 },
    { lectureCompleted: 2, totalLectures: 5 },
    { lectureCompleted: 8, totalLectures: 15 },
    { lectureCompleted: 10, totalLectures: 20 },
    { lectureCompleted: 0, totalLectures: 7 },
    { lectureCompleted: 9, totalLectures: 9 },
    { lectureCompleted: 11, totalLectures: 14 },
    { lectureCompleted: 3, totalLectures: 11 },
  ]);

  return (
    <>
     <div className="md:px-36 px-8 pt-10">
      <h1 className="text-2xl font-semibold">My Enrollments</h1>

      <table className="table-auto w-full border mt-10">
        <thead className="text-gray-900 border-b border-gray-300 text-sm text-left hidden sm:table-header-group">
          <tr>
            <th className="px-4 py-3 font-semibold">Course</th>
            <th className="px-4 py-3 font-semibold">Duration</th>
            <th className="px-4 py-3 font-semibold">Completed</th>
            <th className="px-4 py-3 font-semibold">Status</th>
          </tr>
        </thead>

        <tbody className="text-gray-700">
          {enrolledCourses.map((course, index) => {
            const progress = progressArray[index];
            const status =
              progress.lectureCompleted === 0
                ? "Not Started"
                : progress.lectureCompleted === progress.totalLectures
                ? "Completed"
                : "Ongoing";

            return (
              <tr
                key={index}
                className="border-b border-gray-200 text-sm sm:text-base align-middle"
              >
                {/* Course Column */}
                <td className="px-4 py-3">
                  <div className="flex items-center gap-3">
                    <img
                      src={course.courseThumbnail}
                      alt=""
                      className="w-14 sm:w-20 md:w-24 rounded"
                    />
                    <p className="font-medium">{course.courseTitle}</p>
                    <Line strokeWidth={2} percent={progressArray[index]?(progressArray[index].lectureCompleted*100)/progressArray[index].totalLectures: 0} className="bg-gray-300 rounded-full"/>
                  </div>
                </td>

                {/* Duration Column */}
                <td className="px-4 py-3 hidden sm:table-cell align-middle">
                  {calculateCourseDuration(course)}
                </td>

                {/* Progress Column */}
                <td className="px-4 py-3 hidden sm:table-cell align-middle">
                  {progress.lectureCompleted} / {progress.totalLectures} Lectures
                </td>

                {/* Status Column */}
                <td className="px-4 py-3 text-right align-middle">
                  <button onClick={()=>navigate('/player/'+course._id)}
                    className='px-3 sm:px-5 py-1.5 sm:py-2 rounded text-white text-xs sm:text-sm  bg-blue-600'>
                    {progressArray[index] && progressArray[index].lectureCompleted /progressArray[index].totalLectures===1?'Completed':'On Going' }
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      
    </div>
    <Footer/></>
   

    
  );
};

export default MyEnrollments;
