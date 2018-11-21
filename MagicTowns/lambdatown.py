/**
 Copyright 2014-2015 Amazon.com, Inc. or its affiliates. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the"License"). You may not use this file except in compliance with the License. A copy of the License is located at

 http://aws.amazon.com/apache2.0/

 or in the"license" file accompanying this file. This file is distributed on an"AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
 */

'use strict';

// All available facts
var facts = [
    { value : "has a number of attractions of interest to tourists. One of them is the Main Square, which dates from 1778 and is famous for its orange trees. Calvillo is also home to the Temple of Our Lord of the Salitre; built in 1772, its interior features paintings that are considered jewels of religious art. The attractive dome topping the church has an exceptional size and diameter. Its rarest feature is that it is made as a single architectural piece; there are only five domes of this style worldwide. The interior of the dome features exquisite frescoes depicting the life of St. Joseph, the patron saint of the city. The Guadalupe Temple is another important church featuring majestic towers. Another interesting place is the Malpaso Dam. The outskirts of Calvillo are a magnet for tourists. The Sierra del Laurel, south of the town, is a prolongation of Sierra Fría and highly sought-after by rock climbers because of its steep sides. Also nearby are the La Cordorniz Dam, and the ex-convent of the Tepozán, where, at the bottom of the gully, there is a rocky area with cave paintings. The prehistoric paintings of El Tepozan show diverse figures in different colors imprinted in various eras. Very close to these two attractions, in the town of La Panadera and chikis it is still practiced the old craft of embroidery and unthreading or 'deshilados', the state's craft by excellence. ", tags : ["Calvillo"] },
    { value : "In this small “Magical Town” in Aguascalientes, a semi-desert town that used to be a mining outpost, visitors can tour underground tunnels, spot high-quality religious art, listen to stories about the State’s oldest cemetery or learn to shoot arrows like the Chichimecas used to. On its different tours you will find places such as El Galerón de los Esclavos, where you will have the opportunity to glimpse an old world where slavery was legal. You will be amazed by the unusual contrasts and pink arches of the former convent of Tepozá, and at Museo Vivo de Cactáceas, you will discover a display of agave as well as exotic plants from South Africa and Madagascar. You can also walk around the old town where any of its monuments will dazzle you, including La Casa Larrañaga or La Casa del Minero, which feature sculpted religious anagrams in pink quarry stone and detailed ironwork on doors and windows.​", tags : ["Real de Asientos"] },
    { value : "The origins of San José de Gracia go back to the time of the congregation of indigenous Chichimecas who worked in the hacienda de garabato but when dying their last benefit was that they could settle in the foothills of the Sierra Fría, in a place that over time would be called 'de Martha', this between the years 1673 and 1675. A place to visit is The Broken Christ, it has an associated legend with it and a poem as well. Legend says that around the independence of Mexico time, when the image arrived into the church in San Jose de Gracia, it arrived broken, and that it spoke told the would-be seller to leave him broken so that he would always have a reminder to think about his brothers and sisters without opportunities, without limbs", tags : ["San José de Gracia"] },
    { value : "Tecate has been inhabited by Kumiai nomadic peoples since time immemorial. Today’s Tecate grew under the Cuchuma hill, the Kumiai magic mountain, a sacred place of rounded rocks and connection to the Universe. The first settlers left their mark nearby, at the El Vallecito archeological site, where you will find the famous Diablito (Little Devil). Then came missions, ranchs and the border, but Tecate continued to be a slow place where views extend over the horizon. En the early 1900s the beer factory arrive, bringing along the railroad, progress and finally the village as we know it was born. And the place named “acorn tree” by the Kumiai was internationally known thanks to the beer. A tour of the interesting Museo Comunitario takes us to these three key moments of the Magical Town of Tecate: the Kumiai culture, the years of the ranches, and the railroad and the beer factory.If you want to learn more about the history of the Magical Town of Tecate and would like to explore the surroundings you cannot miss a rare museum: Campo Alaska, formerly military barracks in the middle of nowhere housing a photographic exhibit about the site and temporary exhibits as well.", tags : ["Tecate"] },
 ];

