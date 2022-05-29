export const convertTime = (time) => {
  return new Date(time).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "numeric",
    year: "numeric",
  });
};
