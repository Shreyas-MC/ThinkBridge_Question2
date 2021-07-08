package stepDefinitions;

import org.junit.Assert;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;

import cucumber.api.java.en.*;
import pageObjects.LoginPage;

public class Steps {
	
	public WebDriver driver;
	public LoginPage lp;
	
//	@Given("^User launch Chrome browser$")
//	public void user_launch_Chrome_browser() throws Throwable {
//	   
//		ChromeOptions options = new ChromeOptions();
//		options.addArguments("--disable-notifications");
//		System.setProperty("webdriver.chrome.driver", System.getProperty("user.dir")+"//Drivers//chromedriver.exe");
//		driver = new ChromeDriver(options);
//		
//		lp = new LoginPage(driver);
//	
//	}

//	@When("^User opens url \"(.*?)\"$")
//	public void user_opens_url(String URL) throws Throwable {
//	  driver.get(URL);
//	}

	@When("^User enters Email as \"(.*?)\" and Password as \"(.*?)\"$")
	public void user_enters_Email_as_and_Password_as(String Email, String Password) throws Throwable {
	   lp.setUserName(Email);
	   lp.setPassword(Password);
	}

	@When("^Click on Login$")
	public void click_on_Login() throws Throwable {
	    lp.clickLogin();
	}

	@Then("^Page Title should be \"(.*?)\"$")
	public void page_title_should_be(String PageTitle) throws Throwable {
	    Assert.assertEquals(driver.getTitle(),PageTitle);
	}

	@When("^User clicks on Log out link$")
	public void user_clicks_on_Log_out_link() throws Throwable {
	  lp.clickLogout();
	}

//	@Then("^close browser$")
//	public void close_browser() throws Throwable {
//	    driver.close();
//	}
}