var StateTown = [
{value : "Teúl de González Ortega",tags : ["Zacatecas"]},
{value : "Sombrerete",tags : ["Zacatecas"]},
{value : "Pinos",tags : ["Zacatecas"]},
{value : "Nochistlán de Mejía",tags : ["Zacatecas"]},
{value : "Jeréz de García Salinas",tags : ["Zacatecas"]},
{value : "Valladolid",tags : ["Yucatán"]},
{value : "Izamal",tags : ["Yucatán"]},
{value : "Orizaba",tags : ["Veracruz"]},
{value : "Coscomatepec",tags : ["Veracruz"]},
{value : "Xico",tags : ["Veracruz"]},
{value : "Papantla",tags : ["Veracruz"]},
{value : "Coatepec",tags : ["Veracruz"]},
{value : "Tlaxco",tags : ["Tlaxcala"]},
{value : "Huamantla",tags : ["Tlaxcala"]},
{value : "Tula",tags : ["Tamaulipas"]},
{value : "Mier",tags : ["Tamaulipas"]},
{value : "Tapijulapa",tags : ["Tabasco"]},
{value : "Magdalena de Kino",tags : ["Sonora"]},
{value : "Álamos",tags : ["Sonora"]},
{value : "Mocorito",tags : ["Sinaloa"]},
{value : "El fuerte",tags : ["Sinaloa"]},
{value : "El rosario",tags : ["Sinaloa"]},
{value : "Cosalá",tags : ["Sinaloa"]},
{value : "Xilitla",tags : ["San Luis Potosí"]},
{value : "Real de Catorce",tags : ["San Luis Potosí"]},
{value : "Tulum",tags : ["Quintana Roo"]},
{value : "Isla Mujeres",tags : ["Quintana Roo"]},
{value : "Bacalar",tags : ["Quintana Roo"]},
{value : "San Joaquín",tags : ["Querétaro"]},
{value : "Tequisquiapan",tags : ["Querétaro"]},
{value : "Jalpan de Serra",tags : ["Querétaro"]},
{value : "Cadereyta de Montes",tags : ["Querétaro"]},
{value : "Bernal",tags : ["Querétaro"]},
{value : "Huauchinango",tags : ["Puebla"]},
{value : "Atlixco",tags : ["Puebla"]},
{value : "Zacatlán",tags : ["Puebla"]},
{value : "Xicotepec",tags : ["Puebla"]},
{value : "Tlatlaquitepec",tags : ["Puebla"]},
{value : "San Pedro Cholula",tags : ["Puebla"]},
{value : "Pahuatlán",tags : ["Puebla"]},
{value : "Cuetzalan",tags : ["Puebla"]},
{value : "Chignahuapan",tags : ["Puebla"]},
{value : "San Pedro y San Pablo Teposcolula",tags : ["Oaxaca"]},
{value : "San Pablo Villa Mitla",tags : ["Oaxaca"]},
{value : "Mazunte",tags : ["Oaxaca"]},
{value : "Huautla de Jiménez",tags : ["Oaxaca"]},
{value : "Capulálpam de Méndez",tags : ["Oaxaca"]},
{value : "Linares",tags : ["Nuevo León"]},
{value : "Santiago",tags : ["Nuevo León"]},
{value : "Sayulita",tags : ["Nayarit"]},
{value : "Jala",tags : ["Nayarit"]},
{value : "Tlayacapan",tags : ["Morelos"]},
{value : "Tepoztlan",tags : ["Morelos"]},
{value : "Tzintzuntzan",tags : ["Michoacán"]},
{value : "Tlalpajahua",tags : ["Michoacán"]},
{value : "Tacambaro",tags : ["Michoacán"]},
{value : "Santa Clara del Cobre",tags : ["Michoacán"]},
{value : "Patzcuaro",tags : ["Michoacán"]},
{value : "Mineral de Angangueo",tags : ["Michoacán"]},
{value : "Jiquilpan de Juarez",tags : ["Michoacán"]},
{value : "Cuitzeo del Porvenir",tags : ["Michoacán"]},
{value : "Villa del Carbon",tags : ["México"]},
{value : "San Martin de las Piramides",tags : ["México"]},
{value : "Ixtapan de la Sal",tags : ["México"]},
{value : "Aculco",tags : ["México"]},
{value : "Valle de Bravo",tags : ["México"]},
{value : "Tepotzotlán",tags : ["México"]},
{value : "Metepec",tags : ["México"]},
{value : "Malinalco",tags : ["México"]},
{value : "El oro de Hidalgo",tags : ["México"]},
{value : "Talpa de Allende",tags : ["Jalisco"]},
{value : "Mascota",tags : ["Jalisco"]},
{value : "Tequila",tags : ["Jalisco"]},
{value : "Tapalpa",tags : ["Jalisco"]},
{value : "San Sebastian del Oeste",tags : ["Jalisco"]},
{value : "Mazamitla",tags : ["Jalisco"]},
{value : "Lagos de Moreno",tags : ["Jalisco"]},
{value : "Tecozautla",tags : ["Hidalgo"]},
{value : "Real de Monte",tags : ["Hidalgo"]},
{value : "Mineral del Chico",tags : ["Hidalgo"]},
{value : "Huichapan",tags : ["Hidalgo"]},
{value : "Huasca de Ocampo",tags : ["Hidalgo"]},
{value : "Taxco",tags : ["Guerrero"]},
{value : "Yuriria",tags : ["Guanajuato"]},
{value : "Salvatierra",tags : ["Guanajuato"]},
{value : "Mineral de Pozos",tags : ["Guanajuato"]},
{value : "Jalpa de Canovas",tags : ["Guanajuato"]},
{value : "Dolores Hidalgo",tags : ["Guanajuato"]},
{value : "Mapimi",tags : ["Durango"]},
{value : "Casas Grandes",tags : ["Chihuahua"]},
{value : "Creel",tags : ["Chihuahua"]},
{value : "Batopilas",tags : ["Chihuahua"]},
{value : "Palenque",tags : ["Chiapas"]},
{value : "San Cristobal de las Casas",tags : ["Chiapas"]},
{value : "Comitan de Dominguez",tags : ["Chiapas"]},
{value : "Chiapa de Corzo",tags : ["Chiapas"]},
{value : "Comala",tags : ["Colima"]},
{value : "Guerrero",tags : ["Coahuila"]},
{value : "Candela",tags : ["Coahuila"]},
{value : "Viesca",tags : ["Coahuila"]},
{value : "Parras de la Fuente",tags : ["Coahuila"]},
{value : "Cuatro Cienegas",tags : ["Coahuila"]},
{value : "Arteaga",tags : ["Coahuila"]},
{value : "Palizada",tags : ["Campeche"]},
{value : "Todos Santos",tags : ["Baja California Sur"]},
{value : "Loreto",tags : ["Baja California Sur"]},
{value : "Tecate",tags : ["Baja California"]},
{value : "San José de Gracia",tags : ["Aguascalientes"]},
{value : "Real de Asientos",tags : ["Aguascalientes"]},
{value : "Calvillo", tags : ["Aguascalientes"]}
];

