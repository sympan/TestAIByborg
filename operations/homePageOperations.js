const { I, homePage } = inject();
const assert = require("assert");
const { link } = require("fs");
module.exports = {
  navigateToHomePage() {
    I.amOnPage("/");
  },

  searchForPartialText(partialText) {
    I.fillField(homePage.searchBar, partialText);
    I.waitForVisible(homePage.searchResultsList, 3);
  },

  searchForExpertName(expertName) {
    I.fillField(homePage.searchBar, expertName);
    I.waitForVisible(homePage.searchResultsList, 3);
  },

  async getSearchResults(searchResultsList) {
    I.waitForVisible(homePage.searchResultsList, 3);
    return await I.grabTextFromAll(searchResultsList);
  },

  /*async getExpertLink(expertName) {
    I.waitForVisible(homePage.searchResultsList, 3);
    const linkElement = await locate(
      `//a[contains(text(), "${expertName}")]`
    ).as("Link");
    return linkElement;
  },*/

  async verifyPartialTextInResults(partialText, searchResults) {
    I.say(`Verifying partial text "${partialText}" in search results`);
    if (searchResults && Array.isArray(searchResults)) {
      //iterate the array to see if the elements include the partial text
      searchResults.forEach((result) => {
        assert.assertStringIncludes(result, partialText);
      });
    } else {
      //if there are no results matching the keyword, no array will be returned.
      //Thus we can display the following error
      throw new Error("No experts found with this keyword");
    }
  },

  verifyExactNameInResults(exactName, searchResults) {
    I.say(`Verifying exact name "${exactName}" in search results`);
    if (searchResults && Array.isArray(searchResults)) {
      //iterate the array to see if the elements match exactly the searched expert
      searchResults.forEach((result) => {
        assert.strictEqual(result, exactName);
      });
    } else {
      //if there are no results matching the keyword, no array will be returned.
      //Thus we can display the following error
      throw new Error("No experts found with this keyword");
    }
  },
};
