export default function ConfidenceMeter({ confidence }) {
  return (
    <div className="confidence-meter">
      <div className="confidence-bar" style={{ width: `${confidence}%` }}></div>
      <span className="confidence-value">{confidence}%</span>
    </div>
  );
}
