const formatter = new Intl.RelativeTimeFormat(undefined, {
  numeric: "auto",
});

const DIVISIONS = [
  { amount: 60, name: "seconds" },
  { amount: 60, name: "minutes" },
  { amount: 24, name: "hours" },
  { amount: 7, name: "days" },
  { amount: 4.34524, name: "weeks" },
  { amount: 12, name: "months" },
  { amount: Number.POSITIVE_INFINITY, name: "years" },
];

export function formatTimeAgo(date) {
  if (typeof date === "string") {
    date = new Date(date);
  }

  let duration = (date - new Date()) / 1000;

  for (let i = 0; i <= DIVISIONS.length; i++) {
    const division = DIVISIONS[i];
    if (Math.abs(duration) < division.amount) {
      return i < 1
        ? "just now"
        : formatter.format(Math.round(duration), division.name);
    }
    duration /= division.amount;
  }
}

export function isValidDate(date) {
  return new Date(date) !== "Invalid Date" && !isNaN(new Date(date));
}
