export const calculateHours = (history) => {
  let hours = 0;
  if (history.length === 0) {
    return hours;
  }

  for (const time of history) {
    // Check arguments are valid
    if (!time.in && !time.out) {
      return hours
    }

    // Subtract time.in - time.out
    const calculation = Math.abs(time.in - time.out) / 36e5

    // add that into hours
    hours += calculation
  }

  return hours
}
