const vfile = require("vfile");
const reporter = require("./vfile-reporter-github-checks");

test("no files", () => {
  const result = reporter([], { raw: true });
  const expectation = [];
  expect(result).toEqual(expectation);
});

test("one file, one message", () => {
  const test = vfile({ path: "~/test.md" });
  test.message("example", { line: 1 });
  const result = reporter([test], { raw: true });
  const expectation = [
    {
      filename: "~/test.md",
      start_line: 1,
      end_line: null,
      message: "example",
      warning_level: "warning"
    }
  ];
  expect(result).toEqual(expectation);
});

test("one file, several messages", () => {
  const test = vfile({ path: "~/test.md" });
  test.message("example 1", { line: 1 });
  test.message("example 2", { line: 2 });
  test.message("example 3", { line: 3 });
  const result = reporter([test], { raw: true });
  const expectation = [
    {
      filename: "~/test.md",
      start_line: 1,
      end_line: null,
      message: "example 1",
      warning_level: "warning"
    },
    {
      filename: "~/test.md",
      start_line: 2,
      end_line: null,
      message: "example 2",
      warning_level: "warning"
    },
    {
      filename: "~/test.md",
      start_line: 3,
      end_line: null,
      message: "example 3",
      warning_level: "warning"
    }
  ];
  expect(result).toEqual(expectation);
});

test("message point", () => {
  const test = vfile({ path: "~/test.md" });
  test.message("example", { line: 1 });
  const result = reporter([test], { raw: true });
  const expectation = [
    {
      filename: "~/test.md",
      start_line: 1,
      end_line: null,
      message: "example",
      warning_level: "warning"
    }
  ];
  expect(result).toEqual(expectation);
});

test("message postion", () => {
  const test = vfile({ path: "~/test.md" });
  test.message("example", { start: { line: 1 }, end: { line: 2 } });
  const result = reporter([test], { raw: true });
  const expectation = [
    {
      filename: "~/test.md",
      start_line: 1,
      end_line: 2,
      message: "example",
      warning_level: "warning"
    }
  ];
  expect(result).toEqual(expectation);
});

test("message no location", () => {
  const test = vfile({ path: "~/test.md" });
  test.message("example", {});
  const result = reporter([test], { raw: true });
  const expectation = [
    {
      filename: "~/test.md",
      // TODO: why are start and end different here?
      start_line: undefined,
      end_line: null,
      message: "example",
      warning_level: "warning"
    }
  ];
  expect(result).toEqual(expectation);
});
