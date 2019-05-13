const enhancer = require('./enhancer.js');
// test away!

const compareTo = {
    name: "test",
    durability:100,
    enhancement: 20
}

describe("enhancer.js",()=>{
    describe("enhancer methods()",()=>{
        it("should return durability restored to 100 ",()=>{
            let repairTest = {
                name: "test",
                durability:100,
                enhancement: 20
            }
            expect(enhancer.repair(compareTo)).toEqual(compareTo)
            expect(enhancer.repair(compareTo)).toEqual({...repairTest,durability:100})
        })
        it("should increase enhancement levels if lower than 20 ,",()=>{
            let succeedTest = {
                name: "test",
                durability:100,
                enhancement: 18
            }
            expect(enhancer.succeed(compareTo)).toEqual(compareTo)
            expect(enhancer.succeed(succeedTest)).toEqual({...succeedTest,enhancement:19})
        })
    })
})