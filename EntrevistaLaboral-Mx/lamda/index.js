/**
 Copyright 2014-2015 Amazon.com, Inc. or its affiliates. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the"License"). You may not use this file except in compliance with the License. A copy of the License is located at

 http://aws.amazon.com/apache2.0/

 or in the"license" file accompanying this file. This file is distributed on an"AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
 */

'use strict';

// All available questions
var questions = [
    { value : "¿Tienes alguna pregunta para mi?", tags : ["comportamiento"] },
    { value : "Cual fue el ultimo proyecto que lidereaste, y cual fue el resultado?", tags : ["comportamiento"] },
    { value : "Dame un ejemplo de una vez que sentiste que cumpliste tu deber más allá del trabajo.", tags : ["comportamiento"] },
    { value : "¿Puedes describir un momento en que tu trabajo fue criticada?", tags : ["comportamiento"] },
    { value : "¿Alguna vez has estado en un equipo donde alguien no estaba haciendo su propio peso? ¿Cómo lo manejaste?", tags : ["comportamiento", "personal"] },
    { value : "Cuéntame sobre un momento en el que tenías que darle a alguien un comentario difícil. ¿Cómo lo manejaste?", tags : ["comportamiento", "personal"] },
    { value : "¿Cuál es tu mayor falla y qué aprendiste de ella?", tags : ["comportamiento", "personal"] },
    { value : "¿Cómo te las arreglas para trabajar con personas que te molestan?", tags : ["comportamiento", "personal"] },
    { value : "Si yo fuera tu supervisor y te pidiera que hicieras algo con lo que no estás de acuerdo, ¿qué harías?", tags : ["comportamiento"] },
    { value : "¿Cuál fue el período más difícil en tu vida y cómo lo manejaste?", tags : ["comportamiento", "personal"] },
    { value : "Dame un ejemplo de una vez que hiciste algo mal. ¿Cómo lo manejaste?", tags : ["comportamiento"] },
    { value : "Cuéntame acerca de una época en la que tenías que lidiar con el conflicto en el trabajo.", tags : ["comportamiento"] },
    { value : "Si estuvieras en un almuerzo de negocios y pediste un bistec raro, y te lo trajeron bien hecho, ¿qué harías?", tags : ["comportamiento", "personal"] },
    { value : "Si descubrió que su empresa estaba haciendo algo contra la ley, como un fraude, ¿qué haría?", tags : ["comportamiento", "personal"] },
    { value : "¿Qué tarea fue demasiado difícil para usted y cómo resolvió el problema?", tags : ["comportamiento"] },
    { value : "¿Cuál es la decisión más difícil que ha tomado en los últimos dos años y cómo llegó a esa decisión?", tags : ["comportamiento"] },
    { value : "Describa cómo manejaría una situación si tuviera que terminar varias tareas al final del día, y no había forma de que pudisible terminarlas.", tags : ["comportamiento"] },
    { value : "¿Puedes describir un entorno o escenario en el que no prosperarías instantáneamente?", tags : ["comportamiento"] },
    { value : "¿Qué estás buscando en términos de desarrollo profesional?", tags : ["carrera"] },
    { value : "¿Cómo quieres mejorar en el próximo año?", tags : ["carrera", "personal"] },
    { value : "¿Cómo quieres mejorar? ¿Qué tipo de metas tendrías en mente si consiguiera este trabajo usted mismo el próximo año?", tags : ["carrera", "personal"] },
    { value : "Si tuviera que pedirle a su último supervisor que le proporcionara capacitación o exposición adicional, ¿qué le sugeriría?", tags : ["carrera"] },
    { value : "¿Cuáles son tus metas profesionales?", tags : ["carrera"] },
    { value : "¿Dónde te gustaría estar en tu carrera dentro de cinco años?", tags : ["carrera", "personal"] },
    { value : "¿Cuál es tu compañía ideal?", tags : ["personal", "carrera"] },
    { value : "¿Qué te atrajo de esta compañía?", tags : ["carrera", "personal"] },
    { value : "Porque deberíamos contratarte?", tags : ["carrera personal"] },
    { value : "¿Qué es lo que menos te gustó de tu último trabajo?", tags : ["carrera", "personal"] },
    { value : "¿Cuándo estuvo más satisfecho en su trabajo?", tags : ["carrera", "personal"] },
    { value : "¿Qué puede hacer por nosotros que otros candidatos no pueden?", tags : ["personal"] },
    { value : "¿Cuáles fueron las responsabilidades de su último puesto?", tags : ["carrera", "comportamiento"] },
    { value : "¿Por qué estás dejando tu trabajo actual?", tags : ["carrera", "personal"] },
    { value : "¿Qué sabes de esta empresa?", tags : ["carrera"] },
    { value : "¿Qué sabes de esta industria?", tags : ["carrera"] },
    { value : "¿Estarias dispuesto a una reubicación?", tags : ["carrera", "personal"] },
    { value : "¿Cómo harías para establecer tu credibilidad rápidamente con el equipo?", tags : ["general"] },
    { value : "¿Cuánto tiempo le tomará hacer una contribución significativa?", tags : ["general"] },
    { value : "¿Qué te ves haciendo dentro de los primeros 30 días de este trabajo?", tags : ["carrera", "personal"] },
    { value : "Si se selecciona para este puesto, ¿puede describir su estrategia durante los primeros 90 días?", tags : ["carrera", "personal"] },
    { value : "¿Quién fue tu cliente más difícil?", tags : ["comportamiento", "amazon"] },
    { value : "¿Cómo presentarías a AWS en un discurso de ascensor?", tags : ["tecnico", "comportamiento", "amazon"] },
    { value : "¿Cuál es el peor error que has cometido?", tags : ["personal", "amazon"] },
    { value : "Si su gerente directo le estuviera dando instrucciones para hacer algo con lo que no estaba de acuerdo, ¿cómo lo manejaría?", tags : ["personal", "carrera", "amazon"] },
    { value : "¿Conoces a nuestro CEO? ¿Cómo pronuncias su nombre?", tags : ["general", "amazon"] },
    { value : "¿Estás dispuesto a trabajar de pie durante diez horas, cuatro días a la semana?", tags : ["personal", "amazon"] },
    { value : "What is your work style?", tags : ["personal"] },
    { value : "Describe lo que el recurso humano significa para ti.", tags : ["general", "comportamiento", "amazon"] },
    { value : "Cuéntame sobre ti.", tags : ["general", "personal", "amazon", "microsoft", "intel", "bosch"] },
    { value : "¿Cuáles son sus puntos fuertes?", tags : ["general", "personal", "amazon", "microsoft", "google", "intel", "bosch"] },
    { value : "¿Cuáles son tus debilidades?", tags : ["general", "personal", "amazon", "microsoft", "google", "intel", "bosch"] },
    { value : "¿Porqué quieres este trabajo?", tags : ["general", "personal", "amazon", "microsoft", "google", "intel", "bosch"] },
    { value : "¿Cómo describirías tu estilo de trabajo?", tags : ["personal", "comportamiento"] },
    { value : "¿Cuál sería tu entorno de trabajo ideal?", tags : ["personal", "comportamiento"] },
    { value : "¿Qué buscas en términos de cultura?", tags : ["personal", "carrera"] },
    { value : "Dé ejemplos de ideas que haya tenido o implementado.", tags : ["personal", "tecnico", "carrera"] },
    { value : "¿Qué técnicas y herramientas usas para mantenerte organizado?", tags : ["personal", "comportamiento"] },
    { value : "¿Te consideras una persona importante o una persona enfocada a los detalles?", tags : ["personal"] },
    { value : "Cuéntame sobre tu logro más orgulloso.", tags : ["personal", "carrera"] },
    { value : "¿Quién fue tu gerente favorito y por qué?", tags : ["personal", "carrera"] },
    { value : "¿Qué piensas de tu jefe anterior?", tags : ["personal", "carrera"] },
    { value : "¿Hubo una persona en tu carrera que realmente hizo la diferencia?", tags : ["personal", "carrera"] },
    { value : "¿Con qué tipo de personalidad trabajas mejor y por qué?", tags : ["personal", "comportamiento"] },
    { value : "¿de que estas mas orgulloso?", tags : ["personal", "comportamiento"] },
    { value : "¿Qué te gusta hacer?", tags : ["personal", "comportamiento"] },
    { value : "¿Cuáles son tus sueños de toda la vida?", tags : ["personal", "carrera", "comportamiento"] },
    { value : "¿En qué te quieres convertir?", tags : ["personal", "carrera"] },
    { value : "¿Cuál es tu declaración de misión personal?", tags : ["personal", "carrera"] },
    { value : "¿Cuáles son las tres cosas positivas que tu último jefe diría sobre ti?", tags : ["personal", "carrera"] },
    { value : "¿Qué cosa negativa diría tu último jefe sobre ti?", tags : ["personal", "carrera"] },
    { value : "¿Dime rasgos que usarían tus amigos para describirte?", tags : ["personal", "carrera"] },
    { value : "¿Cuáles son los tres rasgos positivos de carácter que no tienes?", tags : ["personal"] },
    { value : "Si estuvieras entrevistando a alguien para este puesto, ¿qué rasgos buscarías?", tags : ["personal", "carrera"] },
    { value : "Enumera cinco palabras que describen tu personaje.", tags : ["personal"] },
    { value : "¿Quién te ha impactado más en tu carrera y cómo?", tags : ["personal", "carrera"] },
    { value : "¿Cual es tu mas grande miedo?", tags : ["personal"] },
    { value : "¿Cuál es tu mayor arrepentimiento y por qué?", tags : ["personal"] },
    { value : "¿Qué es lo más importante que aprendió en la escuela?", tags : ["personal", "carrera"] },
    { value : "¿Por que escogiste esta carrera?", tags : ["personal", "carrera"] },
    { value : "¿Qué extrañarás de tu trabajo actual?", tags : ["personal", "carrera"] },
    { value : "¿Cuáles son las cualidades de un buen líder?", tags : ["personal"] },
    { value : "¿Cuál es tu mayor logro fuera del trabajo?", tags : ["personal"] },
    { value : "¿Cuáles son las cualidades de un mal líder?", tags : ["personal"] },
    { value : "¿Crees que un líder debe ser temido o querido?", tags : ["personal"] },
    { value : "¿Cómo te sientes al aceptar un no por respuesta?", tags : ["personal"] },
    { value : "¿Cómo te sentirías trabajando para alguien que sabe menos que tú?", tags : ["personal"] },
    { value : "¿Cómo crees que califico como entrevistador?", tags : ["personal"] },
    { value : "Cuéntame una cosa sobre ti que no querrías que yo supiera.", tags : ["personal"] },
    { value : "Dime la diferencia entre bueno y excepcional.", tags : ["personal"] },
    { value : "Si pudieras estar en cualquier parte del mundo en este momento, ¿dónde estarías?", tags : ["personal"] },
    { value : "¿Cuál es el último libro que leíste?", tags : ["personal"] },
    { value : "¿A qué revistas te suscribes?", tags : ["personal"] },
    { value : "¿Cuál es la mejor película que has visto en el último año?", tags : ["personal"] },
    { value : "Que harias si ganaras la loteria?", tags : ["personal"] },
    { value : "¿Quiénes son tus héroes?", tags : ["personal", "carrera"] },
    { value : "¿Que te gusta hacer para divertirte?", tags : ["personal"] },
    { value : "¿Qué haces en tu tiempo libre?", tags : ["personal"] },
    { value : "¿Cuál es tu recuerdo favorito de la infancia?", tags : ["personal"] },
    { value : "¿Qué salario estás buscando?", tags : ["salario"] },
    { value : "¿Cuál es tu historial en terminos de salarial?", tags : ["salario"] },
    { value : "Si le diera este salario que solicitó, pero le permití escribir la descripción de su trabajo para el próximo año, ¿qué le diría?", tags : ["salario"] },
    { value : "¿Qué rango de salario necesitarías para tomar este trabajo?", tags : ["salario"] },
    { value : "¿Considerarías tomar menos dinero del que ganaste en tu último trabajo?", tags : ["salario"] },
    { value : "¿Cuál es el ángulo entre la manecilla de la hora y la aguja de los minutos en un reloj analógico?", tags : ["tecnico", "amazon", "google", "microsoft", "intel", "bosch"] },
    { value : "¿Cómo se puede detectar si una palabra es o no un palíndromo?", tags : ["tecnico", "amazon", "google", "microsoft", "intel", "bosch"] },
    { value : "Aquí hay una cadena con números del 1-250, en orden aleatorio, pero le falta un número. ¿Cómo va a encontrar el número que falta?", tags : ["tecnico", "amazon", "google", "microsoft", "intel", "bosch"] },
    { value : "¿Cuál es tu lenguaje de programación favorito? porque?", tags : ["tecnico", "amazon", "google", "microsoft", "intel", "bosch"] },
    { value : "¿Cómo implementarías un ordenamiento de burbuja?", tags : ["tecnico", "amazon", "google", "microsoft", "intel", "bosch"] },
    { value : "¿Cómo implementarías un ordenamiento de tipo selección?", tags : ["tecnico", "amazon", "google", "microsoft", "intel", "bosch"] },
    { value : "¿Cómo implementarías un ordenamiento por inserción?", tags : ["tecnico", "amazon", "google", "microsoft", "intel", "bosch"] },
    { value : "¿Cómo implementarías un merg sort?", tags : ["tecnico", "amazon", "google", "microsoft", "intel", "bosch"] },
    { value : "Cómo impolementarías un quick sort", tags : ["tecnico", "amazon", "google", "microsoft", "intel", "bosch"] },
    { value : "Tiene dos números muy grandes que no se pueden almacenar en ningún tipo de datos disponibles. ¿Cómo los multiplicarías?", tags : ["tecnico", "amazon", "google", "microsoft", "intel", "bosch"] },
    { value : "¿Cómo implementarás un diccionario?", tags : ["tecnico", "amazon", "google", "microsoft", "intel", "bosch"] },
    { value : "Dada una matriz que está clasificada en espiral. Elimine un elemento e inserte otro elemento, manteniendo el orden ordenado.", tags : ["tecnico", "amazon", "google", "microsoft", "intel", "bosch"] },
    { value : "¿Cómo encontrarías si hay un ciclo en un gráfico dirigido?", tags : ["tecnico", "amazon", "google", "microsoft", "intel", "bosch"] },
    { value : "¿Cómo implementaría un método que convierta un árbol de búsqueda binario en una lista ordenada doblemente enlazada, sin crear nuevos nodos?", tags : ["tecnico", "amazon", "google", "microsoft", "intel", "bosch"] },
    { value : "¿Puede decirme acerca de un proyecto o proceso reciente que te hizo mejor, más rápido, más inteligente o más eficiente?", tags : ["tecnico"] },
    { value : "Usted acaba de ser asignado a un proyecto que involucra una nueva tecnología. ¿Cómo comenzarías?", tags : ["tecnico"] },
    { value : "¿Qué blogs, podcasts, tweets o sitios web relacionados con la tecnología sigues? ¿Compartes alguna información, tú mismo, en línea?", tags : ["tecnico"] },
    { value : "¿Cómo mantienes actualizadas tus habilidades tecnológicas?", tags : ["tecnico", "personal"] },
    { value : "¿Qué rasgos de carácter usarían tus colegas para describirte?", tags : ["comportamiento"] },
    { value : "¿Puede decirme acerca de un momento en que las cosas no salieron como quería en el trabajo, como un proyecto que falló o que se pasó por alto para un ascenso?", tags : ["tecnico", "carrera"] },
    { value : "¿Cuáles son sus productos de tecnología favoritos y menos favoritos, y por qué?", tags : ["tecnico", "personal"] },
    { value : "Describa algún código incorrecto que haya leído o heredado últimamente.", tags : ["tecnico"] },
    { value : "¿Qué haces cuando te quedas atascado con un problema que no puedes resolver?", tags : ["tecnico"] },
    { value : "Cuando la construcción se rompe, ¿cómo ayudas a solucionarlo?", tags : ["tecnico"] },
    { value : "¿Cuáles son algunas prácticas que utiliza para ayudar a evitar que un desarrollador en el equipo rompa la compilación?", tags : ["tecnico"] },
    { value : "¿Responde preguntas en Stack Overflow?", tags : ["tecnico"] },
    { value : "¿Estás usando código de GitHub o contribuyendo código a un programa de código abierto?", tags : ["tecnico"] },
    { value : "¿Te gusta trabajar solo o como parte de un equipo?", tags : ["personal", "comportamiento"] },
    { value : "¿Cuál es la mejor parte de tu trabajo actual?", tags : ["personal", "carrera"] },
    { value : "En particular, ¿en qué estás más interesado en trabajar?", tags : ["personal", "carrera"] },
    { value : "¿Tienes ejemplos de tu trabajo?", tags : ["personal", "tecnico", "carrera"] },
    { value : "Explicar el concepto de polimorfismo en la programación orientada a objetos", tags : ["tecnico","google","amazon","bosch","microsoft"] },
    { value : "¿Cuáles son 3 cosas que quieres que recuerde de ti?", tags : ["tecnico","google","amazon","bosch","microsoft"] },
    { value : "Comparta un momento en que le dieron un problema que no pudo resolver.", tags : ["tecnico","google","amazon","bosch","microsoft"]},
    { value : "Dime cómo implementar la secuencia de Fibonacci", tags : ["tecnico","google","amazon","bosch","microsoft"] },
    { value : "¿Cómo se implementa una búsqueda binaria?", tags : ["tecnico","google","amazon","bosch","microsoft"] },
    { value : "¿Cómo se puede encontrar la profundidad mínima de un árbol binario?", tags : ["tecnico","google","amazon","bosch","microsoft"] },
    { value : "¿Cómo se puede comprobar si un árbol binario es o no un árbol binario completo?", tags : ["tecnico","google","amazon","bosch","microsoft"] },
    { value : "¿Cómo se comprueba si un árbol binario es un árbol secundario de otro árbol binario?", tags : ["tecnico","google","amazon","bosch","microsoft"]},
    { value : "¿Cómo compararía dos cadenas representadas como listas enlazadas?", tags : ["tecnico","google","amazon","bosch","microsoft"] },
    { value : "¿Cómo detectaría y eliminaría los bucles en una lista vinculada?", tags : ["tecnico","google","amazon","bosch","microsoft"]},
    { value : "¿Cómo invertirías todos los elementos en una lista vinculada?", tags : ["tecnico","google","amazon","bosch","microsoft"] },
    { value : "¿Cómo encuentras si un número es un cuadrado perfecto?", tags : ["tecnico","google","amazon","bosch","microsoft"] },
    { value : "¿Cuál es el patrón de diseño singleton?", tags : ["tecnico","google","amazon","bosch","microsoft"] },
    { value : "¿Cuál es el patrón de diseño de fábrica?", tags : ["tecnico","google","amazon","bosch","microsoft"] },
    { value : "¿Cómo encontrarías el máximo divisor común de un número usando la recursión?", tags : ["tecnico","google","amazon","bosch","microsoft"] },
    { value : "¿Cómo encontrarías el factorial de un número usando la recursión?", tags : ["tecnico","google","amazon","bosch","microsoft"] }
 ];

