const fs = require("fs");
const path = require("path");
const { JSDOM } = require("jsdom");

const filePath = path.resolve(__dirname, "../student-code/index.html");
const html = fs.readFileSync(filePath, "utf8");
const { document } = new JSDOM(html).window;

describe("Unit 02: Semantic Structure", () => {
  test("contains header, main, aside, and footer", () => {
    expect(document.querySelector("header")).not.toBeNull();
    expect(document.querySelector("main")).not.toBeNull();
    expect(document.querySelector("aside")).not.toBeNull();
    expect(document.querySelector("footer")).not.toBeNull();
  });

  test("contains summary and details tags", () => {
    expect(document.querySelector("details")).not.toBeNull();
    expect(document.querySelector("summary")).not.toBeNull();
  });

  test("main contains content", () => {
    const main = document.querySelector("main");
    expect(main && main.textContent.trim().length).toBeGreaterThan(0);
  });
});
