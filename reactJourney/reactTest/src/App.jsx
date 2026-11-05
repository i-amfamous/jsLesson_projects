import ChatInput from './ChatInput.jsx'
import ChatMessage from './ChatMessage.jsx'

const App = () => {
  return (
   <>
    <ChatInput />
    <ChatMessage 
      message = "Hello Chatbot" 
      sender= "user" />

    <ChatMessage 
      message = "Hello How can I help You?" 
      sender = "robot" />

    <ChatMessage 
      message = "Can you get me todays date?" 
      sender= "user" />

    <ChatMessage 
      message = "Today is November 5" 
      sender = "robot" />
   </>
  )
}

export default App