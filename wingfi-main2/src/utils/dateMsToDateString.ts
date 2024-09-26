export function dateMsToDateString(rawDate: number | undefined) {
  if (!rawDate) return null;

  const date = new Date(rawDate);

  const dateObject = `${date.toDateString()} ${date.getHours()}:${date.getMinutes()}`;
  return dateObject;
}
