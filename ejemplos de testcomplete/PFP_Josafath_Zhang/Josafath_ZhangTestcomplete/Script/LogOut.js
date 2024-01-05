let find = require("utilsMethods");

function logout() {
  
  //Cliquear el botón menú
  find.clickDOMElements("//*[@id='react-burger-menu-btn']", "Botón menú");
   //Verificar estar en menu
   find.checkIfExists("//*[@id='menu_button_container']/div/div[2]/div[1]", "Menú");
   //Cliquear botón de logout
   find.clickDOMElements("//*[@id='logout_sidebar_link']", "logout");
   //Verificar que efectivamente se realizó logout
   find.checkIfExists("//*[@id='root']/div/div[2]", "logout realizado");
}