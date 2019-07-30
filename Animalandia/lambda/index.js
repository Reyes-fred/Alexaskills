/* eslint-disable  func-names */
/* eslint-disable  no-console */

const Alexa = require('ask-sdk-core');

function supportsAPL(handlerInput) {
    const supportedInterfaces = handlerInput.requestEnvelope.context.System.device.supportedInterfaces;
    const aplInterface = supportedInterfaces['Alexa.Presentation.APL'];
    return aplInterface != null && aplInterface != undefined;
}

const LaunchRequestHandler = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'LaunchRequest';
  },
  handle(handlerInput) {
    const speechText = 'Bienvenido a la skill de animalandia, ¿qué sonido de animal deseas escuchar?';

    return handlerInput.responseBuilder
      .speak(speechText)
      .reprompt(speechText)
      .withSimpleCard('Animal Sounds APL', speechText)
      .getResponse();
  },
};

const AnimalSoundIntentHandler = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'IntentRequest'
      && handlerInput.requestEnvelope.request.intent.name === 'AnimalSoundIntent';
  },
  handle(handlerInput) {
    const animalData = {
      gato: {sound: 'miau', image: 'https://image.freepik.com/free-vector/cute-kitten-white_1308-30945.jpg'},
      perro: {sound: 'woof', image: 'https://image.freepik.com/free-vector/little-dog-with-brown-fur_1308-9132.jpg'},
      vaca: {sound: 'moooo', image: 'https://img.freepik.com/free-vector/cow-sticker-template_1308-22110.jpg?size=626&ext=jpg'},
      pato: {sound: 'cuacc cuac', image: 'https://image.freepik.com/free-vector/goose-white-background_1308-23304.jpg'},
      pollo: {sound: 'pio pio', image: 'https://img.freepik.com/free-vector/three-little-chicks-basket_1308-30142.jpg?size=626&ext=jpg'},
      lobo: {sound: 'aúúú', image: 'https://image.freepik.com/free-vector/hand-painted-wolf-design_1152-84.jpg'},
      gallo: {sound: 'quiquiriquí', image: 'https://image.freepik.com/free-vector/black-rooster-realistic-side-view-image_1284-14467.jpg'},
      rana: {sound: 'croá croá', image: 'https://image.freepik.com/free-vector/green-frog-white-backgound_1308-21867.jpg'},
      oveja: {sound: 'bee bee', image: 'https://image.freepik.com/free-vector/white-sheep-character_1308-23895.jpg'},
      cochino: {sound: 'oink oink', image: 'https://image.freepik.com/free-vector/cute-little-pig-sitting-white-background-illustration_1262-16818.jpg'}
    };

   
   let requestedAnimal = handlerInput.requestEnvelope.request.intent.slots.animal.value;
   
    if(animalData.hasOwnProperty(requestedAnimal)){
    let requestedAnimalSound = animalData[requestedAnimal].sound;
    let requestedAnimalImage = animalData[requestedAnimal].image;

    let speechText = `${requestedAnimal.charAt(0).toUpperCase()}${requestedAnimal.slice(1)} dice ${requestedAnimalSound}!`;

if(supportsAPL(handlerInput))
    {
      return handlerInput.responseBuilder
        .speak(speechText)
        .addDirective({
          type: 'Alexa.Presentation.APL.RenderDocument',
          version: '1.0',
          document: require('./aplDocuments/animalSound.json'),
          datasources: {
            'animalSoundData': {
              'message': speechText,
              'image': requestedAnimalImage
            }
          }
        })
        .getResponse();
    }
    else{
      return handlerInput.responseBuilder
      .speak(speechText)
      .reprompt(speechText)
      .withSimpleCard('Sonido Animales', speechText)
      .getResponse();
    }
    }
    else{
      let speechText = "Perdona ese animal, no lo se, porfavor intenta con otro."
       return handlerInput.responseBuilder
      .speak(speechText)
      .reprompt(speechText)
      .withSimpleCard('Sonido Animales', speechText)
      .getResponse();
      
    }
  },
};

const HelpIntentHandler = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'IntentRequest'
      && handlerInput.requestEnvelope.request.intent.name === 'AMAZON.HelpIntent';
  },
  handle(handlerInput) {
    const speechText = 'Este skill te puede ayudar a saber como hacen los animales, por ejemplo, ¿como hace el perro?, ¿qué animal quieres escuchar?';

    return handlerInput.responseBuilder
      .speak(speechText)
      .reprompt(speechText)
      .withSimpleCard('Sonido Animales', speechText)
      .getResponse();
  },
};

const CancelAndStopIntentHandler = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'IntentRequest'
      && (handlerInput.requestEnvelope.request.intent.name === 'AMAZON.CancelIntent'
        || handlerInput.requestEnvelope.request.intent.name === 'AMAZON.StopIntent');
  },
  handle(handlerInput) {
    const speechText = 'Hasta luego, gracias por usar Animalandia!';

    return handlerInput.responseBuilder
      .speak(speechText)
      .withSimpleCard('Sonido Animales', speechText)
      .getResponse();
  },
};

const SessionEndedRequestHandler = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'SessionEndedRequest';
  },
  handle(handlerInput) {
    console.log(`Session ended with reason: ${handlerInput.requestEnvelope.request.reason}`);

    return handlerInput.responseBuilder.getResponse();
  },
};

const ErrorHandler = {
  canHandle() {
    return true;
  },
  handle(handlerInput, error) {
    console.log(`Error handled: ${error.message}`);

    return handlerInput.responseBuilder
      .speak('Disculpa, Eso no lo entiendo, porfavor vuelve a intentarlo.')
      .reprompt('Disculpa, Eso no lo entiendo, porfavor vuelve a intentarlo.')
      .getResponse();
  },
};

const skillBuilder = Alexa.SkillBuilders.custom();

exports.handler = skillBuilder
  .addRequestHandlers(
    LaunchRequestHandler,
    AnimalSoundIntentHandler,
    HelpIntentHandler,
    CancelAndStopIntentHandler,
    SessionEndedRequestHandler
  )
  .addErrorHandlers(ErrorHandler)
.lambda();
