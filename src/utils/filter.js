// 원화 format
export function priceFormat(value) {
  return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

// 날짜 format
export function dateFormat(value) {
  if (value === null || value === '') {
    return '-';
  } else {
    let y = value.substring(0, 4);
    let m = value.substring(4, 6);
    let d = value.substring(6, 8);

    return y + '-' + m + '-' + d;
  }
}
