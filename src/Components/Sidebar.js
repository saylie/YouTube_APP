import React from 'react';
import { MdHome } from "react-icons/md";
import { MdOutlineSubscriptions } from "react-icons/md";
import { SiYoutubeshorts } from "react-icons/si";
import { FaYoutube } from "react-icons/fa6";
import { Link } from 'react-router-dom';


const Sidebar = ({isSidebarOpen, setIsSidebarOpen}) =>{
    const data = [
        {name: "Home", icon: MdHome, path:"/"},
        {name: "Shorts", icon: SiYoutubeshorts,path:"/shorts"},
        {name: "Subscription", icon: MdOutlineSubscriptions, path:"/Subscription" },
        {name: "You", icon: FaYoutube, path:"/you"}
    ]
    const handleLinkClick = () =>{
        if(!isSidebarOpen){
            setIsSidebarOpen(true)
        }
    }
    return(
        <>
            <div>
                <ul className='sidebar'>
                    {
                        data.map((data, index) =>(
                            <li key={index}>
                               <Link className="sidebar-link"  to={data.path} onClick={handleLinkClick}>
                                    {React.createElement(data.icon)} 
                                    {isSidebarOpen && <span className="sidebar-text">{data.name}</span>}
                                </Link>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </>
    )

}

export default Sidebar