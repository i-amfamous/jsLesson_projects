import React from 'react'
import ChatMessage from './ChatMessage.jsx'

const ChatMessageComponent = () => {
  const chatMessages = [
    { message: 'Hello Chatbot', sender: 'user' },
    { message: 'Hello How can I help You?', sender: 'robot' },
    { message: 'Can you get me todays date?', sender: 'user' },
    { message: 'Today is November 5', sender: 'robot' }
  ]

  return (
    <div>
      {chatMessages.map((chatMessage) => (
        <ChatMessage
          message={chatMessage.message}
          sender={chatMessage.sender}
        />
      ))}
    </div>
  )
}

export default ChatMessageComponent