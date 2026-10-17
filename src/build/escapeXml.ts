const XML_ENTITIES: Record<string, string> = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&apos;',
};

export default function escapeXml(text: string): string {
  return text.replace(/[&<>"']/g, (character) => XML_ENTITIES[character]);
}