//List of all available states
var states = [
 "Zacatecas",
 "Yucatán",
 "Veracruz",
 "Tlaxcala",
 "Tamaulipas",
 "Tabasco",
 "Sonora",
 "Sinaloa",
 "San Luis Potosí",
 "Quintana Roo",
 "Querétaro",
 "Puebla",
 "Oaxaca",
 "Nuevo León",
 "Nayarit",
 "Morelos",
 "Michoacán",
 "México",
 "Jalisco",
 "Hidalgo",
 "Guerrero",
 "Guanajuato",
 "Durango",
 "Colima",
 "Coahuila",
 "Chihuahua",
 "Ciudad de México",
 "Chiapas",
 "Baja California Sur",
 "Baja California",
 "Aguascalientes"
];

//List of all available magic towns
var magicTowns = [
 "Teúl de González Ortega",
 "Sombrerete",
 "Pinos",
 "Nochistlán de Mejía",
 "Jeréz de García Salinas",
 "Valladolid",
 "Izamal",
 "Orizaba",
 "Coscomatepec",
 "Xico",
 "Papantla",
 "Coatepec",
 "Tlaxco",
 "Huamantla",
 "Tula",
 "Mier",
 "Tapijulapa",
 "Magdalena de Kino",
 "Álamo",
 "Mocorito",
 "El fuerte",
 "El rosario",
 "Cosalá",
 "Xilitla",
 "Real de Catorce",
 "Tulum",
 "Isla Mujeres",
 "Bacalar",
 "San Joaquín",
 "Tequisquiapan",
 "Jalpan de Serra",
 "Cadereyta de Montes",
 "Bernal",
 "Huauchinango",
 "Atlixco",
 "Zacatlán",
 "Xicotepec",
 "Tlatlaquitepec",
 "San Pedro Cholula",
 "Pahuatlán",
 "Cuetzalan",
 "Chignahuapan",
 "San Pedro y San Pablo Teposcolula",
 "San Pablo Villa Mitla",
 "Mazunte",
 "Huautla de Jiménez",
 "Capulálpam de Méndez",
 "Linares",
 "Santiago",
 "Sayulita",
 "Jala",
 "Tlayacapan",
 "Tepoztlan",
 "Tzintzuntzan",
 "Tlalpajahua",
 "Tacambaro",
 "Santa Clara del Cobre",
 "Patzcuaro",
 "Mineral de Angangueo",
 "Jiquilpan de Juarez",
 "Cuitzeo del Porvenir",
 "Villa del Carbon",
 "San Martin de las Piramides",
 "Ixtapan de la Sal",
 "Aculco",
 "Valle de Bravo",
 "Tepotzotlán",
 "Metepec",
 "Malinalco",
 "El oro de Hidalgo",
 "Talpa de Allende",
 "Mascota",
 "Tequila",
 "Tapalpa",
 "San Sebastian del Oeste",
 "Mazamitla",
 "Lagos de Moreno",
 "Tecozautla",
 "Real de Monte",
 "Mineral del Chico",
 "Huichapan",
 "Huasca de Ocampo",
 "Taxco",
 "Yuriria",
 "Salvatierra",
 "Mineral de Pozos",
 "Jalpa de Canovas",
 "Dolores Hidalgo",
 "Mapimi",
 "Casas Grandes",
 "Creel",
 "Batopilas",
 "Palenque",
 "San Cristobal de las Casas",
 "Comitan de Dominguez",
 "Chiapa de Corzo",
 "Comala",
 "Guerrero",
 "Candela",
 "Viesca",
 "Parras de la Fuente",
 "Cuatro Cienegas",
 "Arteaga",
 "Palizada",
 "Todos Santos",
 "Loreto",
 "Tecate",
 "San José de Gracia",
 "Real de Asientos",
 "Calvillo"
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
    if ("numberMagicTownMexico" === intentName) {
        handleNumberOfTownsMexico(intent, session, callback);
    } else if ("numberMagicTownState" === intentName){
        handleNumberOfTownsState(intent, session, callback);
    } else if ("nameMagicTownState" === intentName){
        handleNameOfTownsState(intent, session, callback);
    } else if ("magicTownRandom" === intentName){
        handleTownRandom(intent, session, callback);
    } else if ("magicTownSpecific" === intentName){
        handleTownState(intent, session, callback);
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

var CARD_TITLE ="Magic Town Mexico"; // Be sure to change this for your skill.
var RESPONSE_NO_ANSWER ="I don't have that Magic Town or State";
var RESPONSE_NO_TOWNS = "I don't have any Magic Town.";
var RESPONSE_NO_TOWNS_STATE = "I don't have any Magic Town on that State.";
var RESPONSE_NO_TOWNS_INFO = "I don't have information of that Town.";
var EXCLUDED_GENERAL_TAGS = [
 "Zacatecas",
 "Yucatán",
 "Veracruz",
 "Tlaxcala",
 "Tamaulipas",
 "Tabasco",
 "Sonora",
 "Sinaloa",
 "San Luis Potosí",
 "Quintana Roo",
 "Querétaro",
 "Puebla",
 "Oaxaca",
 "Nuevo León",
 "Nayarit",
 "Morelos",
 "Michoacán",
 "México",
 "Jalisco",
 "Hidalgo",
 "Guerrero",
 "Guanajuato",
 "Durango",
 "Colima",
 "Coahuila",
 "Chihuahua",
 "Ciudad de México",
 "Chiapas",
 "Baja California Sur",
 "Baja California",
 "Aguascalientes"
]; // tags to be excluded from generic request
var AMZN_APP_ID = "amzn1.ask.skill";

function getWelcomeResponse(callback) {
    var sessionAttributes = {},
        speechOutput = "You can ask information of the Magic Towns of Mexico. You can specify a town or a state if you want a more precise information.",
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

function handleNumberOfTownsMexico(intent, session, callback) {
    var sessionAttributes = {},
        speechOutput,
        repromptText,
        numQuestions;

    
      numQuestions = magicTowns.length;
      
    //create response string
    if(numQuestions < 1){
      speechOutput = RESPONSE_NO_TOWNS;
    }else{
      speechOutput = "Mexico have approximately " + numQuestions + " Magic Towns";
    }

    repromptText = speechOutput;

    callback(sessionAttributes,
                 buildSpeechletResponse("Towns in Mexico",speechOutput, repromptText, true));
}

function handleNumberOfTownsState(intent, session, callback) {
    var sessionAttributes = {},
        speechOutput,
        repromptText,
        state;

    // User specified State
    townsInState = getElementByTags([intent.slots.state.value.toLowerCase()], StateTown).length;

    if(townsInState < 1){
      speechOutput = RESPONSE_NO_TOWNS_STATE;
    }else{
      speechOutput = state.value +" have approximately " + townsInState + " Magic Towns";
    }

    repromptText = speechOutput;

    callback(sessionAttributes,
                 buildSpeechletResponse("Towns in "state.value, speechOutput, repromptText, true));
}

function handleNameOfTownsState(intent, session, callback) {
    var sessionAttributes = {},
        speechOutput,
        repromptText,
        state;

    // User specified State
    townsInState = getElementByTags([intent.slots.state.value.toLowerCase()], StateTown);

    if(townsInState < 1){
      speechOutput = RESPONSE_NO_TOWNS_STATE;
    }else{
      speechOutput = "The Magics Towns related are" + townsInState.value;
    }

    repromptText = speechOutput;

    callback(sessionAttributes,
                 buildSpeechletResponse("Towns in "state.value, speechOutput, repromptText, true));
}

function handleTownRandom(intent, session, callback) {
   var sessionAttributes = {},
        speechOutput,
        repromptText,
        state;

    numRan = random.choice(facts);
	
    if(numRan){
      speechOutput = numRan.value;
    }else{
      speechOutput = RESPONSE_NO_TOWNS_STATE;
    }

    repromptText = speechOutput;

    callback(sessionAttributes,
                 buildSpeechletResponseWithoutCard( speechOutput, repromptText, true));
}

function handleTownState(intent, session, callback) {
    var sessionAttributes = {},
        speechOutput,
        repromptText,
		magicTown;

    // User specified State
    factTown = getElementByTags([intent.slots.magicTown.value.toLowerCase()], facts);

    if(factTown < 1){
      speechOutput =  RESPONSE_NO_TOWNS_INFO;
    }else{
      speechOutput =  factTown.value;
    }

    repromptText = speechOutput;

    callback(sessionAttributes,
                 buildSpeechletResponse("Towns in "state.value, speechOutput, repromptText, true));
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

    var speechOutput ="You can say, 'Give me a random Magic Town' "
            + "You can also specify a town"
            + "like this, 'Tell me more about Tequila",
			+ "And this skill could help you to know the magic towns in a specific state"
			+ "like this 'tell me the magic towns in Jalisco'"
        repromptText = speechOutput,
        shouldEndSession = false;

    callback(session.attributes,
        buildSpeechletResponseWithoutCard(speechOutput, repromptText, shouldEndSession));
}

function handleFinishSessionRequest(intent, session, callback) {
    // End the session with a"Good bye!" if the user wants to quit the game
    callback(session.attributes,
        buildSpeechletResponseWithoutCard("Good bye! Thanks for play with us","", true));
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
