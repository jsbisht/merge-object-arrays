# merge-object-arrays

Merge arrays based on a key or different keys.

This is specially useful when you have to merge data split across mutliple arrays, but there is a common key that can be used to merge these arrays.

### features

- Merge two object arrays based on a key or different keys.
- Merge multiple object arrays based on a key or different keys.

### install

To install the latest version:

npm install --save merge-object-arrays

### example

#### merge two arrays by keys

```js
const merge = require("merge-object-arrays");

const arr1 = [
  { id: "abdc4051", date: "2017-01-24" },
  { id: "abdc4052", date: "2017-01-22" },
  { id: "abdc4053", date: "2017-01-22" }
];
const arr2 = [
  { nameId: "abdc4051", name: "ab" },
  { nameId: "abdc4052", name: "abc" }
];

merge([arr1, "id"], [arr2, "nameId"]);
```

    // Merged Array
    [
      {
        "id": "abdc4051",
        "date": "2017-01-24",
        "nameId": "abdc4051",
        "name": "ab"
      },
      {
        "id": "abdc4052",
        "date": "2017-01-22",
        "nameId": "abdc4052",
        "name": "abc"
      },
      {
        "id": "abdc4053",
        "date": "2017-01-22"
      }
    ]

#### merge multiple arrays by keys

```js
const merge = require("merge-object-arrays");

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

merge([arr1, "id"], [arr2, "nameId"], [arr3, "id"]);
```

    [
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
    ]