// All available tips
var tips = [
    { value : "Llevar a cabo investigaciones sobre el empleador, el director de recursos humanos y la oportunidad laboral. Debe comprender al empleador, los requisitos del trabajo y los antecedentes de la persona que lo entrevista. Cuantas más investigaciones realice, más comprenderá el empleador y mejor podrá responder las preguntas de la entrevista.", tags : [] },
    { value : "Revise las preguntas comunes de la entrevista y prepare las respuestas. Su objetivo es componer respuestas detalladas pero concisas, centrándose en ejemplos específicos y logros.", tags : [] },
    { value : "Vestirse para el éxito. Planee un vestuario que se adapte a la organización y su cultura, esforzándose por la apariencia más profesional que puede lograr.", tags : [] },
    { value : "Llegue a tiempo para la entrevista. Esfuércese por llegar unos 15 minutos antes de su entrevista programada para completar la documentación adicional y permítase un tiempo para establecerse.", tags : [] },
    { value : "Haz buenas primeras impresiones. Sea amable y ofrezca saludos cordiales a todos los que conozca, desde el encargado del estacionamiento hasta la recepcionista y el gerente de recursos humanos.", tags : [] },
    { value : "Recuerde el lenguaje corporal. Las formas efectivas de lenguaje corporal son: sonreír, contacto visual, postura sólida, escuchar activamente y asentir mientras escuchas.", tags : [] },
    { value : "Haga preguntas perspicaces. El buscador de trabajo inteligente prepara preguntas para formularlas días antes de la entrevista, agregando cualquier consulta adicional que pueda surgir de la entrevista.", tags : [] },
    { value : "Vendete a ti mismo. Usted es el vendedor, y el producto que está vendiendo al empleador es su capacidad para satisfacer las necesidades de la organización, resolver sus problemas e impulsar su éxito.", tags : [] },
    { value : "Da las gracias a los entrevistadores. Comience el proceso mientras está en la entrevista, agradeciendo a cada persona que lo entrevistó. Luego, escriba mensajes de agradecimiento poco después de la entrevista.", tags : [] },
    { value : "No hables demasiado. Decir al entrevistador más de lo que necesita saber podría ser un error fatal. Prepárese para la entrevista leyendo el anuncio de trabajo, relacionando sus habilidades con los requisitos del puesto y relacionando solo esa información.", tags : [] },
    { value : "No seas muy familiar. La entrevista es una reunión profesional para hablar de negocios, no sobre cómo hacer un nuevo amigo. Su nivel de familiaridad debe imitar la conducta del entrevistador.", tags : [] },
    { value : "Use lenguaje apropiado. Debe usar lenguaje profesional durante la entrevista. Tenga en cuenta las palabras impropias o las referencias a la edad, la raza, la religión, la política o la orientación sexual.", tags : [] },
    { value : "No actúes desesperado. Refleje buena actitud durante la entrevista: fresco, tranquilo y seguro. Sabes que puedes hacer el trabajo; asegúrese de que el entrevistador crea que usted también puede hacerlo.", tags : [] },
    { value : "No seas arrogante. Hay un buen equilibrio entre confianza, profesionalismo y modestia.", tags : [] },
    { value : "Limpia tus redes sociales. El 98% de los empleadores buscan en sus redes sociales cualquier señal de alarma. Elimine todas las fotos o publicaciones objetables para tener una mejor primera impresión.", tags : [] },
    { value : "Establezca el horario para el martes a las 10:30 a.m. Según Glassdoor, el mejor momento para entrevistar es a las 10:30 a.m. del martes.", tags : [] },
    { value : "Elabora tu 'declaración de historia'. Escriba una historia breve y personal de su vida y cómo se relaciona con su futura carrera.", tags : [] },
    { value : "Use una declaración de moda sutil. Use algo que represente su cultura o antecedentes. Siempre y cuando sea sutil y de buen gusto, su declaración de moda puede construir una buena relación a través de conversaciones divertidas.", tags : [] },
    { value : "Prepárese para el '¿Cuál es su debilidad?' pregunta. Use esto como una oportunidad para mostrar cómo está superando sus debilidades.", tags : [] },
    { value : "Lluvia de ideas para 3 anécdotas de P. A. R. Problema. ¿Cuál fue la situación? Acción. ¿Qué hiciste para resolverlo? Resultado. ¿Qué cambió después?", tags : [] },
    { value : "Piensa en voz alta. Al responder preguntas difíciles. Piense en voz alta y recorra al entrevistador a través de su proceso de pensamiento.", tags : [] },
    { value : "Haz buenas preguntas, Haga preguntas que no solo proporcionen las respuestas que le interesan, sino que también comparta algo nuevo sobre usted.", tags : [] },
    { value : "Haz esta pregunta '¿He dicho algo en esta entrevista o te he dado alguna otra razón para dudar de que soy apto para este papel?'", tags : [] },
    { value : "Envíe un correo electrónico con una nota de agradecimiento personalizada. Agradezca a su entrevistador dentro de las 24 horas de haber terminado. No solo muestra tu gratitud, sino que también combate el sesgo de recencia si te entrevistan temprano.", tags : [] }
 ];

