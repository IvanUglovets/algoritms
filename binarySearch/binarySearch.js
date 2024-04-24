export const binarySearch = (list, el) => {
  let start = 0;
  let end = list.length - 1;
  while (start <= end) { 
    let mid = Math.floor((start + end) / 2);

    if (list[mid] === el) {
      return mid
    }

    if (el < list[mid]) {
      end = mid - 1
    }else{
      start = mid + 1
    }
  }
  return -1
}