/* ==========================================================================
   Alhabib Travels — Complete Authentic Site Data
   Preserves all zones, destinations, regional itineraries, treks, packages,
   off-beat locations, team members, customer reviews, offices & policies from
   https://alhabibtravels.com/
   ========================================================================== */

window.ALHABIB_DATA = {
  zones: {
    north: {
      id: "north",
      code: "N",
      angle: 0,
      name: "North Zone",
      badge: "Himalayas · Deserts · Royal Capitals",
      description:
        "From regal Himalayan mountain ranges and Shivalik foothills to the sacred plains of the Ganga and the golden dunes of the Thar Desert—extending through Haryana, Punjab, Himachal Pradesh, Uttarakhand, Delhi, Rajasthan, Ladakh, and Jammu & Kashmir, the 'Heaven on Earth'.",
      destinations: [
        {
          id: "kashmir",
          name: "Jammu & Kashmir",
          zone: "North Zone",
          image: "assets/images/dest-kashmir.webp",
          durationLabel: "3 to 8 Days · Himalayan Valleys",
          excerpt:
            "Renowned worldwide as 'Paradise on Earth'—majestic snow-capped peaks, serene Dal Lake shikaras & houseboats, alpine meadows, and Mughal gardens.",
          overview:
            "Kashmir is renowned for its unmatched natural beauty: majestic snow-capped mountains, sparkling rivers, serene lakes, lush green meadows, and verdant forests. Glide across pristine Dal Lake on colorful traditional shikaras and Anjali-wood houseboats, ski the powder slopes of Gulmarg, camp beside gushing rivers in Pahalgam and Sonamarg, or unwind in the high-altitude meadows of Dodhpathri and Yousmarg.",
          places: [
            { name: "Srinagar", detail: "Serene Dal Lake, 16th-century Mughal Gardens, heritage downtown & Zabarwan mountain backdrop." },
            { name: "Gulmarg", detail: "World-renowned skiing & adventure hill station at 8,700 ft with one of the highest golf courses in the world." },
            { name: "Pahalgam", detail: "Lush pine valleys, Lidder River, Betaab Valley, Aru Valley, and Chandanwari." },
            { name: "Sonamarg", detail: "Meadow of Gold nestled among Himalayan glaciers and alpine trekking trails." },
            { name: "Dodhpathri", detail: "High-altitude 'Valley of Milk' meadow in Budgam district." },
            { name: "Yousmarg", detail: "Tranquil Badgam hill station of emerald pastures and glistening streams." }
          ],
          regionKey: "Jammu & Kashmir"
        },
        {
          id: "ladakh",
          name: "Ladakh",
          zone: "North Zone",
          image: "assets/images/dest-ladakh.webp",
          durationLabel: "3 to 5 Days · High Passes & Lakes",
          excerpt:
            "The high-altitude 'Land of Lamas'—crystal-blue skies, ancient Tibetan Buddhist monasteries, Pangong Lake, Khardungla Pass & Nubra's cold desert.",
          overview:
            "Ladakh's tourism heritage stretches back to ancient travelers drawn across its lofty snow-capped passes. Known as the 'Land of Lamas', this high-altitude cold desert blends living Tibetan Buddhist monasteries with dramatic natural wonders—fast-flowing rivers, Sham Valley, Khardungla Pass, Nubra's white sand dunes, and dazzling Pangong Lake.",
          places: [
            { name: "Leh", detail: "Historic Himalayan capital surrounded by centuries-old gompas, Leh Palace, and Sham Valley." },
            { name: "Pangong Lake", detail: "Situated at nearly 4,350 m—the world's highest saltwater lake shifting through shades of sapphire." },
            { name: "Nubra Valley", detail: "The world's highest cold desert at an average altitude of 3,048 m (10,000 ft) beyond Khardungla Pass." }
          ],
          regionKey: "Ladakh"
        },
        {
          id: "rajasthan",
          name: "Rajasthan",
          zone: "North Zone",
          image: "assets/images/dest-rajasthan.jpg",
          durationLabel: "4 to 6 Days · Royal Forts & Safaris",
          excerpt:
            "India's 'Land of Kings'—grand Rajput forts, shimmering lake palaces, golden Thar Desert camel safaris, folk traditions, and royal wildlife reserves.",
          overview:
            "India's largest state by area celebrates a glorious royal past through architectural marvels like Amber Fort, City Palace, Mehrangarh Fort, Umaid Bhawan, and Junagarh Fort, alongside Thar Desert safaris, vibrant folk music and festivals (Pushkar Fair & Teej), and Bengal tiger sightings in Ranthambore.",
          places: [
            { name: "Jaipur", detail: "The vibrant 'Pink City' famed for Amber Fort, Jal Mahal, Hawa Mahal, and royal heritage." },
            { name: "Udaipur", detail: "Romantic 'City of Lakes' crowned by City Palace, Lake Pichola, and island palaces." },
            { name: "Ranthambore", detail: "Premier wildlife national park celebrated for majestic Royal Bengal tigers and historic fort ruins." }
          ],
          regionKey: "Rajasthan"
        }
      ]
    },

    south: {
      id: "south",
      code: "S",
      angle: 180,
      name: "South Zone",
      badge: "Backwaters · Coastlines · Heritage",
      description:
        "Framed between the Western and Eastern Ghats tapering into the Indian Ocean, Arabian Sea, and Bay of Bengal—discover emerald backwaters, Ayurvedic wellness, palm-fringed beaches, centuries-old temple architecture, and coastal cuisine.",
      destinations: [
        {
          id: "kerala",
          name: "Kerala",
          zone: "South Zone",
          image: "assets/images/dest-kerala.webp",
          durationLabel: "3 to 5 Days · Backwaters & Tea Hills",
          excerpt:
            "'God's Own Country'—tranquil Kettuvallam houseboat cruises, misty Munnar tea estates, Kochi's spice harbor, Thekkady wildlife & Kovalam shores.",
          overview:
            "Flanked by the Arabian Sea and the Western Ghats, Kerala is a global model of sustainable, responsible tourism. Glide along coconut-lined canals and lagoons aboard a traditional Kettuvallam houseboat, breathe crisp mountain air across Munnar's tea gardens, explore wildlife in Thekkady, and unwind along golden beaches.",
          places: [
            { name: "Munnar", detail: "Serene Western Ghats hill station of rolling tea plantations and misty peaks." },
            { name: "Kochi (Cochin)", detail: "Historic port city blending colonial heritage, Chinese fishing nets, spice markets & seafood." },
            { name: "Kovalam & Thekkady", detail: "Sparkling palm-fringed Arabian Sea beaches and spice-scented wildlife highlands." }
          ],
          regionKey: "Kerala"
        },
        {
          id: "goa",
          name: "Goa",
          zone: "South Zone",
          image: "assets/images/dest-goa.jpg",
          durationLabel: "3 to 5 Days · Coastline & Heritage",
          excerpt:
            "Over 100 km of sun-drenched coastline, UNESCO Portuguese heritage in Old Goa, Dudhsagar waterfalls, aromatic spice plantations & Mandovi river cruises.",
          overview:
            "Goa blends sun, sand, sea, and Indo-Portuguese culture across famous beaches (Calangute, Baga, Anjuna, Vagator, Palolem), historic landmarks (Basilica of Bom Jesus, Se Cathedral, Aguada & Chapora Forts), Mollem National Park's Dudhsagar Falls, guided spice plantation lunches, water sports, and sunset cruises.",
          places: [
            { name: "Panaji", detail: "Picturesque riverside capital with Latin Quarter charm, markets & Portuguese architecture." },
            { name: "Vagator", detail: "Dramatic red-cliff coastline overlooking the Arabian Sea with relaxed coastal cafés." },
            { name: "Baga", detail: "Energetic beach hub renowned for water sports, coastal dining, and sunset views." }
          ],
          regionKey: "Goa"
        },
        {
          id: "mumbai",
          name: "Mumbai & Maharashtra",
          zone: "South Zone",
          image: "assets/images/dest-mumbai.webp",
          durationLabel: "3 to 5 Days · Seafront & Hill Stations",
          excerpt:
            "India's cosmopolitan West Coast powerhouse—iconic Gateway of India, Queen's Necklace along Marine Drive, Juhu sunsets & lush Mahabaleshwar hills.",
          overview:
            "Mumbai unites historic seafront monuments, thriving arts, street-food culture, Bollywood energy, and coastal promenades, paired effortlessly with Maharashtra's emerald Western Ghats retreats like strawberry-famous Mahabaleshwar and historic hill forts.",
          places: [
            { name: "Marine Drive", detail: "Sweeping Arabian Sea boulevard celebrated for golden sunsets and Art Deco heritage." },
            { name: "Gateway of India", detail: "Iconic waterfront arch monument overlooking Mumbai Harbour." },
            { name: "Mahabaleshwar", detail: "Verdant Sahyadri hill station famed for panoramic viewpoints and strawberry orchards." }
          ],
          regionKey: "Mumbai"
        }
      ]
    },

    east: {
      id: "east",
      code: "E",
      angle: 90,
      name: "East Zone",
      badge: "Ancient Seat of Learning · Tea Hills · Culture",
      description:
        "Steeped in timeless heritage—from Bodh Gaya where Lord Buddha attained enlightenment and ancient Nalanda University to Rabindranath Tagore's Bengal, Himalayan Darjeeling tea estates, and forested tribal plateaus.",
      destinations: [
        {
          id: "west-bengal",
          name: "West Bengal",
          zone: "East Zone",
          image: "assets/images/dest-west-bengal.webp",
          durationLabel: "3 to 5 Days · Tea Gardens & Culture",
          excerpt:
            "From Kolkata's 'City of Joy' and Tagore's Shantiniketan to UNESCO Darjeeling Himalayan toy trains, Kanchenjunga sunrises, Kalimpong & Sundarbans.",
          overview:
            "West Bengal spans grand cultural landmarks in Kolkata (Victoria Memorial, Howrah Bridge, Indian Museum, Dakshineswar), Himalayan retreats in Darjeeling and Kalimpong (Tiger Hill, Happy Valley Tea Estate, Buddhist monasteries), Dooars wildlife reserves, Bishnupur terracotta temples, and the UNESCO Sundarbans mangrove delta.",
          places: [
            { name: "Kolkata", detail: "The 'City of Joy'—literary heritage, grand colonial landmarks, festivals & culinary artistry." },
            { name: "Darjeeling", detail: "Himalayan queen of lush tea gardens, UNESCO toy train & Mount Kanchenjunga panoramas." },
            { name: "Kalimpong", detail: "Peaceful Eastern Himalayan ridge known for orchids, monasteries & sweeping valley views." }
          ],
          regionKey: "West Bengal"
        },
        {
          id: "bihar",
          name: "Bihar",
          zone: "East Zone",
          image: "assets/images/dest-bihar.jpg",
          durationLabel: "3 to 5 Days · Sacred Heritage",
          excerpt:
            "Cradle of Buddhism, Jainism & Mauryan history—UNESCO Mahabodhi Temple at Bodh Gaya, ancient Nalanda University, Rajgir, Vaishali & Patna's Golghar.",
          overview:
            "Bihar preserves extraordinary spiritual and intellectual milestones: Bodh Gaya's sacred Bodhi Tree and Mahabodhi Temple, the ancient residential university ruins of Nalanda, Rajgir's Vishwa Shanti Stupa and hot springs, Vaishali's Ashoka Pillar, Pawapuri's marble Jal Mandir, Vikramshila Gangetic Dolphin Sanctuary, and Patna.",
          places: [
            { name: "Bodh Gaya", detail: "UNESCO World Heritage pilgrimage site where Gautama Buddha attained enlightenment." },
            { name: "Patna & Nalanda", detail: "Historic Magadha capital alongside the world's earliest residential university ruins." },
            { name: "Golghar", detail: "Iconic 18th-century beehive granary offering panoramic views over Patna and the Ganges." }
          ],
          regionKey: "Bihar"
        },
        {
          id: "jharkhand",
          name: "Jharkhand",
          zone: "East Zone",
          image: "assets/images/dest-jharkhand.webp",
          durationLabel: "3 to 5 Days · Waterfalls & Forests",
          excerpt:
            "'The Land of Forests'—cascading waterfalls around Ranchi, misty Netarhat sunrises, Betla National Park wildlife & vibrant indigenous heritage.",
          overview:
            "Carved from forested highlands, Jharkhand pairs rich indigenous Santhal, Oraon, and Munda cultural traditions with dramatic valleys like Patratu, waterfalls around Ranchi, Betla & Palamau wildlife sanctuaries, and serene pine retreats in Netarhat.",
          places: [
            { name: "Ranchi", detail: "Pleasant 'City of Waterfalls' surrounded by green hills, lakes, and Patratu Valley." },
            { name: "Netarhat", detail: "'Queen of Chotanagpur' hill station celebrated for dense forests and golden sunrises." },
            { name: "Purulia Circuit", detail: "Scenic rolling hills, Chhau mask-dance heritage, and tranquil lakes." }
          ],
          regionKey: "Jharkhand"
        }
      ]
    },

    west: {
      id: "west",
      code: "W",
      angle: 270,
      name: "West Zone",
      badge: "White Salt Deserts · Royal Lakes · Waterfalls",
      description:
        "A tapestry of contrasts—from the surreal white salt marshes of the Great Rann of Kutch, Gir's Asiatic lions, and Mahatma Gandhi's homeland to Mewar's island palaces in Udaipur and central India's thunderous Chitrakote waterfalls.",
      destinations: [
        {
          id: "udaipur",
          name: "Udaipur",
          zone: "West Zone",
          image: "assets/images/dest-udaipur.jpg",
          durationLabel: "3 to 5 Days · Royal Lakes & Palaces",
          excerpt:
            "Founded in 1559 by Maharana Udai Singh II—shimmering Lake Pichola, sprawling City Palace courtyards, Jagmandir Island & day trips to Kumbhalgarh.",
          overview:
            "Udaipur's interconnected lakes—Lake Pichola, Fateh Sagar, Rangsagar, and Doodh Talai—frame Rajput architectural masterpieces including Rajasthan's largest City Palace complex, Jagdish Temple, Saheliyon-ki-Bari, Shilpgram crafts village, and the Vintage & Classic Car Museum.",
          places: [
            { name: "City Palace", detail: "Towering Mewar royal complex of marble balconies, frescoes & courtyards over Lake Pichola." },
            { name: "Jagmandir", detail: "17th-century island palace set amidst the tranquil waters of Lake Pichola." },
            { name: "Lake Pichola", detail: "Romantic mirror-like lake ringed by Aravalli hills, ghats, and heritage havelis." }
          ],
          regionKey: "Udaipur"
        },
        {
          id: "gujarat",
          name: "Gujarat",
          zone: "West Zone",
          image: "assets/images/dest-gujarat.jpg",
          durationLabel: "3 to 5 Days · Salt Desert & Shrines",
          excerpt:
            "Moonlit white salt plains of the Rann of Kutch, sacred coastal shrines of Dwarka & Somnath, Diu beaches, Modhera Sun Temple & Gir's Asiatic lions.",
          overview:
            "Gujarat weaves living craft traditions with extraordinary landscapes: the Great Rann of Kutch white desert, Gir Forest National Park (the world's sole wild habitat of the Asiatic lion), sacred Sapta Puri town of Dwarka, Somnath, Saputara hills, and vibrant Ahmedabad.",
          places: [
            { name: "Rann of Kutch", detail: "Mesmerizing surreal expanse of white salt marsh in the Thar Desert." },
            { name: "Dwarka & Diu", detail: "Ancient coastal pilgrimage town of Dwarkadhish Temple paired with breezy Diu shores." },
            { name: "Gir Forest", detail: "Protected sanctuary and sole natural home of the majestic Asiatic lion." }
          ],
          regionKey: "Gujarat"
        },
        {
          id: "chhattisgarh",
          name: "Chhattisgarh",
          zone: "West Zone",
          image: "assets/images/dest-chhattisgarh.webp",
          durationLabel: "3 to 5 Days · Waterfalls & Bastar",
          excerpt:
            "Untamed forested heartland—Chitrakote ('The Niagara of India'), Bastar's weekly tribal haats, Kanger Valley caves, Sirpur ruins & Ghatarani Falls.",
          overview:
            "Chhattisgarh rewards curious travelers with lush Sal forests, Kutumsar limestone caves in Kanger Valley National Park, ancient Buddhist and temple heritage at Sirpur and Rajim, vibrant Bastar tribal crafts in Jagdalpur, and monumental horseshoe waterfalls.",
          places: [
            { name: "Chitrakote Waterfalls", detail: "Majestic horseshoe waterfall on the Indravati River—known as the 'Niagara Falls of India'." },
            { name: "Ghatarani Waterfalls", detail: "Serene forest-ringed cascade and nature retreat in Chhattisgarh." },
            { name: "Bilaspur & Raipur", detail: "Cultural museums, Ratanpur heritage, Achanakmar sanctuary & family leisure at MM Fun City." }
          ],
          regionKey: "Chhattisgarh"
        }
      ]
    }
  },

  treks: [
    {
      id: "aharbal-kounsarnag",
      name: "Aharbal Kounsarnag Trek",
      season: "June to October",
      duration: "3 Nights & 4 Days",
      distance: "46 Kilometers",
      difficulty: "Intermediate",
      price: "₹27,000",
      priceNote: "per person · incl. all taxes",
      image: "assets/images/pkg-trekking.jpg",
      summary:
        "Starting from the thunderous Aharbal Waterfall, ascend through Gurwattan pine trails, Kongwattan meadows, and the vast Mahinag river basin to the sacred glacial Kounsarnag Lake at 4,000 m.",
      included: [
        "Logistics & Support: Professional trek hosts & carriage horses for heavy loads",
        "Camping Equipment: Tents, toilet tents, sleeping bags, walking sticks, rain ponchos & tent lights",
        "Food & Beverages: Hot breakfast, lunch, dinner & trail tea sessions alongside the lake",
        "Transfers: Dedicated Srinagar to Aharbal round-trip transport"
      ],
      itinerary: [
        {
          day: "Day 01",
          title: "Aharbal – Gurwattan – Mahinag (13 km · ~800m gentle ascent)",
          detail:
            "Begin from Gurwattan overlooking the Aharbal river, reaching the vast meadow of Kongwattan in 2 hours and continuing 3–4 hours to camp at the wide Mahinag river basin."
        },
        {
          day: "Day 02",
          title: "Mahinag – Kounsarnag Lake (7 km · up to 4,000 m)",
          detail:
            "Ascend through rocky boulder trails into grassy basins before cresting the final mountain ridge to reveal sacred Kounsarnag Lake framed by glacial peaks. Camp beside the lake."
        },
        {
          day: "Day 03",
          title: "Kounsarnag Lake – Mahinag Transit Camp",
          detail:
            "Retrace the scenic alpine ridge back to Mahinag river basin for an evening bonfire beside gushing mountain waters."
        },
        {
          day: "Day 04",
          title: "Mahinag – Gurwattan – Aharbal & Drive to Srinagar",
          detail:
            "Descend gently through pine forests to Gurwattan and Aharbal, followed by comfortable return transfer to Srinagar."
        }
      ]
    },
    {
      id: "kashmir-great-lakes",
      name: "Kashmir Great Lakes Trek",
      season: "June to October",
      duration: "6 Nights & 7 Days",
      distance: "63 – 72 Kilometers",
      difficulty: "Moderate to Extreme",
      price: "₹19,500",
      priceNote: "per person · incl. all taxes",
      image: "assets/images/trek-great-lakes.jpg",
      summary:
        "Kashmir's crown-jewel alpine expedition from Sonamarg to Naranag—crossing Nichnai & Gadsar Pass (4,200 m) past Vishansar, Kishansar, Gadsar, Satsar, Gangabal & Nundkol Lakes under Mt. Harmukh.",
      included: [
        "Logistics & Support: Experienced trek leaders & pack horses carrying camp loads",
        "Camping Equipment: High-altitude tents, toilet tents, sleeping bags, poles, ponchos & lighting",
        "Food & Beverages: Nutritious hot breakfasts, trail lunches, dinners & evening tea",
        "Transfers: Pickup from Srinagar (9:00 AM) to Sonamarg & return from Naranag to Srinagar"
      ],
      itinerary: [
        {
          day: "Day 01",
          title: "Srinagar to Sonamarg Drive (83 km) & Trek to Table Top (3 km · 2 hrs)",
          detail:
            "9:00 AM pickup from Srinagar for a scenic 3-hour drive to Sonamarg, followed by a 2-hour climb to Table Top meadow overlooking Sonamarg Valley."
        },
        {
          day: "Day 02",
          title: "Table Top – Nichnai Pass (10 km · 6 hrs)",
          detail:
            "Cross Nichnai Pass into an enchanting valley of wildflowers and mountain springs for overnight camping."
        },
        {
          day: "Day 03",
          title: "Nichnai Pass – Vishansar & Kishansar Lake (8 km · 4 hrs)",
          detail:
            "Pass shimmering Vishansar Lake and pitch camp beside emerald Kishansar Lake ringed by amphitheater ridges."
        },
        {
          day: "Day 04",
          title: "Kishansar Lake – Gadsar Pass (4,200 m) – Gadsar Lake (14 km · 7 hrs)",
          detail:
            "Conquer the highest point of the trek at Gadsar Pass (4,200 m) before descending through alpine flower meadows to Gadsar Lake."
        },
        {
          day: "Day 05",
          title: "Gadsar Lake – Satsar Lakes (12 km · 5 hrs)",
          detail:
            "Traverse serene alpine bowls to the seven interconnected glacial tarns of Satsar."
        },
        {
          day: "Day 06",
          title: "Satsar – Gangabal & Nundkol Twin Lakes (10 km · 5 hrs)",
          detail:
            "Reach Gangabal—the largest lake on the trail—and camp beside neighboring Nundkol Lake right at the foot of majestic Harmukh Peak."
        },
        {
          day: "Day 07",
          title: "Nundkol Lake – Naranag Descent (13 km · 5 hrs) & Return to Srinagar",
          detail:
            "Descend through high pastures and ancient pine forests into historic Naranag village, where your vehicle awaits to return to Srinagar."
        }
      ]
    },
    {
      id: "kolahoi-glacier",
      name: "Kolahoi Glacier Trek",
      season: "June to October",
      duration: "5 Nights & 6 Days",
      distance: "18+ km Glacier Trail",
      difficulty: "Moderate to Extreme",
      price: "₹14,500",
      priceNote: "per person · incl. all taxes",
      image: "assets/images/trek-kolahoi.jpg",
      summary:
        "Journey from Pahalgam and Aru hamlet along the Lidder River, starry Lidderwat meadows, and Chainbal Waterfall to the dramatic 5-km hanging Kolahoi Glacier—'The Kashmir Matterhorn'.",
      included: [
        "Logistics & Support: Certified high-altitude guides & carriage horses",
        "Camping Equipment: Tents, toilet tents, sub-zero sleeping bags, trekking poles, ponchos & lamps",
        "Food & Beverages: Full-board hot camp meals & energizing trail tea",
        "Transfers: Srinagar – Pahalgam – Aru round-trip road transfers"
      ],
      itinerary: [
        {
          day: "Day 01",
          title: "Srinagar to Pahalgam & Aru Base Camp (115 km drive)",
          detail:
            "Scenic drive from Srinagar via Pahalgam to Aru hamlet on the banks of the Lidder River. Overnight riverside camping."
        },
        {
          day: "Day 02",
          title: "Aru to Lidderwat Meadow (11 km gentle ascent)",
          detail:
            "Ascend through pine, fir, and deodar forests to Lidderwat where glacial streams from Satlanjan and Tarsar converge—renowned for crystal-clear stargazing."
        },
        {
          day: "Day 03",
          title: "Lidderwat to Satlanjan via Dudhsar & Chainbal Waterfall",
          detail:
            "Follow milky-white mountain streams past Susrin and the towering cloud-fed Chainbal Waterfall to camp at Satlanjan."
        },
        {
          day: "Day 04",
          title: "Satlanjan to Kolahoi Glacier Viewpoint (11,000+ ft)",
          detail:
            "Trek into the glacial valley to witness the 5-km hanging Kolahoi Glacier beneath Mt. Kolahoi ('The Kashmir Matterhorn'), primary source of the Jhelum River."
        },
        {
          day: "Day 05",
          title: "Kolahoi Glacier Base back to Satlanjan (3–4 hrs)",
          detail:
            "Retrace boulder trails back into the tranquil alpine meadows of Satlanjan for a restful final mountain camp."
        },
        {
          day: "Day 06",
          title: "Satlanjan to Aru Descent & Drive to Srinagar",
          detail:
            "Descend 2,492 ft across open forested valleys and energizing streams back to Aru by early afternoon for your return drive to Srinagar."
        }
      ]
    }
  ],

  trekRequirements: {
    gear: [
      "Proper hiking boots with firm grip and ankle support",
      "Lightweight, moisture-wicking trekking apparel",
      "Warm fleece layer and down jacket for cold alpine nights",
      "Waterproof and windproof shell jacket and trousers",
      "Sun hat, UV sunglasses, SPF sunscreen & lip balm",
      "Headlamp or flashlight with spare batteries, insect repellent & trekking poles"
    ],
    health: [
      "Healthy resting pulse rate between 60 and 90 beats per minute",
      "Resting blood pressure ideally 100–130 mm Hg systolic and 75–85 mm Hg diastolic",
      "Normal resting respiratory rate between 12 and 20 breaths per minute",
      "Free from uncontrolled Diabetes Mellitus, Bronchial Asthma, Epilepsy, Heart Conditions, Very High BP, or liver/kidney ailments (no pacemaker implant)"
    ]
  },

  womenPackage: {
    title: "Exclusive All-Women Kashmir Package",
    duration: "04 Nights · 05 Days",
    strikePrice: "₹25,000",
    price: "₹9,500",
    unit: "per person",
    contacts: "+91-9971782785 / +91-9797128794 · sales@alhabibtravels.com",
    itinerary: [
      {
        day: "Day 01",
        title: "Arrival at Srinagar Airport, Dal Lake Shikara Ride & Nishat Mughal Garden",
        detail:
          "Warm airport pickup and hotel check-in. Glide across tranquil Dal Lake on a traditional wooden Shikara (1 hr) and explore the 16th-century terraced Nishat Garden built by Asif Khan overlooking the Zabarwan range."
      },
      {
        day: "Day 02",
        title: "Heritage Downtown Srinagar & Local Bazaar Exploration",
        detail:
          "After breakfast, explore Downtown Srinagar's centuries-old architecture, shrines, wooden heritage landmarks, and vibrant craft and spice bazaars. Overnight at hotel."
      },
      {
        day: "Day 03",
        title: "Day Excursion to Gulmarg (8,700 ft)",
        detail:
          "Full-day mountain escape to snow-draped Gulmarg—discover historic 1902 St. Mary's Church, the world-famous high-altitude Golf Course, sweeping Himalayan vistas, and optional Gondola access toward Alpather."
      },
      {
        day: "Day 04",
        title: "Pahalgam Valleys (Betaab, Aru & Chandanwari) + Deluxe Houseboat Stay",
        detail:
          "Scenic drive to Pahalgam (2,130 m) with visits to Betaab Valley, Aru Valley, and Chandanwari (union cab optional on-spot). Return to Srinagar for an unforgettable overnight stay in a traditional handcrafted Anjali-wood Deluxe Houseboat."
      },
      {
        day: "Day 05",
        title: "Srinagar Airport Departure Transfer",
        detail:
          "Comfortable drop-off at Srinagar Airport according to your flight schedule with cherished memories."
      }
    ],
    inclusions: [
      "Arrival & Departure Airport Transfers",
      "Comfortable Transportation (sharing basis)",
      "1-Hour Shikara Ride over Dal Lake",
      "Driver Allowance, Toll Taxes & Parking",
      "03 Nights Hotel Accommodation (sharing basis)",
      "01 Night Deluxe Houseboat Accommodation",
      "Daily Breakfast & Dinner Included",
      "24/7 Local Safety & Tour Coordinator Support"
    ],
    exclusions: [
      "Personal Expenses & Shopping",
      "Monument / Garden Entrance Fees",
      "Gulmarg Gondola Cable Car Tickets",
      "Local Union Cabs in Pahalgam",
      "Pony / Sledge / Joy Rides"
    ]
  },

  offbeatPlaces: [
    {
      id: "gurez",
      category: "gurez",
      region: "North Kashmir · Dawar & Tulail",
      name: "Gurez Valley & Habba Khatoon",
      image: "assets/images/offbeat-gurez.jpg",
      spots: ["Kishanganga River", "Habba Khatoon Peak", "Dawar", "Tulail", "Chakwali", "Angaikot"],
      description:
        "An unspoiled Himalayan valley of log-wood villages, emerald Kishanganga waters, and the pyramid silhouette of Habba Khatoon Peak—complete with our 5-day Dawar itinerary.",
      itinerary: [
        { day: "Day 01", title: "Srinagar to Dawar", detail: "Scenic mountain pass drive from Srinagar with local sightseeing and overnight stay in Dawar." },
        { day: "Day 02", title: "Tulail & Habba Khatoon Peak", detail: "Day excursion through Tulail valley and the iconic Habba Khatoon Peak & spring. Stay at Dawar." },
        { day: "Day 03", title: "Day Trip to Chakwali", detail: "Explore remote borderland meadows and wooden hamlets up to Chakwali. Stay at Dawar." },
        { day: "Day 04", title: "Angaikot & Riverside Campsite", detail: "Day trip to Angaikot viewpoint and serene riverside camping landscapes. Stay at Dawar." },
        { day: "Day 05", title: "Departure to Srinagar", detail: "Return drive from Dawar back to Srinagar." }
      ]
    },
    {
      id: "ganderbal",
      category: "ganderbal",
      region: "Ganderbal District · Sindh Valley",
      name: "Ganderbal Meadows & Sindh River",
      image: "assets/images/offbeat-ganderbal.jpg",
      spots: ["Chattergul (Kangan)", "Gotli Bagh / Preng", "Wayil Sindh Bank"],
      description:
        "Verdant terraced fields in Chattergul (Kangan Tehsil), tranquil mountain views across Gotli Bagh and Preng, and pine-covered picnic banks along the rushing Sindh River at Wayil."
    },
    {
      id: "srinagar-outskirts",
      category: "srinagar",
      region: "Hidden Srinagar Foothills",
      name: "Faqeer Gujri, Dhara & Astan Marg",
      image: "assets/images/offbeat-srinagar.jpg",
      spots: ["Faqeer Gujri", "Dhara Village", "Astan Marg Viewpoint"],
      description:
        "Tucked just above Srinagar away from city crowds—pastoral foothill villages of Faqeer Gujri and Dhara leading to Astan Marg's sweeping mountain flora and paragliding vistas."
    },
    {
      id: "kokernag-verinag-achabal",
      category: "untouched",
      region: "Anantnag · Royal Springs Circuit",
      name: "Kokernag, Verinag & Achabal",
      image: "assets/images/offbeat-kokernag.jpg",
      spots: ["Kokernag Spring", "Verinag Mughal Garden", "Achabal Gardens"],
      description:
        "South Kashmir's therapeutic crystal springs of Kokernag, the octagonal Verinag Mughal spring (source of the Jhelum River), and Emperor Jahangir's 17th-century Achabal terraced fountains."
    },
    {
      id: "chatpal-sinthan",
      category: "untouched",
      region: "Kulgam & Kishtwar High Pass",
      name: "Chatpal & Sinthan Top (12,170 ft)",
      image: "assets/images/offbeat-verinag.jpg",
      spots: ["Chatpal Valley", "Sinthan Top (3,710 m)", "Hairpin Alpine Drive"],
      description:
        "Solitude amidst Chatpal's wildflower meadows and pine streams, paired with the exhilarating climb to Sinthan Top at 3,710 meters for 360° Himalayan panoramas."
    },
    {
      id: "aharbal-falls",
      category: "untouched",
      region: "Kulgam · Pir Panjal Foothills",
      name: "Aharbal Waterfall",
      image: "assets/images/offbeat-aharbal.jpg",
      spots: ["25m Waterfall Gorge", "Alpine Pine Forests", "Kounsarnag Trailhead"],
      description:
        "Known as the 'Niagara of Kashmir', Aharbal plunges 25 meters (82 feet) through a dramatic rocky gorge framed by dense fir forests and snow-dusted Pir Panjal peaks."
    }
  ],

  itineraries: [
    // Jammu & Kashmir
    { name: "Classic Srinagar & Pahalgam Escape", region: "Jammu & Kashmir", zone: "North", days: "03 Days", pickup: "Srinagar", summary: "Srinagar (Arrive) – Srinagar (02 Nights) – Day Trip Pahalgam – Srinagar Drop", drop: "Srinagar" },
    { name: "Srinagar, Gulmarg & Pahalgam Highlights", region: "Jammu & Kashmir", zone: "North", days: "04 Days", pickup: "Srinagar", summary: "Srinagar (Arrive) – Srinagar (All Nights) – Day Trip Gulmarg – Day Trip Pahalgam – Srinagar Drop", drop: "Srinagar" },
    { name: "Kashmir Valleys Explorer", region: "Jammu & Kashmir", zone: "North", days: "05 Days", pickup: "Srinagar", summary: "Srinagar (Arrive) – Srinagar (All Nights) – Day Trip Gulmarg – Same Day Pahalgam – Srinagar Drop", drop: "Srinagar" },
    { name: "Scenic Srinagar, Pahalgam & Gulmarg Stay", region: "Jammu & Kashmir", zone: "North", days: "06 Days", pickup: "Srinagar", summary: "Srinagar (Arrive) – Srinagar (04 Nights) – Pahalgam (01 Night) – Day Trip Gulmarg – Srinagar Drop", drop: "Srinagar" },
    { name: "Grand Kashmir — Srinagar, Sonamarg, Pahalgam & Gulmarg", region: "Jammu & Kashmir", zone: "North", days: "07 Days", pickup: "Srinagar", summary: "Srinagar (Arrive) – Srinagar (03 Nights) – Day Trip Sonamarg – Pahalgam (02 Nights) – Gulmarg (01 Night) – Srinagar Drop", drop: "Srinagar" },
    { name: "Complete Kashmir & Dodhpathri Odyssey", region: "Jammu & Kashmir", zone: "North", days: "08 Days", pickup: "Srinagar", summary: "Srinagar (Arrive) – Pahalgam (02 Nights) – Gulmarg (02 Nights) – Srinagar (03 Nights) – Day Trip Sonamarg – Day Trip Dodhpathri – Srinagar Drop", drop: "Srinagar" },

    // Ladakh
    { name: "Leh & Sham Valley Getaway", region: "Ladakh", zone: "North", days: "03 Days", pickup: "Leh", summary: "Leh (Arrive) – Leh (02 Nights) – Day Trip Sham Valley – Leh Drop", drop: "Leh" },
    { name: "Leh, Sham Valley & Pangong Lake Tour", region: "Ladakh", zone: "North", days: "04 Days", pickup: "Leh", summary: "Leh (Arrive) – Leh (All Nights) – Day Trip Sham Valley – Day Trip Pangong Lake – Leh Drop", drop: "Leh" },
    { name: "Ladakh Highlights — Pangong & Khardungla Pass", region: "Ladakh", zone: "North", days: "05 Days", pickup: "Leh", summary: "Leh (Arrive) – Leh (All Nights) – Day Trip Sham Valley – Day Trip Pangong Lake – Day Trip Khardungla Pass – Leh Drop", drop: "Leh" },

    // Rajasthan
    { name: "Jaipur Pink City Royal Escape", region: "Rajasthan", zone: "North", days: "04 Days", pickup: "Delhi", summary: "Delhi (Arrive) – Jaipur (03 Nights) – Day Trip to Pink City", drop: "Delhi" },
    { name: "Jaipur & Ranthambore Wildlife Circuit", region: "Rajasthan", zone: "North", days: "05 Days", pickup: "Delhi", summary: "Delhi (Arrive) – Jaipur (03 Nights) – Ranthambore (01 Night)", drop: "Delhi" },
    { name: "Royal Rajasthan — Jaipur, Ranthambore & Udaipur", region: "Rajasthan", zone: "North", days: "06 Days", pickup: "Delhi", summary: "Delhi (Arrive) – Jaipur (03 Nights) – Ranthambore (01 Night) – Udaipur (01 Night) – Pink City & Royal Forts Tour", drop: "Delhi" },

    // Kerala
    { name: "Munnar Tea Hills Retreat", region: "Kerala", zone: "South", days: "03 Days", pickup: "Cochin", summary: "Cochin (Arrive) – Munnar (02 Nights) – Day Trip Munnar – Cochin Drop", drop: "Cochin" },
    { name: "Munnar & Thekkady Spice Highlands", region: "Kerala", zone: "South", days: "04 Days", pickup: "Cochin", summary: "Cochin (Arrive) – Munnar (02 Nights) – Thekkady (01 Night) – Day Trip Thekkady & Munnar – Cochin Drop", drop: "Cochin" },
    { name: "Kerala Highlights — Munnar, Thekkady & Trivandrum", region: "Kerala", zone: "South", days: "05 Days", pickup: "Cochin", summary: "Cochin (Arrive) – Munnar & Thekkady – Day Trip Thiruvananthapuram – Cochin Drop", drop: "Cochin" },

    // Goa
    { name: "Classic Goa Sun & Heritage Break", region: "Goa", zone: "South", days: "03 Days", pickup: "Goa", summary: "Goa (Arrive) – Goa (02 Nights) – Day Trip Locally – Goa Drop", drop: "Goa" },
    { name: "Goa Beaches & Old Goa Explorer", region: "Goa", zone: "South", days: "04 Days", pickup: "Goa", summary: "Goa (Arrive) – Goa (All Nights) – Local Heritage & Beaches Day Trips – Goa Drop", drop: "Goa" },
    { name: "Complete North & South Goa Coastal Holiday", region: "Goa", zone: "South", days: "05 Days", pickup: "Goa", summary: "Goa (Arrive) – Goa (All Nights) – North Goa – South Goa – Coastal Beaches – Goa Drop", drop: "Goa" },

    // Mumbai / Maharashtra
    { name: "Mumbai Harbour & Colaba Heritage Break", region: "Mumbai", zone: "South", days: "03 Days", pickup: "Mumbai", summary: "Mumbai (Arrive) – (02 Nights) – Day Trip Gateway of India & Colaba", drop: "Mumbai" },
    { name: "Mumbai Landmarks & Juhu Sunset Tour", region: "Mumbai", zone: "South", days: "04 Days", pickup: "Mumbai", summary: "Mumbai (Arrive) – (All Nights) – Gateway of India – Sunset at Juhu Beach – Mumbai Drop", drop: "Mumbai" },
    { name: "Grand Mumbai Cultural & Coastal Experience", region: "Mumbai", zone: "South", days: "05 Days", pickup: "Mumbai", summary: "Mumbai (Arrive) – (All Nights) – Gateway of India – Sunset at Juhu – Cultural Heritage Tour – Mumbai Drop", drop: "Mumbai" },

    // West Bengal & Sikkim Circuit
    { name: "Gangtok & Tsomgo Lake Escape", region: "West Bengal", zone: "East", days: "03 Days", pickup: "Darjeeling", summary: "Darjeeling (Arrive) – Gangtok (02 Nights) – Day Trip Tsomgo Lake", drop: "Darjeeling" },
    { name: "Gangtok & Darjeeling Himalayan Retreat", region: "West Bengal", zone: "East", days: "04 Days", pickup: "Darjeeling", summary: "Darjeeling (Arrive) – Gangtok (02 Nights) – Darjeeling (01 Night) – Day Trip Tsomgo Lake", drop: "Darjeeling" },
    { name: "Grand Darjeeling, Gangtok & Namchi Circuit", region: "West Bengal", zone: "East", days: "05 Days", pickup: "Darjeeling", summary: "Darjeeling (Arrive) – Gangtok (02 Nights) – Darjeeling (02 Nights) – Day Trip Tsomgo Lake – Day Trip Namchi", drop: "Darjeeling" },

    // Bihar
    { name: "Bihar & Golghar Heritage Break", region: "Bihar", zone: "East", days: "03 Days", pickup: "Bihar", summary: "Bihar (Arrive) – Bihar (02 Nights) – Day Trip Golghar – Bihar Drop", drop: "Bihar" },
    { name: "Bihar Cultural & Historical Tour", region: "Bihar", zone: "East", days: "04 Days", pickup: "Bihar", summary: "Bihar (Arrive) – Bihar (03 Nights) – Local Heritage Sightseeing – Day Trip Golghar – Bihar Drop", drop: "Bihar" },
    { name: "Patna & Ancient Bihar Heritage Circuit", region: "Bihar", zone: "East", days: "05 Days", pickup: "Bihar", summary: "Bihar (Arrive) – Bihar (03 Nights) – Patna (01 Night) – Local Sightseeing & Golghar – Bihar Drop", drop: "Bihar" },

    // Jharkhand
    { name: "Purulia Hills Scenic Escape", region: "Jharkhand", zone: "East", days: "03 Days", pickup: "Jharkhand", summary: "Jharkhand (Arrive) – Purulia (02 Nights) – Day Trip to Purulia", drop: "Jharkhand" },
    { name: "Purulia & Ranchi Waterfalls Tour", region: "Jharkhand", zone: "East", days: "04 Days", pickup: "Jharkhand", summary: "Jharkhand (Arrive) – Purulia (02 Nights) – Ranchi (01 Night) – Day Trip to Purulia", drop: "Jharkhand" },
    { name: "Jharkhand Highlands — Purulia, Ranchi & Netarhat", region: "Jharkhand", zone: "East", days: "05 Days", pickup: "Jharkhand", summary: "Jharkhand (Arrive) – Purulia (02 Nights) – Ranchi (01 Night) – Netarhat (01 Night) – Day Trip to Purulia", drop: "Jharkhand" },

    // Udaipur
    { name: "Udaipur City of Lakes Escape", region: "Udaipur", zone: "West", days: "03 Days", pickup: "Udaipur", summary: "Udaipur (Arrive) – Udaipur (02 Nights) – Day Trip City & Lakes", drop: "Udaipur" },
    { name: "Udaipur Palaces & Kumbhalgarh Fort Tour", region: "Udaipur", zone: "West", days: "04 Days", pickup: "Udaipur", summary: "Udaipur (Arrive) – Udaipur (03 Nights) – City Palace Tour – Day Trip Kumbhalgarh Fort", drop: "Udaipur" },
    { name: "Royal Mewar — Udaipur, Kumbhalgarh & Chittorgarh", region: "Udaipur", zone: "West", days: "05 Days", pickup: "Udaipur", summary: "Udaipur (Arrive) – Udaipur (03 Nights) – City Tour – Kumbhalgarh Fort – Day Trip Chittorgarh", drop: "Udaipur" },

    // Gujarat
    { name: "Ahmedabad & Diu Coastal Break", region: "Gujarat", zone: "West", days: "03 Days", pickup: "Ahmedabad", summary: "Ahmedabad (Arrive) – (02 Nights) – Coastal Trip to Diu", drop: "Ahmedabad" },
    { name: "Diu Shores & Sacred Dwarka Circuit", region: "Gujarat", zone: "West", days: "04 Days", pickup: "Ahmedabad", summary: "Ahmedabad (Arrive) – Diu (02 Nights) – Dwarka (01 Night) – Diu & Dwarka Circuit", drop: "Ahmedabad" },
    { name: "Grand Gujarat — Ahmedabad, Diu & Extended Dwarka", region: "Gujarat", zone: "West", days: "05 Days", pickup: "Ahmedabad", summary: "Ahmedabad (Arrive) – Diu (02 Nights) – Dwarka (02 Nights) – Extended Diu & Dwarka Circuit", drop: "Ahmedabad" },

    // Chhattisgarh
    { name: "Jagdalpur & Bastar Heartland Break", region: "Chhattisgarh", zone: "West", days: "03 Days", pickup: "Raipur", summary: "Raipur (Arrive) – Jagdalpur (02 Nights) – Bastar Exploration", drop: "Raipur" },
    { name: "Bastar & Chitrakote Waterfalls Tour", region: "Chhattisgarh", zone: "West", days: "04 Days", pickup: "Raipur", summary: "Raipur (Arrive) – Jagdalpur (03 Nights) – Day Trip to Chitrakote Falls", drop: "Raipur" },
    { name: "Complete Chhattisgarh — Bastar & Chitrakote Retreat", region: "Chhattisgarh", zone: "West", days: "05 Days", pickup: "Raipur", summary: "Raipur (Arrive) – Jagdalpur (03 Nights) – Extended Heritage Stay (01 Night) – Chitrakote Falls", drop: "Raipur" }
  ],

  valuesTabs: {
    philosophy: {
      title: "Our Philosophy",
      paragraphs: [
        "At Alhabib Travels, we understand that travel is not just about reaching a destination; it is about creating memories that last a lifetime. We take immense pride in being sensitive and caring towards our clients—your satisfaction, security, and happiness are our topmost priorities.",
        "From the moment you embark on your journey with us, every detail is handled with personal attention tailored to your specific requirements."
      ]
    },
    mission: {
      title: "Our Mission",
      paragraphs: [
        "We believe every day of your trip should be lived to the fullest. That is why we curate exciting outdoor activities, immersive cultural encounters, spiritual pilgrimages, and tranquil retreats for all ages and interests.",
        "Discover Kashmir and India with Alhabib Travels—where satisfaction, security, and happiness are our guiding principles while we take care of every logistical detail."
      ]
    },
    objective: {
      title: "Our Objective",
      paragraphs: [
        "We treat every traveler as part of our extended family, building lasting relationships rooted in trust, integrity, and genuine care.",
        "From hand-picking vetted accommodations that fit your preferences to arranging seamless airport, railway, and luxury coach transfers, our travel specialists ensure a completely stress-free journey."
      ]
    },
    values: {
      title: "Values & Future Vision",
      paragraphs: [
        "Beyond crafting extraordinary leisure, corporate, and spiritual journeys, Alhabib Travels is deeply committed to regional economic growth and youth employment across Jammu & Kashmir.",
        "We have invested substantially in upcoming luxury hotels and hospitality infrastructure—currently 50% complete—designed to welcome guests with world-class amenities while creating meaningful career opportunities for local youth."
      ]
    }
  },

  reviews: [
    {
      name: "Savitha Honaganahalli",
      date: "August 1, 2025",
      initials: "SH",
      text: "Amazing Amarnath Trip with Al-Habib Travels! 100% genuine and friendly travel agents. Me and my mom (just two ladies) went to Amarnath and the arrangements were hassle-free right from airport pick-up to timely darshan and drop. Driver Hilal Bhai and tour guide Javid were so kind throughout."
    },
    {
      name: "Savitha HL",
      date: "June 24, 2025",
      initials: "SL",
      text: "Had an incredible Meghalaya trip. Thanks to Al-Habib Travels for arranging the entire itinerary within a day's time after our Ladakh flights were cancelled! Our driver took us to hidden gems across Meghalaya. Looking forward to traveling with them again."
    },
    {
      name: "Vikas Dave",
      date: "May 13, 2025",
      initials: "VD",
      text: "A Wonderful Experience! Went on a tour covering Rishikesh, Mussoorie, Dehradun, and Delhi—everything was well-organized with a brand-new Force Urbania luxury coach, great seats, and powerful A/C. Guide Mr. Anus was friendly, knowledgeable, and made everyone comfortable."
    },
    {
      name: "Priya Verma",
      date: "May 5, 2025",
      initials: "PV",
      text: "After researching many Kashmir travel agencies online, we chose Alhabib Travels. Mr. Younis explained everything clearly and arranged our stay and transport. Greeted warmly at the railway station by driver Mr. Suresh and polite guide Mr. Javed—truly hassle-free and trustworthy!"
    },
    {
      name: "Pon Ravi",
      date: "April 29, 2025",
      initials: "PR",
      text: "Our 6-day family trip covering Srinagar, Sonamarg, Gulmarg, and Pahalgam was arranged by Mr. Younis. Hotels were safe and excellent. Driver-cum-guide Mr. Waseem prioritized our family's safety above all else and Mr. Younis arranged alternate Srinagar rooms immediately. Truly grateful."
    },
    {
      name: "Dr. Arpitha B",
      date: "March 18, 2025",
      initials: "AB",
      text: "My family and I had an unforgettable Kashmir experience—from stays to sightseeing and snow adventures, everything was seamless! Special thanks to energetic guide Javed Bhai and Younis Sir for giving us memories we will cherish forever."
    },
    {
      name: "Nithesh Poojary Marnad",
      date: "March 18, 2025",
      initials: "NP",
      text: "Top-notch arrangements in Kashmir that exceeded expectations! Special mention to our guide Javed, who went above and beyond and became a true friend, and kudos to Younis Sir for leading such a dedicated team."
    },
    {
      name: "Dr. Srilekhaa",
      date: "March 8, 2025",
      initials: "DS",
      text: "Professional agency that answered every question before our Kashmir vacation and kept our itinerary flexible so we could explore at our own pace. Patient, knowledgeable driver—highly recommended!"
    }
  ],

  policies: {
    privacy: {
      title: "Privacy & Return Policy",
      updated: "Last Updated: June 09, 2024",
      sections: [
        {
          heading: "Cancellation & Refund (Return) Policy",
          body: "The standard refund turnaround window is 25 days prior to the date of booking. If a cancellation is requested within 25 days of booking, a 50% cancellation charge applies; if requested within 5 days of the travel/booking date, a 100% cancellation charge applies. Approved refunds are credited back to the original payment method within 7 business days."
        },
        {
          heading: "Personal Data Collection & Use",
          body: "Alhabib Travels (Karanagar, Srinagar, Jammu & Kashmir) collects only information voluntarily shared—such as First Name, Last Name, Email Address, Phone Number, and travel preferences—alongside standard diagnostic Usage Data and essential session/functionality cookies to fulfill bookings, provide itinerary updates, and improve customer support."
        },
        {
          heading: "Data Protection & Contact",
          body: "We never sell your personal information. For any questions regarding privacy, cancellations, or refund status, please contact sales@alhabibtravels.com or call +91-9971782785 / +91-9797128794."
        }
      ]
    },
    terms: {
      title: "Terms & Conditions",
      updated: "Official Website Terms · www.alhabibtravels.com",
      sections: [
        {
          heading: "Intellectual Property & Permitted Use",
          body: "Unless otherwise stated, Alhabib Travels and its licensors own the intellectual property rights for all material on this website. Visitors may view and print itineraries for personal travel planning, and must not republish, sell, rent, reproduce, or redistribute site content commercially without written consent."
        },
        {
          heading: "Cookies & Hyperlinking",
          body: "This website uses essential and preference cookies in accordance with our Privacy Policy. Search engines, news outlets, and accredited directories may link truthfully to our homepage without implying endorsement; use of the Alhabib Travels logo or framing pages inside iFrames requires prior written permission."
        },
        {
          heading: "Bookings & Liability Disclaimer",
          body: "Itineraries, seasonal road/pass access (such as high-altitude treks, Gondola operations, or local union cabs), and hotel availability remain subject to weather and prevailing local regulations in Jammu & Kashmir and across India."
        }
      ]
    }
  }
};
