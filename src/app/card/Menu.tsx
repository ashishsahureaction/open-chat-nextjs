import React from 'react';
import Dropdown from './Dropdown';

export interface MenuItem {
  title: string;
  route: string;
  children?: MenuItem[];
}



const frameworkMenu: MenuItem = {
  title: 'Select a Experince >',
  route: '/',
  children: [
    { title: 'Cencora >', route: '/card/cencora' },
    { title: 'Future >', route: '/card/future' },
    { title: 'Hdfc >', route: '/card/hdfc' },
    { title: 'Skylives >', route: '/card/skylives' },
  ],
};

export default function Header() {
  return (
    <nav>
     
      <Dropdown item={frameworkMenu} />
      
    </nav>
  );
}