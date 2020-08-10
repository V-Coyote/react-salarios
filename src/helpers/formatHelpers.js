const formatter = Intl.NumberFormat(
  'pt-BR',
  {
    style: 'currency',
    currency: 'BRL',
  },
  { minimumFractionDigits: 2 }
);

export const formatNumber = (value) => {
  return formatter.format(value);
};
