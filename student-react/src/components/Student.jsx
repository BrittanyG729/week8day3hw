import React from 'react';
import Score from './Score'; // Assuming you have a Score component

const Student = ({ student }) => {
    return (
      <div>
        <h2>{student.name}</h2>
        <p>{student.bio}</p>
        <ul>
          {student.scores.map((score, index) => (
            <Score key={index} date={score.date} score={score.score} />
          ))}
        </ul>
      </div>
    );
  };
  
  export default Student;