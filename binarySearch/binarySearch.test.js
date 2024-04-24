import {binarySearch} from './binarySearch'

describe("binarySearch test", () => {

  const list = Array.from({length: 100}, (_, k) => k + 1)
  console.log(list);
  it("should find correct positions", () => {
    expect(binarySearch(list, 1)).toEqual(0)
  })

  it("should return -1 because array is not included this element", () => {
    expect(binarySearch(list, 200)).toEqual(-1)
  })
})