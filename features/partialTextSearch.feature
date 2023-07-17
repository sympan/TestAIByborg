Feature: Search Feature - Partial Text Search

  Scenario: Search for experts using partial text
    Given I am on the home page
    When I search for the partial text "Moon"
    Then I should see in the results only expert names containing "Moon"