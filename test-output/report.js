$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("./Features/SignUPNewMail.feature");
formatter.feature({
  "line": 1,
  "name": "Sign UP for the Application",
  "description": "",
  "id": "sign-up-for-the-application",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "Load page in selected language",
  "description": "",
  "id": "sign-up-for-the-application;load-page-in-selected-language",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "User launch Chrome browser",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User opens url \"http://jt-dev.azurewebsites.net/#/SignUp\"",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "All the elements in page are present",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Dropdown has \"\u003call_languages\u003e\" options",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 9,
      "value": "#When User selects \"\u003clanguage\u003e\" option"
    },
    {
      "line": 10,
      "value": "#Then The page must be loaded in the respective \"\u003clanguage\u003e\""
    }
  ],
  "line": 11,
  "name": "close browser",
  "keyword": "And "
});
formatter.examples({
  "line": 13,
  "name": "",
  "description": "",
  "id": "sign-up-for-the-application;load-page-in-selected-language;",
  "rows": [
    {
      "cells": [
        "all_languages",
        "language"
      ],
      "line": 14,
      "id": "sign-up-for-the-application;load-page-in-selected-language;;1"
    },
    {
      "cells": [
        "English,Dutch",
        "English"
      ],
      "line": 15,
      "id": "sign-up-for-the-application;load-page-in-selected-language;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 15,
  "name": "Load page in selected language",
  "description": "",
  "id": "sign-up-for-the-application;load-page-in-selected-language;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "User launch Chrome browser",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User opens url \"http://jt-dev.azurewebsites.net/#/SignUp\"",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "All the elements in page are present",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Dropdown has \"English,Dutch\" options",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 9,
      "value": "#When User selects \"\u003clanguage\u003e\" option"
    },
    {
      "line": 10,
      "value": "#Then The page must be loaded in the respective \"\u003clanguage\u003e\""
    }
  ],
  "line": 11,
  "name": "close browser",
  "keyword": "And "
});
formatter.match({
  "location": "SigUpNewMailSteps.user_launch_Chrome_browser()"
});
formatter.result({
  "duration": 2557072200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "http://jt-dev.azurewebsites.net/#/SignUp",
      "offset": 16
    }
  ],
  "location": "SigUpNewMailSteps.user_opens_url(String)"
});
formatter.result({
  "duration": 4031284000,
  "status": "passed"
});
formatter.match({
  "location": "SigUpNewMailSteps.all_the_elements_in_page_are_present()"
});
formatter.result({
  "duration": 250750800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "English,Dutch",
      "offset": 14
    }
  ],
  "location": "SigUpNewMailSteps.dropdown_has_options(String)"
});
formatter.result({
  "duration": 368447200,
  "status": "passed"
});
formatter.match({
  "location": "SigUpNewMailSteps.close_browser()"
});
formatter.result({
  "duration": 90968500,
  "status": "passed"
});
formatter.after({
  "duration": 804539500,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 18,
  "name": "Signup by providing Name, Organization and Email",
  "description": "",
  "id": "sign-up-for-the-application;signup-by-providing-name,-organization-and-email",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 19,
  "name": "User launch Chrome browser",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "User opens url \"http://jt-dev.azurewebsites.net/#/SignUp\"",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 21,
      "value": "#When User selects \"\u003clanguage\u003e\" option"
    },
    {
      "line": 22,
      "value": "#Then The page must be loaded in the respective \"\u003clanguage\u003e\""
    }
  ],
  "line": 23,
  "name": "User enters \"\u003cname\u003e\" and \"\u003corganization_name\u003e\" and \"\u003cemail\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "User checks I Agree Checkbox",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "The Get Started button should be enabled based on the validity of \"\u003cname\u003e\" and \"\u003corganization_name\u003e\" and \"\u003cemail\u003e\" and checkbox",
  "keyword": "Then "
});
formatter.step({
  "line": 26,
  "name": "close browser",
  "keyword": "And "
});
formatter.examples({
  "line": 28,
  "name": "",
  "description": "",
  "id": "sign-up-for-the-application;signup-by-providing-name,-organization-and-email;",
  "rows": [
    {
      "cells": [
        "language",
        "name",
        "organization_name",
        "email"
      ],
      "line": 29,
      "id": "sign-up-for-the-application;signup-by-providing-name,-organization-and-email;;1"
    },
    {
      "cells": [
        "English",
        "test",
        "testorganization",
        "test@domain.com"
      ],
      "line": 30,
      "id": "sign-up-for-the-application;signup-by-providing-name,-organization-and-email;;2"
    },
    {
      "cells": [
        "English",
        "Test",
        "test organization",
        "Test123,invalid@not.a.domain.com"
      ],
      "line": 31,
      "id": "sign-up-for-the-application;signup-by-providing-name,-organization-and-email;;3"
    },
    {
      "cells": [
        "English",
        "Test@123",
        "test organization",
        "test@domain"
      ],
      "line": 32,
      "id": "sign-up-for-the-application;signup-by-providing-name,-organization-and-email;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 30,
  "name": "Signup by providing Name, Organization and Email",
  "description": "",
  "id": "sign-up-for-the-application;signup-by-providing-name,-organization-and-email;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 19,
  "name": "User launch Chrome browser",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "User opens url \"http://jt-dev.azurewebsites.net/#/SignUp\"",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 21,
      "value": "#When User selects \"\u003clanguage\u003e\" option"
    },
    {
      "line": 22,
      "value": "#Then The page must be loaded in the respective \"\u003clanguage\u003e\""
    }
  ],
  "line": 23,
  "name": "User enters \"test\" and \"testorganization\" and \"test@domain.com\"",
  "matchedColumns": [
    1,
    2,
    3
  ],
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "User checks I Agree Checkbox",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "The Get Started button should be enabled based on the validity of \"test\" and \"testorganization\" and \"test@domain.com\" and checkbox",
  "matchedColumns": [
    1,
    2,
    3
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 26,
  "name": "close browser",
  "keyword": "And "
});
formatter.match({
  "location": "SigUpNewMailSteps.user_launch_Chrome_browser()"
});
formatter.result({
  "duration": 1256231400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "http://jt-dev.azurewebsites.net/#/SignUp",
      "offset": 16
    }
  ],
  "location": "SigUpNewMailSteps.user_opens_url(String)"
});
formatter.result({
  "duration": 3391388800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test",
      "offset": 13
    },
    {
      "val": "testorganization",
      "offset": 24
    },
    {
      "val": "test@domain.com",
      "offset": 47
    }
  ],
  "location": "SigUpNewMailSteps.user_enters_and_and(String,String,String)"
});
formatter.result({
  "duration": 471949100,
  "status": "passed"
});
formatter.match({
  "location": "SigUpNewMailSteps.user_checks_I_Agree_Checkbox()"
});
formatter.result({
  "duration": 86864600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test",
      "offset": 67
    },
    {
      "val": "testorganization",
      "offset": 78
    },
    {
      "val": "test@domain.com",
      "offset": 101
    }
  ],
  "location": "SigUpNewMailSteps.the_Get_Started_button_should_be_enabled_based_on_the_validity_of_and_and_and_checkbox(String,String,String)"
});
formatter.result({
  "duration": 2045950800,
  "status": "passed"
});
formatter.match({
  "location": "SigUpNewMailSteps.close_browser()"
});
formatter.result({
  "duration": 53959100,
  "status": "passed"
});
formatter.after({
  "duration": 839124900,
  "status": "passed"
});
formatter.scenario({
  "line": 31,
  "name": "Signup by providing Name, Organization and Email",
  "description": "",
  "id": "sign-up-for-the-application;signup-by-providing-name,-organization-and-email;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 19,
  "name": "User launch Chrome browser",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "User opens url \"http://jt-dev.azurewebsites.net/#/SignUp\"",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 21,
      "value": "#When User selects \"\u003clanguage\u003e\" option"
    },
    {
      "line": 22,
      "value": "#Then The page must be loaded in the respective \"\u003clanguage\u003e\""
    }
  ],
  "line": 23,
  "name": "User enters \"Test\" and \"test organization\" and \"Test123,invalid@not.a.domain.com\"",
  "matchedColumns": [
    1,
    2,
    3
  ],
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "User checks I Agree Checkbox",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "The Get Started button should be enabled based on the validity of \"Test\" and \"test organization\" and \"Test123,invalid@not.a.domain.com\" and checkbox",
  "matchedColumns": [
    1,
    2,
    3
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 26,
  "name": "close browser",
  "keyword": "And "
});
formatter.match({
  "location": "SigUpNewMailSteps.user_launch_Chrome_browser()"
});
formatter.result({
  "duration": 1202231400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "http://jt-dev.azurewebsites.net/#/SignUp",
      "offset": 16
    }
  ],
  "location": "SigUpNewMailSteps.user_opens_url(String)"
});
formatter.result({
  "duration": 2388958900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Test",
      "offset": 13
    },
    {
      "val": "test organization",
      "offset": 24
    },
    {
      "val": "Test123,invalid@not.a.domain.com",
      "offset": 48
    }
  ],
  "location": "SigUpNewMailSteps.user_enters_and_and(String,String,String)"
});
formatter.result({
  "duration": 563565400,
  "status": "passed"
});
formatter.match({
  "location": "SigUpNewMailSteps.user_checks_I_Agree_Checkbox()"
});
formatter.result({
  "duration": 84328600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Test",
      "offset": 67
    },
    {
      "val": "test organization",
      "offset": 78
    },
    {
      "val": "Test123,invalid@not.a.domain.com",
      "offset": 102
    }
  ],
  "location": "SigUpNewMailSteps.the_Get_Started_button_should_be_enabled_based_on_the_validity_of_and_and_and_checkbox(String,String,String)"
});
formatter.result({
  "duration": 2082137900,
  "status": "passed"
});
formatter.match({
  "location": "SigUpNewMailSteps.close_browser()"
});
formatter.result({
  "duration": 59495800,
  "status": "passed"
});
formatter.after({
  "duration": 805975800,
  "status": "passed"
});
formatter.scenario({
  "line": 32,
  "name": "Signup by providing Name, Organization and Email",
  "description": "",
  "id": "sign-up-for-the-application;signup-by-providing-name,-organization-and-email;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 19,
  "name": "User launch Chrome browser",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "User opens url \"http://jt-dev.azurewebsites.net/#/SignUp\"",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 21,
      "value": "#When User selects \"\u003clanguage\u003e\" option"
    },
    {
      "line": 22,
      "value": "#Then The page must be loaded in the respective \"\u003clanguage\u003e\""
    }
  ],
  "line": 23,
  "name": "User enters \"Test@123\" and \"test organization\" and \"test@domain\"",
  "matchedColumns": [
    1,
    2,
    3
  ],
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "User checks I Agree Checkbox",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "The Get Started button should be enabled based on the validity of \"Test@123\" and \"test organization\" and \"test@domain\" and checkbox",
  "matchedColumns": [
    1,
    2,
    3
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 26,
  "name": "close browser",
  "keyword": "And "
});
formatter.match({
  "location": "SigUpNewMailSteps.user_launch_Chrome_browser()"
});
formatter.result({
  "duration": 1225415400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "http://jt-dev.azurewebsites.net/#/SignUp",
      "offset": 16
    }
  ],
  "location": "SigUpNewMailSteps.user_opens_url(String)"
});
formatter.result({
  "duration": 2721330200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Test@123",
      "offset": 13
    },
    {
      "val": "test organization",
      "offset": 28
    },
    {
      "val": "test@domain",
      "offset": 52
    }
  ],
  "location": "SigUpNewMailSteps.user_enters_and_and(String,String,String)"
});
formatter.result({
  "duration": 484393600,
  "status": "passed"
});
formatter.match({
  "location": "SigUpNewMailSteps.user_checks_I_Agree_Checkbox()"
});
formatter.result({
  "duration": 87472800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Test@123",
      "offset": 67
    },
    {
      "val": "test organization",
      "offset": 82
    },
    {
      "val": "test@domain",
      "offset": 106
    }
  ],
  "location": "SigUpNewMailSteps.the_Get_Started_button_should_be_enabled_based_on_the_validity_of_and_and_and_checkbox(String,String,String)"
});
formatter.result({
  "duration": 2049276700,
  "error_message": "java.lang.AssertionError\r\n\tat org.junit.Assert.fail(Assert.java:87)\r\n\tat org.junit.Assert.assertTrue(Assert.java:42)\r\n\tat org.junit.Assert.assertTrue(Assert.java:53)\r\n\tat stepDefinitions.SigUpNewMailSteps.the_Get_Started_button_should_be_enabled_based_on_the_validity_of_and_and_and_checkbox(SigUpNewMailSteps.java:104)\r\n\tat ✽.Then The Get Started button should be enabled based on the validity of \"Test@123\" and \"test organization\" and \"test@domain\" and checkbox(./Features/SignUPNewMail.feature:25)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "SigUpNewMailSteps.close_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 914951500,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 34,
  "name": "Signup by providing Name, Organization and Email",
  "description": "",
  "id": "sign-up-for-the-application;signup-by-providing-name,-organization-and-email",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 35,
  "name": "User launch Chrome browser",
  "keyword": "Given "
});
formatter.step({
  "line": 36,
  "name": "User opens url \"http://jt-dev.azurewebsites.net/#/SignUp\"",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 37,
      "value": "#When User selects \"\u003clanguage\u003e\" option"
    },
    {
      "line": 38,
      "value": "#Then The page must be loaded in the respective \"\u003clanguage\u003e\""
    }
  ],
  "line": 39,
  "name": "User enters \"\u003cname\u003e\" and \"\u003corganization_name\u003e\" and \"\u003cemail\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 40,
  "name": "User checks I Agree Checkbox",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "The Get Started button should be enabled based on the validity of \"\u003cname\u003e\" and \"\u003corganization_name\u003e\" and \"\u003cemail\u003e\" and checkbox",
  "keyword": "Then "
});
formatter.step({
  "line": 42,
  "name": "The user clicks on the Get Started button",
  "keyword": "When "
});
formatter.step({
  "line": 43,
  "name": "A confirmation message should appear on the browser",
  "keyword": "Then "
});
formatter.step({
  "line": 44,
  "name": "close browser",
  "keyword": "And "
});
formatter.examples({
  "line": 46,
  "name": "",
  "description": "",
  "id": "sign-up-for-the-application;signup-by-providing-name,-organization-and-email;",
  "rows": [
    {
      "cells": [
        "language",
        "name",
        "organization_name",
        "email"
      ],
      "line": 47,
      "id": "sign-up-for-the-application;signup-by-providing-name,-organization-and-email;;1"
    },
    {
      "cells": [
        "English",
        "test",
        "testorganization",
        "test@domain.com"
      ],
      "line": 48,
      "id": "sign-up-for-the-application;signup-by-providing-name,-organization-and-email;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 48,
  "name": "Signup by providing Name, Organization and Email",
  "description": "",
  "id": "sign-up-for-the-application;signup-by-providing-name,-organization-and-email;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 35,
  "name": "User launch Chrome browser",
  "keyword": "Given "
});
formatter.step({
  "line": 36,
  "name": "User opens url \"http://jt-dev.azurewebsites.net/#/SignUp\"",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 37,
      "value": "#When User selects \"\u003clanguage\u003e\" option"
    },
    {
      "line": 38,
      "value": "#Then The page must be loaded in the respective \"\u003clanguage\u003e\""
    }
  ],
  "line": 39,
  "name": "User enters \"test\" and \"testorganization\" and \"test@domain.com\"",
  "matchedColumns": [
    1,
    2,
    3
  ],
  "keyword": "When "
});
formatter.step({
  "line": 40,
  "name": "User checks I Agree Checkbox",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "The Get Started button should be enabled based on the validity of \"test\" and \"testorganization\" and \"test@domain.com\" and checkbox",
  "matchedColumns": [
    1,
    2,
    3
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 42,
  "name": "The user clicks on the Get Started button",
  "keyword": "When "
});
formatter.step({
  "line": 43,
  "name": "A confirmation message should appear on the browser",
  "keyword": "Then "
});
formatter.step({
  "line": 44,
  "name": "close browser",
  "keyword": "And "
});
formatter.match({
  "location": "SigUpNewMailSteps.user_launch_Chrome_browser()"
});
formatter.result({
  "duration": 1228063100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "http://jt-dev.azurewebsites.net/#/SignUp",
      "offset": 16
    }
  ],
  "location": "SigUpNewMailSteps.user_opens_url(String)"
});
formatter.result({
  "duration": 2283251100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test",
      "offset": 13
    },
    {
      "val": "testorganization",
      "offset": 24
    },
    {
      "val": "test@domain.com",
      "offset": 47
    }
  ],
  "location": "SigUpNewMailSteps.user_enters_and_and(String,String,String)"
});
formatter.result({
  "duration": 490246300,
  "status": "passed"
});
formatter.match({
  "location": "SigUpNewMailSteps.user_checks_I_Agree_Checkbox()"
});
formatter.result({
  "duration": 83967700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test",
      "offset": 67
    },
    {
      "val": "testorganization",
      "offset": 78
    },
    {
      "val": "test@domain.com",
      "offset": 101
    }
  ],
  "location": "SigUpNewMailSteps.the_Get_Started_button_should_be_enabled_based_on_the_validity_of_and_and_and_checkbox(String,String,String)"
});
formatter.result({
  "duration": 2053739300,
  "status": "passed"
});
formatter.match({
  "location": "SigUpNewMailSteps.the_user_clicks_on_the_Get_Started_button()"
});
formatter.result({
  "duration": 40682700,
  "status": "passed"
});
formatter.match({
  "location": "SigUpNewMailSteps.a_confirmation_message_should_appear_on_the_browser()"
});
formatter.result({
  "duration": 4233581100,
  "status": "passed"
});
formatter.match({
  "location": "SigUpNewMailSteps.close_browser()"
});
formatter.result({
  "duration": 60474700,
  "status": "passed"
});
formatter.after({
  "duration": 835634400,
  "status": "passed"
});
});