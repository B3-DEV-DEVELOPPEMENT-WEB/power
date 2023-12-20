import React from "react";
import Average from "./Average.jsx";

const Students = () => {
    const students = [
        { marks: [12, 15, 11], name: "Dimitri" },
        { marks: [18, 19, 20], name: "Thibaut" }
    ];

    return (
        <>
            {students.map((student, i) => (
                <Average
                    key={i}
                    note={student.marks.reduce((sum, mark) => sum + mark, 0) / student.marks.length}
                    name={student.name}
                />
            ))}
        </>
    );
};

export default Students;
