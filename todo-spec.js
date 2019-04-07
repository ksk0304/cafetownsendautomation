describe('Test Suite Start', function() {
console.log("Test Suite Start");
beforeEach(function(done) {
  jasmine.clock().uninstall();
  
  setTimeout(function() {
    jasmine.clock().install();
    done();
}, 2000);
});

afterEach(function() {
  jasmine.clock().uninstall();
});

it('validate user label', function() {
		 browser.get('http://cafetownsend-angular-rails.herokuapp.com');

		 var lbl=element(by.css('form#login-form > fieldset > label:nth-child(3) > span'));
		 expect(lbl.getText()).toEqual('Username*');
				console.log("Test Case : validate user label");
			});
			
	
  it('Enter Login and click', function() {
   
    element(by.model('user.name')).sendKeys('Luke');
	element(by.model('user.password')).sendKeys('Skywalker');
	element(by.css('button[type="submit"]')).click();
    expect(element(by.id('greetings')).getText()).toEqual('Hello Luke');
	console.log("Test Case : Enter Login and click");
  
  });
  
  it('Create User', function() {
   element(by.id('bAdd')).click();
   expect(element(by.css('a.subButton.bCancel')).getText()).toEqual('Cancel');
   console.log("Test Case : Create User");
  });
  
  it('Enter User Details', function() {
   element(by.model('selectedEmployee.firstName')).sendKeys('ssss');
   element(by.model('selectedEmployee.lastName')).sendKeys('ssss');
   element(by.model('selectedEmployee.startDate')).sendKeys('2019-04-06');
   element(by.model('selectedEmployee.email')).sendKeys('ssss@sssss.com');
   element(by.css('button[type="submit"]:nth-child(2)')).click();
   console.log("Test Case : Enter User Details");
  });

 it('Update User Details', function() {
	 
//	element(by.id('employee-list')).click();
element.all(by.repeater('employee in employees')).get(0).click();
	element(by.id('bEdit')).click();
	element(by.model('selectedEmployee.firstName')).clear();
   element(by.model('selectedEmployee.lastName')).clear();
   element(by.model('selectedEmployee.startDate')).clear();
   element(by.model('selectedEmployee.email')).clear();
   element(by.model('selectedEmployee.firstName')).sendKeys('ssss');
   element(by.model('selectedEmployee.lastName')).sendKeys('ssss');
   element(by.model('selectedEmployee.startDate')).sendKeys('2019-04-06');
   element(by.model('selectedEmployee.email')).sendKeys('ssss@ssss.com');
   element(by.css('button[type="submit"]:nth-child(1)')).click();
   console.log("Test Case : Update User Details");
  });
  
  it('Delete User Details', function() {
	element.all(by.repeater('employee in employees')).get(0).click();
	element(by.id('bDelete')).click();
	var alertDialog = browser.switchTo().alert();
				alertDialog.accept();
   console.log("Test Case : Delete User Details");
  });
  
  it('Logout', function() {
element(by.css('div.header-container > p.main-button')).click();
   console.log("Test Case : Logout");
  });
});