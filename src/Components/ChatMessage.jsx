 import RobotProfileImage from '../assets/robot.png'
import UserProfileImage from '../assets/user-bot.png'
 import './ChatMessage.css'
 export function ChatMessage({message,sender}){
    
        return(
          <div className={
            sender==='user' 
              ? 'chat-message-user' 
               : 'chat-message-robot'
            }>
            {sender === 'robot' &&  (
              <img src={RobotProfileImage} 
              className="image-message" />
            )}

            <div className="chat-message-text">
              {message}
           </div>

           {sender === 'user' && (
            <img src={UserProfileImage} 
            className="image-message" />
            )}
          </div>

        );
      }