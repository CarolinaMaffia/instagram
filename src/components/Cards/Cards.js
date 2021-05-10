//styles
import './cards.scss';
//Components
import Stories from '../Stories/Stories';
import Card from '../Card/Card';

const Cards = () => {
    const commentsOne = [
        {
          user: "raffagrassetti",
          text: "Woah dude, this is awesome! 🔥",
          id: 1,
        },
        {
          user: "therealadamsavage",
          text: "Like!",
          id: 2,
        },
        {
          user: "mapvault",
          text: "Niceeeee!",
          id: 3,
        },
      ];
    
      const commentsTwo = [
        {
          user: "mapvault",
          text: "Amazing content, keep it up!",
          id: 4,
        },
      ];
    
      const commentsThree = [
        {
          user: "dadatlacak",
          text: "Love this!",
          id: 5,
        },
      ];
    
    return (
        <div className="cards">
            <Stories />
            <Card 
                accountName="burningxhearts" 
                storyBorder={true} 
                image="https://picsum.photos/800/900" 
                comments={commentsOne} 
                likedByText="datita" 
                likedByNumber="89" 
                hours={18} 
            />

            <Card 
                accountName="burningxhearts" 
                storyBorder={true} 
                image="https://picsum.photos/800/600" 
                comments={commentsTwo} 
                likedByText="datita" 
                likedByNumber="89" 
                hours={18} 
            />

            <Card 
                accountName="burningxhearts" 
                storyBorder={true} 
                image="https://picsum.photos/800" 
                comments={commentsThree} 
                likedByText="datita" 
                likedByNumber="89" 
                hours={18} 
            />

            <Card 
                accountName="burningxhearts" 
                storyBorder={true} 
                image="https://picsum.photos/800/1000" 
                comments={commentsOne} 
                likedByText="datita" 
                likedByNumber="89" 
                hours={18} 
            />
        </div>
    )
}

export default Cards;