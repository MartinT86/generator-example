function* returningGenerator() {
    return 3
  }
  
  describe('Returning generator', () => {
    it('should return an IteratorResult', () => {
      const generator = returningGenerator()
  
      const result = generator.next()
      const secondResult = generator.next()
  
      expect(result.value).toEqual(3)
      expect(result.done).toBeTruthy()
      expect(secondResult.value).toEqual(undefined)
    });
  });