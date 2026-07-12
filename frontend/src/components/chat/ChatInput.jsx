export default function ChatInput({ onSend }) {
  return (
    <div className="chat-input">
      <input type="text" placeholder="Type your message..." />
      <button onClick={onSend}>Send</button>
    </div>
  );
}
