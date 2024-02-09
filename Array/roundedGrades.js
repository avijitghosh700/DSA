let grades = [38, 73, 22, 81, 63, 64];

function gradingStudents(grades) {
  let results = [];
  grades.forEach((item, index) => {
    let nearestNextMultiFive = Math.ceil(item/5) * 5;

    console.log(nearestNextMultiFive);
    results.push((nearestNextMultiFive >= 40) && ((nearestNextMultiFive - item) < 3) ? nearestNextMultiFive : item);
  });
  console.log(results);
}

gradingStudents(grades);