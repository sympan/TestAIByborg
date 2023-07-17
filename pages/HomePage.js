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
