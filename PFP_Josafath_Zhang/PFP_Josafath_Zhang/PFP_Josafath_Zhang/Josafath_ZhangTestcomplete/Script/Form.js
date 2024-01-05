let find = require("utilsMethods");

function Form() {
  
  //Buscar e ingresar info en el campo de nombre
  find.fillDOMElements(KeywordTests.operations.Variables.data.Value("name"), "//*[@id='first-name']", "Input nombre");
  //Buscar e ingresar info en el campo de apellido
  find.fillDOMElements(KeywordTests.operations.Variables.data.Value("lastname"), "//*[@id='last-name']", "Input apellido");
  //Buscar e ingresar info en el campo de código postal
  find.fillDOMElements(KeywordTests.operations.Variables.data.Value("zip"), "//*[@id='postal-code']", "Input código postal");
  //Cliquear el botón de continuar
  find.clickDOMElements("//*[@id='continue']", "Botón de continuar");
  //Verificar el checkout overview
  find.checkIfExists("//*[@id='header_container']/div[2]/span", "check overview");
}