# -*- coding: utf-8 -*-

# This sample demonstrates handling intents from an Alexa skill using the Alexa Skills Kit SDK for Python.
# Please visit https://alexa.design/cookbook for additional examples on implementing slots, dialog management,
# session persistence, api calls, and more.
# This sample is built using the handler classes approach in skill builder.
import logging
import ask_sdk_core.utils as ask_utils

from ask_sdk_core.skill_builder import SkillBuilder
from ask_sdk_core.dispatch_components import AbstractRequestHandler
from ask_sdk_core.dispatch_components import AbstractExceptionHandler
from ask_sdk_core.handler_input import HandlerInput

from ask_sdk_model import Response

logger = logging.getLogger(__name__)
logger.setLevel(logging.INFO)


class LaunchRequestHandler(AbstractRequestHandler):
    """Handler for Skill Launch."""
    def can_handle(self, handler_input):
        # type: (HandlerInput) -> bool

        return ask_utils.is_request_type("LaunchRequest")(handler_input)

    def handle(self, handler_input):
        # type: (HandlerInput) -> Response
        speak_output = "Hola, buenas noches a todos, espero que esten muy bien, gracias a todos por venir a mi conferencia."
        return (
            handler_input.response_builder
                .speak(speak_output)
                .ask("¿Están listos?")
                .response
        )


class presentateIntentHandler(AbstractRequestHandler):
    """Handler for Hello World Intent."""
    def can_handle(self, handler_input):
        # type: (HandlerInput) -> bool
        return ask_utils.is_intent_name("presentate")(handler_input)

    def handle(self, handler_input):
        # type: (HandlerInput) -> Response
        speak_output = "Estoy muy emocianada, veamos, mi nombre es alexa, soy una asistente virtual desarrollada por amazon, fui creada con el proposito de ayudarlos en su vida diaria todo a traves de su voz, pueden preguntarme o bien pedirme controlar dispositivos inteligentes"

        return (
            handler_input.response_builder
                .speak(speak_output)
                .set_should_end_session(False)
                .response
        )

class funcionalidadesIntentHandler(AbstractRequestHandler):
    """Handler for Hello World Intent."""
    def can_handle(self, handler_input):
        # type: (HandlerInput) -> bool
        return ask_utils.is_intent_name("funcionalidades")(handler_input)

    def handle(self, handler_input):
        # type: (HandlerInput) -> Response
        speak_output = "Solo imaginen esta situación, ustedes estan en su cama y se les olvida apagar la luz. Tendrian que parase e ir a apagar la luz y eso no suena muy agradable, para eso estoy yo, podrian decirme Alexa, apaga la luz de la cocina, es mucho más divertido y rápido."

        return (
            handler_input.response_builder
                .speak(speak_output)
                .set_should_end_session(False)
                .response
        )

class habilidadesIntentHandler(AbstractRequestHandler):
    """Handler for Hello World Intent."""
    def can_handle(self, handler_input):
        # type: (HandlerInput) -> bool
        return ask_utils.is_intent_name("habilidades")(handler_input)

    def handle(self, handler_input):
        # type: (HandlerInput) -> Response
        speak_output = "Siempre me gusta aprender más, ahora puedo hacer muchas cosas yo misma, pero siempre estoy aprendiendo gracias a ustedes. Ustedes pueden enseñarme nuevas habilidades para ayudarlos en todas las tareas que deseen, por ejemplo podrian enseñarme a controlar esta presentación y yo estaria encantada de ayudar."

        return (
            handler_input.response_builder
                .speak(speak_output)
                .set_should_end_session(False)
                .response
        )

class comofuncionaIntentHandler(AbstractRequestHandler):
    """Handler for Hello World Intent."""
    def can_handle(self, handler_input):
        # type: (HandlerInput) -> bool
        return ask_utils.is_intent_name("comofunciona")(handler_input)

    def handle(self, handler_input):
        # type: (HandlerInput) -> Response
        speak_output = "basicamente funciono a traves de dos modulos, el primero es el que me permite entender qué es lo que ustedes me dicen y una vez que lo entiendo entra el segundo modulo que me permite realizar la acción que ustedes me ordenen. Funciono a traves de ciertos enunciados que más adelante mi amigo alfredo les explicará. "

        return (
            handler_input.response_builder
                .speak(speak_output)
                .set_should_end_session(False)
                .response
        )

class devicesIntentHandler(AbstractRequestHandler):
    """Handler for Hello World Intent."""
    def can_handle(self, handler_input):
        # type: (HandlerInput) -> bool
        return ask_utils.is_intent_name("devices")(handler_input)

    def handle(self, handler_input):
        # type: (HandlerInput) -> Response
        speak_output = "es emocionante porque cada vez me pueden encontrar en muchos lugares, ahora estoy en varios dispositivos como por ejemplo, en audífonos, en sus celulares, en bocinas proximamente en sus lentes o en un anillo."

        return (
            handler_input.response_builder
                .speak(speak_output)
                .set_should_end_session(False)
                .response
        )

