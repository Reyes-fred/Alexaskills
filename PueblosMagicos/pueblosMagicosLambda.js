'use strict';

var facts = [
   { value : "El Pueblo Mágico de Calvillo es conocido como “la capital mundial de la guayaba” y pertenece al estado de Aguascalientes. En su origen fue una zona habitada por indios caxcanes y zacatecos, quienes pusieron gran resistencia durante la colonización. Al pueblo de Calvillo llegaron españoles, nórdicos y franceses, por lo que muchos de sus habitantes tienen rasgos caucásicos. En el siglo XVII estableció su mandato religioso el cura San José de Huajuacar. Por ello, el nombre Valle de Huajúcar dado a la región, que significa “lugar de sauces” donde los primeros pobladores de origen español, criollo y mestizo se establecieron. 10 razones para visitar el Calvillo: 1. Ruta de la Guayaba, 2. Naturaleza, 3. Aventura, 4. Tranvía, 5. Artesanías, 6. Milagros, 7. Leyendas, 8. Arquitectura, 9. San Judas Tadeo,10. Murales. Para llegar desde la ciudad de Aguascalientes toma la carretera federal número 70, a tan solo 49 km se encuentra el Pueblo de Calvillo.", tags : ["calvillo"] },
    { value : "Real de Asientos es un Pueblo Mágico de Aguascalientes de origen minero. Aunque es pequeño, posee valiosos atractivos conservados de la época virreinal en su arquitectura y arte. Sus túneles bajo tierra, jardines e invernaderos lo hacen perfecto para desconectarse del bullicio de las grandes ciudades. 10 razones para que visites Real de Asientos 1.Disfruta de los platillos tradicionales, como el asado de novia, el conejo a la Chichimeca, la gallina a los 9 vinos, enchiladas potosinas y gorditas de huitlacoche y flor de calabaza. 2.Wirikuta, 3. Tren El Piojito, 4.La alfarería,5. Festival de Ogarrio, 6. Cementerio de Guadalupe, 7. Parroquia de Nuestra Señora de Belén, 8. Acueducto escondido, 9. Museo Vivo de Cactáceas, 10. Ex Hacienda de Letras. Para llegar desde Aguascalientes debes tomar la autopista 45 hasta San Francisco de los Romo. Allí incorporarse a la federal 71 hasta llegar al entronque que conduce a Tepezalá, Asientos y Loreto. ", tags : ["real de asientos"] },
    { value : "San josé de gracia se localiza la mayor parte de la Sierra Fría, que es considerada el gran pulmón de Aguascalientes.Su ubicación se encuentras a orillas de la Presa Plutarco Elías Calles, la primera de México. El origen de este Pueblo Mágico viene de miembros de la etnia chichimeca provenientes de los rumbos de Tepatitlán. La comunidad de San José de Gracia se fundó en 1673 en un lugar de ganado llamado “De Martha”. 10 razones para que visites San José de Gracia: 1. Cristo Roto, 2.Boca de Túnel, 3.Popular música de banda, 4.Artesanías, 5. Gastronomía, Los platillos típicos son las pacholas y el membrillate. 6. Festival de Calaveras con catrinas, 7.Tomar un baño a la Presa Calles, 8. Fiestas 6 de enero, 9.Campamento Ecológico Los Alamitos, 10.Jardín de Zaragoza. Está localizado en el noroeste del estado, a unos 57 kilómetros de la capital. Este pueblo mágico limita al norte con los municipios de Calvillo y Jesús María, con los municipios de Pabellón de Arteaga y Rincón de Romos al sur.", tags : ["san jose de gracia"] },
    { value : "Tecate es un Pueblo Mágico cercano a la frontera con los Estados Unidos, a pesar de esto el ambiente es apacible y su clima bastante fresco por estar rodeado de montañas.El nombre de Tecate viene desde sus primeros pobladores indígenas que entendían por esta palabra, “piedra cortada” o “árbol cortado”.10 razones para que visites Tecate:1.Cervecería Tecate, 2.Ruta del Vino y Ruta de la Cerveza, 3.Pan dulce y salado, 4.El Vallecito, 5.Museo Comunitario Kumiai, 6.La Rumorosa, 7.Rancho La Puerta, 8. Artesanías tradicionales, 9. Estación de ferrocarril, 10.Cerro sagrado Cuchumá.Se encuentra a solo 20 minutos de la Ciudad de Tijuana y puedes llegar a este sitio mágico en taxi o en autobús.", tags : ["tecate"] },
	{ value : "El Pueblo Mágico de Loreto se encuentra entre la Sierra La Giganta y el Mar de Cortés. Esta ciudad es la más antigua de Baja California, se dice que aquí el sol brilla los 365 días del año y que los turistas que lo visitan se van con ganas de regresar por ser un maravilloso acuario natural.La historia de Loreto es muy particular ya que fue el punto de partida para colonizar la península de Baja California. Fue fundada como misión en 1697 por el jesuita Juan María Salvaterra, a la que llamó “Nuestra Señora de Loreto”. 10 razones para que visites Loreto: 1.Sierra La Giganta, 2.Isla del Carmen, 3.Camino Real, 4.Parque Nacional Bahía de Loreto, 5.Plaza Salvatierra, Museo de las Misiones Jesuitas, 6.Gastronomía norteña y de la costa, 7.Fiesta de la Fundación de Loreto, 8.Vistas panorámicas del Mar de Cortés donde se encuentran Las islas Coronado, Carmen, Danzantes y Catalana, 9.Loreto-Nopolo, 10.Pesca. Puedes llegar a este Pueblo Mágico por vía terrestre desde La Paz, por  la carretera transpeninsular n°1 “Lic. Benito Juárez” dirección al norte. También desde Tijuana, se toma en dirección al sur, y se accede a Baja California Sur por el municipio de Mulegé.Si lo prefieres puedes llegar por vía aérea. Los Ángeles, California, cuenta con un vuelo directo de dos horas a este destino. ", tags : ["loreto"] },
	{ value : "Todos Santos es el punto donde el árido desierto del norte de México se desvanece con la vegetación que se nutre de un manantial y viento proveniente del Océano Pacífico.Este Pueblo Mágico tan especial está poblado de campeones del surf, artistas y extranjeros, que han hallado en este lugar bajacaliforniano un lugar muy agradable para hacer sus vidas.9 razones para que visites Todos Santos: 1. Fresco oasis, 2.Playas cercanas son San Pedrito, Los Cerritos, Los Esteros, Punta Lobos, La Poza y Batequitos, 3.Hotel California, 4.Campo traviesa, 5.Reserva de la Biosfera Sierra de la Laguna, 6.Personalidad artística, 7.Festival de las Artes, 8.Edificio Misión de Nuestra Señora del Pilar, 9.Teatro General Manuel Márquez de León.Se ubica a 80 kilómetros de la ciudad de La Paz, en Baja California Sur. Si llegas en auto, desde La Paz, hay que tomar la carretera 19. En el caso de que se parta desde Cabo San Lucas, hay que seguir la carretera 19 con rumbo hacia La Paz.", tags : ["todos santos"] },
	{ value : "El encanto de Palizada, Campeche, emana desde los techos de sus casas, tejas rojizas de estilo francés que contrasta con el blanco de sus fachadas y sus puertas coloridas, algunas con balcones de hierro forjado. 7 razones para que visites Palizada: 1. Río Palizada, 2. Arquitectura colonial, 3.Gastronomía como el pejelagarto a las brazas, mojarra frita, venado en mole, 4.Parques, 5.Ecoturismo, 6.Artesanías, 7.Fiesta en honor a San Joaquín, el Santo Patrono. La mejor forma es por agua. El recorrido desde Ciudad del Carmen es de dos horas, pero vale la pena el viaje. pues el río Palizada es una extensión del Usumacinta. En este trayecto se tiene la posibilidad de observar manatíes. Las embarcaciones salen a las 10 del malecón. El pasaje es de 150 pesos.  ", tags : ["palizada"] },
	{ value : "Arteaga es un Pueblo Mágico de Coahuila, justo en la Sierra Madre Oriental se encuentra este destino, el cual es llamado 'la Suiza de México', esto debido a sus climas, paisajes, montañas nevadas, etc. Si quieres pasar un tiempo descansando en hoteles ubicados en las montañas, este lugar tiene que aparecer en tu lista de futuros viajes. El clima en Arteaga es templado, aunque cuando es invierno, hace frío y hay nieve. Es tan frío en diciembre y enero, que las temperaturas llegan a estar por debajo de los cero grados y en verano, la temperatura oscila entre unos 28 y 30° C, clima perfecto para practicar deportes extremos. Algunas de la razones para visitar son: 1. El Templo de San Isidro de las Palomas, 2.Bosque de Monterreal Resort, 3. Cañón Balcones, 4. Montaña El Cielo.  Si visitas Arteaga vía aérea debes tomar un vuelo a Saltillo para continuar el recorrido por carretera; si en cambio vienes en autobús se toma en Saltillo, desde la población de Ramos Arizpe o desde la 'Sultana del Norte' en Monterrey. Si viajas en auto partícular, para llegar a este Pueblo Mágico es por las carreteras federales partiendo desde Saltillo, hacia el Este o por Ramos Arizpe, población que se encuentra al Noroeste.", tags : ["arteaga"] },
	{ value : "El Pueblo Mágico de Cuatro Ciénegas, a tres horas de Saltillo, es uno de esos destinos que maravillan a quien lo visita. Desde sus áreas naturales únicas y sorprendentes, hasta sus sabores norteños y vinos locales, este destino lo tiene todo para que pases unas vacaciones inolvidables. Algunas de las razones para visitar son. 1.Plaza principal, quisco, iglesia de San José y Palacio Municipal, 2. Museo Venustiano Carranza, 3. Callejón de Guevara, 4. Poza Azul, 5. Dunas de Yeso, 6. Minas de Mármol, 7. Río Mezquites, 8. Bodegas Ferriño y Vinos Vitali, 9. Plato de cortadillo.", tags : ["cuatro cienegas"] },
	{ value : "Hay muchas razones para visitar Parras: sus nogaleras, su arquitectura antigua, sus viñedos, su historia como oasis y foco de civilización en los desiertos del norte o su papel como cuna de los vinos del Nuevo Mundo. Pero más allá de todo esto, lo que disfruta quien conoce este encantador Pueblo Mágico, es su increíble encanto calle a calle. Parras te ofrece un escenario increíble; el Cañón de Lima tiene paredes verticales de hasta 40 metros de altura donde podrás hacer lo que te imagines. Definitivamente vivirás una aventura en medio de la naturaleza. En Parras, justo en medio del desierto, también encontrarás las rocas que fueron grabadas por nuestros antepasados indígenas. Es sin lugar a dudad un tesoro que ha sobrevivido a las inclemencias del tiempo.", tags : ["parras de la fuente"] },
	{ value : "El vasto paisaje árido de las Dunas de Bilbao es el singular marco para un sitio tan recurrente para la historia de México como lo es el poblado de Viesca, en el norteño estado de Coahuila. Desde que sus arenas sirvieron de prisión para el cura Miguel Hidalgo durante la Guerra de Independencia en 1811, su singular territorio y su gente han sido mudos testigos del nacimiento y desarrollo de un país. Más allá de la historia reciente, las alucinantes dunas, de las que Viesca es el portal de acceso, son en realidad 17 hectáreas del fondo del mar de Tetis, que hace millones de años inundaba lo que hoy es Monterrey, parte de Coahuila, Chihuahua, Sonora y Baja California Sur, y que al irrumpir abruptamente a la superficie por la tectónica de placas se fue evaporando, formando paisajes sublimes donde la realidad se transforma. Por esta razón, a este territorio se le ha denominado como 'Semilla de la Región Laguna'. El paisaje desértico y a veces desolador de Viesca levantan sobre él la amenaza de convertirse en un poblado fantasma. Sin embargo, la fuerza de su gente siempre encuentra el modo de seguir adelante; esto se entiende claramente al contemplar el lema de su escudo de armas: “Resurgiremos siempre”. Digno ejemplo de esto es la Ex Hacienda de Santa Ana de Hornos, el tesoro arquitectónico más antiguo de toda la Comarca Lagunera que volvió a estar en el ojo público después de que Emilio 'El Indio' Fernández, famoso director de cine mexicano, asesinó a un ejidatario durante una filmación en los años 80. Viesca es un lugar donde el valor de la historia lo es todo. En el Museo Municipal Gral. José González Herrera se puede mirar el panorama completo de lo que ha representado y vivido este pueblo a lo largo del tiempo.  Otra parte de la historia de este Pueblo Mágico se halla en las ruinas de su fábrica de sal, antaño llamada Sulfatos de Viesca Para llegar a Viesca la mejor opción es volar a Torreón a través de AeroMéxico o Interjet, o por autobús a alguna de las principales ciudades de la Comarca Lagunera, como Gómez Palacio, Matamoros o Ciudad Lerdo, y a partir de ahí tomar transporte público, individual o colectivo, o bien, rentar un automóvil. A través de la Carretera Federal 40, Viesca se conecta con Matamoros, Parras o cualquiera de las grandes ciudades de la región, empezando por Torreón, una ciudad estupendamente comunicada y desde donde se hace una hora de camino al Pueblo Mágico.", tags : ["viesca"] },
	{ value : "Candela es un cómodo lugar de descanso y recreación acuática en medio del desértico clima del estado de Coahuila; no obstante, sus antecedentes históricos coloniales y revolucionarios lo han hecho merecedor de la denominación de Pueblo Mágico, además de su innegable belleza natural y su activa vida cultural. Con un clima constante de entre 20 y 22 grados centígrados, el Corredor Turístico del río Candela es el lugar ideal para quienes buscan un escape del sofocante calor del norte del país. Candela, cuyo nombre se debe a la forma de su cerro estrella, similar a una vela, cirio o candela, es el punto de entrada a la zona de mayor interés en el centro de Coahuila, conocida como Ruta del Desierto Gracias al pasado colonial tardío de Candela, su plaza principal está rodeada por soberbias casas llenas de ornamentos, que se van volviendo más sencillas, aunque no menos hermosas, conforme se avanza por las calles aledañas de Hidalgo, Venustiano Carranza y Simón Bolívar. La típica plaza Benito Juárez, con su kiosko, árboles y bancas, es un apacible sitio donde propios y extraños se reúnen por las calurosas tardes a conversar y contemplar el bello paisaje arquitectónico, coronado por la Parroquia de San Carlos Borromeo, quien apoyó notablemente las reformas católicas en la Europa del siglo XVI, aquellas que posteriormente se aplicaron en las colonias españolas. La fachada de la iglesia de Candela, aunque sencilla, alberga en su interior una historia que se remonta a 1694, cuando fray Francisco Peñasco fundó la misión de San Bernardino de La Candela. Otros puntos altos de este Pueblo Mágico son el Cerro del Águila y El Frentón, un muro natural donde además de observar el magnífico paisaje se pueden practicar deportes de aventura como rappel y ciclismo de montaña. En la cima de la Mesa de Cartujanos, a más de 800 metros de altura, existe una sorprendente construcción que ha sobrevivido los embates del tiempo: la Hacienda Vidaurri, que alberga en su capilla los restos de José Santiago Vidaurri Valdez, militar y político mexicano. Es cierto que Candela posee un gran atractivo histórico y arquitectónico; no obstante, el mayor punto de interés en este pueblo se encuentra en el Corredor Turístico del Río Candela, afluente del río Bravo con caudalosas aguas transparentes durante casi todo el año.  A Candela se puede llegar por avión a través de Torreón, en las aerolíneas AeroMéxico e Interjet, y a partir de ahí continuar en autobús por la línea Autobuses Rojos de La Laguna, o en automóvil a 96 km de Monclova por la Estatal 30, o a 154 km de Monterrey por la Federal 1. Para arribar a Candela, un par de kilómetros después del Rancho La Tinaja doblar a la izquierda por las Estatales 80 y 30.", tags : ["candela"] },
	{ value : "Guerrero, ubicado en la zona fronteriza del estado de Coahuila, podrá dar la impresión de compartir con otros lugares el pasado religioso embestido sobre ellos con el establecimiento de las misiones jesuíticas y franciscanas; sin embargo, el valor arqueológico que han tomado sus ruinas, y la presencia de una larga tradición ranchera, le confieren a este Pueblo Mágico atributos suficientes para dejar encantados a sus visitantes.El principal atractivo de Guerrero es el turismo cultural por los varios edificios históricos que posee, edificados hace más de trescientos años pero aún en pie, nobles y admirables. Una visita a este Pueblo Mágico puede iniciar en el centro histórico, donde la Iglesia de San Juan Bautista alberga una bella campana fabricada en 1851, y numerosas representaciones pictóricas de santos valuadas como patrimonio artístico.Cerca de la plaza principal también se encuentra la Casa de Cultura, construida en 1846 para después convertirse en un espacio de difusión del trabajo de pintores, escultores, bailarines y poetas. Saliendo del centro, las ruinas de la Misión de San Bernardo, a solo media legua del Presidio de San Juan. Por la gran presencia de ranchos en los que es posible quedarse días y hasta temporadas enteras, la oferta hotelera en Guerrero es en realidad baja. Guerrero se localiza 48 kilómetros al sur de Piedras Negras, Coahuila, a donde se puede llegar en avión a través de AeroMar. A partir de ahí, se llega en automóvil por la Carretera Federal No. 2, o siguiendo la misma vía, desde Nuevo Laredo, Tamaulipas, de donde dista 130 km.", tags : ["guerrero"] },
	{ value : "“Un pueblo muerto, poblado solo de voces gastadas, ecos, murmullos, fantasmas y sombras…”. Así es como describe Juan Rulfo a Comala en las páginas iniciales de Pedro Páramo.El resplandor de las calles y plazas de Comala bajo el brillo del intenso sol, que le confiere una temperatura media de 25 grados. La plaza central de Comala, edificada en el siglo XIX, recibe a propios y extraños con la efigie de Rulfo, quien aguarda sentado en una de las bancas leyendo su famosa novela. Frente a los altos portales, la fuente y el kiosco central de hierro forjado se encuentra la Parroquia de San Miguel Arcángel, el edificio religioso más importante del pueblo. Unos cuantos pasos conducen al Jardín Escultórico Juan Soriano, que se inauguró con la escultura donada por el artista llamada La Paloma.La Casa de la Cultura de Colima, también en el centro, es la sede de importantes eventos artísticos y culturales y aloja al Museo Alberto Isaac.Uno de los puntos más interesantes por sus instalaciones e historia es la Hacienda Las Nogueras, que fue una gran productora de azúcar entre los siglos XVII y XIX. Comala se ubica a 12 kilómetros de la capital de Colima, a donde se puede llegar en avión a través de AeroMéxico. También se puede llegar en autobús desde la Ciudad de México o Guadalajara, en las corridas de ETN. A partir de ahí existen transportes urbanos continuos hacia el Pueblo Mágico.", tags : ["comala"] },
	{ value : "Chiapa de Corso, sede de una celebración popular que por generaciones ha representado perfectamente el encanto que distingue a esta parte de Chiapas. Además, no hay que olvidar que Chiapa de Corso, flamante Pueblo Mágico, es el punto de ingreso para conocer el Cañón del Sumidero. Lo primero que se debe conocer de este excelente lugar es la mencionada Fuente de la Pila, vestigio de gran relevancia histórica. A continuación recomendamos conocer varios excelentes miradores que se localizan en esta comunidad chiapaneca y que nos ofrecen espectaculares vistas del Cañón del Sumidero. Nos referimos a los miradores de de los miradores: La Coyota, El Roblar, El Tepehuaje y Los Chiapa. Algunos atractivos son: La iglesia del Señor de los Milagros, Iglesia del Calvario, Iglesia de Santo Domingo, Ex convento de Santo Domingo, Convento de los dominicos, Templo de San Sebastián, Iglesia de San Gregorio, etc. 8 al 23 de Enero : Feria de la Ciudad de Chiapa de Corzo que comienza con el anuncio de la Chuntas. Chiapa de Corzo se encuentra a 14 kilómetros de Tuxtla Gutiérrez y a 62 de San Cristóbal de las Casas. Para visitarlo se debe utilizar la carretera 190 o bien, la 195, desde la capital del estado.", tags : ["chiapa de corzo"] },
	{ value : "Comitán de Domínguez es sinónimo de tierra entrañable, de orgullo chiapaneco, de amabilidad lugareña y de un ámbito de paz y valiosas tradiciones. Las personas que deciden conocerlo y viajan hasta este hermoso rincón de Chiapas, se encuentran con un clima envidiable, sabores exóticos, patios llenos de flores, horizontes colmados de vegetación y rayos de sol, junto a inmemoriales vestigios de la cultura maya. De entre lo más interesante para conocer en el Pueblo Mágico de Comitán, se debe mencionar lo siguiente: en principio de cuentas destaca la bella Iglesia de Caralampio, la cual fue edificada en 1852, para honrar a San Caralampio Mártir.También interesante es la Casa Museo “Doctor Belisario Domínguez”, la cual es una típica construcción comiteca del siglo XIX. Algunos lugares para visitar son: Iglesia de Santo Domingo, La plaza de Comitán, Templo de San Caralampio, Museo Arqueológico de Comitán, Teatro de la Ciudad Junchavin, etc. La vía principal de acceso proviene a de la capital del estado, a través de la Carretera Panamericana ( Mex-190) a 171 Km de dicha capital y a 1145 de la Ciudad de México, pasando por las ciudades de San Cristóbal de la Casas y Teopisca.", tags : ["comitan de dominguez"] },
	{ value : "San Cristóbal de Las Casas fue una de las primeras ciudades construidas en la Norteamérica española.Por diversas razones, esta ciudad ha tenido cuando menos diez nombres diferentes, quedando finalmente el de 'San Cristóbal' en honor al santo patrono de los viajeros, y 'de las Casas' por fray Bartolomé de las Casas, que fue el primer obispo de la ciudad.En esta Ciudad, una de las más bellas de México por su armónica composición urbana, podrá descubrir imponentes edificios religiosos como la Catedral o el Templo de Santo Domingo, revestidos con profusos detalles de estilo barroco y manufactura indígena, que perpetúan la herencia cultural de las etnias tzotziles, tzeltales y lacandones que residen en sus alrededores Algunos lugares para vistar son: Catedral de San Cristóbal, Palacio de gobierno, Templo de San Nicolás, El Parque, Casa de la Sirena, Templo y ex Convento de Santo Domingo de Guzmán, Templo de la Caridad, Templo de la Merced, Capilla de San Cristóbal, Museo Na Bolom 'Casa del Jaguar', Centro Cultural de Los Altos de Chiapas, Museo del Ámbar, Museo Sergio Castro, etc.San Cristóbal de las Casas se encuentra a 80 kilómetros al oeste de Tuxtla Gutiérrez, por la carretera 190, cuenta con un aeropuerto nacional llamado “Corazón de María”, ubicado a 18 kilómetros de distancia.", tags : ["san cristobal de las casas"] },
	{ value : "Palenque fue el centro más significativo de la Cultura Maya prehispánica de la región y sus dimensiones geográficas fueron tan grandes (se estima que medía 7 kilómetros de longitud de Este a Oeste). De entre las estructuras más significativas del sitio arqueológico de Palenque, hay que mencionar el Templo de las Inscripciones y El Palacio. También es interesante el Museo de Sitio, localizado en el interior del complejo prehispánico. Instalado en una moderna construcción.Los alrededores del sitio arqueológico de Palenque se prestan para la práctica del excursionismo y la contemplación de plantas y animales particulares de la región. A solo 6 kilómetros de al este del área arqueológica y este parque nacional se ubica el Pueblo Mágico de Palenque. Es una preciosa comunidad de provincial ambiente que cuenta con todos los servicios turísticos: alojamiento, restaurantes, comercios, tiendas, etc. Palenque, una de las ciudades más notables del mundo maya, está al noreste del estado de Chiapas, en una zona de selva tropical alta donde abundan cascadas y ríos, por lo que la visita a la zona arqueológica puede complementarse con paseos por los alrededores.Se cree que Palenque fue fundada alrededor del año 100 a.C. y su desarrollo duró casi mil años, después de los cuales fue abandonada para siempre. Los edificios que hoy pueden apreciarse, en un entorno selvático magnífico, son del Período Clásico, es decir, de los años 400 a 700 d.C. Para llegar al Pueblo Mágico de Palenque se puede seguir la siguiente ruta: desde la Ciudad de México y en automóvil, tomar la Calzada Ignacio Zaragoza y luego pasar por Santa Martha Acatitla. De allí hay de pasar por los entronques de San Martín Texmelucan, Puebla y Acatzingo, todos estos en el estado de Puebla.", tags : ["palenque"] },
	{ value : "Batopilas de Manuel Gómez Morín (en tarahumara, 'río encajonado') es una población del estado de Chihuahua, en México, situada en la Sierra Madre Occidental, en el fondo de una barranca. Al 2005, su población era de 1 210 personas, y a la fecha de este artículo es cabecera del municipio de Batopilas. Batopilas se encuentra al fondo de una barranca y a lo largo del Río Batopilas, es un pequeño poblado colonial formado por tres calles, para llegar a la población existe un único camino de terracería que desciende la barranca, el viaje de Batopilas de Creel, el principal centro turístico de la Sierra es de 5 horas. ", tags : ["batopilas"] },
	{ value : "Creel7 también llamado Estación Creel, es una población turística del estado mexicano de Chihuahua, enclavada en lo alto de la Sierra Madre Occidental, en el municipio de Bocoyna, se encuentra localizada a unos 175 km de la ciudad de Chihuahua.Estación Creel, o simplemente Creel, fue fundada el 26 de mayo de 1907 en lo que era una ranchería rarámuri llamada Nariachi. Tiene su origen como estación del ferrocarril que partiendo de la ciudad de Chihuahua, culmina en el puerto sinaloense de Topolobampo. Esta línea férrea, conocida actualmente como Chihuahua al Pacífico, era antiguamente conocida como Ferrocarril Kansas City, México y Oriente. Tiene diversos puntos atractivos como el lago de Arareco, la cascada de Basaseachi, la cascada de Cusárare y paso obligado hacia la barranca del Cobre  ", tags : ["creel"] },
	{ value : "Casas Grandes (Pakimé o Lugar de grandes casonas en tarahumara o rarámuri) es una población del estado mexicano de Chihuahua, cabecera del Municipio de Casas Grandes, situada a tres kilómetros de la ciudad de Nuevo Casas Grandes y junto a la zona arqueológica de Paquimé. Se dice que la región constituyó uno de los asientos de los indios nahuas (los aztecas eran nahuas, más no todos los nahuas son aztecas) en su migración desde el gran norte americano hacia el centro de México, en búsqueda de mejores condiciones de vida; se dice que de la estadía de los nahuas en el lugar aún quedan algunas ruinas cerca de la cabecera municipal", tags : ["casas grandes"] },
	{ value : "Mapimí es un pueblo del estado mexicano de Durango, ubicado en la Comarca Lagunera, da su nombre a la zona desértica denominada Bolsón de Mapimí y es cabecera del mismo nombre. El año del 2010 fue inscrita por la UNESCO en el Patrimonio Cultural de la Humanidad. Bajo el título de Camino Real de Tierra Adentro, la distinción se otorgó debido a su aporte cultural y arquitectónico e histórico.La zona donde hoy está ubicado el poblado de Mapimí fue habitada por indígenas Tobosos y Cocoyomes los cuales eran grupos indígenas del desierto, la fundación virreinal de Mapimí se debe gracias a que el sacerdote jesuita Juan Agustín de Espinoza, el capitán Antón Martín Zapata entre otros muchos colonizadores se trasladaron desde Cuencamé al corazón del desierto en busca de minerales preciosos.Mapimí ofrece una gran cantidad de atractivos turísticos legado del aporte cultural de más de 400 años de historia. Su admirable arquitectura que data de los siglos XVII y XVIII se hace presente en gran cantidad de edificios y monumentos, entre los principales está el edificio que fuera sede del Departamento de Comercio así como también el del Servicio Postal y el del Templo de Santiago Apóstol, El Mayor, edificado en 1772 con un estilo barroco.  ", tags : ["mapimi"] },
	{ value : "Dolores Hidalgo oficialmente como Dolores Hidalgo Cuna de la Independencia Nacional es uno de los 46 municipios del estado mexicano de Guanajuato. Se ubica en la región norte-centro de su territorio y tiene una extensión de 1656,18 km². De acuerdo con el censo del año 2010, la población asciende a 148 173 a nivel municipal y a 59 240 en la cabecera municipal. La ciudad es reconocida por decreto, tanto del gobierno local como del federal, como la Cuna de la Independencia de México, pues el atrio de su parroquia fue testigo de Grito de Dolores.Museo-Casa de Miguel Hidalgo y Costilla, inmueble donde él vivió y en el cual se conservan sus muebles así como varios documentos importantes. La Parroquia de Nuestra Señora de los Dolores. Es la iglesia más grande de la ciudad, que muestra dos ejemplos de arquitectura. Su fachada de estilo barroco-churrigueresco es uno de los ejemplos más finos de la última etapa del barroco colonial mexicano.", tags : ["dolores hidalgo"] },
	{ value : "La localidad de Jalpa de Cánovas está situado en el municipio de Purísima del Rincón (en el Estado de Guanajuato). Tiene 789 habitantes. Jalpa de Cánovas está a 1740 metros de altitud sobre el nivel del mar. Se ubica al kilómetro 23 al sur de la cabecera municipal en la Carretera Purísima-Manuel Doblado (municipio) y a 41,9 kilómetros de la ciudad de León, Guanajuato.La fundación de Jalpa de Cánovas data de 1542, cuando la Audiencia de Nueva Galicia, en la jurisdicción de la Villa de Lagos, le otorgara al capitan español Don Juan de Villaseñor y Orozco una merced consistente de 4 sitios para ganado mayor y 8 caballerías de tierra, misma que comprendió partes de los Reinos de la Nueva España y de la Nueva Galicia. ", tags : ["jalpa de canovas"] },
	{ value : "Mineral de Pozos es una ciudad del estado de Guanajuato, México, que tuvo un gran auge minero cuyo declive ocasionó el despoblamiento de la localidad que presentó signos de abandono a lo largo de un siglo.Es una importante Ciudad del estado de Guanajuato en materia de turismo, ya que es un pueblo mágico. La distancia a la capital es de 114.8 km, y a León, Guanajuato es de 183 km. ", tags : ["mineral de pozos"] },
	{ value : "Salvatierra es uno de los 46 municipios del Estado mexicano de Guanajuato. Conocida por haber sido la primera demarcación a la que se le otorgó el título de ciudad en el Estado de Guanajuato, Salvatierra ofrece un ambiente de tranquilidad y armonía al pasear por las calles del Centro Histórico, llenas de colores y de grandes monumentos construidos en el período del Virreinato. La riqueza arquitectónica de Salvatierra le ha merecido el reconocimiento como tercera Ciudad Colonial del Estado de Guanajuato. ", tags : ["salvatierra"] },
	{ value : "El municipio de Yuriria (en purépecha Yuririhapundaro Lugar del lago de sangre) es uno de los 46 municipios del estado mexicano de Guanajuato. La cabecera municipal es la ciudad de Yuriria, que destaca por su localización y por su importancia histórica. Antiguamente era conocida como San Pablo Yuririhapúndaro. Está situada en la subregión III suroeste del estado de Guanajuato. En esta ciudad también se encuentra un lago artificial que recibe el nombre de 'Laguna de Yuriria'. La ciudad de Yuriria se encuentra comercial, pero no geográficamente, unida a las ciudades de Uriangato y Moroleón. Estas tres forman una misma zona metropolitana desde octubre de 2010, la Zona metropolitana Moroleón-Uriangato-Yuriria es la 75va ciudad más grande del país4 y la 5. más poblada del estado de Guanajuato ", tags : ["yuriria"] },
	{ value : "Taxco (en náhuatl: tlachtli, co, 'juego de pelota, lugar'' lugar donde se juega el juego de pelota o lugar del juego de pelota') es una ciudad mexicana ubicada en la parte norte del Estado de Guerrero, en un área geográfica definida por montañas y cerros, característica del norte de esta entidad del país, a 36 km de la ciudad de Iguala, 135 km de la capital del estado Chilpancingo y a 170 km al suroeste de la Ciudad de México, es la cabecera municipal de Taxco de Alarcón. Taxco ha tenido un papel importante en la historia de México, en 1821, en el Convento de San Bernardino de siena de Taxco, se redactó el Plan de Iguala o de las Tres Garantías por Agustín de Iturbide, que posteriormente, el 24 de febrero de ese año, habría de firmar con Vicente Guerrero en la ciudad de Iguala, estableciendo la Independencia de México de España y unificando a los ejércitos insurgente y realista.", tags : ["taxco"] },
	{ value : "Huasca de Ocampo también conocido simplemente como Huasca, es una localidad cabecera del Municipio de Huasca de Ocampo, del estado de Hidalgo, México. Se localiza a aproximadamente 34 km de la ciudad de Pachuca de Soto y 16 km de Mineral del Monte en la Sierra de Pachuca. Museo de los Duendes está fundado por hechos y leyendas que ocurrieron en el pueblo entre niños, adultos, ancianos y caballos. La exhibición más abundante en este museo es de crines de caballos donde supuestamente los duendes han hecho cosas", tags : ["huasca de ocampo"] },
	{ value : "El municipio de Huichapan es uno de los ochenta y cuatro municipios que conforman el estado de Hidalgo, México. Cuya cabecera municipal es la localidad de Huichapan. De acuerdo con los historiadores, los primeros pobladores de la región que ocupa actualmente Huichapan, fueron los otomíes seguidos por los Toltecas y finalmente por los Aztecas.", tags : ["huichapan"] },
	{ value : "Mineral del Chico es una localidad, cabecera del municipio de Mineral del Chico en el estado de Hidalgo en México. a población de nace en 1565. Trece años después de la noticia del primer hallazgo de minerales en la región. Al terminar la guerra de Independencia, todo lo que estaba bajo el dominio de la corona deja de llamarse real como el ejército, los caminos, las minas, etc. así en 1824, al hacerse la división política de la República, Real de Atotonilco El Chico cambia su nombre por el de Mineral del Chico, mismo por el que se le conoce en la actualidad. En el centro del pueblo encontramos la Parroquia de la Purísima Concepción, construcción de estilo neoclásica con fachada de cantera y columnas toscanas, celebra su fiesta patronal el 8 de diciembre. ", tags : ["mineral del chico"] },
	{ value : "Mineral del Monte es una localidad cabecera del municipio de Mineral del Monte del estado de Hidalgo, en el centro de México. La ciudad tiene una tradición de la cocina de pastes, es famosa por sus minas de plata y su considerable afluencia turística. En tiempos del Virreinato se le daba el nombre de Real por estar bajo el dominio de la corona española, y del Monte por estar rodeada por montes; por tal motivo es más conocido como Real del Monte. Capilla del Señor de Zelontla Consta del templo, la sacristía, y una pequeña bodega; la superficie ocupada por el atrio se utilizó para colocar una escalinata que cubre todo el frente. Capilla de Veracruz ue el segundo templo edificado en la ciudad por los frailes franciscanos de Pachuca: en 1584 se fundó la Cofradía de la Santa Veracruz y se construyó una discreta capilla, que fue demolida a finales del siglo XVIII.", tags : ["real de monte"] },
	{ value : "Tecozautla es una localidad mexicana, cabecera del municipio de Tecozautla, en el estado de Hidalgo. Al desintegrarse el imperio Tolteca llegaron una gran cantidad de migrantes los cuales se establecieron en este municipio y temerosos por ser atacados por otras tribus construyeron una muralla que medía entre cinco y seis metros de altura con una longitud aproximada de 4788 metros, lo anterior sucedió entre los años 730 y 740 a. C. La construcción de dicha muralla les ayudó mucho sobre todo cuando los bárbaros Chichimecas atacaron a los Toltecas que habitaban esta región, dicha muralla les sirvió de escudo para defenderse. En el tiempo de la conquista por el año de 1551 llegaron los españoles a subyugar tierras, uno de los primeros españoles fue Nicolás Montaño cacique de Jilotepec. El Templo y exconvento de Santiago Apóstol obra construida entre los años 1690 y 1700. El Reloj Monumental de Tecozautla es uno de los monumentos más importantes de la localidad. La torre fue edificada en el gobierno de Porfirio Díaz, atendiendo a un estilo neoclásico. El 15 de septiembre de 1904 se hace un acto solemne de la colocación de la primera piedra, erigido simultáneamente con el Reloj Monumental de Pachuca, ambos monumentos se inauguraron el 15 de septiembre de 1910. ", tags : ["tecozautla"] },
	{ value : "Lagos de Moreno un municipio y una ciudad ubicada en la Región Altos Norte, en el estado mexicano de Jalisco. La ciudad fue declarada Patrimonio Cultural de la Nación - Zona de Monumentos Históricos. Por el Instituto Nacional de Antropología e Historia (INAH) en 1989. Su centro histórico y puente fueron nombrados Patrimonio Cultural de la Humanidad por la Unesco (United Nations Educational, Scientific And Cultural Organization), el 1 de agosto de 2010 al formar parte del Camino Real de Tierra Adentro.", tags : ["lagos de moreno"] },
	{ value : "Mazamitla es un municipio y población del estado de Jalisco, México. Se localiza 124 km al sur de Guadalajara en la Región Sureste. Su nombre proviene del náhuatl y significa 'Lugar donde se cazan los venados con flechas'. Mazamitla fue fundado por los aztecas en 1165. Pertenecía al señorío de Tzapotlán y rendían tributo al cacique de Tamazollan; en 1481 fue invadido por los purépechas para apoderarse de la Laguna de Sayula; los purépechas, estuvieron dominando pocos años hasta que fueron derrotados al final de la Guerra del Salitre, en 1510. Sitios de Interes: Parroquia de San Cristobal, Jardín Encantado, Bosque La Zanja, Bosque Las Charandas, Bosque El Chacal, Cerro El Tigre, La Cañada.  ", tags : ["mazamitla"] },
	{ value : "San Sebastián del Oeste es un municipio y población del estado de Jalisco, México. Se localiza al oeste del estado, en la Región Sierra Occidental. Es una población minera que tuvo su auge en tiempos de la colonia, llegó a tener hasta 20.000 habitantes; sin embargo su población disminuyó en el siglo XIX a causa del cierre de las minas. Antes de la llegada de los españoles estaba poblada esta región por los tecos. La conquista la efectuó en 1524 el capitán Francisco Cortés de San Buenaventura acompañado por Juan de Escárcena. En 1530 pasó por este lugar Nuño de Guzmán con su ejército, que al ser recibido sin hostilidades por los indígenas tuvo así el pretexto para apoderarse de todo lo que había conquistado Francisco Cortés. En 1542 son descubiertas las minas y es nombrada jurisdicción de Hostipac la alcaldía mayor Real de Minas de San Sebastián. Sitios de interés:  Templo de San Sebastián, Hotel El Pabellón, Hacienda Jalisco, Casa Museo ( Conchita Encarnación), Sierra de la Bufa, Arroyo Los Reyes, Casa González.", tags : ["san sebastian del oeste"] },
	{ value : "Tapalpa es un municipio y población del estado de Jalisco, México. Se localiza en la Región Lagunas, aproximadamente a 118 kilómetros de Guadalajara. Su nombre proviene del otomi y significa 'Lugar de Tierra de Color'. Artesanía: se producen cobijas, jorongos, morrales, penachos, huaraches, artículos y adornos de madera tallada, bordados y artículos de barro. En el poblado de Juanacatlán, a 11 kilómetros de la cabecera municipal, se extraen lozas de piedra laja de distintos tamaños, muy usada en construcción para revestir fachadas o pisos. Gastronomía: destacan el borrego al pastor, los productos derivados de la leche, las conservas de frutas, los dulces en almíbar, jamoncillos, cajetas; de sus bebidas el mezcal, el rompope, el ponche de frutas y el pulque. Trajes típicos: traje de charro para el hombre y vestido de china poblana para la mujer.", tags : ["tapalpa"] },
	{ value : "Tequila es un municipio y un poblado del estado de Jalisco, en México. El nombre de Tequila proviene de la palabra náhuatl Tekilan, (Lugar de los trabajadores). Tequila es conocido por darle su nombre al tequila, al ser uno de los territorios donde éste se produce. Sus primitivos pobladores fueron chichimecas, otomíes, toltecas y nahuatlacas. El poblado estuvo en un principio asentado en un lugar que se llamó Teochichán o Techinchán: lugar del dios todopoderoso o donde abundan los lazos y trampas.  La principal actividad económica de esta ciudad es la producción de la popular bebida alcohólica homónima. Desde sus inicios, la producción de tequila en la región ha sido reconocido internacionalmente. Los principales productores de tequila que se encuentran dentro de la ciudad son:  Tequila José Cuervo, Tequila Destiladora Rubio, Tequila Orendain, Tequila Sauza, Tequila Tequileño", tags : ["tequila"] },
	{ value : "Mascota es una municipalidad de Jalisco, el pueblo cabecera principal se llama de la misma manera, Mascota. Ahora, no crean que el nombre tiene algo que ver con animalitos del hogar, sino que proviene de la lengua Teco 'maxacotlán Mazacotla', es decir, el lugar de venados y culebras. Mascota, con una población de 8.215 habitantes, está situada en el noroeste del Estado de Jalisco, a unos 1.200 metros sobre el nivel del mar, estratégicamente situado entre Guadalajara (a 120 kilómetros), la capital del estado, y Puerto Vallarta. El municipio de Mascota se encuentra en la meseta de la cordillera de Sierra Madre Occidental, el municipio cuenta con 40 pequeños pueblos, entre los que Mascota es el más grande y es también la sede del gobierno municipal local. Mascota es una región de bellos paisajes en los que contrastan valles, montañas, bosques y ríos. La gente es amable, alegre y orgullosa de su historia.", tags : ["mascota"] },
	{ value : "alpa de Allende (La Perla Escondida) Es uno de 125 municipios que componen al Estado de Jalisco, México, por su cultura, tradición y bellos paisajes de montaña, es considerado como uno de los 8 Pueblos Mágicos. Se localiza al el oeste del estado, en la Región Costa Sierra Occidental; a 190 kilómetros al oeste de La Capital Guadalajara. Su nombre significa 'Sobre la Tierra'. La Ruta del Peregrino es un camino con más de 200 años de tradición, el cual recorre algunos municipos del estado de Jalisco, en México. Iniciando en la ciudad de Ameca, atraviesa algunas montañas de la Sierra Madre Occidental y termina en el pueblo de Talpa de Allende, específicamente en la Basílica de Nuestra Señora del Rosario. Su longitud es de 117 kilómetros y es recorrida por alrededor de 3 millones de personas al año8​ en el mes de marzo y particularmente en Semana Santa", tags : ["talpa de allende"] },
	{ value : "El Oro es uno de los 125 municipios del Estado de México, se trata de una comunidad rural que tiene una superficie de 137,971 km² y cuya cabecera municipal es la población El Oro de Hidalgo. Se ubica al oeste del estado y limita al norte con el estado de Michoacán y el municipio de Temascalcingo; al sur con los municipios de San Felipe del Progreso y San José del Rincón; al este con los municipios de Temascalcingo y Jocotitlán; y al oeste con el municipio de San Felipe del Rincón y con el estado de Michoacán. El Teatro Juárez es uno de los principales atractivos. Inaugurado en 1908, presentó espectáculos de altísimo nivel con los más importantes artistas de aquellos tiempos. Basta describir las paredes con ornamentación vegetal en dorado de estilo art nouveau y salones en madera tallada que le hacen excepcional. El Palacio Municipal, por su parte, ejemplifica el estilo neoclásico con sus dos torres a la usanza inglesa. También hay que visitar la estación de trenes de finales del siglo XIX. El Museo de la Minería tiene una exposición permanente de fotografías que muestran las mejores épocas de bonanza así como equipos de extracción y muestras de minerales extraídos de minas de la región. Por cierto, de ellas se extrajo el oro más puro del mundo. Museo de Minería (ubicado en la calle de Arroyo casi esquina con Pedro Moreno). El Oro está ubicado en una importante zona mineral, cerca de los límites con Michoacán. El Oro, junto con Tlalpujahua en el vecino Estado, fueron dos de las provincias mineras más ricas y productivas. ", tags : ["el oro de hidalgo"] },
	{ value : "Malinalco está ubicado al sur de la ciudad de Toluca de Lerdo y 52 km de la ciudad de Cuernavaca. En términos de tiempo de traslado se encuentra a una hora de la Ciudad de México a partir de la caseta México Toluca vía La Marquesa.Fue primero un asentamiento importante del pueblo matlazinca, dominado posteriormente por los mexica. Es uno de los municipios más pequeños del Estado de México y su cabecera municipal lleva el mismo nombre. En la historia de México, su importancia y fama se debe a que en él se ubican dos centros de interés histórico religioso: primero, porque en su cabecera se encuentra un singular santuario mexica labrado en la piedra del cerro, y que es un ejemplo espectacular de arquitectura ritual mexicana. En segundo lugar, también en él se ubica el Santuario de Chalma, uno de los centros de peregrinaje religioso más importante del catolicismo mexicano. Actualmente funge como un asentamiento humano dedicado a la agricultura y el turismo, por su clima tropical y sus monumentos históricos es una localidad que atrae visitantes todo el año, pero también arriban al lugar personas que tienen casas de descanso durante los fines de semana.", tags : ["malinalco"] },
	{ value : "Metepec, del náhuatl Metepētl, que significa 'En el cerro de los magueyes'; es un municipio mexicano en el Estado de México. Se encuentra ubicado cerca de la ciudad de Toluca y forma parte de la Zona Metropolitana del Valle de Toluca. El municipio de Metepec es reconocido por su zona típica y las variadas artesanías que se fabrican en barro y cerámica principalmente, en especial por una de ellas: el reconocido árbol de la vida. Un paseo por Metepec incluirá obligatoriamente la visita al conjunto arquitectónico conformado por la iglesia y el ex convento franciscano de San Juan Bautista de Metepec, la capilla del Calvario, una caminata por el cerro de los Magueyes hasta la ermita. Si se dispone de tiempo, se puede seguir con un recorrido por las capillas coloniales, una copa de garañona en el bar 2 de Abril, y la Casa de Cultura, donde siempre hay alguna exposición interesante. Si es lunes de tianguis, hay que detenerse a comer un taco de plaza, o disfrutar de la puesta del sol desde el cerro de los Magueyes y quedarse a pasar un rato agradable escuchando música en los bares y peñas de los alrededores. ", tags : ["metepec"] },
	{ value : "Tepotzotlán es una localidad y cabecera municipal del municipio homónimo en el Estado de México. El municipio forma parte de la zona metropolitana del Valle de México. Tepotzotlán estuvo poblado por los otomíes, quienes posteriormente fueron sometidos al señorío de Cuautitlán. Luego de la desaparición de los otomíes vino el establecimiento de la cultura teotihuacana, en el transcurso de varios cientos de años la cultura decayó hasta el año 1031, una de las últimas culturas que se fueron asentando antes de la llegada de los españoles fue la cultura Chichimeca. Sus calles conducen al centro, junto a su enorme plaza rodeada de portales, restaurantes y tiendas de artesanías. Ahí se encuentra una de las más grandes joyas del arte novohispano; los antiguos colegios jesuitas de San Martín y San Francisco Javier, obras del barroco churrigueresco del siglo XVIII, este último alberga hoy al Museo Nacional del Virreinato. El parque estatal Sierra de Tepotzotlán comprende 13.175 hectáreas en los municipios de Tepotzotlán y Huehuetoca.", tags : ["tepotzotlan"] },
	{ value : "Valle de Bravo (Temazcaltepec, en náhuatl y Pameje, en mazahua) es una población mexicana del Estado de México, ubicada a 156 km al suroeste de la Ciudad de México. Su fundación hispánica fue en 1530 por frailes franciscanos. Recibe su nombre por San Francisco del Valle y por el general don Nicolás Bravo. El municipio cuenta con una presa artificial denominada 'Presa Miguel Alemán o Presa Valle de Bravo', popularmente llamada 'laguna o el lago', fue creada en 1947 como parte del Sistema Hidroeléctrico “Miguel Alemán” de la Región Hidrológica, Río Balsas. Su principal atractivo es la presa o laguna, donde se llevan a cabo una gran variedad de deportes acuáticos y de riesgo. El lugar es conocido por su arquitectura típica, tradicional de la época colonial y atrae a innumerables turistas. Es un lugar entre montañas y centro de varios deportes como el ciclismo de montaña, motociclismo de campo traviesa (Enduro, motocross, cuatrimotos), parapentes, paragliders y hanglider (Alas delta) y equitación, que se puede practicar en un lugar muy recomendable con grandiosos paisajes. Asimismo, en el lago se practican la pesca deportiva de trucha arcoiris, tilapia y carpa de Israel, regatas de veleros y esquí acuático. Por otra parte, la población cuenta también con tres campos profesionales de golf de dieciocho hoyos y un sinnúmero de excelentes restaurantes de comida típica, internacional, italiana y francesa, centros comerciales con tiendas de arte, artesanías y artículos de decoración. En el Día de Muertos (2 de noviembre) se organiza un gran festival, llamado el Festival de las Almas. Existe también un Centro de Espiritualidad Carmel Maranatha u finalidad es ofrecer un espacio para favorecer el encuentro personal y con Dios a través del silencio y de los retiros espirituales", tags : ["valle de bravo"] },
	{ value : "El municipio de Aculco se ubica en el altiplano mexicano, a una hora por carretera de Ciudad de México; forma parte del Estado de México y su cabecera municipal lleva el nombre oficial de Aculco de Espinoza. Junto a las montañas y entre espectaculares peñas y cascadas, Aculco es una de las poblaciones típicas más bellas del estado. Conserva los rasgos de su arquitectura tradicional llena de callejones y casas de amplios patios y corredores, construcciones sostenidas por columnas de cantera y calles empedradas. La plaza pública, el kiosco, la Presidencia Municipal, la plazuela Miguel Hidalgo, la casa donde pernoctó Hidalgo, la casa de la cultura, el mercado, las oficinas administrativas, el Oso y el Auditorio municipal son puntos dignos de conocerse.Balneario Municipal. (Ubicado en las calles de Iturbide y Corregidora). Después de algún recorrido por las inmediaciones de la población, el Balneario Municipal, con su alberca olímpica, es el lugar ideal para practicar la natación o simplemente refrescarse. Los lavaderos, ubicado en las calles Pomoca esquina con Iturbide, en la cabecera municipal. Es un lugar de construcción antigua y sitio muy famoso en el pueblo pues giran en torno a él varias leyendas rurales. Parroquia de San Jerónimo. Los conventos, iglesias y catedrales de la región llevan evidentemente la marca de la arquitectura ibérica del siglo XVI; sin embargo, el estilo barroco mexiquense evidencia en algunos aspectos, la influencia de sus constructores indígenas.", tags : ["aculco"] },
	{ value : "Ixtapan de la Sal es un pueblo mágico que se encuentra a 135 kilómetros al suroeste de la Ciudad de México en el estado de México y a 85 Kilómetros al sur de la ciudad de Toluca, capital del Estado de México. En Ixtapan de la Sal se dan numerosas tradiciones a lo largo del año, entre las que se encuentra la fiesta patronal del segundo viernes de cuaresma, en honor al Señor del Perdón, adonde arriban numerosas peregrinaciones provenientes de Capulhuac, Temoaya, Tonatico, Coatepec Harinas, entre otros municipios del estado y de estados circunvecinos: también existen alfareros en la comunidad de Tecomatepec elaborando trabajos como jarras, jarrones, platos, entre otros muchos artículos, en la celebración de día de muertos artesanos de la comunidad de Malinaltenango elaboran dulces de pipían (semillas de calabaza) realizando diferentes figuras de animales así como barras con las mismas, en la comunidad de Los Naranjos realizan el tallado de madera de copalillo haciendo cucharas, tenedores, salseras y más productos; en el área musical existen diferentes rondallas en la zona así como danzas de Moros y Cristianos y de las Pastorcitas, y las cabalgatas, además de pirotecnia que son participaciones en la feria tradicional del segundo viernes de cuaresma. La Fiesta de la Parroquia de la Asunción de María, celebrada el día 15 de Agosto. Las celebraciones llevadas a cabo en los diferentes barrios y comunidades, y las representaciones de la Pasión, muerte y resurrección de Jesucristo, en cuanto a religión se menciona. el 10 de agosto se realiza la conmemoración de los mártires de Ixtapan realizando una ceremonia en el zócalo de la ciudad posterior se lleva a cabo un desfile por las principales calles culminándolo en el monumento a los mártires el cual se encuentra en el jardín principal. La conmemoración de la Independencia de México, es famosa en todo el estado e incluso en algunas partes del extranjero. ", tags : ["ixtapan de la sal"] },
	{ value : "San Martín de las Pirámides es uno de los 125 municipios del estado de México, ubicado al noreste del mismo. Se cuenta con el club campestre Teotihuacán, sus instalaciones son albercas, salones para fiestas, juegos recreativos y deportivos, hotel, restaurante, etcétera. En esta región, se utilizan ingredientes básicos como: carne de res, cerdo, pollo, codorniz, carnero, conejo, pescado, vegetales, lechuga, berro, betabel, jitomate, frutas de temporada. Se preparan exquisitos guisos y postres a base de Tuna, nopal, xoconostle; por ser típicos de la región, existe una gran variedad de recetas que son auténtico agasajo a la vista y al gusto que refleja la creatividad del mexicano. Se trabaja la obsidiana, barro, alpaca, plata, cuarzo, ónix, piedras preciosas y semi preciosas, el tallado de madera ha llegado a tener una calidad sobresaliente y reconocida a nivel nacional e internacional, también se cuenta con la pirotecnia y las artesanías de jade serpentino guatemalita y venturina.   ", tags : ["san martin de las piramides"] },
	{ value : "Villa del Carbón está situado en la parte norte del estado, justo al noroeste de la Ciudad de México.  El municipio contiene varios pueblos de origen otomí y nahua, en los que gran parte de la cultura indígena todavía persiste. El territorio del municipio se definió en 1714, cuando una región conocida como Chiapan, se dividió en lo que ahora es Chapa de Mota y Villa del Carbón. Sin embargo, en aquel momento la comunidad que ahora es la cabecera municipal no tenía un nombre oficial, fue conocida primero por el nombre de su iglesia Nuestra Señora de la Peña de Francia y más adelante por ser un importante proveedor de carbón vegetal, esto llevó a que fuera denominada Villanueva del Carbón de Nuestra Señora Santa María de la Peña de Francia, que finalmente se acortó a Villa del Carbón ", tags : ["villa del carbon"] },
	{ value : "Cuitzeo del Porvenir es una población mexicana del estado de Michoacán enclavada a orillas del Lago de Cuitzeo en el límite del estado de Michoacán y el estado de Guanajuato. Es cabecera del municipio de Cuitzeo. Cuitzeo forma parte de los denominados Pueblos Mágicos de la República Mexicana, esto debido a que alberga el antiguo convento agustino de Santa María Magdalena, que fue remodelado en su totalidad y se convertirá en museo y centro de exposiciones. Asimismo, varias calles y edificios del pueblo han sido restaurados con motivo de las celebraciones del Bicentenario de la Independencia de México (16 de septiembre de 2010) y del Centenario de la Revolución mexicana (20 de noviembre de 2010). Con el nombramiento de Cuitzeo como pueblo mágico se han hechos diversos eventos culturales en torno a este singular suceso, tales como bailes, obras de teatro y poemas.  ", tags : ["cuitzeo del porvenir"] },
	{ value : "Jiquilpan de Juárez, la ciudad de las Jacarandas, así es llamada Jiquilpan por sus numerosos árboles de esta especie, es un Pueblo Mágico de singular personalidad. Las características geográficas que tiene lo hacen muy interesante: por ejemplo, cuenta con una elevación de 1560 metros sobre el nivel del mar con clima templado, propio de esta región de Michoacán. Sus cálidos veranos e intensas lluvias de julio a septiembre preparan un paisaje pleno de flora silvestre digno de admirar. Este Pueblo Mágico se localiza en la Ciénega del lago de Chapala y en la colina del Cerro de San Francisco, por lo que el paisaje arbolado y de grandes extensiones de cultivo es común. Fray Jacobo Daciano y Fray Juan de San Miguel son los artífices del Xiquilpan de la colonia. Al ser la sede del distrito electoral IV a nivel local y federal, y sede distintas instancias gubernamentales del orden federal y estatal, la ciudad de Jiquilpan Pueblo Mágico es considerada la capital política de la Ciénega de Chapala que corresponde al estado de Michoacán. ", tags : ["jiquilpan de juarez"] },
	{ value : "Con su aire provincial de villa europea y esperando la llegada de las Mariposas Monarca o disfrutando de su presencia, el pueblo mágico de Mineral de Angangueo te aguarda en Michoacán con su pasado fundido en oro, plata y cobre. Con esta guía podrás conocer todo lo que ofrece el bello Pueblo Mágico michoacano, que siempre se ha levantado por encima de sus infortunios. Al este del estado de Michoacán, a una altitud de 2.580 msnm, entre espesos bosques que una vez abrieron paso a los socavones de las minas y luego volvieron a crecer con la extinción de la riqueza de los metales preciosos, Mineral de Angangueo ha aprendido a vivir del turismo ecológico, gracias a la bendición de la peregrinación anual realizada por la Mariposa Monarca. Para aprovechar turísticamente su patrimonio ecológico, minero y arquitectónico, la localidad fue incorporada al sistema de Pueblos Mágicos. Angangueo se levantó sobre la riqueza de sus metales preciosos, que dejó bellos testimonios arquitectónicos como el Templo de la Inmaculada Concepción, la Iglesia de San Simón Abad, la Casa Parker y otras espléndidas casonas. Entre noviembre y marzo, la Mariposa Monarca se aposenta en la Reserva de Biosfera mexicana que lleva su nombre y que tiene sus grandes santuarios en los bosques michoacanos que rodean a Mineral de Angangueo. Del pasado auge minero del pueblo se conservan vestigios, recuerdos dolorosos y leyendas.", tags : ["mineral de angangueo"] },
	{ value : "Pátzcuaro es una ciudad del estado mexicano de Michoacán. En la antigüedad era parte del señorío de los Huacusechas, la tierra de los indígenas que los españoles llamaron tarascos y que ahora se denominan purépechas. Pátzcuaro se encuentra categorizado por la Secretaría de Turismo como uno de los Pueblos Mágicos. Es cabecera del municipio del mismo nombre. Sus principales sujetos o tenencias son Cuanajo, Tzurumútaro, Janitzio y San Juan Tumbio. Su nombre aparece registrado en la Relación de Michoacán como Tzacapu-Hamúcutin-Pásquaro, con el significado de 'Donde están las piedras (los dioses)a la entrada de donde se hace la negrura'. Su interpretación morfológica es la siguiente: Tzacapu,'piedra'; Hamúcutin, 'puerta o entrada'; y, Pásquaro, término formado por pás-, radical del verbo páscani, 'teñir de negro'; -qua-, radical de -quare- actualmente escrito -kuarhe-, es una partícula que se incorpora en los verbos antes de la terminación del infinitivo para hacerlo reflexivo; y, -ro, sufijo determinativo de lugar, con el significado de 'lugar donde se hace la negrura. Monumentos de interés: Plaza principal o de Vasco de Quiroga, Palacio municipal, Palacio de Huitzimengari, Casa de los Escudos, Casa del Gigante. '. ", tags : ["pátzcuaro"] },
	{ value : "En progresoSanta Clara del Cobre es una localidad y cabecera del municipio de Salvador Escalante, del estado de Michoacán, México, famosa por sus refinadas artesanías fabricadas a partir de ese metal, las cuales han obtenido varios reconocimientos a nivel local, nacional e internacional como el Premio Nacional de Ciencias y Artes en la categoría de Tradiciones y Artes Populares. Este 2018 se celebrará la edición LIII de la Feria Nacional del Cobre del 21 al 31 de julio, evento en el que los artesanos realizan y exhiben sus obras al público y reciben premios por su talento a través del Concurso de Cobre Martillado. Al terminar dicha celebración, del 2 al 16 de agosto inicia la festividad religiosa. Los eventos comienzan el día 2 de agosto, cuando los orfebres y demás pobladores realizan la peregrinación hasta la iglesia de la patrona de origen italiano, Santa Clara de Asís.", tags : ["santa clara del cobre"] },
	{ value : "Tacámbaro es un municipio ubicado en México, en el estado Michoacán. En el año 2010 tenía 76.661 habitantes. Su nombre significa “lugar de palmeras”. El lugar lleva el apellido del General Juan José Codallos, quien luchó en la localidad a favor del federalismo. La ciudad de Tacámbaro se encuentra circundada por bosques y tiene un clima templado, por lo que está considerada como 'el balcón de tierra caliente' Uno de los sitios mayormente visitados, es el santuario de la Virgen de Fátima, famoso por sus 4 pinturas con imágenes de las vírgenes refugiadas, las reinas de Polonia, Hungría, Lituania y Cuba. Cuenta también con una réplica del Santo Sepulcro. Otros templos religiosos destacados son la Catedral de San Jerónimo construida entre 1538 y 1570, que dio lugar a otra construcción, el Convento Agustino donde su viejo claustro es utilizado como Palacio Municipal, además en Tacámbaro se fundó la primera escuela norma rural mixta de toda América Latina.[cita requerida] Los visitantes también pueden disfrutar de su vasta zona ecoturística como es la laguna de la Magdalena, un embalse natural, el cerro hueco, zona boscosa decretada área natural protegida y la Alberca, que es uno de los tres cráteres volcánicos llenos de agua con los que cuenta Michoacán. Su gastronomía es considerada como una de las mejores de Michoacán. ", tags : ["tacambaro"] },
	{ value : "La palabra Tlalpujahua viene del náhuatl tlalli (tierra) y poxohuac (esponja, fofa) por lo que su nombre significa tierra de tezontle o tierra bofa o esponjosa, seguramente por las características de los suelos donde está asentada esta población. Su nombre en otomí es Xijumú. Fue designado Pueblo Mágico el 27 de junio de 2005 por su acogedor aspecto actual, que durante más de 3 siglos fue sitio de bonanza minera con vetas de oro y plata. Desde la Ciudad de México dista 171 km o 106 mi, a 2 horas 19 minutos , de Morelia 134 km o 83.3 mi, a 1 hora 33 minutos y de Querétaro Queretaro - Epitácio Huerta - Tlalpujahua de Rayón, 117 km o 73.0 mi, a 1 hora 56 minutos. Distante a solo 10 km de El Oro, Estado de México, también declarado Pueblo Mágico. Cuenta con 4 hoteles de 3 y 2 estrellas. Cuenta con varios hoteles y casas de huéspedes, los cuales se adaptan a las diferentes posibilidades del turista. Hay varias fábricas de esferas navideñas, siendo esta actividad una de las más importantes para la economía de Tlalpujahua, además de algunas otras actividades como la elaboración de finos trabajos de cantera.  ", tags : ["tlalpajahua"] },
	{ value : "Tzintzuntzan es una localidad que fue la ciudad más importante del Imperio purépecha y posteriormente su capital. La moderna localidad de Tzintzuntzan (zona lacustre), es la cabecera del municipio del mismo nombre. La zona arqueológica comprende un centro ceremonial, edificado sobre una plataforma de unos 400 m2, que tiene una rampa de acceso en el centro. Sobre la plataforma fueron construidas cinco yácatas (plataformas escalonadas que combinan un cuerpo rectangular con otro circular, lo que hace parecer a la planta como una especie de 'T'), que eran la base de los templos dedicados a la adoración de los dioses principales del pueblo tarasco, entre ellos Curicaueri. Convento de Santa Ana de Tzintzuntzan, franciscano, que data del siglo XVI; incluye la capilla abierta de San Camilo. Iglesia de San Francisco de Asís, de estilo plateresco, concluida en 1601. Iglesia de la Soledad, construcción barroca del siglo XVII. Vestigios del hospital de indios, con una capilla abierta aislada. Atrio monumental con cruz atrial. Capilla de la Virgen de Guadalupe, en la comunidad de Cucuchucho. ", tags : ["tzintzuntzan"] },
	{ value : "Tepoztlán es un patrimonio del norte del estado de Morelos, en el centro-sur de México. El pueblo funciona como asiento gubernamental del municipio del mismo nombre. El pueblo es un destino turístico popular, debido a su cercanía con la Ciudad de México y su muy agradable clima. Es famoso por los restos de la pirámide construida en la cima de la montaña el Tepozteco, y también por los exóticos helados preparados por la gente del pueblo, así como sus artesanías. Tepoztlán es considerado como un lugar místico por sus leyendas y sus tradiciones que aún se respetan por los mismos habitantes, mucha gente lo visita ya que todo el año está lleno de festejos que la gente hace dependiendo el barrio en el que viva. Una de las festividades más esperadas es el Día de Muertos en la que la gente sale con sus hijos a 'pedir calaverita' llevando un tradicional chilacayote en forma de calavera. Otro de los destinos que hace a Tepoztlán famoso es 'el Dado', una saliente de roca en forma de cubo que forma parte de un cerro ubicado en Meztitla. A los pies del cerro, se encuentra una zona para campismo controlada por guardabosques y equipos de rescate en prevención de cualquier accidente. Junto a 'el Dado' hay otra saliente un poco más pequeña a la que la gente del pueblo y en especial los turistas llaman 'el Dadito' ésta igualmente tiene forma de cubo, sin embargo, no se aprecia de forma clara. En ésta zona se realizan actividades de montaña tales como rápel, escalar y largas caminatas. Así mismo, en época de lluvia, la cantidad de agua aumenta y se forma un río que atraviesa el cerro. ", tags : ["tepoztlan"] },
	{ value : "Tlayacapan es un municipio mexicano del estado de Morelos, en México. El municipio cuenta con gran diversidad de atractivos turísticos. En primer lugar, el ex convento de San Juan Bautista, cuya arquitectura y frescos, plasmados en sus muros que datan del siglo XVI, muestran la forma de expresión y tradición de los frailes agustinos, al igual que sus capillas que, por su belleza arquitectónica, son sin duda un atractivo digno de visitarse. Otro atractivo es el museo que puede encontrarse en el interior del Ex convento de San Juan Bautista, en donde se exponen las momias descubiertas en 1982 en el interior de la nave mayor, que muestran los diferentes personajes que fueron sepultados en el lugar; también, la casa de la cultura “La Cerería”, centro cultural que muestra diversas exposiciones. En enero del 2007, el Patriarca copto Shenouda III inauguró el Templo de Santa María y San Marcos, la primera iglesia copta ortodoxa de México, en la entrada del pueblo. Tlayacapan es uno de los lugares más visitados en el estado de Morelos, debido a su relieve colonial y las diversas tiendas de artesanías del municipio, con productos elaborados por artesanos del mismo lugar. Una de las curiosidades de este sitio es que la banda de rock alternativo The Killers filmó allí el videoclip de su sencillo 'When you were young'. ", tags : ["tlayacapan"] },
	{ value : "Sayulita es una pequeña localidad localizada en la Bahía de Banderas en el sur del estado de Nayarit en las costas del océano pacífico, México. La vida nocturna en Sayulita es muy activa. Múltiples fiestas y clubes nocturnos se efectúan cada fin de semana. es una tradición 'los viernes de cocos' cada viernes después de la media noche se hace la fiesta en el club de playa “cocos” con música para bailar. Para llegar a Sayulita, tome la carretera federal 200 Tepic-Vallarta y aproximadamente en el 'km 125' está el desvío que lo lleva al poblado de Sayulita por una carretera pavimentada. Localizado a 38 km del aeropuerto internacional de Puerto Vallarta pude llegar a Sayulita en transporte público o privado ", tags : ["sayulita"] },
	{ value : "Santiago, en la región más norteña del estado de Nuevo León, es el lugar ideal para que los regios y turistas de todos lados disfruten de unos buenos días de relajación, diversión y aventura. Enclavada en el Parque Nacional Cumbres de Monterrey, su casco urbano sirve como marco a las maravillas naturales que se albergan en su interior, sobre todo sus cañones, ríos e impresionantes caídas de agua. Como portal de entrada a la Sierra Madre Oriental, Villa de Santiago se ha constituido como el destino perfecto para practicar cañonismo, pues alberga en su interior los cañones de San Critóbal, Chipitín, Matacanes e Hidrofobia, que convierten a este Pueblo Mágico en uno de los mejores lugares del país para el turismo de aventura. Este Pueblo Mágico tiene también una enorme dimensión histórica por su pasado colonial, que comenzó desde que en 1645 Diego Rodríguez de Montemayor estableció el primer asentamiento en lo que hoy es la calle de Héroes esquina con Carretera Nacional, que después de ser ampliado tuvo que ser abandonado por la belicosidad de los pobladores originales, que perpretaron numerosos ataques contra los colonizadores y casi logran terminar con la historia de este poblado.", tags : ["santiago"] },
	{ value : "Linares es una bella localidad neoleonesa, con hermosas edificaciones, parajes naturales y sus deliciosas Glorias. Linares es una bella ciudad neoleonesa, cabecera del municipio del mismo nombre situado en la zona centro-sur-oriental del estado, haciendo frontera con Tamaulipas. Tiene límites con los también municipios neoleoneses de Montemorelos, General Terán, Galeana, Rayones e Iturbide; y con las entidades municipales tamaulipecas de Mainero, Villagrán, San Carlos y Burgos. Linares cuenta con espléndidas edificaciones, tanto civiles como religiosas, en su centro histórico, sobresaliendo la Plaza de Armas, la Catedral de San Felipe Apóstol, la Capilla del Señor de la Misericordia, el Palacio Municipal, y los edificios del museo y el antiguo casino. La Hacienda de Guadalupe es un predio histórico, mientras que la Presa de Cerro Prieto y el Parque El Nogalar son dos excelentes lugares para entrar en contacto con la naturaleza y practicar deportes al aire libre. Linares cuenta con dos magníficas tradiciones, una culinaria y otra musical. La tradición culinaria es la de sus Glorias, el famoso dulce de leche quemada oriundo del pueblo. La tradición musical es la de sus conjuntos de tamborileros. La Feria de Villaseca, en el barrio linarense de igual nombre, es el evento festivo más importante.", tags : ["linares"] },
	{ value : "Capulálpam de Méndez, es una localidad del estado de Oaxaca, en México. Todo su pueblo es considerado patrimonio cultural y arquitectónico, donde destacan el templo católico que data del siglo XVI, un yacimiento de agua llamado El “Chorromonte”, el Monumento al Minero, el Monumento a la Madre y las casas tradicionales. El Templo de San Mateo fue erigido en el siglo XVI y de esa época conserva su techo, un elegante alfarje recubierto por afuera con teja de barro. Aún conserva varios retablos que muestran todas las variantes del barroco mexicano de los siglos XVII y XVIII, desde el más sobrio barroco salomónico hasta un exuberante churrigueresco donde finas figuras de ángeles hacen las veces de estípites. La arquitectura vernácula ocupa un lugar importante dentro de la imagen y cultura que conforman la identidad como pueblo, sus casas como elemento dominante del paisaje están hechas en su mayoría con paredes de adobe y ladrillo, techos artesonados cubiertos de teja de arcilla y pisos de tierra o mosaicos tradicionales, con calles y muros empedrados y sinuosos adaptándose a la topografía quebrada natural.", tags : ["capulalpam de mendez"] },
	{ value : "Huautla de Jiménez es una población del estado mexicano de Oaxaca. Pertenece al municipio de Huautla de Jiménez y al Distrito de Teotitlán, dentro de la Región Cañada. Existe en Huautla de Jiménez una sola iglesia, dedicada a San Juan Evangelista. No obstante, la vida religiosa, muchas veces mezclada con elementos indígenas, tiene una gran importancia en la región. La ciudad es sede de la Prelatura territorial de Huautla. Entre las principales festividades religiosas se encuentran la del Señor de las Tres Caídas (tercer viernes de Cuaresma); la de la Virgen de la Natividad (7 y 8 de septiembre); así como la de Nuestra Señora de Juquila (7 y 8 de diciembre).", tags : ["huautla de jimenez"] },
	{ value : "Mazunte es un pequeño pueblo sobre la costa del Pacífico en Oaxaca, México. Está localizado a 22 km del suroeste de San Pedro Pochutla sobre la carretera costera 200, a unos 10 km al este de Puerto Ángel y sólo a 1 km de San Agustinillo y a 264 km al sur de la capital de Oaxaca. Mazunte es famoso por sus tortugas marinas. Durante la primera mitad del siglo XX, había poca población, pero esto cambió cuando se desarrolló un mercado para la carne y huevos de tortuga, debido a que muchas tortugas que vienen de Mazunte ponen huevos. Para la década de los 70, Mazunte fue el centro de la caza de tortugas marinas en México, con su propio matadero. Mazunte está a un 1 kilómetro (0,621371192 mi) tramo de playa con una ensenada aislada en el extremo oeste.  Los barcos en esta playa ofrecen paseos a Zipolite, Puerto Ángel, Estacahuite, La Mina, La Boquilla y Ventanilla. Dependiendo de la estación, es posible ver ballenas, delfines, tortugas, mantarrayas y otras especies acuáticas. Alquiler para los deportes acuáticos también están disponibles. El Centro Mexicano de la Tortuga es lo que se llamó 'museo de la tortuga' decretado por el gobierno federal en el año de 1991, después de que se instauró la veda 'total y permanente' de tortugas marinas. Se empezó a construir en 1992 y se terminó en noviembre de 1993", tags : ["mazunte"] },
	{ value : "San Pablo Villa de Mitla es un pueblo y cabecera municipal en el estado de Oaxaca, México, famoso por ser el sitio de las ruinas arqueológicas de Mitla. Es parte del distrito de Tlacolula, en el este de la región de los Valles Centrales. El pueblo es también conocido por sus textiles hechos a mano, sus piezas bordadas bordadas y por el mezcal. La ciudad también contiene un museo, el cual fue cerrado sin explicación alguna en 1995 y desde entonces toda su colección zapoteca y de elementos culturales mixtecas ha desaparecido. La ciudad también contiene un museo, el cual fue cerrado sin explicación alguna en 1995 y desde entonces toda su colección zapoteca y de elementos culturales mixtecas ha desaparecido. La atracción principal son las ruinas de la ciudad prehispánica de Mitla, que es más conocida por sus edificios decorados con mosaicos de pequeñas piedras planas que encajan entre sí para crear diseños, especialmente calados.2 Mitla es la segunda zona arqueológica más visitada en el estado de Oaxaca. ", tags : ["san pablo villa mitla"] },
	{ value : "El nombre original es Teposcololan y significa: 'Junto a la torcedura del cobre', proviene de las voces Tepoztli: cobre, colotl: torcedura y a la variante Tla: junto o entre. La principal atracción de Teposcolula es el Conjunto Conventual de San Pedro y San Pablo, erigido por los dominicos a mediados del siglo XVI y cuyo templo alberga al Señor de las Vidrieras. Otras atracciones arquitectónicas son la Casa de la Cacica y algunas plazuelas, casonas y espacios del centro histórico. Entre las tradiciones más hermosas de San Pedro y San Pablo Teposcolula hay que mencionar la Danza de las Mascaritas y sus fiestas religiosas, principalmente la del Señor de las Vidrieras. La deliciosa gastronomía oaxaqueña termina de redondear el maravilloso conjunto de atractivos de Teposcolula.", tags : ["san pedro y san pablo teposcolula"] },
	{ value : "Chignahuapan (en náhuatl: Chiconahui, atl, pan, nueve, agua, sobre o en 'Sobre las nueve aguas') es una ciudad ubicada en la parte norte del estado mexicano de Puebla. Su nombre proviene de las palabras en náhuatl chicnahui, que significa 'nueve', que significa 'agua'; y el sufijo pan, que significa 'sobre', 'en'. En conjunto quiere decir 'sobre las nueve aguas'. Chignahuapan cuenta con varios atractivos turísticos, entre los que se pueden mencionar la Iglesia de Santiago Apóstol del siglo XVI y la Iglesia de la Inmaculada Concepción. Además existe un salto de agua de 200 metros conocido como el Salto de Quetzalapan, así como la presa de Cuautelolulco y los ojos de agua que dan nombre a este municipio. También existen balnearios de aguas termales.  ", tags : ["chignahuapan"] },
	{ value : "La Ciudad de Cuetzalan es una localidad enclavada en las estribaciones de la Sierra Norte de Puebla. Es cabecera municipal de Cuetzalan del Progreso, uno de los 217 municipios del estado de Puebla. Se encuentra a 183 kilómetros desde Puebla de Zaragoza, la capital poblana. La arquitectura del pueblo está compuesta por diversas influencias arquitectónicas. Aunque debido al clima húmedo de la región muchos de los edificios presentan daños por la humedad, en las calles más bajas del pueblo algunas casas han sido demolidas y escombros o precarias construcciones de madera ocupan su lugar y mucha de la arquitectura tradicional se ha perdido. La arquitectura por la cual resalta Cuetzalan, de la mayoría de los pueblos de la zona, es que cuenta con inmubles auténticos del siglo XIX como lo dice el catálogo de monumentos elaborado por INAH, como ejemplo vivo están los templos y casonas tipo español del centro histórico. Parroquia de San Francisco De inspiración renacentista y detalles románico-góticos, la actual parroquia, consagrada a San Francisco de Asís, data de fines del siglo XIX, luce una alta torre de remate cónico al igual que su cúpula gallonada. Santuario de Guadalupe. Inspirado en la Basílica de Lourdes, Francia, El santuario de Nuestra Señora de Guadalupe tiene hiladas de jarritos de barro, lo que la diferencia de la anterior, por lo que es llamada 'Iglesia de los Jarritos'. ", tags : ["cuetzalan"] },
	{ value : "La Ciudad de Pahuatlán de Valle es una ciudad del norte del estado mexicano de Puebla que onstituye uno de los principales enclaves de población otomí en el estado, en una zona donde la mayoría de la población indígena es nahua. Pahuatlán es conocido por la elaboración de papel amate siguiendo una técnica artesanal prehispánica. La gastronomía de la región es resultado de la fusión de las culturas Totonaca, Nahua y Otomí, con los ingredientes españoles, ofreciendo platillos como: Pascal de Cacahuate y de pepita con carne de pollo o cerdo, Salsa de hormigas, (Chicales). Tamales de hollejo, Tamales de Cacahuate, Mole poblano con distintas variantes dependiendo la zona en la que se cocine, Tlayulas y taquitos de cebolla, itacates de quelites (hierba comestible de la región), Chicharrón de res y cerdo, Cecina ahumada, Distintas variedades de flores comestibles como las flores de equizote, de equimites o de frijol, más de 20 variedades de plantas comestibles como: los quintoniles, los quelites de venado, de monte, de llovizna, orejas de tigre, lenguas de vaca, berros, cilantros, pápalos, etc.", tags : ["pahuatlan"] },
	{ value : "San Pedro Cholula, su topo proviene de las raíces náhuatl: 'chololoa', lo que significa 'despeñarse el agua'. El sitio que actualmente ocupa la ciudad de Cholula muestra indicios de ocupación humana por lo menos desde el Preclásico medio mesoamericano lo que representa una ocupación continua desde hace más de 30 siglos. La antigua Cholollan fue un importante centro ceremonial de Mesoamérica, manteniéndose hasta la gran matanza cholulteca, como el lugar de iniciación de sacerdotes y personalidades de diversas culturas. La relevancia de Cholula en el contexto internacional es indiscutible, derivado de sus vestigios arqueológicos, en especial el Tlachihualtepel (Cerro hecho de tierra) o también llamado Machihualtépetl (Cerro hecho mano). Contiene la edificación de pirámides más antigua pues data de aproximadamente 3 mil 500 años, desde el periodo preclásico más temprano. Su gran pirámide, es la que distingue a ésta ciudad, mide 400 metros por lado, con más de 8 kilómetros abiertos en su interior, éste trabajo fue realizado por arqueólogos para poder tener una vista de su interior donde se pueden apreciar pinturas prehispánicas, las cuales han sido clasificadas como las mayores de América. Junto a la pirámide se encuentra el Santuario de la Virgen de los Remedios, éste templo se instauró después de la conquista en el periodo de evangelización superponiéndola sobre las creencias indígenas, ahora conviven en un espacio que da cuenta del pasado y la historia. A nuestra señora de los remedios le celebran su festividad el 8 de septiembre con una festividad, que empieza 8 días antes, todos los pueblos de ese municipio les toca poner un día de baile y el último di le dan serenata toda la noche y es coronada. También esta la explanada que forma el conjunto monumental con la Iglesia y el Convento de San Gabriel; la Iglesia de la Tercera Orden; la Capilla Real con sus capillas posas, sus atrios y la Biblioteca Franciscana Fray Bernardino de Sahagún; la Parroquia de San Pedro, El Museo de la Ciudad “Casa del Caballero Águila y el Portal de Guerrero  ", tags : ["san pedro cholula"] },
	{ value : "Tlatlauquitepec es un municipio del estado de Puebla, México cuya cabecera municipal es la Ciudad Tlatlauquitepec, se localiza en la Sierra Norte de Puebla y forma parte de la Región de Teziutlán siendo el segundo municipio más poblado y el segundo más extenso de la región. Ex-convento franciscano de Santa María Tlatlauquitepec, primer convento de paso en América, iniciado en 1531, uno de los mejores conservados en todo México. Cerro Cabezón, llamado antiguamente el Tlatlauquitepetl, pues durante las mañanas despejadas gracias al color de la roca y los rayos del sol se logra observar un color rojizo. Mirador del Cerro Cabezón y Cristo rey, se encuentran en la cima de este cerro, desde la cual es posible apreciar los pueblos que rodean a Tlatlauquitepec, como: Atempan, Teteles de Ávila Castillo, Hueyapan y Yaonahuac. Camino Caracol: antiguo camino que lleva de Huaxtla hasta la cima del Cabezón, es posible ver algunas partes empedradas. Xiliaco, Huaxtla (Lugar de Axiles o Acociles): pequeño manantial que se nutre de las aguas del cerro cabezón.", tags : ["tlatlaquitepec"] },
	{ value : "Xicotepec deriva del náhuatl y significa “cerro de los abejorros”. Está ubicado en el noroeste del estado; colinda con los municipios de Pahuatlán, Huauchinango, Honey y Juan Galindo. En 1862, cuando estaba por suceder la Batalla de Puebla, un puñado de serranos, al mando de Miguel Negrete, acudió a esta justa victoriosa en la historia de México. A su regreso a Xicotepec decidieron que si el orden constitucional marcaba que debía ascenderse a Villa, a ésta debía anexarse el apellido del ilustre presidente Benito Juárez, de aquí proviene el nombre de Villa Juárez. Uno de los lugares más visitados de la ciudad, su jardín central. es uno de los más floridos en el estado de Puebla por la cantidad de flores plantadas todas ellas producidas por lugareños, árboles podados cuidadosamente para dar la forma de figuras humanas, animales y figuras geométricas, en su kiosko se reúnen bandas de música de viento que deleitan las tardes de domingo a los visitantes con sus melodiosas notas, y se pueden recorrer sus pasillos acompañados de la familia, disfrutando de un esquite, un elote preparado o un helado. En los portales, se puede disfrutar de una taza de aromático café producido en Xicotepec, en las cafeterías que se encuentran sobre los portales del zócalo, las cuales inundan el ambiente con el exquisito olor del café tostándose. Monumental Virgen de guadalupe Construida sobre el cerro del Tabacal, se puede observar desde cualquier punto de la ciudad, su santuario se ha convertido en un espectacular mirador, donde se puede apreciar toda la ciudad desde las alturas, excelente lugar para lograr imágenes panorámicas. Es la quinta imagen de la Virgen de Guadalupe más grande de México, con sus 30 metros de altura.", tags : ["xicotepec"] },
	{ value : "Zacatlán de las manzanas es reconocido por ser uno de los mayores productores  de esta fruta en el país, recibió la denominación de pueblo mágico en abril de 2011, pero además de su arquitectura, tradiciones e historia, hay algo que lo hace simplemente especial, su neblina. Un espectáculo de la naturaleza que nos regala una vista realmente impresionante, aquí te mostramos algunos lugares que puedes recorrer en tu estancia. 1.El reloj Floral Este es el icono del lugar , colocado durante la remodelación del Zócalo en 1986, fue donado por Relojes Centenario. Cuenta con dos caratulas de 5 metros de diámetro y tiene 9 melodías diferentes para marcar las horas según la época del año. Sus creadores, son los mismos del reloj del parque hundido. Ex Convento Franciscano Una joya arquitectónica colonial , cuya construcción dio inició en 1562, concluyéndose en 1567 por frailes franciscanos, convirtiéndolo en el convento más antiguo de Puebla, está dedicado a la Virgen de la Asunción, cuya fiesta es celebrada el 15 de agosto en el marco de la feria de la manzana, que en este 2017, será celebrada del 5 al 20 de agosto. Parroquia de San Pedro y San Pablo Este recinto religioso fue construido bajo mandato del Obispo Juan de Palafox a  mediados del siglo XVII, con el fin de desaparecer la orden franciscana y que entregaran sus bienes a la iglesia diosesana. En su interior posee cuadros virreinales con leyendas en náhuatl.", tags : ["zacatlan"] },
	{ value : "Atlixco Se ubica a 30 km de la ciudad de Puebla, capital del Estado y cuenta con dos importantes vías de acceso: la Carretera Federal 190 y la Autopista Vía Atlixcáyotl. Actualmente, es una moderna ciudad con más de cien mil habitantes, que ha logrado armonizar su desarrollo urbano con el majestuoso legado de arquitectura colonial que dejaron sus fundadores (1579), y que hoy es uno de los principales atractivos turísticos de este municipio.Recibió su título de 'Heroica' debido a la Batalla del 4 de mayo de 1862 que precedería a la Batalla de Puebla del 5 de mayo de 1862. Es conocido por su buen clima y la gran actividad florística, comercial y turística que le valieron haber sido llamada Atlixco de las Flores y Granero de la Nueva España, durante la época colonial. ZÓCALO - Una vuelta por el zócalo es una experiencia inolvidable, saboreando los ricos helados y sorbetes que venden cerca de allí, así mismo entrar a algún restaurante para degustar la cecina atlixquense, el guacamole, el consomé Atlixquense, o las truchas en sus diferentes modalidades. A tan solo una cuadra del centro, en el mercado encontrarás tortillas hechas a mano, expendios de cecina, tlacoyos, quesos frescos de la región o si eres de “gustoso paladar” podrás comer los originales chapulines fritos con sal y limón. ATLIXCO DE LAS FLORES - Atlixco es un productor agrícola altamente reconocido a nivel nacional e internacional por su gran variedad y calidad de árboles ornamentales y frutales así como de plantas y flores para huerto o decoración. Es visita obligada el recorrido por la zona de viveros en donde encontrarás un paraíso lleno de color y aroma para deleitar a visitantes y residentes.", tags : ["atlixco"] },
	{ value : "Huauchinango en náhuatl significa: «en la muralla de los árboles». Se ubica a 153 km de la ciudad de Puebla y forma parte de la región denominada SIERRA MÁGICA. Es Pueblo Mágico desde fines de 2015. Sus primeros pobladores se establecieron en el año 1116 y eran de origen Chichimeca. Xolotl ordenó a su hijo Nopaltzin buscar un lugar para establecer su propio imperio y se asentaron a orillas del río Texcapalapa, hoy río Texcapa, el cual bordea esta población. El único vestigio que se conserva de esa época en Huauchinango, son los cuatro cerritos artificiales ubicados en la colonia El Cerrito, así como la piedra de los sacrificios que se encuentra actualmente en la Sacristía del Convento Agustino de la Ciudad. MURAL DE LA FE: Ubicado dentro del Santuario del Señor Jesús del Santo Entierro y pintado por el artista local Raúl Domínguez Lechuga. Pintado en 1989 representa la historia de la construcción de la Iglesia, la construcción del Santuario, el descubrimiento de la imagen y de la piedra, cuando se incendió el mismo, la procesión en los principales barrios de la ciudad y las fiestas patronales. El Mural representa la evangelización en Huauchinango.", tags : ["huauchinango"] },
	{ value : "Bernal es un pueblo del estado mexicano de Querétaro, localizado en el municipio de Ezequiel Montes, es conocido por estar localizado al pie de la Peña de Bernal, el tercer monolito más grande del mundo. El Castillo Este inmueble de tipo virreinal, construido en el siglo XVII, es uno de los más importantes en la historia política de Bernal. En su torre frontal se distingue un bello reloj de origen alemán, el cual fue colocado para conmemorar el inicio del siglo XX. Actualmente, este edificio alberga las oficinas de la Delegación Municipal. Capilla de las Ánimas Esta capilla, también conocida como las Animitas, data del siglo XVIII y fue edificada en honor de todas las ánimas del purgatorio. Su atractivo diseño se debe a las pequeñas dimensiones de su atrio y altar. Cuenta con un teatro al aire libre y un parque donde los visitantes pueden tomar, además de un descanso, magníficas fotografías. Capilla de la Santa Cruz La capilla dedicada a la Santa Cruz, a quien los bernalenses veneran con gran devoción, fue construida entre los siglos XVIII y XIX. La tradición marca que los peregrinos deben llegar al atrio de rodillas bajo el sol, como pago de una deuda celestial. Templo de San Sebastián Mártir Su construcción inició en 1700 y concluyó en 1725. No tiene un estilo definido; sin embargo, en la torre campanaria se puede apreciar la mano del artista indígena. Además, recientemente fueron colocados varios vitrales dignos de admirar. Una excelente manera de disfrutar Bernal es recorrer sus hermosas calles, visitando las primeras casonas construidas durante el siglo XVII. La Oficina de Turismo ofrece dos recorridos; el primero, relata la historia del pueblo y la geología de la peña; el segundo, narra la fundación de Bernal y la procesión de las Ánimas. Es muy conocido el circuito de monumentos históricos, como el Castillo del Siglo XVII que cuenta con un gran reloj de origen alemán, colocado para recibir la llegada del siglo XIX. ", tags : ["bernal"] },
	{ value : "Cadereyta es la entrada a la Sierra Gorda queretana; tiene una gran variedad geográfica en el sur su clima es  semidesértico y en el norte tiene zonas boscosas.   En Cadereyta se puede contemplar en toda su amplitud el semidesierto queretano desde la flora y fauna hasta las tradiciones y cultura. En este municipio se ubican  varios campos vinícolas lo cual lo hace perfecto para visitar y conocer más sobre enoturismo en Querétaro.En 2011 fue nombrado Pueblo Mágico gracias a su historia y su magia heredada de los pueblos chichimecas, pames y jonaces, así como por sus diversos atractivos turísticos. Sus edificios tienen una arquitectura colonial que invitan a conocer más sobre la historia del lugar. La gastronomía de Cadereyta se caracteriza por emplear ingredientes como el garambullo, el guamichi, la tuna, la pitaya, propios del semidesierto. Así mismo, se emplean productos de origen animal y se consumen insectos como los chapulines, los gusanos de maguey y los chamueses.   El nopal en penca, platillo típico otomí también es muy popular en esta zona y se puede degustar principalmente en Cadereyta y Colón.", tags : ["cadereyta de montes"] },
	{ value : "Jalpan fue nombrado Pueblo Mágico en el 2010 y se encuentra en el corazón de la Sierra Gorda. La belleza natural se complementa con las diversas expresiones culturales y la magnificencia del arte barroco de las misiones franciscanas, legado de Fray Junípero Serra. La Presa Jalpan entró en la lista de sitios Ramsar desde 2004 gracias a su importancia ecológica al ser un humedal y recibir aves migratorias. En Jalpan se encuentran dos de las Misiones Franciscanas de Querétaro: Santiago de Jalpan, Nuestra Señora de la Luz de Tancoyol por lo que mucha gente interesada en el turismo religioso acude a este Pueblo Mágico para conocer acerca del legado de la religión católica en nuestro estado. Al estar en la Sierra Gorda, Jalpan cuenta con varios atractivos naturales en donde se pueden practicar actividades como senderismo, ciclismo de montaña, pesca deportiva y observación de flora y fauna.     Misión Santiago de Jalpan. Fue  la primera de las cinco misiones, construida entre 1752 y 1758 por Fray Junípero Serra como una labor evangelizadora. Misión  Nuestra Señora de la Luz de Tancoyol. Es posible que su autor sea Fray Juan Ramos de Lora. Su portada es iconográficamente la más elaborada de las cinco misiones.   Arqueológica de Tancama. En este lugar se asentó la cultura huasteca y tuvo su máximo esplendor entre los años 700 a 900 de nuestra era. Está conformada por tres plazas en desnivel que simula la forma de un cerro aledaño. Tenía funciones ceremoniales y astronómicas.", tags : ["jalpan de serra"] },
	{ value : "Tequisquiapan es una pequeña ciudad localizada en México considerada como Pueblo Mágico, situada en el Estado de Querétaro y cabecera del municipio homónimo. Forma parte de la Zona Metropolitana de San Juan del Río. La fama de Tequisquiapan se remonta a hace muchos años cuando era muy conocido y visitado por sus aguas termales. Actualmente, es también famoso por su cercanía a la Ruta del Queso y el Vino en Querétaro y su Feria del Queso y El Vino que se celebra cada año en el mes de Mayo. Reconocido Pueblos Mágico, su hermosa y apacible plaza recién hermoseada, lo hacen lugar ideal para pasear con la familia o con los amigos.  Un lugar que te invita a disfrutar de sus restaurants, sus tiendas de artesanía y la belleza de su iglesia y su kiosko. Su plaza es también sede de diversos eventos. ", tags : ["tequisquiapan"] },
	{ value : "Uno de los sitios más recomendables para conocer en Querétaro es el Pueblo Mágico de San Joaquín. Por su variada oferta turística, los viajeros encuentran en este lugar un vasto abanico de opciones de esparcimiento y descanso. El Parque Nacional Campo Alegre es una vasta zona arbolada ideal para los almuerzos campestres y el disfrute de la naturaleza. Cuenta con asadores, alumbrado, regaderas y palapas. El sitio arqueológico de Ranas, a tres kilómetros de la cabecera municipal en la parte superior de dos cerros, es otro de los atractivos de San Joaquín. Este sitio fue un relevante centro ceremonial, político y religioso de los antiguos chichimecas. Igual de fascinantes son las pinturas rupestres de San Francisco Gatos, Los Azogues y El Durazno. Otro sitio indispensable de conocer por estos rumbos queretanos es la Gruta de los Herrera, por su silvestre majestuosidad y las innumerables formaciones de estalactitas y estalagmitas que existen en su interior, que tienen más de 100 millones de años de antigüedad. Para los aficionados al turismo arqueológico, otra recomendación es visitar Toluquilla, yacimiento prehispánico que sobresale por su excelente estado de conservación, y en el que pueden conocerse un par de pirámides y un juego de pelota. Los alrededores de este lugar están habitualmente cubiertos por la niebla, y son muy adecuados para la práctica del ecoturismo y la escalada en roca.", tags : ["san joaquin"] },	
	{ value : "La laguna de Bacalar es una laguna localizada en el sur del estado mexicano de Quintana Roo, en el Municipio de Bacalar a unos 40 km al norte de la capital del estado, Chetumal. La laguna de Bacalar es popularmente conocida como la Laguna de los Siete Colores debido a que se pueden distinguir siete diferentes tonalidades de azul entre sus aguas, debido a las distintas profundidades de la misma, dentro de la laguna existen tres diferentes cenotes, cuyas aguas desbordaron y constituyendo una única laguna, su forma es estrecha y larga, teniendo 42 km de largo y solo 4 km en su punto más ancho. La laguna de Bacalar es uno de los pocos cuerpos de agua superficial permanente de la península de Yucatán, cuyo suelo calcáreo no permite la retención superficial del líquido, formando así corriente subterráneas y cenotes, a excepción de la región de Bacalar y el sur de Quintana Roo, donde la Laguna forma parte de un gran sistema junto a otras lagunas menores, como la Laguna Guerrero o Laguna Milagros, que se encuentran ocasionalmente unidas durante las épocas de lluvia a través de aguadas y pantanos con el Río Hondo y la Bahía de Chetumal. ", tags : ["bacalar"] },
	{ value : "Isla Mujeres es una pequeña Isla que se encuentra frente a la ciudad de Cancún. Es un lugar excelente si se quiere disfrutar de las hermosas playas del caribe mexicano al estilo hippie, de mochilero o para una escapada romántica en pareja. A diferencia de Cancún, su ambiente es muy tranquilo y menos glamuroso y eso se siente desde el momento en el que bajas del barco. Apenas llegues a Isla Mujeres, camina hacia la izquierda y aproximadamente a 4 cuadras encontraras una hermosa playa conocida como Playa Norte, esta se extiende hasta el hotel Mía, que se encuentra en el otro extremo de la playa, es conocida por ser una playa seminudista ya que a las mujeres les es permitido andar en topless, es una playa familiar así que no vayas mas allá aunque este fuerte el calor. En Playa Norte hay algunos bares, restaurantes y hoteles. Pero lo mejor es la tranquilidad de sus aguas, puedes caminar hasta 200 metros y el agua en algunas partes te llegaría hasta las rodillas. Al caer la noche puedes visitar Fayne’s es un bar con música en vivo para bailar, casi siempre está lleno de extranjeros; otro es La Terraza, tiene muy buena música (los fines de semana salsa en vivo) y acuden tanto turistas como gente local. Otro es VIP, un poco más fresa aunque pequeño, así como Koko Nuts con un ambiente fresco tipo palapa, rústico con buenas bebidas y música y por último está Euforia y My Space que son los antros favoritos de la gente local. Todos están en el centro de Isla Mujeres, puedes llegar simplemente preguntando.", tags : ["isla mujeres"] },
	{ value : "Tulum o Tuluum fue una ciudad amurallada de la cultura maya ubicada en el Estado de Quintana Roo, en el sureste de México, en la costa del mar Caribe. Es en la actualidad un gran atractivo turístico de la Riviera Maya y junto a ella se encuentra la población del mismo nombre, Tulum. La ciudad maya se encuentra dentro del Parque nacional Tulum. El sitio arqueológico de Tulum está asentado en la costa oriental del estado de Quintana Roo, en la región conocida como la Riviera Maya. La ciudad recibía en la antigüedad el nombre maya de Zamá (que significa en maya amanecer) y el actual. ulum (que significa en maya muralla), que parece haber sido utilizado para referirse a la ciudad cuando ya se encontraba en ruinas. Por los numerosos registros en murales y otros trabajos encontrados en los edificios de la ciudad, se tiene considerado que Tulum fue un importante centro de culto para el llamado 'dios descendente'. ,", tags : ["tulum"] },
	{ value : "Real de Catorce fue una población minera y actualmente turística ubicada en el corazón de la sierra de Catorce, en el estado de San Luis Potosí, en el norte de México. El nombre fue tomado de la palabra Real, por sus minas de plata,​ y de catorce ladrones que se escondieron en este lugar. Uno de los grandes centros mineros de San Luis Potosí fue Real de Minas de Nuestra Señora de la Limpia Concepción de Guadalupe de los Álamos de Catorce, o mejor conocido como Real de Catorce. Es difícil precisar cuándo se descubrió la primera veta, pero ya en 1772 era un real o una población minera; es hasta el 11 de agosto de 1777 cuando surge como en documentos el término de 'Los catorce'.  ", tags : ["real de catorce"] },
	{ value : "Xilitla es un municipio ubicado en la región de Huasteca, del estado de San Luis Potosí, México. Es conocido por sus fértiles montañas y manantiales, que crean paisajes increíbles en todo el municipio. Xilitla es un municipio poco industrializado, lo que ha ayudado a preservar las culturas indígenas náhuatl y téenek y sus modos tradicionales de vida. Es famoso por su café y su producción de piloncillo, además de ser el lugar más lluvioso de San Luis Potosí. Templo y ex convento Agustino, construido en 1557. Pertenece a la arquitectura monástica-militar. Las Pozas, jardín surrealista construido por el excéntrico artista inglés Edward James. La Silleta, un macizo montañoso que es todo un reto para los montañistas. Parador El Paraíso, desde donde se aprecia el profundo cañón de Tancuilín y una hermosa vista de la sierra. Ahuacatlán, que es un pintoresco pueblo que merece ser visitado.", tags : ["xilitla"] },
	{ value : "Cosalá significa lugar de mucha belleza, y hace honor a su nombre. Es un súbito y bello brote de color en el corazón minero de Sinaloa. Es considerada la joya colonial del estado de Sinaloa por su ambiente recoleto, edificios novohispanos, calles empedradas, tradiciones y leyendas, gastronomía y costumbres que recuerdan con orgullo su pasado. La Parroquia de Santa Úrsula, el Museo de Minería e Historia, la Reserva Ecológica del Mineral de Nuestra Señora, la Plaza de Armas, el Cuartel Quemado, forman parte de su acervo de atractivos, así como sus cascadas, los fantasmas, los cintos piteados, los tamales, etcétera. Es un lugar en el que se conjugan armónicamente la naturaleza y la cultura, la historia y el presente que, por sus inmensos valores, ha sido reconocido como uno de los Pueblos Mágicos de México.", tags : ["cosala"] },
	{ value : "Mazatlán, en el estado de Sinaloa, es actualmente la principal vía de acceso marítimo entre México y Asia, con su puerto multipropósito que lo mismo recibe cruceros turísticos que enormes buques de carga. Gracias a su cercana ubicación y a la riqueza de sus minas y esteros, el Pueblo Mágico de Rosario fungió como un trampolín para la consolidación de este puerto, por lo que desde el siglo XVII ambos lugares han gozado de una relación casi simbiótica. Aunque los grupos de indígenas totorames controlaban la región desde el valle hasta la costa, en lo que actualmente abarca los territorios de Mazatlán, San Ignacio, Concordia, El Rosario y Escuinapa, su belicosidad y constantes enfrentamientos contra los xiximes, coras y escasees, fueron mermando su población hasta que en los años de la fundación de El Rosario eran prácticamente inexistentes. Sin embargo, conforme el pueblo fue cobrando importancia económica y política, los totorames adoptaron los apellidos de los señoríos que iban emigrando, por lo que sus raíces perduraron a través de denominaciones como Rodríguez, Ramos, Rivera, Ortíz y Alduenda. Esto influyó principalmente en la actividad pesquera, en la que este pueblo era ducho. El principal enclave en el que prosperaron los antiguos totorames fue Chametla, fundado en 1531 y considerado por ello el más antiguo del noroeste mexicano. Más aún, antes de la conquista, este territorio tuvo una gran importancia no solo para la región, sino para todo el México precolombino, pues existe la creencia, basada en descubrimientos arqueológicos, de que los aztecas partieron de las cercanías en su viaje de descubrimiento hacia Tenochtitlán. El Museo Comunitario de Chametla, ubicado en una finca de principios del siglo XX junto a la Parroquia de San Pedro, concentra el pasado remoto del pueblo a través de una colección de piezas arqueológicas que incluyen artefactos de piedra o cerámica, utilizadas para uso doméstico, ritual o productivo, como malacates, cuencos de cerámica, figuras zoomorfas y antropomorfas, y urnas mortuorias que muestran un estilo particular.", tags : ["el rosario"] },
	{ value : "El Fuerte es una ciudad mexicana del Estado de Sinaloa, cabecera del municipio del mismo nombre; posee grandes atractivos naturales, históricos, arquitectónicos, culturales y arraigadas tradiciones indígenas (Yoremes), además de ubicarse dentro del Circuito Ecoturístico Mar de Cortés - Barrancas del Cobre.", tags : ["el fuerte"] },
	{ value : "Mocorito, la Atenas de Sinaloa, cuenta con belleza arquitectónica, sitios de interés histórico y cultural, y hermosas tradiciones. Mocorito es la cabecera del municipio sinaloense del mismo nombre, situado en la región centro-norte del estado. Está rodeado por los también municipios sinaloenses de Sinaloa, Navolato, Culiacán, Badiraguato, Salvador Alvarado y Angostura. Por su riqueza cultural, la pequeña ciudad de Mocorito es llamada la Atenas Sinaloense. Mocorito te invita a recorrer sus acogedoras calles a píe, comenzando por la Plaza Miguel Hidalgo en el corazón del centro histórico. A partir de allí se van encadenando lugares de interés artístico, cultural o histórico, como la Parroquia de la Inmaculada Concepción, la Plaza Cívica Los Tres Grandes de Mocorito, el Palacio Municipal, la Escuela Benito Juárez, el Centro Cultural, la Casa de las Diligencias, el Museo de Historia Regional, el Parque Alameda y el Panteón Reforma. Dos tradiciones singulares de Mocorito son el Ulama y la Banda Sinaloense. En las cercanías del Pueblo Mágico, hay que conocer el pueblito de  San Benito y la pequeña ciudad de Guamúchil. No puedes irte de Mocorito sin degustar un chilorio. ", tags : ["mocorito"] },
	{ value : "Las abundantes arboledas de álamos dan la bienvenida a quienes llegan en busca de hermosos lugares de descanso con una gran historia dentro de sus muros. Ubicado en el sureste del estado de Sonora, el Pueblo Mágico de Álamos es el resultado de más de cuatro siglos de abundancia y acontecimientos políticos, que derivaron en la belleza de sus construcciones coloniales. También conocida como “La Ciudad de los Portales”, es también la capital cultural del estado, gracias a sus festivales artísticos y celebraciones seculares, que encuentran en sus calles estrechas y empedradas, enormes zaguanes, y patios llenos de vegetación, un marco perfecto para celebrar la belleza. El clima promedio de 24 grados es la cereza del pastel, conviertiendo a Álamos como un destino muy disfrutable en una región predominantemente desértica. Como buen pueblo colonial, un recorrido en Álamos comienza por su Plaza de Armas, que tiene dos particularidades: la interesante fusión arquitectónica entre el barroco español y el indígena mexicano, legado de los andaluces que diseñaron el centro histórico en el siglo XVIII y supieron calcar lo mejor de ambas culturas. La segunda es el pintoresco trenecito que sale cada hora desde ahí para mostrarles a los turistas los sitios más representativos del pueblo, como la antigua cárcel municipal, el Palacio de Gobierno y el mercado conocido como El Parián. Las casonas de Álamos no solo llaman la atención de los visitantes por sus bellos detalles y ornamentos, sino por las historias y leyendas que habitan en ellas. Una de las más conocidas es la de la Hacienda de las Delicias, donde varios aseguran haber visto el fantasma de la joven Beatriz Almada, quien se suicidó en su balcón en 1800 porque su familia le impidió casarse con el jardinero, y sigue rondando el patio en el que se encontraba a escondidas con su enamorado.", tags : ["alamos"] },
	{ value : "El Pueblo Mágico sonorense de Magdalena de Kino te espera con su interesante patrimonio cultural e histórico. Te invitamos a conocerlo al máximo con esta guía completa. Magdalena de Kino es la cabecera del municipio mexicano de Magdalena, situado en el norte del estado de Sonora, a 80 km. de la frontera estadounidense. La pequeña ciudad sonorense fue elevada en 2012 al rango de Pueblo Mágico para impulsar una corriente turística con base en la cercanía de Estados Unidos. El primer asentamiento hispano fue la antigua Misión de Santa María Magdalena, fundada 1648 y destruida por los indígenas Pápagos y Pimas altos. En 1687 llegó el Padre jesuita Eusebio Kino y refundó la misión a finales del siglo XVII. La ciudad se llamó Santa María Magdalena de Buquivaba hasta que en 1966 fueron hallados los restos del Padre Kino y la localidad tomó el nombre de su fundador.", tags : ["magdalena de kino"] },
	{ value : "En la sierra donde colindan el estado de Tabasco con el de Chiapas se encuentra el Pueblo Mágico de Tapijulapa. Un poblado de casas blancas y techos de teja roja rodeado de una densa vegetación. Tapijulapa es una localidad del municipio de Tacotalpa, una región caracterizada por su clima cálido y húmedo que presenta lluvias todo el año. Cerca del pueblo atraviesan los ríos Oxolotlán y Amatlán que se unen para alimentar el Río Grijalva, cuyas aguas riegan las planicies de este estado. En Tapijulapa se puede disfrutar del pueblo y sus alrededores, tan sólo recorrer sus calles angostas y empedradas es una grata experiencia, se puede visitar el templo dedicado a Santiago Apóstol que fue construido en el siglo XVII, caminar por la orilla del río o viajar en lancha a la comunidad de Villa Luz, donde se puede disfrutar de aguas sulfurosas o visitar el museo local y antigua casa del gobernador Tomás Garrido Canabal. A Tapijulapa se le conoce como la Esmeralda de la Sierra, es el centro de la reserva denominada Sierra de Tabasco, una área protegida para preservar la selva tabasqueña, en esta región aún se pueden observar en su hábitat animales como el ocelote, monos araña y cochimonte o cerdo salvaje. Caminando las calles empinadas del pueblo se encuentra el templo de Santiago Apóstol, éste se ubica en la parte más alta de un cerro, desde éste punto se aprecia una espectacular panorámica de la localidad. Más adelante, después de descender por sus escalinatas se hallan varios talleres de artesanos que trabajan la madera y tejen diversos objetos de mimbre.", tags : ["tapijulapa"] },
	{ value : "Alimentada por las aguas de tres ríos, Mier es un oasis en medio del desierto tamaulipeco, cuna del desarrollo fronterizo de México y hogar de un sinnúmero de historias y tradiciones que perviven en los muros de sus edificios y en la vida de sus habitantes. Testigo de grandes batallas, se mantiene en pie a más de 250 años de su fundación, para recibir con su magia a quienes busquen sumergirse en sus aguas y en su cultura. Ubicado al norte del estado de Tamaulipas, en las estribaciones de la frontera con Estados Unidos, Mier ofrece también atractivos naturales que invitan a la contemplación y el descanso. Cada uno de los ríos, Álamo, Bravo y San Juan, cuentan con su presa, donde se pueden realizar actividades deportivas como pescar y cazar, pasear por los senderos de los alrededores e incluso acampar bajo las estrellas.El centro histórico de este Pueblo Mágico es un bello conglomerado de plazas públicas, cada una con su atractivo particular dotado por construcciones religiosas, casas particulares y tiendas pintorescas que ofrecen los orgullos locales: pan de dulce, tejidos, bordados y calzado de piel. La fundación de Mier se remonta al 6 de marzo de 1753, bajo la advocación de la Purísima Concepción, a quien corresponde su iglesia principal, actualmente ubicada en su plaza principal, llamada Juárez. Esta construcción es uno de los inmuebles más antiguos, al haber sido iniciada en 1757 por la orden de los franciscanos en piedra labrada. Su curiosa mezcla de estilos arquitectónicos corresponde a una situación recurrente en los templos mexicanos: su construcción demoró más de un siglo, por lo que su torre más alta contrasta con el resto por haber sido construida en ladrillo hasta ya bien entrado en siglo XIX. El segundo es la Casa de la Cultura, donde gente de todos lados del país acude a contemplar las obras y reliquias que ahí se exhiben, como fotografías antiguas del pueblo, pinturas de monarcas y accesorios del famoso actor de cine Eleazar García “Chelelo”, oriundo del lugar. En las mesitas de la Plaza Hidalgo se puede jugar en familia la tradicional Lotería, cuyas cartas tienen ilustraciones exquisitas realizadas por artistas locales; el Casino Argüelles, otro de los edificios más importantes de este Pueblo Mágico, es también sede de este juego en el que participan decenas de familias en un ambiente de alegría y cordialidad.", tags : ["mier"] },
	{ value : "El cielo estrellado que cubre la Reserva de la Biósfera El Cielo es motivo suficiente para enamorarse del Pueblo Mágico de Tula, en el estado de Tamaulipas. A esta belleza natural se suma su riqueza arquitectónica, artesanal y gastronómica, que lo convierten en uno de los destinos turísticos más atractivos del noreste de México.La fundación de Tula se remonta a 1617, cuando Tamaulipas aún no se constituía como estado, por lo que en un principio la misión de San Antonio de Tula estuvo circunscrita al gobierno de Nuevo Santander. Los frailes franciscanos que llegaron a las faldas del Cerro de la Cruz, encabezados por fray Juan Bautista de Mollinedo, construyeron un templo de palos y palma que sirvió para evangelizar la región durante algunas décadas, hasta que llegando al 1700 se ordenó el levantamiento del soberbio Templo de San Antonio de Padua, gracias al florecimiento que se vivió en los alrededores de la Laguna de Tula. Tula fue nombrada ciudad en 1835, y hasta la fecha hace honor a este nombramiento con una infraestructura que cuenta con hoteles, restaurantes y numerosos sitios de interés, que pueden ser conocidos en su turibús. El paseo comienza en la enorme Parroquia de San Antonio de Padua, frente a la plaza principal, considerada la segunda más grande del estado. Cimentada durante el siglo XVIII y terminada en 1889 con la instalación de un elegante reloj inglés en su torre, consta de una nave rematada por una cúpula, un campanario y una fachada de piedra con dos contrafuertes rectangulares. El santo al que se encuentra dedicada fue un fraile docto en el evangelio, patrón de mujeres estériles, pobres, viajeros, albañiles, panaderos y papeleros. Se le invoca por los objetos perdidos y es muy popular para pedir un buen esposo. Otro de los monumentos religiosos toltecos es el Templo del Rosario, mandado a construir durante el Porfiriato por las hermanas del Rosario y una muestra de gran suntuosidad con su cúpula dorada, sus acabados de filigrana y sus pisos de madera pulida; en su interior alberga el Cristo más antiguo de Tamaulipas, que data de 1411. Al visitar la Capilla de la Loma del Panteón Viejo se participa en un episodio de la historia nacional, pues sirvió como punto estratégico durante los enfrentamientos revolucionarios; en su atrio se sepultaron a los caídos.", tags : ["tula"] },
	{ value : "Huamantla se ubica a 42 kilómetros de Tlaxcala. A la llegada de los españoles Hernán Cortés se estableció unos días en esta zona habitada por otomíes, mientras esperaba las noticias del mensajero que había enviado a los Señoríos de la República de Tlaxcallan. San Luis Huamantla fue fundada el 18 de octubre de 1534, tierra de valientes guerreros como Tlahuicole, campo donde se han librado grandes batallas como la de Tecoac en 1876 cuando el General Porfirio Díaz venció al ejercito norteamericano. Huamantla la Heroica, la Brava, pero también la noble y devota, con vocación al arte y la unidad que transforma sus calles en ríos de colores cada 14 de Agosto para engalanar la procesión de la Virgen de la Caridad. Museo Nacional del Títere (MUNATI) Se localiza en Huamantla en Memoria de la Familia Rosete Aranda, fundadores de la compañía de títeres más exitosas en México en el siglo XIX, llegaron a tener 5,000 piezas elaboradas por ellos mismos, escribían y montaban sus propias obras. Dieron funciones ante los presidentes de la República Benito Juárez y Antonio López de Santa Ana. En el museo también encontrarás marionetas de otras compañías y países. Museo Taurino.Un espacio en memoria de la Fiesta Brava, encontrarás una galería de toreros de diferentes épocas, maquetas de Plazas de México, carteles, noticias de periódicos que publicaron tardes de triunfos, trajes de torero, cabezas de toros y un mural dedicado a la tauromaquía. Museo de la Ciudad. Ocupa lo que en tiempos de la colonia fue una troje del convento franciscano, con gruesos muros y hermosos arcos, guarda los recuerdos del pueblo de Huamantla, desde piezas prehispánicas hasta retratos y trofeos de personajes como el Alcón de Huamantla.", tags : ["huamantla"] },
	{ value : "Tlaxco se ubica en una región montañosa que estuvo habitada por los otomíes desde fines del siglo XIV. Ubicado en el Altiplano Central mexicano, a 2540 metros sobre el nivel del mar, Tlaxco es un municipio tlaxcalteca que limita al norte con Puebla, al sur con los municipios de Muñoz de Domingo Arenas, Tetla y Atlangatepec. Por el oriente colinda con Lázaro Cárdenas y Emiliano Zapata y al poniente con el territorio hidalguense y el municipio de Benito Juárez. Tal vez el principal atractivo de Tlaxco sean las pinturas rupestres que se encuentran en las cercanas cavernas de La Parada y La Gloria, que datan de hace unos 12 mil años. Las creaciones rupestres de La Gloria se ubican en el predio homónimo y por su antigüedad constituyen un auténtico tesoro histórico y antropológico. Este arcaico yacimiento fue descubierto a mediados de la década de 1980 y en la actualidad es una referencia imperdible en el mapa turístico de Tlaxco y sus inmediaciones. Eventos locales para no perderse son la Feria del Queso, la Madera y el Pulque y la Fiesta de San Agustín. ", tags : ["tlaxco"] },
	{ value : "Coatepec es una región cafetalera de mayor tradición y calidad en nuestro país desde el siglo pasado. Además de estar rodeado por diferentes formaciones caprichosas de la naturaleza que van desde senderos, cerros, paredes hasta cascadas y saltos de agua, Coatepec tiene una rica mezcla colonial y que en su herencia, ha dejado cerca de 370 inmuebles con valor histórico, por lo que fue declarada Patrimonio Histórico de la Nación. La festividad de San Jerónimo en el mes de septiembre es la celebración religiosa más importante de la ciudad, se caracteriza por sus tradicionales arcos o enramadas. Los arcos se decoran con flores blancas y rojas. El arco principal se coloca en la puerta de la parroquia de San Jerónimo y los otros en los demás templos de la ciudad. La Feria del Café, se lleva a cabo en el mes de mayo, es un evento popular que incluye la coronación de la Reina del Café, espectáculos musicales, actividades culturales, bailes populares, corridas de toros y una expo artesanal y comercial. El Cerro de Las Culebras es el mirador por excelencia para apreciar el trazo de la ciudad y sus templos. Por las tardes, la atmósfera del pueblo es propicia para la convivencia con los amigos o el romanticismo. El gusto por las orquídeas entre algunos de sus pobladores nos brinda la oportunidad de conocer uno de los orquidiarios más importante de México, con miles de plantas de diferentes especies. ", tags : ["coatepec"] },
	{ value : "Papantla es una de las comunidades más atractivas del estado de Veracruz. De hecho es uno de los llamados Pueblos Mágicos- denominación que había perdido temporalmente por fallar en algunos requisitos gubernamentales-, por la riqueza natural y cultural que lo definen. Los visitantes encuentran en Papantla un sitio de tradiciones gastronómicas irresistibles, con celebraciones tradicionales muy variadas y enigmáticos sitios arqueológicos como El Tajín y Cuyuxquihui. Además, Papantla es el sitio ideal para conocer los secretos de la cultura Totonaca. Lo mágico de este pueblo veracruzano parece no tener límites. Recomendamos conocer en Papantla, la Iglesia de Cristo Rey, la cual se edificó en 1950 por cuenta del presbítero Pedro Onórico y que evoca notablemente a la Catedral de Notre Dame, en Francia. La Iglesia de Cristo Rey tiene un diseño con nervaduras, arcos ojivales y rosetones, los cuales perfilan un estilo neogótico equiparable al de las grandes catedrales del continente europeo. Igual de valiosa es la Catedral de la Señora de la Asunción, misma que se localiza en el centro de Papantla y cuya construcción dio comienzo en el siglo XVI por cuenta de los religiosos franciscanos. La terminación de este templo no aconteció sino hasta 1590. La catedral tiene una nave en forma de cruz, particular de los franciscanos y una fachada con cuatro pilastras de tipo románico, con un gran arco de entrada y una puerta de cedro labrado. La torre de este edificio sacro tiene 30 metros de altura y su reloj construido en 1895 todavía es funcional. Otros dos atractivos de Papantla son el Palacio Municipal y el Parque Israel C. Téllez. En el caso del primero, si bien fue construido en 1910, el ejército de Villa lo echó abajo en 1915. No fue sino hasta 1929 cuando pudo ser reconstruido. En la actualidad el Palacio Municipal exhibe un estilo neoclásico, con una fachada de tipo frontón clásico. En lo que se refiere al Parque Israel C. Téllez, este se ha consolidado desde hace mucho tiempo como el centro de la dinámica social de los papantecos, quienes acuden allí para tomar aire fresco o para descansar. Cada fin de semana en este admirable jardín urbano, se efectúan los tradicionales Viernes de Danzón, los Sábados Musicales y los Domingos Culturales, eventos que se proyectan como escaparates efectivos para los artistas y creativos locales.", tags : ["papantla"] },
	{ value : "Xico Pueblo Mágico, se encuentra a 20 kilómetros de la ciudad de Xalapa por la carretera a Coatepec. Les recomiendo para moverse por la zona hospedarte en Xalapa y rentar coche para poder así conocer mucho más lugares cercanos que rodean la ciudad. Uno de los edificios más icónicos de Xico es la Parroquia de Santa María Magdalena, que posee una arquitectura barroca y neoclásica, siendo el edificio más imponente del pueblo. Una de las celebraciones religiosas más importante es  a la patrona de la ciudad, que se celebra el día 19 de julio, siendo un espectáculo único de tradiciones, donde verás la fusión de la religión católica y las creencias toltecas. En la fachada de la iglesia podrás ver un gran arco de flores que decora con colores amarillos su entrada, el cual se ve desde la calle principal hasta el inicio del pueblo. Conversando con la gente nos contaron que hay otra celebración muy importante para los pobladores de la zona, que es la Xiqueñada que se celebra el 22 de julio. Esta tradición es muy parecida a la fiesta de la Pamplona en España, donde sueltan a los toros para que corran por las calles. Una tradición que para algunos es maltrato y para otros tradiciones, se los dejo a su criterio queridos viajeros. Para los amantes de la buena comida Xico no es la excepción, puedes encontrar una variedad de restaurantes de gastronomía regional, como el platillo característico de Xico que es el afamado mole que es reconocido a nivel nacional e internacional, además de su exquisita panadería artesanal, el chileatole, el verde de Xico y la sopa de frijol con xonequi o chonequi que es una hierva especial para ese platillo.", tags : ["xico"] },
	{ value : "Coscomatepec nos presenta una interesante fusión de tradiciones y cultura surgidas de más de cien años de historia. Es una comunidad protegida por imponentes cerros, de entre los cuales sobresale el volcán Citlaltépetl, la cumbre más alta del territorio nacional. Los visitantes disfrutan a lo grande al presenciar danzas típicas de la región, como la de los Santiagos, antigua representación de la lucha entre Cristianos y Moros. Es una delicia dejarse embrujar por sus aromas y sabores más representativos, los cuales han pasado de generación en generación como un valioso tesoro. Coscomatepec se presta además para la práctica del ciclismo de montaña, liberando intensas descargas de adrenalina entre sus silvestres caminos, ocultos entre las montañas. Esta población se localiza a unos 31 kilómetros de la ciudad de Córdoba, en el tramo más elevado de la carretera interserrana que conecta a la región de las Altas Montañas con la ciudad de Xalapa. Pocos Pueblos Mágicos de México son tan propicios para la aventura y el ecoturismo, puesto que su localización geográfica nos presenta a Coscomatepec entre dos enormes barrancas, la del Río Atoyac y la del Río Jamapa. De entre su amplio abanico de atractivos turísticos, sobresale la Iglesia de Ixtayucan, edificio sacro construido a instancias de Fray Alonso de Santiago, quien trató de evangelizar a los indígenas de la zona.", tags : ["coscomatepec"] },
	{ value : "Orizaba, anteriormente llamada Ahauializapan y mejor conocida como “La Ciudad de las Aguas Alegres” es un esplendoroso valle ubicado en la región central de las Altas Montañas, en el Estado de Veracruz. Su clima es templado-húmedo, con una temperatura promedio de 28° C. Rodeada de cerros y con una altura de 1236 msnm, Orizaba es cruzada por el río homónimo que se origina en el manantial Ojo de Venado, en las faldas del volcán Pico de Orizaba. Limita al norte con Ixhuatlancillo, al sur con Rafael Delgado, al este con Ixtaczoquitlán y al oeste con Río Blanco. La ciudad -también llamada Pluviosilla por el escritor Rafael Delgado- de origen tolteca, tlaxcalteca y chichimeca, fue nombrada “Muy Leal Villa” el 27 de enero de 1774, posteriormente, el 18 de diciembre de 1776 le fue concedido por decreto del Rey Carlos III el permiso para usar Escudo de Armas y Estandarte, para que, finalmente, en 1830 fuera nombrada Ciudad. Mención especial merecen el Museo de Arte del Estado, que alberga obras de talla nacional e internacional, como la colección de Diego Rivera, las de José Justo Montiel, Salvador Ferrando, Casimiro Castro, Johann Moritz Rugendas, Karl Nebel y Josep Cusachs, por mencionar algunos. El Archivo Municipal, que resguarda un gran acervo histórico y cultural, contando con biblioteca musical, hemeroteca y el Museo de la Ciudad. Las diferentes iglesias que resguardan gran parte de la Orizaba Colonial y que nos muestran los más variados estilos arquitectónicos, pasando por la arquitectura de orden dórico del Templo del Calvario, de orden jónico de la Catedral de San Miguel Arcángel, el estilo churrigueresco de la Iglesia de la Concordia y el Templo del Carmen con el Ex Convento de San Juan de la Cruz, hasta el estilo gótico del Templo de Santa María de los Servitas.", tags : ["orizaba"] },
	{ value : "Esta ciudad colonial se le conoce como 'la ciudad de las tres culturas', pues en ella se combinan rasgos de su pasado prehispánico, del período colonial y de la época actual. Se encuentra situada a 1 hora de Mérida, y muchos operadores turísticos la incluyen en su recorrido a Chichén Itzá. Su nombre se debe a Zamná, 'rocío del cielo', personaje de singular sabiduría y origen mítico considerado como instructor y maestro de los mayas. Izamal es un hermosa población colonial fundada a mediados del siglo XVI sobre los vestigios de una antigua ciudad maya; su construcción más importante, el Conjunto Conventual de Nuestra Señora de Izamal, fue construido sobre las ruinas de un adoratorio maya llamado Pap-hol-chac. Este poblado levantado sobre 12 pequeñas colinas que rompen la planicie del entorno, todavía conserva los vestigios de su antiguo y enorme poderío: cenotes de sacrificio ritual se encuentran alrededor. De los antiguos cuatro caminos blancos o sacbés, y que conducían a ciudades aliadas o subyugadas, se pueden admirar todavía dos. Aké y Kantunil, satélites de esta gran ciudad maya, son, en días despejados, visibles desde lo alto de la pirámide de Kinich Kakmó. ", tags : ["izamal"] },
	{ value : "En la población yucateca de Valladolid acontecieron dos importantes eventos de la historia mexicana. Una de ellas es la llamada “Guerra de Costas” en 1847 y además la primera chispa revolucionaria en 1910. A Valladolid se le conoce de manera tradicional como “La Capital del oriente maya” y realmente es un justo título para la hermosura de sus construcciones coloniales, como por ejemplo el Convento de San Bernardino de Siena, la Iglesia de San Gervasio, el Palacio Municipal, el Museo de San Roque y el Ex telar de la Aurora, entre otras más. Pero además Valladolid tiene una localización estratégica en esta zona de la península de Yucatán. De hecho, para muchos es la ciudad más cosmopolita de la región. Se proyecta como el sitio perfecto para quedarse y dar recorridos para conocer lo mejor del mundo maya. Aconsejamos dar paseos desde Valladolid a lugares como Ek-Balam, Chichen Itzá, Tulum o Coba. Pero también se pueden conocer importantes poblaciones del México virreinal como Izamal o Tihosuco. Es una oportunidad magnífica para conocer la referencia cultural de innumerables hombres y mujeres del lugar.", tags : ["valladolid"] },
	{ value : "La palabra Jerez viene de Xerez, vocablo árabe que significa 'lugar donde abundan los vegetales', nombrado así por los primeros conquistadores que venían de España por el parecido de este territorio del estado de Zacatecas con Jerez de la Frontera, provincia española célebre por ser la cuna del flamenco. La plaza principal de Jerez, conocida como Jardín Rafael Páez, se edificó sobre los terrenos del que fuera el más antiguo mercado jerezano. En su centro se encuentra un bello kiosco morisco y en sus esquinas cuatro siempre frescas fuentes, que junto a los portales de los alrededores forman una estampa encantadora. El primero de estos portales es el Humboldt, ubicado en el costado sureste de la plaza, que es la entrada a la regia finca de la familia Escobedo, ricos y muy poderosos comerciantes que a finales del siglo XIX construyeron un fuerte emporio comercial de alcance internacional, pues mandaban mercancías a Estados Unidos y Europa. De su nombre solo queda el recuerdo en la parte superior de la construcción: 'La Nacional'. El portal recibió su nombre porque ahí se hospedó el explorador alemán Alexander von Humboldt en algún momento de su recorrido por México.", tags : ["jerez de garcia salinas"] },
	{ value : "Nochistlán es una ciudad que se encuentra en el sur de Zacatecas. Fundado en 1532, está considerado el segundo municipio más antiguo del estado, detrás de García de la Cadena. Su geografía se caracteriza por la hermosura de sus fincas, pero lo que en realidad le ha valido ser llamado Pueblo Mágico son sus tradiciones, costumbres, leyendas y soberbia arquitectura.El clima prevaleciente en esta comunidad- recientemente declarada como Pueblo Mágico- maneja temperaturas que van de los 7 a los 30 grados. Hay atractivos turísticos en Nochistlán que pueden ser considerados como representativos: tal es el caso del Templo de San Sebastián, pero hay muchos otros más. El Templo de San Sebastián fue construido en el siglo XVII, entre 1673 y 1743. Posteriormente fue construida la torre. Su fiesta patronal se desarrolla en enero y es un festejo conocido de manera popular como las empinoladas. Otro punto imperdible de Nochistlán, es el Acueducto Los Arcos, edificado por instancias de las autoridades de Nueva Galicia en el siglo XVII para abastecer de agua, desde ciertos yacimientos del vital líquido, hasta el poblado. Finalizado en 1793, contaba con varias pilas como las llamadas Azul y Coronada. La Pila de Afuera fue otra de las más utilizadas por la población de Nochistlán para obtener agua; de hecho, fue una de las fuentes principales de abastecimiento de esta población zacatecana durante las primeras décadas del siglo XX. Los habitantes del lugar tomaban agua de cinco pilas diferentes, y por las muchas leyendas y tradiciones asociadas a la Pila de Afuera, esta fue convertida en monumento en 1954.", tags : ["nochistlan de mejia"] },
	{ value : "A unos 125 km de la capital zacatecana, en los límites con San Luis Potosí, se encuentra esta atractiva comunidad que durante la época colonial se constituyó como un bastión minero vinculado al famoso Camino Real de Tierra Adentro, ruta comercial y económica declarada por la UNESCO como Patrimonio de la Humanidad en 2010. Pinos es un pueblo en realidad pequeño, compuesto por tres barrios. El primero es el Centro, que concentra los principales edificios alrededor de tres jardines: el Jardín San Francisco, el Jardín de las Flores y el Jardín Benito Juárez, que están llenos de árboles, bancas y tranquilidad. La plaza principal de Pinos tiene por nombre Jardín Miguel Hidalgo, y justo frente a ella se ubican el Palacio Municipal y la Torre del Reloj Público. Cerca de ahí se puede visitar la Parroquia de San Matías, edificada entre los siglos XVII y XVIII y que, aunque se encuentra un poco deteriorada, tiene una portada barroca elaborada en cantera con la curiosa técnica indígena del rajueleado. A un costado puede visitarse el Museo de Arte Sacro, en donde se conservan las obras de los importantes pintores novohispanos Francisco Martínez y Miguel Cabrera. Muy cerca de este jardín se encuentra la casona donde nació la escritora zacatecana Amparo Dávila, ganadora del Premio Xavier Villaurrutia en 1977. Los gruesos muros pintados de azul acero protegen una propiedad en ruinas, que ha sido desvalijada paulatinamente por la familia de la célebre cuentista. La otra iglesia importante en Pinos es la de San Francisco, que a pesar de su sobriedad resulta bellísima, pues se encuentra rodeada por el fresco verdor del Jardín Hidalgo, en donde además pueden contemplarse los exquisitos portales Juárez, Villalpando y Centenario. En el ex convento que se encuentra a un lado puede consultarse la oferta cultural del Pueblo Mágico en el Instituto Municipal de Cultura. En el Museo Comunitario IV Centenario puede explorarse el pasado más remoto de la región, pues en él se exhiben fósiles marinos, huesos de mamut, piezas prehipánicas, mapas y artillería antiquísimos y numerosas herramientas que eran utilizadas por los mineros en sus jornadas diarias. ", tags : ["pinos"] },
	{ value : "El Pueblo Mágico de Sombrerete es una de las muchas maravillas que tiene el estado de Zacatecas, una garantía de historia, gastronomía y cultura. Sombrerete sobresale por sus valores históricos, naturales y culturales. No obstante, quizás su patrimonio arquitectónico se proyecte como lo más atractivo para los visitantes. Uno de los templos más antiguos en Sombrerete es la Capilla de la Candelaria, considerada como la primera construcción sacra en el pueblo, con su altar de piedra y un notable estilo colonial. Se edificó para honrar una figura de madera y estofado de la Virgen de la Candelaria elaborada en Sevilla, España; fue un obsequio del conquistador Juan de Tolosa en 1556, llevado a la Nueva España por el fraile Jerónimo de Mendoza.", tags : ["sombrerete"] },
	{ value : "Hacia el sur del estado de Zacatecas, en los valles que se extienden bajo la Sierra Madre Occidental, se encuentra el Pueblo Mágico de Teúl de González Ortega, una población que conserva sus edificios coloniales de los siglos XVIII y XIX pero cuyo origen es mucho más antiguo. Teúl fue un centro religioso para sus pobladores prehispánicos, muy probablemente caxcanes, que habitaron esta región antes de la conquista española. Su nombre tiene varios significados, pero destaca el de 'Dios' o 'Morada de los Dioses'. En el cerro próximo al poblado se localiza uno de los asentamientos prehispánicos más importantes del noroeste de México; algunas evidencias indican que esta área fue habitada durante 1800 años. El nombre actual de Teúl de González Ortega es un reconocimiento a quien fuera gobernador de Zacatecas en el siglo XIX, Jesús González Ortega, quien de niño vivió en El Teúl y posteriormente regresó a trabajar, a vivir y a casarse en la tierra que lo vio nacer. Desde la distancia, sobresale la Parroquia de San Juan Bautista del Teúl, pero en el centro histórico del pueblo se encuentran otros tantos inmuebles de gran valor arquitectónico como el Santuario de Nuestra Señora de Guadalupe, la Capilla del Rosario, el Curato y Los Portales. Otras construcciones de interés turístico son el Acueducto, la Presidencia Municipal y sus grandes casas adornadas con dinteles de cantera.", tags : ["teul de gonzalez ortega"] }
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
var AMZN_APP_ID = "amzn1.ask.skill";

function getWelcomeResponse(callback) {
    var sessionAttributes = {},
        speechOutput = "Puedes pedirme información sobre los pueblos magicos que hay en México, por ejemplo 'Numero de pueblos mágicos en el país'. ó cuantos pueblos mágicos hay en Puebla"
        +"Puedes especificar el pueblo mágico o la ciudad para información más precisa, solo di 'información de un pueblo mágico' ó 'cuentame más sobre Tequila'"
        +"",
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
      speechOutput = "México tiene aproximadamente " + numQuestions + " pueblos mágicos";
    }

    repromptText = speechOutput;

    callback(sessionAttributes,
                 buildSpeechletResponse("Pueblos mágicos en México",speechOutput, repromptText, true));
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
                 buildSpeechletResponse("Pueblos mágicos en " + intent.slots.estados.value, speechOutput, repromptText, true));
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
                 buildSpeechletResponse("Pueblos mágicos en " + intent.slots.estados.value, speechOutput, repromptText, true));
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
                 buildSpeechletResponseWithoutCard( speechOutput, repromptText, true));
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
                 buildSpeechletResponse("Pueblo Mágico: "+ factTown.value, speechOutput, repromptText, true));
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
			+ "por ejemplo, 'cuáles son los pueblos mágicos en Jalisco'",
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
