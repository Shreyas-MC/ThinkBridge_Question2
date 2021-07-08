package stepDefinitions;

import java.util.regex.Pattern;
import org.junit.Assert;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;

import cucumber.api.java.After;
import cucumber.api.java.en.*;
import pageObjects.SignUpNewMailPage;

public class SigUpNewMailSteps {
	
	Steps steps = new Steps();
	public WebDriver driver ;
	public SignUpNewMailPage sunp ;
	
	@Given("^User launch Chrome browser$")
	public void user_launch_Chrome_browser() throws Throwable {
	   
		ChromeOptions options = new ChromeOptions();
		options.addArguments("--disable-notifications");
		System.setProperty("webdriver.chrome.driver", System.getProperty("user.dir")+"//Drivers//chromedriver.exe");
		driver = new ChromeDriver(options);
		driver.manage().window().maximize();
		sunp = new SignUpNewMailPage(driver);
	
	}
	
	@Then("^close browser$")
	public void close_browser() throws Throwable {
	    driver.close();
	}
	
	@When("^User opens url \"(.*?)\"$")
	public void user_opens_url(String URL) throws Throwable {
	  driver.get(URL);
	}
	
	@Given("^All the elements in page are present$")
	public void all_the_elements_in_page_are_present() throws Throwable {
		if(sunp.getCreateHeader().equals("Create Your Account"))
			System.out.println("Header test matches");
		else 
			System.out.println("Header test does not matches");
	    Assert.assertTrue(sunp.elementNamePresent());
	    Assert.assertTrue(sunp.elementOrganizationNamePresent());
	    Assert.assertTrue(sunp.elementEmailPresent());
	    Assert.assertTrue(sunp.elementGetStartedPresent());
	    Assert.assertTrue(sunp.elementCheckBoxPresent());
	}

	@Given("^Dropdown has \"([^\"]*)\" options$")
	public void dropdown_has_options(String languageOptions) throws Throwable {
		if(!sunp.checkDropDownOptions(languageOptions))
			System.out.println("One of the languages is not avaliable in the dropdown");
		else
			System.out.println("All the languages are avaliable in the dropdown");
	}

	@When("^User selects \"([^\"]*)\" option$")
	public void user_selects_option(String language) throws Throwable {
		sunp.selectFromDropDown(language);
	}

	@Then("^The page must be loaded in the respective \"([^\"]*)\"$")
	public void the_page_must_be_loaded_in_the_respective(String arg1) throws Throwable {
	    
	}

	@When("^User enters \"([^\"]*)\" and \"([^\"]*)\" and \"([^\"]*)\"$")
	public void user_enters_and_and(String name, String organizationName, String email) throws Throwable {
	    sunp.setName(name);
	    sunp.setOrganizationName(organizationName);
	    sunp.setEmail(email);
	}
	
	@When("^User checks I Agree Checkbox$")
	public void user_checks_I_Agree_Checkbox() throws Throwable {
		sunp.selectCheckBox();
	}

	@Then("^The Get Started button should be enabled based on the validity of \"([^\"]*)\" and \"([^\"]*)\" and \"([^\"]*)\" and checkbox$")
	public void the_Get_Started_button_should_be_enabled_based_on_the_validity_of_and_and_and_checkbox(String name, String organizationName, String email) throws Throwable {
		Thread.sleep(2000);
		boolean flag = false;
		Pattern VALID_NAME_REGEX = Pattern.compile("^[ a-zA-Z]+$", Pattern.CASE_INSENSITIVE);
		Pattern VALID_ORGANIZATION_NAME_REGEX = Pattern.compile("^[ a-zA-Z0-9.,]+$", Pattern.CASE_INSENSITIVE);
		Pattern VALID_EMAIL_ADDRESS_REGEX = Pattern.compile("^[A-Z0-9._%+-]+@[A-Z0-9.-]+\\.[A-Z]{2,6}$", Pattern.CASE_INSENSITIVE);
		if (VALID_NAME_REGEX.matcher(name).find() && VALID_ORGANIZATION_NAME_REGEX.matcher(organizationName).find() && VALID_EMAIL_ADDRESS_REGEX.matcher(email).find() && sunp.checkboxSelected()  && sunp.elementGetStartedEnabled()) {
	    	System.out.println("Get started button is enabled"); flag = true;
	    }
	    else if(!(VALID_NAME_REGEX.matcher(name).find() && VALID_ORGANIZATION_NAME_REGEX.matcher(organizationName).find() && VALID_EMAIL_ADDRESS_REGEX.matcher(email).find()) && sunp.checkboxSelected() && sunp.elementGetStartedEnabled()) {
	    	System.out.println("Get started button is enabled and it should not be as one of the parameters is incorrect"); flag = false;
	    }
	    else if(VALID_NAME_REGEX.matcher(name).find() && VALID_ORGANIZATION_NAME_REGEX.matcher(organizationName).find() && VALID_EMAIL_ADDRESS_REGEX.matcher(email).find() && sunp.checkboxSelected() && (!sunp.elementGetStartedEnabled())) {
	    	System.out.println("Get started button is not enabled and it should be as all the parameters are correct"); flag = false;
	    }
	    else if(!(VALID_NAME_REGEX.matcher(name).find() && VALID_ORGANIZATION_NAME_REGEX.matcher(organizationName).find() && VALID_EMAIL_ADDRESS_REGEX.matcher(email).find()) && sunp.checkboxSelected() && (!sunp.elementGetStartedEnabled())) {
	    	System.out.println("Get started button is not enabled and it should not be as one of the parameters is incorrect"); flag = true;
	    }
	    else {System.out.println("Logic not correct");flag = false; }
		Assert.assertTrue(flag);
	}

	@When("^The user clicks on the Get Started button$")
	public void the_user_clicks_on_the_Get_Started_button() throws Throwable {
	    sunp.clickGetStarted();
	}

	@Then("^A confirmation message should appear on the browser$")
	public void a_confirmation_message_should_appear_on_the_browser() throws Throwable {
	    Assert.assertEquals(sunp.getConfirmationMessage(), "A welcome email has been sent. Please check your email."); 
	}
	
	@After
	public void TearDown() {
		driver.quit();
	}
	
}
