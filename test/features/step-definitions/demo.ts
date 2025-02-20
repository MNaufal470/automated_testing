import { Given, When, Then } from "@wdio/cucumber-framework";
import { expect } from "chai";

Given("Google page is opened", async function () {
  await browser.pause(300);
  await browser.url("https://www.google.com/");
});

When(/Search with (.*)/, async function (searchItem) {
  console.log(`>> expectedResult: ${searchItem}`);
  let ele = await $(`[name=q]`);
  await ele.click();
  await browser.pause(700);
  await ele.setValue(searchItem);
  await browser.pause(1000);
  await browser.keys("Enter");
});

Then("Click on the first search result", async function () {
  let ele = await $(`<h3>`);
  await ele.click();
});

Then(/URL should match (.*)/, async function (expectedResult) {
  console.log(`>> expectedResult: ${expectedResult}`);
  let url = await browser.getUrl();
  expect(url).to.equal(expectedResult);
});
