const formatCurrency = (value: string | number) => {
  if (!value) return '-'
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(+value)
}

export default formatCurrency
