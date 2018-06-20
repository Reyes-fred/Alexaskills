import random

magictowns = [
  "Todos Santos, is just a one hour drive from Cabo San Lucas situated at the foothills of the Sierra de la Laguna Mountains. An oasis in the middle of a desert peninsula, this small town offers a friendly atmosphere and laid-back approach to life. ",
  "Loreto, is four hours from La Paz. Both beach destinations, Loreto is one of the oldest settlements in Baja and offers authentic local culture paired with unspoiled paradises. Visitors can wander through its history of Spanish missionaries, visit caves that tell a story through prehistoric paintings, or simply enjoy the nature and islands of the Sea of Cortez",
  "San Sebastian, is one and a half hours from Puerto Vallarta located at the foot of the Western Sierra Madre mountains. Once the most important mining city with over 20,000 residents, today there are only around 600 who have stayed to preserve this special relic.",
  "Sayulita, is just a 30 minute drive from Punta Mita. This small, seaside surfer town and funking fishing village offers a laid-back, bohemian vibe with no shortage of friendly locals and colorful shops, cafes, and restaurants. Sayulita lends to new experiences, whether it is learning to surf for the first time, discovering local indigenous Huichol culture, or  making friends with visitors from around the world.",
  "Isla Mujeres, is a 25 minute ferry ride from Cancun. This island is surrounded with varied shades of calm, turqoise waters surrounding reefs full of tropical fish. The unhurried lifestyle and unqiue Carribean culture of Isla Mujeres is a stark contrast from the mainland of Cancun and a refreshing memory of simpler days. Once a hiding place for pirates, today all who visit Isla Mujeres find it to be a true treasure and special mark on the map",
  "Tulum, is just one hour from Playa del Carmen located at the southernmost tip of the Riviera Maya. Once an off the beaten path coastal destination known for its picturesque archaeological site perched on a cliff overlooking the sea, today, Tulum has grown into a world-class tourism destination. While most people head to Tulum for the hippie-chic boutique hotels and organic, off-the-grid restaurants, the real magic lies in Mother Nature’s surrounding gifts",
  "Bacalar, is a three hour drive from Playa del Carmen. Known as the ¨Lagoon of Seven Colors¨ Bacalar´s  varied water depths create a unique gradient of blue tones across the lake. Within Bacalar´s lagoon is Cenote Azul, a way of communication for freshwater and a mystical-Mayan sinkhole surrounded by jungle vegetation,perfect for snorklers and scuba divers.", 
  "Taxco, is a four hour drive inland from Acapulco and forms part of the “Triangle of the Sun” tourist route. Formally one of the most important silver mining-towns, this pictureqesque village is best discovered by wandering the narrow cobblestoned alleys in search for the perfect silver jewelry or art still crafted there today."
  "Mazunte is a one hour drive from Puerto Escondido. The magic of Mazunte lies in its simplicity as this coastal town focuses on the natural environment and how to make it attractive to visitors without too much disruption. It all started with The Museum of Sea Tutles, an ecotourism project created in the 1970s when the hunting of turtles in the area was at its height; today Mazunte has now stood out for their continuation of developing sustainable strategies and care for the wider natural environment",
  "Cosalá, is a two and a half hour drive from Mazatlan. Cosalá’s history dates back more than two thousand years ago when pre-Hispanic tribes settled as evidenced by their petroglyphs that remain today. Later, Spanish conquerors discovered mines and the area’s mineral richness fed colonial ambition with gold and silver for centuries. Today the town is surprising colorful for the gloomy mysteries left to be discovered: a church built ontop of a graveyard of its deveotees, secret tunnels and passageways, a mining history that speaks to rebellion, and the legends and presence of ghosts in many of the old buildings",
  "Comala, is a one and a half hour drive from Manzanillo, right outside the capital of Colima. Known as Pueblito Blanco (White Village) Comala’s buildings are painted white with contrasting red tile roofs, and from the center of the main plaza visitors can enjoy excellent views of the twin volcanoes, Volcán de Fuego and Volcan Nevado de Colima. Wandering the cobblestone streets, visitors can find local handicrafts, folk art, and some of the region’s finest harvested coffee. Just outside of town, heading toward the Volcano of Fire is the stunning hotel property Hacienda San San Antonio "
]

def on_launch(event, context):
    return statement("Magic Town", "Welcome to Magic Town Skills, you will here a place to visit at Mexico")

def lambda_handler(event, context):
    town = random.choice(magictowns)
    response = {
        'version': '1.0',
        'response': {
            'outputSpeech': {
                'type': 'PlainText',
                'text': town,
            }
        }
    }
    return response
