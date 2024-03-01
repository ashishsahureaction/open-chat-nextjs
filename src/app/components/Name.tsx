'use client'
import React from 'react';
import Typewriter from 'typewriter-effect';


const Name: React.FC = () => {
  return (
    <div >
      <Typewriter
        options={{
          strings: ['Welcome To My Profile..!!'],
          autoStart: true,
          loop: true,
        }}
      />
     
     
    </div>
  );
};

export default Name;