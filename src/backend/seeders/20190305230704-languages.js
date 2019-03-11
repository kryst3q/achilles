'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Languages', [
          {
              name:"Afar",
              code:"aa",
              createdAt: new Date(),
              updatedAt: new Date()
          },
          {
              name:"Abkhazian",
              code:"ab",
              createdAt: new Date(),
              updatedAt: new Date()
          },
          {
              name:"Avestan",
              code:"ae",
              createdAt: new Date(),
              updatedAt: new Date()
          },
          {
              name:"Afrikaans",
              code:"af",
              createdAt: new Date(),
              updatedAt: new Date()
          },
          {
              name:"Akan",
              code:"ak",
              createdAt: new Date(),
              updatedAt: new Date()
          },
          {
              name:"Amharic",
              code:"am",
              createdAt: new Date(),
              updatedAt: new Date()
          },
          {
              name:"Aragonese",
              code:"an",
              createdAt: new Date(),
              updatedAt: new Date()
          },
          {
              name:"Arabic",
              code:"ar",
              createdAt: new Date(),
              updatedAt: new Date()
          },
          {
              name:"Assamese",
              code:"as",
              createdAt: new Date(),
              updatedAt: new Date()
          },
          {
              name:"Avaric",
              code:"av",
              createdAt: new Date(),
              updatedAt: new Date()
          },
          {
              name:"Aymara",
              code:"ay",
              createdAt: new Date(),
              updatedAt: new Date()
          },
          {
              name:"Azerbaijani",
              code:"az",
              createdAt: new Date(),
              updatedAt: new Date()
          },
          {
              name:"Bashkir",
              code:"ba",
              createdAt: new Date(),
              updatedAt: new Date()
          },
          {
              name:"Belarusian",
              code:"be",
              createdAt: new Date(),
              updatedAt: new Date()
          },
          {
              name:"Bulgarian",
              code:"bg",
              createdAt: new Date(),
              updatedAt: new Date()
          },
          {
              name:"Bihari languages",
              code:"bh",
              createdAt: new Date(),
              updatedAt: new Date()
          },
          {
              name:"Bislama",
              code:"bi",
              createdAt: new Date(),
              updatedAt: new Date()
          },
          {
              name:"Bambara",
              code:"bm",
              createdAt: new Date(),
              updatedAt: new Date()
          },
          {
              name:"Bengali",
              code:"bn",
              createdAt: new Date(),
              updatedAt: new Date()
          },
          {
              name:"Tibetan",
              code:"bo",
              createdAt: new Date(),
              updatedAt: new Date()
          },
          {
              name:"Breton",
              code:"br",
              createdAt: new Date(),
              updatedAt: new Date()
          },
          {
              name:"Bosnian",
              code:"bs",
              createdAt: new Date(),
              updatedAt: new Date()
          },
          {
              name:"Catalan; Valencian",
              code:"ca",
              createdAt: new Date(),
              updatedAt: new Date()
          },
          {
              name:"Chechen",
              code:"ce",
              createdAt: new Date(),
              updatedAt: new Date()
          },
          {
              name:"Chamorro",
              code:"ch",
              createdAt: new Date(),
              updatedAt: new Date()
          },
          {
              name:"Corsican",
              code:"co",
              createdAt: new Date(),
              updatedAt: new Date()
          },
          {
              name:"Cree",
              code:"cr",
              createdAt: new Date(),
              updatedAt: new Date()
          },
          {
              name:"Czech",
              code:"cs",
              createdAt: new Date(),
              updatedAt: new Date()
          },
          {
              name:"Church Slavic; Old Slavonic; Church Slavonic; Old Bulgarian; Old Church Slavonic",
              code:"cu",
              createdAt: new Date(),
              updatedAt: new Date()
          },
          {
              name:"Chuvash",
              code:"cv",
              createdAt: new Date(),
              updatedAt: new Date()
          },
          {
              name:"Welsh",
              code:"cy",
              createdAt: new Date(),
              updatedAt: new Date()
          },
          {
              name:"Danish",
              code:"da",
              createdAt: new Date(),
              updatedAt: new Date()
          },
          {
              name:"German",
              code:"de",
              createdAt: new Date(),
              updatedAt: new Date()
          },
          {
              name:"Divehi; Dhivehi; Maldivian",
              code:"dv",
              createdAt: new Date(),
              updatedAt: new Date()
          },
          {
              name:"Dzongkha",
              code:"dz",
              createdAt: new Date(),
              updatedAt: new Date()
          },
          {
              name:"Ewe",
              code:"ee",
              createdAt: new Date(),
              updatedAt: new Date()
          },
          {
              name:"Greek, Modern (1453-)",
              code:"el",
              createdAt: new Date(),
              updatedAt: new Date()
          },
          {
              name:"English",
              code:"en",
              createdAt: new Date(),
              updatedAt: new Date()
          },
          {
              name:"Esperanto",
              code:"eo",
              createdAt: new Date(),
              updatedAt: new Date()
          },
          {
              name:"Spanish; Castilian",
              code:"es",
              createdAt: new Date(),
              updatedAt: new Date()
          },
          {
              name:"Estonian",
              code:"et",
              createdAt: new Date(),
              updatedAt: new Date()
          },
          {
              name:"Basque",
              code:"eu",
              createdAt: new Date(),
              updatedAt: new Date()
          },
          {
              name:"Persian",
              code:"fa",
              createdAt: new Date(),
              updatedAt: new Date()
          },
          {
              name:"Fulah",
              code:"ff",
              createdAt: new Date(),
              updatedAt: new Date()
          },
          {
              name:"Finnish",
              code:"fi",
              createdAt: new Date(),
              updatedAt: new Date()
          },
          {
              name:"Fijian",
              code:"fj",
              createdAt: new Date(),
              updatedAt: new Date()
          },
          {
              name:"Faroese",
              code:"fo",
              createdAt: new Date(),
              updatedAt: new Date()
          },
          {
              name:"French",
              code:"fr",
              createdAt: new Date(),
              updatedAt: new Date()
          },
          {
              name:"Western Frisian",
              code:"fy",
              createdAt: new Date(),
              updatedAt: new Date()
          },
          {
              name:"Irish",
              code:"ga",
              createdAt: new Date(),
              updatedAt: new Date()
          },
          {
              name:"Gaelic; Scottish Gaelic",
              code:"gd",
              createdAt: new Date(),
              updatedAt: new Date()
          },
          {
              name:"Galician",
              code:"gl",
              createdAt: new Date(),
              updatedAt: new Date()
          },
          {
              name:"Guarani",
              code:"gn",
              createdAt: new Date(),
              updatedAt: new Date()
          },
          {
              name:"Gujarati",
              code:"gu",
              createdAt: new Date(),
              updatedAt: new Date()
          },
          {
              name:"Manx",
              code:"gv",
              createdAt: new Date(),
              updatedAt: new Date()
          },
          {
              name:"Hausa",
              code:"ha",
              createdAt: new Date(),
              updatedAt: new Date()
          },
          {
              name:"Hebrew",
              code:"he",
              createdAt: new Date(),
              updatedAt: new Date()
          },
          {
              name:"Hindi",
              code:"hi",
              createdAt: new Date(),
              updatedAt: new Date()
          },
          {
              name:"Hiri Motu",
              code:"ho",
              createdAt: new Date(),
              updatedAt: new Date()
          },
          {
              name:"Croatian",
              code:"hr",
              createdAt: new Date(),
              updatedAt: new Date()
          },
          {
              name:"Haitian; Haitian Creole",
              code:"ht",
              createdAt: new Date(),
              updatedAt: new Date()
          },
          {
              name:"Hungarian",
              code:"hu",
              createdAt: new Date(),
              updatedAt: new Date()
          },
          {
              name:"Armenian",
              code:"hy",
              createdAt: new Date(),
              updatedAt: new Date()
          },
          {
              name:"Herero",
              code:"hz",
              createdAt: new Date(),
              updatedAt: new Date()
          },
          {
              name:"Interlingua (International Auxiliary Language Association)",
              code:"ia",
              createdAt: new Date(),
              updatedAt: new Date()
          },
          {
              name:"Indonesian",
              code:"id",
              createdAt: new Date(),
              updatedAt: new Date()
          },
          {
              name:"Interlingue; Occidental",
              code:"ie",
              createdAt: new Date(),
              updatedAt: new Date()
          },
          {
              name:"Igbo",
              code:"ig",
              createdAt: new Date(),
              updatedAt: new Date()
          },
          {
              name:"Sichuan Yi; Nuosu",
              code:"ii",
              createdAt: new Date(),
              updatedAt: new Date()
          },
          {
              name:"Inupiaq",
              code:"ik",
              createdAt: new Date(),
              updatedAt: new Date()
          },
          {
              name:"Ido",
              code:"io",
              createdAt: new Date(),
              updatedAt: new Date()
          },
          {
              name:"Icelandic",
              code:"is",
              createdAt: new Date(),
              updatedAt: new Date()
          },
          {
              name:"Italian",
              code:"it",
              createdAt: new Date(),
              updatedAt: new Date()
          },
          {
              name:"Inuktitut",
              code:"iu",
              createdAt: new Date(),
              updatedAt: new Date()
          },
          {
              name:"Japanese",
              code:"ja",
              createdAt: new Date(),
              updatedAt: new Date()
          },
          {
              name:"Javanese",
              code:"jv",
              createdAt: new Date(),
              updatedAt: new Date()
          },
          {
              name:"Georgian",
              code:"ka",
              createdAt: new Date(),
              updatedAt: new Date()
          },
          {
              name:"Kongo",
              code:"kg",
              createdAt: new Date(),
              updatedAt: new Date()
          },
          {
              name:"Kikuyu; Gikuyu",
              code:"ki",
              createdAt: new Date(),
              updatedAt: new Date()
          },
          {
              name:"Kuanyama; Kwanyama",
              code:"kj",
              createdAt: new Date(),
              updatedAt: new Date()
          },
          {
              name:"Kazakh",
              code:"kk",
              createdAt: new Date(),
              updatedAt: new Date()
          },
          {
              name:"Kalaallisut; Greenlandic",
              code:"kl",
              createdAt: new Date(),
              updatedAt: new Date()
          },
          {
              name:"Central Khmer",
              code:"km",
              createdAt: new Date(),
              updatedAt: new Date()
          },
          {
              name:"Kannada",
              code:"kn",
              createdAt: new Date(),
              updatedAt: new Date()
          },
          {
              name:"Korean",
              code:"ko",
              createdAt: new Date(),
              updatedAt: new Date()
          },
          {
              name:"Kanuri",
              code:"kr",
              createdAt: new Date(),
              updatedAt: new Date()
          },
          {
              name:"Kashmiri",
              code:"ks",
              createdAt: new Date(),
              updatedAt: new Date()
          },
          {
              name:"Kurdish",
              code:"ku",
              createdAt: new Date(),
              updatedAt: new Date()
          },
          {
              name:"Komi",
              code:"kv",
              createdAt: new Date(),
              updatedAt: new Date()
          },
          {
              name:"Cornish",
              code:"kw",
              createdAt: new Date(),
              updatedAt: new Date()
          },
          {
              name:"Kirghiz; Kyrgyz",
              code:"ky",
              createdAt: new Date(),
              updatedAt: new Date()
          },
          {
              name:"Latin",
              code:"la",
              createdAt: new Date(),
              updatedAt: new Date()
          },
          {
              name:"Luxembourgish; Letzeburgesch",
              code:"lb",
              createdAt: new Date(),
              updatedAt: new Date()
          },
          {
              name:"Ganda",
              code:"lg",
              createdAt: new Date(),
              updatedAt: new Date()
          },
          {
              name:"Limburgan; Limburger; Limburgish",
              code:"li",
              createdAt: new Date(),
              updatedAt: new Date()
          },
          {
              name:"Lingala",
              code:"ln",
              createdAt: new Date(),
              updatedAt: new Date()
          },
          {
              name:"Lao",
              code:"lo",
              createdAt: new Date(),
              updatedAt: new Date()
          },
          {
              name:"Lithuanian",
              code:"lt",
              createdAt: new Date(),
              updatedAt: new Date()
          },
          {
              name:"Luba-Katanga",
              code:"lu",
              createdAt: new Date(),
              updatedAt: new Date()
          },
          {
              name:"Latvian",
              code:"lv",
              createdAt: new Date(),
              updatedAt: new Date()
          },
          {
              name:"Malagasy",
              code:"mg",
              createdAt: new Date(),
              updatedAt: new Date()
          },
          {
              name:"Marshallese",
              code:"mh",
              createdAt: new Date(),
              updatedAt: new Date()
          },
          {
              name:"Maori",
              code:"mi",
              createdAt: new Date(),
              updatedAt: new Date()
          },
          {
              name:"Macedonian",
              code:"mk",
              createdAt: new Date(),
              updatedAt: new Date()
          },
          {
              name:"Malayalam",
              code:"ml",
              createdAt: new Date(),
              updatedAt: new Date()
          },
          {
              name:"Mongolian",
              code:"mn",
              createdAt: new Date(),
              updatedAt: new Date()
          },
          {
              name:"Marathi",
              code:"mr",
              createdAt: new Date(),
              updatedAt: new Date()
          },
          {
              name:"Malay",
              code:"ms",
              createdAt: new Date(),
              updatedAt: new Date()
          },
          {
              name:"Maltese",
              code:"mt",
              createdAt: new Date(),
              updatedAt: new Date()
          },
          {
              name:"Burmese",
              code:"my",
              createdAt: new Date(),
              updatedAt: new Date()
          },
          {
              name:"Nauru",
              code:"na",
              createdAt: new Date(),
              updatedAt: new Date()
          },
          {
              name:"Bokm\u00e5l, Norwegian; Norwegian Bokm\u00e5l",
              code:"nb",
              createdAt: new Date(),
              updatedAt: new Date()
          },
          {
              name:"Ndebele, North; North Ndebele",
              code:"nd",
              createdAt: new Date(),
              updatedAt: new Date()
          },
          {
              name:"Nepali",
              code:"ne",
              createdAt: new Date(),
              updatedAt: new Date()
          },
          {
              name:"Ndonga",
              code:"ng",
              createdAt: new Date(),
              updatedAt: new Date()
          },
          {
              name:"Dutch; Flemish",
              code:"nl",
              createdAt: new Date(),
              updatedAt: new Date()
          },
          {
              name:"Norwegian Nynorsk; Nynorsk, Norwegian",
              code:"nn",
              createdAt: new Date(),
              updatedAt: new Date()
          },
          {
              name:"Norwegian",
              code:"no",
              createdAt: new Date(),
              updatedAt: new Date()
          },
          {
              name:"Ndebele, South; South Ndebele",
              code:"nr",
              createdAt: new Date(),
              updatedAt: new Date()
          },
          {
              name:"Navajo; Navaho",
              code:"nv",
              createdAt: new Date(),
              updatedAt: new Date()
          },
          {
              name:"Chichewa; Chewa; Nyanja",
              code:"ny",
              createdAt: new Date(),
              updatedAt: new Date()
          },
          {
              name:"Occitan (post 1500); Proven\u00e7al",
              code:"oc",
              createdAt: new Date(),
              updatedAt: new Date()
          },
          {
              name:"Ojibwa",
              code:"oj",
              createdAt: new Date(),
              updatedAt: new Date()
          },
          {
              name:"Oromo",
              code:"om",
              createdAt: new Date(),
              updatedAt: new Date()
          },
          {
              name:"Oriya",
              code:"or",
              createdAt: new Date(),
              updatedAt: new Date()
          },
          {
              name:"Ossetian; Ossetic",
              code:"os",
              createdAt: new Date(),
              updatedAt: new Date()
          },
          {
              name:"Panjabi; Punjabi",
              code:"pa",
              createdAt: new Date(),
              updatedAt: new Date()
          },
          {
              name:"Pali",
              code:"pi",
              createdAt: new Date(),
              updatedAt: new Date()
          },
          {
              name:"Polish",
              code:"pl",
              createdAt: new Date(),
              updatedAt: new Date()
          },
          {
              name:"Pushto; Pashto",
              code:"ps",
              createdAt: new Date(),
              updatedAt: new Date()
          },
          {
              name:"Portuguese",
              code:"pt",
              createdAt: new Date(),
              updatedAt: new Date()
          },
          {
              name:"Quechua",
              code:"qu",
              createdAt: new Date(),
              updatedAt: new Date()
          },
          {
              name:"Romansh",
              code:"rm",
              createdAt: new Date(),
              updatedAt: new Date()
          },
          {
              name:"Rundi",
              code:"rn",
              createdAt: new Date(),
              updatedAt: new Date()
          },
          {
              name:"Romanian; Moldavian; Moldovan",
              code:"ro",
              createdAt: new Date(),
              updatedAt: new Date()
          },
          {
              name:"Russian",
              code:"ru",
              createdAt: new Date(),
              updatedAt: new Date()
          },
          {
              name:"Kinyarwanda",
              code:"rw",
              createdAt: new Date(),
              updatedAt: new Date()
          },
          {
              name:"Sanskrit",
              code:"sa",
              createdAt: new Date(),
              updatedAt: new Date()
          },
          {
              name:"Sardinian",
              code:"sc",
              createdAt: new Date(),
              updatedAt: new Date()
          },
          {
              name:"Sindhi",
              code:"sd",
              createdAt: new Date(),
              updatedAt: new Date()
          },
          {
              name:"Northern Sami",
              code:"se",
              createdAt: new Date(),
              updatedAt: new Date()
          },
          {
              name:"Sango",
              code:"sg",
              createdAt: new Date(),
              updatedAt: new Date()
          },
          {
              name:"Sinhala; Sinhalese",
              code:"si",
              createdAt: new Date(),
              updatedAt: new Date()
          },
          {
              name:"Slovak",
              code:"sk",
              createdAt: new Date(),
              updatedAt: new Date()
          },
          {
              name:"Slovenian",
              code:"sl",
              createdAt: new Date(),
              updatedAt: new Date()
          },
          {
              name:"Samoan",
              code:"sm",
              createdAt: new Date(),
              updatedAt: new Date()
          },
          {
              name:"Shona",
              code:"sn",
              createdAt: new Date(),
              updatedAt: new Date()
          },
          {
              name:"Somali",
              code:"so",
              createdAt: new Date(),
              updatedAt: new Date()
          },
          {
              name:"Albanian",
              code:"sq",
              createdAt: new Date(),
              updatedAt: new Date()
          },
          {
              name:"Serbian",
              code:"sr",
              createdAt: new Date(),
              updatedAt: new Date()
          },
          {
              name:"Swati",
              code:"ss",
              createdAt: new Date(),
              updatedAt: new Date()
          },
          {
              name:"Sotho, Southern",
              code:"st",
              createdAt: new Date(),
              updatedAt: new Date()
          },
          {
              name:"Sundanese",
              code:"su",
              createdAt: new Date(),
              updatedAt: new Date()
          },
          {
              name:"Swedish",
              code:"sv",
              createdAt: new Date(),
              updatedAt: new Date()
          },
          {
              name:"Swahili",
              code:"sw",
              createdAt: new Date(),
              updatedAt: new Date()
          },
          {
              name:"Tamil",
              code:"ta",
              createdAt: new Date(),
              updatedAt: new Date()
          },
          {
              name:"Telugu",
              code:"te",
              createdAt: new Date(),
              updatedAt: new Date()
          },
          {
              name:"Tajik",
              code:"tg",
              createdAt: new Date(),
              updatedAt: new Date()
          },
          {
              name:"Thai",
              code:"th",
              createdAt: new Date(),
              updatedAt: new Date()
          },
          {
              name:"Tigrinya",
              code:"ti",
              createdAt: new Date(),
              updatedAt: new Date()
          },
          {
              name:"Turkmen",
              code:"tk",
              createdAt: new Date(),
              updatedAt: new Date()
          },
          {
              name:"Tagalog",
              code:"tl",
              createdAt: new Date(),
              updatedAt: new Date()
          },
          {
              name:"Tswana",
              code:"tn",
              createdAt: new Date(),
              updatedAt: new Date()
          },
          {
              name:"Tonga (Tonga Islands)",
              code:"to",
              createdAt: new Date(),
              updatedAt: new Date()
          },
          {
              name:"Turkish",
              code:"tr",
              createdAt: new Date(),
              updatedAt: new Date()
          },
          {
              name:"Tsonga",
              code:"ts",
              createdAt: new Date(),
              updatedAt: new Date()
          },
          {
              name:"Tatar",
              code:"tt",
              createdAt: new Date(),
              updatedAt: new Date()
          },
          {
              name:"Twi",
              code:"tw",
              createdAt: new Date(),
              updatedAt: new Date()
          },
          {
              name:"Tahitian",
              code:"ty",
              createdAt: new Date(),
              updatedAt: new Date()
          },
          {
              name:"Uighur; Uyghur",
              code:"ug",
              createdAt: new Date(),
              updatedAt: new Date()
          },
          {
              name:"Ukrainian",
              code:"uk",
              createdAt: new Date(),
              updatedAt: new Date()
          },
          {
              name:"Urdu",
              code:"ur",
              createdAt: new Date(),
              updatedAt: new Date()
          },
          {
              name:"Uzbek",
              code:"uz",
              createdAt: new Date(),
              updatedAt: new Date()
          },
          {
              name:"Venda",
              code:"ve",
              createdAt: new Date(),
              updatedAt: new Date()
          },
          {
              name:"Vietnamese",
              code:"vi",
              createdAt: new Date(),
              updatedAt: new Date()
          },
          {
              name:"Volap\u00fck",
              code:"vo",
              createdAt: new Date(),
              updatedAt: new Date()
          },
          {
              name:"Walloon",
              code:"wa",
              createdAt: new Date(),
              updatedAt: new Date()
          },
          {
              name:"Wolof",
              code:"wo",
              createdAt: new Date(),
              updatedAt: new Date()
          },
          {
              name:"Xhosa",
              code:"xh",
              createdAt: new Date(),
              updatedAt: new Date()
          },
          {
              name:"Yiddish",
              code:"yi",
              createdAt: new Date(),
              updatedAt: new Date()
          },
          {
              name:"Yoruba",
              code:"yo",
              createdAt: new Date(),
              updatedAt: new Date()
          },
          {
              name:"Zhuang; Chuang",
              code:"za",
              createdAt: new Date(),
              updatedAt: new Date()
          },
          {
              name:"Chinese",
              code:"zh",
              createdAt: new Date(),
              updatedAt: new Date()
          },
          {
              name:"Zulu",
              code:"zu",
              createdAt: new Date(),
              updatedAt: new Date()
          }
      ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Languages', null, {});
  }
};
