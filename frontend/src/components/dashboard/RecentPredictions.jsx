export default function RecentPredictions({ predictions }) {
  return (
    <div className="recent-predictions">
      <h2>Recent Predictions</h2>
      <div className="predictions-list">
        {predictions?.map((pred, idx) => (
          <div key={idx} className="prediction-item">
            {pred.name}
          </div>
        ))}
      </div>
    </div>
  );
}
