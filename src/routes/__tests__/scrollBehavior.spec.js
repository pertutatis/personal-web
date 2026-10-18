import { scrollBehavior } from "../index";

const route = (hash = "") => ({ hash });

describe("scrollBehavior", () => {
  it("jumps instantly to the top on page changes, ignoring the CSS smooth scroll", () => {
    expect(scrollBehavior(route(), route(), null)).toEqual({ top: 0, behavior: "instant" });
  });

  it("restores the saved position instantly on back and forward", () => {
    expect(scrollBehavior(route(), route(), { left: 0, top: 640 })).toEqual({
      left: 0,
      top: 640,
      behavior: "instant",
    });
  });
});
