function* basicGenerator() {
  console.log("This is a generator function");
}

describe("Basic generator", () => {
  it("should return an IteratorResult", () => {
    const generator = basicGenerator();

    const result = generator.next();

    expect(result.value).toEqual(undefined);
    expect(result.done).toBeTruthy();
  });
});
