import {useState} from 'react'
import {Chatbot} from 'supersimpledev'
import LoadingImage from '../assets/loading-spinner.gif'
import './ChatInput.css'
export function ChatInput({chatMessages, setChatMessages}){
        const[inputText, setInputText] = useState('');
        const[isLoading, setIsLoading] = useState(false);

        function saveInputText(event){
          setInputText(event.target.value);
        }


        async function sendMessage(){
          if(isLoading|| inputText === ''){
            return;
          }

          setIsLoading(true);

          setInputText('');
      
      
          const newChatMessages= [
              ...chatMessages,
              {
                message: inputText,
                sender: 'user',
                id: crypto.randomUUID()
              }
             ];

           setChatMessages(newChatMessages);
              setChatMessages([
                ...newChatMessages,
                {
                  message:<img src={LoadingImage} className="loader" />,
                  sender: 'robot',
                  id: crypto.randomUUID()
                }
              ]);

            const  response= await Chatbot.getResponseAsync(inputText);
              setChatMessages([
              ...newChatMessages,
              {
                message: response,
                sender: 'robot',
                id: crypto.randomUUID()
              }
             ]);
            

             setIsLoading(false);
            }
        

        function handleKeyDown(event){
          if(event.key === 'Enter'){
            sendMessage();
          }
          else if(event.key === 'Escape'){
            setInputText('');
          }
        }
        return(
          <div className="chat-input-container">
             <input 
               placeholder="send a message to chatbot" 
              size="30" 
              onChange={saveInputText}
              onKeyDown={handleKeyDown}
              value={inputText}
              className="chat-input"
             />
             <button className="send-button"
                onClick={sendMessage}
             >send</button>
          </div>
        );
      }