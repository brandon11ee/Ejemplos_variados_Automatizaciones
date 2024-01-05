let find = require("utilsMethods");

function Login() {
  
  //Buscar el input de usuario
  xpath = "//input[@id='user-name']";
  find.fillDOMElements(KeywordTests.operations.Variables.data.Value("user"), "//input[@id='user-name']", "campo username");
  //Buscar el input de contraseña
  find.fillDOMElements(KeywordTests.operations.Variables.data.Value("password"), "//input[@id='password']", "campo contraseña");
  //Buscar el botón de iniciar sesión
  find.clickDOMElements("//input[@id='login-button']", "botón iniciar sesión");
  //Verificar que se pudo iniciar sesión
  find.checkIfExists("//span[normalize-space()='Products']", "iniciar sesión");
}