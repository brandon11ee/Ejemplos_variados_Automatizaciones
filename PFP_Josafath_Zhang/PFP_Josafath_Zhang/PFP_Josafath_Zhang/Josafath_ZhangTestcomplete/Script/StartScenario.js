function Start()
{
  //VARIABLE DEL NOMBRE DEL ESCENARIO
  var Escenario = KeywordTests.operations.Variables.data.Value("ESCENARIO");
  
  aqTestCase.Begin(Escenario)
}