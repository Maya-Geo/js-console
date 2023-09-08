const linear_search = (array, key) => {
  for (let k = 0; k < array.length; k++) {
    const element = array[k];
    if (element === key) {
      return k;
    }
    return null;
  }
};

linear_search([1, 2, 3, 4, 5, 6], 3);

const binary_search = (arr, key) => {
  let start = 0;
  let end = arr.lenght - 1;
  let middle = Math.floor((end + start) / 2);

  const element = arr[middle];
  while (key !== element && start <= end) {
    if (element < key) {
      start = middle;
    } else {
      end = middle;
    }

    middle = Math.floor((end + start) / 2);
    console.log(middle, start, end);
  }
  return element === key ? element : null;
};

binary_search([1, 2, 3, 4, 5, 6], 3);

// {
// integer k;
// for (k = 0, k < n, k++)
// if (array [k] x)
// return k;
// return -1;
// }
