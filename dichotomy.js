//Recherche par dichotomie le nombre minimun du tableau

//const numbers = [5, 40, 1, -3, 14, 30, -15, 80, 74, -20, -99];

function searchMin(numbers) {
  if (numbers.length === 1) {
    return numbers[0];
  } else {
    let first = numbers.slice(0, numbers.length/2);
    let last = numbers.slice(numbers.length/2,  numbers.length);
    let minFirst = searchMin(first);
    let minLast = searchMin(last);

    if(minFirst < minLast){
      return minFirst;
    } else{
      return minLast;
    }
  }
}

module.exports = searchMin;
