import React from 'react';
import Card from '../Card/Card';
import Navbar from '../Navbar/Navbar';
import img from '../../favourite.jpg';


const Header = () => {
    const carddetails=[
        {id:1,name:"free",price:0,benifets:[ 
            'live chat free', 'Tour','Pou up forms','Email marketing' ,'Ad release']},
    
        {id:2,name:"regular",price:19.99,benifets:[ 
            'live chat regular', 'Tour','Pou up forms','Email marketing' ,'Ad release']},
        {id:2,name:"premium",price:49.99,benifets:[ 
            'live chat premium', 'Tour','Pou up forms','Email marketing' ,'Ad release']}
    ]
    return (
        <div>
            <Navbar></Navbar>
             <img className='w-full h-80 animate-pulse' src={img} alt=''/>
           <div className='grid md:grid-cols-3 gap-5 w-full mt-8 px-4 '>
           {
                carddetails.map(cardDetail=> <Card
                key={cardDetail.id}
                cardDetail={cardDetail}
                ></Card>)
            }
           </div>
          
        </div>
    );
};

export default Header;