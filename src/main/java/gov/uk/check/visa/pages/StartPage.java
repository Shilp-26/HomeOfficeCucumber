package gov.uk.check.visa.pages;

import com.aventstack.extentreports.Status;
import gov.uk.check.visa.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.testng.Reporter;

public class StartPage extends Utility {

    private static final Logger log = LogManager.getLogger(StartPage.class.getName());

    public StartPage() {
        PageFactory.initElements(driver, this);
    }

    @CacheLookup
    @FindBy(xpath = "//button[normalize-space()='Accept additional cookies']")
    WebElement cookies;

    @CacheLookup
    @FindBy(xpath = "//a[normalize-space()='Start now']")
    WebElement startButton;

    public void clickStartNow() {
        clickOnElement(cookies);
        log.info("Clicking on 'Accept All' Cookies  " + cookies.toString());
        clickOnElement(startButton);
        log.info("Clicking on 'Start Now' button  " + startButton.toString());

    }


}