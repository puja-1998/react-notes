import React, { useState } from 'react';
import './App.css';

function App() {
  const [subjects, setSubjects] = useState([]);
  const [newSubject, setNewSubject] = useState('');
  const [newHours, setNewHours] = useState('');

  // Load subjects and hours from local storage
  const savedSubjects = JSON.parse(localStorage.getItem('subjects')) || [];
  if (savedSubjects.length > 0 && subjects.length === 0) {
    setSubjects(savedSubjects);
  }

  const addSubject = () => {
    if (newSubject && newHours) {
      const updatedSubjects = [...subjects, { subject: newSubject, hours: parseInt(newHours) }];
      setSubjects(updatedSubjects);
      setNewSubject('');
      setNewHours('');

      // Update local storage
      localStorage.setItem('subjects', JSON.stringify(updatedSubjects));
    }
  };

  const increaseHours = (index) => {
    const updatedSubjects = [...subjects];
    updatedSubjects[index].hours += 1;
    setSubjects(updatedSubjects);

    // Update local storage
    localStorage.setItem('subjects', JSON.stringify(updatedSubjects));
  };

  const decreaseHours = (index) => {
    const updatedSubjects = [...subjects];
    if (updatedSubjects[index].hours > 0) {
      updatedSubjects[index].hours -= 1;
      setSubjects(updatedSubjects);

      // Update local storage
      localStorage.setItem('subjects', JSON.stringify(updatedSubjects));
    }
  };

  return (
    <div className='main'>
      <div className='container'>
        <h1 >Geekster Education Planner</h1>
        <div className='btns'>
          <input
            type="text"
            placeholder="Subject"
            value={newSubject}
            onChange={(e) => setNewSubject(e.target.value)}
            
          />
          <input
            type="number"
            placeholder="Hours"
            value={newHours}
            onChange={(e) => setNewHours(e.target.value)}
          />
          <button onClick={addSubject} >Add</button>
        </div>
        {subjects.map((subject, index) => (
          <div key={index} className='details'>
            <div >{subject.subject} --- {subject.hours} hours</div>
            <button onClick={() => increaseHours(index)} >+</button>
            <button onClick={() => decreaseHours(index)} >-</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
