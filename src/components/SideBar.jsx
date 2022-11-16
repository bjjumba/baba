import React from 'react'
import {NavLink} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome,faUpload,faUser,faGear ,faBars} from "@fortawesome/free-solid-svg-icons";
const SideBar = () => {
  return (
    
        <div class="sidebar">
            <ul>
                <li>
                    <NavLink to="/"
                     style={({ isActive }) => 
                     (isActive ? {color: 'green'} : {color: 'white'})}
                    >
                        <i>
                        <FontAwesomeIcon icon={faHome}/>
                        </i>
                        <div>Dashboard</div>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/user"
                    style={({ isActive }) => 
                    (isActive ? {color: 'green'} : {color: 'white'})}
                    >
                        <i>
                        <FontAwesomeIcon icon={faUser}/>
                        </i>
                        <div>Users</div>
                    </NavLink>
                </li>
                
                <li>
                    <NavLink to="/sub"
                    style={({ isActive }) => 
                    (isActive ? {color: 'green'} : {color: 'white'})}
                    >
                    <i>
                        <FontAwesomeIcon icon={faUpload}/>
                     </i>
                        <div>Subscription</div>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/upload"
                    style={({ isActive }) => 
                    (isActive ? {color: 'green'} : {color: 'white'})}
                    >
                    <i>
                        <FontAwesomeIcon icon={faUpload}/>
                     </i>
                        <div>Upload</div>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/graph"
                    style={({ isActive }) => 
                    (isActive ? {color: 'green'} : {color: 'white'})}
                    >
                    <i>
                        <FontAwesomeIcon icon={faBars}/>
                     </i>
                        <div>Analytics</div>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/settings"
                    style={({ isActive }) => 
                    (isActive ? {color: 'green'} : {color: 'white'})}
                    >
                    <i>
                        <FontAwesomeIcon icon={faGear}/>
                     </i>
                        <div>Settings</div>
                    </NavLink>
                </li>
                <li>
                    <a href="#">
                        <i class="fas fa-question"></i>
                        <div>Help</div>
                    </a>
                </li>
            </ul>
        </div>
  )
}

export default SideBar