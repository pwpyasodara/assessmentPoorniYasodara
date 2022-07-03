const { I } = inject();

module.exports = {

   // Setting locators
  gotItButton: "//div[contains(text(), 'Got it')]",
  accounntNameLabel: "//div[@class='header_contentWrapper__UDLxS']/div/span",
  planSettingsButton: "//*[contains(text(),'Plan settings')]",
  planPauseButton: "//div[contains(text(), 'Pause')]",
  pauseProgramButton: "//div[contains(text(), 'Pause program')]",
  progressCircle: "//*[@class='header_statsWrapper__gU1+H']/div/div/div[@class='progress-circle__filler']/*[name() = 'svg']/*[2]",


  // My Plan Functions

  // Accept the Weekly Targets Pop Up
  weeklyTragetsPopUp(){
    I.click(this.gotItButton);
  },

//Pause the current plan
 async pauseThePlan(){
  const attributeValue = await I.grabAttributeFrom(this.progressCircle, 'stroke');
    if(attributeValue.includes('07580')){
      I.click(this.planSettingsButton);
      I.click(this.planPauseButton);
      I.click(this.pauseProgramButton);
      I.wait(5);
      I.see("Paused");
      console.log('Plan paused successfully.')
    }
    else{
      console.log('Plan is already paused.')
    }
 }
}
