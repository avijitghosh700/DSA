// Creating a very large nested array with random data
function generateRandomData() {
  return {
    id: Math.floor(Math.random() * 10000),
    name: `Item ${Math.floor(Math.random() * 10000)}`,
    children: Math.random() * 1000 > 140 ? generateRandomData() : undefined,
  };
}

function generateLargeNestedArray(size) {
  const array = [];
  for (let i = 0; i < size; i++) {
    array.push(generateRandomData());
  }
  return array;
}

const data = generateLargeNestedArray(1000000);

// const data = [
//   {
//     id: 1,
//     name: "Parent 1",
//     children: [
//       {
//         id: 2,
//         name: "Child 1 of Parent 1",
//         children: [
//           {
//             id: 7,
//             name: "Grandchild 1 of Child 1",
//             children: [
//               {
//                 id: 13,
//                 name: "Great-grandchild 1 of Grandchild 1",
//               },
//               {
//                 id: 14,
//                 name: "Great-grandchild 2 of Grandchild 1",
//               },
//             ],
//           },
//           {
//             id: 8,
//             name: "Grandchild 2 of Child 1",
//           },
//         ],
//       },
//       {
//         id: 3,
//         name: "Child 2 of Parent 1",
//       },
//     ],
//   },
//   {
//     id: 4,
//     name: "Parent 2",
//     children: [
//       {
//         id: 5,
//         name: "Child 1 of Parent 2",
//         children: [
//           {
//             id: 9,
//             name: "Grandchild 1 of Child 1 of Parent 2",
//           },
//           {
//             id: 10,
//             name: "Grandchild 2 of Child 1 of Parent 2",
//             children: [
//               {
//                 id: 15,
//                 name: "Great-grandchild 1 of Grandchild 2",
//               },
//               {
//                 id: 16,
//                 name: "Great-grandchild 2 of Grandchild 2",
//               },
//             ],
//           },
//         ],
//       },
//       {
//         id: 6,
//         name: "Child 2 of Parent 2",
//       },
//     ],
//   },
// ];

const flatten = (arr) => {
  const flattened = [];

  arr.forEach((item) => {
    flattened.push({
      id: item.id,
      name: item.name,
    });

    if (Array.isArray(item.children) && item.children.length) {
      flattened.push(...flatten(item.children));
    }
  });

  return flattened;
};

console.time("flatten");
// console.log(data);
console.log(flatten(data));
console.timeEnd("flatten");
