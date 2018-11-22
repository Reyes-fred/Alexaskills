'use strict';

var facts = [
    { value : "", tags : ["calvillo"] },
    { value : "", tags : ["real de asientos"] },
    { value : "", tags : ["san jose de gracia"] },
    { value : "", tags : ["tecate"] },
	{ value : "", tags : ["loreto"] },
	{ value : "", tags : ["todos santos"] },
	{ value : "", tags : ["palizada"] },
	{ value : "", tags : ["arteaga"] },
	{ value : "", tags : ["cuatro cienegas"] },
	{ value : "", tags : ["parras de la fuente"] },
	{ value : "", tags : ["viesca"] },
	{ value : "", tags : ["candela"] },
	{ value : "", tags : ["guerrero"] },
	{ value : "", tags : ["comala"] },
	{ value : "", tags : ["chiapa de corzo"] },
	{ value : "", tags : ["comitan de dominguez"] },
	{ value : "", tags : ["san cristobal de las casas"] },
	{ value : "", tags : ["palenque"] },
	{ value : "", tags : ["batopilas"] },
	{ value : "", tags : ["creel"] },
	{ value : "", tags : ["casas grandes"] },
	{ value : "", tags : ["mapimi"] },
	{ value : "", tags : ["dolores hidalgo"] },
	{ value : "", tags : ["jalpa de canovas"] },
	{ value : "", tags : ["mineral de pozos"] },
	{ value : "", tags : ["salvatierra"] },
	{ value : "", tags : ["yuriria"] },
	{ value : "", tags : ["taxco"] },
	{ value : "", tags : ["huasca de ocampo"] },
	{ value : "", tags : ["huichapan"] },
	{ value : "", tags : ["mineral del chico"] },
	{ value : "", tags : ["real de monte"] },
	{ value : "", tags : ["tecozautla"] },
	{ value : "", tags : ["lagos de moreno"] },
	{ value : "", tags : ["mazamitla"] },
	{ value : "", tags : ["san sebastian del oeste"] },
	{ value : "", tags : ["tapalpa"] },
	{ value : "", tags : ["tequila"] },
	{ value : "", tags : ["mascota"] },
	{ value : "", tags : ["talpa de allende"] },
	{ value : "", tags : ["el oro de hidalgo"] },
	{ value : "", tags : ["malinalco"] },
	{ value : "", tags : ["metepec"] },
	{ value : "", tags : ["tepotzotlan"] },
	{ value : "", tags : ["valle de bravo"] },
	{ value : "", tags : ["aculco"] },
	{ value : "", tags : ["ixtapan de la sal"] },
	{ value : "", tags : ["san martin de las piramides"] },
	{ value : "", tags : ["villa del carbon"] },
	{ value : "", tags : ["cuitzeo del porvenir"] },
	{ value : "", tags : ["jiquilpan de juarez"] },
	{ value : "", tags : ["mineral de angangueo"] },
	{ value : "", tags : ["patzcuaro"] },
	{ value : "", tags : ["santa clara del cobre"] },
	{ value : "", tags : ["tacambaro"] },
	{ value : "", tags : ["tlalpajahua"] },
	{ value : "", tags : ["tzintzuntzan"] },
	{ value : "", tags : ["tepoztlan"] },
	{ value : "", tags : ["tlayacapan"] },
	{ value : "", tags : ["sayulita"] },
	{ value : "", tags : ["santiago"] },
	{ value : "", tags : ["linares"] },
	{ value : "", tags : ["capulalpam de mendez"] },
	{ value : "", tags : ["huautla de jimenez"] },
	{ value : "", tags : ["mazunte"] },
	{ value : "", tags : ["san pablo villa mitla"] },
	{ value : "", tags : ["san pedro y san pablo teposcolula"] },
	{ value : "", tags : ["chignahuapan"] },
	{ value : "", tags : ["cuetzalan"] },
	{ value : "", tags : ["pahuatlan"] },
	{ value : "", tags : ["san pedro cholula"] },
	{ value : "", tags : ["tlatlaquitepec"] },
	{ value : "", tags : ["xicotepec"] },
	{ value : "", tags : ["zacatlan"] },
	{ value : "", tags : ["atlixco"] },
	{ value : "", tags : ["huauchinango"] },
	{ value : "", tags : ["bernal"] },
	{ value : "", tags : ["cadereyta de montes"] },
	{ value : "", tags : ["jalpan de serra"] },
	{ value : "", tags : ["tequisquiapan"] },
	{ value : "", tags : ["san joaquin"] },
	{ value : "", tags : ["bacalar"] },
	{ value : "", tags : ["isla mujeres"] },
	{ value : "", tags : ["tulum"] },
	{ value : "", tags : ["real de catorce"] },
	{ value : "", tags : ["xilitla"] },
	{ value : "", tags : ["cosala"] },
	{ value : "", tags : ["el rosario"] },
	{ value : "", tags : ["el fuerte"] },
	{ value : "", tags : ["mocorito"] },
	{ value : "", tags : ["alamos"] },
	{ value : "", tags : ["magdalena de kino"] },
	{ value : "", tags : ["tapijulapa"] },
	{ value : "", tags : ["mier"] },
	{ value : "", tags : ["tula"] },
	{ value : "", tags : ["huamantla"] },
	{ value : "", tags : ["tlaxco"] },
	{ value : "", tags : ["coatepec"] },
	{ value : "", tags : ["papantla"] },
	{ value : "", tags : ["xico"] },
	{ value : "", tags : ["coscomatepec"] },
	{ value : "", tags : ["orizaba"] },
	{ value : "", tags : ["izamal"] },
	{ value : "", tags : ["valladolid"] },
	{ value : "", tags : ["jerez de garcia salinas"] },
	{ value : "", tags : ["nochistlan de mejia"] },
	{ value : "", tags : ["pinos"] },
	{ value : "", tags : ["sombrerete"] },
	{ value : "", tags : ["teul de gonzalez ortega"] }
 ];

