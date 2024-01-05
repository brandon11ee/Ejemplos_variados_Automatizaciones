﻿var page = Sys.Browser("chrome").Page("*");

function fillDOMElements(csvValue, xpath, context) {

  count=0;
      
  do {
    
  var fillDOMElement = page.FindChildByXPath(xpath);
  count++;
    
  }while(fillDOMElement==null && count<5)
      
  //Verificar si existe el elemento
  if(fillDOMElement) {
    Log.Checkpoint("Exito con: " + context);
    fillDOMElement.SetText(csvValue);
  }else
    Log.Error("Error con: " + context);
}

function clickDOMElements(xpath, context) {

  count=0;
      
  do {
    
  var clickDOMElement = page.FindChildByXPath(xpath);
  count++;
    
  }while(clickDOMElement==null && count<5)
      
  //Verificar si existe el elemento
  if(clickDOMElement) {
    Log.Checkpoint("Exito con: " + context);
    clickDOMElement.Click();
  }else
    Log.Error("Error con: " + context);
}
    
function checkIfExists(element, context) {

  // Verificación por checkpoints de los elementos 
  var validationElement = page.WaitElement(element, 100);

  if(validationElement.Exists)
    Log.Checkpoint("Exito en: " + context);
  else
    Log.Error("Error en: " + + context); 
}

module.exports.fillDOMElements = fillDOMElements;
module.exports.clickDOMElements = clickDOMElements;
module.exports.checkIfExists = checkIfExists;