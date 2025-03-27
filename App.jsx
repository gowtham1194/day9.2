
import React, { useEffect, useState } from "react";

const App = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/students")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => setStudents(data))
      .catch((error) => console.error("Error fetching students:", error));
  }, []);

  return (
    <div>
      <h1>Student List</h1>
      <ul>
        {students.map((student) => (
          <li key={student.id}>
            Student name: {student.name} <br />
            ID:            {student.ID}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;


