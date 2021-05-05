import React from 'react';
//styles
import './menu.scss';

//assets
import { ReactComponent as Home } from '../images/home.svg'
import { ReactComponent as Inbox } from '../images/inbox.svg'
import { ReactComponent as Explore } from '../images/navigation.svg'
import { ReactComponent as Notifications } from '../images/notifications.svg'




const Menu = () => {
return (
    <div className="menu"> 
       <Home className="icon" />
       <Inbox className="icon" />
       <Explore className="icon" />
       <Notifications className="icon" />
    </div>
)
}

export default Menu;