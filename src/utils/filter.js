// 원화 filter
export function priceFilter(value) {
  return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

// 날짜 filter
export function dateFilter(value) {
  return null;
}
