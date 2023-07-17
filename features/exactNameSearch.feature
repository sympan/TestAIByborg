Feature: Search Feature - Exact Name Search

  Scenario: Search for experts using exact name
    Given I am on the home page
    When I search for the expert's name "MysticMilena"
    Then I should see in the results only the expert's name "MysticMilena"
