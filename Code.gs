function onOpen() {
  SpreadsheetApp.getUi()
  // Create a menu called Ali with a button called run script
      .createMenu('Ali')
      .addItem('Run Script', 'alertWithMessage')
      .addToUi();
}

function alertWithMessage(message) {
  // getUI
  var ui = SpreadsheetApp.getUi();

  //Alert to ask user for clicking button
 var result = ui.alert('Click button yes or no',ui.ButtonSet.YES_NO);

  // If result is yes return true, if no return false
  if (result == ui.Button.YES) {
    ui.alert('User selected YES')  
    return true;
  } 
  else if (result == ui.Button.NO) {
    ui.alert('User selected No') 
    return false;  
  }
}