describe('introduction(name)', function() {
    it('takes in an argument of a name and returns a phrase with that name using string interpolation', function() {
      expect(introduction("Aki")).toEqual("Hi, my name is Aki.");
      expect(introduction("Samip")).toEqual("Hi, my name is Samip.");
    })
  })
function logTwoValues(Aki, Samip) {
    console.log(`The two values are ${value1} and ${value2}.`)
}