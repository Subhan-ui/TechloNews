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

  if (diffSeconds < 60) {
    return `${diffSeconds} seconds ago`;
  } else if (diffMinutes < 60) {
    return `${diffMinutes} minutes ago`;
  } else if (diffHours < 24) {
    return `${diffHours} hours ago`;
  } else if (diffDays < 7) {
    return `${diffDays} days ago`;
  } else if (diffWeeks < 4) {
    return `${diffWeeks} weeks ago`;
  } else if (diffMonths < 12) {
    return `${diffMonths} months ago`;
  } else {
    return `${diffYears} years ago`;
  }
};

export default timeAgo;
