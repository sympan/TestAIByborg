// step_definitions/expertPageSteps.js
const { I, expertPage, expertPageOperations } = inject();

Given("I check that the {string} is LIVE", async (expertName) => {
  I.amOnPage("https://www.oranum.com/en/chat/" + expertName + "#!/");

  await expertPageOperations.checkIfExpertIsLive();
});

When("I click on the {string} button", (buttonName) => {
  expertPageOperations.clickDesiredButtons(
    //Use the evaluated string, after getting the string parameter from the test feature file in the double quoted string
    //The names in the strings are the configured names of the POM locators
    eval(`expertPage.locators.${buttonName}`)
  );
});

Then("I should see the signup modal", () => {
  expertPageOperations.shouldSeeSignupModal();
});