//List of all available question types
var questionTypes = [
 "general",
 "tecnico",
 "salario",
 "comportamiento",
 "carrera",
 "personal"
];

//List of all available companies
var companies = [
 "Amazon",
 "Google",
 "Microsoft",
 "Bosch",
 "Intel"
];

// Route the incoming request based on type (LaunchRequest, IntentRequest,
// etc.) The JSON body of the request is provided in the event parameter.
exports.handler = function (event, context) {
    try {
        console.log("event.session.application.applicationId=" + event.session.application.applicationId);

      /**
       * Uncomment this if statement and populate with your skill's application ID to
       * prevent someone else from configuring a skill that sends requests to this function.
       */

        if (event.session.application.applicationId !== AMZN_APP_ID) {
            context.fail("Invalid Application ID");
        }

        if (event.session.new) {
            onSessionStarted({requestId: event.request.requestId}, event.session);
        }

        if (event.request.type ==="LaunchRequest") {
            onLaunch(event.request,
                event.session,
                function callback(sessionAttributes, speechletResponse) {
                    context.succeed(buildResponse(sessionAttributes, speechletResponse));
                });
        } else if (event.request.type ==="IntentRequest") {
            onIntent(event.request,
                event.session,
                function callback(sessionAttributes, speechletResponse) {
                    context.succeed(buildResponse(sessionAttributes, speechletResponse));
                });
        } else if (event.request.type ==="SessionEndedRequest") {
            onSessionEnded(event.request, event.session);
            context.succeed();
        }
    } catch (e) {
        context.fail("Exception:" + e);
    }
};

