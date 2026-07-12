// Formatter functions

export const formatCurrency = (amount) => {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
  }).format(amount);
};

export const formatPercentage = (value) => {
  return `${(value * 100).toFixed(2)}%`;
};
