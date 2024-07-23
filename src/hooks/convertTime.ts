const getTimeUnit = (
  diffSeconds: number,
  diffMinutes: number,
  diffHours: number,
  diffDays: number,
  diffWeeks: number,
  diffMonths: number,
  diffYears: number
): string => {
  if (diffSeconds < 60) return "seconds";
  if (diffMinutes < 60) return "minutes";
  if (diffHours < 24) return "hours";
  if (diffDays < 7) return "days";
  if (diffWeeks < 4) return "weeks";
  if (diffMonths < 12) return "months";
  return "years";
};

const timeAgo = (timestamp: string): string => {
  const now = new Date();
  const pastDate = new Date(Date.parse(timestamp));
  const diffMs = now.getTime() - pastDate.getTime();

  const diffSeconds = Math.abs(Math.floor(diffMs / 1000));
  const diffMinutes = Math.abs(Math.floor(diffSeconds / 60));
  const diffHours = Math.abs(Math.floor(diffMinutes / 60));
  const diffDays = Math.abs(Math.floor(diffHours / 24));
  const diffWeeks = Math.abs(Math.floor(diffDays / 7));
  const diffMonths = Math.abs(Math.floor(diffDays / 30));
  const diffYears = Math.abs(Math.floor(diffDays / 365));

  const unit = getTimeUnit(
    diffSeconds,
    diffMinutes,
    diffHours,
    diffDays,
    diffWeeks,
    diffMonths,
    diffYears
  );

  switch (unit) {
    case "seconds":
      return `${diffSeconds} seconds ago`;
    case "minutes":
      return `${diffMinutes} minutes ago`;
    case "hours":
      return `${diffHours} hours ago`;
    case "days":
      return `${diffDays} days ago`;
    case "weeks":
      return `${diffWeeks} weeks ago`;
    case "months":
      return `${diffMonths} months ago`;
    case "years":
      return `${diffYears} years ago`;
    default:
      return "just now";
  }
};

export default timeAgo;
