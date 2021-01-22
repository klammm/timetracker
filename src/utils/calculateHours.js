export const calculateHours = (timeList) => {
  return timeList.reduce((acc, currentValue) => {
    const hours = Math.abs(currentValue.out - currentValue.in) / 36e5;
    acc += hours;
    return acc;
  }, 0)
}

export const roundHours = (number) => {
  return (Math.round(number * 4) / 4).toFixed(2);
}
