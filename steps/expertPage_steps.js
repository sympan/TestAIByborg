// step_definitions/expertPageSteps.js
const { I, expertPage, expertPageOperations } = inject();

Given("I check that the {string} is LIVE", async (expertName) => {
  I.amOnPage("https://www.oranum.com/en/chat/" + expertName + "#!/");
  //I.waitForNavigation();
  await expertPageOperations.checkIfExpertIsLive();
});

When("I click on the {string} button", (buttonName) => {
  expertPageOperations.clickDesiredButtons(
    eval(`expertPage.locators.${buttonName}`)
  );
});

Then("I should see the signup modal", () => {
  expertPageOperations.shouldSeeSignupModal();
});
