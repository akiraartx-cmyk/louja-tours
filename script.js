/* ============================================
   Louja Tours — CINEMATIC INTERACTIONS
   ============================================ */

/* ============================================
   TOUR DATA CATALOG
   ============================================ */
const TOUR_DATA = {
  'tour-mkc-5d': {
    eyebrow: 'From Marrakech · 5 Days / 4 Nights',
    title: '5 Days Marrakech Desert Tour',
    subtitle: 'Tizi n\'Tichka · Skoura · Dades · Todra Gorge · Merzouga Sahara · Ait Ben Haddou',
    type: 'Private Desert Tour',
    h2: 'The Complete <em>Desert Circuit</em>',
    lead: 'Five days that carry you from Marrakech\'s ancient medina, across the High Atlas, through gorge and valley, to the silence of the Sahara at dusk — and back again.',
    body: 'This is the classic Moroccan desert journey, made private. A personal guide and 4×4 take you through clay pottery workshops, rose-scented valleys, the towering walls of Todra Gorge, and finally into the golden sea of Erg Chebbi for a camel trek to a luxury desert camp.',
    duration: '5 Days / 4 Nights',
    departure: 'Marrakech',
    end: 'Marrakech',
    img: 'images/tour-desert.jpg',
    days: [
      { icon: 'fa-mountain', title: 'Marrakech to Boumalne Dades', text: 'Cross the High Atlas via Tizi n\'Tichka (2,260m). Photo stop in Ouarzazate. Visit Skoura Oasis, Kasbah Amridil, and a clay pottery workshop. Explore the Rose Valley near Kelaat M\'Gouna. Overnight in a riad overlooking the Dades Valley.' },
      { icon: 'fa-campground', title: 'Dades to Merzouga Desert', text: 'Walk through the towering Todra Gorge. Stop in a Berber village for traditional Amazigh clothing and henna. Drive through Erfoud, gateway of fossils and dates. Camel trek into the Erg Chebbi dunes at sunset. Overnight in a luxury desert camp with dinner and music.' },
      { icon: 'fa-sun', title: 'Sahara Exploration Day', text: 'Sunrise over the dunes. Breakfast in the desert. Visit Hassi Labied Oasis and its traditional irrigation system. Khamlia Village for Gnawa spiritual music. Rissani souk and ancient ksour. Free afternoon at the hotel with time by the pool.' },
      { icon: 'fa-route', title: 'Merzouga to Ouarzazate', text: 'Scenic drive through Alnif and N\'Kob — landscapes resembling an African safari. Passage through the Draa Valley, lined with palm groves and kasbahs. Photo stop at Ait Saouen village. Overnight in Ouarzazate.' },
      { icon: 'fa-flag-checkered', title: 'Ouarzazate to Marrakech', text: 'Visit the UNESCO World Heritage Kasbah of Ait Ben Haddou — filming site of Gladiator and Game of Thrones. Explore mud-brick alleys and panoramic viewpoints. Return crossing of the High Atlas. Arrival in Marrakech late afternoon.' }
    ]
  },
  'tour-mkc-4d': {
    eyebrow: 'From Marrakech · 4 Days / 3 Nights',
    title: '4 Days Marrakech to Merzouga',
    subtitle: 'Ait Ben Haddou · Dades Gorge · Todra · Erfoud · Merzouga Sahara · Ouarzazate',
    type: 'Private Desert Tour',
    h2: 'Dunes and <em>Kasbahs</em>',
    lead: 'A compact desert circuit from Marrakech — UNESCO kasbahs, towering gorges, and a night under the Saharan stars at Erg Chebbi.',
    body: 'Four days from the Red City to the edge of the Sahara and back. You\'ll cross the High Atlas, visit the legendary Ait Ben Haddou, walk the floor of the Dades Gorge, and ride a camel into the dunes as the sun sets over Merzouga.',
    duration: '4 Days / 3 Nights',
    departure: 'Marrakech',
    end: 'Marrakech',
    img: 'images/tour-marrakech.jpg',
    days: [
      { icon: 'fa-mountain', title: 'Marrakech to Boumalne Dades', text: 'Scenic drive through Tizi n\'Tichka Pass. Visit the UNESCO Ait Ben Haddou Kasbah. Continue through the Valley of Roses and Dades Gorge. Overnight in a local hotel with dinner.' },
      { icon: 'fa-campground', title: 'Dades to Merzouga', text: 'Drive to the dramatic Todra Gorge — popular for walking and climbing. Continue through Erfoud, known for fossils. Arrive at the Erg Chebbi dunes; afternoon camel ride to a luxury desert camp. Traditional dinner under the stars.' },
      { icon: 'fa-sun', title: 'Merzouga to Ouarzazate', text: 'Magical sunrise over the dunes followed by breakfast at the camp. Visit Rissani for its lively market and ancient trading routes. Drive through the Draa Valley, lined with palm trees and Berber villages. Overnight in Ouarzazate.' },
      { icon: 'fa-flag-checkered', title: 'Ouarzazate to Marrakech', text: 'Visit Taourirt Kasbah, one of Morocco\'s best-preserved fortresses. Return drive to Marrakech through scenic mountain landscapes and Berber villages. Arrival by late afternoon.' }
    ]
  },
  'tour-mkc-10d': {
    eyebrow: 'From Marrakech · 10 Days / 9 Nights',
    title: '10 Days Morocco Exploration',
    subtitle: 'Casablanca · Rabat · Chefchaouen · Fes · Sahara · Marrakech',
    type: 'Private Cultural & Desert Tour',
    h2: 'All of <em>Morocco</em>',
    lead: 'Ten days that trace the full arc of Morocco — Atlantic coast, blue cities, imperial medinas, cedar forests, and the vast silence of the Sahara.',
    body: 'The most complete Morocco experience in our catalog. Beginning and ending in Marrakech, this grand circuit takes you through the Hassan II Mosque, the blue lanes of Chefchaouen, the ancient Roman ruins of Volubilis, a full guided day in Fes, and a night in the Erg Chebbi dunes.',
    duration: '10 Days / 9 Nights',
    departure: 'Marrakech',
    end: 'Marrakech',
    img: 'images/tour-chefchaouen-bg.jpg',
    days: [
      { icon: 'fa-plane-arrival', title: 'Arrival in Marrakech', text: 'Airport transfer to hotel/riad. Free time exploring Jemaa el-Fnaa square and the souks.' },
      { icon: 'fa-mosque', title: 'Full Day in Marrakech', text: 'Private guided tour: Koutoubia Mosque, souks, Ali Ben Youssef Koranic School, Saadian Tombs, Bahia Palace, and Majorelle Gardens. Evening at Jemaa el-Fnaa.' },
      { icon: 'fa-city', title: 'Marrakech to Casablanca to Rabat', text: 'Drive to Casablanca — stop at the Hassan II Mosque. Continue to Rabat: Mechouar, Mohammed V Mausoleum, Hassan Tower, and Oudaya Kasbah. Overnight in Rabat.' },
      { icon: 'fa-droplet', title: 'Rabat to Chefchaouen', text: 'Drive through the lush Rif Mountains. Arrive in Chefchaouen — explore its blue-washed lanes, souks, and local crafts. Overnight in the Blue City.' },
      { icon: 'fa-landmark', title: 'Chefchaouen to Fes via Volubilis & Meknes', text: 'Visit the UNESCO Roman ruins of Volubilis. Continue to Meknes: Medersa Bou Inania and Bab Mansour gateway. Arrive in Fes for free medina exploration.' },
      { icon: 'fa-university', title: 'Full Day in Fes', text: 'Guided tour of the ancient Fes medina: Attarine and Bou Anania Madrasas, Nejjarine Fountain, Moulay Idriss Mausoleum, Karaouine Mosque, Merenid Tombs for panoramic views.' },
      { icon: 'fa-campground', title: 'Fes to Merzouga via Ifrane & Azrou', text: 'Stop in Ifrane, the Switzerland of Morocco. Visit Azrou cedar forest and Barbary macaques. Lunch in Midelt. Arrive in Merzouga; camel trek to watch sunset over Erg Chebbi. Traditional Saharan music performance; overnight in desert camp.' },
      { icon: 'fa-route', title: 'Sahara to Boumalne Dades', text: 'Sunrise over the dunes. Drive via Erfoud and Tinejdad. Explore the Todra Gorges. Drive to Boumalne du Dades with a panoramic stop. Overnight in a traditional hotel.' },
      { icon: 'fa-flag-checkered', title: 'Boumalne to Marrakech', text: 'Stop at the Rose Valley, Skoura palm grove oasis, Ouarzazate film studios, and the UNESCO Kasbah of Ait Ben Haddou. Cross the Tizi N\'Tichka pass back to Marrakech. Overnight in Marrakech.' },
      { icon: 'fa-plane-departure', title: 'Departure from Marrakech', text: 'Transfer to Marrakech airport for departure flight.' }
    ]
  },
  'tour-mkc-7d': {
    eyebrow: 'From Marrakech · 7 Days / 6 Nights',
    title: '7 Days Heritage Tour to Casablanca',
    subtitle: 'Ait Benhaddou · Ouarzazate · Todra · Merzouga Sahara · Fes · Chefchaouen · Casablanca',
    type: 'Private Heritage & Desert Tour',
    h2: 'Heritage and <em>Desert</em>',
    lead: 'Seven days from Marrakech to Casablanca — UNESCO kasbahs, the Sahara, ancient Fes, and the Blue City of Chefchaouen.',
    body: 'A point-to-point journey that covers the greatest hits of Morocco\'s south, north, and coast. You end at the Hassan II Mosque in Casablanca — one of the most awe-inspiring buildings on earth.',
    duration: '7 Days / 6 Nights',
    departure: 'Marrakech',
    end: 'Casablanca',
    img: 'images/tour-atlas.jpg',
    days: [
      { icon: 'fa-plane-arrival', title: 'Arrival in Marrakech', text: 'Airport pick-up and transfer. Guided sightseeing: Koutoubia Mosque, Bahia Palace, Majorelle Garden, Old Medina, souk bazaars, and Jemaa el-Fnaa square.' },
      { icon: 'fa-mountain', title: 'Marrakech to Boumalne Dades', text: 'Drive across the High Atlas via Tizi N\'Tichka (2,260m). Visit the UNESCO Ait Benhaddou Kasbah. Continue to Ouarzazate (Hollywood of Africa). Arrive in the Dades Valley.' },
      { icon: 'fa-campground', title: 'Dades to Merzouga', text: 'Walk through Todra Gorge canyon and oasis. Continue south through Erfoud. Camel trek to the desert camp. Sandboarding and sunset. Traditional dinner with local music. Overnight in the Sahara.' },
      { icon: 'fa-route', title: 'Merzouga to Fes', text: 'Sunrise over Erg Chebbi. Return by camel or 4×4. Drive through the Ziz Valley. Lunch in Midelt or Zaida. Stop in Azrou and cedar forest. Continue through Ifrane to Fes. Overnight in Fes.' },
      { icon: 'fa-university', title: 'Full Day in Fes', text: 'Guided tour: Al Qarawiyyin University, Bou Inania college, the Jewish Quarter (Mellah), Andalusian neighborhoods. Visit artisan workshops, souks, and the tanneries. Traditional lunch. Panoramic viewpoint over the medina.' },
      { icon: 'fa-droplet', title: 'Fes to Chefchaouen', text: 'Visit the Roman ruins of Volubilis. Drive through the Rif Mountains to Chefchaouen. Evening stroll through the blue-washed medina and markets. Overnight in the Blue City.' },
      { icon: 'fa-flag-checkered', title: 'Chefchaouen to Casablanca', text: 'Early morning photo walk through Chefchaouen\'s quiet streets. Drive to Casablanca. Visit the Hassan II Mosque, including its 210-meter minaret and interior craftsmanship. Drop-off at accommodation or airport.' }
    ]
  },
  'tour-mkc-6d': {
    eyebrow: 'From Marrakech · 6 Days / 5 Nights',
    title: '6 Days Marrakech to Casablanca',
    subtitle: 'Ait Ben Haddou · Skoura · Dades · Todra · Merzouga · Fes · Chefchaouen · Casablanca',
    type: 'Private Cultural & Desert Tour',
    h2: 'Desert, Medinas and <em>the Blue City</em>',
    lead: 'Six days weaving through Morocco\'s most iconic landscapes — from UNESCO kasbahs and rose valleys to the Sahara dunes and Chefchaouen\'s indigo alleyways.',
    body: 'A point-to-point journey from Marrakech to Casablanca touching the desert, a full guided day in Fes, and an evening in the Blue City of Chefchaouen.',
    duration: '6 Days / 5 Nights',
    departure: 'Marrakech',
    end: 'Casablanca',
    img: 'images/tour-desert.jpg',
    days: [
      { icon: 'fa-mountain', title: 'Marrakech to Boumalne Dades', text: 'Morning departure via Tizi N\'Tichka. Visit Ait Ben Haddou and the Atlas Film Studios. Stop at Skoura oasis and Kasbah Amridil. Drive through the Valley of the Roses to Boumalne Dades.' },
      { icon: 'fa-campground', title: 'Dades to Merzouga', text: 'Drive the Road of a Thousand Kasbahs to Tinghir. Walk the Todgha Gorges. Lunch at a local cafe. Stop in Rissani. Arrive in Merzouga; camel ride across Erg Chebbi at sunset. Dinner under the stars; overnight in a desert camp.' },
      { icon: 'fa-route', title: 'Merzouga to Fes', text: 'Early breakfast at camp. Long drive through Ziz Valley and Errachidia. Lunch in Midelt. Cross the Middle Atlas through cedar forests, Ifrane, and Imouzzer. Arrive in Fes; dinner and overnight in a riad in the Fes medina.' },
      { icon: 'fa-university', title: 'Full Day in Fes', text: 'Guided tour from the Royal Palace esplanade. Visit the 16th-century Borj Sud for panoramic views. Explore the UNESCO Fes medina: madrasas, bazaars, and shrines. Visit Nejjarine Square and Dar Batha Museum.' },
      { icon: 'fa-droplet', title: 'Fes to Chefchaouen', text: 'Drive across the Saiss Plain to the Roman ruins of Volubilis. Continue through the Rif Mountains to Chefchaouen. Evening arrival; dinner and overnight in a traditional riad.' },
      { icon: 'fa-flag-checkered', title: 'Chefchaouen to Casablanca', text: 'Morning in Chefchaouen\'s blue streets and artisan shops. Visit Plaza Uta El Hammam and the Kasbah. Leisurely lunch in the medina. Afternoon drive to Casablanca — end of tour.' }
    ]
  },
  'tour-mkc-5dfes': {
    eyebrow: 'From Marrakech · 5 Days / 4 Nights',
    title: '5 Days Marrakech to Fes',
    subtitle: 'Telouet · Ait Ben Haddou · Rose Valley · Todra · Merzouga · Khamlia · Ifrane · Fes',
    type: 'Private Desert Tour',
    h2: 'Desert, Gorges and <em>Cedar Forests</em>',
    lead: 'A rich five-day journey from Marrakech to Fes — through UNESCO kasbahs, rose valleys, the Sahara, Gnaoua music, and the macaque-dotted cedar forests of Ifrane.',
    body: 'This Marrakech-to-Fes route takes you on a longer desert arc: the Kasbah of Telouet, Atlas film studios, the Rose Festival valley, an ancient kohl mine, a nomad tent, and finally the "Switzerland of Morocco" before arriving in Fes.',
    duration: '5 Days / 4 Nights',
    departure: 'Marrakech',
    end: 'Fes',
    img: 'images/tour-fes.jpg',
    days: [
      { icon: 'fa-mountain', title: 'Marrakech to Ouarzazate', text: 'Drive through the High Atlas and Tizi-N-Tichka Pass. Visit the Kasbah of Telouet, then the UNESCO Ait Ben Haddou. Arrive in Ouarzazate — the Gate of the Desert. Dinner and overnight.' },
      { icon: 'fa-route', title: 'Ouarzazate to Boumalne Dades', text: 'Visit Atlas Film Studios and Taourirt Kasbah. Stop at Amridil Kasbah in Skoura palm groves. Pass through Kalaa Magouna (Rose Festival home) and Boumalne Dades with its monkey-fingers rock formation.' },
      { icon: 'fa-campground', title: 'Dades to Merzouga', text: 'Visit Todra Gorges. Drive through Touroug and Tinjdad. Camel trek into the desert at sunset. Berber drum music and dance around the campfire. Dinner and overnight in camp.' },
      { icon: 'fa-sun', title: 'Exploring the Merzouga Region', text: 'Sunrise over the dunes. Off-road visit to an ancient kohl mine. Visit to a nomad tent for Berber tea. Stop in Khamlia for Gnaoua music. Walk through a palm grove and visit the Flamingo Lake of Merzouga.' },
      { icon: 'fa-flag-checkered', title: 'Merzouga to Fes', text: 'Sunrise viewing, then return by camel. Stop in Rissani souk. Fossil marble workshop in Erfoud. Panoramic stop over Ziz Valley. Lunch in Midelt. Cedar forests and Barbary macaques near Ifrane. Drop-off in Fes.' }
    ]
  },
  'tour-mkc-4dlux': {
    eyebrow: 'From Marrakech · 4 Days / 3 Nights',
    title: '4 Days Luxury Tour to Fes',
    subtitle: 'Ait Benhaddou · Todra · Merzouga · Khamlia · Mefis · Tafilalet Palm Grove · Fes',
    type: 'Private Luxury Desert Tour',
    h2: 'Luxury in the <em>Desert</em>',
    lead: 'The most immersive four-day desert experience in our catalog — including a Merzouga exploration day, the Paris-Dakar dune route, and Morocco\'s largest palm grove.',
    body: 'This luxury circuit takes an extra day to fully explore the Merzouga region: the Big Dune, Khamlia village Gnawa performances, the Mefis abandoned mines, and a chance encounter with a nomadic Berber family.',
    duration: '4 Days / 3 Nights',
    departure: 'Marrakech',
    end: 'Fes',
    img: 'images/tour-marrakech.jpg',
    days: [
      { icon: 'fa-mountain', title: 'Marrakech to Boumalne Dades', text: 'Pickup and cross the High Atlas via Tizi N\'tichka. Visit UNESCO Kasbah Ait Benhaddou with lunch. Afternoon at the Atlas Film Studios and Taourirt Kasbah. Continue to Kalaa M\'gouna and Boumalne Dades.' },
      { icon: 'fa-campground', title: 'Dades to Merzouga', text: 'Panoramic stop over the Dades Valley. Exploration of Todra Gorges on foot. Lunch in Tinjdad; continue to Erfoud fossil workshops. Arrive at Erg Chebbi; 1.5-hour camel trek at sunset. Overnight in a traditional nomad tent with Berber drum entertainment.' },
      { icon: 'fa-sun', title: 'Merzouga Exploration Day', text: 'Sunrise viewing from a dune. Camel ride back to Merzouga. Exploration of Erg Chebbi along the old Paris-Dakar rally route. Panoramic viewpoint. Visit Khamlia Village for Gnawa music. Stop at Mefis colonial-era mining village. Possible encounter with a nomadic family.' },
      { icon: 'fa-flag-checkered', title: 'Merzouga to Fes', text: 'Drive north through the Tafilalet Palm Grove — Morocco\'s largest. Panoramic stop over the Ziz Valley. Lunch in Midelt. Drive through the Cedar Forest of Azrou spotting Barbary Apes. Stop in Ifrane. Arrival in Fes around 6 PM.' }
    ]
  },
  'tour-mkc-3dfes': {
    eyebrow: 'From Marrakech · 3 Days / 2 Nights',
    title: '3 Days Marrakech to Fes',
    subtitle: 'Ait Ben Haddou · Rose Valley · Todra · Merzouga Sahara · Rissani · Ifrane · Fes',
    type: 'Private Desert Tour',
    h2: 'A Desert <em>Arc</em>',
    lead: 'Three days from the Red City to the ancient medina of Fes — via the Sahara\'s Erg Chebbi dunes, rose-scented valleys, and the cedar forests of the Middle Atlas.',
    body: 'A fast but full circuit: cross the High Atlas, spend a night in the desert, and arrive in Fes through Ifrane and the macaque forests.',
    duration: '3 Days / 2 Nights',
    departure: 'Marrakech',
    end: 'Fes',
    img: 'images/tour-atlas.jpg',
    days: [
      { icon: 'fa-mountain', title: 'Marrakech to Boumalne Dades', text: 'Early pickup. Cross the High Atlas via Tizi-N-Tichka. Visit Ait Ben Haddou. Continue through Ouarzazate, Rose Valley, and Skoura palm grove. Overnight in Boumalne Dades.' },
      { icon: 'fa-campground', title: 'Dades to Merzouga', text: 'Viewpoint over Dades Gorges. Explore Todra Gorges. Drive through Touroug and Tinjdad. Camel trek into the dunes; sunset from a high dune. Overnight in luxury desert camp with Berber music and dancing.' },
      { icon: 'fa-flag-checkered', title: 'Merzouga to Fes', text: 'Sunrise viewing; return by camel. Visit Rissani souk. Stop at a fossilized marble workshop in Erfoud. Panoramic stop over Ziz Valley. Lunch in Midelt. Cedar forests near Ifrane and Barbary macaques. Arrival in Fes.' }
    ]
  },
  'tour-mkc-3drt': {
    eyebrow: 'From Marrakech · 3 Days / 2 Nights',
    title: '3 Days Sahara Round-Trip from Marrakech',
    subtitle: 'Ait Ben Haddou · Ouarzazate · Todra · Merzouga Sahara · Draa Valley · Marrakech',
    type: 'Private Desert Tour',
    h2: 'Sahara and <em>Back</em>',
    lead: 'Three days from Marrakech, into the Sahara, and back — via a different route through the Draa Valley and the Anti-Atlas Mountains.',
    body: 'This compact round-trip circuit is designed for those who want to experience the Sahara without sacrificing too much time. The return via the Draa River Valley adds a landscape entirely different from the way down.',
    duration: '3 Days / 2 Nights',
    departure: 'Marrakech',
    end: 'Marrakech',
    img: 'images/tour-desert.jpg',
    days: [
      { icon: 'fa-mountain', title: 'Marrakech to Boumalne Dades', text: '8 AM pickup. Drive through the High Atlas, stop at Ait Ben Haddou Kasbah. Continue to Ouarzazate — visit the Taourirt Kasbah and Rose Valley. Overnight in the Dades Valley.' },
      { icon: 'fa-campground', title: 'Dades Valley to Merzouga', text: 'Scenic views of the Dades Valley and its kasbahs. Drive to Todra Gorges — explore adobe villages and rock formations. Continue to Merzouga; camel ride to the nomad camp with sunset views. Dinner and overnight under the stars.' },
      { icon: 'fa-flag-checkered', title: 'Merzouga to Marrakech', text: 'Sunrise viewing from a dune near camp. Camel ride back and breakfast. Drive through the pre-desert stopping at the Draa River Valley. Cross the Anti-Atlas Mountains back to Marrakech. Arrival in the evening.' }
    ]
  },
  'tour-mkc-2d': {
    eyebrow: 'From Marrakech · 2 Days / 1 Night',
    title: '2 Days Desert Tour to Zagora',
    subtitle: 'Tizi N\'tichka · Ait Ben Haddou · Agdez · Draa Valley · Zagora Sahara',
    type: 'Private Short Desert Tour',
    h2: 'Zagora in <em>Two Days</em>',
    lead: 'The perfect first taste of the Moroccan desert — a two-day escape from Marrakech to Zagora, through the High Atlas and the date-palm Draa Valley.',
    body: 'Zagora is the gateway to the Moroccan Sahara accessible in a single day from Marrakech. You\'ll cross the iconic Tizi N\'tichka Pass, visit Ait Ben Haddou, and arrive in Zagora for a sunset camel trek and an overnight in a Berber desert camp.',
    duration: '2 Days / 1 Night',
    departure: 'Marrakech',
    end: 'Marrakech',
    img: 'images/tour-marrakech.jpg',
    days: [
      { icon: 'fa-campground', title: 'Marrakech to Zagora', text: 'Early departure (~7:30 AM) through Tizi N\'tichka Pass (2,260m) and Berber villages. Guided visit to UNESCO Kasbah Ait Ben Haddou. Leisurely lunch. Drive through the Anti-Atlas, Agdez, and the Draa Valley. Late afternoon camel trek and sunset viewing over Zagora desert. Moroccan dinner with drums in the desert camp.' },
      { icon: 'fa-flag-checkered', title: 'Zagora to Marrakech', text: 'Early morning camel ride to watch the sunrise. Traditional Moroccan breakfast. Drive to Ouarzazate; visit to the Taourirte Kasbah. Leisurely lunch. Return journey to Marrakech via Tizi Ntichka Pass. Late afternoon drop-off.' }
    ]
  },

  /* ===== CASABLANCA ===== */
  'tour-cas-13d': {
    eyebrow: 'From Casablanca · 13 Days / 12 Nights',
    title: '13 Days — Totally Morocco',
    subtitle: 'Rabat · Assilah · Tangier · Chefchaouen · Fes · Sahara · Marrakech · Essaouira',
    type: 'Private Grand Cultural & Desert Tour',
    h2: 'The Complete <em>Morocco</em>',
    lead: 'The ultimate Morocco journey — from the Atlantic coast to the Sahara, from Roman ruins to blue-washed medinas, and from the Red City to the wind-swept port of Essaouira.',
    body: 'Thirteen days that circle the entire country. Hassan II Mosque, the coastal town of Assilah, Tangier\'s Strait of Gibraltar, Chefchaouen, Volubilis, a full day in Fes, the Sahara at Merzouga, Marrakech, and finally Essaouira before returning to Casablanca.',
    duration: '13 Days / 12 Nights',
    departure: 'Casablanca',
    end: 'Casablanca',
    img: 'images/tour-casablanca.jpg',
    days: [
      { icon: 'fa-plane-arrival', title: 'Arrival in Casablanca', text: 'Pickup from airport or port. Visit to the Hassan II Mosque on the Atlantic coast. Afternoon exploration of the Corniche.' },
      { icon: 'fa-route', title: 'Casablanca to Assilah via Rabat', text: 'Coastal drive to Rabat: Hassan Tower, Mausoleum of Mohammed V, and Kasbah of the Udayas. Continue north to the coastal town of Assilah.' },
      { icon: 'fa-ship', title: 'Assilah to Chefchaouen via Tangier', text: 'Drive to Tangier: Cave of Hercules and Cape Spartel. Afternoon drive through Tetouan and the Rif Mountains to Chefchaouen.' },
      { icon: 'fa-droplet', title: 'Full Day in Chefchaouen', text: 'Morning stroll through the blue-and-white medina. Afternoon hike to the Spanish Mosque viewpoint overlooking the Blue City.' },
      { icon: 'fa-landmark', title: 'Chefchaouen to Fes via Meknes', text: 'Visit UNESCO Volubilis. Continue to Meknes: Bab El-Mansour, Sahrij Souani, Royal Stables, Moulay Ismail Mausoleum. Arrive Fes.' },
      { icon: 'fa-university', title: 'Full Day in Fes', text: 'Royal Palace gate, UNESCO medina through Bab Boujloud, Medersa Bou Inania, Nejjarine Fountain, Fes Tanneries, Kairaouine Mosque, Mellah. Afternoon fortress panorama.' },
      { icon: 'fa-campground', title: 'Fes to Merzouga via Ifrane', text: 'Drive south through Ifrane. Visit cedar forest and Barbary macaques. Lunch in Midelt. Drive through Ziz Valley. Camel trek at sunset. Berber music and dancing at camp. Overnight in the desert.' },
      { icon: 'fa-sun', title: 'Exploring the Merzouga Region', text: 'Sunrise over the dunes. Visit a nomad tent for Berber tea. Visit Khamlia village for Gnaoua music. Walk through a palm grove. Visit the Flamingo Lake of Merzouga.' },
      { icon: 'fa-route', title: 'Merzouga to Dades Valley', text: 'Visit Rissani and its souk. Fossil marble workshop in Erfoud. Drive through Todra Gorges. Continue to Dades Valley via Boumalne Dades.' },
      { icon: 'fa-mountain', title: 'Dades to Marrakech via Ouarzazate', text: 'Visit the Rose Valley. Drive through Skoura palm groves to Ouarzazate film studios. Visit UNESCO Ait Ben Haddou. Cross the Tizi-N-Tichka Pass to Marrakech. Overnight in a riad.' },
      { icon: 'fa-mosque', title: 'Full Day in Marrakech', text: 'Guided tour: Bahia Palace, Saadian Tombs, Ben Youssef Mosque, souks, Koutoubia Mosque, Majorelle Garden. Evening at Jemaa El-Fna.' },
      { icon: 'fa-water', title: 'Marrakech to Essaouira', text: 'Scenic drive west, stops to see argan trees and goats. Explore Essaouira: fishing port, ramparts with cannons, old medina.' },
      { icon: 'fa-flag-checkered', title: 'Essaouira to Casablanca', text: 'Coastal drive back to Casablanca with scenic photo stops — end of tour.' }
    ]
  },
  'tour-cas-10d': {
    eyebrow: 'From Casablanca · 10 Days / 9 Nights',
    title: '10 Days Morocco Desert Tour',
    subtitle: 'Rabat · Chefchaouen · Fes · Sahara · Todra · Ait Ben Haddou · Marrakech',
    type: 'Private Cultural & Desert Tour',
    h2: 'From the Atlantic to the <em>Sahara</em>',
    lead: 'Ten days from Casablanca to Marrakech — coast, blue cities, imperial medinas, and the Sahara, with two free days in Marrakech to explore at your own pace.',
    body: 'Starting at the Hassan II Mosque, this tour sweeps north through Rabat, Chefchaouen, and the Roman ruins of Volubilis before diving south through Fes, the Middle Atlas, and into the Sahara.',
    duration: '10 Days / 9 Nights',
    departure: 'Casablanca',
    end: 'Marrakech',
    img: 'images/tour-chefchaouen-bg.jpg',
    days: [
      { icon: 'fa-plane-arrival', title: 'Casablanca to Rabat', text: 'Airport pickup, visit to the Hassan II Mosque. Drive to Rabat; overnight.' },
      { icon: 'fa-droplet', title: 'Rabat to Chefchaouen', text: 'City tour of Rabat: Royal Palace, Mohammed V Mausoleum. Self-guided walk through Oudayas Kasbah. Drive to Chefchaouen — medina, main square, Jewish Quarter.' },
      { icon: 'fa-landmark', title: 'Chefchaouen to Fes via Meknes', text: 'Visit Volubilis Roman ruins and Bab el Mansour in Meknes. Arrive in Fes.' },
      { icon: 'fa-university', title: 'Full Day in Fes', text: 'Tour of the Andalusian neighborhood, Seffarine district, Al-Karaouine University, Nejjarine Museum, Attarine Medersa, Bab Boujouloud, Jewish Quarter, and artisanal complex.' },
      { icon: 'fa-campground', title: 'Fes to Merzouga', text: 'Drive via Ifrane. Cedar forest and Barbary macaques. Continue to Erfoud through Ziz Valley. Camel ride at sunset over Erg Chebbi. Luxury desert camp with Berber party and drumming.' },
      { icon: 'fa-route', title: 'Merzouga to Dades Valley', text: 'Sunrise, breakfast, return by camel or 4x4. Drive to Rissani souk. Continue through Berber villages to Todra Gorge. Overnight in the Dades Valley.' },
      { icon: 'fa-mountain', title: 'Dades Valley to Marrakech', text: 'Drive via the Rose Valley and Skoura Oasis. Visit the UNESCO Kasbah of Ait Ben Haddou. Cross the Tichka Pass. Arrive and overnight in Marrakech.' },
      { icon: 'fa-mosque', title: 'Full Day in Marrakech', text: 'Guided tour: Koutoubia Mosque, Bahia Palace, Saadian Tombs, Dar Si Said Museum, souks, Djemaa el-Fna square.' },
      { icon: 'fa-sun', title: 'Free Day in Marrakech', text: 'Full day at leisure — optional activities: cooking classes, hammam and spa, or shopping. Overnight in Marrakech.' },
      { icon: 'fa-flag-checkered', title: 'Departure', text: 'Free time, then transfer to Marrakech airport.' }
    ]
  },
  'tour-cas-9d': {
    eyebrow: 'From Casablanca · 9 Days / 8 Nights',
    title: '9 Days Morocco Round-Trip',
    subtitle: 'Marrakech · Ait Ben Haddou · Sahara · Fes · Chefchaouen · Volubilis · Rabat · Casablanca',
    type: 'Private Cultural & Desert Tour',
    h2: 'The Full <em>Circle</em>',
    lead: 'Nine days that loop all of Morocco — beginning and ending in Casablanca, touching the Sahara, Marrakech, and the blue city of Chefchaouen.',
    body: 'This grand loop departs from Casablanca, sweeps south to Marrakech and the Sahara, then arcs north through Fes, Chefchaouen, Volubilis, and Rabat, before returning to Casablanca.',
    duration: '9 Days / 8 Nights',
    departure: 'Casablanca',
    end: 'Casablanca',
    img: 'images/tour-desert.jpg',
    days: [
      { icon: 'fa-plane-arrival', title: 'Casablanca to Marrakech', text: 'Airport pickup and transfer to Marrakech. Evening at Jemaa el-Fna square.' },
      { icon: 'fa-mosque', title: 'Full Day in Marrakech', text: 'Guided tour: Bahia Palace, Koutoubia Mosque, Medina souks. Saadian Tombs. Majorelle Garden and Yves Saint Laurent Museum.' },
      { icon: 'fa-mountain', title: 'Marrakech to Boumalne Dades', text: 'Drive through the High Atlas and Berber villages. Visit UNESCO Ait Ben Haddou. Continue via the road of a thousand kasbahs and oases. Visit the Rose Valley. Overnight in Boumalne Dades.' },
      { icon: 'fa-campground', title: 'Dades Valley to Merzouga', text: 'Explore Todra Gorges and Todra Valley. Drive through Tinjdad and Erfoud passing the Tafilalt Oasis. Two-hour camel ride into Erg Chebbi dunes with sunset stop; optional sandboarding. Desert glamping with Berber music.' },
      { icon: 'fa-route', title: 'Merzouga to Fes', text: 'Sunrise over the dunes. Drive via Errachidia, stop at Ziz Valley viewpoint. Lunch in Midelt. Visit cedar forest and Barbary macaques. Brief stop in Ifrane. Overnight in Fes.' },
      { icon: 'fa-university', title: 'Full Day in Fes', text: 'Visit food, leather, clothing, and craft markets. Najjarine Museum, tanneries, Madrasa Bouanania, Al Quaraouiyin University, Mausoleum of Moulay Idriss.' },
      { icon: 'fa-droplet', title: 'Fes to Chefchaouen', text: 'Drive through the Rif Mountains, stopping at the Roman ruins of Volubilis. Free time to explore Chefchaouen\'s medina, old town market, main square, and Ras Elma River.' },
      { icon: 'fa-route', title: 'Chefchaouen to Casablanca via Rabat', text: 'Morning exploration of Chefchaouen. Drive to Rabat: Mausoleum of King Mohamed V, Hassan Tower, Oudayas Kasbah. Continue to Casablanca; visit to the Hassan II Mosque.' },
      { icon: 'fa-flag-checkered', title: 'Departure from Casablanca', text: 'Transfer from hotel to airport.' }
    ]
  },
  'tour-cas-7d': {
    eyebrow: 'From Casablanca · 7 Days / 6 Nights',
    title: '7 Days Imperial Cities via Sahara',
    subtitle: 'Rabat · Chefchaouen · Meknes · Fes · Sahara · Todra · Ait Ben Haddou · Marrakech',
    type: 'Private Imperial Cities & Desert Tour',
    h2: 'Imperial Cities and the <em>Desert</em>',
    lead: 'Seven days connecting Morocco\'s four Imperial Cities — Casablanca, Fes, Meknes, and Marrakech — through Chefchaouen and the Sahara.',
    body: 'A perfectly paced journey from Casablanca to Marrakech, touching the greatest highlights of Morocco\'s history, culture, and landscape.',
    duration: '7 Days / 6 Nights',
    departure: 'Casablanca',
    end: 'Marrakech',
    img: 'images/tour-fes.jpg',
    days: [
      { icon: 'fa-plane-arrival', title: 'Full Day in Casablanca', text: 'Pickup from airport. Visit to the Hassan II Mosque. Explore the Corniche.' },
      { icon: 'fa-route', title: 'Casablanca to Chefchaouen via Rabat', text: 'Drive along the coast to Rabat: Hassan Tower, Mausoleum of Mohammed V, Kasbah of the Udayas. Drive north through Ouazzane to Chefchaouen.' },
      { icon: 'fa-landmark', title: 'Chefchaouen to Fes via Meknes', text: 'Free time in Chefchaouen. Visit UNESCO Volubilis. Continue to Meknes: Bab Al-Mansour, Sahrij Souani, Royal Stables, Moulay Ismail Mausoleum. Arrive Fes.' },
      { icon: 'fa-university', title: 'Full Day in Fes', text: 'Royal Palace gate, UNESCO Fes Medina through Bab Boujloud, Medersa Bouanania, Nejjarine Fountain, Tanneries, Qarawiyyin Mosque, Mellah. Panoramic viewpoint.' },
      { icon: 'fa-campground', title: 'Fes to Merzouga', text: 'Drive south through Ifrane. Cedar forest and Barbary macaques. Lunch in Midelt. Drive through Tizi-n-Tilghmt pass and Ziz Valley. Camel trek at sunset. Dinner, Berber music, overnight in desert camp.' },
      { icon: 'fa-route', title: 'Merzouga to Dades Valley', text: 'Sunrise; return by camel. Visit Rissani souk. Fossil marble workshop in Erfoud. Drive through palm groves to Todra Gorges. Continue to Dades Valley.' },
      { icon: 'fa-flag-checkered', title: 'Dades Valley to Marrakech', text: 'Drive to Rose Valley (Kalaa Magouna). Through Skoura palm groves to Ouarzazate film studios. Visit UNESCO Ait Ben Haddou. Cross Tizi-N-Tichka to Marrakech.' }
    ]
  },
  'tour-cas-5d': {
    eyebrow: 'From Casablanca · 5 Days / 4 Nights',
    title: '5 Days Casablanca to Marrakech',
    subtitle: 'Volubilis · Meknes · Fes · Ifrane · Merzouga Sahara · Todra · Ait Ben Haddou · Marrakech',
    type: 'Private Cultural & Desert Tour',
    h2: 'Coast to Desert to <em>Mountains</em>',
    lead: 'Five efficient days from Casablanca to Marrakech — Roman ruins, Fes medina, the Sahara, and the Road of a Thousand Kasbahs.',
    body: 'A compact but complete circuit that covers Morocco\'s most essential experiences: UNESCO Volubilis, a night in Fes, a night in the Sahara, the Todra Gorge, and finally Ait Ben Haddou before arriving in Marrakech.',
    duration: '5 Days / 4 Nights',
    departure: 'Casablanca',
    end: 'Marrakech',
    img: 'images/tour-casablanca.jpg',
    days: [
      { icon: 'fa-plane-arrival', title: 'Explore Casablanca', text: 'Pickup from airport. Visit to the Hassan II Mosque. Explore the Corniche.' },
      { icon: 'fa-landmark', title: 'Casablanca to Fes via Meknes', text: 'Visit the Roman ruins of Volubilis. Continue to Meknes: Bab El-Mansour, Sahrij Souani, Royal Stables, Moulay Ismail Mausoleum. Arrive and overnight in Fes.' },
      { icon: 'fa-campground', title: 'Fes to Merzouga', text: 'Drive via Ifrane. Visit cedar forests and Barbary macaques. Lunch in Midelt. Continue through Ziz Valley. Camel ride into the desert at sunset. Dinner, Berber drumming, overnight in the desert camp.' },
      { icon: 'fa-route', title: 'Merzouga to Dades Valley', text: 'Sunrise viewing; return by camel. Visit Rissani\'s marketplace. Fossil marble workshop in Erfoud. Drive through palm groves to Todra Gorges. Lunch; continue through Boumalne Dades to the Dades Valley.' },
      { icon: 'fa-flag-checkered', title: 'Dades Valley to Marrakech', text: 'Drive to Kalaa M\'gouna and the Rose Valley. Through Skoura palm groves to Ouarzazate film studios. Visit the UNESCO Ait Ben Haddou. Cross the Tizi-N-Tichka Pass to Marrakech.' }
    ]
  },

  /* ===== FES ===== */
  'tour-fes-12d': {
    eyebrow: 'From Fes · 12 Days / 11 Nights',
    title: '12 Days Morocco Grand Tour',
    subtitle: 'Meknes · Volubilis · Chefchaouen · Tangier · Rabat · Casablanca · Marrakech · Sahara · Fes',
    type: 'Private Grand Cultural & Desert Tour',
    h2: 'Morocco <em>Complete</em>',
    lead: 'The grandest circuit in our catalog — departing and returning to Fes, this 12-day journey touches every corner of Morocco including a free day to discover Fes at your own pace.',
    body: 'From Fes, you loop through Meknes, Volubilis, Chefchaouen, Tangier, the Atlantic coast, Casablanca, Marrakech, Essaouira, and the Sahara desert before returning north through the Atlas Mountains.',
    duration: '12 Days / 11 Nights',
    departure: 'Fes',
    end: 'Fes',
    img: 'images/tour-fes.jpg',
    days: [
      { icon: 'fa-plane-arrival', title: 'Arrival in Fes', text: 'Airport pickup. Transfer to hotel/riad. Dinner and overnight.' },
      { icon: 'fa-university', title: 'Full Day in Fes', text: 'Visit the Royal Palace entrance, panoramic views from the southern tower, pottery cooperative, tanneries, Koranic school, Nejjarine fountain, Moulay Idriss mausoleum, and Karaouine Mosque University. Traditional Moroccan lunch in the medina.' },
      { icon: 'fa-landmark', title: 'Fes to Chefchaouen via Meknes & Volubilis', text: 'Guided tour of Meknes: Bab Mansour, Mausoleum of Moulay Ismail, Heri es Souani granary. Visit UNESCO Volubilis. Drive to Chefchaouen.' },
      { icon: 'fa-ship', title: 'Chefchaouen to Tangier', text: 'Morning walk through the blue medina and Kasbah ethnographic museum. Afternoon drive to Tangier — views of the Atlantic and Strait of Gibraltar; exploration of the historic medina.' },
      { icon: 'fa-route', title: 'Tangier to Rabat', text: 'Visit the Hassan Mosque tower and Mausoleum of Mohamed V. Exploration of the Oudaya Kasbah.' },
      { icon: 'fa-city', title: 'Rabat to Marrakech via Casablanca', text: 'Visit Hassan II Mosque. Drive through residential areas to Mohamed V Square, Habous quarter, and Notre Dame de Lourdes Cathedral. Drive to Marrakech.' },
      { icon: 'fa-mosque', title: 'Full Day in Marrakech', text: 'Guided tour: Bahia Palace, Saadian Tombs, Koranic School, Koutoubia Mosque, Souks, Majorelle Gardens. Evening at Jemaa El-Fna.' },
      { icon: 'fa-mountain', title: 'Marrakech to Boumalne Dades', text: 'Drive through the Atlas Mountains to Ouarzazate. Visit UNESCO Ait Benhaddou. Continue to the Valley of the Roses.' },
      { icon: 'fa-campground', title: 'Dades Gorges to Merzouga', text: 'Drive to Todra Gorges. Continue through Erfoud (fossil marble). Arrive at Merzouga dunes; camel ride to Berber camp. Optional sandboarding. Evening campfire with traditional drums.' },
      { icon: 'fa-route', title: 'Merzouga to Fes', text: 'Camel ride back. Drive through oases and Ziz Gorges, crossing Tizi Ntalghamt Pass. Lunch in Midelt. Continue through cedar forests and Berber villages. Visit Ifrane and Azrou handicraft center. Arrive in Fes.' },
      { icon: 'fa-sun', title: 'Free Day in Fes', text: 'Day at leisure with optional cooking lesson, trip to the Middle Atlas Mountains, or Hammam spa experience.' },
      { icon: 'fa-flag-checkered', title: 'Departure from Fes', text: 'Transfer to Fes airport for return flight.' }
    ]
  },
  'tour-fes-8d': {
    eyebrow: 'From Fes · 8 Days / 7 Nights',
    title: '8 Days Sahara Adventure from Fes',
    subtitle: 'Meknes · Rabat · Casablanca · El Jadida · Essaouira · Marrakech',
    type: 'Private Imperial Cities & Coastal Tour',
    h2: 'Cities, Coast and <em>Culture</em>',
    lead: 'Eight days from Fes to Marrakech — via the imperial city of Meknes, the Atlantic coast, the UNESCO port of El Jadida, the wind city of Essaouira, and a full day in Marrakech.',
    body: 'A coastal and imperial cities tour that provides a completely different perspective on Morocco — away from the desert and into the Atlantic-facing Morocco of fresh seafood, Moorish architecture, and ocean light.',
    duration: '8 Days / 7 Nights',
    departure: 'Fes',
    end: 'Marrakech',
    img: 'images/tour-casablanca.jpg',
    days: [
      { icon: 'fa-plane-arrival', title: 'Arrival in Fes', text: 'Airport pickup and transfer to riad. Overnight in Fes.' },
      { icon: 'fa-university', title: 'Exploring Fes', text: 'Explore the medina: Attarine and Bou Anania Medersas, Nejjarine fountain, Moulay Idriss Tomb, Karaouine Mosque. Visit Fes Jdid and the Merenid Tombs for panoramic views.' },
      { icon: 'fa-landmark', title: 'Fes to Rabat via Meknes', text: 'Tour the Meknes medina, Royal Stables, and Jewish Quarter. Continue to Rabat: Royal Palace, Mohammed V Mausoleum, Hassan Tower, Oudaya Kasbah.' },
      { icon: 'fa-city', title: 'Rabat to Casablanca', text: 'Explore Mohammed V Square, the Hassan II Mosque, the Habbous District, and the Anfa and Ain Diab neighborhoods.' },
      { icon: 'fa-water', title: 'Casablanca to Essaouira', text: 'Drive to the UNESCO town of El Jadida. Continue to Oualidia for its beaches and lagoon. Travel via Safi to Essaouira — explore the medina and fishing port.' },
      { icon: 'fa-route', title: 'Essaouira to Marrakech', text: 'Drive to Marrakech. Evening at Djemaa El Fna Square.' },
      { icon: 'fa-mosque', title: 'Full Day in Marrakech', text: 'Visit the Menara Gardens, Jardin Majorelle, Bahia Palace, Saadian Tombs, and Koutoubia Mosque. Evening traditional Moroccan dinner and cultural performance in a palm grove.' },
      { icon: 'fa-flag-checkered', title: 'Departure from Marrakech', text: 'Breakfast, then transfer to Marrakech airport.' }
    ]
  },
  'tour-fes-6d': {
    eyebrow: 'From Fes · 6 Days / 5 Nights',
    title: '6 Days Morocco Tour from Fes',
    subtitle: 'Ifrane · Azrou · Erfoud · Merzouga · Khamlia · Rissani · Todra · Ouarzazate · Telouet · Marrakech',
    type: 'Private Cultural & Desert Tour',
    h2: 'Fes to Marrakech via the <em>Desert</em>',
    lead: 'Six days from Fes to Marrakech — through the Middle Atlas, the Sahara, the Road of a Thousand Kasbahs, and the ancient Glaoui palace of Telouet.',
    body: 'A rich route south from Fes that includes a full day of Sahara exploration, Gnaoua music in Khamlia, Sijilmassa caravan market in Rissani, the world\'s highest narrow canyon at Todra, and the remote Kasbah of Telouet.',
    duration: '6 Days / 5 Nights',
    departure: 'Fes',
    end: 'Marrakech',
    img: 'images/tour-atlas.jpg',
    days: [
      { icon: 'fa-university', title: 'Full Day in Fes', text: 'Explore the medina: Al Karaouine Mosque and University, the Tanneries, Najjarine Fountain. Visit the Royal Palace gate and the Mellah. Visit a ceramics cooperative. Evening viewpoint over the medina.' },
      { icon: 'fa-mountain', title: 'Fes to Merzouga', text: 'Drive through the Middle Atlas, stopping in Ifrane. Visit the cedar forest near Azrou (Barbary monkeys). Drive through Berber villages, Midelt, and Errachidia. Continue to Erfoud and Merzouga on the edge of the Sahara.' },
      { icon: 'fa-sun', title: 'Night in Merzouga', text: 'Visit Khamlia village and remote off-beaten-path settlements. Visit with nomadic families. Visit an old mine near the Morocco-Algeria border. Local lunch including "Berber Pizza". Afternoon camel trek (~1.5 hrs). Dinner and traditional Berber music at the desert camp.' },
      { icon: 'fa-route', title: 'Merzouga to Ouarzazate', text: 'Drive to Rissani former Sijilmassa caravan route; explore its market. Continue to Tinghir and the Todra Gorges (300m high). Lunch; drive to the Dades Valley. Stop at the "City of Roses" cooperative. Drive along the Road of a Thousand Kasbahs to Ouarzazate. Visit Atlas Corporation Studios.' },
      { icon: 'fa-flag-checkered', title: 'Ouarzazate to Marrakech', text: 'Visit UNESCO Kasbah of Ait Ben Haddou. Visit the Kasbah of Telouet, ancient palace of the Glaoui dynasty. Cross the Tizi n\'Tichka Pass (2,260m) with panoramic stops. Arrive and overnight in a riad in Marrakech.' },
      { icon: 'fa-mosque', title: 'Full Day in Marrakech', text: 'Guided tour: Menara, Saadian Tombs, Bahia Palace, Koutoubia Mosque, Majorelle Gardens, souks. Exploration of Jemaa el-Fnaa. Free time to explore the city independently.' }
    ]
  },
  'tour-fes-4d': {
    eyebrow: 'From Fes · 4 Days / 3 Nights',
    title: '4 Days Fes to Marrakech',
    subtitle: 'Ifrane · Azrou · Merzouga · Khamlia · Mifis Mines · Rissani · Todra · Ait Benhaddou · Marrakech',
    type: 'Private Desert Tour',
    h2: 'Desert and <em>Kasbahs</em>',
    lead: 'Four days from Fes to Marrakech — through the Middle Atlas, a full desert day in Merzouga, the Todra Gorge, and the UNESCO Kasbah of Ait Benhaddou.',
    body: 'An immersive tour that includes a dedicated Merzouga exploration day: a 4×4 excursion of the Hassi Labied oasis, Khamlia village, Mifis mines, a nomadic Berber family visit, and optional sandboarding.',
    duration: '4 Days / 3 Nights',
    departure: 'Fes',
    end: 'Marrakech',
    img: 'images/tour-desert.jpg',
    days: [
      { icon: 'fa-mountain', title: 'Fes to Merzouga', text: '8:30 AM pickup. Drive through the Middle Atlas. Stop in Ifrane. Visit the cedar forest in Azrou (wild monkeys). Lunch break in Midelt. Continue south to Erfoud. Drive through the Ziz Valley to the Erg Chebbi dunes. Dinner and overnight at a hotel in Merzouga.' },
      { icon: 'fa-sun', title: 'Merzouga Night Camp', text: '4×4 excursion: Hassi Labied oasis and irrigation canals. Possible visit to the seasonal Srij lake. Khamlia village for Gnawa music. Mifis mines visit. Visit to a nomadic Berber family for mint tea. Lunch at a local restaurant. Camel trek (1–1.5 hours) to the Berber camp; sunset; optional sandboarding. Berber drumming overnight in a nomadic tent.' },
      { icon: 'fa-route', title: 'Merzouga to Dades Valley', text: 'Early sunrise viewing; return by camel or 4WD. Visit Rissani weekly market. Drive through Touroug, Tinjdad, Tinghir. Visit the Todra Gorge. Lunch; drive to Boumalne Dades and Dades Valley. Dinner and overnight.' },
      { icon: 'fa-flag-checkered', title: 'Dades Valley to Marrakech', text: 'Drive via Rose Valley (Kalaat M\'gouna) and Skoura palm grove. Optional: Kasbah Taourirt and Ouarzazate film studios. Visit UNESCO Ait Benhaddou. Cross the Tizi N\'tichka Pass (2,260m). Arrive in Marrakech.' }
    ]
  },
  'tour-fes-3drt': {
    eyebrow: 'From Fes · 3 Days / 2 Nights',
    title: '3 Days Fes to Merzouga (Return)',
    subtitle: 'Ifrane · Azrou Cedar Forest · Midelt · Ziz Gorges · Merzouga · Khamlia · Rissani',
    type: 'Private Desert Round-Trip',
    h2: 'Sahara from <em>Fes</em>',
    lead: 'The quickest way to experience the Sahara from Fes — three days that take you through cedar forests and Ziz gorges, into the dunes, and back.',
    body: 'A round-trip desert escape from Fes — drive south through the Middle Atlas, explore the Erg Chebbi dunes for a full day including a nomadic tent visit and Gnaoua music in Khamlia, and return through the same stunning Atlas landscapes.',
    duration: '3 Days / 2 Nights',
    departure: 'Fes',
    end: 'Fes',
    img: 'images/tour-fes.jpg',
    days: [
      { icon: 'fa-mountain', title: 'Fes to Erg Chebbi', text: 'Early morning departure, crossing the Middle Atlas. Stop in Ifrane ("Little Switzerland"). Visit the Cedar Forest of Azrou to see local apes. Stop in Midelt for lunch. Afternoon drive through the Ziz Gorges to Erg Chebbi. Evening dinner at a traditional riad or local kasbah.' },
      { icon: 'fa-campground', title: 'Erg Chebbi to Merzouga Camp', text: 'Early desert sunrise viewing. Full day of dune exploration and learning about desert nomad life, including tea with a nomadic family. Visit Khamlia for Gnawa music and dance. Visit Rissani for market exploration and lunch. Camel caravan to the high dunes for sunset. Dinner (tagine) and traditional music at the desert camp.' },
      { icon: 'fa-flag-checkered', title: 'Erg Chebbi to Fes', text: 'Early morning guided walk through the dunes for sunrise. Camel ride back; breakfast. Drive back toward Fes through the Atlas Mountains. Lunch stop in Midelt. Visit the cedar forest to see the monkeys. Arrival in Fes in the evening.' }
    ]
  },
  'tour-fes-3dcul': {
    eyebrow: 'From Fes · 3 Days / 2 Nights',
    title: '3 Day Cultural Tour to Marrakech',
    subtitle: 'Middle Atlas · Merzouga Sahara · Tinghir · Todgha · Skoura · Ait Ben Haddou · Marrakech',
    type: 'Private Cultural & Desert Tour',
    h2: 'From Cedar Forests to <em>Dunes</em>',
    lead: 'Three days from Fes to Marrakech — cedars in the morning, the Sahara at night, a canyon at midday, and a UNESCO kasbah by afternoon.',
    body: 'A lean, fast-paced journey from Fes to Marrakech that squeezes in the Sahara, the Todgha Canyons, the Road of a Thousand Kasbahs, a rosewater cooperative, and the spectacular Tizi Ntichka Pass.',
    duration: '3 Days / 2 Nights',
    departure: 'Fes',
    end: 'Marrakech',
    img: 'images/tour-marrakech.jpg',
    days: [
      { icon: 'fa-campground', title: 'Fes to Merzouga', text: 'Early pickup (7 AM winter / 8 AM summer). Drive across the plains of Saiss to the Middle Atlas Cedar forests. Lunch stop in Midelt. Continue along the Ziz River past palm groves and kasbahs to Erfoud and Merzouga. Settle into the Sahara Desert camp; dinner under the stars with nomad entertainment.' },
      { icon: 'fa-route', title: 'Merzouga to Dades Valley', text: 'Early sunrise camel ride. Drive to the Tinghir oasis; walk along the Todgha riverbank and visit Berber villages. Explore the Todgha Canyons with lunch at a local cafe. Afternoon drive along the Road of a Thousand Kasbahs to the Dades Valley. Dinner and overnight at a boutique guesthouse.' },
      { icon: 'fa-flag-checkered', title: 'Dades Valley to Marrakech', text: 'Optional visit to a Rosewater cooperative. Drive through the Skoura oasis. Lunch and visit to the UNESCO Ait Ben Haddou. Afternoon crossing of the Atlas Mountains via Tizi Ntichka Pass through Berber villages. Late afternoon arrival in Marrakech.' }
    ]
  },

  /* ===== TANGIER ===== */
  'tour-tan-12d': {
    eyebrow: 'From Tangier · 12 Days / 11 Nights',
    title: '12 Days Tangier to Marrakech',
    subtitle: 'Tetouan · Chefchaouen · Fes · Sahara · Todra · Ouarzazate · Marrakech · Essaouira',
    type: 'Private Grand Cultural & Desert Tour',
    h2: 'From the Strait of Gibraltar to the <em>Sahara</em>',
    lead: 'Twelve days from Tangier to Marrakech — starting on the Strait of Gibraltar, winding through Tetouan\'s UNESCO medina, and ending with a full day in Essaouira on the Atlantic coast.',
    body: 'The most complete Tangier-to-Marrakech circuit: two days in Chefchaouen, a full guided day in Fes, a two-night Sahara stay in Merzouga, the Road of a Thousand Kasbahs, Marrakech, an argan oil cooperative, and Essaouira.',
    duration: '12 Days / 11 Nights',
    departure: 'Tangier',
    end: 'Marrakech',
    img: 'images/tour-tangier.jpg',
    days: [
      { icon: 'fa-plane-arrival', title: 'Tangier to Chefchaouen via Tetouan', text: 'Pickup from accommodation or airport. Drive to Tetouan via views near Ceuta; explore the UNESCO medina. Continue past Capo Negro fishing port to Chefchaouen. Overnight.' },
      { icon: 'fa-droplet', title: 'Chefchaouen to Fes', text: 'Drive through the remote Rif Mountains and valleys with a scenic lunch stop. Arrive in Fes.' },
      { icon: 'fa-university', title: 'Full Day in Fes', text: 'Visit to the Marinid Tombs, 14th-century Madrasa Bou Inania, its museum. Lunch in the Medina. Explore the Attarin\'s Madrasa, the Nejjarine funduq, and the medieval tannery.' },
      { icon: 'fa-mountain', title: 'Fes to Merzouga', text: 'Drive to Ifrane through Atlas cedar forests. Continue to Midelt (capital of Apples) through Berber villages. Traditional lunch, then drive via Erfoud through Ziz Gorges to Merzouga. Mint tea welcome.' },
      { icon: 'fa-sun', title: 'Merzouga Desert Tour', text: 'Visit Khamlia village for Gnaoui music and folk dance. Visit the Lake of Merzouga and a nomadic house. Afternoon camel ride across the dunes to watch the sunset. Traditional Berber dinner with drums.' },
      { icon: 'fa-route', title: 'Merzouga to Boumalne Dades', text: 'Early sunrise viewing. Drive through Ziz Valley and Erfoud to Tinejdad for lunch. Arrive in Tinghir; explore the Todgha Gorge. Overnight in Boumalne Dades.' },
      { icon: 'fa-flag-checkered', title: 'Dades to Marrakech', text: 'Drive through Magouna (Valley of Roses) and Skoura. Continue to Ouarzazate via the Thousand Kasbahs route. Visit UNESCO Ait-Ben-Hadou. Cross the Tizi-n-Tichka road (2,260m) to Marrakech.' },
      { icon: 'fa-mosque', title: 'Full Day in Marrakech', text: 'Guided tour: Majorelle Gardens, Berber Museum, Rahba Kedima spice market, Jewish Mellah, Bahia Palace, Koutoubia Mosque, Saadian Tombs.' },
      { icon: 'fa-water', title: 'Marrakech to Essaouira', text: 'Drive to a women\'s Argan oil cooperative for a demonstration. Continue to Essaouira. Overnight.' },
      { icon: 'fa-sun', title: 'Full Day in Essaouira', text: 'Visit the Scala of the Kasbah. Explore the old Medina and handicraft shops. Visit the historic Jewish quarter. Free time at Plage de Safi beach.' },
      { icon: 'fa-route', title: 'Essaouira to Marrakech', text: 'Free morning in Essaouira. Midday drive back to Marrakech. Optional afternoon activities: calèche ride, Museum of Islamic Art, or traditional hammam.' },
      { icon: 'fa-flag-checkered', title: 'Departure from Marrakech', text: 'Transfer to Marrakech airport.' }
    ]
  },
  'tour-tan-10d': {
    eyebrow: 'From Tangier · 10 Days / 9 Nights',
    title: '10 Days Tangier to Casablanca',
    subtitle: 'Chefchaouen · Fes · Merzouga · Todra · Marrakech · Casablanca',
    type: 'Private Cultural & Desert Tour',
    h2: 'Tangier to Casablanca — <em>The Full Arc</em>',
    lead: 'Ten days from Tangier to Casablanca — full-day Chefchaouen exploration, the Roman ruins, a guided day in Fes, the Sahara, the Dades Gorge, and Marrakech.',
    body: 'Starting with Cave of Hercules and the Strait of Gibraltar, this tour sweeps through Morocco\'s north and south, ending with an optional visit to the Hassan II Mosque in Casablanca.',
    duration: '10 Days / 9 Nights',
    departure: 'Tangier',
    end: 'Casablanca',
    img: 'images/tour-chefchaouen-bg.jpg',
    days: [
      { icon: 'fa-plane-arrival', title: 'Tangier to Chefchaouen', text: 'Pickup, visit Cave of Hercules and Cape Spartel. Drive inland via Tetouan and the Rif Mountains. Overnight in Chefchaouen.' },
      { icon: 'fa-droplet', title: 'Full Day in Chefchaouen', text: 'Stroll through the old medina. Free time for lunch. Hike to the Spanish Mosque for panoramic views.' },
      { icon: 'fa-landmark', title: 'Chefchaouen to Fes via Meknes', text: 'Free time in Chefchaouen. Visit UNESCO Volubilis. Continue to Meknes: Bab El-Mansour, Sahrij Souani, Royal Stables, Mausoleum of Moulay Ismail. Arrive in Fes.' },
      { icon: 'fa-university', title: 'Full Day in Fes', text: 'Visit the Royal Palace gates. Through Bab Boujloud into the UNESCO medina. Medersa Bouanania, Najjarine Fountain, tanneries, Kairaouine Mosque. Visit the Mellah. Panoramic viewpoint.' },
      { icon: 'fa-campground', title: 'Fes to Merzouga', text: 'Visit a Malian community for music and cultural insight. Visit the Miffis Mines. Camel riding lesson and safety briefing. Explore the Erg Chebbi dunes; overnight in a Berber tent.' },
      { icon: 'fa-sun', title: 'Merzouga Region — Day Two', text: 'Drive south through Imouzzer to Ifrane. Visit cedar forests and Barbary macaques. Cross Tizi-n-Tilghmt pass and Ziz Valley. Camel ride to a sunset viewpoint. Dinner and Berber drumming at desert camp.' },
      { icon: 'fa-route', title: 'Merzouga Region Exploration', text: 'Off-road visit to an ancient eyeliner mine. Visit with Berber nomads. Visit Khamlia village for Gnaoua music. Walk through palm grove. Visit the Flamingo Lake. Overnight in Merzouga.' },
      { icon: 'fa-mountain', title: 'Dades Gorges to Marrakech Route', text: 'Visit Rose Valley near Kalaa Magouna. Drive through Skoura. Visit Kasbah of Amredhyle. Visit Ouarzazate film studios. Visit UNESCO Ait Ben Haddou. Stop at the Telouet Kasbah. Cross Tizi-N-Tichka to Marrakech.' },
      { icon: 'fa-mosque', title: 'Full Day in Marrakech', text: 'Guided tour: Bahia Palace, Saadian Tombs, Ben Youssef Quranic Mosque. Explore the largest traditional souk. Visit Koutoubia Mosque and Majorelle Garden. Evening at Jemaa El-Fna.' },
      { icon: 'fa-flag-checkered', title: 'Marrakech to Casablanca', text: 'Drive to Casablanca; optional visit to the Hassan II Mosque. Drop-off at the airport.' }
    ]
  },
  'tour-tan-7d': {
    eyebrow: 'From Tangier · 7 Days / 6 Nights',
    title: '7 Days Imperial Cities & Sahara',
    subtitle: 'Chefchaouen · Volubilis · Meknes · Fes · Ifrane · Merzouga · Todra · Ait Ben Haddou · Marrakech',
    type: 'Private Imperial Cities & Desert Tour',
    h2: 'North to South — <em>Imperial Cities</em>',
    lead: 'Seven days from Tangier to Marrakech — through Morocco\'s great imperial cities, the cedar forests, and the Sahara desert.',
    body: 'A classic south-bound journey: Chefchaouen\'s blue medina, Volubilis, Meknes, a full guided day in Fes, a Sahara overnight in Merzouga, the Todra Gorge, and finally Ait Ben Haddou before Marrakech.',
    duration: '7 Days / 6 Nights',
    departure: 'Tangier',
    end: 'Marrakech',
    img: 'images/tour-atlas.jpg',
    days: [
      { icon: 'fa-plane-arrival', title: 'Tangier to Chefchaouen', text: 'Pickup from airport or port. Drive through the Rif Mountains and Tetouan. Overnight in Chefchaouen.' },
      { icon: 'fa-landmark', title: 'Chefchaouen to Fes via Meknes', text: 'Drive through Ouazan and Rif villages to Volubilis. Explore Roman ruins. Continue to Meknes: lunch, Bab El Mansour, Moulay Ismail tomb. Arrive in Fes.' },
      { icon: 'fa-university', title: 'Full Day in Fes', text: 'Guided tour of the medina and souks. Visit Al-Qaraouine University. Visit the tanneries and a ceramic cooperative.' },
      { icon: 'fa-mountain', title: 'Fes to Merzouga', text: 'Drive south via Azrou and Ifrane. Photo stop with Barbary Apes at the cedar forest. Continue through Midelt. Drive through the Ziz Valley to Erfoud, Rissani, and Merzouga.' },
      { icon: 'fa-campground', title: 'Explore Merzouga', text: 'Visit a Malian community for music and cultural insight. Visit Miffis Mines. Visit with local Bedouins for tea. Camel riding lesson. Explore the Erg Chebbi dunes. Overnight in a Berber tent.' },
      { icon: 'fa-route', title: 'Merzouga to Boumalne Dades', text: 'Early sunrise viewing over the dunes. Breakfast, then drive to Tinghir and the Todra Gorge. Free time for walking and sampling Berber delicacies. Lunch; drive through the Dades Valley. Overnight at a mountain-top hotel.' },
      { icon: 'fa-flag-checkered', title: 'Dades to Marrakech', text: 'Drive through the Dades Valley (Road of a Thousand Kasbahs) to Kalaa M\'gouna and Ouarzazate. Stop at the Atlas Studios. Visit the UNESCO Ait Ben Haddou. Lunch; cross the High Atlas to Marrakech.' }
    ]
  },
  'tour-tan-4d': {
    eyebrow: 'From Tangier · 4 Days / 3 Nights',
    title: '4 Days Tangier to Marrakech',
    subtitle: 'Rif Mountains · Chefchaouen · Fes · Ifrane · Merzouga Sahara · Todra · Ait Benhaddou',
    type: 'Private Desert Tour',
    h2: 'Tangier to Marrakech in <em>Four Days</em>',
    lead: 'The fastest Tangier-to-Marrakech desert circuit — Chefchaouen, the Blue Pearl; the Sahara; the Todra Gorge; and the UNESCO Ait Benhaddou Kasbah.',
    body: 'Four days from the Strait of Gibraltar to the Red City — a rapid, private descent through Morocco\'s most iconic landscapes including an overnight in the Erg Chebbi dunes with optional sandboarding.',
    duration: '4 Days / 3 Nights',
    departure: 'Tangier',
    end: 'Marrakech',
    img: 'images/tour-tangier.jpg',
    days: [
      { icon: 'fa-plane-arrival', title: 'Tangier to Fes via Chefchaouen', text: 'Pickup from hotel, airport, or harbor. Drive through the Rif Mountains via Tetouan to Chefchaouen. Free time to explore the old medina and Ras el Ma waterfall. Lunch at Plaza Uta el-Hammam. Afternoon drive to Fes. Overnight.' },
      { icon: 'fa-campground', title: 'Fes to Merzouga', text: '8:30 AM pickup. Drive through the Middle Atlas and Berber villages. Stop in Ifrane and Azrou cedar forest. Lunch in Midelt. Continue to Erfoud and through the Ziz Valley. Camel trek to the Berber Camp; sunset and optional sandboarding. Dinner, Berber drumming, overnight in a nomadic tent.' },
      { icon: 'fa-route', title: 'Merzouga to Dades Valley', text: 'Early sunrise viewing; return by camel. Visit Rissani weekly market. Drive through Touroug, Tinjdad, Tinghir, admiring the Todra Valley. Visit the Todra Gorge. Lunch; drive to Boumalne Dades. Dinner and overnight.' },
      { icon: 'fa-flag-checkered', title: 'Dades Valley to Marrakech', text: 'Drive via Rose Valley (Kalaat M\'gouna) and Skoura palm grove. Optional: Kasbah Taourirte and Ouarzazate film studios. Visit UNESCO Ait Benhaddou. Cross the Tizi N\'tichka Pass (2,260m). Arrive in Marrakech.' }
    ]
  }
};

