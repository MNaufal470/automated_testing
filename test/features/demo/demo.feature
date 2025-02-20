Feature: Demo Feature

    
    @demo
    Scenario Outline: Run first demo feature
    Given Google page is opened
    Then Search with <SearchItem>
    Then Click on the first search result
    Then URL should match <ExpectedURL>

    Examples:
        | TestId | SearchItem | ExpectedURL |
        | DEMO_TC0001  | WDIO  | https://webdriver.io/  |