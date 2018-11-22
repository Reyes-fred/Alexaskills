'use strict';

var facts = [
    { value : "calvillo has a number of attractions of interest to tourists. one of them is the main square, which dates from 1778 and is famous for its orange trees. calvillo is also home to the temple of our lord of the salitre; built in 1772, its interior features paintings that are considered jewels of religious art. the attractive dome topping the church has an exceptional size and diameter. its rarest feature is that it is made as a single architectural piece; there are only five domes of this style worldwide. the interior of the dome features exquisite frescoes depicting the life of st. joseph, the patron saint of the city. the guadalupe temple is another important church featuring majestic towers. another interesting place is the malpaso dam. the outskirts of calvillo are a magnet for tourists. the sierra del laurel, south of the town, is a prolongation of sierra fría and highly sought-after by rock climbers because of its steep sides. also nearby are the la cordorniz dam, and the ex-convent of the tepozán, where, at the bottom of the gully, there is a rocky area with cave paintings. the prehistoric paintings of el tepozan show diverse figures in different colors imprinted in various eras. very close to these two attractions, in the town of la panadera and chikis it is still practiced the old craft of embroidery and unthreading or 'deshilados', the state's craft by excellence. ", tags : ["calvillo"] },
    { value : "Real de Asientos is a small “magical town” in aguascalientes, a semi-desert town that used to be a mining outpost, visitors can tour underground tunnels, spot high-quality religious art, listen to stories about the state’s oldest cemetery or learn to shoot arrows like the chichimecas used to. on its different tours you will find places such as el galerón de los esclavos, where you will have the opportunity to glimpse an old world where slavery was legal. you will be amazed by the unusual contrasts and pink arches of the former convent of tepozá, and at museo vivo de cactáceas, you will discover a display of agave as well as exotic plants from south africa and madagascar. you can also walk around the old town where any of its monuments will dazzle you, including la casa larrañaga or la casa del minero, which feature sculpted religious anagrams in pink quarry stone and detailed ironwork on doors and windows.", tags : ["real de asientos"] },
    { value : "the origins of san josé de gracia go back to the time of the congregation of indigenous chichimecas who worked in the hacienda de garabato but when dying their last benefit was that they could settle in the foothills of the sierra fría, in a place that over time would be called 'de martha', this between the years 1673 and 1675. a place to visit is the broken christ, it has an associated legend with it and a poem as well. legend says that around the independence of mexico time, when the image arrived into the church in san jose de gracia, it arrived broken, and that it spoke told the would-be seller to leave him broken so that he would always have a reminder to think about his brothers and sisters without opportunities, without limbs", tags : ["san jose de gracia"] },
    { value : "tecate has been inhabited by kumiai nomadic peoples since time immemorial. today’s tecate grew under the cuchuma hill, the kumiai magic mountain, a sacred place of rounded rocks and connection to the universe. the first settlers left their mark nearby, at the el vallecito archeological site, where you will find the famous diablito (little devil). then came missions, ranchs and the border, but tecate continued to be a slow place where views extend over the horizon. en the early 1900s the beer factory arrive, bringing along the railroad, progress and finally the village as we know it was born. and the place named “acorn tree” by the kumiai was internationally known thanks to the beer. a tour of the interesting museo comunitario takes us to these three key moments of the magical town of tecate: the kumiai culture, the years of the ranches, and the railroad and the beer factory.if you want to learn more about the history of the magical town of tecate and would like to explore the surroundings you cannot miss a rare museum: campo alaska, formerly military barracks in the middle of nowhere housing a photographic exhibit about the site and temporary exhibits as well.", tags : ["tecate"] },
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
{value : "villa del carbon",tags : ["mexico"]},
{value : "san martin de las piramides",tags : ["mexico"]},
{value : "ixtapan de la sal",tags : ["mexico"]},
{value : "aculco",tags : ["mexico"]},
{value : "valle de bravo",tags : ["mexico"]},
{value : "tepotzotlan",tags : ["mexico"]},
{value : "metepec",tags : ["mexico"]},
{value : "malinalco",tags : ["mexico"]},
{value : "el oro de hidalgo",tags : ["mexico"]},
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
 "mexico",
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

var CARD_TITLE ="Magic Town Mexico"; // Be sure to change this for your skill.
var RESPONSE_NO_ANSWER ="I don't have that Magic Town or State";
var RESPONSE_NO_TOWNS = "I don't have any Magic Town.";
var RESPONSE_NO_TOWNS_STATE = "I don't have any Magic Town on that State.";
var RESPONSE_NO_TOWNS_INFO = "I don't have information of that Town.";
var AMZN_APP_ID = "amzn1.ask.skill.";

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
                 buildSpeechletResponse("Towns in Mexico",speechOutput, repromptText, false));
}

function handleNumberOfTownsState(intent, session, callback) {
    var sessionAttributes = {},
        speechOutput,
        repromptText,
        townsInState;

    // User specified State
    townsInState = getElementsByTags([intent.slots.states.value.toLowerCase()], stateTown).length;

    if(townsInState < 1){
      speechOutput = RESPONSE_NO_TOWNS_STATE;
    }else{
      speechOutput = intent.slots.states.value +" have approximately " + townsInState + " Magic Towns";
    }

    repromptText = speechOutput;

    callback(sessionAttributes,
                 buildSpeechletResponse("Towns in " + intent.slots.states.value, speechOutput, repromptText, false));
}

function handleNameOfTownsState(intent, session, callback) {
    var sessionAttributes = {},
        speechOutput,
        repromptText,
        townsInState,
		outtown,
		x;
	
    // User specified State
    townsInState = getElementsByTags([intent.slots.states.value.toLowerCase()], stateTown);
    outtown="";
    if(townsInState < 1){
      speechOutput = RESPONSE_NO_TOWNS_STATE;
    }else{
		for(x=0;x<townsInState.length-1;x++){
			outtown+=townsInState[x].value+" , ";
		}
      speechOutput = "The Magics Towns related are " + outtown;
    }

    repromptText = speechOutput;

    callback(sessionAttributes,
                 buildSpeechletResponse("Towns in " + intent.slots.states.value, speechOutput, repromptText, false));
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
      speechOutput = "Sorry something bad happen";
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
    factTown = getElementsByTags([intent.slots.magicTown.value.toLowerCase()], facts);

    if(factTown < 1){
      speechOutput =  RESPONSE_NO_TOWNS_INFO;
    }else{
      speechOutput =  "Magic Town: " + factTown[0].value;
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

    var speechOutput ="You can say, 'Give me a random Magic Town' "
            + "You can also specify a town"
            + "like this, 'Tell me more about Tequila"
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