/**
 * Called when the session starts.
 */
function onSessionStarted(sessionStartedRequest, session) {
    console.log("onSessionStarted requestId=" + sessionStartedRequest.requestId
        +", sessionId=" + session.sessionId);
}

/**
 * Called when the user invokes the skill without specifying what they want.
 */
function onLaunch(launchRequest, session, callback) {
    console.log("onLaunch requestId=" + launchRequest.requestId
        + ", sessionId=" + session.sessionId);

    getWelcomeResponse(callback);
}

/**
 * Called when the user specifies an intent for this skill.
 */
function onIntent(intentRequest, session, callback) {
    console.log("onIntent requestId=" + intentRequest.requestId
        +", sessionId=" + session.sessionId);

    var intent = intentRequest.intent,
        intentName = intentRequest.intent.name;

    // dispatch custom intents to handlers here
    if ("PreguntaIntent" === intentName) {
        handleQuestionRequest(intent, session, callback);
    } else if ("ConsejoIntent" === intentName){
        handleTipsRequest(intent, session, callback);
    } else if ("NumeroDePreguntasIntent" === intentName){
        handleNumberOfQuestionsRequest(intent, session, callback);
    } else if ("TipoPreguntaIntent" === intentName){
        handleQuestionTypeRequest(intent, session, callback);
    } else if ("EmpresaIntent" === intentName){
        handleCompanyRequest(intent, session, callback);
    } else if ("AMAZON.RepeatIntent" === intentName){
        handleRepeatRequest(intent, session, callback);
    } else if ("AMAZON.HelpIntent" === intentName){
        handleGetHelpRequest(intent, session, callback);
    } else if ("AMAZON.StopIntent" === intentName){
        handleFinishSessionRequest(intent, session, callback);
    }  else if ("AMAZON.CancelIntent" === intentName){
        handleFinishSessionRequest(intent, session, callback);
    }else {
        throw"Invalid intent";
    }
}

