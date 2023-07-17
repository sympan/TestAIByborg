const { I } = require("codeceptjs");
const { homePage, homePageOperations } = inject();

Given("I am on the home page", () => {
  homePageOperations.navigateToHomePage();
});

When("I search for the partial text {string}", (partialText) => {
  homePageOperations.searchForPartialText(partialText);
});

Then(
  "I should see in the results only expert names containing {string}",
  async (partialText) => {
    //get only the values from the search list, when the user types some text
    //alternatively we could use a Expert.js class with a constructor and create objects to store info for every result in the list.
    //Then we could use the objects to get status and other info for the expert
    //Here we go simple and we use a class locator to get only the information we need and return an array of string results
    const searchResults = await homePageOperations.getSearchResults(
      ".toolbar-autosuggest-suggestion"
    );

    homePageOperations.verifyPartialTextInResults(partialText, searchResults);
  }
);
