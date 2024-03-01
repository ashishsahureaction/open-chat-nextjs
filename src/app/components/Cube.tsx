'use client'
import React from 'react';
import Typewriter from 'typewriter-effect';
import { H2 } from './ui/H2';

const Cube: React.FC = () => {
  return (
    <div >
      <H2><Typewriter
        options={{
          strings: ['Let us Talk..📞', 'Thank You..😊'],
          autoStart: true,
          loop: true,
        }}
      /></H2>
     
    </div>
  );
};

export default Cube;