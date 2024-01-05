let find = require("utilsMethods");

function Back_Home() {
  
  //Cliquear el botón terminar
  find.clickDOMElements("//*[@id='finish']", "botón finish");
  // Verificación checkout complete
  find.checkIfExists(" //*[@id='checkout_complete_container']", "check complete");
  //Cliquear el botón Home
  find.clickDOMElements("//*[@id='back-to-products']", "Back to home");
  //Verificar que se llegó al home
  find.checkIfExists("//*[@id='header_container']/div[2]/span", "Página de home");
}