import './sidebar.scss';

import Sticky from 'react-sticky-el';
import Profile from '../Profile/Profile';
import Suggestions from '../Suggestions/Suggestions';
import Footer from '../Footer/Footer';
import image from '../images/profilepic.jpg'

const Sidebar = () => {
    return (
        <Sticky topOffset={-80}>
            <div className="sidebar">
                <Profile 
                    username="carolina.maffia" 
                    caption="Carolina Maffia" 
                    urlText="Switch" 
                    iconSize="big" 
                    image={image} 
                />
                <Suggestions />
                <Footer />
            </div>
        </Sticky>
    );
}

export default Sidebar;