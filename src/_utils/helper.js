export function convertTimestamp(timestamp) {
  const now = new Date(); // Current date and time
  const messageDate = new Date(timestamp); // Date from the timestamp

  const timeDifference = now - messageDate; // Difference in milliseconds

  if (timeDifference < 60 * 60 * 1000) {
    // Less than 1 hour ago, show time
    return messageDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  } else if (timeDifference < 24 * 60 * 60 * 1000) {
    // Less than 24 hours ago, show day of the week
    return messageDate.toLocaleString('en-US', { weekday: 'long' });
  } else if (timeDifference < 7 * 24 * 60 * 60 * 1000) {
    // Less than 7 days ago, show day of the week
    return messageDate.toLocaleString('en-US', { weekday: 'long' });
  } else {
    // 7 days or more ago, show date in the format DD/MM/YYYY
    const day = messageDate.getDate();
    const month = messageDate.getMonth() + 1; // Months are zero-based
    const year = messageDate.getFullYear();
    return `${day}/${month < 10 ? '0' : ''}${month}/${year}`;
  }
}

// const timestamp = 1698410994439; // Replace this with your timestamp
// const formattedTime = convertTimestamp(timestamp);

// console.log(formattedTime);