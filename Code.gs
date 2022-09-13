function onOpen() {
  SpreadsheetApp.getUi()
  // Create a menu called Ali with a button called run script
      .createMenu('Ali')
      .addItem('Run Script','results')
      .addToUi();
}

function results(){
  // This function will act as a medium to send the alert
var result = alertWithMessage('Click button yes or no');
}

function alertWithMessage(message) { 
  // getUI and returns the message given
  ui = SpreadsheetApp.getUi();
var result = ui.alert(message,ui.ButtonSet.YES_NO);
  // If result is yes return true, if no return false
  if (result == ui.Button.YES) {
    ui.alert ('User selected YES')
    return true;
  } 
  else if (result == ui.Button.NO) {
     ui.alert ('User selected NO')
    return false;  
  }
}

