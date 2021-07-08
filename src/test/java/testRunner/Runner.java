package testRunner;

import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		
		features = "./Features/SignUPNewMail.feature",
		glue = "stepDefinitions",
//		uncomment the below if you want to run wit respect to tags
//		tags = {"@test2"},
//		make the dry run true if you want to see if all the steps have a function mapped and not to run the actual tests on the browser, make it false to run in the browser
		dryRun = false,
		monochrome=true,
		plugin = {
				"pretty",
				"html:test-output"	
				}
		)
public class Runner {
	
	
	
}
