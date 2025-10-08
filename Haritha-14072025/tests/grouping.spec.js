import{test, expect} from 'playwright/test';

test.describe("grouping test cases 1", async()=>{

    test("Test case 1", async()=>{
          console.log("Test case 1")
    })
    test("Test case 2", async()=>{
         console.log("Test case 2")


    })
})


test.describe("grouping test cases 2", async()=>{
    test.fixme();
        test("Test case 3", async()=>{
          console.log("Test case 3")
    })
    test("Test case 4", async()=>{
         console.log("Test case 4")

    })

})