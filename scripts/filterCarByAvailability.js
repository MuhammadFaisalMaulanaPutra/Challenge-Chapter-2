function filterCarByAvailability(cars) {
  // Sangat dianjurkan untuk console.log semua hal hehe
  console.log(cars);

  // Tempat penampungan hasil
  const result = [];

  // Tulis code-mu disini
  // Rubah code ini dengan array hasil filter berdasarkan availablity

  for (i in cars) {
    if (cars[i].available == true) {
      result.push(cars[i]);
    }
  }

  console.log(result);

  return result;
}
