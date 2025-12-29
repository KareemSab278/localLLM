export { App };

import { InputField } from "./components/InputFieldComponent";
import { useState, useEffect } from "react";
import { ChatBubbleComponent } from "./components/ChatBubbleComponent";

const bodyStyle = { width: "90%", margin: "0 auto" };
const messages = [
  {
    text: "Hello, how can I assist you today?",
    isJarvisJr: true,
  },
  {
    text: "Hi Jarvis Jr! Can you tell me a joke?",
    isJarvisJr: false,
  },
  {
    text: "Sure! Why did the scarecrow win an award? Because he was outstanding in his field!",
    isJarvisJr: true,
  },
];
function App() {
  const [chatMessages, setChatMessages] = useState(messages);
  return (
    <section style={bodyStyle}>
      {messages.length > 0 &&
        chatMessages.map((msg, index) => (
          <ChatBubbleComponent
            key={index}
            message={msg.text}
            isJarvisJr={msg?.isJarvisJr || false}
          />
        ))}
      <InputField />
      {messages.length === 0 && (
        <>
          <h1>Hi, I'm Jarvis Jr</h1>
          <p>(not Jarvis from Iron Man)</p>
        </>
      )}
    </section>
  );
}