var stateTown = [
{value : "teul de gonzalez ortega",tags : ["zacatecas"]},
{value : "sombrerete",tags : ["zacatecas"]},
{value : "pinos",tags : ["zacatecas"]},
{value : "nochistlan de mejia",tags : ["zacatecas"]},
{value : "jerez de garcia salinas",tags : ["zacatecas"]},
{value : "valladolid",tags : ["yucatan"]},
{value : "izamal",tags : ["yucatan"]},
{value : "orizaba",tags : ["veracruz"]},
{value : "coscomatepec",tags : ["veracruz"]},
{value : "xico",tags : ["veracruz"]},
{value : "papantla",tags : ["veracruz"]},
{value : "coatepec",tags : ["veracruz"]},
{value : "tlaxco",tags : ["tlaxcala"]},
{value : "huamantla",tags : ["tlaxcala"]},
{value : "tula",tags : ["tamaulipas"]},
{value : "mier",tags : ["tamaulipas"]},
{value : "tapijulapa",tags : ["tabasco"]},
{value : "magdalena de kino",tags : ["sonora"]},
{value : "alamos",tags : ["sonora"]},
{value : "mocorito",tags : ["sinaloa"]},
{value : "el fuerte",tags : ["sinaloa"]},
{value : "el rosario",tags : ["sinaloa"]},
{value : "cosala",tags : ["sinaloa"]},
{value : "xilitla",tags : ["san luis potosi"]},
{value : "real de catorce",tags : ["san luis potosi"]},
{value : "tulum",tags : ["quintana roo"]},
{value : "isla mujeres",tags : ["quintana roo"]},
{value : "bacalar",tags : ["quintana roo"]},
{value : "san joaquin",tags : ["queretaro"]},
{value : "tequisquiapan",tags : ["queretaro"]},
{value : "jalpan de serra",tags : ["queretaro"]},
{value : "cadereyta de montes",tags : ["queretaro"]},
{value : "bernal",tags : ["queretaro"]},
{value : "huauchinango",tags : ["puebla"]},
{value : "atlixco",tags : ["puebla"]},
{value : "zacatlan",tags : ["puebla"]},
{value : "xicotepec",tags : ["puebla"]},
{value : "tlatlaquitepec",tags : ["puebla"]},
{value : "san pedro cholula",tags : ["puebla"]},
{value : "pahuatlan",tags : ["puebla"]},
{value : "cuetzalan",tags : ["puebla"]},
{value : "chignahuapan",tags : ["puebla"]},
{value : "san pedro y san pablo teposcolula",tags : ["oaxaca"]},
{value : "san pablo villa mitla",tags : ["oaxaca"]},
{value : "mazunte",tags : ["oaxaca"]},
{value : "huautla de jimenez",tags : ["oaxaca"]},
{value : "capulalpam de mendez",tags : ["oaxaca"]},
{value : "linares",tags : ["nuevo leon"]},
{value : "santiago",tags : ["nuevo leon"]},
{value : "sayulita",tags : ["nayarit"]},
{value : "jala",tags : ["nayarit"]},
{value : "tlayacapan",tags : ["morelos"]},
{value : "tepoztlan",tags : ["morelos"]},
{value : "tzintzuntzan",tags : ["michoacan"]},
{value : "tlalpajahua",tags : ["michoacan"]},
{value : "tacambaro",tags : ["michoacan"]},
{value : "santa clara del cobre",tags : ["michoacan"]},
{value : "patzcuaro",tags : ["michoacan"]},
{value : "mineral de angangueo",tags : ["michoacan"]},
{value : "jiquilpan de juarez",tags : ["michoacan"]},
{value : "cuitzeo del porvenir",tags : ["michoacan"]},
{value : "villa del carbon",tags : ["ciudad de mexico"]},
{value : "san martin de las piramides",tags : ["ciudad de mexico"]},
{value : "ixtapan de la sal",tags : ["ciudad de mexico"]},
{value : "aculco",tags : ["ciudad de mexico"]},
{value : "valle de bravo",tags : ["ciudad de mexico"]},
{value : "tepotzotlan",tags : ["ciudad de mexico"]},
{value : "metepec",tags : ["ciudad de mexico"]},
{value : "malinalco",tags : ["ciudad de mexico"]},
{value : "el oro de hidalgo",tags : ["ciudad de mexico"]},
{value : "talpa de allende",tags : ["jalisco"]},
{value : "mascota",tags : ["jalisco"]},
{value : "tequila",tags : ["jalisco"]},
{value : "tapalpa",tags : ["jalisco"]},
{value : "san sebastian del oeste",tags : ["jalisco"]},
{value : "mazamitla",tags : ["jalisco"]},
{value : "lagos de moreno",tags : ["jalisco"]},
{value : "tecozautla",tags : ["hidalgo"]},
{value : "real de monte",tags : ["hidalgo"]},
{value : "mineral del chico",tags : ["hidalgo"]},
{value : "huichapan",tags : ["hidalgo"]},
{value : "huasca de ocampo",tags : ["hidalgo"]},
{value : "taxco",tags : ["guerrero"]},
{value : "yuriria",tags : ["guanajuato"]},
{value : "salvatierra",tags : ["guanajuato"]},
{value : "mineral de pozos",tags : ["guanajuato"]},
{value : "jalpa de canovas",tags : ["guanajuato"]},
{value : "dolores hidalgo",tags : ["guanajuato"]},
{value : "mapimi",tags : ["durango"]},
{value : "casas grandes",tags : ["chihuahua"]},
{value : "creel",tags : ["chihuahua"]},
{value : "batopilas",tags : ["chihuahua"]},
{value : "palenque",tags : ["chiapas"]},
{value : "san cristobal de las casas",tags : ["chiapas"]},
{value : "comitan de dominguez",tags : ["chiapas"]},
{value : "chiapa de corzo",tags : ["chiapas"]},
{value : "comala",tags : ["colima"]},
{value : "guerrero",tags : ["coahuila"]},
{value : "candela",tags : ["coahuila"]},
{value : "viesca",tags : ["coahuila"]},
{value : "parras de la fuente",tags : ["coahuila"]},
{value : "cuatro cienegas",tags : ["coahuila"]},
{value : "arteaga",tags : ["coahuila"]},
{value : "palizada",tags : ["campeche"]},
{value : "todos santos",tags : ["baja california sur"]},
{value : "loreto",tags : ["baja california sur"]},
{value : "tecate",tags : ["baja california"]},
{value : "san jose de gracia",tags : ["aguascalientes"]},
{value : "real de asientos",tags : ["aguascalientes"]},
{value : "calvillo", tags : ["aguascalientes"]}
];

