const data = require("../components/api_data");

test("Checks good endpoint", () => {
  const test1 = async () => {
    const status = await data("https://mach-eight.uc.r.appspot.com/");
    expect(status.status).toStrictEqual(200);
  };
  test1();
});
