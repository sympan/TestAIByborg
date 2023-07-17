/*const { I } = inject();

HomePage = {
  // Locators
  locators: {
    searchForExperts: { css: "input[name='searchText']" },
    searchResultsList: {
      xpath: '//*[@id="home"]/div[1]/div/div[1]/div/div/div/ul',
    },
  },
  searchResults: [],

  // Methods
  open() {
    I.amOnPage("/");
  },

  searchForExperts(partialText) {
    I.seeElement(this.locators.searchForExperts);
    I.click(this.locators.searchForExperts);
    I.fillField(this.locators.searchForExperts, partialText);
    I.waitForVisible(this.locators.searchResultsList);
  },
  async getExpertsResults() {
    this.searchResults = await I.grabTextFromAll(
      ".toolbar-autosuggest-suggestion"
      //this.locators.searchResultsList
    );

    console.log(this.searchResults);
    return this.searchResults;
  },
  resultsContainPartialText() {},
  resultsReturnPsychic() {},
};

module.exports = HomePage;*/
const { I } = inject();

module.exports = {
  searchBar: { css: "input[name='searchText']" },
  searchResultsList: {
    xpath: '//*[@id="home"]/div[1]/div/div[1]/div/div/div/ul',
  },

  getSearchResultsList() {
    return this.searchResultsList;
  },
};
