'use strict';

var facts = [
    { value : "The Magic Town of Calvillo is known as 'the guava world capital' and belongs to the state of Aguascalientes. In its origin it was an area inhabited by caxcanes and zacatecos Indians, who put great resistance during the colonization. Spaniards, Nordics and French arrived at the town of Calvillo, reason why many of their inhabitants have Caucasian features. In the 17th century, the priest San José de Huajuacar established his religious mandate. Therefore, the name Valle de Huajúcar given to the region, which means 'place of willows' where the first settlers of Spanish origin, Creole and mestizo settled. 10 reasons to visit El Calvillo: 1. Guava Route, 2. Nature, 3. Adventure, 4. Tram, 5. Crafts, 6. Miracles, 7. Legends, 8. Architecture, 9. San Judas Tadeo, 10. Murals To get from the city of Aguascalientes take the federal highway number 70, just 49 km away is the town of Calvillo.", tags : ["calvillo"] },
    { value : "Real de Asientos is a Magical Town of Aguascalientes of mining origin. Although it is small, it has valuable attractions preserved from the viceregal period in its architecture and art. Its underground tunnels, gardens and greenhouses make it perfect to disconnect from the hustle and bustle of big cities. 10 reasons to visit Real de Asientos 1.Enjoy traditional dishes, such as the bridal asado, the rabbit a la Chichimeca, the hen with the 9 wines, enchiladas potosinas and gorditas de huitlacoche and pumpkin flower. 2.Wirikuta, 3. Train El Piojito, 4.The pottery, 5. Festival of Ogarrio, 6. Cemetery of Guadalupe, 7. Parish of Our Lady of Bethlehem, 8. Hidden aqueduct, 9. Live Museum of Cactaceae, 10. Ex Hacienda de Letras. To get from Aguascalientes you must take Highway 45 to San Francisco de los Romo. There, join the 71 federal highway until you reach the junction that leads to Tepezalá, Asientos and Loreto.", tags : ["real de asientos"] },
    { value : "San josé de gracia is located most of the Sierra Fría, which is considered the great lung of Aguascalientes. Its location is on the banks of the Plutarco Elías Calles Dam, the first in Mexico. The origin of this Magical Town comes from members of the Chichimeca ethnic group coming from the directions of Tepatitlán. The community of San José de Gracia was founded in 1673 in a cattle place called 'De Martha'. 10 reasons to visit San José de Gracia: 1. Cristo Roto, 2.Boca de Túnel, 3.Popular band music, 4. Crafts, 5. Gastronomy, The typical dishes are the pacholas and the membrillate. 6. Festival of Calaveras with catrinas, 7. Take a bath to the Calles Dam, 8. Fiestas January 6, 9. Los Alamitos Ecological Camp, 10. Zaragoza Garden. It is located in the northwest of the state, about 57 kilometers from the capital. This magical town limits to the north with the municipalities of Calvillo and Jesús María, with the municipalities of Pabellón de Arteaga and Rincón de Romos to the south.", tags : ["san jose de gracia"] },
    { value : "Tecate is a magical town near the border with the United States, despite this the atmosphere is peaceful and its climate is quite cool because it is surrounded by mountains. The name of Tecate comes from its first indigenous inhabitants who understood this word, 'cut stone' or 'cut tree'.10 reasons to visit Tecate: 1. Tecate Brewery, 2. Wine Route and Beer Route, 3. Sweet and salty pan, 4. Vallecito, 5. Kumiai Community Museum, 6. La Rumorosa, 7.Rancho La Puerta, 8. Traditional crafts, 9. Railroad station, 10. Sacred Cemetery Cuchumá. It is only 20 minutes from the City of Tijuana and you can get to this magical place by taxi or bus.", tags : ["tecate"] },
	{ value : "The Magic Town of Loreto is located between the Sierra La Giganta and the Sea of Cortez. This city is the oldest in Baja California, it is said that here the sun shines 365 days a year and that the tourists who visit it are eager to return for being a wonderful natural aquarium. The history of Loreto is very particular since which was the starting point to colonize the peninsula of Baja California. It was founded as a mission in 1697 by the Jesuit Juan María Salvaterra, whom he called 'Our Lady of Loreto'. 10 reasons to visit Loreto: 1.Sierra La Giganta, 2.Isla del Carmen, 3.Camino Real, 4.National Park Bahía de Loreto, 5.Plaza Salvatierra, Museo de las Misiones Jesuitas, 6. Northern and coastal gastronomy, 7. Founding party of Loreto Foundation, 8. Panoramic views of the Sea of Cortez where the Coronado, Carmen, Danzantes and Catalana islands are, 9.Loreto-Nopolo, 10.Pesca. You can reach this Magical Town by land from La Paz, by the transpeninsular highway n ° 1 'Lic. Benito Juarez' direction to the north. Also from Tijuana, it is taken in a southerly direction, and Baja California Sur is accessed through the municipality of Mulegé. If you prefer, you can arrive by air. Los Angeles, California, has a two-hour direct flight to this destination.", tags : ["loreto"] },
	{ value : "Todos Santos is the point where the arid desert of northern Mexico fades with the vegetation that is nourished by a spring and wind from the Pacific Ocean. This special Magical Town is populated by surfing champions, artists and foreigners, who have found in this Baja California place a very nice place to make their lives.9 reasons to visit Todos Santos: 1. Fresh oasis, 2. Nearby beaches are San Pedrito, Los Cerritos, Los Esteros, Punta Lobos, La Poza and Batequitos, 3. Hotel California, 4. Naughty countryside, 5. Sierra de la Laguna Biosphere Reserve, 6. Artistic personality, 7. Arts Festival, 8. Mission of Nuestra Señora del Pilar Building, 9. Manuel Márquez de León General Theatre. It is located 80 kilometers from the city of La Paz, in Baja California Sur. If you arrive by car, from La Paz, you have to take highway 19. In case you leave from Cabo San Lucas, you have to follow highway 19 towards La Paz.", tags : ["todos santos"] },
	{ value : "The charm of Palizada, Campeche, emanates from the roofs of their houses, reddish tiles of French style that contrasts with the white of their facades and their colorful doors, some with wrought iron balconies. 7 reasons to visit Palizada: 1. Palizada River, 2. Colonial architecture, 3.Gastronomy such as the pejelagarto to the fathoms, fried mojarra, venison in mole, 4.Parques, 5.Ecoturismo, 6.Artesanías, 7.Fiesta en honor to San Joaquín, the Patron Saint. The best way is for water. The trip from Ciudad del Carmen is two hours, but it is worth the trip. for the Palizada River is an extension of the Usumacinta. On this route you have the possibility of observing manatees. The boats depart at 10 am from the pier. The ticket is 150 pesos.", tags : ["palizada"] },
	{ value : "Arteaga is a Magic Town of Coahuila, right in the Sierra Madre Oriental is this destination, which is called 'the Switzerland of Mexico', this because of its climates, landscapes, snowy mountains, etc. If you want to spend some time resting in hotels located in the mountains, this place has to appear on your list of future trips. The climate in Arteaga is temperate, although when it is winter, it is cold and there is snow. It is so cold in December and January, that temperatures reach below zero degrees and in summer, the temperature ranges between 28 and 30 ° C, perfect weather for extreme sports. Some of the reasons to visit are: 1. The San Isidro de las Palomas Temple, 2.Bosque de Monterreal Resort, 3. Balcones Canyon, 4. El Cielo Mountain. If you visit Arteaga by air you must take a flight to Saltillo to continue the route by road; If instead you come by bus, take it in Saltillo, from the town of Ramos Arizpe or from the 'Sultana del Norte' in Monterrey. If you travel by private car, to get to this Magical Town it is by the federal highways starting from Saltillo, towards the East or by Ramos Arizpe, population that is to the Northwest.", tags : ["arteaga"] },
	{ value : "The Magic Town of Cuatro Ciénegas, three hours from Saltillo, is one of those destinations that amaze visitors. From its unique and surprising natural areas, to its northern flavors and local wines, this destination has everything for you to spend an unforgettable vacation. Some of the reasons to visit are. 1. Main square, quisco, San José church and Municipal Palace, 2. Venustiano Carranza Museum, 3. Callejón de Guevara, 4. Poza Azul, 5. Drywall, 6. Marble Mines, 7. Mezquites River, 8 Bodegas Ferriño y Vinos Vitali, 9. Cortadillo dish.", tags : ["cuatro cienegas"] },
	{ value : "There are many reasons to visit Parras: its nogaleras, its ancient architecture, its vineyards, its history as an oasis and focus of civilization in the deserts of the north or its role as the cradle of the wines of the New World. But beyond all this, what enjoys who knows this charming Magical Town, is its incredible street-to-street charm. Parras offers you an incredible scenario; The Canyon of Lima has vertical walls up to 40 meters high where you can do what you imagine. You will definitely live an adventure in the middle of nature. In Parras, right in the middle of the desert, you will also find the rocks that were engraved by our indigenous ancestors. It is without doubt a treasure that has survived the inclemency of time.", tags : ["parras de la fuente"] },
	{ value : "The vast arid landscape of the Dunes of Bilbao is the unique framework for a site as recurrent for the history of Mexico as is the town of Viesca, in the northern state of Coahuila. Since its sands served as a prison for priest Miguel Hidalgo during the War of Independence in 1811, its unique territory and its people have been mute witnesses of the birth and development of a country. Beyond recent history, the amazing dunes, of which Viesca is the gateway, are actually 17 hectares of the Tetis seabed, which millions of years ago flooded what is now Monterrey, part of Coahuila, Chihuahua , Sonora and Baja California Sur, and that abruptly breaking onto the surface due to plate tectonics evaporated, forming sublime landscapes where reality is transformed. For this reason, this territory has been called as 'Seed of the Laguna Region'. The desert and sometimes desolate landscape of Viesca raise on him the threat of becoming a ghost town. However, the strength of its people always finds a way to move forward; this is clearly understood when contemplating the motto of his coat of arms: 'We will always resurface'. Worthy example of this is the Ex Hacienda of Santa Ana de Hornos, the oldest architectural treasure in the entire Lagunera Comarca that was once again in the public eye after Emilio 'El Indio' Fernández, famous Mexican film director, murdered an ejidatario during a filming in the 80s. Viesca is a place where the value of history is everything. In the General Municipal Museum José González Herrera you can see the complete panorama of what this town has represented and experienced over time. Another part of the history of this Magical Town is found in the ruins of its salt factory, once called Sulfatos de Viesca. To get to Viesca, the best option is to fly to Torreón through AeroMéxico or Interjet, or by bus to any of the Main cities of the Comarca Lagunera, such as Gómez Palacio, Matamoros or Ciudad Lerdo, and from there take public transport, individual or collective, or rent a car. Through Federal Highway 40, Viesca connects with Matamoros, Parras or any of the major cities in the region, starting with Torreón, a city that is very well connected and from where one hour's walk takes us to the Magical Town.", tags : ["viesca"] },
	{ value : "Candela is a comfortable place of rest and aquatic recreation in the middle of the desert climate of the state of Coahuila; nevertheless, its colonial and revolutionary historical antecedents have made it worthy of the denomination of Magical Town, besides its undeniable natural beauty and its active cultural life. With a constant climate between 20 and 22 degrees Celsius, the Candela River Tourist Corridor is the ideal place for those seeking an escape from the sweltering heat of the north of the country. Candela, whose name is due to the shape of its star hill, similar to a candle, candle or candle, is the point of entry to the area of ​​greatest interest in the center of Coahuila, known as the Desert Route Thanks to the late colonial past of Candela, its main square is surrounded by superb houses full of ornaments, which are becoming simpler, although no less beautiful, as one proceeds through the neighboring streets of Hidalgo, Venustiano Carranza and Simón Bolívar. The typical Benito Juarez square, with its kiosk, trees and benches, is a peaceful place where locals and strangers meet for the hot evenings to chat and contemplate the beautiful architectural landscape, crowned by the Parish of San Carlos Borromeo, who notably supported the Catholic reforms in sixteenth-century Europe, those that were subsequently applied in the Spanish colonies. The façade of the Candela church, although simple, houses a story that goes back to 1694, when Fray Francisco Peñasco founded the mission of San Bernardino de La Candela. Other high points of this Magic Town are the Cerro del Águila and El Frentón, a natural wall where in addition to observing the magnificent landscape you can practice adventure sports such as rappelling and mountain biking. At the top of the Mesa de Cartujanos, more than 800 meters high, there is an amazing construction that has survived the ravages of time: the Hacienda Vidaurri, which houses the remains of José Santiago Vidaurri Valdez, Mexican military and politician in his chapel . It is true that Candela has a great historical and architectural appeal; nevertheless, the main point of interest in this town is in the Candela River Tourist Corridor, a tributary of the Rio Grande with abundant transparent waters almost all year round. Candela can be reached by plane through Torreón, AeroMéxico and Interjet airlines, and from there continue by bus on the Red Buses of La Laguna, or by car 96 km from Monclova by State 30, or 154 km from Monterrey by the Federal 1. To arrive to Candela, a couple of kilometers after the Rancho La Tinaja turn left by State 80 and 30", tags : ["candela"] },
	{ value : "Guerrero, located in the border area of the state of Coahuila, may give the impression of sharing with other places the religious past attacked on them with the establishment of the Jesuit and Franciscan missions; However, the archaeological value that its ruins have taken, and the presence of a long ranchera tradition, give this Magical Town enough attributes to enchant its visitors. The main attraction of Guerrero is the cultural tourism through the various historical buildings it has, built more than three hundred years ago but still standing, noble and admirable. A visit to this Magic Town can start in the historic center, where the Church of San Juan Bautista houses a beautiful bell made in 1851, and numerous pictorial representations of saints valued as artistic patrimony. Near the main square there is also the Casa de Culture, built in 1846 to later become a space for spreading the work of painters, sculptors, dancers and poets. Leaving downtown, the ruins of the San Bernardo Mission, only half a league from the Presidio of San Juan. Because of the large presence of ranches where it is possible to stay for days and even entire seasons, the hotel offer in Guerrero is actually low. Guerrero is located 48 kilometers south of Piedras Negras, Coahuila, where it can be reached by plane through AeroMar. From there, it is reached by car on the Federal Highway No. 2, or following the same route, from Nuevo Laredo, Tamaulipas, where it is 130 km away.", tags : ["guerrero"] },
	{ value : "'A dead town, populated only by worn voices, echoes, murmurs, ghosts and shadows ...'. This is how Juan Rulfo describes Comala in the initial pages of Pedro Páramo. The glow of the streets and squares of Comala under the brightness of the intense sun, which gives it an average temperature of 25 degrees. The central square of Comala, built in the 19th century, welcomes locals and strangers with the effigy of Rulfo, who waits while sitting in one of the benches reading his famous novel. In front of the high portals, the fountain and the central wrought iron kiosk is the Parroquia de San Miguel Arcángel, the most important religious building in the town. A few steps lead to the Juan Soriano Sculptural Garden, which was inaugurated with the sculpture donated by the artist called La Paloma. The House of Culture of Colima, also in the center, is the site of important artistic and cultural events and houses the Museum Alberto Isaac. One of the most interesting points for its facilities and history is the Hacienda Las Nogueras, which was a great producer of sugar between the seventeenth and nineteenth centuries. Comala is located 12 kilometers from the capital of Colima, where it can be reached by plane through AeroMéxico. You can also get there by bus from Mexico City or Guadalajara, in the ETN runs. From there there are continuous urban transport to the Magic Town.", tags : ["comala"] },
	{ value : "Chiapa de Corso, home to a popular celebration that for generations has perfectly represented the charm that distinguishes this part of Chiapas.) In addition, we must not forget that Chiapa de Corso, brand new Magic Town, is the point of entry for know the Cañon del Sumidero The first thing to know about this excellent place is the aforementioned Fuente de la Pila, a vestige of great historical relevance, and then we recommend knowing several excellent viewpoints that are located in this Chiapas community and that offer spectacular views of the Sumidero Canyon We refer to the viewpoints of the viewpoints: La Coyota, El Roblar, El Tepehuaje and Los Chiapa Some attractions are: The Church of the Lord of Miracles, Church of Calvary, Church of Santo Domingo, Ex-convent of Santo Domingo, Convent of the Dominicans, Temple of San Sebastián, Church of San Gregorio, etc. 8 to 23 of January: Fair of the City of Chiapa de Corzo that begins with on the announcement of the Chuntas. Chiapa de Corzo is located 14 kilometers from Tuxtla Gutiérrez and 62 kilometers from San Cristóbal de las Casas. To visit it you must use Highway 190 or 195, from the state capital.", tags : ["chiapa de corzo"] },
	{ value : "Comitán de Domínguez is a synonym of endearing land, of Chiapas pride, of local kindness and of an area of peace and valuable traditions.' People who decide to meet him and travel to this beautiful corner of Chiapas, find themselves in an enviable climate , exotic flavors, patios full of flowers, horizons full of vegetation and sunbeams, next to immemorial vestiges of the Mayan culture.Of the most interesting to know in the Magical Town of Comitan, the following should be mentioned: accounts highlights the beautiful Church of Caralampio, which was built in 1852, to honor San Caralampio Martir.It is also interesting the Museum House 'Doctor Belisario Dominguez', which is a typical building comiteca XIX century.Some places to visit are : Church of Santo Domingo, Plaza de Comitán, Temple of San Caralampio, Archaeological Museum of Comitán, Junchavin City Theater, etc. The main thoroughfare access comes from the state capital, through the Pan-American Highway (Mex-190) to 171 km from said capital and 1145 from Mexico City, passing through the cities of San Cristobal de la Casas and Teopisca.", tags : ["comitan de dominguez"] },
	{ value : "San Cristóbal de Las Casas was one of the first cities built in Spanish North America. For various reasons, this city has had at least ten different names, and finally San Cristóbal was in honor of the patron saint of the travelers, and 'de las Casas' by Fray Bartolomé de las Casas, who was the first bishop of the city. In this city, one of the most beautiful in Mexico for its harmonious urban composition, you can discover impressive religious buildings such as the Cathedral or the Temple of Santo Domingo, covered with profuse details of baroque style and indigenous manufacture, that perpetuate the cultural heritage of the Tzotzil, Tzeltal and Lacandon ethnic groups that reside in its surroundings. Some places to visit are: San Cristóbal Cathedral, Government Palace, Temple of San Nicolás, El Parque, Casa de la Sirena, Temple and former Convent of Santo Domingo de Guzmán, Temple of Charity, Temple of Mercy, Chapel of San Cristóbal , Na Bolom Museum 'Casa del Jaguar', Cultural Center of Los Altos de Chiapas, Amber Museum, Sergio Castro Museum, etc.San Cristóbal de las Casas is located 80 kilometers west of Tuxtla Gutiérrez, by road 190, account with a national airport called 'Corazón de María'", tags : ["san cristobal de las casas"] },
	{ value : "Palenque was the most significant center of the prehispanic Mayan culture of the region and its geographical dimensions were so large (it is estimated that it measured 7 kilometers in length from east to west.) Among the most significant structures of the archaeological site of Palenque, mention should be made of the Temple of the Inscriptions and the Palace, as well as the Museum of the Site, located inside the pre-Hispanic complex, installed in a modern building.The surroundings of the archaeological site of Palenque lend themselves to the practice of hiking and the contemplation of particular plants and animals of the region, just 6 kilometers east of the archaeological area and this national park is the Magical Town of Palenque, a beautiful community of provincial environment that has all the tourist services: accommodation , restaurants, shops, shops, etc. Palenque, one of the most remarkable cities in the Mayan world, is to the northeast of the state of Chiapas, in an area of ​​high tropical forest where waterfalls and rivers abound, reason why the visit to the archaeological zone can be complemented with walks by the environs. It is believed that Palenque was founded around the year 100 a.C. and its development lasted almost a thousand years, after which it was abandoned forever. The buildings that can be seen today, in a magnificent jungle setting, date back to the Classic Period, that is, from 400 to 700 AD. To get to the Magical Town of Palenque you can follow the following route: from Mexico City and by car, take the Ignacio Zaragoza Causeway and then go through Santa Martha Acatitla. From there you have to go through the junctions of San Martín Texmelucan, Puebla and Acatzingo, all of these in the state of Puebla. ", tags : ["palenque"] },
	{ value : "Batopilas de Manuel Gómez Morín (in Tarahumara, 'río encajonado') is a town in the state of Chihuahua, in Mexico, located in the Sierra Madre Occidental, at the bottom of a ravine. 1 210 people, and at the date of this article is the head of the municipality of Batopilas.Batopilas is at the bottom of a ravine and along the Batopilas River, is a small colonial town formed by three streets, to reach the population there is a unique dirt road that descends the ravine, the trip of Batopilas de Creel, the main tourist center of the Sierra is 5 hours. ", tags : ["batopilas"] },
	{ value : "Creel also called Estación Creel, is a tourist town in the Mexican state of Chihuahua, located high up in the Sierra Madre Occidental, in the municipality of Bocoyna, it is located about 175 km from the city of Chihuahua. Creel, or simply Creel, was founded on May 26, 1907 in what was a Rarámuri ranchería called Nariachi.It has its origin as a railroad station that starts from the city of Chihuahua, culminates in the Sinaloa port of Topolobampo. Now known as Chihuahua al Pacifico, it was formerly known as the Kansas City, Mexico and Oriente Railroad, and it has several attractive spots such as the Arareco Lake, the Basaseachi waterfall, the Cusárare waterfall and the obligatory passage to the Cobre Canyon", tags : ["creel"] },
	{ value : "Casas Grandes (Pakimé or place of big houses in tarahumara or rarámuri) is a population of the Mexican state of Chihuahua, head of the Municipality of Casas Grandes, located three kilometers from the city of Nuevo Casas Grandes and next to the zone archaeological site of Paquimé. It is said that the region was one of the seats of the Nahua Indians (the Aztecs were Nahuas, but not all the Nahuas are Aztecs) in their migration from the great American North to the center of Mexico, in search of better conditions of life, it is said that of the stay of the Nahua in the place there are still some ruins near the municipal head ", tags : ["casas grandes"] },
	{ value : "Mapimí es un pueblo del estado mexicano de Durango, ubicado en la Comarca Lagunera, da su nombre a la zona desértica denominada Bolsón de Mapimí y es cabecera del mismo nombre. El año del 2010 fue inscrita por la UNESCO en el Patrimonio Cultural de la Humanidad. Bajo el título de Camino Real de Tierra Adentro, la distinción se otorgó debido a su aporte cultural y arquitectónico e histórico.La zona donde hoy está ubicado el poblado de Mapimí fue habitada por indígenas Tobosos y Cocoyomes los cuales eran grupos indígenas del desierto, la fundación virreinal de Mapimí se debe gracias a que el sacerdote jesuita Juan Agustín de Espinoza, el capitán Antón Martín Zapata entre otros muchos colonizadores se trasladaron desde Cuencamé al corazón del desierto en busca de minerales preciosos.Mapimí ofrece una gran cantidad de atractivos turísticos legado del aporte cultural de más de 400 años de historia. Su admirable arquitectura que data de los siglos XVII y XVIII se hace presente en gran cantidad de edificios y monumentos, entre los principales está el edificio que fuera sede del Departamento de Comercio así como también el del Servicio Postal y el del Templo de Santiago Apóstol, El Mayor, edificado en 1772 con un estilo barroco. ", tags : ["mapimi"] },
	{ value : "Dolores Hidalgo officially as Dolores Hidalgo Cuna de la Independencia Nacional is one of the 46 municipalities of the Mexican state of Guanajuato, located in the north-central region of its territory and has an extension of 1656.18 km². With the census of 2010, the population amounts to 148 173 at the municipal level and 59 240 at the municipal seat, and the city is recognized by decree, both from the local and federal governments, as the Cradle of the Independence of Mexico, since atrium of his parish was witness to Grito de Dolores.Museo-House of Miguel Hidalgo y Costilla, property where he lived and in which his furniture is preserved as well as several important documents.The Parish of Our Lady of Sorrows.It is the church The largest of the city, which shows two examples of architecture, its baroque-churrigueresque facade is one of the finest examples of the last stage of the Mexican colonial baroque.", tags : ["dolores hidalgo"] },
	{ value : "The town of Jalpa de Cánovas is located in the municipality of Purísima del Rincón (in the State of Guanajuato) It has 789 inhabitants Jalpa de Cánovas is at an altitude of 1740 meters above sea level. 23 to the south of the municipal seat on the Carretera Purísima-Manuel Doblado (municipality) and 41.9 kilometers from the city of León, Guanajuato.The foundation of Jalpa de Cánovas dates from 1542, when the Audiencia de Nueva Galicia, in the jurisdiction of the Villa de Lagos, will grant to the Spanish captain Don Juan de Villaseñor and Orozco a mercy consisting of 4 sites for large cattle and 8 caballerias of land, which included parts of the Kingdoms of New Spain and New Galicia.", tags : ["jalpa de canovas"] },
	{ value : "Mineral de Pozos is a city in the state of Guanajuato, Mexico, which had a large mining boom whose decline caused the depopulation of the town that showed signs of abandonment over a century. It is an important city of the state of Guanajuato tourism, since it is a magical town, the distance to the capital is 114.8 km, and León, Guanajuato is 183 km. ", tags : ["mineral de pozos"] },
	{ value : "Salvatierra is one of the 46 municipalities of the Mexican state of Guanajuato. Known for being the first demarcation to which it was granted the title of city in the State of Guanajuato, Salvatierra offers an atmosphere of tranquility and harmony when walking Through the streets of the Historical Center, full of colors and great monuments built during the Viceroyalty period, Salvatierra's architectural wealth has earned it recognition as the third Colonial City of the State of Guanajuato.", tags : ["salvatierra"] },
	{ value : "The municipality of Yuriria (in purépecha Yuririhapundaro, place of the lake of blood) is one of the 46 municipalities of the Mexican state of Guanajuato.The municipal seat is the city of Yuriria, which stands out for its location and its historical importance. Formerly known as San Pablo Yuririhapúndaro, it is located in sub-region III southwest of the state of Guanajuato, and there is also an artificial lake called 'Yuriria Lagoon.' The city of Yuriria is commercial, but not commercial. Geographically, together with the cities of Uriangato and Moroleón, these three form the same metropolitan area since October 2010, the Moroleón-Uriangato-Yuriria metropolitan area is the 75th largest city in the country4 and the 5. most populated in the state of Guanajuato", tags : ["yuriria"] },
	{ value : "Taxco (in Nahuatl: tlachtli, co, 'ball game, place' 'place where the ball game is played or place of the ball game') is a Mexican city located in the northern part of the State of Guerrero , in a geographical area defined by mountains and hills, characteristic of the north of this entity of the country, 36 km from the city of Iguala, 135 km from the capital of the state of Chilpancingo and 170 km southwest of Mexico City, is the municipal seat of Taxco de Alarcón Taxco has had an important role in the history of Mexico, in 1821, in the San Bernardino Convent of Siena of Taxco, the Plan of Iguala or of the Three Guarantees was drawn up by Agustín de Iturbide, which Later, on February 24 of that year, he would sign with Vicente Guerrero in the city of Iguala, establishing the Mexican Independence of Spain and unifying the insurgent and realistic armies.", tags : ["taxco"] },
	{ value : "Huasca de Ocampo, also known simply as Huasca, is a town located in the municipality of Huasca de Ocampo, in the state of Hidalgo, Mexico. It is located approximately 34 km from the city of Pachuca de Soto and 16 km from Mineral del Mount in the Sierra de Pachuca The Duendes Museum is founded on facts and legends that took place in the town among children, adults, the elderly and horses, the most abundant exhibition in this museum is horse manes where supposedly the elves have done things ", tags : ["huasca de ocampo"] },
	{ value : "The municipality of Huichapan is one of the eighty-four municipalities that make up the state of Hidalgo, Mexico, whose municipal seat is the town of Huichapan.' According to historians, the first settlers of the region that Huichapan currently occupies , were the Otomies followed by the Toltecs and finally by the Aztecs. ", tags : ["huichapan"] },
	{ value : "Mineral del Chico is a locality, head of the municipality of Mineral del Chico in the state of Hidalgo in Mexico, a population born in 1565. Thirteen years after the news of the first discovery of minerals in the region. the war of Independence, everything that was under the control of the crown stops being called real like the army, the roads, the mines, etc. like this in 1824, when the political division of the Republic was made, Real de Atotonilco El Chico changes Its name is given by the name of Mineral del Chico, which is what it is known for today: in the center of the village we find the Parish of La Purísima Concepción, a Neoclassical building with a quarry facade and Tuscan columns, celebrates its patronal feast December 8. ", tags : ["mineral del chico"] },
	{ value : "Mineral del Monte is a town located in the municipality of Mineral del Monte in the state of Hidalgo, in the center of Mexico .The city has a tradition of pastry cooking, is famous for its silver mines and its considerable affluence. In times of the Viceroyalty, it was given the name of Real for being under the dominion of the Spanish crown, and of the Monte for being surrounded by mountains, for this reason it is better known as Real del Monte.Chapel del Señor de Zelontla Consta del temple, the sacristy, and a small winery, the surface occupied by the atrium was used to place a staircase that covers the entire front.The Chapel of Veracruz was the second temple built in the city by the Franciscan friars of Pachuca: in 1584 it was founded the Brotherhood of Santa Veracruz and a discreet chapel was built, which was demolished at the end of the 18th century.", tags : ["real de monte"] },
	{ value : "Tecozautla is a Mexican town, head of the municipality of Tecozautla, in the state of Hidalgo. Upon the disintegration of the Toltec empire, a large number of migrants arrived, who settled in this municipality and feared to be attacked by other tribes. wall that measured between five and six meters high with an approximate length of 4788 meters, this happened between 730 and 740 BC The construction of this wall helped them a lot especially when the barbarian Chichimecas attacked the Toltecs They lived in this region, this wall served as a shield to defend themselves.At the time of the conquest by the year 1551 the Spaniards came to subjugate lands, one of the first Spaniards was Nicolás Montaño cacique de Jilotepec.The Temple and ex-convent of Santiago Apóstol built between 1690 and 1700. The Monumental Clock of Tecozautla is one of the most important monuments of the town. The tower was built in the government of Porfirio Díaz, attending a neoclassical style. On September 15, 1904, a solemn act of laying the first stone was made, erected simultaneously with the Pachuca Monumental Clock, both monuments were inaugurated on September 15, 1910. ", tags : ["tecozautla"] },
	{ value : "Lagos de Moreno a municipality and a city located in the High North Region, in the Mexican state of Jalisco. The city was declared a Cultural Heritage of the Nation - Historical Monuments Zone by the National Institute of Anthropology and History ( INAH) in 1989. Its historic center and bridge were named Cultural Patrimony of Humanity by Unesco (United Nations Educational, Scientific and Cultural Organization), on August 1, 2010 as part of the Camino Real de Tierra Adentro.", tags : ["lagos de moreno"] },
	{ value : "Mazamitla is a municipality and population of the state of Jalisco, Mexico, located 124 km south of Guadalajara in the Southeast Region, its name comes from Nahuatl and means 'Place where deer are hunted with arrows'. founded by the Aztecs in 1165. It belonged to the lordship of Tzapotlán and paid tribute to the chieftain of Tamazollan, in 1481 he was invaded by the Purépechas to seize the Sayula Lagoon, the Purépechas, were dominating a few years until they were defeated at the end of the Guerra del Salitre, in 1510. Sites of Interest: Parroquia de San Cristobal, Enchanted Garden, La Zanja Forest, Las Charandas Forest, El Chacal Forest, El Tigre Hill, La Cañada. ", tags : ["mazamitla"] },
	{ value : "San Sebastián del Oeste is a municipality and population of the state of Jalisco, Mexico, located west of the state, in the Western Sierra Region. It is a mining town that had its peak in colonial times. Up to 20,000 inhabitants, however, its population decreased in the 19th century due to the closure of the mines, before the arrival of the Spaniards this region was populated by the Tecos, and the conquest was carried out in 1524 by Captain Francisco Cortés de San Buenaventura accompanied by Juan de Escárcena In 1530, Nuño de Guzmán passed through this place with his army, which was received without hostilities by the natives and thus had the pretext to take possession of everything that Francisco Cortés had conquered. The jurisdiction of Hostipac is the mayor of San Sebastián, the Real de Minas de San Sebastián, and the San Sebastian Temple, El Pabellón Hotel, Hacienda Jalisco, and the Museum House (Conchit). to Encarnación), Sierra de la Bufa, Los Reyes Stream, Casa González.", tags : ["san sebastian del oeste"] },
	{ value : "Tapalpa is a municipality and population of the state of Jalisco, Mexico, located in the Lagunas Region, approximately 118 kilometers from Guadalajara, its name comes from otomi and means 'Place of Land of Color'. blankets, jorongos, backpacks, tufts, huaraches, articles and ornaments of carved wood, embroideries and articles of clay In the town of Juanacatlán, 11 kilometers from the municipal capital, stone slabs of different sizes are extracted, widely used in construction for cladding facades or floors Gastronomy: highlight the shepherd sheep, dairy products, fruit preserves, sweets in syrup, jamoncillos, cajeta, mezcal, rompope, fruit punch and their drinks pulque Typical costumes: charro costume for men and china dress for women.", tags : ["tapalpa"] },
	{ value : "Tequila is a municipality and a town in the state of Jalisco, in Mexico. The name of Tequila comes from the Nahuatl word Tekilan, (Place of workers). Tequila is known for giving its name to tequila, being one The original settlers were Chichimecas, Otomies, Toltecs and Nahuatlacas, and the town was originally settled in a place called Teochichán or Techinchán: the place of the almighty god or where the links and traps abound. The main economic activity of this city is the production of the popular alcoholic drink of the same name, since its beginnings, the production of tequila in the region has been internationally recognized.The main tequila producers that are found within the city are: Tequila José Cuervo, Tequila Distilladora Rubio, Tequila Orendain, Sauza Tequila.", tags : ["tequila"] },
	{ value : "Mascota is a municipality of Jalisco, the main head town is called in the same way, Mascota. Now, do not believe that the name has something to do with animals from the home, but that it comes from the Teco language 'maxacotlán Mazacotla ', that is, the place of deer and snakes, Mascota, with a population of 8,215 inhabitants, is located in the northwest of the State of Jalisco, at about 1,200 meters above sea level, strategically located between Guadalajara (120 kilometers) , the capital of the state, and Puerto Vallarta.The municipality of Mascota is located on the plateau of the Sierra Madre Occidental mountain range, the municipality has 40 small towns, among which Mascota is the largest and is also the seat of government local municipality Mascota is a region of beautiful landscapes in which contrast valleys, mountains, forests and rivers, people are friendly, happy and proud of their history. ", tags : ["mascota"] },
	{ value : "Talpa de Allende (La Perla Escondida) It is one of the 125 municipalities that make up the State of Jalisco, Mexico, because of its culture, tradition and beautiful mountain landscapes, it is considered one of the 8 Magical Towns. the west of the state, in the West Coast Region, 190 kilometers west of La Capital Guadalajara, its name means 'On the Earth.' The Pilgrim's Route is a road with more than 200 years of tradition, which runs through some municípios of the state of Jalisco, in Mexico, starting in the city of Ameca, crossing some mountains of the Sierra Madre Occidental and ending in the town of Talpa de Allende, specifically in the Basilica of Our Lady of the Rosary, its length is 117 kilometers and it is traveled by around 3 million people a year8 in the month of March and particularly in Holy Weeks", tags : ["talpa de allende"] },
	{ value : "El Oro is one of the 125 municipalities of the State of Mexico, it is a rural community that has an area of 137,971 km² and whose municipal seat is the population of El Oro de Hidalgo. to the north with the state of Michoacán and the municipality of Temascalcingo, to the south with the municipalities of San Felipe del Progreso and San José del Rincón, to the east with the municipalities of Temascalcingo and Jocotitlán, and to the west with the municipality of San Felipe del Rincón The State of Michoacán is one of the main attractions, inaugurated in 1908. It presented high-level shows with the most important artists of those times, just describe the walls with art nouveau-style gold ornamentation and rooms In the carved wood that makes it exceptional, the Municipal Palace, for its part, exemplifies the neoclassical style with its two English-style towers. trains of the late nineteenth century. The Mining Museum has a permanent exhibition of photographs that show the best times of bonanza as well as extraction equipment and mineral samples extracted from mines in the region. By the way, they extracted the purest gold in the world. Mining Museum (located on Arroyo Street, almost on the corner of Pedro Moreno). El Oro is located in an important mineral zone, near the limits with Michoacán. El Oro, together with Tlalpujahua in the neighboring state, were two of the richest and most productive mining provinces. ", tags : ["el oro de hidalgo"] },
	{ value : "Malinalco is located to the south of the city of Toluca de Lerdo and 52 km from the city of Cuernavaca. In terms of transfer time, it is located one hour from Mexico City from the Toluca Toll booth via La Marquesa.It was first an important settlement of the Matlazinca people, later dominated by the Mexica.It is one of the smallest municipalities of the State of Mexico and its municipal head has the same name.In the history of Mexico, its importance and fame is due to It houses two centers of religious historical interest: first, because in its head there is a unique Mexican sanctuary carved in the stone of the hill, and that it is a spectacular example of Mexican ritual architecture. locates the Chalma Sanctuary, one of the most important religious pilgrimage centers of Mexican Catholicism, currently serving as a human settlement dedicated to agriculture and tourism, for its Tropical climate and its historical monuments is a town that attracts visitors all year round, but people who have rest homes during the weekends also arrive there. ", tags : ["malinalco"] },
	{ value : "Metepec, from the Nahuatl Metepētl, which means 'On the hill of the magueyes', is a Mexican municipality in the State of Mexico, it is located near the city of Toluca and is part of the Metropolitan Area of the Valley of Toluca The municipality of Metepec is known for its typical area and the varied crafts that are made mainly of clay and ceramics, especially one of them: the renowned tree of life.A walk through Metepec will necessarily include a visit to the architectural complex conformed by the church and the former Franciscan convent of San Juan Bautista de Metepec, the chapel of Calvario, a walk up the hill of the Magueyes to the hermitage, if you have time, you can continue with a tour of the colonial chapels, a drink of garañona in the bar 2 de Abril, and the House of Culture, where there is always some interesting exhibition.If it is Monday of tianguis, you have to stop to eat a taco of a square, or enjoy the pu the sun from the hill of the Magueyes and stay for a while listening to music in the bars and rocks of the surroundings. ", tags : ["metepec"] },
	{ value : "Tepotzotlán is a town and municipal seat of the municipality of the same name in the State of Mexico. The municipality is part of the metropolitan area of the Valley of Mexico, Tepotzotlán was populated by the Otomíes, who were later subjected to the lordship of Cuautitlán. of the disappearance of the Otomi came the establishment of the Teotihuacan culture, in the course of several hundred years the culture declined until the year 1031, one of the last cultures that were settled before the arrival of the Spanish was the Chichimeca culture Its streets lead to the center, next to its enormous square surrounded by portals, restaurants and handicraft shops, where one of the greatest jewels of Novohispano art is found: the old Jesuit colleges of San Martín and San Francisco Javier, baroque works Churrigueresque of the XVIII century, the latter now houses the National Museum of the Viceroyalty.The state park Sierra de Tepotzotlán co mprende 13,175 hectares in the municipalities of Tepotzotlán and Huehuetoca.", tags : ["tepotzotlan"] },
	{ value : "Valle de Bravo (Temazcaltepec, in Nahuatl and Pameje, in Mazahua) is a Mexican population of the State of Mexico, located 156 km southwest of Mexico City.Its Hispanic foundation was in 1530 by Franciscan friars. Its name is given by San Francisco del Valle and by General Don Nicolás Bravo.The municipality has an artificial dam called 'Presa Miguel Alemán or Presa Valle de Bravo', popularly called 'lagoon or lake', was created in 1947 as part of the Hydroelectric System 'Miguel Aleman' of the Hydrological Region, Balsas River Its main attraction is the dam or lagoon, where a great variety of aquatic and risky sports are carried out.The place is known for its typical, traditional architecture of the It is a place between the mountains and the center of various sports such as mountain biking, cross-country motorcycling (Enduro, motocross, ATVs), paragliding, paragliding. rs and hanglider (Alas delta) and horse riding, which can be practiced in a highly recommended place with great landscapes. Likewise, the lake is used for sport fishing for rainbow trout, tilapia and carp from Israel, sailing regattas and water skiing. On the other hand, the town also has three eighteen-hole golf professional courses and countless excellent restaurants serving typical, international, Italian and French food, shopping centers with art stores, handicrafts and decorative items. On the Day of the Dead (November 2) a great festival is organized, called the Festival of Souls. There is also a Carmel Maranatha Spirituality Center or purpose is to offer a space to favor the personal encounter and with God through silence and spiritual retreats", tags : ["valle de bravo"] },
	{ value : "The municipality of Aculco is located in the Mexican highlands, one hour by road from Mexico City, it is part of the State of Mexico and its municipal seat bears the official name of Aculco de Espinoza, next to the mountains and between spectacular cliffs and waterfalls, Aculco is one of the most beautiful typical towns in the state, preserving the features of its traditional architecture full of alleys and houses with large courtyards and corridors, constructions supported by quarry columns and cobblestone streets. kiosk, the Municipal Presidency, Miguel Hidalgo Square, the house where Hidalgo stayed, the house of culture, the market, the administrative offices, the Bear and the Municipal Auditorium are worthy points to meet. Iturbide and Corregidora.) After some tour of the surroundings of the town, the Municipal Spa, with its Olympic pool, is the ideal place to practice r swimming or just cool off. The laundries, located in the streets Pomoca corner with Iturbide, in the municipal head. It is a place of ancient construction and very famous site in the town because it revolves around him several rural legends. Parish of San Jerónimo. The convents, churches and cathedrals of the region evidently bear the mark of sixteenth-century Iberian architecture; nevertheless, the baroque style of Mexico evidences in some aspects, the influence of its indigenous constructors. ", tags : ["aculco"] },
	{ value : "Ixtapan de la Sal is a magical town located 135 kilometers southwest of Mexico City in the state of Mexico and 85 kilometers south of the city of Toluca, capital of the State of Mexico. There are numerous traditions throughout the year, including the patronal feast of the second Friday of Lent, in honor of the Señor del Perdón, where many pilgrimages from Capulhuac, Temoaya, Tonatico, Coatepec Flours, among others, arrive. municipalities of the state and surrounding states: there are also potters in the community of Tecomatepec elaborating works such as jars, vases, dishes, among many other items, in the celebration of day of dead craftsmen from the community of Malinaltenango elaborate sweets of pipían (seeds of pumpkin) making different figures of animals as well as bars with them, in the community of Los Naranjos they make the carving of copalillo wood iendo spoons, forks, saucers and more products; in the musical area there are different rondallas in the area as well as dances of Moors and Christians and of the Shepherdesses, and horseback riding, in addition to pyrotechnics that are participations in the traditional fair of the second Friday of Lent. The Feast of the Parish of the Assumption of Mary, celebrated on August 15. The celebrations carried out in the different neighborhoods and communities, and the representations of the Passion, death and resurrection of Jesus Christ, as regards religion is mentioned. On August 10, the commemoration of the martyrs of Ixtapan is carried out by holding a ceremony in the base of the later city. A parade through the main streets takes place culminating in the monument to the martyrs which is located in the main garden. The commemoration of the Independence of Mexico, is famous throughout the state and even in some parts of the foreigner. ", tags : ["ixtapan de la sal"] },
	{ value : "San Martín de las Pirámides is one of the 125 municipalities in the state of Mexico, located northeast of the city. It has the Teotihuacán country club, its facilities are swimming pools, rooms for parties, recreational and sports games, hotel, restaurant, etc. In this region, basic ingredients are used: beef, pork, chicken, quail, sheep, rabbit, fish, vegetables, lettuce, watercress, beets, tomatoes, seasonal fruits, exquisite stews and desserts are prepared based on Tuna, nopal, xoconostle, because they are typical of the region, there is a wide variety of recipes that are authentic to the eye and to taste that reflects the creativity of the Mexican Obsidian, mud, alpaca, silver, quartz, onyx, precious and semi precious stones, wood carving has come to have an outstanding quality and recognized nationally and internationally, it is also counted with pyrotechnics and serpentine jade handicrafts guatema lita and venturina. ", tags : ["san martin de las piramides"] },
	{ value : "Villa del Carbón is located in the northern part of the state, just northwest of Mexico City .The municipality contains several Otomi and Nahua peoples, in which much of the indigenous culture still persists. The municipality was defined in 1714, when a region known as Chiapan was divided into what is now Chapa de Mota and Villa del Carbón, however, at that time the community that is now the municipal seat did not have an official name. known first by the name of its church Our Lady of the Rock of France and later for being an important supplier of charcoal, this led to it being called Villanueva del Carbón de Nuestra Senora Santa Maria de la Peña de Francia, which finally shortened Villa del Carbón", tags : ["villa del carbon"] },
	{ value : "Cuitzeo del Porvenir is a Mexican town in the state of Michoacán, located on the shores of Cuitzeo Lake, on the border of the state of Michoacán and the state of Guanajuato, Cuitzeo, Cuitzeo is part of the so-called Magical Towns of the Mexican Republic, this is due to the fact that it houses the old Augustinian convent of Santa María Magdalena, which was remodeled in its entirety and will become a museum and exhibition center, and several streets and buildings of the town have been restored on the occasion of the celebrations of the Bicentennial of the Independence of Mexico (September 16, 2010) and the Centenary of the Mexican Revolution (November 20, 2010) With the appointment of Cuitzeo as a magical town, various cultural events have been held around this singular event , such as dances, plays and poems. ", tags : ["cuitzeo del porvenir"] },
	{ value : "Jiquilpan de Juárez, the city of the Jacarandas, is called Jiquilpan because of its many trees of this species, it is a Magical Town of singular personality. The geographical characteristics that it has make it very interesting: for example, it has a elevation of 1560 meters above sea level with temperate climate, typical of this region of Michoacán.The warm summers and intense rains from July to September prepare a landscape full of wild flora worthy to admire.This Magical Town is located in the Ciénega del Lake Chapala and on the hill of Cerro de San Francisco, so the wooded landscape and large areas of cultivation is common, Fray Jacobo Daciano and Fray Juan de San Miguel are the architects of the colony Xiquilpan. of the electoral district IV at local and federal level, and headquarters different governmental instances of the federal and state order, the city of Jiquilpan Magical Town is considered the political capital ica de la Ciénega de Chapala that corresponds to the state of Michoacán. ", tags : ["jiquilpan de juarez"] },
	{ value : "With its provincial air of a European town and waiting for the arrival of the Monarch butterflies or enjoying its presence, the magical town of Mineral de Angangueo awaits you in Michoacán with its past melted in gold, silver and copper. you will be able to know everything that the beautiful Michoacán Magic Town has to offer, which has always risen above its misfortunes, to the east of the state of Michoacán, at an altitude of 2,580 meters above sea level, among dense forests that once opened the way to the tunnels of the mines and then grew again with the extinction of the wealth of precious metals, Mineral de Angangueo has learned to live on ecological tourism, thanks to the blessing of the annual pilgrimage carried out by the Monarch Butterfly.To take advantage of its ecological, mining heritage and architectural, the town was incorporated into the system of Magical Towns, Angangueo was built on the wealth of its precious metals, which left beautiful testimonies Architectural buildings such as the Temple of the Immaculate Conception, the Church of San Simón Abad, the Parker House and other splendid mansions. Between November and March, the Monarch Butterfly sits in the Mexican Biosphere Reserve that bears his name and has its great sanctuaries in the Michoacan forests that surround Mineral de Angangueo. From the past mining boom of the town vestiges, painful memories and legends are preserved.", tags : ["mineral de angangueo"] },
	{ value : "Pátzcuaro is a city in the Mexican state of Michoacán. In ancient times, it was part of the Huacusechas domain, the land of the Indians that the Spaniards called Tarascos and now are called Purépechas. Tourism as one of the Magical Towns is the head of the municipality of the same name, whose main subjects are Cuanajo, Tzurumútaro, Janitzio and San Juan Tumbio, whose name appears in the Michoacán Relationship as Tzacapu-Hamúcutin-Pásquaro, with the meaning of 'Where are the stones (the gods) at the entrance of where the blackness is made.' Its morphological interpretation is as follows: Tzacapu, 'stone', Hamúcutin, 'door or entrance', and, Pásquaro, term formed by pás-, radical of the verb páscani, 'dye of black'; -qua-, radical of -quare- currently written -kuarhe-, is a particle that is incorporated into verbs before the end of the infinitiv or to make it reflective, and, -ro, determinative suffix of place, with the meaning of 'place where blackness is made. Monuments of interest: Main Square or Vasco de Quiroga, Municipal Palace, Huitzimengari Palace, House of Shields, House of the Giant. '", tags : ["patzcuaro"] },
	{ value : "Santa Clara del Cobre is a locality and head of the municipality of Salvador Escalante, of the state of Michoacán, Mexico, famous for its refined handicrafts made from this metal, which have obtained several awards at the local, national and The National Prize for Sciences and Arts in the category of Traditions and Popular Arts will be held in 2018. The LIII edition of the National Copper Fair will be held from July 21 to 31, an event in which artisans perform and exhibit their works at public and receive awards for their talent through the Hammered Copper Contest At the end of this celebration, the religious festival begins on August 2 to 16. The events begin on August 2, when the goldsmiths and other residents make the pilgrimage to the church of the patron of Italian origin, Santa Clara de Asis. ", tags : ["santa clara del cobre"] },
	{ value : "Tacámbaro is a municipality located in Mexico, in the state of Michoacán, with 76,661 inhabitants in 2010. Its name means 'place of palm trees'. The place bears the surname of General Juan José Codallos, who fought in the town In favor of federalism, the city of Tacámbaro is surrounded by forests and has a temperate climate, which is why it is considered 'the balcony of hot earth'. One of the most visited sites is the sanctuary of the Virgin of Fátima, famous For its 4 paintings with images of the refugee virgins, the queens of Poland, Hungary, Lithuania and Cuba, it also has a replica of the Holy Sepulcher.Other outstanding religious temples are the Cathedral of San Jerónimo built between 1538 and 1570, which gave rise to to another construction, the Agustino Convent where its old cloister is used as Municipal Palace, also in Tacámbaro the first mixed rural norm school of all Latin America was founded. [citation needed] Visitors can also enjoy its vast ecotourism area such as the Magdalena lagoon, a natural reservoir, the hollow hill, a forested area designated as a protected natural area and the Alberca, which is one of the three volcanic craters filled with water that Michoacán has. Its cuisine is considered one of the best in Michoacán. ", tags : ["tacambaro"] },
	{ value : "The word Tlalpujahua comes from the Nahuatl tlalli (earth) and poxohuac (sponge, fofa) so its name means tezontle land or spongy or spongy land, probably due to the characteristics of the soils where this population is settled. name in Otomi is Xijumú It was designated Magical Town on June 27, 2005 for its cozy current appearance, which for more than 3 centuries was a bonanza mining site with veins of gold and silver.From the City of Mexico is 171 km or 106 mi, 2 hours 19 minutes, from Morelia 134 km or 83.3 mi, 1 hour 33 minutes from Querétaro Queretaro - Epitácio Huerta - Tlalpujahua de Rayón, 117 km or 73.0 mi, 1 hour 56 minutes, only 10 km distant from El Oro, State of Mexico, also declared a Magical Town, with 4 3 and 2 star hotels, it has several hotels and guest houses, which are adapted to the different possibilities of the tourist. being this activity one of the most important for the economy of Tlalpujahua, as well as some other activities such as the elaboration of fine quarry works.", tags : ["tlalpajahua"] },
	{ value : "Tzintzuntzan is a town that was the most important city of the Purépecha Empire and later its capital. The modern town of Tzintzuntzan (lacustrine zone) is the head of the municipality of the same name.The archaeological zone includes a ceremonial center, built on a platform of about 400 m2, which has an access ramp in the center, on the platform were built five yácatas (stepped platforms that combine a rectangular body with a circular one, which makes the plant seem like a kind of '), which were the basis of the temples dedicated to the worship of the main gods of the Tarascan people, among them Curicaueri, convent of Santa Ana de Tzintzuntzan, Franciscan, dating from the 16th century, including the open chapel of San Camilo. of San Francisco de Asís, plateresque style, completed in 1601. Church of La Soledad, baroque construction of the seventeenth century, vestiges of the hospital of Indians, with an open chapel erta isolated. Monumental atrium with atrial cross. Chapel of the Virgin of Guadalupe, in the community of Cucuchucho. ", tags : ["tzintzuntzan"] },
	{ value : "Tepoztlán is a heritage of the northern state of Morelos, in the center-south of Mexico. The town functions as a government seat of the municipality of the same name.The town is a popular tourist destination, due to its proximity to the City It is famous for the remains of the pyramid built on the top of the Tepozteco mountain, and also for the exotic ice cream prepared by the people of the town, as well as its handicrafts.Tepoztlan is considered a place mystical for its legends and traditions that are still respected by the inhabitants themselves, many people visit it since the whole year is full of festivities that people do depending on the neighborhood they live in. One of the most anticipated festivities is the Day of Muertos in which people go out with their children to 'ask for calaverita' wearing a traditional chilacayote in the shape of a skull.One of the destinations that makes Tepoztlán famous is 'el Dado', a salient of rock in the shape of a cube that is part of a hill located in Meztitla. At the foot of the hill, there is an area for camping controlled by ranger and rescue teams to prevent any accident. Next to 'the dice' there is another slightly smaller salient to which the people of the town and especially the tourists call 'Dadito' this also has a cube shape, however, it is not clearly appreciated. In this area, mountain activities such as abseiling, climbing and long walks are carried out. Also, in rainy season, the amount of water increases and a river that crosses the hill is formed.", tags : ["tepoztlan"] },
	{ value : "Tlayacapan is a Mexican municipality in the state of Morelos, Mexico.) The municipality has a great diversity of tourist attractions: first, the former convent of San Juan Bautista, whose architecture and frescoes, reflected in its walls dating back to from the 16th century, they show the form of expression and tradition of the Augustinian friars, as well as their chapels, which, due to their architectural beauty, are undoubtedly a worthy attraction to visit.Another attraction is the museum that can be found inside the Ex convent of San Juan Bautista, where the mummies discovered in 1982 are exhibited inside the main nave, showing the different characters that were buried in the place, as well as the house of culture 'La Cerería', a cultural center that shows various exhibitions In January 2007, the Coptic Patriarch Shenouda III inaugurated the Temple of Santa María and San Marcos, the first Coptic Orthodox church in Mexico, at the entrance to the town. acapan is one of the most visited places in the state of Morelos, due to its colonial relief and the various craft shops of the municipality, with products made by craftsmen from the same place. One of the curiosities of this site is that the alternative rock band The Killers filmed there the video clip of their single 'When you were young'. ", tags : ["tlayacapan"] },
	{ value : "Sayulita is a small town located in the Bay of Banderas in the south of the state of Nayarit on the shores of the Pacific Ocean, Mexico. The nightlife in Sayulita is very active, multiple parties and nightclubs are held every weekend. week is a tradition 'friday of coconuts' every Friday after midnight the party is held at the beach club 'cocos' with music to dance in. To get to Sayulita, take the federal highway 200 Tepic-Vallarta and approximately In the '125 km' there is the detour that takes you to the town of Sayulita on a paved road, located 38 km from the international airport of Puerto Vallarta, you can get to Sayulita by public or private transport ", tags : ["sayulita"] },
	{ value : "Santiago, in the northernmost region of the state of Nuevo León, is the ideal place for regios and tourists from all over to enjoy some good days of relaxation, fun and adventure, located in the Cumbres de Monterrey National Park. , its town center serves as a framework for the natural wonders that are housed inside, especially its canyons, rivers and impressive waterfalls.As an entrance portal to the Sierra Madre Oriental, Villa de Santiago has been constituted as the perfect destination to practice canyoning, as it houses the canyons of San Critobal, Chipitín, Matacanes and Hidrofobia, which make this Magical Town one of the best places in the country for adventure tourism.This Magical Town also has a huge historical dimension because of its colonial past, which began in 1645 when Diego Rodríguez de Montemayor established the first settlement on what is now calle de Héroes esquina con Ca National road, which after being enlarged had to be abandoned by the bellicosity of the original settlers, who perpetrated numerous attacks against the colonizers and almost managed to finish with the history of this town.", tags : ["santiago"] },
	{ value : "Linares is a beautiful Neolean town, with beautiful buildings, natural landscapes and its delicious Glorias. Linares is a beautiful city in the province of León, the capital of the municipality of the same name located in the central-south-eastern part of the state, bordering Tamaulipas has limits with also the Neoleonian municipalities of Montemorelos, General Terán, Galeana, Rayones and Iturbide, and with the municipal entities of Mainero, Villagrán, San Carlos and Burgos, Linares has splendid buildings, both civil and religious, in its historical center, standing out the Plaza de Armas, the Cathedral of San Felipe Apóstol, the Chapel of the Lord of Mercy, the Municipal Palace, and the buildings of the museum and the old casino.La Hacienda de Guadalupe is a historic site, while the Cerro Prieto Dam and El Nogalar Park are two excellent places to get in touch with nature and practice outdoor sports. ares has two magnificent traditions, a culinary and a musical one. The culinary tradition is that of its Glories, the famous burnt milk candy native to the town. The musical tradition is that of his drummer ensembles. The Fair of Villaseca, in the linarense district of the same name, is the most important festive event.", tags : ["linares"] },
	{ value : "Capulálpam de Méndez, is a town in the state of Oaxaca, Mexico. Its entire town is considered a cultural and architectural heritage, where the Catholic temple dating from the sixteenth century, a water deposit called El Chorromonte, stands out. the Monument to the Miner, the Monument to the Mother and the traditional houses The Temple of San Mateo was erected in the 16th century and from that time it still has its roof, an elegant alfarje covered with mud tiles outside. They show all the variants of the Mexican baroque of the seventeenth and eighteenth centuries, from the more sober baroque Solomonic to an exuberant churrigueresque where fine figures of angels serve as stipes, vernacular architecture occupies an important place within the image and culture that make up the identity as a people, their houses as a dominant element of the landscape are made mostly with adobe and brick walls, coffered ceilings covered with e clay tile and traditional earthen or mosaic floors, with cobbled and winding streets and walls adapting to the natural broken topography. ", tags : ["capulalpam de mendez"] },
	{ value : "Huautla de Jiménez is a town in the Mexican state of Oaxaca, belonging to the municipality of Huautla de Jiménez and the District of Teotitlán, within the Cañada Region. There is a single church in Huautla de Jiménez, dedicated to San Juan Evangelista. However, the religious life, often mixed with indigenous elements, is of great importance in the region.The city is the seat of the territorial Prelature of Huautla, among the main religious festivities are the Lord of the Three Falls (third Friday). of Lent), that of the Virgin of the Nativity (September 7 and 8), as well as that of Our Lady of Juquila (December 7 and 8). ", tags : ["huautla de jimenez"] },
	{ value : "Mazunte is a small town on the Pacific coast of Oaxaca, Mexico, 22 km southwest of San Pedro Pochutla on the 200 coastal highway, about 10 km east of Puerto Angel and only 1 km away. of San Agustinillo and 264 km south of the capital of Oaxaca, Mazunte is famous for its sea turtles.During the first half of the 20th century, there was little population, but this changed when a market for turtle meat and eggs was developed, Because many turtles that come from Mazunte lay eggs, by the 1970s, Mazunte was the center of sea turtle hunting in Mexico, with its own slaughterhouse, Mazunte is 1 kilometer (0.621371192 mi) from the beach with a secluded cove on the west end.The boats on this beach offer rides to Zipolite, Puerto Angel, Estacahuite, La Mina, La Boquilla and Ventanilla.Depending on the season, it is possible to see whales, dolphins, turtles, stingrays and other species Aquatic rentals for water sports are also available. The Mexican Turtle Center is what was called the turtle museum decreed by the federal government in 1991, after the 'total and permanent' closure of sea turtles was established. Construction began in 1992 and finished in November 1993", tags : ["mazunte"] },
	{ value : "San Pablo Villa de Mitla is a town and municipal seat in the state of Oaxaca, Mexico, famous for being the site of the archaeological ruins of Mitla, it is part of the district of Tlacolula, in the east of the region of Central Valleys The town is also known for its handmade textiles, embroidered embroidered pieces and mezcal.The city also contains a museum, which was closed without explanation in 1995 and since then its entire Zapotec collection and elements The city also contains a museum, which was closed without explanation in 1995 and since then its entire collection of Zapotec and Mixtec cultural elements has disappeared.The main attraction is the ruins of the pre-Hispanic city of Mitla, which It is best known for its buildings decorated with mosaics of small flat stones that fit together to create designs, especially openwork.2 Mitla is the second archaeological zone most visited logic in the state of Oaxaca. ", tags : ["san pablo villa mitla"] },
	{ value : "The original name is Teposcololan and means: 'Along with the copper twist', comes from the Tepoztli voices: copper, colotl: kink and the Tla variant: together or in. The main attraction of Teposcolula is the Conventual Ensemble San Pedro and San Pablo, erected by the Dominicans in the mid-sixteenth century and whose temple houses the Lord of the Stained Glass, other architectural attractions are the Casa de la Cacica and some squares, mansions and spaces of the historic center. San Pedro and San Pablo Teposcolula must be mentioned the Dance of the Mascaritas and their religious festivals, mainly that of the Señor de las Vidrieras.The delicious Oaxacan gastronomy finishes rounding off the wonderful set of attractions of Teposcolula.", tags : ["san pedro y san pablo teposcolula"] },
	{ value : "Chignahuapan (in Nahuatl: Chiconahui, atl, bread, nine, water, on or in 'On the nine waters') is a city located in the northern part of the Mexican state of Puebla. Nahuatl chicnahui, which means 'nine', which means 'water', and the suffix bread, which means 'on', 'en', which together means 'on the nine waters' Chignahuapan has several tourist attractions, among them The Church of Santiago Apóstol of the 16th century and the Church of the Immaculate Conception can be mentioned, as well as a waterfall of 200 meters known as the Quetzalapan waterfall, as well as the Cuautelolulco dam and the water eyes that give its name There are also hot springs in this municipality. ", tags : ["chignahuapan"] },
	{ value : "The City of Cuetzalan is a town located in the foothills of the Sierra Norte de Puebla, is the municipal seat of Cuetzalan del Progreso, one of the 217 municipalities in the state of Puebla, 183 kilometers from Puebla de Zaragoza. The town's architecture is made up of diverse architectural influences, although due to the humid climate of the region, many of the buildings are damaged by humidity, some houses have been demolished and debris or precarious constructions in the lower streets of the town. of wood occupy their place and much of the traditional architecture has been lost.The architecture for which Cuetzalan stands out, of most of the towns in the area, is that it has authentic 19th century inmubles as it is said in the catalog of monuments elaborated by INAH, as a living example are the Spanish-style temples and mansions of the historic center .. Parish of San Francisco Inspired by Renaissance This and Romanesque-Gothic details, the current parish, consecrated to San Francisco de Asís, dates from the end of the 19th century, it has a tall conical top tower as well as its gilded dome. Sanctuary of Guadalupe. Inspired by the Basilica of Lourdes, France, the sanctuary of Our Lady of Guadalupe has rows of clay jars, which differentiates it from the previous one, for what is called 'Church of the Jarritos'. ", tags : ["cuetzalan"] },
	{ value : "The City of Pahuatlán de Valle is a city in the north of the Mexican state of Puebla that is one of the main enclaves of the Otomí population in the state, in an area where the majority of the indigenous population is Nahua. For the production of amate paper following a prehispanic artisan technique, the gastronomy of the region is the result of the fusion of the Totonaca, Nahua and Otomí cultures, with the Spanish ingredients, offering dishes such as: Pascal de Cacahuate and pip with chicken meat or pork, ant sauce, (Chicanos), grapefruit tamales, peanut tamales, poblano mole with different variants depending on the area in which it is cooked, onion tongues and taquitos, itacates de quelites (edible grass of the region), Beef and pork chicharrón, smoked cecina, Different varieties of edible flowers such as echidna, equimite or bean flowers, more than 20 varieties of edible plants or: the quintoniles, quelites of deer, mountain, drizzle, tiger ears, cow tongues, watercress, cilantros, papalos, etc. ", tags : ["pahuatlan"] },
	{ value : "San Pedro Cholula, its name comes from the Nahuatl roots: 'chololoa', which means 'to sink the water.' The site that currently occupies the city of Cholula shows signs of human occupation at least since the Middle Preclassic Mesoamerican, which represents a continuous occupation for more than 30 centuries The ancient Cholollan was an important ceremonial center of Mesoamerica, maintaining until the great Cholulteca massacre, as the place of initiation of priests and personalities of diverse cultures. The international context is indisputable, derived from its archaeological remains, especially the Tlachihualtepel (Hill made of earth) or also called Machihualtépetl (hand made hill) .It contains the oldest pyramid building since it dates from approximately 3 thousand 500 years, from the Preclassic period earlier, its great pyramid is the one that distinguishes this city, it measures 400 meters per side, with s 8 kilometers open inside, this work was done by archaeologists to have a view of the inside where you can see prehispanic paintings, which have been classified as the largest in America. Next to the pyramid is the Sanctuary of the Virgen de los Remedios, this temple was established after the conquest in the period of evangelization superimposed on indigenous beliefs, now live in a space that accounts for the past and history. Our lady of the remedies celebrate their holiday on September 8 with a holiday, which begins 8 days before, all the towns of that municipality have to put a day of dancing and the last serenade all night and is crowned . There is also the esplanade that forms the monumental complex with the Church and the Convent of San Gabriel; the Church of the Third Order; the Royal Chapel with its posas chapels, its atriums and the Fray Bernardino de Sahagún Franciscan Library; the Parish of San Pedro, the Museum of the City Casa del Caballero Águila and the Portal de Guerrero", tags : ["san pedro cholula"] },
	{ value : "Tlatlauquitepec is a municipality of the state of Puebla, Mexico whose municipal seat is the Tlatlauquitepec City, is located in the Sierra Norte de Puebla and is part of the Teziutlán Region, being the second most populated municipality and the second most extensive The former Franciscan convent of Santa María Tlatlauquitepec, the first convent of passage in America, begun in 1531, one of the best preserved in all of Mexico, Cerro Cabezón, formerly called the Tlatlauquitepetl, since on clear mornings thanks to the color of the rock and the sun's rays can be observed a reddish color Viewpoint Cerro Cabezón and Cristo Rey, are at the top of this hill, from which it is possible to see the villages surrounding Tlatlauquitepec, such as: Atempan, Teteles de Ávila Castillo, Hueyapan and Yaonahuac, Camino Caracol: the ancient road that leads from Huaxtla to the top of Cabezón, it is possible to see some cobbled parts, Xiliaco, Huaxtla (Place of Axiles or Acociles): small spring that is nourished by the waters of the cabezón hill. ", tags : ["tlatlaquitepec"] },
	{ value : "Xicotepec derives from Nahuatl and means 'hill of the bumblebees'. It is located in the northwest of the state, adjacent to the municipalities of Pahuatlán, Huauchinango, Honey and Juan Galindo.In 1862, when the Battle of Puebla was about to happen A handful of serranos, commanded by Miguel Negrete, went to this victorious fair in the history of Mexico, on their return to Xicotepec they decided that if the constitutional order dictated that Villa should be promoted, the last name of the illustrious president should be annexed. Benito Juarez, from here comes the name of Villa Juarez.One of the most visited places in the city, its central garden is one of the most flowery in the state of Puebla because of the amount of flowers planted all of them produced by locals, trees carefully trimmed to give the shape of human figures, animals and geometric figures, in their kiosk wind music bands gather to delight the Sunday afternoons to the visitors n its melodious notes, and you can walk through its corridors accompanied by the family, enjoying an esquite, a prepared corn or an ice cream. In the portals, you can enjoy a cup of aromatic coffee produced in Xicotepec, in the cafeterias that are on the zocalo portals, which flood the atmosphere with the exquisite smell of roasting coffee. Monumental Virgen de guadalupe Built on the hill of Tabacal, can be seen from any point of the city, its sanctuary has become a spectacular viewpoint, where you can see the entire city from the heights, excellent place to achieve panoramic images. It is the fifth image of the largest Virgin of Guadalupe in Mexico, with its 30 meters high. ", tags : ["xicotepec"] },
	{ value : "Zacatlán de las manzanas is recognized as one of the largest producers of this fruit in the country, it received the name of magical town in April 2011, but in addition to its architecture, traditions and history, there is something that makes it simply special, its mist A nature show that gives us a really impressive view, here we show you some places you can visit during your stay 1.The Floral clock This is the icon of the place, placed during the remodeling of the Zócalo in 1986, it was donated by Centenario Watches, it has two caratulas of 5 meters in diameter and has 9 different melodies to mark the hours according to the time of the year.Their creators are the same as the clock in the sunken park Ex-Franciscan Convent An architectural jewel colonial, whose construction began in 1562, concluding in 1567 by Franciscan friars, making it the oldest convent in Puebla, is dedicated to the Vir gene of the Assumption, whose festival is celebrated on August 15 in the framework of the apple fair, which in this 2017, will be held from August 5 to 20. Parish of San Pedro and San Pablo This religious enclosure was built under the mandate of Bishop Juan de Palafox in the mid-seventeenth century, in order to disappear the Franciscan order and surrender their goods to the Diosan church. Inside it has viceregal paintings with legends in Nahuatl. ", tags : ["zacatlan"] },
	{ value : "Atlixco It is located 30 km from the city of Puebla, capital of the State and has two important access roads: the Federal Highway 190 and the Autopista Vía Atlixcáyotl, currently a modern city with more than one hundred thousand inhabitants. , which has managed to harmonize its urban development with the majestic legacy of colonial architecture left by its founders (1579), and which today is one of the main tourist attractions of this municipality. It received its title of 'Heroic' due to the Battle of 4 May 1862 that would precede the Battle of Puebla on May 5, 1862. It is known for its good climate and the great floristic, commercial and tourist activities that earned it the name of Atlixco de las Flores and Granary of New Spain, During the colonial era ZÓCALO - A walk around the zocalo is an unforgettable experience, savoring the delicious ice creams and sorbets sold nearby, as well as entering a restaurant to taste the cecina atl ixquense, the guacamole, the Atlixquense consommé, or the trout in its different modalities. Just one block from the center, in the market you will find handmade tortillas, cured meats, tlacoyos, fresh cheeses from the region or if you are 'tasty palate' you can eat the original chapulines fried with salt and lemon. ATLIXCO DE LAS FLORES - Atlixco is an agricultural producer highly recognized nationally and internationally for its great variety and quality of ornamental and fruit trees as well as plants and flowers for garden or decoration. It is a must to visit the nursery area where you will find a paradise full of color and aroma to delight visitors and residents. ", tags : ["atlixco"] },
	{ value : "Huauchinango in Nahuatl means: 'on the wall of the trees'.It is located 153 km from the city of Puebla and is part of the region called SIERRA MÁGICA, which has been Magical Town since the end of 2015. Its first settlers established in 1116 and were of Chichimeca origin, Xolotl ordered his son Nopaltzin to find a place to establish his own empire and settled on the banks of the Texcapalapa River, today the Texcapa River, which borders this town. from that time in Huauchinango, are the four artificial hills located in the El Cerrito colony, as well as the sacrificial stone that is currently in the Sacristy of the Augustinian Convent of the City MURAL DE LA FE: Located inside the Sanctuary of the Lord Jesús del Santo Burial and painting by the local artist Raúl Domínguez Lechuga, painted in 1989, represents the history of the construction of the Church, the construction of the Sanctuary, the image and stone, when it burned itself, the procession in the main neighborhoods of the city and the patron saint. The Mural represents the evangelization in Huauchinango.", tags : ["huauchinango"] },
	{ value : "Bernal is a town in the Mexican state of Querétaro, located in the municipality of Ezequiel Montes, known to be located at the foot of the Peña de Bernal, the third largest monolith in the world. Built in the 17th century, it is one of the most important in the political history of Bernal, with a beautiful clock of German origin on its front tower, which was placed to commemorate the beginning of the 20th century. The offices of the Municipal Delegation Capilla de las Ánimas This chapel, also known as the Animitas, dates back to the 18th century and was built in honor of all the souls of Purgatory.Its attractive design is due to the small dimensions of its atrium and altar It has an open-air theater and a park where visitors can take, in addition to a rest, magnificent photographs .. Chapel of the Holy Cross The chapel dedicated to the Holy Cross, to whom Bernalens venerate with great devotion, was built between the eighteenth and nineteenth centuries. The tradition marks that the pilgrims must reach the atrium on their knees under the sun, as payment of a heavenly debt. Temple of San Sebastián Mártir Its construction began in 1700 and ended in 1725. It does not have a defined style; However, in the bell tower you can see the hand of the indigenous artist. In addition, several stained glass windows worthy of admiration were recently placed. An excellent way to enjoy Bernal is to walk its beautiful streets, visiting the first houses built during the seventeenth century. The Tourist Office offers two tours; the first one tells the history of the town and the geology of the rock; the second, narrates the foundation of Bernal and the procession of las Animas. The circuit of historical monuments is well known, such as the Castle of the XVII Century that has a large clock of German origin, placed to receive the arrival of the XIX century.", tags : ["bernal"] },
	{ value : "Cadereyta is the entrance to the Sierra Gorda of Querétaro, it has a great geographical variety in the south, its climate is semi-desert and in the north it has wooded areas. In Cadereyta, you can see in all its breadth the Queretaro semi-desert from the flora and In this municipality there are several wine fields which makes it perfect to visit and learn more about wine tourism in Querétaro. In 2011 it was named Magic Town thanks to its history and magic inherited from the Chichimec peoples, pames and jonaces, as well as for its various tourist attractions.Their buildings have a colonial architecture that invite you to know more about the history of the place.The cuisine of Cadereyta is characterized by employing ingredients such as garambullo, guamichi, tuna, pitaya, of the semi-desert, as well as the use of products of animal origin and the consumption of insects such as grasshoppers, maguey worms and cham The nopal in penca, typical otomí dish is also very popular in this area and can be tasted mainly in Cadereyta and Colón. ", tags : ["cadereyta de montes"] },
	{ value : "Jalpan was named Magical Town in 2010 and is located in the heart of the Sierra Gorda. The natural beauty is complemented by the diverse cultural expressions and the magnificence of the baroque art of the Franciscan missions, bequeathed by Fray Junípero Serra. The Jalpan Dam entered the list of Ramsar sites since 2004 thanks to its ecological importance as a wetland and to receive migratory birds.In Jalpan there are two of the Franciscan Missions of Querétaro: Santiago de Jalpan, Nuestra Señora de la Luz de Tancoyol What many people interested in religious tourism come to this Magical Town to know about the legacy of the Catholic religion in our state.Sin the Sierra Gorda, Jalpan has several natural attractions where you can practice activities such as hiking, cycling of mountain, sport fishing and observation of flora and fauna Mission Santiago de Jalpan.It was the first of the five missions, built a between 1752 and 1758 by Fray Junípero Serra as an evangelizing work. Mission Our Lady of the Light of Tancoyol. It is possible that its author is Fray Juan Ramos de Lora. Its cover is iconographically the most elaborate of the five missions. Archeological of Tancama. In this place the Huastec culture settled and it had its maximum splendor between the years 700 to 900 of our era. It consists of three squares on a slope that simulates the shape of a nearby hill. It had ceremonial and astronomical functions. ", tags : ["jalpan de serra"] },
	{ value : "Tequisquiapan is a small town located in Mexico considered as Magical Town, located in the State of Querétaro and head of the municipality of the same name, forming part of the San Juan del Río Metropolitan Area. Tequisquiapan's fame goes back many years It was also famous for its proximity to the Cheese and Wine Route in Querétaro and its Cheese and Wine Fair, which is celebrated every year in the month of May. Pueblos Mágico, its beautiful and peaceful newly beautified plaza, makes it an ideal place to stroll with family or friends, a place that invites you to enjoy its restaurants, its craft shops and the beauty of its church and its kiosk. Its square is also the seat of various events. ", tags : ["tequisquiapan"] },
	{ value : "One of the most recommended places to visit in Querétaro is the Magical Town of San Joaquín. For its varied tourist offer, travelers find in this place a wide range of leisure and relaxation options.The Campo Alegre National Park is a vast wooded area ideal for rural lunches and the enjoyment of nature.It has grills, lighting, showers and palapas.The archaeological site of Ranas, three kilometers from the municipal seat at the top of two hills, is another The attractions of San Joaquín This site was an important ceremonial, political and religious center of the ancient Chichimecas, as are the cave paintings of San Francisco Gatos, Los Azogues and El Durazno. the Grotto of the Herrera, for its wild majesty and the innumerable formations of stalactites and stalagmites that exist in its interior, that have more than 100 million years old. For lovers of archaeological tourism, another recommendation is to visit Toluquilla, a pre-Hispanic site that stands out for its excellent state of preservation, and where you can meet a pair of pyramids and a ball game. The surroundings of this place are usually covered by fog, and are very suitable for the practice of ecotourism and rock climbing. ", tags : ["san joaquin"] },
	{ value : "The Bacalar lagoon is a lagoon located in the south of the Mexican state of Quintana Roo, in the municipality of Bacalar about 40 km north of the state capital, Chetumal. Bacalar's lagoon is popularly known as the Laguna de los Siete Colores due to the fact that seven different shades of blue can be distinguished between its waters, due to the different depths of the same, inside the lagoon there are three different cenotes, whose waters overflowed and formed a single lagoon, its form is narrow and long, 42 km long and only 4 km at its widest point, the Bacalar lagoon is one of the few bodies of permanent surface water of the Yucatan Peninsula, whose calcareous soil does not allow the superficial retention of the liquid, thus forming underground streams and cenotes, with the exception of the Bacalar region and the south of Quintana Roo, where the lagoon is part of a large system together with other smaller lagoons, such as Laguna G uerrero or Laguna Milagros, which are occasionally linked during rainy seasons through aguadas and swamps with the Hondo River and the Chetumal Bay.", tags : ["bacalar"] },
	{ value : "Isla Mujeres is a small island located in front of the city of Cancun. It is an excellent place if you want to enjoy the beautiful beaches of the Mexican Caribbean in hippie style, backpacking or for a romantic getaway as a couple. Unlike Cancun, its atmosphere is very calm and less glamorous and that is felt from the moment you get off the ship.As soon as you get to Isla Mujeres, walk to the left and about 4 blocks you will find a beautiful beach known as Playa Norte, this extends to the Hotel Mia, which is at the other end of the beach, is known to be a beach seminudista since women are allowed to walk topless, it is a family beach so do not go further although this In the North there are some bars, restaurants and hotels, but the best thing is the tranquility of its waters, you can walk up to 200 meters and the water in some parts will reach your knees. the night you can visit Fayne's is a bar with live music to dance, almost always full of foreigners; another is La Terraza, it has very good music (weekends live salsa) and both tourists and local people come. Another is VIP, a bit more strawberry but small, as well as Koko Nuts with a fresh palapa, rustic atmosphere with good drinks and music and finally there is Euforia and My Space which are the favorite clubs of the local people. They are all in the center of Isla Mujeres, you can arrive by simply asking.", tags : ["isla mujeres"] },
	{ value : "Tulum or Tuluum was a walled city of Mayan culture located in the State of Quintana Roo, in the southeast of Mexico, on the coast of the Caribbean Sea, and is currently a great tourist attraction of the Riviera Maya and The city of Tulum is located in the Tulum National Park, and the archaeological site of Tulum is located on the eastern coast of the state of Quintana Roo, in the region known as the Riviera Maya. In ancient times, the city received the Mayan name of Zamá (which means maya dawn) and the current name ulum (meaning Mayan wall), which seems to have been used to refer to the city when it was already in ruins. records in murals and other works found in the buildings of the city, it is considered that Tulum was an important center of worship for the so-called 'god descending.'", tags : ["tulum"] },
	{ value : "Real de Catorce was a mining town and currently a tourist town located in the heart of the Sierra de Catorce, in the state of San Luis Potosí, in the north of Mexico.The name was taken from the word Real, for its mines of silver, and of fourteen thieves who hid in this place.One of the great mining centers of San Luis Potosí was Real de Minas de Nuestra Senora de la Limpia Concepcion de Guadalupe de los Alamos de Catorce, or better known as Real de It is difficult to specify when the first vein was discovered, but in 1772 it was a real or a mining town, it is until August 11, 1777 when the term 'The fourteen' appears as in documents. ", tags : ["real de catorce"] },
	{ value : "Xilitla is a municipality located in the Huasteca region of the state of San Luis Potosí, Mexico, known for its fertile mountains and springs, which create incredible landscapes throughout the municipality. It has helped to preserve the Nahuatl and Téenek indigenous cultures and their traditional ways of life.It is famous for its coffee and its production of piloncillo, as well as being the rainiest place in San Luis Potosí.Agustino Temple and ex-convent, built in 1557 It belongs to the monastic-military architecture Las Pozas, surrealist garden built by the eccentric English artist Edward James, La Silleta, a mountainous massif that is a challenge for mountaineers Parador El Paraíso, from where you can appreciate the deep canyon Tancuilín and a beautiful view of the mountains, Ahuacatlán, which is a picturesque town that deserves to be visited. ", tags : ["xilitla"] },
	{ value : "Cosalá means a place of great beauty, and lives up to its name. It is a sudden and beautiful sprout of color in the mining heart of Sinaloa, considered the colonial jewel of the state of Sinaloa for its secluded environment, New Spain buildings, cobbled streets, traditions and legends, gastronomy and customs that proudly recall their past.The Parish of Santa Úrsula, the Museum of Mining and History, the Ecological Reserve of the Mineral of Our Lady, the Plaza de Armas, the Burnt Barracks, are part from its collection of attractions, as well as its waterfalls, ghosts, whistles, tamales, etc. It is a place where nature and culture, history and the present combine harmoniously, because of their immense values, It has been recognized as one of the Magical Towns of Mexico.", tags : ["cosala"] },
	{ value : "Mazatlan, in the state of Sinaloa, is currently the main maritime access road between Mexico and Asia, with its multipurpose port that receives tourist cruises as well as huge cargo ships, thanks to its close location and the wealth of its mines and estuaries, the Magic Town of Rosario served as a springboard for the consolidation of this port, so since the seventeenth century both places have enjoyed an almost symbiotic relationship, although groups of indigenous totorames controlled the region from the valley to the coast, in what currently covers the territories of Mazatlan, San Ignacio, Concordia, El Rosario and Escuinapa, their bellicosity and constant confrontations against the xiximes, coras and shortages, were depleting their population until in the years of the founding of The Rosario were practically non-existent, however, as the town became increasingly important economically and politically, the totorames adopted the surnames of the manors that were emigrating, reason why their roots persisted through denominations like Rodríguez, Ramos, Rivera, Ortíz and Alduenda. This mainly influenced the fishing activity, in which this town was proficient. The main enclave in which the ancient totorames flourished was Chametla, founded in 1531 and considered to be the oldest in northwestern Mexico. Moreover, before the conquest, this territory was of great importance not only for the region, but for all of pre-Columbian Mexico, since there is a belief, based on archaeological discoveries, that the Aztecs left from the outskirts on their voyage of discovery towards Tenochtitlán. The Community Museum of Chametla, located on a farm of the early twentieth century next to the Parish of San Pedro, concentrates the remote past of the town through a collection of archaeological pieces that include stone or ceramic artifacts, used for domestic use, ritual or productive, such as winches, ceramic bowls, zoomorphic and anthropomorphic figures, and mortuary urns that show a particular style.", tags : ["el rosario"] },
	{ value : "El Fuerte is a Mexican city in the State of Sinaloa, head of the municipality of the same name, has great natural, historical, architectural, cultural and ingrained indigenous traditions (Yoremes), as well as being within the Mar de Cortés Ecotourism Circuit - Barrancas del Cobre.", tags : ["el fuerte"] },
	{ value : "Mocorito, the Athens of Sinaloa, has architectural beauty, sites of historical and cultural interest, and beautiful traditions. Mocorito is the capital of the Sinaloan municipality of the same name, located in the central-northern region of the state. by the also Sinaloa municipalities of Sinaloa, Navolato, Culiacán, Badiraguato, Salvador Alvarado and Angostura For its cultural wealth, the small town of Mocorito is called the Sinaloan Athens, Mocorito invites you to walk its cozy streets, starting at the Plaza Miguel Hidalgo in the heart of the historic center, where artistic, cultural or historical sites are chained, such as the Parish of the Immaculate Conception, the Plaza Cívica Los Tres Grandes de Mocorito, the Municipal Palace, the Benito Juárez School , the Cultural Center, the Casa de las Diligencias, the Regional History Museum, the Alameda Park and the Pantheon Reformation. e Mocorito are the Ulama and the Sinaloan Band. In the vicinity of the Magic Town, you have to know the small town of San Benito and the small town of Guamúchil. You can not leave Mocorito without tasting a chilorio. ", tags : ["mocorito"] },
	{ value : "The abundant groves of poplars welcome those who come in search of beautiful places of rest with a great history within their walls. Located in the southeastern state of Sonora, the Magical Town of Alamos is the result of more of four centuries of abundance and political events, which led to the beauty of its colonial constructions, also known as 'The City of the Portals', it is also the cultural capital of the state, thanks to its artistic festivals and secular celebrations, which are its narrow, cobbled streets, huge hallways, and patios full of vegetation, a perfect setting to celebrate beauty.The average climate of 24 degrees is the cherry of the cake, making Álamos a very enjoyable destination in a predominantly desert region. good colonial town, a tour in Álamos begins with its Plaza de Armas, which has two features: the interesting architectural fusion a tonic between the Spanish Baroque and the Mexican Indian, a legacy of the Andalusians who designed the historic center in the 18th century and knew how to trace the best of both cultures. The second is the picturesque little train that leaves every hour from there to show tourists the most representative places of the town, such as the old municipal jail, the Government Palace and the market known as El Parián. The mansions of Alamos not only attract the attention of visitors for their beautiful details and ornaments, but for the stories and legends that inhabit them. One of the best known is the Hacienda de las Delicias, where several claim to have seen the ghost of the young Beatriz Almada, who committed suicide on his balcony in 1800 because his family prevented him from marrying the gardener, and still prowling the courtyard in which he was hiding with his lover.", tags : ["alamos"] },
	{ value : "Magical Town of Magdalena de Kino awaits you with its interesting cultural and historical heritage. We invite you to get to know it with this complete guide Magdalena de Kino is the head of the Mexican municipality of Magdalena, located in the north of the country. Sonora state, 80 km from the US border The small Sonoran city was elevated in 2012 to the rank of Magical Town to promote a tourist current based on the proximity of the United States The first Hispanic settlement was the old Mission of Santa María Magdalena, founded in 1648 and destroyed by the indigenous Pápagos and Pimas altos, the Jesuit Father Eusebio Kino arrived in 1687 and re-founded the mission at the end of the 17th century.The city was called Santa María Magdalena de Buquivaba until in 1966 the remains were found Father Kino and the town took the name of its founder.", tags : ["magdalena de kino"] },
	{ value : "In the sierra where the state of Tabasco and the state of Chiapas adjoin is the Magic Town of Tapijulapa. A village of white houses and red tile roofs surrounded by dense vegetation, Tapijulapa is a town in the municipality of Tacotalpa, A region characterized by its warm and humid climate that presents rains all year round, near the town the Oxolotlán and Amatlán rivers join to feed the Grijalva River, whose waters irrigate the plains of this state.In Tapijulapa you can enjoy the town and its surroundings, just walk its narrow and cobbled streets is a pleasant experience, you can visit the temple dedicated to Santiago Apostle that was built in the seventeenth century, walk along the river or travel by boat to the community of Villa Luz , where you can enjoy sulphurous waters or visit the local museum and former home of Governor Tomás Garrido Canabal.A Tapijulapa is known as the Esmeralda de la Sie rra, is the center of the reserve called Sierra de Tabasco, a protected area to preserve the Tabasco jungle, in this region you can still see animals like the ocelot, spider monkeys and cochimonte or wild pig in their habitat. Walking the steep streets of the town is the temple of Santiago Apóstol, it is located on the highest part of a hill, from this point you can see a spectacular view of the town. Later on, after descending its steps, there are several artisan workshops that work with wood and weave various wicker objects.", tags : ["tapijulapa"] },
	{ value : "Fed by the waters of three rivers, Mier is an oasis in the middle of the Tamaulipas desert, cradle of the border development of Mexico and home to countless histories and traditions that survive in the walls of its buildings and in the life of Its inhabitants, a witness of great battles, are still standing more than 250 years after its founding, to receive with their magic those who seek to immerse themselves in its waters and its culture, located in the north of the state of Tamaulipas, in the foothills of The border with the United States, Mier also offers natural attractions that invite contemplation and relaxation.Each of the rivers, Álamo, Bravo and San Juan, have their dam, where you can perform sports activities such as fishing and hunting, walking through the surrounding trails and even camping under the stars. The historic center of this Magical Town is a beautiful conglomeration of public squares, each with its particular attraction endowed by construccio religious, private houses and picturesque shops that offer the local pride: sweet bread, fabrics, embroidery and leather shoes. The foundation of Mier goes back to March 6, 1753, under the invocation of the Purísima Concepción, to whom corresponds its main church, currently located in its main square, called Juarez. This construction is one of the oldest buildings, having been started in 1757 by the order of the Franciscans in carved stone. Its curious mixture of architectural styles corresponds to a recurrent situation in Mexican temples: its construction took more than a century, so its highest tower contrasts with the rest for having been built in brick until well into the nineteenth century. The second is the House of Culture, where people from all over the country come to contemplate the works and relics exhibited there, such as old photographs of the town, paintings of monarchs and accessories of the famous film actor Eleazar García 'Chelelo', native of the place. In the small tables of the Plaza Hidalgo, the traditional Lottery can be played as a family, whose letters have exquisite illustrations made by local artists; the Argüelles Casino, another of the most important buildings of this Magical Town, is also home to this game in which dozens of families participate in an atmosphere of joy and cordiality. ", tags : ["mier"] },
	{ value : "The starry sky that covers the Biosphere Reserve El Cielo is reason enough to fall in love with the Magical Town of Tula, in the state of Tamaulipas. To this natural beauty is added its architectural, artisanal and gastronomic wealth, which make it in one of the most attractive tourist destinations in the northeast of Mexico. The foundation of Tula goes back to 1617, when Tamaulipas still was not constituted as a state, so initially the mission of San Antonio de Tula was circumscribed to the government of New Santander The Franciscan friars who arrived at the foothills of Cerro de la Cruz, headed by Fray Juan Bautista de Mollinedo, built a temple of sticks and palm that served to evangelize the region for some decades, until reaching the 1700s the uprising was ordered of the magnificent Temple of San Antonio de Padua, thanks to the flowering that was lived in the surroundings of the Laguna de Tula, Tula was named city in 1835, and to date it honors this appointment with an infrastructure that has hotels, restaurants and numerous sites of interest, which can be known in your turibus. The walk begins in the huge Parish of San Antonio de Padua, in front of the main square, considered the second largest in the state. Founded during the 18th century and finished in 1889 with the installation of an elegant English clock in its tower, it consists of a nave topped by a dome, a belfry and a stone facade with two rectangular buttresses. The saint to whom he is dedicated was a friar learned in the gospel, patron of sterile women, poor people, travelers, masons, bakers and paper makers. He is invoked for lost objects and is very popular to ask for a good husband. Another of the Toltec religious monuments is the Temple of the Rosary, ordered to be built during the Porfiriato by the Sisters of the Rosary and a sample of great sumptuousness with its golden dome, its filigree finishes and its polished wood floors; in its interior it lodges the oldest Christ of Tamaulipas, that dates from 1411. When visiting the Chapel of the Hill of the Old Pantheon participates in an episode of the national history, because it served like strategic point during the revolutionary confrontations; the fallen were buried in its atrium.", tags : ["tula"] },
	{ value : "Huamantla is located 42 kilometers from Tlaxcala.) On the arrival of the Spaniards Hernán Cortés, he settled for a few days in this area inhabited by Otomíes, while waiting for the news of the messenger he had sent to the Señoríos of the Republic of Tlaxcallan. San Luis Huamantla was founded on October 18, 1534, land of brave warriors like Tlahuicole, a field where great battles such as Tecoac's were fought in 1876 when General Porfirio Díaz defeated the North American army. also the noble and devout, with a vocation to art and the unity that transforms its streets into rivers of colors every 14th of August to decorate the procession of the Virgin of Charity National Museum of the Puppet (MUNATI) It is located in Huamantla in Memoriam The Rosete Aranda Family, founders of the most successful puppet company in Mexico in the 19th century, had 5,000 pieces made by themselves, they wrote and they mounted their own works. They gave functions before the Presidents of the Republic Benito Juárez and Antonio López de Santa Ana. In the museum you will also find puppets from other companies and countries. Museo Taurino. A space in memory of the Fiesta Brava, you will find a gallery of bullfighters from different eras, models of Plazas de México, posters, news from newspapers that published triumph evenings, bullfighter costumes, bull heads and a mural dedicated to Bullfighting. Museum of the City. It occupies what in times of the colony was a troje of the Franciscan convent, with thick walls and beautiful arches, keeps the memories of the town of Huamantla, from pre-Hispanic pieces to portraits and trophies of characters such as the Alcón de Huamantla.", tags : ["huamantla"] },
	{ value : "Tlaxco is located in a mountainous region that was inhabited by the Otomi people since the end of the 14th century. Located in the Mexican Central High Plateau, at 2540 meters above sea level, Tlaxco is a Tlaxcalteca municipality that borders Puebla to the north. , to the south with the municipalities of Muñoz de Domingo Arenas, Tetla and Atlangatepec, on the east it borders Lázaro Cárdenas and Emiliano Zapata and to the west, with the Hidalgo territory and the municipality of Benito Juárez, perhaps the main attraction of Tlaxco are the paintings These rock formations are found in the nearby caves of La Parada and La Gloria, dating back some 12 thousand years, and the rock art of La Gloria is located on the homonymous property and, due to its antiquity, constitutes an authentic historical and anthropological treasure. The site was discovered in the mid-1980s and is currently a must-see landmark in the tourist map of Tlaxco and its surroundings. Not to be missed are the Cheese, Wood and Pulque Fair and the San Agustín Festival.", tags : ["tlaxco"] },
	{ value : "Coatepec is a coffee region of greater tradition and quality in our country since the last century.  In addition to being surrounded by different whimsical formations of nature that range from trails, hills, walls to waterfalls and waterfalls, Coatepec has a rich colonial mix and that in its heritage, has left about 370 buildings with historical value, so it was declared a National Historic Patrimony.The festival of San Jerónimo in the month of September is the most important religious celebration of the city It is characterized by its traditional arches or arches, the arches are decorated with white and red flowers, the main arch is placed at the door of the parish of San Jerónimo and the others in the other temples of the city. It takes place in the month of May, it is a popular event that includes the coronation of the Queen of Coffee, musical shows, cultural activities, folk dances, bullfights and an artisanal and commercial expo. Cerro de Las Culebras is the viewpoint par excellence to appreciate the outline of the city and its temples. In the afternoons, the atmosphere of the town is conducive to coexistence with friends or romanticism. The taste for orchids among some of its inhabitants gives us the opportunity to meet one of the most important orchids in Mexico, with thousands of plants of different species.", tags : ["coatepec"] },
	{ value : "Papantla is one of the most attractive communities in the state of Veracruz, in fact it is one of the so-called Magical Towns - a name that had been temporarily lost due to a failure in some governmental requirements - due to the natural and cultural wealth that define it. The visitors find in Papantla a place of irresistible gastronomic traditions, with very varied traditional celebrations and enigmatic archaeological sites such as El Tajín and Cuyuxquihui, and Papantla is the ideal place to know the secrets of the Totonaca culture. We recommend knowing in Papantla, the Church of Christ the King, which was built in 1950 by the priest Pedro Onórico and that evokes notably the Notre Dame Cathedral in France. ribs, pointed arches and rosettes, which outline a neo-Gothic style comparable to that of the large cathedral s of the European continent. Equally valuable is the Cathedral of the Lady of the Assumption, which is located in the center of Papantla and whose construction began in the sixteenth century on behalf of the Franciscan religious. The completion of this temple did not happen until 1590. The cathedral has a nave in the shape of a cross, particular to the Franciscans and a façade with four pilasters of Romanesque type, with a large entrance arch and a carved cedar door. The tower of this sacred building is 30 meters high and its clock built in 1895 is still functional. Two other attractions of Papantla are the Municipal Palace and the Israel C. Téllez Park. In the case of the first one, although it was built in 1910, Villa's army threw it down in 1915. It was not until 1929 when it could be rebuilt. At present, the Municipal Palace exhibits a neoclassical style, with a facade of classic pediment type. As regards the Israel C. Téllez Park, this has long been established as the center of the social dynamics of the Pantentens, who come there to take fresh air or to rest. Every weekend in this wonderful urban garden, the traditional Friday of Danzón, Musical Saturdays and Cultural Sundays take place, events that are projected as effective showcases for local artists and creatives. ", tags : ["papantla"] },
	{ value : "Xico Magical Town, is located 20 kilometers from the city of Xalapa on the road to Coatepec. I recommend you to move around the area to stay in Xalapa and rent a car to get to know much more nearby places that surround the city. One of the most iconic buildings in Xico is the Parroquia de Santa María Magdalena, which has Baroque and Neoclassical architecture, being the most imposing building in the town.One of the most important religious celebrations is the patron saint of the city, which is celebrated on July 19, being a unique show of traditions, where you will see the fusion of the Catholic religion and the Toltec beliefs.On the facade of the church you will see a large flower arch that decorates its entrance with yellow colors, which go from the main street to the beginning of the town, talking to people, they told us that there is another very important celebration for the inhabitants of the area, which is the Xiqueñada and celebrated on July 22. This tradition is very similar to the festival of Pamplona in Spain, where they release the bulls to run through the streets. A tradition that for some is mistreatment and for other traditions, I leave them at your discretion, dear travelers. For lovers of good food, Xico is not the exception, you can find a variety of regional gastronomy restaurants, such as the characteristic dish of Xico, which is the famous mole that is nationally and internationally recognized, as well as its exquisite craft bakery, the chileatole, the green of Xico and the bean soup with xonequi or chonequi that is a special herb for that dish. ", tags : ["xico"] },
	{ value : "Coscomatepec presents an interesting fusion of traditions and culture that emerged from more than one hundred years of history.  It is a community protected by imposing hills, among which stands out the Citlaltépetl volcano, the highest peak in the national territory. They enjoy dancing in style as they witness typical dances from the region, such as the Santiagos, an ancient representation of the struggle between Christians and Moors.It is a delight to let yourself be charmed by its most representative aromas and flavors, which have passed from generation to generation as A valuable treasure, Coscomatepec also lends itself to the practice of mountain biking, releasing intense adrenaline rush among its wild roads hidden in the mountains.This town is located about 31 kilometers from the city of Córdoba, in the highest stretch of the Interserrana highway that connects the region of the High Mountains with the city of Xalapa. Magic of Mexico are so favorable for adventure and ecotourism, since its geographical location presents Coscomatepec between two huge ravines, the Atoyac River and the Jamapa River. Among its wide range of tourist attractions, stands the Church of Ixtayucan, sacred building built at the behest of Fray Alonso de Santiago, who tried to evangelize the indigenous people of the area.", tags : ["coscomatepec"] },
	{ value : "Orizaba, formerly called Ahauializapan and better known as 'The City of the Cheerful Waters' is a splendid valley located in the central region of the High Mountains, in the State of Veracruz, its climate is temperate-humid, with a average temperature of 28 ° C. Surrounded by hills and with a height of 1236 meters above sea level, Orizaba is crossed by the homonymous river that originates in the Ojo de Venado spring, in the foothills of the Pico de Orizaba volcano, bounded on the north by Ixhuatlancillo, to the south with Rafael Delgado, to the east with Ixtaczoquitlán and to the west with Río Blanco The city -also called Pluviosilla by the writer Rafael Delgado- of Toltec, Tlaxcalteca and Chichimeca origins, was named 'Muy Leal Villa' on January 27, 1774 , later, on December 18, 1776 was granted by decree of King Carlos III the permission to use Coat of Arms and Standard, so that finally, in 1830 it was named City.The Art Museum deserves special mention of the State, which houses national and international works, such as Diego Rivera's collection, those of José Justo Montiel, Salvador Ferrando, Casimiro Castro, Johann Moritz Rugendas, Karl Nebel and Josep Cusachs, to name a few. The Municipal Archive, which protects a large historical and cultural heritage, with a music library, a newspaper library and the City Museum. The different churches that protect a large part of the Colonial Orizaba and that show us the most varied architectural styles, passing through the Doric architecture of the Temple of Calvary, of the Ionic order of the Cathedral of San Miguel Arcángel, the churrigueresque style of the Church of the Concordia and the Temple of Carmen with the Ex-Convent of San Juan de la Cruz, up to the Gothic style of the Temple of Santa María de los Servitas. ", tags : ["orizaba"] },
	{ value : "IThis colonial city is known as 'the city of the three cultures', since it combines features of its pre-Hispanic past, the colonial period and the current era. It is located 1 hour from Merida, and Many tour operators include her in her journey to Chichén Itzá, her name is due to Zamná, 'dew from the sky', a character of singular wisdom and mythical origin, considered as an instructor and teacher of the Mayans, Izamal is a beautiful colonial town founded in the mid of the sixteenth century on the remains of an ancient Mayan city, its most important construction, the Convent of Our Lady of Izamal, was built on the ruins of a Mayan shrine called Pap-hol-chac.This village built on 12 small hills that they break the plain of the environment, still preserving the vestiges of their ancient and enormous power: cenotes of ritual sacrifice are found around, of the old four white roads or sacbes, and that led to allied or subjugated cities, you can still admire two. Aké and Kantunil, satellites of this great Mayan city, are, on clear days, visible from the top of the Kinich Kakmó pyramid.", tags : ["izamal"] },
	{ value : "Two important events in Mexican history took place in the Yucatecan town of Valladolid, one of them being the so-called 'Coastal War' in 1847 and the first revolutionary spark in 1910. Valladolid is traditionally known as 'The Capital of the Mayan East' and really is a just title for the beauty of its colonial constructions, such as the Convent of San Bernardino de Siena, the Church of San Gervasio, the Municipal Palace, the Museum of San Roque and the Ex But, in addition, Valladolid has a strategic location in this area of the Yucatan Peninsula, in fact, for many it is the most cosmopolitan city in the region, projected as the perfect place to stay and give tours. To get to know the best of the Mayan world, we recommend taking walks from Valladolid to places like Ek-Balam, Chichen Itza, Tulum or Coba, but you can also visit important towns of the M virreinal Mexico Izamal or Tihosuco. It is a magnificent opportunity to know the cultural reference of innumerable men and women of the place. ", tags : ["valladolid"] },
	{ value : "The word Jerez comes from Xerez, an Arabic word meaning 'place where vegetables abound', named after the first conquerors who came from Spain because of the similarity of this territory of the state of Zacatecas with Jerez de la Frontera, province Famous for being the birthplace of flamenco, the main square of Jerez, known as Rafael Páez Garden, was built on the grounds of what used to be the oldest market in Jerez, at the center of which is a beautiful Moorish kiosk and at its corners four fresh fountains, which together with the surrounding portals form a charming image, the first of these portals is the Humboldt, located on the southeast side of the square, which is the entrance to the royal estate of the Escobedo family, rich and very powerful merchants who, at the end of the 19th century, built a strong commercial emporium of international scope, as they sent goods to the United States and Europe. I remember at the top of the construction: 'La Nacional'. The portal received its name because the German explorer Alexander von Humboldt stayed there at some point during his tour of Mexico.", tags : ["jerez de garcia salinas"] },
	{ value : "Nochistlán is a city located in the south of Zacatecas. Founded in 1532, it is considered the second oldest municipality in the state, behind García de la Cadena, whose geography is characterized by the beauty of its farms, but What has actually earned it the name of Magic Town are its traditions, customs, legends and superb architecture. The prevailing climate in this community - recently declared a Magical Town - manages temperatures ranging from 7 to 30 degrees. in Nochistlán that can be considered as representative: such is the case of the San Sebastian Temple, but there are many others.The San Sebastián Temple was built in the 17th century, between 1673 and 1743. Later the tower was built. The patron saint takes place in January and is a celebration popularly known as the 'empinoladas'. Another must-see point of Nochistlán is the Los Arcos Aqueduct, built by of the authorities of Nueva Galicia in the seventeenth century to supply water, from certain deposits of the vital liquid, to the town. Completed in 1793, it had several batteries, such as Azul and Coronada. The Pile of Outside was another one of the most used by the population of Nochistlán to obtain water; in fact, it was one of the main sources of supply for this Zacatecan population during the first decades of the 20th century. The inhabitants of the place took water from five different piles, and because of the many legends and traditions associated with the Pile de Afuera, it was converted into a monument in 1954. ", tags : ["nochistlan de mejia"] },
	{ value : "About 125 km from the capital of Zacatecas, on the border with San Luis Potosí, is this attractive community that during colonial times was established as a mining bastion linked to the famous Camino Real de Tierra Adentro, commercial and economic route Declared by UNESCO as a World Heritage Site in 2010. Pinos is a small town, composed of three neighborhoods, the first being the Center, which concentrates the main buildings around three gardens: the San Francisco Garden, the Garden of the Flores and the Benito Juarez Garden, which are full of trees, benches and tranquility.The main square of Pinos is called Miguel Hidalgo Garden, and just in front of it are the Municipal Palace and the Public Clock Tower. You can visit the Parish of San Matías, built between the seventeenth and eighteenth centuries and, although it is a bit damaged, has a baroque portal made in quarry with the curious indigenous technique of rajueleado. To one side you can visit the Museum of Sacred Art, where the works of important New Spain painters Francisco Martínez and Miguel Cabrera are preserved. Very close to this garden is the house where the Zacatecan writer Amparo Dávila was born, winner of the Xavier Villaurrutia Prize in 1977. The thick walls painted steel blue protect a property in ruins, which has been gradually dispossessed by the family of the famous storyteller . The other important church in Pinos is that of San Francisco, which despite its sobriety is very beautiful, because it is surrounded by the fresh greenery of the Hidalgo Garden, where you can also contemplate the exquisite portals Juárez, Villalpando and Centenario. In the former convent that is on one side you can consult the cultural offer of the Magic Town in the Municipal Institute of Culture. In the IV Centenario Community Museum, the remotest past of the region can be explored, since it exhibits marine fossils, mammoth bones, pre-hyphaeic pieces, ancient maps and artillery and numerous tools that were used by the miners in their daily days. ", tags : ["pinos"] },
	{ value : "The Magic Village of Sombrerete is one of the many wonders of the State of Zacatecas, a guarantee of history, gastronomy and culture. Sombrerete stands out for its historical, natural and cultural values, but perhaps its architectural heritage is project as the most attractive for visitors One of the oldest temples in Sombrerete is the Chapel of La Candelaria, considered the first sacred building in the town, with its stone altar and a remarkable colonial style. wooden figure and stew of the Virgin of the Candelaria elaborated in Seville, Spain, was a gift of the conqueror Juan de Tolosa in 1556, taken to New Spain by the friar Jerónimo de Mendoza. ", tags : ["sombrerete"] },
	{ value : "Towards the south of the state of Zacatecas, in the valleys that extend under the Sierra Madre Occidental, is the Magical Town of Teúl de González Ortega, a town that preserves its colonial buildings of the 18th and 19th centuries but whose Teúl was a religious center for its prehispanic settlers, most likely Caxcanes, who inhabited this region before the Spanish conquest.The name has several meanings, but it stands out as 'God' or 'Abode of the Gods'. On the hill near the town is located one of the most important prehispanic settlements in the northwest of Mexico, some evidence indicates that this area was inhabited for 1800. The current name of Teúl de González Ortega is a recognition to the former governor of Zacatecas In the nineteenth century, Jesús González Ortega, who as a child lived in El Teúl and later returned to work, to live and to marry in the land that saw him From the distance, the Parish of San Juan Bautista del Teul stands out, but in the historic center of the town there are other buildings of great architectural value such as the Sanctuary of Our Lady of Guadalupe, the Chapel of the Rosary, the Curate and the Portals Other buildings of tourist interest are the Aqueduct, the Municipal Presidency and its large houses adorned with quarry lintels. ", tags : ["teul de gonzalez ortega"] }
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
    }  else if ("AMAZON.FallbackIntent" === intentName){
        handleGetHelpRequest(intent, session, callback);
    }
    else {
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
var AMZN_APP_ID = "amzn1.ask.skill";

function getWelcomeResponse(callback) {
    var sessionAttributes = {},
        speechOutput = "You can ask information of the Magic Towns of Mexico. You can specify a town or a state if you want a more precise information.",
        repromptText = "Can I help you with anything else?",
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
   if([intent.slots.states.value]==null){
    townsInState = getElementsByTags([intent.slots.states.value.toLowerCase()], stateTown).length;

    if(townsInState < 1){
      speechOutput = RESPONSE_NO_TOWNS_STATE;
    }else{
      speechOutput = intent.slots.states.value +" have approximately " + townsInState + " Magic Towns";
    }
}else{
    speechOutput = "Sorry i don't get that";
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
	 if([intent.slots.states.value]==null){
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
}
else{
    speechOutput = "Sorry i don't get that";
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

    var speechOutput ="You can say, 'Give me a random Magic Town'. You can also specify a town like this, 'Tell me more about Tequila', and this skill could help you to know the magic towns in a specific state like this 'tell me the magic towns in Jalisco'",
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
