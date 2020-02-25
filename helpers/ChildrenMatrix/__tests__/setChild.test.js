const { ChildrenMatrix } = require("../ChildrenMatrix");

test("test ChildrenMatrix.setChild function", () => {
  const m = new ChildrenMatrix(2);

  expect(m.matrix[0][0]).toBeFalsy();

  m.setChild(0, 0, {});

  expect(m.matrix[0][0]).not.toBeFalsy();
});
