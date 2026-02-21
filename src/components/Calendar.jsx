import React, { useState } from 'react';
import { useAtom } from 'jotai';
import { filterbyyearmonthdayAtom } from '../atoms';

const Calendar = ({ onDateChange }) => {
    const [,setonDateChange]=useAtom(filterbyyearmonthdayAtom)

  const [date, setDate] = useState({
    year: 2026,
    month: 1, 
    day: 21
  });


  const getDaysInMonth = (year, month) => new Date(year, month + 1, 0).getDate();

  const handleChange = (field, value) => {
    const newData = { ...date, [field]: parseInt(value) };

    const maxDays = getDaysInMonth(newData.year, newData.month);
    if (newData.day > maxDays) {
      newData.day = maxDays;
    }

    setDate(newData);
       onDateChange(newData); 
  };


   const handleButton = () => {
         setonDateChange(date);
         console.log(date)
   } 

  return (
          <>
    <div style={styles.container}>
    
      <select value={date.year} onChange={(e) => handleChange('year', e.target.value)}>
        {[2024, 2025, 2026, 2027].map(y => <option key={y} value={y}>{y}</option>)}
      </select>

     
      <select value={date.month} onChange={(e) => handleChange('month', e.target.value)}>
        {["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
          .map((m, i) => <option key={m} value={i}>{m}</option>)}
      </select>

      
      <select value={date.day} onChange={(e) => handleChange('day', e.target.value)}>
        {Array.from({ length: getDaysInMonth(date.year, date.month) }, (_, i) => i + 1)
          .map(d => <option key={d} value={d}>{d}</option>)}
      </select>
    </div>

    <div>
        <button onClick={handleButton}>Submit</button>
    </div>
          </>
  );
};

const styles = {
  container: {
    display: 'flex',
    gap: '10px',
    padding: '10px',
    background: '#f4f4f4',
    borderRadius: '8px',
    width: 'fit-content'
  }
};

export default Calendar;