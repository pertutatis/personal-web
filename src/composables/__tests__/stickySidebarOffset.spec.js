import { nextStickyOffset } from "../stickySidebarOffset";

// Viewport 800px, header gap 96px at the top, 32px gap at the bottom
const viewport = { viewportHeight: 800, topGap: 96, bottomGap: 32 };

describe("nextStickyOffset", () => {
  it("stays under the header when the sidebar fits on screen", () => {
    expect(nextStickyOffset({ ...viewport, current: 96, scrollDelta: 300, elementHeight: 500 })).toBe(96);
  });

  it("moves up with the page while scrolling down", () => {
    expect(nextStickyOffset({ ...viewport, current: 96, scrollDelta: 100, elementHeight: 1000 })).toBe(-4);
  });

  it("locks the bottom of the sidebar to the bottom of the screen while scrolling down", () => {
    // lowest offset: 800 - 1000 - 32 = -232
    expect(nextStickyOffset({ ...viewport, current: -200, scrollDelta: 500, elementHeight: 1000 })).toBe(-232);
  });

  it("moves down with the page while scrolling up", () => {
    expect(nextStickyOffset({ ...viewport, current: -232, scrollDelta: -100, elementHeight: 1000 })).toBe(-132);
  });

  it("locks the top of the sidebar under the header while scrolling up", () => {
    expect(nextStickyOffset({ ...viewport, current: 50, scrollDelta: -500, elementHeight: 1000 })).toBe(96);
  });

  it("keeps the offset when there is no scroll", () => {
    expect(nextStickyOffset({ ...viewport, current: -100, scrollDelta: 0, elementHeight: 1000 })).toBe(-100);
  });
});
