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
    { value : "Give me an example of a time that you felt you went above and beyond the call of duty at work.", tags : ["comportamiento"] },
    { value : "Can you describe a time when your work was criticized?", tags : ["comportamiento"] },
    { value : "Have you ever been on a team where someone was not pulling their own weight? How did you handle it?", tags : ["comportamiento", "personal"] },
    { value : "Tell me about a time when you had to give someone difficult feedback. How did you handle it?", tags : ["comportamiento", "personal"] },
    { value : "What is your greatest failure, and what did you learn from it?", tags : ["comportamiento", "personal"] },
    { value : "How do you handle working with people who annoy you?", tags : ["comportamiento", "personal"] },
    { value : "If I were your supervisor and asked you to do something that you disagreed with, what would you do?", tags : ["comportamiento"] },
    { value : "What was the most difficult period in your life, and how did you deal with it?", tags : ["comportamiento", "personal"] },
    { value : "Give me an example of a time you did something wrong. How did you handle it?", tags : ["comportamiento"] },
    { value : "Tell me about a time where you had to deal with conflict on the job.", tags : ["comportamiento"] },
    { value : "If you were at a business lunch and you ordered a rare steak, and they brought it to you well done, what would you do?", tags : ["comportamiento", "personal"] },
    { value : "If you found out your company was doing something against the law, like fraud, what would you do?", tags : ["comportamiento", "personal"] },
    { value : "What assignment was too difficult for you, and how did you resolve the issue?", tags : ["comportamiento"] },
    { value : "What's the most difficult decision you have made in the last two years, and how did you come to that decision?", tags : ["comportamiento"] },
    { value : "Describe how you would handle a situation if you were required to finish multiple tasks by the end of the day, and there was no conceivable way that you could finish them.", tags : ["comportamiento"] },
    { value : "Can you describe an environment or scenario where you would not thrive instantly?", tags : ["comportamiento"] },
    { value : "What are you looking for in terms of carrera development?", tags : ["carrera"] },
    { value : "How do you want to improve yourself in the next year?", tags : ["carrera", "personal"] },
    { value : "What kind of goals would you have in mind if you got this job?", tags : ["carrera", "personal"] },
    { value : "If I were to ask your last supervisor to provide you additional training or exposure, what would she suggest?", tags : ["carrera"] },
    { value : "What are your carrera goals?", tags : ["carrera"] },
    { value : "Where would you like to be in your carrera five years from now?", tags : ["carrera", "personal"] },
    { value : "What's your ideal company?", tags : ["personal", "carrera"] },
    { value : "What attracted you to this company?", tags : ["carrera", "personal"] },
    { value : "Why should we hire you?", tags : ["carrera personal"] },
    { value : "What did you like least about your last job?", tags : ["carrera", "personal"] },
    { value : "When were you most satisfied in your job?", tags : ["carrera", "personal"] },
    { value : "What can you do for us that other candidates cannot?", tags : ["personal"] },
    { value : "What were the responsibilities of your last position?", tags : ["carrera", "comportamiento"] },
    { value : "Why are you leaving your present job?", tags : ["carrera", "personal"] },
    { value : "What do you know about this industry?", tags : ["carrera"] },
    { value : "What do you know about our company?", tags : ["carrera"] },
    { value : "Are you willing to relocate?", tags : ["carrera", "personal"] },
    { value : "How would you go about establishing your credibility quickly with the team?", tags : ["general"] },
    { value : "How long will it take for you to make a significant contribution?", tags : ["general"] },
    { value : "What do you see yourself doing within the first 30 days of this job?", tags : ["carrera", "personal"] },
    { value : "If selected for this position, can you describe your strategy for the first 90 days?", tags : ["carrera", "personal"] },
    { value : "Who was your most difficult customer?", tags : ["comportamiento", "amazon"] },
    { value : "How would you introduce AWS in an elevator pitch?", tags : ["tecnico", "comportamiento", "amazon"] },
    { value : "What is the worst mistake you ever made?", tags : ["personal", "amazon"] },
    { value : "If your direct manager was instructing you to do something you disagreed with, how would you handle it?", tags : ["personal", "carrera", "amazon"] },
    { value : "Do you know our CEO? How do you pronounce his name?", tags : ["general", "amazon"] },
    { value : "Are you willing to work on your feet for ten hours, four days a week?", tags : ["personal", "amazon"] },
    { value : "What is your work style?", tags : ["personal"] },
    { value : "Describe what Human Resource means to you.", tags : ["general", "comportamiento", "amazon"] },
    { value : "Tell me about yourself.", tags : ["general", "personal", "amazon", "microsoft", "intel", "bosch"] },
    { value : "What are your strengths?", tags : ["general", "personal", "amazon", "microsoft", "google", "intel", "bosch"] },
    { value : "What are your weaknesses?", tags : ["general", "personal", "amazon", "microsoft", "google", "intel", "bosch"] },
    { value : "Why do you want this job?", tags : ["general", "personal", "amazon", "microsoft", "google", "intel", "bosch"] },
    { value : "How would you describe your work style?", tags : ["personal", "comportamiento"] },
    { value : "What would be your ideal working environment?", tags : ["personal", "comportamiento"] },
    { value : "What do you look for in terms of culture? Structured or entrepreneurial?", tags : ["personal", "carrera"] },
    { value : "Give examples of ideas you have had, or implemented.", tags : ["personal", "tecnico", "carrera"] },
    { value : "What techniques and tools do you use to keep yourself organized?", tags : ["personal", "comportamiento"] },
    { value : "Would you consider yourself a big-picture person or a detail-oriented person?", tags : ["personal"] },
    { value : "Tell me about your proudest achievement.", tags : ["personal", "carrera"] },
    { value : "Who was your favorite manager and why?", tags : ["personal", "carrera"] },
    { value : "What do you think of your previous boss?", tags : ["personal", "carrera"] },
    { value : "Was there a person in your carrera who really made a difference?", tags : ["personal", "carrera"] },
    { value : "What kind of personality do you work best with and why?", tags : ["personal", "comportamiento"] },
    { value : "What are you most proud of?", tags : ["personal", "comportamiento"] },
    { value : "What do you like to do?", tags : ["personal", "comportamiento"] },
    { value : "What are your lifelong dreams?", tags : ["personal", "carrera", "comportamiento"] },
    { value : "What do you ultimately want to become?", tags : ["personal", "carrera"] },
    { value : "What is your personal mission statement?", tags : ["personal", "carrera"] },
    { value : "What are three positive things your last boss would say about you?", tags : ["personal", "carrera"] },
    { value : "What negative thing would your last boss say about you?", tags : ["personal", "carrera"] },
    { value : "What three character traits would your friends use to describe you?", tags : ["personal", "carrera"] },
    { value : "What are three positive character traits you don't have?", tags : ["personal"] },
    { value : "If you were interviewing someone for this position, what traits would you look for?", tags : ["personal", "carrera"] },
    { value : "List five words that describe your character.", tags : ["personal"] },
    { value : "Who has impacted you most in your carrera and how?", tags : ["personal", "carrera"] },
    { value : "What is your greatest fear?", tags : ["personal"] },
    { value : "What is your biggest regret and why?", tags : ["personal"] },
    { value : "What's the most important thing you learned in school?", tags : ["personal", "carrera"] },
    { value : "Why did you choose your major?", tags : ["personal", "carrera"] },
    { value : "What will you miss about your current job?", tags : ["personal", "carrera"] },
    { value : "What are the qualities of a good leader?", tags : ["personal"] },
    { value : "What is your greatest achievement outside of work?", tags : ["personal"] },
    { value : "What are the qualities of a bad leader?", tags : ["personal"] },
    { value : "Do you think a leader should be feared or liked?   ", tags : ["personal"] },
    { value : "How do you feel about taking no for an answer?", tags : ["personal"] },
    { value : "How would you feel about working for someone who knows less than you?", tags : ["personal"] },
    { value : "How do you think I rate as an interviewer?", tags : ["personal"] },
    { value : "Tell me one thing about yourself you would not want me to know.", tags : ["personal"] },
    { value : "Tell me the difference between good and exceptional.", tags : ["personal"] },
    { value : "What kind of car do you drive?", tags : ["personal"] },
    { value : "If you could be anywhere in the world right now, where would you be?", tags : ["personal"] },
    { value : "What's the last book you read?", tags : ["personal"] },
    { value : "What magazines do you subscribe to?", tags : ["personal"] },
    { value : "What's the best movie you have seen in the last year?", tags : ["personal"] },
    { value : "What would you do if you won the lottery?", tags : ["personal"] },
    { value : "Who are your heroes?", tags : ["personal", "carrera"] },
    { value : "What do you like to do for fun?", tags : ["personal"] },
    { value : "What do you do in your spare time?", tags : ["personal"] },
    { value : "What is your favorite memory from childhood?", tags : ["personal"] },
    { value : "What salario are you seeking?", tags : ["salario"] },
    { value : "What's your salario history?", tags : ["salario"] },
    { value : "If I were to give you this salario you requested, but let you write your job description for the next year, what would it say?", tags : ["salario"] },
    { value : "What salario range would you require to take this job?", tags : ["salario"] },
    { value : "Would you consider taking less pay than you made in your last job?", tags : ["salario"] },
    { value : "What is the angle between the hour hand and minute hand in an analog clock?", tags : ["tecnico", "amazon", "google", "microsoft", "intel", "bosch"] },
    { value : "How do you detect whether or not a word is a palindrome?", tags : ["tecnico", "amazon", "google", "microsoft", "intel", "bosch"] },
    { value : "Here's a string with numbers from 1-250, in random order, but it's missing one number. How will you find the missing number?", tags : ["tecnico", "amazon", "google", "microsoft", "intel", "bosch"] },
    { value : "What is your favorite programming language?", tags : ["tecnico", "amazon", "google", "microsoft", "intel", "bosch"] },
    { value : "How would you implement bubble sort?", tags : ["tecnico", "amazon", "google", "microsoft", "intel", "bosch"] },
    { value : "How would you implement selection sort?", tags : ["tecnico", "amazon", "google", "microsoft", "intel", "bosch"] },
    { value : "How would you implement insertion sort?", tags : ["tecnico", "amazon", "google", "microsoft", "intel", "bosch"] },
    { value : "How would you implement merge sort?", tags : ["tecnico", "amazon", "google", "microsoft", "intel", "bosch"] },
    { value : "How would you implement quick sort?", tags : ["tecnico", "amazon", "google", "microsoft", "intel", "bosch"] },
    { value : "You have two very large numbers that cannot be stored in any available datatypes. How would you multiply them?", tags : ["tecnico", "amazon", "google", "microsoft", "intel", "bosch"] },
    { value : "How will you implement a dictionary?", tags : ["tecnico", "amazon", "google", "microsoft", "intel", "bosch"] },
    { value : "Given a matrix which is spirally sorted. Remove an element and insert another element, maintaining the sorted order.", tags : ["tecnico", "amazon", "google", "microsoft", "intel", "bosch"] },
    { value : "How would you find if there is a cycle in a directed graph?", tags : ["tecnico", "amazon", "google", "microsoft", "intel", "bosch"] },
    { value : "How would you implement a method that converts a binary search tree into a sorted double-linked list, without creating any new nodes?", tags : ["tecnico", "amazon", "google", "microsoft", "intel", "bosch"] },
    { value : "Can you tell me about a recent project or process that you made better, faster, smarter or more efficient?", tags : ["tecnico"] },
    { value : "You’ve just been assigned to a project involving a new technology. How would you get started?", tags : ["tecnico"] },
    { value : "What technology-related blogs, podcasts, tweets or websites do you follow? Do you share any information, yourself, online?", tags : ["tecnico"] },
    { value : "How do you keep your technology skills current?", tags : ["tecnico", "personal"] },
    { value : "What character traits would your colleagues use to describe you?", tags : ["comportamiento"] },
    { value : "Can you tell me about a time when things didn’t go the way you wanted at work, such as a project that failed or being passed over for a promotion?", tags : ["tecnico", "carrera"] },
    { value : "What are your favorite and least favorite technology products, and why?", tags : ["tecnico", "personal"] },
    { value : "Describe to me some bad code you’ve read or inherited lately.", tags : ["tecnico"] },
    { value : "What do you do when you get stuck with a problem you cannot solve?", tags : ["tecnico"] },
    { value : "When the build does break, how do you help fix it?", tags : ["tecnico"] },
    { value : "What are some practices you use to help prevent a developer on the team from breaking the build?", tags : ["tecnico"] },
    { value : "Do you answer questions on Stack Overflow?", tags : ["tecnico"] },
    { value : "Are you using code from GitHub, or contributing code to an open-source project?", tags : ["tecnico"] },
    { value : "Do you like to work alone or as part of a team?", tags : ["personal", "comportamiento"] },
    { value : "What’s the best part about your current job?", tags : ["personal", "carrera"] },
    { value : "What in particular are you most interested in working on?", tags : ["personal", "carrera"] },
    { value : "Do you have examples of your work?", tags : ["personal", "tecnico", "carrera"] },
    { value : "Explain the concept of polymorphism in object oriented programming", tags : ["tecnico", "hitachi consulting", "hitachi"] },
    { value : "What are 3 things that you want me to remember about you?", tags : ["personal", "comportamiento", "hitachi consulting", "hitachi"] },
    { value : "Share a time when you were given a problem you could not solve.", tags : ["tecnico", "comportamiento", "hitachi consulting", "hitachi"] },
    { value : "Tell me how to implement the Fibonacci sequence", tags : ["tecnico", "hitachi consulting", "hitachi"] },
    { value : "How do you implement a binary search?", tags : ["tecnico"] },
    { value : "How do you find the minimum depth of a binary tree?", tags : ["tecnico"] },
    { value : "How do you find the check whether or not a binary tree is a full binary tree?", tags : ["tecnico"] },
    { value : "How do you check if a binary tree is a subtree of another binary tree?", tags : ["tecnico"] },
    { value : "How would you compare  two strings represented as Linked Lists?", tags : ["tecnico"] },
    { value : "How would you detech and remove loops in a Linked List?", tags : ["tecnico"] },
    { value : "¿Cómo invertirías todos los elementos en una lista vinculada?", tags : ["tecnico"] },
    { value : "¿Cómo encuentras si un número es un cuadrado perfecto?", tags : ["tecnico"] },
    { value : "¿Cuál es el patrón de diseño singleton?", tags : ["tecnico"] },
    { value : "¿Cuál es el patrón de diseño de fábrica?", tags : ["tecnico"] },
    { value : "¿Cómo encontrarías el máximo divisor común de un número usando la recursión?", tags : ["tecnico"] },
    { value : "¿Cómo encontrarías el factorial de un número usando la recursión?", tags : ["tecnico"] }
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
