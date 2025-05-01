function* yieldGenerator() {
  yield 1;
  yield 2;
}

describe("for value of generator", () => {
  it("should return an IteratorResult", () => {
    const generator = yieldGenerator();

    let total = 0;
    for (const value of generator) {
      total = total + value;
    }

    expect(total).toEqual(3);
  });
});

describe("Spread the values value of a generator", () => {
  it("should return an IteratorResult", () => {
    const generator = yieldGenerator();

    const values = [...generator];

    expect(values).toEqual([1, 2]);
  });
});

describe("Yield generator", () => {
  it("should return an IteratorResult", () => {
    const generator = yieldGenerator();

    const result = generator.next();
    const secondResult = generator.next();
    const thirdResult = generator.next();

    expect(result.value).toEqual(1);
    expect(result.done).toBeFalsy();

    expect(secondResult.value).toEqual(2);
    expect(secondResult.done).toBeFalsy();

    expect(thirdResult.value).toEqual(undefined);
    expect(thirdResult.done).toBeTruthy();
  });
});
