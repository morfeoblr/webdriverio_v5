Feature: In order to keep my product stable
  As a developer or product manager
  I want to make sure that everything works as expected

  Scenario: Home page is loaded
    Given I open the url "/"
    Then I expect to be on [Home] page
    And I expect to see the following tabs displayed in strict order
      | Tab name                            |
      | Авиабилеты                |
      | Отели                          |
      | Прокат автомобилей |
    And I expect "Авиабилеты" tab is selected
    And I expect "Отели" tab is not selected
    And I expect "Прокат автомобилей" tab is not selected

  Scenario: User can change regional settings
    When I click [Culture Selection] button
    Then I expect "Региональные настройки" modal is displayed