/**
 * Called when the user ends the session.
 * Is not called when the skill returns shouldEndSession=true.
 */
function onSessionEnded(sessionEndedRequest, session) {
    console.log("onSessionEnded requestId=" + sessionEndedRequest.requestId
        +", sessionId=" + session.sessionId);
}

// ------- Skill specific business logic -------

var CARD_TITLE ="Entrevista de Trabajo"; // Be sure to change this for your skill.
var RESPONSE_NO_QUESTIONS ="No tengo ninguna pregunta como esa.";
var RESPONSE_NO_TIPS ="No tengo ningun consejo como ese.";
var EXCLUDED_GENERAL_TAGS = ["tecnico", "amazon", "google", "microsoft", "intel", "bosch"]; // tags to be excluded from generic request
var AMZN_APP_ID = "amzn1.ask.skill.2620fefd-1431-4a26-9dfb-4dee1071a888";

function getWelcomeResponse(callback) {
    var sessionAttributes = {},
        speechOutput = "Puedes preguntar por una entrevista. Puedes pedir una pregunta de un tema especifico para una empresa especifica"
              + " si necesitas algo mas preciso",
        repromptText = "",
        shouldEndSession = false;

    sessionAttributes = {
    "speechOutput": speechOutput,
    "repromptText": repromptText
    };

    callback(sessionAttributes,
        buildSpeechletResponse(CARD_TITLE, speechOutput, repromptText, shouldEndSession));
}

