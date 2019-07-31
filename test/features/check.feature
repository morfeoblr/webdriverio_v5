Feature: Feature 1

  Scenario: User opens Home page
    Given I open the url "/"
    Then I expect to be on [Home] page
    And I expect [Header Navigation] menu is displayed
    And I expect to see the following tabs displayed in strict order
      | Tab name                            |
      | Авиабилеты                |
      | Отели                          |
      | Прокат автомобилей |
    And I expect "Авиабилеты" tab is selected
    And I expect "Отели" tab is not selected
    And I expect "Прокат автомобилей" tab is not selected
    And I expect "русский" language, "Беларусь" country and "Br BYN" currency are selected at [Header Navigation] menu
    And I expect "Вход в личный кабинет" [Login] button is displayed

  Scenario: User changes regional settings
    When I click [Culture Selection] button
    Then I expect "Региональные настройки" modal is displayed
    When I select "en-GB" value from [Language] dropdown
    And I select "USD" value from [Currency] dropdown

  Scenario: User saves made changes with regional settings
    When I click [Save] button
    Then I expect "Региональные настройки" modal is not displayed
    And I expect to be on [Home] page
    And I expect [Header Navigation] menu is displayed
    And I expect to see the following tabs displayed in strict order
      | Tab name |
      | Flights  |
      | Hotels   |
      | Car Hire |