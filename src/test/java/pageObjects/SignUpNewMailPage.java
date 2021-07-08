package pageObjects;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

public class SignUpNewMailPage {
	
public WebDriver driver;
	
	public SignUpNewMailPage(WebDriver ldriver) {
		driver = ldriver;
		PageFactory.initElements(ldriver, this);
	}
	
	@FindBy(xpath="//*[@id=\"language\"]/div[1]")
	@CacheLookup
	WebElement dropdown;
	
	@FindBy(xpath="//*[@id=\"language\"]/div[1]/span")
	@CacheLookup
	WebElement dropdownbutton;
	
	@FindBy(xpath="//*[@id=\"content\"]/div/div[3]/div/section/div[1]/div/h2")
	@CacheLookup
	WebElement createHeader;
	
	@FindBy(xpath="//*[@id=\"name\"]")
	@CacheLookup
	WebElement name;
	
	@FindBy(xpath = "//*[@id=\"orgName\"]")
	@CacheLookup
	WebElement organizationName;
	
	@FindBy(xpath="//*[@id=\"singUpEmail\"]") 
	@CacheLookup
	WebElement emailid;
	
	@FindBy(xpath="//*[@id=\"content\"]/div/div[3]/div/section/div[1]/form/fieldset/div[4]/label/span") 
	@CacheLookup
	WebElement checkBox;
	
	@FindBy(xpath="//*[@type=\"submit\"]")
	@CacheLookup
	WebElement getStarted;
	
	@FindBy(xpath="//*[@class=\"alert alert-danger alert-custom\"]/span")
	@CacheLookup
	WebElement confirmationMessage;
	
	public boolean elementDropDownPresent() {
		return dropdown.isDisplayed();
	}
	
	public void selectFromDropDown(String language) {
		try {
			dropdownbutton.click();
			driver.findElement(By.linkText(language)).click();
		}catch(Exception e) {
			System.out.println(e.getMessage()+" language may not be avaliable in the dropdown");
		}
		 
	}
	
	public boolean checkDropDownOptions(String languageOptions) {
		dropdownbutton.click();
		boolean flag = true;
		String [] langOptions = languageOptions.split(",");
		for (int i=0;i<langOptions.length;i++) {
			if(!driver.findElement(By.linkText(langOptions[i].trim())).isDisplayed())
				flag= false;
		}
		
		
//		Select select = new Select(dropdownOptions); 
//		List<WebElement> ddOptions = select.getOptions();  
//		
//		for (int i=0; i<langOptions.length; i++) {  
//			boolean match = false;
//			 for(WebElement we:ddOptions){
//				 if (we.getText().trim().equals(langOptions[i].trim())){
//					 match = true;
//			     }
//			 }
//			 if(!match) {System.out.println("Value "+langOptions[i]+" not in dropdown"); flag=false;}
//		 }
		return flag;
	}
	
	public String getCreateHeader() {
		return createHeader.getText();
	}
	
	public boolean elementNamePresent() {
		return name.isDisplayed();
	}
	
	public void setName(String uname) {
		name.clear();
		name.sendKeys(uname);
	}
	
	public boolean elementOrganizationNamePresent() {
		return organizationName.isDisplayed();
	}
	
	public void setOrganizationName(String oname) {
		organizationName.clear();
		organizationName.sendKeys(oname);
	}
	
	public boolean elementEmailPresent() {
		return emailid.isDisplayed();
	}
	
	public void setEmail(String uemail) {
		emailid.clear();
		emailid.sendKeys(uemail);
	}
	
	public boolean elementCheckBoxPresent() {
		return checkBox.isDisplayed();
	}
	
	public void selectCheckBox() {
		if(driver.findElement(By.xpath("//*[@type=\"checkbox\"]")).getAttribute("Class").contains("ng-empty")) 
//			new Actions(driver).moveToElement(checkBox, 0, 0).click().perform();
			checkBox.click();
	}
	
	public void unSelectCheckBox() {
		if(driver.findElement(By.xpath("//*[@type=\"checkbox\"]")).getAttribute("Class").contains("ng-not-empty"))
//			new Actions(driver).moveToElement(checkBox, 0, 0).click().perform();
			checkBox.click();
	}
	
	public boolean checkboxSelected() {
		return driver.findElement(By.xpath("//*[@type=\"checkbox\"]")).getAttribute("Class").contains("ng-not-empty");
	}
	
	public boolean elementGetStartedPresent() {
		return getStarted.isDisplayed();
	}
	
	public boolean elementGetStartedEnabled() {
		return getStarted.isEnabled();
	}
	
	public void clickGetStarted() {
		getStarted.click();
	}
	
	public boolean elementConfirmationMessagePresent() {
		return confirmationMessage.isDisplayed();
	}
	
	public String getConfirmationMessage() {
		WebDriverWait wait = new WebDriverWait(driver, 5);
		confirmationMessage = wait.until(ExpectedConditions.visibilityOf(confirmationMessage));
		if (confirmationMessage.isDisplayed())
			return confirmationMessage.getText();
		else 
			return "confirmationmessageNotDisplayed";

	}	
	
	
}
