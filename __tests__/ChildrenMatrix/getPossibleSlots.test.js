const { ChildrenMatrix } = require("../../src/helpers/ChildrenMatrix/index");

describe("test ChildrenMatrix.getPossibleSlots function", () => {
  test("test 1x1 matrix", () => {
    const m = new ChildrenMatrix([{ globalBounds: {} }]);
    expect(m.getPossibleSlots()).toEqual([{ i: 0, j: 0 }]);

    m.setChild({ i: 0, j: 0 }, {});
    expect(m.getPossibleSlots()).toEqual([]);
  });

  test("test 2x2 matrix", () => {
    const m = new ChildrenMatrix([{ globalBounds: {} }, { globalBounds: {} }]);
    expect(m.getPossibleSlots()).toEqual([{ i: 0, j: 0 }]);

    m.setChild({ i: 0, j: 0 }, {});
    expect(m.getPossibleSlots()).toMatchArryIgnoringOrder([
      { i: 0, j: 1 },
      { i: 1, j: 0 },
      { i: 1, j: 1 }
    ]);
  });

  test("test 3x3 matrix", () => {
    const m = new ChildrenMatrix([
      { globalBounds: {} },
      { globalBounds: {} },
      { globalBounds: {} }
    ]);
    expect(m.getPossibleSlots()).toEqual([{ i: 0, j: 0 }]);

    m.setChild({ i: 0, j: 0 }, {});
    expect(m.getPossibleSlots()).toMatchArryIgnoringOrder([
      { i: 0, j: 1 },
      { i: 1, j: 0 },
      { i: 1, j: 1 }
    ]);

    m.setChild({ i: 0, j: 1 }, {});
    expect(m.getPossibleSlots()).toMatchArryIgnoringOrder([
      { i: 0, j: 2 },
      { i: 1, j: 0 },
      { i: 1, j: 1 },
      { i: 1, j: 2 }
    ]);
  });
});
