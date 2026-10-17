const ARTICLE_DATE_LOCALE = "es-ES";

export default function formatArticleDate(date: string | undefined): string {
  if (!date) return "";

  const parsedDate = new Date(date);
  if (Number.isNaN(parsedDate.getTime())) return "";

  return parsedDate.toLocaleDateString(ARTICLE_DATE_LOCALE, {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
