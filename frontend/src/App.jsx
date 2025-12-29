export { App };

import { InputField } from "./components/InputFieldComponent";
import { useState, useEffect } from "react";
import { ChatBubbleComponent } from "./components/ChatBubbleComponent";

const bodyStyle = { width: "90%", margin: "0 auto" };

function App() {
  const [chatEntries, setChatEntries] = useState([]);
  return (
    <section style={bodyStyle}>
      {chatEntries.length > 0 &&
        chatEntries.map((msg, index) => (
          <ChatBubbleComponent
            key={index}
            message={msg?.text}
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
