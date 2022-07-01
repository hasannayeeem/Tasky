import { format } from 'date-fns';
import React, { useState } from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
const Calender = () => {
    const [date, setDate] = useState(new Date());
    return (
        <div className='text-center min-h-screen w-screen bg-gradient-to-r from-secondary to-primary'>
            <p className="text-2xl py-6 font-bold ">Calender</p>
            <DayPicker className='mx-auto w-fit h-96 justify-center'
                mode='single'
                selected={date}
                onSelect={setDate}
            />
            <p>You have selected: {format(date, 'PP')}</p>
        </div>
    );
};

export default Calender;