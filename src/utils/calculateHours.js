export const calculateHours = (timeList) => {
  return timeList.reduce((acc, currentValue) => {
    const hours = Math.abs(currentValue.out - currentValue.in) / 36e5;
    acc += hours;
    return acc;
  }, 0)
}
