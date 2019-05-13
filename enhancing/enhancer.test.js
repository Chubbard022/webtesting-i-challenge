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
        it("should decrease durability or enhancers given enhancer levels ",()=>{
            let failTestOne = {
                name: "test",
                durability:100,
                enhancement: 17
            }
            let failTestTwo = {
                name: "test",
                durability:100,
                enhancement: 10
            }
            expect(enhancer.fail(compareTo)).toEqual(compareTo)
            expect(enhancer.fail(failTestOne)).toEqual({...failTestOne, durability:90})
            expect(enhancer.fail(failTestTwo)).toEqual({...failTestTwo, durability: 95})
        })
    })
})