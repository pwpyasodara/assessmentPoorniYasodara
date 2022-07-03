const { I } = inject();

module.exports = {

  // Setting locators
  buttonCookies: "//div[contains(text(),'Accept')]",

  // Accept cookies
  clickOnAccept(){
    I.click(this.buttonCookies);
  }
}
