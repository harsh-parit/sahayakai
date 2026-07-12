export default function Message({ content, type }) {
  return (
    <div className={`message message-${type}`}>
      {content}
    </div>
  );
}