/* ============================================
   HELPERS
   ============================================ */
const DAY_ICONS = ['fa-plane-arrival','fa-route','fa-mountain','fa-campground','fa-sun','fa-landmark','fa-university','fa-droplet','fa-mosque','fa-city','fa-water','fa-ship','fa-flag-checkered'];

function buildTimeline(days) {
  const tl = document.getElementById('tourDetailTimeline');
  const spine = tl.querySelector('.timeline-spine');
  tl.innerHTML = '';
  tl.appendChild(spine);
  days.forEach((day, i) => {
    const item = document.createElement('div');
    item.className = 'timeline-item';
    item.innerHTML = `
      <div class="timeline-marker"><i class="fa-solid ${day.icon || DAY_ICONS[i % DAY_ICONS.length]}"></i></div>
      <div class="timeline-card">
        <span class="timeline-day">Day ${String(i + 1).padStart(2, '0')}</span>
        <h3>${day.title}</h3>
        <p>${day.text}</p>
      </div>`;
    tl.appendChild(item);
  });
}

function populateTourDetail(tourId) {
  const d = TOUR_DATA[tourId];
  if (!d) return;
  document.getElementById('tourDetailHero').style.setProperty('--dview-img', `url('${d.img}')`);
  document.getElementById('tourDetailEyebrow').textContent = d.eyebrow;
  document.getElementById('tourDetailTitle').textContent = d.title;
  document.getElementById('tourDetailSubtitle').textContent = d.subtitle;
  document.getElementById('tourDetailType').textContent = d.type;
  document.getElementById('tourDetailH2').innerHTML = d.h2;
  document.getElementById('tourDetailLead').textContent = d.lead;
  document.getElementById('tourDetailBody').textContent = d.body;
  document.getElementById('tdDuration').textContent = d.duration;
  document.getElementById('tdDeparture').textContent = d.departure;
  document.getElementById('tdEnd').textContent = d.end;
  document.getElementById('tourInquiryName').value = d.title;
  buildTimeline(d.days);
}

