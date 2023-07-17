const { homePage, homePageOperations } = inject();
const allure = codeceptjs.container.plugins("allure");

Given("I am on the home page", () => {
  homePageOperations.navigateToHomePage();
});

When("I search for the expert's name {string}", (expertName) => {
  homePageOperations.searchForExpertName(expertName);
  //Simple label test for allure report. We can add more test tags and info where we want it
  allure.label("name", "Test labels with allure report");
});

Then(
  "I should see in the results only the expert's name {string}",
  async (expertName) => {
    const searchResultsList = homePage.getSearchResultsList();
    const searchResults = await homePageOperations.getSearchResults(
      ".toolbar-autosuggest-suggestion"
    );
    homePageOperations.verifyExactNameInResults(expertName, searchResults);
  }
);