/**
Get a random question from the list by filtering down by tags.
@param Array<string> tags Tags with which to filter down question List
@param Array<string> arr Array with which to grab random element
@return Element random node from filtered list. Returns null if none exist
*/
function getElement(tags, arr){
  var filteredElements;

  // only filter question list if specified
  if(typeof tags !== 'undefined' && tags !== null){
    filteredElements = getElementsByTags(tags, arr);
  }else{
    filteredElements = arr;
  }

  // if any questions exist, return random one
  if(filteredElements.length > 0){
    var randIndex = Math.floor(Math.random() * filteredElements.length);
    return filteredElements[randIndex];
  }else{
    return null;
  }
}

/**
Get a list of elements from the list by filtering down by tags.
@param Array<string> tags Tags with which to filter down question List
@param Array<string> arr Array to search for a question
@return Array<element> questions from filtered list.
*/
function getElementsByTags(tags, arr){
  var i, j, contains;
  var ret = [];

  for (i = 0; i < arr.length; i++){
    contains = true;
    for (j = 0; j < tags.length; j++){
      if(arr[i].tags.indexOf(tags[j]) === -1){
        contains = false;
        break;
      }
    }

    if(contains){
      ret.push(arr[i]);
    }
  }

  return ret;
}

/**
Get a list of elements from an array which do not only contain the provided tags
@param Array<string> tags Tags with which to filter down element List
@param Array<string> arr Array to search for a element
@return Array<element> elements from filtered list.
*/
function getExcludedElementsByTags(tags, arr){
  var i,
  		j,
      contains,
			ret = [],
      filteredTagsArray = [],
      filteredTags = {};

  //remove any uneccesary tags
  for (i = 0; i < arr.length; i++){
    contains = false;
    for (j = 0; j < arr[i].tags.length; j++){
      filteredTags[arr[i].tags[j]] = true;
    }
  }

  //if tags exist add them to filter array
  for(i = 0; i < tags.length; i ++){
  	if(filteredTags[tags[i]]){
    	filteredTagsArray.push(tags[i]);
    }
  }

   //interate through every element in the arr
  for (i = 0; i < arr.length; i++){
    contains = false;
    for (j = 0; j < tags.length; j++){ //iterate through every element in tags
      if(arr[i].tags.indexOf(tags[j]) > -1){ //if any tag element exists in arr, return true and break;
        contains = true;
        break;
      }
    }

    // only add elements to list who have more than the specified tags or if its tag list doesn't contain any specified tag
    if((arr[i].tags.length > tags.length) || (!contains)) {
      ret.push(arr[i]);
  	}
  }

  return ret;
}

