export const formatDate = (date) => {
  return new Date(date).toLocaleString("en-In", {
    timeZone: "Asia/Kolkata",
    hour12: true,
  });
};
