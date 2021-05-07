import './suggestions.scss';
import Profile from '../Profile/Profile';

const Suggestions = () => {
    return (
        <div className="suggestions">
            <div className="titleContainer">
                <div className="title">
                    Suggestions For You
                </div>
                <a href="/">See ALL</a>
            </div>

            <Profile 
                caption="Followed by notmatuli + 3 more" 
                urlText="Follow" 
                iconSize="medium" 
                captionSize="small" 
                storyBorder={true} 
            />

            <Profile 
                caption="Followed by wtzdata + 3 more" 
                urlText="Follow" 
                iconSize="medium" 
                captionSize="small" 
                storyBorder={true} 
            />

            <Profile 
                caption="Followed by imsocaroline + 2 more" 
                urlText="Follow" 
                iconSize="medium" 
                captionSize="small" 
                storyBorder={true} 
            />

            <Profile 
                caption="Follows you" 
                urlText="Follow" 
                iconSize="medium" 
                captionSize="small" 
                storyBorder={true} 
            />

            <Profile 
                caption="Followed by mulst + 7 more" 
                urlText="Follow" 
                iconSize="medium" 
                captionSize="small" 
                storyBorder={true} 
            />

            
        </div>
    )
}

export default Suggestions;