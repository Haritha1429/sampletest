import {test,expect} from '@playwright/test';


test('Extract first 10 rows of country table', async ({ page }) => {
  await page.goto("https://cosmocode.io/automation-practice-webtable/");

  //Select all table rows inside tbody
//   const rows = await page.$$('//table[@id="countries"]/tbody/tr');

//   console.log("Country | Capital | Currency | Language");

//   for (let i = 1; i <= 10 && i < rows.length; i++) {
//     const cells = await rows[i].$$('td');  // fetch all <td> in that row
//     const values = [];
//     for (const cell of cells) {
//       values.push((await cell.innerText()).trim());
//     }
//     console.log(values.join(" | "));
//   }
// });

await page.goto("https://cosmocode.io/automation-practice-webtable/");
const rows = await page.$$('//table[@id="countries"]/tbody/tr')

console.log("Countries | Capitals| Currencies | Languages");

for(let i=1; i<=10;i++){
    const cells = await rows[i].$$('td');
    const values=[""];
    for(const cell of cells){
        values.push((await cell.innerText()).trim());
    }
    console.log(values.join("|"));
  }

});


// let array= ['//table[@id="countries"]/tbody/tr[{i}]/td[2]', 
// '//table[@id="countries"]/tbody/tr[{i}]/td[3]',
// '//table[@id="countries"]/tbody/tr[{i}]/td[4]',
// '//table[@id="countries"]/tbody/tr[{i}]/td[5]']

// for(let i=2; i<=10; i++){
//   let values=[];
//   for(const xpath of array){
//     const locator = xpath.replace("{i}", i);
//     const cell=await page.locator(locator).innerText();
//     values.push(cell.trim());
//     console.log(values.join("|"));
//   }
//  console.log(values.join("|"));
// }
// });