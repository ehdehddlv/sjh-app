import React from 'react';

// List를 표시해주는 map 함수에 대해서!!

const students = [
    {
        id: 1,
        name: "jaehyuk"
    },
    {
        id: 2,
        name: "karina"
    },
    {
        id: 3,
        name: "iu"
    },
    {
        id: 4,
        name: "rose"
    }
]

function AttendanceBook(props){

    return (
        // <ul>
        //     {students.map((student) => {
        //         return <li key={student.id}>{student.name}</li>;
        //     })
        //     }
        // </ul>
        <ul>
            {students.map((student) => 
                <li key={`student-id-${student.id}`}>{student.name}</li>
            )}
        </ul>

    );

}

export default AttendanceBook;