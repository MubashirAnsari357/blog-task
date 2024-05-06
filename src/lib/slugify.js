export const slugify = (title, category = "") => {
  const combinedString = `${title} ${category}`.toLowerCase();
  return combinedString.replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
};
