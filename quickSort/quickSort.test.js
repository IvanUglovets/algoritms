import {quickSort} from './quickSort'

describe("quickSort test", () => {

  it("should be return sorted array", () => {
    const array = [1,2,-4,-2,16,9,-5,-2,0]
    const sortedArray = [1,2,-4,-2,16,9,-5,-2,0].sort((a,b) => a -b)
    expect(quickSort(array)).toEqual(sortedArray)
  })

  it("should be return sorted array", () => {
    const array = [1,2,-4,-2,16,9,-5,-2,0,6,42,42,2,-4,5-6]
    const sortedArray = [1,2,-4,-2,16,9,-5,-2,0,6,42,42,2,-4,5-6].sort((a,b) => a -b)
    expect(quickSort(array)).toEqual(sortedArray)
  })
})