# Get Schwifty

## Descripción del proyecto
Get Swifty promete ayudar a los nuevos fans de la Serie Rick and Morty a conocer mejor los personajes, sus dimensiones de origen y actuales, especies, tipos, estatus y género.
## Objetivo del proyecto
Crear un sitio web agradable, responsivo y fácil de entender enfocado a nuevos fans de la serie Rick y Morty que les gustaría saber más de sus personajes favoritos.

## Prototipo de baja fidelidad
El prototipo de baja fidelidad de escritorio y celular son muy parecidos, salvo el tamaño de los botones.

### Primer prototipo celular
![prototipo-celular](https://github.com/IselaReyesPerdomo94/MEX-Data-Lovers-008/blob/master/src/img/Pantalla%20mobile%201.2.png)
![prototipo-celular2](https://github.com/IselaReyesPerdomo94/MEX-Data-Lovers-008/blob/master/src/img/Pantalla%20mobile%201.3.png)

### Primer prototipo escritorio
![prototipo-escritorio](https://github.com/SolGee/MEX-Data-Lovers-008/blob/solanyi-branch/src/img/pantalla%201.png)
![prototipo-escritorio2](https://github.com/SolGee/MEX-Data-Lovers-008/blob/solanyi-branch/src/img/pantalla%203.png)

## Problemas encontrados

### Primer testeo

Pudimos notar gracias al feedback de nuestros usuarios que, en primer instancia, a algunos de ellos les gustaría encontrar un espacio donde pudieran escribir o leer a otros fans, es decir, la implementación de un foro, sin embargo optamos por no implementarlo en nuestro sitio web y redirigirlos a un foro externo de la WikiFANDOM. También nos comentaron que les gustaría poder agregar un filtrado extra a una categoría específica. Por ejemplo, si están en todos los personajes que son mujeres,
pudieran saber cual de ellas es un Alien. De acuerdo con este feedback decidimos implementar un tercer botón donde se elija una categoría en la que podrán aplicar un segundo filtro por especie.

Mencionaron que el botón de filtrar también debería de darte la opción de regresar a ver todos los personajes, desde cualquier momento, por lo que agregamos dicha opción.

También decidimos por la complejidad del trabajo no darle prioridad al buscador, por lo tanto lo eliminamos. Recibimos la sugerencia de implementar un scrollbar dentro de la caja de la data para así evitar una página inmensa y que la información se centrará en un espacio determinado, permitiéndole al usuario filtrar u ordenar desde cualquier  punto de la información.

Finalmente encontramos el problema que no teníamos un espacio donde colocar las estadísticas por lo que decidimos cambiar el carrusel dinámico de imagenes, por 
una imagen estática y agregar dos botones para avanzar y regresar para mostrar las estadísticas como datos curiosos.

Nuestra segunda propuesta es:

### Segundo prototipo celular
![segundo-prototipo-celular](https://github.com/IselaReyesPerdomo94/MEX-Data-Lovers-008/blob/master/src/img/Pantalla%20mobile%201.png)
![segundo-prototipo-celular2](https://github.com/IselaReyesPerdomo94/MEX-Data-Lovers-008/blob/master/src/img/Pantalla%20mobile%201%20%E2%80%93%201.png)

### Segundo prototipo de escritorio
![segundo-prototipo-escritorio](https://github.com/SolGee/MEX-Data-Lovers-008/blob/solanyi-branch/src/img/pantalla%201.2.png)
![segundo-prototipo-escritorio2](https://github.com/SolGee/MEX-Data-Lovers-008/blob/solanyi-branch/src/img/pantalla%203.3.png)


### Segundo testeo

En este segundo testeo nos dimos cuenta que los usuarios no sabían a que nos referiamos con el botón "Catálogo" así que optamos por cambiarle el nombre por "Personajes". 
Por otra parte, nos hicieron ver que el carrusel estaba muy estrecho haciendo dificil la legibilidad de los datos curiosos.

### Tercer testeo

En esta iteración nos enfocamos en la versión mobile, en la cual nos comentaron que los botones de filtrado y ordenado eran muy grandes y eso disminuia el tamaño de la pantalla para visualizar las tarjetas de los personajes, además que la barra de navegación era muy grande y causaba el mismo conflicto.

Una vez corregidos estos errores, decidimos tomar el tercer prototipo, como el prototipo final.

## Prototipo de alta fidelidad

### Celular
![prototipo-celular-alta-f](https://github.com/IselaReyesPerdomo94/MEX-Data-Lovers-008/blob/master/src/img/highmobile1.jpg)
![prototipo-celular-alta-f2](https://github.com/IselaReyesPerdomo94/MEX-Data-Lovers-008/blob/master/src/img/highmobile2.jpg)

### Escritorio
![prototipo-escritorio-alta-f](https://github.com/IselaReyesPerdomo94/MEX-Data-Lovers-008/blob/master/src/img/highfidelitydesktop1.jpg)
![prototipo-escritorio-alta-f2](https://github.com/IselaReyesPerdomo94/MEX-Data-Lovers-008/blob/master/src/img/highfidelitydesktop2.jpg)

## Historias de usuario

Primer acercamiento a Get Schwifty

1. El usuario recibe recomendaciones por parte de sus compañeros del trabajo sobre la serie.
2. El usuario busca en internet plataformas de stream o de contenido multimedia dónde pueda ver la serie.
3. Se percata que las primeras 2 temporadas de la serie estan en Netflix.
4. Después de ver y disfrutar las temporadas, el usuario se muestra confundido con algunos personajes o pasajes de la serie.
5. El usuario decide buscar información de los personajes en internet desde su celular.
6. El usuario se encuentra con Get Schwifty.

Foro 

1. El usuario entra a Get Schwifty.
2. El usuario observa que en la parte superior de la pantalla esta la opción de foro.
3. La historia termina cuando el usuario da click o toca el botón de foro.

Estadística

1. El usuario entra a Get Schwifty.
2. La primer sección con la que interactua es la de Sabías Que.
3. La sección ofrece curiosidades al usuario sobre la serie de Rick and Morty.
4. El usuario puede elegir por medio de botones ver las curiosidades de la serie. 
5. La historia termina cuando el usuario accede al catálogo o al foro.

Visualización de la data

1. El usuario hace click en el catálogo.
2. El usuario coloca su cursor sobre el personaje que le interesa.
3. El usuario nota que más información es mostrada.
2. La historia termina cuando el usuario decide filtrar u ordenar.

Filtrar data

1. El usuario selecciona entre las diferentes opciones de filtrado una de las categorías.
2. La página muestra los personajes que cumplan con dicha condición.
3. El usuario decide agregar un segundo filtro a los personajes mostrados, por la clasificación de especies.
4. La historia termina cuando el usuario obtiene los personajes deseados.

Ordenar data

1. El usuario selecciona entre las diferentes opciones de ordenado.
2. La página muestra los personajes que cumplan con dicha condición.

## Necesidades técnicas

Este proyecto se realizó con HTML, JavaScript y CSS.

### ¿Cómo ejecutar este proyecto?
Solo necesitas un navegador y dar click en el siguiente link: https://iselareyesperdomo94.github.io/MEX-Data-Lovers-008/src/

## ¿Cómo puedo descargar, instalar y ejecutar este proyecto?
Necesitas forkear este repositorio y clonarlo en tu computadora.
Tener un editor de texto.
Instalar Node.js y la librería de Mocha y demas dependecias con el comando npm install (esto asume que ya tienes instalado Node.js)
Para ejecutar los test, debes correr en tu terminal npm test y para evaluar el html ejecutas en la terminal npm pretest.
Fin de la conversación
Escribe un mensaje...

## Investigación

### Resultado de primer encuesta:
La encuesta realizada a 17 personas por medio de la red social Facebook arrojó los siguientes resultados:

13 de los encuestados afirmaron disfrutar de la serie Rick and Morty, los cuales se componen por 9 hombres y 4 mujeres. El 50% de hombres como de mujeres tienen entre 25 y 35 años de edad.

Finalmente el 58% de los encuestados respondieron que si buscan mayor información de la serie, en contra parte con el 42% que no lo hace, pero el 91% respondió que sí le gustaría que existiera una página web donde pudiera encontrar información de todos los personajes, especialmente de que multiverso vienen, su planeta de origen, su estatus de vida, y especie.

### Resultado de segunda encuesta:
En nuestra segunda iteración, logramos encuestar a 68 personas que solamente 4 de ellas no conocían la serie de Rick and Morty. Estos fueron los resultados:
![](https://github.com/IselaReyesPerdomo94/MEX-Data-Lovers-008/blob/master/src/img/serie.png)

El 48.5 % de los encuestados tienen entre 19 y 25 años, 44.1% de 26 a 35 años. En contraste con la encuesta anterior, el 54.4 % son mujeres mientras que el 45.6% son hombres. Mostrando una participación casi equitativa.
![](https://github.com/IselaReyesPerdomo94/MEX-Data-Lovers-008/blob/master/src/img/genero.png)

De las personas que si conocen la serie, el 76.6% les gusta mucho y 20.3% le gusta un poco.
![](https://github.com/IselaReyesPerdomo94/MEX-Data-Lovers-008/blob/master/src/img/like.png)

Notamos que el 53.2% de los encuestados no suelen buscar mayor información de la serie, solo la consumen. Sin embargo el 46.8% que si busca información suele hacerlo en: 
![](https://github.com/IselaReyesPerdomo94/MEX-Data-Lovers-008/blob/master/src/img/infosite.png)

¿Qué suelen investigar? La mayoría coincidió en informarse sobre los personajes (33.9%), y  multiversos (27.4%),  siendo estos, los más populares. Nuevamente alrededor del 40% no suele buscar mayor información.
![](https://github.com/IselaReyesPerdomo94/MEX-Data-Lovers-008/blob/master/src/img/infosearch.png)

Específicamente sobre personajes, para los encuestados es más relevante conocer el multiverso de origen(32.3%), el nombre (29%), imágenes del personaje (19.4%) en qué episodio aparece por primera vez (15%). y el 8% se interesa por la personalidad y  motivaciones del personaje.
![](https://github.com/IselaReyesPerdomo94/MEX-Data-Lovers-008/blob/master/src/img/infocharacters.png)

Y esta data les gustaría encontrarlas en plataformas como páginas web (37.1%),  aplicaciones móviles (32.3%),  en foros (8.1%) y el resto se divide entre Youtube,  o simplemente notificaciones respecto a nuevos capítulos. Nuevamente obtuvimos un alto porcentaje de personas que no le interesaría buscar mayor información (32.3%).
![](https://github.com/IselaReyesPerdomo94/MEX-Data-Lovers-008/blob/master/src/img/infositeextra.png)

Finalmente en una pregunta abierta donde les pedimos que nos explicaran porque les gusta tanto Rick and Morty, surgieron comentarios donde destacaba el humor que manejaba, su sátira, su ironía, las referencias científicas, filosóficas o de otros programas, así como el comportamiento de sus personajes. 

### Benchmarking competitivo y funcional
[Roberto Espinosa (2017)]([https://robertoespinosa.es/2017/05/13/benchmarking-que-es-tipos-ejemplos/](https://robertoespinosa.es/2017/05/13/benchmarking-que-es-tipos-ejemplos/)) define el benchmarking competitivo como la medición, comparación e investigación de todos aquellos principales competidores que ofrecen un servicio o producto parecido al nuestro, para así detectar mejoras que hagan destacar a nuestra empresa entre la competencia.

En este caso, los principales competidores que ofrecen información detallada de los personajes de Rick and Morty serían:

#### Wikifandom de Rick and Morty

Es una página web alimentada principalmente por contribuciones de fans de la serie. En ella podemos encontrar descripciones de los personajes, desde sus primeras apariciones, a que multiverso pertenecen, su status de vida, su origen, su género y una imagen del personaje. También existe la categoría de planetas, ubicaciones y objetos que forman parte de la trama, descripción de cada capítulo que existe, otros medios por los cuales puedes disfrutar de la serie por ejemplo: cómics, mercancías, juegos en línea y música.

A su vez, Wikifandom crea una comunidad de fans donde comparten sus teorías y hipótesis entre ellos y discuten ya sea a través de post en blogs o por medio de discord, es decir un chat en vivo.

#### Foros de reddit/4chan

Este portal esta enfocado para “verdaderos fans” de la serie animada. Desde el anuncio de una cuarta temporada (que se estrenará a finales de este año) foros como 4chan han mostrado alta actividad por parte del fandom quienes ya empiezan a teorizar sobre el tema; incluso en varios foros relacionados con el tema, muestran análisis más profundos respecto al mismo fandom donde explican el por qué es tan exitosa esta programa de televisión entre los millenials.

Por otra parte, los usuarios de estos foros reflejan un gran interés por investigar más sobre el tema ya que de esta manera se pueden generar teorías con mayor lógica, las cuales no podrían ser posibles si no existiera una fuente de información encargada de recolectar y filtrar todo el data relacionado a Rick y Morty.

En conclusión sus principales fortalezas es que son hechos con el cariño y contribución de los fans que dedicaron y dedican su tiempo en crear una data sobre la serie que finalmente es creada y consumida por los mismos fans.

También se debe destacar que los mismos fans pueden ser o no incluyentes con personas que “gustan de la serie” pero no la “amen” por lo que esto puede generar espacios hostiles para diferentes públicos.

De acuerdo a lo investigado, podríamos implementar la integración de blogs que sean creados por la comunidad, y un chat de 24 horas donde los usuarios buscar mayor información o resolver dudas de la página.

## Proto-Persona
Revisando el flujo de data en el muro de Facebook del grupo Rick and Morty fans Club notamos que de 50 publicaciones en el muro 11 son de mujeres mientras que 39 son de hombres. El contenido que se publica es 80 % memes, 15% de mercancía y 5% de teorías respecto a la serie y sus personajes, que creemos se debe a que no ha habido nuevo contenido en emisión que de pie a crear nuevas hipótesis de la serie.

Cabe destacar que a pesar de que el público masculino es mayor en redes sociales, las mujeres tienden a ser más participativas en publicaciones que no estén relacionadas con memes únicamente. 

También notamos que de acuerdo a publicaciones o reseñas en medios como [“La izquierda diario”](https://www.laizquierdadiario.mx/Rick-and-Morty-una-caricatura-mas-seria-de-lo-que-parece) en el 2017 .

La serie va dirigida para jóvenes adultos o millenials llegando a los 30 años, los cuales se pueden identificar con el humor negro y sarcástico, la sátira y la filosofía nihilista y existencialista que caracteriza a la serie.

“Su principal auditorio son jóvenes, pero también adultos. Una caricatura de humor negro, insensatez, locura y aparente sin sentido.”

Podemos concluir que nuestro Proto persona es un joven adulto entre 20 y 30 años que trabaja o estudia dándole la oportunidad de invertir su tiempo libre en redes sociales las cuales usa como medio de entretenimiento; Disfruta consumir temáticas de ciencia ficción, el humor negro y ácido profundizando en tópicos de la vida cotidiana (más allá de las bromas absurdas), suele visualizar los problemas con un lente nihilista, es decir, si nada ni nadie tiene sentido de existir, pues haz lo que te plazca.

## Definición de User Persona

De acuerdo con las encuestas realizada nuestro usuario se podría definir como un hombre  o mujer joven adult@ entre 25 y 35 años, que generalmente investiga muy poco sobre la serie Rick and Morty en sus ratos libres, sin embargo, a pesar del poco interés directo que muestran ante la iniciativa de indagar en el tema, la mayoría coincidió en que ante la posibilidad de poder visitar un sitio web que brinde información de los personajes o de la serie misma, estarían interesados.

Como dato extra, podemos intuir que los usuarios con interés en la serie son personas que invierten mucho tiempo en redes sociales, especialmente en Facebook ya que por este medio fue donde se compartió el link de la encuesta.

En conclusión, nuestro usuario promedio es un hombre mayor de edad (menor de 40 años) cuyo tiempo libre lo invierte en redes sociales con fines de ocio

![](https://github.com/IselaReyesPerdomo94/MEX-Data-Lovers-008/blob/master/src/img/userPersona.png)


Al notar lo que ofrece Get Schwifty a los nuevos fans de Rick and Morty y su fácil manejo de la información, la página es compartida con otros nuevos fanaticos de la serie.

https://docs.google.com/presentation/d/1qSMHFdE7t2MhCOdNfeuWdWPTjp9vZKFuSyDcyF_6uyc/edit?usp=sharing