/**
Get a string representation of an array.
@param Array<string> arr Array to transform into a string
@param string lastDelimiter String to insert before last element
@return string string representation of array.
*/
function getArrayString(arr, lastDelimiter){
  var delim = ', ',
      newArray = arr.slice();
  if(newArray){
    if(newArray.length <= 1){
      return newArray.join('');
    }else{
      if (typeof lastDelimiter === 'string'){
        newArray[newArray.length - 1] = lastDelimiter + ' ' + newArray[newArray.length - 1];
        return newArray.join(delim);
      }else{
        return newArray.join(delim);
      }
    }
  }else{
    return null;
  }
}

function handleNumberOfQuestionsRequest(intent, session, callback) {
    var sessionAttributes = {},
        speechOutput,
        repromptText,
        numQuestions,
        questionType,
        companyName;

    // User specified type and company
    if(intent.slots && intent.slots.QuestionType && intent.slots.QuestionType.value
          && intent.slots.CompanyName && intent.slots.CompanyName.value){
      numQuestions = getElementsByTags([intent.slots.QuestionType.value.toLowerCase(), intent.slots.CompanyName.value.toLowerCase()], questions).length;
      companyName = intent.slots.CompanyName.value;
      questionType = intent.slots.QuestionType.value;
    }else if(intent.slots && intent.slots.QuestionType && intent.slots.QuestionType.value){ // User specified type
      numQuestions = getElementsByTags([intent.slots.QuestionType.value.toLowerCase()], questions).length;
      questionType = intent.slots.QuestionType.value;
    }else if(intent.slots && intent.slots.CompanyName && intent.slots.CompanyName.value){ // User specified company
      numQuestions = getElementsByTags([intent.slots.CompanyName.value.toLowerCase()], questions).length;
      companyName = intent.slots.CompanyName.value;
    }else{ // if user asked a simple question
      numQuestions = getExcludedElementsByTags(EXCLUDED_GENERAL_TAGS, questions).length;
    }

    //create response string
    if(numQuestions < 1){
      speechOutput = RESPONSE_NO_QUESTIONS;
    }else if(questionType || companyName){
      speechOutput = "I have " + numQuestions + " ";

      //if type asked
      if(questionType){
        speechOutput += questionType + " ";
      }

      speechOutput += numQuestions === 1 ?"question " : "questions ";

      //if company asked
      if(companyName){
        speechOutput += "De " + companyName + ".";
      }
    }else {
      speechOutput = "Tengo  " + numQuestions + " preguntas en total.";
    }

    repromptText = speechOutput;

    callback(sessionAttributes,
                 buildSpeechletResponseWithoutCard(speechOutput, repromptText, true));
}

