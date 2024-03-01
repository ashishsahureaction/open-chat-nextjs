'use client'
import React, { useState } from 'react';
import Link from 'next/link';

interface MenuItem {
  title: string;
  route: string;
  children?: MenuItem[];
}

interface Props {
  item: MenuItem;
}

export default function Dropdown(props: Props) {
  const { item } = props;
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const menuItems = item?.children || [];

  const toggle = () => {
    setIsOpen((old) => !old);
  };
  const transClass = isOpen ? 'flex' : 'hidden';

  return (
    <>
      <div className="relative">
        <button
          onClick={toggle}
        >
          {item.title}
        </button>
        <div
          className={` text-right absolute w-[200px] min-h-[250px] flex flex-col justify-start py-2 rounded-md ${transClass}`}
        >
          {menuItems.map((item) => (
            <Link
              key={item.route}
              
              href={item.route || ''}
              onClick={toggle}
            >
              {item.title}
            </Link>
          ))}
        </div>
      </div>
      {isOpen ? (
        <div
          
          onClick={toggle}
        ></div>
      ) : (
        <></>
      )}
    </>
  );
}