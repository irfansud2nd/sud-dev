export const countMonth = () => {
  const start = new Date("2023-03-01");
  const current = new Date();
  const monthsPassed =
    (current.getFullYear() - start.getFullYear()) * 12 +
    (current.getMonth() - start.getMonth());
  return monthsPassed;
};