//list of all available states
var statesList = [
 "zacatecas",
 "yucatan",
 "veracruz",
 "tlaxcala",
 "tamaulipas",
 "tabasco",
 "sonora",
 "sinaloa",
 "san luis potosi",
 "quintana roo",
 "queretaro",
 "puebla",
 "oaxaca",
 "nuevo leon",
 "nayarit",
 "morelos",
 "michoacan",
 "jalisco",
 "hidalgo",
 "guerrero",
 "guanajuato",
 "durango",
 "colima",
 "coahuila",
 "chihuahua",
 "ciudad de mexico",
 "chiapas",
 "baja california sur",
 "baja california",
 "aguascalientes"
];

//list of all available magic towns
var magicTowns = [
 "teul de gonzalez ortega",
 "sombrerete",
 "pinos",
 "nochistlan de mejia",
 "jerez de garcia salinas",
 "valladolid",
 "izamal",
 "orizaba",
 "coscomatepec",
 "xico",
 "papantla",
 "coatepec",
 "tlaxco",
 "huamantla",
 "tula",
 "mier",
 "tapijulapa",
 "magdalena de kino",
 "alamo",
 "mocorito",
 "el fuerte",
 "el rosario",
 "cosala",
 "xilitla",
 "real de catorce",
 "tulum",
 "isla mujeres",
 "bacalar",
 "san joaquin",
 "tequisquiapan",
 "jalpan de serra",
 "cadereyta de montes",
 "bernal",
 "huauchinango",
 "atlixco",
 "zacatlan",
 "xicotepec",
 "tlatlaquitepec",
 "san pedro cholula",
 "pahuatlan",
 "cuetzalan",
 "chignahuapan",
 "san pedro y san pablo teposcolula",
 "san pablo villa mitla",
 "mazunte",
 "huautla de jimenez",
 "capulalpam de mendez",
 "linares",
 "santiago",
 "sayulita",
 "jala",
 "tlayacapan",
 "tepoztlan",
 "tzintzuntzan",
 "tlalpajahua",
 "tacambaro",
 "santa clara del cobre",
 "patzcuaro",
 "mineral de angangueo",
 "jiquilpan de juarez",
 "cuitzeo del porvenir",
 "villa del carbon",
 "san martin de las piramides",
 "ixtapan de la sal",
 "aculco",
 "valle de bravo",
 "tepotzotlan",
 "metepec",
 "malinalco",
 "el oro de hidalgo",
 "talpa de allende",
 "mascota",
 "tequila",
 "tapalpa",
 "san sebastian del oeste",
 "mazamitla",
 "lagos de moreno",
 "tecozautla",
 "real de monte",
 "mineral del chico",
 "huichapan",
 "huasca de ocampo",
 "taxco",
 "yuriria",
 "salvatierra",
 "mineral de pozos",
 "jalpa de canovas",
 "dolores hidalgo",
 "mapimi",
 "casas grandes",
 "creel",
 "batopilas",
 "palenque",
 "san cristobal de las casas",
 "comitan de dominguez",
 "chiapa de corzo",
 "comala",
 "guerrero",
 "candela",
 "viesca",
 "parras de la fuente",
 "cuatro cienegas",
 "arteaga",
 "palizada",
 "todos santos",
 "loreto",
 "tecate",
 "san jose de gracia",
 "real de asientos",
 "calvillo"
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

var CARD_TITLE ="Pueblos Magicos en Mexico"; // Be sure to change this for your skill.
var RESPONSE_NO_ANSWER ="No cuento con información de ese estado ó pueblo mágico.";
var RESPONSE_NO_TOWNS = "No tengo ningun pueblo mágico con ese nombre.";
var RESPONSE_NO_TOWNS_STATE = "No tengo ningun pueblo mágico en ese estado.";
var RESPONSE_NO_TOWNS_INFO = "No tengo información de ese pueblo mágico";
var AMZN_APP_ID = "amzn1.ask.skill.";

function getWelcomeResponse(callback) {
    var sessionAttributes = {},
        speechOutput = "Puedes pedirme información sobre los pueblos magicos que hay en México. Puedes especificar el pueblo mágico o la ciudad para información más precisa.",
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
      speechOutput = "Mexico tiene aproximadamente " + numQuestions + " pueblos mágicos";
    }

    repromptText = speechOutput;

    callback(sessionAttributes,
                 buildSpeechletResponse("Pueblos mágicos en México",speechOutput, repromptText, false));
}

