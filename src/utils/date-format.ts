// 2025-05-17T12:02:04.293942+00:00 => 17 May 2024
export const formatDate = (date: string) => {
  return new Date(date).toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
};
