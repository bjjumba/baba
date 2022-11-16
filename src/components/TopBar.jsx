import React from 'react'

const TopBar = () => {
  return (
        <div className="topbar">
        <div className="logo">
            <div className="user">
                <img src="https://yt3.ggpht.com/ytc/AMLnZu9ML_xJnpZRwGv9ktOKxuwPcxxj6-p5ekrA28kJ9w=s900-c-k-c0x00ffffff-no-rj" alt=""/>
            </div>
        </div>
            <div className="search">
                <input type="text" name="search" placeholder="search here"/>
                <label for="search"><i className="fas fa-search"></i></label>
            </div>
            <i className="fas fa-bell"></i>
            <div className="user">
                <img src="img/user.png" alt=""/>
            </div>
        </div>
  )
}

export default TopBar