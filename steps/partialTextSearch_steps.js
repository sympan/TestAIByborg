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
    const searchResultsList = await homePage.getSearchResultsList();
    const searchResults = await homePageOperations.getSearchResults(
      ".toolbar-autosuggest-suggestion"
    );

    homePageOperations.verifyPartialTextInResults(partialText, searchResults);
  }
);
