import { useState } from 'react';

export const usePrediction = () => {
  const [prediction, setPrediction] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  return { prediction, setPrediction, loading, setLoading, error, setError };
};