function handleNumberOfTownsState(intent, session, callback) {
    var sessionAttributes = {},
        speechOutput,
        repromptText,
        townsInState;

    // User specified State
    townsInState = getElementsByTags([intent.slots.estados.value.toLowerCase()], stateTown).length;

    if(townsInState < 1){
      speechOutput = RESPONSE_NO_TOWNS_STATE;
    }else{
      speechOutput = intent.slots.estados.value +" tiene aproximadamente " + townsInState + " pueblos mágicos";
    }

    repromptText = speechOutput;

    callback(sessionAttributes,
                 buildSpeechletResponse("Pueblos mágicos en " + intent.slots.estados.value, speechOutput, repromptText, false));
}

function handleNameOfTownsState(intent, session, callback) {
    var sessionAttributes = {},
        speechOutput,
        repromptText,
        townsInState,
		outtown,
		x;
	
    // User specified State
    townsInState = getElementsByTags([intent.slots.estados.value.toLowerCase()], stateTown);
    outtown="";
    if(townsInState < 1){
      speechOutput = RESPONSE_NO_TOWNS_STATE;
    }else{
		for(x=0;x<townsInState.length-1;x++){
			outtown+=townsInState[x].value+" , ";
		}
      speechOutput = "Los pueblos mágicos en esa ciudad son " + outtown;
    }

    repromptText = speechOutput;

    callback(sessionAttributes,
                 buildSpeechletResponse("Pueblos mágicos en " + intent.slots.estados.value, speechOutput, repromptText, false));
}

