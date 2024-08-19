const sorting = require("../../app");

describe("Books names test suit", () => {
  it("Books names should be sorted in ascending order", () => {
    const input = [
      "Гарри Поттер",
      "Властелин Колец",
      "Волшебник изумрудного города",
    ];
    const expected = [
      "Властелин Колец",
      "Волшебник изумрудного города",
      "Гарри Поттер",
    ];
    const output = sorting.sortByName(input);
    expect(output).toEqual(expected);
  });
});

describe("Books names test suit negative", () => {
  it("Naming a book without sorting", () => {
    const input = [
      "Гарри Поттер",
      "Волшебник изумрудного города",
      "Гарри Поттер",
    ];
    const expected = [
      "Волшебник изумрудного города",
      "Гарри Поттер",
      "Гарри Поттер",
    ];
    const output = sorting.sortByName(input);
    expect(output).toEqual(expected);
  });
});
