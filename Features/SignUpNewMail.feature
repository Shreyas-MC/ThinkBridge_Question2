Feature: Sign UP for the Application
	
	@test1
  Scenario Outline: Load page in selected language
    Given User launch Chrome browser
    And User opens url "http://jt-dev.azurewebsites.net/#/SignUp"
    And All the elements in page are present
    And Dropdown has "<all_languages>" options
    #When User selects "<language>" option
   	#Then The page must be loaded in the respective "<language>"
    And close browser

    Examples:
    | all_languages |	language | 
    | English,Dutch | English	|
    
   @test2 
	Scenario Outline: Signup by providing Name, Organization and Email
		Given User launch Chrome browser
    And User opens url "http://jt-dev.azurewebsites.net/#/SignUp"
    #When User selects "<language>" option
    #Then The page must be loaded in the respective "<language>"
    When User enters "<name>" and "<organization_name>" and "<email>"
    And User checks I Agree Checkbox
    Then The Get Started button should be enabled based on the validity of "<name>" and "<organization_name>" and "<email>" and checkbox
    And close browser
    
    Examples:
    |	language	|	name	|	organization_name	|	email	|
    |	English	|	test	|	testorganization	|	test@domain.com |
    |	English | Test	| test organization | test_name@domain.com |
    |	English | Test@123 | test organization |	test@domain |
    
  @test3  
  Scenario Outline: Signup by providing Name, Organization and Email
		Given User launch Chrome browser
    And User opens url "http://jt-dev.azurewebsites.net/#/SignUp"
    #When User selects "<language>" option
    #Then The page must be loaded in the respective "<language>"
    When User enters "<name>" and "<organization_name>" and "<email>"
    And User checks I Agree Checkbox
    Then The Get Started button should be enabled based on the validity of "<name>" and "<organization_name>" and "<email>" and checkbox
    When The user clicks on the Get Started button
    Then A confirmation message should appear on the browser
    And close browser
    
    Examples:
    |	language	|	name	|	organization_name	|	email	|
    |	English	|	test	|	testorganization	|	test@domain.com |
    