function handleTownRandom(intent, session, callback) {
   var sessionAttributes = {},
        speechOutput,
        repromptText,
		numRan,
		x
		;
	x = Math.floor(Math.random() * facts.length-1);
    numRan = facts[x];
	
    if(numRan){
      speechOutput = numRan.value;
    }else{
      speechOutput = "Perdona eso no lo sé";
    }

    repromptText = speechOutput;
    callback(sessionAttributes,
                 buildSpeechletResponseWithoutCard( speechOutput, repromptText, false));
}

function handleTownState(intent, session, callback) {
    var sessionAttributes = {},
        speechOutput,
        repromptText,
		factTown;

    // User specified State
    factTown = getElementsByTags([intent.slots.puebloMagico.value.toLowerCase()], facts);

    if(factTown < 1){
      speechOutput =  RESPONSE_NO_TOWNS_INFO;
    }else{
      speechOutput =  "Pueblo Mágico: " + factTown[0].value;
    }

    repromptText = speechOutput;
    callback(sessionAttributes,
                 buildSpeechletResponse(factTown.value, speechOutput, repromptText, false));
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

    var speechOutput ="Puedes decirme, 'Dime un pueblo mágico' "
            + "Tambien puedes especificar un pueblo mágico"
            + "por ejemplo, 'Dime más sobre Tequila"
			+ "Ademas la skill te ayudara a saber los pueblos magicos de un estado especifico"
			+ "por ejemplo, 'cuáles son los pueblos mágicos en Jalisco'"
        repromptText = speechOutput,
        shouldEndSession = false;

    callback(session.attributes,
        buildSpeechletResponseWithoutCard(speechOutput, repromptText, shouldEndSession));
}

function handleFinishSessionRequest(intent, session, callback) {
    // End the session with a"Good bye!" if the user wants to quit the game
    callback(session.attributes,
        buildSpeechletResponseWithoutCard("Hasta luego! Gracias por jugar conmigo","", true));
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
