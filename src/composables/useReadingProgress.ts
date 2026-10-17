import type { Ref } from "vue";
import { ref, onMounted, onBeforeUnmount } from "vue";

const READING_CLASS = "is-reading";

type ReadingProgress = {
  progress: Ref<number>;
  isReading: Ref<boolean>;
};

export default function useReadingProgress(articleElement: Ref<HTMLElement | null>): ReadingProgress {
  const progress = ref(0);
  const isReading = ref(false);
  let scheduledFrame: number | null = null;

  function measure() {
    scheduledFrame = null;
    const element = articleElement.value;
    if (!element) return;

    const articleTop = element.getBoundingClientRect().top + window.scrollY;
    const readableDistance = element.offsetHeight - window.innerHeight;
    const readDistance = window.scrollY - articleTop;

    progress.value = readableDistance > 0 ? Math.min(1, Math.max(0, readDistance / readableDistance)) : 0;
    isReading.value = window.scrollY > articleTop - window.innerHeight / 2;
    document.body.classList.toggle(READING_CLASS, isReading.value);
  }

  function scheduleMeasure() {
    if (scheduledFrame === null) {
      scheduledFrame = window.requestAnimationFrame(measure);
    }
  }

  onMounted(() => {
    window.addEventListener("scroll", scheduleMeasure, { passive: true });
    window.addEventListener("resize", scheduleMeasure, { passive: true });
    scheduleMeasure();
  });

  onBeforeUnmount(() => {
    window.removeEventListener("scroll", scheduleMeasure);
    window.removeEventListener("resize", scheduleMeasure);
    if (scheduledFrame !== null) window.cancelAnimationFrame(scheduledFrame);
    document.body.classList.remove(READING_CLASS);
  });

  return { progress, isReading };
}
