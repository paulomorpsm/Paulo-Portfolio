export function checkPostLength(message, maxWords) {
  const words = message.split(" ");
  if (words.length > maxWords) {
    const shortenedMessage = words.slice(0, maxWords).join(" ");
    return {
      shortMessage: shortenedMessage,
      fullMessage: message,
      isShortened: true,
    };
  } else {
    return {
      shortMessage: message,
      fullMessage: message,
      isShortened: false,
    };
  }
}
