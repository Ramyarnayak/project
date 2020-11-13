import React from 'react'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import * as IoIcons from 'react-icons/io'


export const SidebarData =[
    {
        title:'Home',
        path: '/Home',
    icon: <AiIcons.AiFillHome/>,
    cName:'nav-text'
 },

{
    title:'Friends',
    path: '/friends',
icon: <IoIcons.IoIosPeople/>,
cName:'nav-text'
},
{
    title:'Profile',
    path: '/profile',
icon: <IoIcons.IoIosPersonAdd/>,
cName:'nav-text'
},
{
    title:'Support',
    path: '/support',
icon: <IoIcons.IoIosPeople/>,
cName:'nav-text'
}

]