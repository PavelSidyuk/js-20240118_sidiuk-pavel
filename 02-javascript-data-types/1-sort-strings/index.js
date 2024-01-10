/**
 * sortStrings - sorts array of string by two criteria "asc" or "desc"
 * @param {string[]} arr - the array of strings
 * @param {string} [param="asc"] param - the sorting type "asc" or "desc"
 * @returns {string[]}
 */
export function sortStrings(arr, param = 'asc') {
  let sortArr = arr.concat([]);
  sortArr.sort((a, b) => a.localeCompare(b));
  if (param === 'desc') {
    return sortArr.reverse();
  } else if (param === 'asc') {
    sortArr.sort((a,b) => a.localeCompare(b,'ru',{caseFirst: 'upper'}));
    return sortArr;
  }

}
