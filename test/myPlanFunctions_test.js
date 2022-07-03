Feature('myPlanFunctions');

Scenario('Verify that the user can pause the current ongoing plan.', async ({ I, login, acceptCookies, myPlan }) => {
    I.amOnPage('/');
    acceptCookies.clickOnAccept();
    login.accountLogin('qa-prod1@gymondo.de', 'purpleSquid22!');
    I.wait(5);
    myPlan.weeklyTragetsPopUp();
    I.wait(5);
    myPlan.pauseThePlan();

});
