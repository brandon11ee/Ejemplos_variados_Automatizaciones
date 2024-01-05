function Unit1()
{
  var page = Sys.Browser("chrome").Page("*")
  Sys.Browser().BrowserWindow(0).Maximize()
  
  var titulo = page.WaitElement("//div[@class='login_password']//h4");
  //Impresion para verificar que la variable en el Project, esta vacia
  Log.Message(Project.Variables.Titulo)
  
  //asignamos el texto del Xpath a la variable globlal
  Project.Variables.Titulo = titulo.innerText
  
  //Impresion para verficiar que el texto se guardo en la variable global
  Log.Message(Project.Variables.Titulo)
}