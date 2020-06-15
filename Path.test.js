const Path = require("./Path");

test("Initiates class with default path", () => {
  let path = new Path();
  expect(path.getCurrentPath()).toBe("/");
});

test("Tests if a simple path can be set", () => {
  let path = new Path("/test/path");
  expect(path.getCurrentPath()).toBe("/test/path");
});

test("Tests if a simple path can be changed with a child path", () => {
  let path = new Path("/test/path");
  path.cd("cd");
  expect(path.getCurrentPath()).toBe("/test/path/cd");
});

test("Tests if a simple path can be changed with an absolute path", () => {
  let path = new Path("/test/path");
  path.cd("/cd");
  expect(path.getCurrentPath()).toBe("/cd");
});

test("Tests if a simple path can be changed with relative parent path", () => {
  let path = new Path("/test/path");
  path.cd("../anotherPath");
  expect(path.getCurrentPath()).toBe("/test/anotherPath");
});

test("Tests if a complex path can be changed", () => {
  let path = new Path("/test/path/another/level");
  path.cd("../../confusing/../path");
  expect(path.getCurrentPath()).toBe("/test/path/path");
});

test("Tests if the separator can be changed", () => {
  let path = new Path("\\test\\path", "\\");
  path.cd("\\cd");
  expect(path.getCurrentPath()).toBe("\\cd");
});

test("Tests if the separator can be multiple characters", () => {
  let path = new Path("-LOL-test-LOL-path", "-LOL-");
  path.cd("-LOL-cd");
  expect(path.getCurrentPath()).toBe("-LOL-cd");
});
