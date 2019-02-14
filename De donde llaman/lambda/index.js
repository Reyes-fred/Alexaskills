'use strict';

var AlexaSkill = require('./AlexaSkill'),
    areaCodes = require('./data');

var APP_ID = 'amzn1.ask.skill.'; //replace with ID

var AreaCodeHelper = function () {
    AlexaSkill.call(this, APP_ID);
};

// Extend AlexaSkill
AreaCodeHelper.prototype = Object.create(AlexaSkill.prototype);
AreaCodeHelper.prototype.constructor = AreaCodeHelper;

AreaCodeHelper.prototype.eventHandlers.onLaunch = function (launchRequest, session, response) {
    var speechText = {
        speech:  "<speak>Bienvenido a la skill De donde llaman. Puedes hacer preguntas como, "
                 +"busca el prefijo <say-as interpret-as='digits'>860</say-as> ? ... "
                 +"Listo?, ¿Qué prefijo quieres conocer?</speak>",
        type:   AlexaSkill.speechOutputType.SSML
    },
    // If the user either does not reply to the welcome message or says something that is not
    // understood, they will be prompted again with this text.
    repromptText = {
        speech: "Para escuchar las instrucciones, solo di ayuda.",
        type:   AlexaSkill.speechOutputType.PLAIN_TEXT
    };
    response.ask(speechText, repromptText);
};

AreaCodeHelper.prototype.intentHandlers = {
    "conocerprefijo": function (intent, session, response) {
        var itemSlot = intent.slots.Item,
            itemName;
        if (itemSlot && itemSlot.value){
            itemName = itemSlot.value.toLowerCase();
        }

        var cardTitle = "Prefijo de " + itemName,
            location,
            speechOutput,
            repromptOutput;
        
        
        if (itemName in areaCodes) {
            location = areaCodes[itemName].Description;
        }
        
        if (location) {
            var speechText = "<speak>La localidad para " + "<say-as interpret-as='digits'>" + itemName + "</say-as> es " + location + "</speak>";
            speechOutput = {
                speech: speechText,
                type: AlexaSkill.speechOutputType.SSML
            };
            response.tellWithCard(speechOutput, cardTitle, location);
        } else {
            var speech;
            if (itemName) {
                if (itemName === "?") {
                    speech = "<speak>Perdona, No entendi. Porfavor di ... 'busca el prefijo' ... seguido de los digitos del prefijo.</speak>";
                } else {
                    speech = "<speak>Perdona. No pude encontrar el código" + "<say-as interpret-as='digits'>" + itemName + "</say-as>"
                           + ". Porfavor di ... 'busca el prefijo' ... seguido de los digitos del prefijo.</speak>";
                }
            } else {
                speech = "<speak>Perdona. No pude encontrar el código.  Porfavor di ... 'busca el prefijo' ... seguido de los digitos del prefijo.</speak>";
            }
            speechOutput = {
                speech: speech,
                type: AlexaSkill.speechOutputType.SSML
            };
            repromptOutput = {
                speech: "Porfavor di ... 'busca el prefijo' ... seguido de los digitos del prefijo, or di cancela,  para salir.",
                type: AlexaSkill.speechOutputType.PLAIN_TEXT
            };
            response.ask(speechOutput, repromptOutput);
        }
    }, 

    "AMAZON.StopIntent": function (intent, session, response) {
        var speechOutput = "Adios";
        response.tell(speechOutput);
    },

    "AMAZON.CancelIntent": function (intent, session, response) {
        var speechOutput = "Adios";
        response.tell(speechOutput);
    },

    "AMAZON.HelpIntent": function (intent, session, response) {
        var speechText = {
            speech:  "<speak>Puedes obtener la localidad para cualquier prefijo, solo di, "
                    +"busca el prefijo <say-as interpret-as='digits'>860</say-as> ? ... "
                    +"Listo, ¿Qué codigo quieres buscar?</speak>",
            type:   AlexaSkill.speechOutputType.SSML
        },
        // If the user either does not reply to the welcome message or says something that is not
        // understood, they will be prompted again with this text.
        repromptText = {
            speech: "Para escuchar las instrucciones, solo ayuda.",
            type:   AlexaSkill.speechOutputType.PLAIN_TEXT
        };
        response.ask(speechText, repromptText);
    }
};

exports.handler = function (event, context) {
    var areaCodeHelper = new AreaCodeHelper();
    areaCodeHelper.execute(event, context);
};
