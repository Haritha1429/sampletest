import {test , expect} from '@playwright/test';

test('New Promise', async () => {

const P = new Promise((resolve, reject) => {

    let X = 2;

    if (X == 2) {

        resolve("Hari");
    }
    else {
        reject("fail");
    }
})

P.then(message=>console.message)
.finally("this is final block")

// console.log(P)

// const q = Promise.resolve("Hari")

// console.log(q)

// const r = Promise.reject("fail")

// console.log(r)

});