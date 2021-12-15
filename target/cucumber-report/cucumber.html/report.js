$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("VisaConfirmation.feature");
formatter.feature({
  "line": 1,
  "name": "Visa Confirmation Test",
  "description": "User should be able to find out if they need a visa or not to come to UK",
  "id": "visa-confirmation-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 7199778400,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "An Australian coming from UK for tourism",
  "description": "",
  "id": "visa-confirmation-test;an-australian-coming-from-uk-for-tourism",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@Smoke"
    },
    {
      "line": 4,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "User is on Homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User clicks on start button",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User selects nationality \"Australia\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User clicks on continue button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User selects reason \"Tourism or visiting family and friends\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User clicks on continue button",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User will see the message \"You will not need a visa to come to the UK\"",
  "keyword": "Then "
});
formatter.match({
  "location": "VisaConfirmationSteps.userIsOnHomepage()"
});
formatter.result({
  "duration": 214086900,
  "status": "passed"
});
formatter.match({
  "location": "VisaConfirmationSteps.userClicksOnStartButton()"
});
formatter.result({
  "duration": 518933900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Australia",
      "offset": 26
    }
  ],
  "location": "VisaConfirmationSteps.userSelectsNationality(String)"
});
formatter.result({
  "duration": 129487300,
  "status": "passed"
});
formatter.match({
  "location": "VisaConfirmationSteps.userClicksOnContinueButton()"
});
formatter.result({
  "duration": 288541900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Tourism or visiting family and friends",
      "offset": 21
    }
  ],
  "location": "VisaConfirmationSteps.userSelectsReason(String)"
});
formatter.result({
  "duration": 103661200,
  "status": "passed"
});
formatter.match({
  "location": "VisaConfirmationSteps.userClicksOnContinueButton()"
});
formatter.result({
  "duration": 373194200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "You will not need a visa to come to the UK",
      "offset": 27
    }
  ],
  "location": "VisaConfirmationSteps.userWillSeeTheMessage(String)"
});
formatter.result({
  "duration": 49505100,
  "status": "passed"
});
formatter.after({
  "duration": 879566200,
  "status": "passed"
});
formatter.before({
  "duration": 2698634600,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "A Chilean coming to the UK for work and plans on staying for longer than six months",
  "description": "",
  "id": "visa-confirmation-test;a-chilean-coming-to-the-uk-for-work-and-plans-on-staying-for-longer-than-six-months",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 14,
      "name": "@Sanity"
    },
    {
      "line": 14,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 16,
  "name": "User is on Homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "User clicks on start button",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "User selects nationality \"Chile\"",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "User clicks on continue button",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "User selects reason \"Work, academic visit or business\"",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "User clicks on continue button",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "User selects length of stay \"longer than 6 months\"",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "User clicks on continue button",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "User selects job type \"Health and care professional\"",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "User clicks on continue button",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "User will see the message \"You need a visa to work in health and care\"",
  "keyword": "Then "
});
formatter.match({
  "location": "VisaConfirmationSteps.userIsOnHomepage()"
});
formatter.result({
  "duration": 29000,
  "status": "passed"
});
formatter.match({
  "location": "VisaConfirmationSteps.userClicksOnStartButton()"
});
formatter.result({
  "duration": 466274000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Chile",
      "offset": 26
    }
  ],
  "location": "VisaConfirmationSteps.userSelectsNationality(String)"
});
formatter.result({
  "duration": 102352500,
  "status": "passed"
});
formatter.match({
  "location": "VisaConfirmationSteps.userClicksOnContinueButton()"
});
formatter.result({
  "duration": 274152200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Work, academic visit or business",
      "offset": 21
    }
  ],
  "location": "VisaConfirmationSteps.userSelectsReason(String)"
});
formatter.result({
  "duration": 145563700,
  "status": "passed"
});
formatter.match({
  "location": "VisaConfirmationSteps.userClicksOnContinueButton()"
});
formatter.result({
  "duration": 288924000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "longer than 6 months",
      "offset": 29
    }
  ],
  "location": "VisaConfirmationSteps.userSelectsLengthOfStay(String)"
});
formatter.result({
  "duration": 88483800,
  "status": "passed"
});
formatter.match({
  "location": "VisaConfirmationSteps.userClicksOnContinueButton()"
});
formatter.result({
  "duration": 249538300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Health and care professional",
      "offset": 23
    }
  ],
  "location": "VisaConfirmationSteps.userSelectsJobType(String)"
});
formatter.result({
  "duration": 98694300,
  "status": "passed"
});
formatter.match({
  "location": "VisaConfirmationSteps.userClicksOnContinueButton()"
});
formatter.result({
  "duration": 333721200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "You need a visa to work in health and care",
      "offset": 27
    }
  ],
  "location": "VisaConfirmationSteps.userWillSeeTheMessage(String)"
});
formatter.result({
  "duration": 55029400,
  "status": "passed"
});
formatter.after({
  "duration": 857306700,
  "status": "passed"
});
formatter.before({
  "duration": 2509684600,
  "status": "passed"
});
formatter.scenario({
  "line": 29,
  "name": "A columbian National coming to the UK to join a partner for a long stay",
  "description": "",
  "id": "visa-confirmation-test;a-columbian-national-coming-to-the-uk-to-join-a-partner-for-a-long-stay",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 28,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 30,
  "name": "User is on Homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 31,
  "name": "User clicks on start button",
  "keyword": "When "
});
formatter.step({
  "line": 32,
  "name": "User selects nationality \"Colombia\"",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "User clicks on continue button",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "User selects reason \"Join partner or family for a long stay\"",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "User clicks on continue button",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "User selects immigration status \"Yes\"",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "User clicks on continue button",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "User will see the message \"You’ll need a visa to join your family or partner in the UK\"",
  "keyword": "Then "
});
formatter.match({
  "location": "VisaConfirmationSteps.userIsOnHomepage()"
});
formatter.result({
  "duration": 27500,
  "status": "passed"
});
formatter.match({
  "location": "VisaConfirmationSteps.userClicksOnStartButton()"
});
formatter.result({
  "duration": 517994100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Colombia",
      "offset": 26
    }
  ],
  "location": "VisaConfirmationSteps.userSelectsNationality(String)"
});
formatter.result({
  "duration": 111789600,
  "status": "passed"
});
formatter.match({
  "location": "VisaConfirmationSteps.userClicksOnContinueButton()"
});
formatter.result({
  "duration": 317139000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Join partner or family for a long stay",
      "offset": 21
    }
  ],
  "location": "VisaConfirmationSteps.userSelectsReason(String)"
});
formatter.result({
  "duration": 155905000,
  "status": "passed"
});
formatter.match({
  "location": "VisaConfirmationSteps.userClicksOnContinueButton()"
});
formatter.result({
  "duration": 294867400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Yes",
      "offset": 33
    }
  ],
  "location": "VisaConfirmationSteps.userSelectsImmigrationStatus(String)"
});
formatter.result({
  "duration": 92390000,
  "status": "passed"
});
formatter.match({
  "location": "VisaConfirmationSteps.userClicksOnContinueButton()"
});
formatter.result({
  "duration": 251766200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "You’ll need a visa to join your family or partner in the UK",
      "offset": 27
    }
  ],
  "location": "VisaConfirmationSteps.userWillSeeTheMessage(String)"
});
formatter.result({
  "duration": 46008500,
  "status": "passed"
});
formatter.after({
  "duration": 881777100,
  "status": "passed"
});
});