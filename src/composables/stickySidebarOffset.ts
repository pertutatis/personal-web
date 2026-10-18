export type StickyOffsetInput = {
  current: number;
  scrollDelta: number;
  viewportHeight: number;
  elementHeight: number;
  topGap: number;
  bottomGap: number;
};

// Sticky "top" for a sidebar taller than the screen: it moves with the page and
// locks its bottom to the screen when scrolling down, its top when scrolling up.
export function nextStickyOffset({
  current,
  scrollDelta,
  viewportHeight,
  elementHeight,
  topGap,
  bottomGap,
}: StickyOffsetInput): number {
  const lowestOffset = Math.min(topGap, viewportHeight - elementHeight - bottomGap);
  const movedOffset = current - scrollDelta;

  return Math.min(topGap, Math.max(lowestOffset, movedOffset));
}
