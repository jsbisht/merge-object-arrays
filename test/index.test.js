const merge = require("../code/index");

describe("Merge arrays using key specified", () => {
  test("merge arrays with common key", () => {
    const arr1 = [
      { id: "123", date: "2017-01-24" },
      { id: "456", date: "2017-01-22" },
      { id: "789", date: "2017-01-16" }
    ];
    const arr2 = [
      { id: "123", name: "Ellie" },
      { id: "456", name: "Joel" },
      { id: "789", name: "Tess" }
    ];
    const mergedArray = [
      {
        date: "2017-01-24",
        id: "123",
        name: "Ellie"
      },
      {
        date: "2017-01-22",
        id: "456",
        name: "Joel"
      },
      {
        date: "2017-01-16",
        id: "789",
        name: "Tess"
      }
    ];
    expect(merge([arr1, "id"], [arr2, "id"])).toEqual(mergedArray);
  });
  test("merge two arrays using respective keys specified", () => {
    const arr1 = [
      { id: "abdc4051", date: "2017-01-24" },
      { id: "abdc4052", date: "2017-01-22" },
      { id: "abdc4053", date: "2017-01-22" }
    ];
    const arr2 = [
      { nameId: "abdc4051", name: "ab" },
      { nameId: "abdc4052", name: "abc" }
    ];
    const mergedArray = [
      {
        id: "abdc4051",
        date: "2017-01-24",
        nameId: "abdc4051",
        name: "ab"
      },
      {
        id: "abdc4052",
        date: "2017-01-22",
        nameId: "abdc4052",
        name: "abc"
      },
      {
        id: "abdc4053",
        date: "2017-01-22"
      }
    ];
    expect(merge([arr1, "id"], [arr2, "nameId"])).toEqual(mergedArray);
  });

  test("merge three arrays using respective keys specified", () => {
    const arr1 = [
      { id: "123", date: "2017-01-24" },
      { id: "456", date: "2017-01-22" },
      { id: "789", date: "2017-01-16" }
    ];
    const arr2 = [
      { nameId: "123", name: "Ellie" },
      { nameId: "456", name: "Joel" },
      { nameId: "789", name: "Tess" }
    ];
    const arr3 = [
      { id: "123", value: "abc" },
      { id: "456", value: "def" },
      { id: "789", value: "ghi" }
    ];
    const mergedArray = [
      {
        id: "123",
        name: "Ellie",
        nameId: "123",
        value: "abc",
        date: "2017-01-24"
      },
      {
        id: "456",
        name: "Joel",
        nameId: "456",
        value: "def",
        date: "2017-01-22"
      },
      {
        id: "789",
        name: "Tess",
        nameId: "789",
        value: "ghi",
        date: "2017-01-16"
      }
    ];
    expect(merge([arr1, "id"], [arr2, "nameId"], [arr3, "id"])).toEqual(
      mergedArray
    );
  });
});
