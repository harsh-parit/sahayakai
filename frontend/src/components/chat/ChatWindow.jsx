export default function ChatWindow({ messages }) {
  return (
    <div className="chat-window">
      <div className="messages-container">
        {messages?.map((msg, idx) => (
          <div key={idx} className={`message ${msg.type}`}>
            {msg.content}
          </div>
        ))}
      </div>
    </div>
  );
}
