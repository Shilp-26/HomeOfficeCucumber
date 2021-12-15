Feature: Visa Confirmation Test
  User should be able to find out if they need a visa or not to come to UK

  @Smoke @Regression
  Scenario: An Australian coming from UK for tourism
    Given User is on Homepage
    When User clicks on start button
    And User selects nationality "Australia"
    And User clicks on continue button
    And User selects reason "Tourism or visiting family and friends"
    And User clicks on continue button
    Then User will see the message "You will not need a visa to come to the UK"

  @Sanity @Regression
  Scenario: A Chilean coming to the UK for work and plans on staying for longer than six months
    Given User is on Homepage
    When User clicks on start button
    And User selects nationality "Chile"
    And User clicks on continue button
    And User selects reason "Work, academic visit or business"
    And User clicks on continue button
    And User selects length of stay "longer than 6 months"
    And User clicks on continue button
    And User selects job type "Health and care professional"
    And User clicks on continue button
    Then User will see the message "You need a visa to work in health and care"

  @Regression
  Scenario: A columbian National coming to the UK to join a partner for a long stay
    Given User is on Homepage
    When User clicks on start button
    And User selects nationality "Colombia"
    And User clicks on continue button
    And User selects reason "Join partner or family for a long stay"
    And User clicks on continue button
    And User selects immigration status "Yes"
    And User clicks on continue button
    Then User will see the message "You’ll need a visa to join your family or partner in the UK"



