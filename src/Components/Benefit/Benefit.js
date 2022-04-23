import React from 'react';
import {BadgeCheckIcon } from '@heroicons/react/solid'
const Benefit = (props) => {
    
    return (
        <div className='flex items-center p-2 '>
            <BadgeCheckIcon className='w-4 h-4 mr-3 text-blue-500'></BadgeCheckIcon >
            <h1>{props.benifit}</h1>
        </div>
    );
};

export default Benefit;