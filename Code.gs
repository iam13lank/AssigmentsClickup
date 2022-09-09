function onOpen() {
  SpreadsheetApp.getUi()
  // Create a menu called Ali with a button called run script
      .createMenu('Ali')
      .addItem('Run Script', 'alertWithMessage')
      .addToUi();
}

function alertWithMessage(message) { 
  // getUI and set it to the message
  message = SpreadsheetApp.getUi();

  //Alert to ask user for clicking button
 var result = message.alert('Click button yes or no',message.ButtonSet.YES_NO);

  // If result is yes return true, if no return false
  if (result == message.Button.YES) {
    message.alert('User selected YES')  
    return true;
  } 
  else if (result == message.Button.NO) {
    message.alert('User selected No') 
    return false;  
  }
}