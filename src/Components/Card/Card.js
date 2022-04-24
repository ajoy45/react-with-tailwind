import React from 'react';
import Benefit from '../Benefit/Benefit';
import './Card.css';
import { motion } from "framer-motion"
const Card = (props) => {
    const{name,price,benifets}=props.cardDetail;
    
    return (
        <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 2 }}
        className='bg-green-400 p-8 rounded-lg hover-effect'>
            <h1 className='text-white text-4xl mb-5 bg-green-300 p-5 font-bold uppercase rounded-lg' >{name}</h1>
            <p className='text-4xl font-bold'> 
                <small >${price}<span className='text-gray-600 text-2xl'>/mon</span></small>
            </p>
            <h1>BENEFITS:</h1>
            {
                benifets.map(benifit=><Benefit
                benifit={benifit}
                ></Benefit>)
            }
        </motion.div>
    );
};

export default Card;