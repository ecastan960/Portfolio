const [, check] = require("../components/read_input");

test("Checks string as input", () => {
  expect(check("test")).toStrictEqual([NaN, false]);
});

test("Checks with no input", () => {
  expect(check()).toStrictEqual([NaN, false]);
});

test("Checks with valid input", () => {
  expect(check("139")).toStrictEqual([139, true]);
});
