export const delay = (timeoutInSeconds) =>
  new Promise((resolve) => setTimeout(resolve, timeoutInSeconds * 1000));