function handleQuestionRequest(intent, session, callback) {
    var sessionAttributes = {},
        speechOutput,
        repromptText,
        question;

    // User specified type and company
    if(intent.slots && intent.slots.QuestionType && intent.slots.QuestionType.value
          && intent.slots.CompanyName && intent.slots.CompanyName.value){
      question = getElement([intent.slots.QuestionType.value.toLowerCase(), intent.slots.CompanyName.value.toLowerCase()], questions);
    }else if(intent.slots && intent.slots.QuestionType && intent.slots.QuestionType.value){ // User specified type
      question = getElement([intent.slots.QuestionType.value.toLowerCase()], questions);
    }else if(intent.slots && intent.slots.CompanyName && intent.slots.CompanyName.value){ // User specified company
      question = getElement([intent.slots.CompanyName.value.toLowerCase()], questions);
    }else{ // if user asked a simple question
      question = getElement([], getExcludedElementsByTags(EXCLUDED_GENERAL_TAGS, questions));
    }

    if(question){
      speechOutput = question.value;
    }else{
      speechOutput = RESPONSE_NO_QUESTIONS;
    }

    repromptText = speechOutput;

    callback(sessionAttributes,
                 buildSpeechletResponse("Pregunta de Entrevista", speechOutput, repromptText, true));
}

function handleTipsRequest(intent, session, callback) {
    var sessionAttributes = {},
        speechOutput,
        repromptText,
        tip = getElement([], tips);

    if(tip && tip.value){
      speechOutput = tip.value;
    }else{
      speechOutput = RESPONSE_NO_TIPS;
    }

    repromptText = speechOutput;

    callback(sessionAttributes,
                 buildSpeechletResponse("Consejo de Entrevista", speechOutput, repromptText, true));
}

function handleQuestionTypeRequest(intent, session, callback) {
    var sessionAttributes = {},
        speechOutput = "Puedes preguntar por " + getArrayString(questionTypes, "and") + " . Sino especificas el tipo, tomaré una al azar",
        repromptText = speechOutput;

        sessionAttributes = {
        "speechOutput": speechOutput,
        "repromptText": repromptText
        };

    callback(sessionAttributes,
                 buildSpeechletResponseWithoutCard(speechOutput, repromptText, false));
}

function handleCompanyRequest(intent, session, callback) {
    var sessionAttributes = {},
        speechOutput = "Puedes preguntar por " + getArrayString(companies, "or") + ". "
            + "Sino especificas la empresa, tomaré una al azar",
        repromptText = speechOutput;

        sessionAttributes = {
        "speechOutput": speechOutput,
        "repromptText": repromptText
        };

    callback(sessionAttributes,
                 buildSpeechletResponseWithoutCard(speechOutput, repromptText, false));
}

function handleRepeatRequest(intent, session, callback) {
    // Repeat the previous speechOutput and repromptText from the session attributes if available
    // else start a new game session
    if (session.new ||!session.attributes ||  !session.attributes.speechOutput || !session.attributes.repromptText) {
        getWelcomeResponse(callback);
    } else {
        callback(session.attributes,
            buildSpeechletResponseWithoutCard(session.attributes.speechOutput, session.attributes.repromptText, false));
    }
}

function handleGetHelpRequest(intent, session, callback) {
    // Provide a help prompt for the user, explaining how the game is played. Then, continue the game
    // if there is one in progress, or provide the option to start another one.

    // Ensure that session.attributes has been initialized
    if (!session.attributes) {
        session.attributes = {};
    }

    // Set a flag to track that we're in the Help state.
    session.attributes.userPromptedToContinue = true;

    // Do not edit the help dialogue. This has been created by the Alexa team to demonstrate best practices.

    var speechOutput ="Puedes decir, 'Pregunta a entrevista laboral por una pregunta.' "
            + "Tambien puedes especificar el tipo de pregunta, o una pregunta "
            + "para una empresa especifica, como, 'Pregunta a entrevista laboral por una pregunta de tipo tecnica de amazon'",
        repromptText = speechOutput,
        shouldEndSession = false;

    callback(session.attributes,
        buildSpeechletResponseWithoutCard(speechOutput, repromptText, shouldEndSession));
}

function handleFinishSessionRequest(intent, session, callback) {
    // End the session with a"Good bye!" if the user wants to quit the game
    callback(session.attributes,
        buildSpeechletResponseWithoutCard("Adios!","", true));
}

// ------- Helper functions to build responses -------

function buildSpeechletResponse(title, output, repromptText, shouldEndSession) {
    return {
        outputSpeech: {
            type:"PlainText",
            text: output
        },
        card: {
            type:"Simple",
            title: title,
            content: output
        },
        reprompt: {
            outputSpeech: {
                type:"PlainText",
                text: repromptText
            }
        },
        shouldEndSession: shouldEndSession
    };
}

function buildSpeechletResponseWithoutCard(output, repromptText, shouldEndSession) {
    return {
        outputSpeech: {
            type:"PlainText",
            text: output
        },
        reprompt: {
            outputSpeech: {
                type:"PlainText",
                text: repromptText
            }
        },
        shouldEndSession: shouldEndSession
    };
}

function buildResponse(sessionAttributes, speechletResponse) {
    return {
        version:"1.0",
        sessionAttributes: sessionAttributes,
        response: speechletResponse
    };
}
