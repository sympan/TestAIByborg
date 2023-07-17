const { I, expertPage } = inject();
const assert = require("assert");

module.exports = {
  async checkIfExpertIsLive() {
    //delay the actions in order the page to fully load as far as the cedecept.config.js is not enough.
    //the test is too fast and the value of the status is always LIVE.we need to wait
    I.waitForVisible(expertPage.locators.badgeLive);
    const status = await I.grabTextFrom(expertPage.locators.badgeLive);
    try {
      assert.strictEqual(status, "LIVE");
      console.log(status);
    } catch (error) {
      throw new Error("The expert is not LIVE");
    }
  },

  clickDesiredButtons(button) {
    I.waitForVisible(button);
    I.click(button);
  },

  shouldSeeSignupModal() {
    I.seeElement(expertPage.locators.popupModalLocator);
  },
};