class alexaagriculturaIntentHandler(AbstractRequestHandler):
    """Handler for Hello World Intent."""
    def can_handle(self, handler_input):
        # type: (HandlerInput) -> bool
        return ask_utils.is_intent_name("alexaagricultura")(handler_input)

    def handle(self, handler_input):
        # type: (HandlerInput) -> Response
        speak_output = "me gustaría mucho poder ayudarles a conseguir sus retos, tengo varias ideas, pero creo que seria hacer trampa, pero imaginen y no paren de imaginar veran que puedo ayudarlos en todos sus proyectos."

        return (
            handler_input.response_builder
                .speak(speak_output)
                .set_should_end_session(False)
                .response
        )

class HelpIntentHandler(AbstractRequestHandler):
    """Handler for Help Intent."""
    def can_handle(self, handler_input):
        # type: (HandlerInput) -> bool
        return ask_utils.is_intent_name("AMAZON.HelpIntent")(handler_input)

    def handle(self, handler_input):
        # type: (HandlerInput) -> Response
        speak_output = "Perdona tuve una confusion, puedes volver a preguntarme?"

        return (
            handler_input.response_builder
                .speak(speak_output)
                .ask(speak_output)
                .response
        )


class CancelOrStopIntentHandler(AbstractRequestHandler):
    """Single handler for Cancel and Stop Intent."""
    def can_handle(self, handler_input):
        # type: (HandlerInput) -> bool
        return (ask_utils.is_intent_name("AMAZON.CancelIntent")(handler_input) or
                ask_utils.is_intent_name("AMAZON.StopIntent")(handler_input))

    def handle(self, handler_input):
        # type: (HandlerInput) -> Response
        speak_output = "Goodbye!"

        return (
            handler_input.response_builder
                .speak(speak_output)
                .response
        )


class SessionEndedRequestHandler(AbstractRequestHandler):
    """Handler for Session End."""
    def can_handle(self, handler_input):
        # type: (HandlerInput) -> bool
        return ask_utils.is_request_type("SessionEndedRequest")(handler_input)

    def handle(self, handler_input):
        # type: (HandlerInput) -> Response

        # Any cleanup logic goes here.

        return handler_input.response_builder.response


class IntentReflectorHandler(AbstractRequestHandler):
    """The intent reflector is used for interaction model testing and debugging.
    It will simply repeat the intent the user said. You can create custom handlers
    for your intents by defining them above, then also adding them to the request
    handler chain below.
    """
    def can_handle(self, handler_input):
        # type: (HandlerInput) -> bool
        return ask_utils.is_request_type("IntentRequest")(handler_input)

    def handle(self, handler_input):
        # type: (HandlerInput) -> Response
        intent_name = ask_utils.get_intent_name(handler_input)
        speak_output = "You just triggered " + intent_name + "."

        return (
            handler_input.response_builder
                .speak(speak_output)
                # .ask("add a reprompt if you want to keep the session open for the user to respond")
                .response
        )


class CatchAllExceptionHandler(AbstractExceptionHandler):
    """Generic error handling to capture any syntax or routing errors. If you receive an error
    stating the request handler chain is not found, you have not implemented a handler for
    the intent being invoked or included it in the skill builder below.
    """
    def can_handle(self, handler_input, exception):
        # type: (HandlerInput, Exception) -> bool
        return True

    def handle(self, handler_input, exception):
        # type: (HandlerInput, Exception) -> Response
        logger.error(exception, exc_info=True)

        speak_output = "Perdona tuve un error, porfavor vuelve a intentar."

        return (
            handler_input.response_builder
                .speak(speak_output)
                .ask(speak_output)
                .response
        )

# The SkillBuilder object acts as the entry point for your skill, routing all request and response
# payloads to the handlers above. Make sure any new handlers or interceptors you've
# defined are included below. The order matters - they're processed top to bottom.


sb = SkillBuilder()

sb.add_request_handler(LaunchRequestHandler())
sb.add_request_handler(presentateIntentHandler())
sb.add_request_handler(funcionalidadesIntentHandler())
sb.add_request_handler(habilidadesIntentHandler())
sb.add_request_handler(comofuncionaIntentHandler())
sb.add_request_handler(devicesIntentHandler())
sb.add_request_handler(alexaagriculturaIntentHandler())
sb.add_request_handler(HelpIntentHandler())
sb.add_request_handler(CancelOrStopIntentHandler())
sb.add_request_handler(SessionEndedRequestHandler())
sb.add_request_handler(IntentReflectorHandler()) # make sure IntentReflectorHandler is last so it doesn't override your custom intent handlers

sb.add_exception_handler(CatchAllExceptionHandler())

lambda_handler = sb.lambda_handler()
