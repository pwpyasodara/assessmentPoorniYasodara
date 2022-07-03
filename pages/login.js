const { I } = inject();

module.exports = {

 // Setting login related locators
 loginButton: "//li[@class='top-nav__item']/div/button/div",
 fields: {
   email: "//input[@id='mail']",
   password: "//input[@id='password']"
 },
 submitButton: "//button[@type='submit']",

 // Login to the account
 async accountLogin(email, password){

   I.waitForVisible(this.loginButton)
   I.click(this.loginButton);
   I.fillField(this.fields.email, email);
   I.fillField(this.fields.password, password);
   I.click(this.submitButton);
 }
}
