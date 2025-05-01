function* nextParameterGenerator(
  input: number
): Generator<number, void, number> {
  let val = 0;
  let increase = input;
  while (true) {
    const newIncrease = yield val;
    val = val + increase;
    if (newIncrease) {
      increase = newIncrease;
    }
  }
}

describe("Next parameter generator", () => {
  it("should return an IteratorResult", () => {
    const generator = nextParameterGenerator(2);

    const result = generator.next();
    const secondResult = generator.next();
    const thirdResult = generator.next(4);
    const fourthResult = generator.next();

    expect(result.value).toEqual(0);
    expect(secondResult.value).toEqual(2);
    expect(thirdResult.value).toEqual(4);
    expect(fourthResult.value).toEqual(8);
  });
});
