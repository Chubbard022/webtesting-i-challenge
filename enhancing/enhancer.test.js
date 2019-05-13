const enhancer = require('./enhancer.js');
// test away!

const compareTo = {
    name: "test",
    durability:100,
    enhancement: 20
}

describe("enhancer.js",()=>{
    describe("repair() method",()=>{
        it("should return durability restored to 100 ",()=>{
            let test = {
                name: "test",
                durability:100,
                enhancement: 20
            }
            expect(enhancer.repair(compareTo)).toEqual(compareTo)
            expect(enhancer.repair(compareTo)).toEqual({...test,durability:100})
        })
    })
})