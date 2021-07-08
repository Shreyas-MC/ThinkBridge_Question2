Automation answer for quetion 2 - 

Language - Java
Framework - BDD | Cucumber

Import porject as maven project 
Run as maven clean - let the project update

run the project from the runner file by running as junit
can be run with respect to tags or the whole feature file

Have not auomtated the requeriment - Validate that you received an email. as this would be like a security breach as ony one who has access to this script can login with your mail id
we can use the encryptor to encrypt the password but these again need to be decrypted at run time and one can access it easily

Feature file - written in Gherkin
  3 sceanrios 1- validate the page
              2- validate the Get Started button enablement
              3- validate the confirmation message 

Step definitions - Sigupnewmailsteps.java
  contains the steps/functions to run the steps in the gherkin language
 
Page objects - contains the xpath of the webelements to find and functions/steps to write/click/clear actions
