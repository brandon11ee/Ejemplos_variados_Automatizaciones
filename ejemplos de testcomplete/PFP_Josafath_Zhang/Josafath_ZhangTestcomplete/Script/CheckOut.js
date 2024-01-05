let find = require("utilsMethods");

function CheckOut() {
  
  //Find the checkout Button
  find.clickDOMElements("//*[@id='checkout']", "Boton de checkout");
  //Validar que el ingreso al checkout
  find.checkIfExists("//*[@id='root']", "página de checkout");
}