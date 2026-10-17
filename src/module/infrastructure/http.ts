export async function getJson<T>(url: string): Promise<T | null> {
  const response = await fetch(url, { method: 'GET' });

  if (!response.ok) {
    return null;
  }

  return response.json() as Promise<T>;
}