/* ============================================
   MAIN
   ============================================ */
document.addEventListener('DOMContentLoaded', () => {

  /* ---------- PAGE LOAD FADE-IN ---------- */
  const loader = document.getElementById('loader');
  window.addEventListener('load', () => {
    setTimeout(() => { loader.classList.add('loaded'); }, 500);
  });
  setTimeout(() => loader.classList.add('loaded'), 2500);

  /* ---------- FOOTER YEAR ---------- */
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ====================================================
     SPA ROUTER
     ==================================================== */
  const routeVeil = document.getElementById('routeVeil');
  const allViews = Array.from(document.querySelectorAll('.page-view'));
  const getView = (route) => {
    if (route === 'tour-detail') return document.getElementById('view-tour-detail');
    return document.querySelector(`.page-view[data-route="${route}"]`);
  };
  let currentRoute = 'home';
  let isTransitioning = false;
  let pendingTourId = null;

  function revealTimelineItems(view) {
    const items = view.querySelectorAll('.timeline-item');
    items.forEach((item, i) => {
      item.classList.remove('in-view');
      setTimeout(() => item.classList.add('in-view'), 220 + i * 140);
    });
  }

  function navigateTo(route, opts = {}) {
    if (isTransitioning) return;
    if (route === currentRoute && route === 'home') {
      if (opts.hash) scrollToHash(opts.hash);
      return;
    }
    const fromView = getView(currentRoute);
    const toView = getView(route);
    if (!toView) return;

    isTransitioning = true;
    document.body.classList.add('is-routing');

    routeVeil.classList.remove('out');
    routeVeil.classList.add('active');

    setTimeout(() => {
      if (fromView) fromView.classList.remove('is-active', 'is-entering');
      allViews.forEach(v => v.classList.remove('is-active'));

      // populate tour detail before reveal
      if (route === 'tour-detail' && pendingTourId) {
        populateTourDetail(pendingTourId);
        pendingTourId = null;
      }

      toView.classList.add('is-active', 'is-entering');
      window.scrollTo({ top: 0, behavior: 'instant' });

      requestAnimationFrame(() => {
        routeVeil.classList.add('out');
        routeVeil.classList.remove('active');
      });

      currentRoute = route;

      setTimeout(() => {
        toView.classList.remove('is-entering');
        if (toView.classList.contains('view-destination')) {
          revealTimelineItems(toView);
        }
        isTransitioning = false;
        document.body.classList.remove('is-routing');
        if (opts.hash) scrollToHash(opts.hash);
      }, 480);

    }, 380);
  }

  function scrollToHash(hash) {
    const target = document.querySelector(hash);
    if (!target) return;
    const navHeight = document.getElementById('navbar').offsetHeight;
    const top = target.getBoundingClientRect().top + window.scrollY - (navHeight - 10);
    setTimeout(() => window.scrollTo({ top, behavior: 'smooth' }), 60);
  }

  /* Tour cards open the detail view */
  document.querySelectorAll('[data-destination]').forEach(card => {
    const open = () => {
      const tourId = card.getAttribute('data-destination');
      if (TOUR_DATA[tourId]) {
        pendingTourId = tourId;
        navigateTo('tour-detail');
      }
    };
    card.addEventListener('click', open);
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); open(); }
    });
  });

  /* data-nav-home returns to home */
  document.querySelectorAll('[data-nav-home]').forEach(el => {
    el.addEventListener('click', (e) => {
      const href = el.getAttribute('href');
      const hash = href && href.startsWith('#') ? href : null;
      if (currentRoute !== 'home') {
        e.preventDefault();
        navigateTo('home', { hash });
      }
    });
  });

  /* ---------- TOUR FILTER TABS ---------- */
  const filterBtns = document.querySelectorAll('.filter-btn');
  const tourCards = document.querySelectorAll('.tour-card');

  // Initialize all cards as visible
  tourCards.forEach(card => card.classList.add('is-visible'));

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');
      const grid = document.getElementById('toursGrid');

      // temporarily make grid static height during transition
      tourCards.forEach(card => {
        if (filter === 'all' || card.getAttribute('data-city') === filter) {
          card.classList.remove('is-hidden');
          card.classList.add('is-visible');
        } else {
          card.classList.remove('is-visible');
          card.classList.add('is-hidden');
        }
      });
    });
  });

  /* ---------- STICKY NAVBAR ---------- */
  const navbar = document.getElementById('navbar');
  const onScrollNav = () => {
    navbar.classList.toggle('scrolled', window.scrollY > 60);
  };
  window.addEventListener('scroll', onScrollNav, { passive: true });
  onScrollNav();

  /* ---------- MOBILE NAV TOGGLE ---------- */
  const navToggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');
  navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('open');
    navLinks.classList.toggle('open');
  });
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navToggle.classList.remove('open');
      navLinks.classList.remove('open');
    });
  });

  /* ---------- HERO TITLE STAGGER ---------- */
  document.querySelectorAll('.hero-content [data-delay]').forEach(el => {
    el.style.setProperty('--d', el.getAttribute('data-delay'));
    requestAnimationFrame(() => {
      setTimeout(() => el.classList.add('in-view'), 50);
    });
  });

  /* ---------- PARALLAX HERO BACKGROUND ---------- */
  const heroBg = document.getElementById('heroBg');
  const hero = document.getElementById('hero');
  let ticking = false;
  function updateParallax() {
    if (currentRoute !== 'home') { ticking = false; return; }
    const scrollY = window.scrollY;
    if (heroBg && hero && scrollY < hero.offsetHeight) {
      const offset = scrollY * 0.35;
      heroBg.style.transform = `translateY(${offset}px) scale(${1.02 + scrollY * 0.0002})`;
    }
    ticking = false;
  }
  window.addEventListener('scroll', () => {
    if (!ticking) { requestAnimationFrame(updateParallax); ticking = true; }
  }, { passive: true });

  /* ---------- SCROLL REVEAL ---------- */
  const revealEls = document.querySelectorAll('.reveal-fade, .reveal-up, .reveal-left, .reveal-right');
  const groups = {};
  revealEls.forEach(el => {
    const parent = el.closest('section') || document.body;
    const key = parent.id || 'global';
    if (!groups[key]) groups[key] = 0;
    const delayAttr = el.getAttribute('data-delay');
    const order = delayAttr !== null ? parseInt(delayAttr, 10) : groups[key]++;
    el.style.setProperty('--reveal-order', order);
  });
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -8% 0px' });
  revealEls.forEach(el => {
    if (!el.closest('.hero-content')) revealObserver.observe(el);
  });

  /* ---------- CONTACT FORM (Web3Forms) ---------- */
  const contactForm = document.getElementById('contactForm');
  const formSuccess = document.getElementById('formSuccess');
  const formError = document.getElementById('formError');

  if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
      e.preventDefault();

      // Sync reply-to with email field value
      const emailField = contactForm.querySelector('#email');
      const replyToField = contactForm.querySelector('#contactReplyTo');
      if (emailField && replyToField) replyToField.value = emailField.value;

      const submitBtn = contactForm.querySelector('.btn-form span');
      const submitIcon = contactForm.querySelector('.btn-form i');
      const originalText = submitBtn.textContent;
      submitBtn.textContent = 'Sending…';
      if (submitIcon) submitIcon.style.display = 'none';
      contactForm.querySelector('.btn-form').disabled = true;

      // Hide any previous messages
      formSuccess.style.display = 'none';
      formError.style.display = 'none';

      try {
        const formData = new FormData(contactForm);
        const response = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          body: formData
        });
        const result = await response.json();

        if (response.ok && result.success) {
          formSuccess.style.display = 'block';
          contactForm.reset();
          document.activeElement.blur();
          setTimeout(() => { formSuccess.style.display = 'none'; }, 6000);
        } else {
          formError.style.display = 'block';
          setTimeout(() => { formError.style.display = 'none'; }, 7000);
        }
      } catch (err) {
        formError.style.display = 'block';
        setTimeout(() => { formError.style.display = 'none'; }, 7000);
      } finally {
        submitBtn.textContent = originalText;
        if (submitIcon) submitIcon.style.display = '';
        contactForm.querySelector('.btn-form').disabled = false;
      }
    });
  }

  /* ---------- BOOKING FORM (Web3Forms) ---------- */
  const bookingForm = document.getElementById('bookingForm');
  const bookingSuccess = document.getElementById('bookingSuccess');
  const bookingError = document.getElementById('bookingError');

  if (bookingForm) {
    bookingForm.addEventListener('submit', async (e) => {
      e.preventDefault();

      // Sync reply-to with email field value
      const emailField = bookingForm.querySelector('#td-email');
      const replyToField = bookingForm.querySelector('#bookingReplyTo');
      if (emailField && replyToField) replyToField.value = emailField.value;

      const submitBtn = bookingForm.querySelector('.btn-form span');
      const submitIcon = bookingForm.querySelector('.btn-form i');
      const originalText = submitBtn.textContent;
      submitBtn.textContent = 'Sending…';
      if (submitIcon) submitIcon.style.display = 'none';
      bookingForm.querySelector('.btn-form').disabled = true;

      // Hide any previous messages
      bookingSuccess.style.display = 'none';
      bookingError.style.display = 'none';

      try {
        const formData = new FormData(bookingForm);
        const response = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          body: formData
        });
        const result = await response.json();

        if (response.ok && result.success) {
          bookingSuccess.style.display = 'block';
          bookingForm.reset();
          document.activeElement.blur();
          setTimeout(() => { bookingSuccess.style.display = 'none'; }, 6000);
        } else {
          bookingError.style.display = 'block';
          setTimeout(() => { bookingError.style.display = 'none'; }, 7000);
        }
      } catch (err) {
        bookingError.style.display = 'block';
        setTimeout(() => { bookingError.style.display = 'none'; }, 7000);
      } finally {
        submitBtn.textContent = originalText;
        if (submitIcon) submitIcon.style.display = '';
        bookingForm.querySelector('.btn-form').disabled = false;
      }
    });
  }

  /* ---------- BACK TO TOP ---------- */
  const backToTop = document.getElementById('backToTop');
  window.addEventListener('scroll', () => {
    backToTop.classList.toggle('show', window.scrollY > window.innerHeight * 0.8);
  }, { passive: true });
  backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  /* ---------- REVIEWS DRAG SCROLL ---------- */
  const track = document.getElementById('reviewsTrack');
  if (track) {
    let isDown = false, startX, scrollLeft;
    track.addEventListener('mousedown', (e) => {
      isDown = true; track.style.cursor = 'grabbing';
      startX = e.pageX - track.offsetLeft; scrollLeft = track.scrollLeft;
    });
    ['mouseleave', 'mouseup'].forEach(evt => {
      track.addEventListener(evt, () => { isDown = false; track.style.cursor = 'grab'; });
    });
    track.addEventListener('mousemove', (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - track.offsetLeft;
      track.scrollLeft = scrollLeft - (x - startX) * 1.2;
    });
    track.style.cursor = 'grab';
  }

  /* ---------- SMOOTH ANCHOR SCROLL ---------- */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      if (this.hasAttribute('data-nav-home') && currentRoute !== 'home') return;
      const targetId = this.getAttribute('href');
      if (targetId.length > 1) {
        const target = document.querySelector(targetId);
        if (target) {
          e.preventDefault();
          const navHeight = document.getElementById('navbar').offsetHeight;
          const top = target.getBoundingClientRect().top + window.scrollY - (navHeight - 10);
          window.scrollTo({ top, behavior: 'smooth' });
        }
      }
    });
  });

  /* ---------- EXP CARD TILT ---------- */
  document.querySelectorAll('.exp-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const rotateX = ((e.clientY - rect.top - rect.height / 2) / (rect.height / 2)) * -6;
      const rotateY = ((e.clientX - rect.left - rect.width / 2) / (rect.width / 2)) * 6;
      card.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-10px) scale(1.02)`;
    });
    card.addEventListener('mouseleave', () => { card.style.transform = ''; });
  });

  /* ---------- AMBIENT PATTERN PARALLAX ---------- */
  const heroPattern = document.querySelector('.hero-pattern');
  if (heroPattern) {
    window.addEventListener('scroll', () => {
      if (currentRoute !== 'home') return;
      heroPattern.style.backgroundPosition = `${window.scrollY * 0.15}px ${window.scrollY * 0.1}px`;
    }, { passive: true });
  }

});
