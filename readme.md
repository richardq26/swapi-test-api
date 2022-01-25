# TEST SERVERLESS CON SWAPI
Api de pruebas usando la api de Star Wars
### Documentación de rutas:
[URL ENDPOITNS](https://documenter.getpostman.com/view/14224194/UVe9RV2f)
## Uso:
Para el uso de la api se requiere acceder a la URL en el punto "Documentación"                 

Todos los endpoints se encuentran desplegados en la url de Documentación y cada carpeta tiene breves descripciones e instrucciones de uso si se necesitara.      
    
Los endpoints no se encuentran con autorización o restricción de algún tipo.

### Modelos nuevos:
En la carpeta entities           
- Favorite: Permite agregar objetos de swapi a una tabla en base de datos como si fuera una colección de favoritos, usando solo el id.
- serieCharacter: Componente que no maneja swapi, en este test le permite crear personajes de serie y agregarlos a la base de datos del sistema.
### Comandos:   
npm run local => Iniciar serverless offline          
npm run test => Iniciar pruebas unitarias de servicios con jest   
npm run deploy => Desplegar en aws lambda        
npm run deployfn => Desplegar solo la función en aws lambda    

### Traducción de campos:
La traducción de keys de los objetos de swapi se realiza por medio de los helpers utilizando google cloud translate api

