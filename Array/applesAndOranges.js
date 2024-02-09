// countApplesAndOranges has the following parameter(s):

// s: integer, starting point of Sam's house location.
// t: integer, ending location of Sam's house location.
// a: integer, location of the Apple tree.
// b: integer, location of the Orange tree.
// apples: integer array, distances at which each apple falls from the tree.
// oranges: integer array, distances at which each orange falls from the tree.

let s = 2,
  t = 5,
  a = 3,
  b = 7,
  apples = [1, -1, -2, 6],
  oranges = [10, -4, -5, 20, -8];

function countApplesAndOranges(s, t, a, b, apples, oranges) {
  let appleDistance = apples.map((apple) => apple + a);
  let orangeDistance = oranges.map((orange) => orange + b);
  let appleInRange = appleDistance.filter((apple) => ((apple >= s) && (apple <= t)));
  let orangeInRange = orangeDistance.filter((orange) => ((orange >= s) && (orange <= t)));
  
  console.log(`${appleDistance} --> ${appleInRange}`);
  console.log(`${orangeDistance} --> ${orangeInRange}`);
  console.log(`${appleInRange.length}\n${orangeInRange.length}`);
}

countApplesAndOranges(s, t, a, b, apples, oranges);