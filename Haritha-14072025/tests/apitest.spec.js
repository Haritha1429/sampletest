import { test, expect } from '@playwright/test';

test("api test Get users", async ({request})=>{

    const apiresponse = await request.get("https://reqres.in/api/users?page=2", {headers: {"x-api-key":"reqres-free-v1"}})


    console.log(await apiresponse.json())
    expect (apiresponse.status()).toBe(200)
    expect(apiresponse.page()).toBe(2)



});