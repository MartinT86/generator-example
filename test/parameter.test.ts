function* parameterGenerator(input: number) {
  while (input < 2) {
    yield input;
    input++;
  }
}

describe("Parameter generator", () => {
  it("should return an IteratorResult", () => {
    const generator = parameterGenerator(0);

    const result = generator.next();
    const secondResult = generator.next();
    const thirdResult = generator.next();

    expect(result.value).toEqual(0);
    expect(result.done).toBeFalsy();

    expect(secondResult.value).toEqual(1);
    expect(secondResult.done).toBeFalsy();

    expect(thirdResult.value).toEqual(undefined);
    expect(thirdResult.done).toBeTruthy();
  });
});
