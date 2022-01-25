# TEST SERVERLESS CON SWAPI
Api de pruebas usando la api de Star Wars
### Documentación de rutas:
[URL ENDPOITNS](https://documenter.getpostman.com/view/14224194/UVe9RV2f)
## Uso:
Para el uso de la api se requiere acceder a la URL en el punto "Documentación"                 

Favoritos => Le permite agregar a una sola entidad sus elementos favoritos de la api de star wars, valores permitidos: vehiculo, nave, especie                  

Personajes de serie => Nuevo componente que swapi no maneja, permite crear personajes de serie en una base de datos para luego acceder a ellos           

Todos los endpoints se encuentran desplegados en la url de Documentación.      

### Comandos:   
npm run local => Iniciar serverless offline          
npm run test => Iniciar pruebas unitarias de servicios con jest   
npm run deploy => Desplegar en aws lambda        
npm run deployfn => Desplegar solo la función en aws lambda    

