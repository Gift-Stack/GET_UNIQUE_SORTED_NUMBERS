function getUniqueSortedNumbers(tree) {
  let uniqueSortedNumbers = []

  ;(function sortTree(tree) {
    const ObjArr = Object.values(tree)

    for (let i = 0; i < ObjArr.length; i++) {
      // Assuming the values are objects and numbers only
      if (typeof ObjArr[i] === 'object') {
        sortTree(ObjArr[i])
      } else uniqueSortedNumbers.push(ObjArr[i])
    }

    const set = new Set(uniqueSortedNumbers)
    const uniqueArr = Array.from(set)
    uniqueSortedNumbers = uniqueArr.sort((a, b) => a - b)
  })(tree)

  console.log(uniqueSortedNumbers)
  return uniqueSortedNumbers
}

getUniqueSortedNumbers({
  a: {
    x: 3,
    y: {
      d: 2,
      e: 2,
      f: {
        g: 4
      },
      z: 8
    }
  }
})
