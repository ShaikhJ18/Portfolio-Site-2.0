import React from 'react'
import NavLink from './NavLink';
const MenuOverlay = ({links}) => {
    return (
        <ul className='flex flex-col py-4 items-center'>
            {links.map((linke,index) => (
            <li key={index}>
            <NavLink href={linke.path} title={linke.title}/>
            </li>
            ))}
            </ul>
    )
}

export default MenuOverlay;