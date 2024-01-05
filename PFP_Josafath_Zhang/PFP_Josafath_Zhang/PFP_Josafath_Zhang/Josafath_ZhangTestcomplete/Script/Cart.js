let find = require("utilsMethods");

function Cart() {
  
  //Agregar artículo al carrito de la página
  find.clickDOMElements(KeywordTests.operations.Variables.data.Value("productoXpath"), "agregar artículo al carrito");
  //Hacer click en el ícono del carrito
  find.clickDOMElements("//a[@class='shopping_cart_link']", "Hacer click al ícono del carrito");
  //Verificar si se ingresó al carrito
  find.checkIfExists("//*[@id='shopping_cart_container']/a/span", "Verificación ingreso al carrito");
}