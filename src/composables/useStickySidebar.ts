import type { Ref } from "vue";
import { onBeforeUnmount, onMounted } from "vue";
import { nextStickyOffset } from "./stickySidebarOffset";

type StickySidebarGaps = {
  topGap: number;
  bottomGap: number;
};

// Drives the sticky "top" of a sidebar that may be taller than the screen.
// Only acts while the element is position: sticky (desktop layout).
export default function useStickySidebar(
  sidebar: Ref<HTMLElement | null>,
  { topGap, bottomGap }: StickySidebarGaps
): void {
  let offset = topGap;
  let lastScrollY = 0;
  let scheduledFrame: number | null = null;

  function update() {
    scheduledFrame = null;
    const element = sidebar.value;
    if (!element) return;

    const scrollDelta = window.scrollY - lastScrollY;
    lastScrollY = window.scrollY;

    if (getComputedStyle(element).position !== "sticky") {
      element.style.top = "";
      return;
    }

    offset = nextStickyOffset({
      current: offset,
      scrollDelta,
      viewportHeight: window.innerHeight,
      elementHeight: element.offsetHeight,
      topGap,
      bottomGap,
    });
    element.style.top = `${offset}px`;
  }

  function scheduleUpdate() {
    if (scheduledFrame === null) {
      scheduledFrame = window.requestAnimationFrame(update);
    }
  }

  onMounted(() => {
    lastScrollY = window.scrollY;
    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate, { passive: true });
    scheduleUpdate();
  });

  onBeforeUnmount(() => {
    window.removeEventListener("scroll", scheduleUpdate);
    window.removeEventListener("resize", scheduleUpdate);
    if (scheduledFrame !== null) window.cancelAnimationFrame(scheduledFrame);
  });
}
