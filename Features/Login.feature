Feature: Login
	
	@testdummy1
  Scenario: Successfull login with valid credentials
    Given User launch Chrome browser
    When User opens url "http://admin-demo.nopcommerce.com/login"
    And User enters Email as "admin@yourstore.com" and Password as "admin"
    And Click on Login
    Then Page Title should be "Dashboard / nopCommerce administration"
    When User clicks on Log out link
    Then Page Title should be "Your store. Login"
    And close browser
  
  @testdummy2
	Scenario Outline: Successfull login with valid credentials
    Given User launch Chrome browser
    When User opens url "http://admin-demo.nopcommerce.com/login"
    And User enters Email as "<email>" and Password as "<password>"
    And Click on Login
    Then Page Title should be "Dashboard / nopCommerce administration"
    When User clicks on Log out link
    Then Page Title should be "Your store. Login"
    And close browser
    
    Examples:
    | email | password |
    |	admin@yourstore.com | admin |