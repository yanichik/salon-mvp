singleTransaction = {
    "owner": "Bela",
    "client": "Daisy",
    "salon": "Bela's Beauty Studio",
    "date": "12/12/20",
    "lineItems": [
      {
        lineItemType: "product/service",
        lineItemContent: "wash hair",
        lineItemValue: 25
      },
      {
        lineItemType: "product/service",
        lineItemContent: "color hair",
        lineItemValue: 90
      },
      {
        lineItemType: "expense",
        lineItemContent: "color - light brown",
        lineItemValue: -20
      }
    ],
    // "total": this.lineItems.reduce( (acc, v) => {return v.lineItemValue + acc}, 0),
    "transactionNotes": "Some notes here"
}
singleTransaction.total = singleTransaction.lineItems.reduce( (acc, v) => {return v.lineItemValue + acc}, 0);

module.exports.singleTransaction = singleTransaction;

manyTransactions = [
  {
    "owner": "Ella",
    "client": "Diaz",
    "salon": "ISBOL",
    "date": "2019-11-11",
    "email": "diazfernandez@isbol.com",
    "phone": "+1 (864) 432-3556",
    "address": "109 Seeley Street, Brantleyville, West Virginia, 3494",
    "transactionNotes": "adipisicing et non occaecat fugiat ullamco dolore ipsum duis dolor",
    "lineItems": [
      {
        "lineItemType": "expense",
        "lineItemContent": "wash",
        "lineItemValue": 69
      },
      {
        "lineItemType": "product/service",
        "lineItemContent": "nails",
        "lineItemValue": 37
      },
      {
        "lineItemType": "expense",
        "lineItemContent": "haircut",
        "lineItemValue": 89
      }
    ],
    "total": 360
  },
  {
    "owner": "Irene",
    "client": "Williams",
    "salon": "ISOSWITCH",
    "date": "2015-01-18",
    "email": "williamsfernandez@isoswitch.com",
    "phone": "+1 (867) 589-3663",
    "address": "860 Tapscott Street, Lisco, Oklahoma, 8481",
    "transactionNotes": "ea et aliquip consequat anim veniam ullamco exercitation amet minim",
    "lineItems": [
      {
        "lineItemType": "expense",
        "lineItemContent": "wash",
        "lineItemValue": 4
      },
      {
        "lineItemType": "product/service",
        "lineItemContent": "wash",
        "lineItemValue": 108
      },
      {
        "lineItemType": "product/service",
        "lineItemContent": "wash",
        "lineItemValue": 67
      }
    ],
    "total": 637
  },
  {
    "owner": "Walton",
    "client": "Elliott",
    "salon": "EXOTERIC",
    "date": "2017-10-27",
    "email": "elliottfernandez@exoteric.com",
    "phone": "+1 (906) 513-2317",
    "address": "769 Lloyd Street, Needmore, American Samoa, 5012",
    "transactionNotes": "elit duis incididunt consequat id Lorem pariatur ipsum fugiat ea",
    "lineItems": [
      {
        "lineItemType": "expense",
        "lineItemContent": "haircut",
        "lineItemValue": 72
      },
      {
        "lineItemType": "product/service",
        "lineItemContent": "nails",
        "lineItemValue": 46
      },
      {
        "lineItemType": "product/service",
        "lineItemContent": "nails",
        "lineItemValue": 108
      }
    ],
    "total": 965
  },
  {
    "owner": "Patrice",
    "client": "Manning",
    "salon": "KROG",
    "date": "2015-06-22",
    "email": "manningfernandez@krog.com",
    "phone": "+1 (981) 479-3554",
    "address": "244 Billings Place, Shasta, Utah, 3700",
    "transactionNotes": "mollit exercitation qui aliqua ut occaecat officia quis sit ad",
    "lineItems": [
      {
        "lineItemType": "expense",
        "lineItemContent": "wash",
        "lineItemValue": 120
      },
      {
        "lineItemType": "expense",
        "lineItemContent": "haircut",
        "lineItemValue": 108
      },
      {
        "lineItemType": "expense",
        "lineItemContent": "wash",
        "lineItemValue": 122
      }
    ],
    "total": 562
  },
  {
    "owner": "Laurie",
    "client": "Logan",
    "salon": "PERMADYNE",
    "date": "2020-07-09",
    "email": "loganfernandez@permadyne.com",
    "phone": "+1 (866) 493-2356",
    "address": "973 Lincoln Road, Accoville, Minnesota, 4670",
    "transactionNotes": "aute aute eu cupidatat non ullamco adipisicing non magna laborum",
    "lineItems": [
      {
        "lineItemType": "expense",
        "lineItemContent": "shave",
        "lineItemValue": 15
      },
      {
        "lineItemType": "expense",
        "lineItemContent": "wash",
        "lineItemValue": 32
      },
      {
        "lineItemType": "expense",
        "lineItemContent": "haircut",
        "lineItemValue": 85
      }
    ],
    "total": 569
  },
  {
    "owner": "Preston",
    "client": "Fletcher",
    "salon": "EARTHMARK",
    "date": "2016-11-22",
    "email": "fletcherfernandez@earthmark.com",
    "phone": "+1 (952) 510-3978",
    "address": "201 Guernsey Street, Kansas, North Dakota, 3841",
    "transactionNotes": "aute minim ut sit incididunt voluptate eiusmod sunt velit culpa",
    "lineItems": [
      {
        "lineItemType": "expense",
        "lineItemContent": "haircut",
        "lineItemValue": 129
      },
      {
        "lineItemType": "product/service",
        "lineItemContent": "wash",
        "lineItemValue": 148
      },
      {
        "lineItemType": "product/service",
        "lineItemContent": "wash",
        "lineItemValue": 60
      }
    ],
    "total": 607
  },
  {
    "owner": "Geneva",
    "client": "Ericka",
    "salon": "BOINK",
    "date": "2020-03-09",
    "email": "erickafernandez@boink.com",
    "phone": "+1 (970) 470-3910",
    "address": "159 Veterans Avenue, Kempton, Delaware, 3485",
    "transactionNotes": "tempor dolor incididunt consectetur ullamco excepteur pariatur exercitation ea Lorem",
    "lineItems": [
      {
        "lineItemType": "expense",
        "lineItemContent": "shave",
        "lineItemValue": 23
      },
      {
        "lineItemType": "product/service",
        "lineItemContent": "color",
        "lineItemValue": 48
      },
      {
        "lineItemType": "product/service",
        "lineItemContent": "shave",
        "lineItemValue": 81
      }
    ],
    "total": 258
  },
  {
    "owner": "Arline",
    "client": "Barbara",
    "salon": "EVENTEX",
    "date": "2016-07-24",
    "email": "barbarafernandez@eventex.com",
    "phone": "+1 (892) 549-2727",
    "address": "513 Linwood Street, Brownlee, Georgia, 4568",
    "transactionNotes": "magna aute et pariatur aute cupidatat deserunt exercitation aliquip duis",
    "lineItems": [
      {
        "lineItemType": "expense",
        "lineItemContent": "shave",
        "lineItemValue": 52
      },
      {
        "lineItemType": "expense",
        "lineItemContent": "shave",
        "lineItemValue": 88
      },
      {
        "lineItemType": "product/service",
        "lineItemContent": "nails",
        "lineItemValue": 28
      }
    ],
    "total": 204
  },
  {
    "owner": "Jeanne",
    "client": "Josie",
    "salon": "LETPRO",
    "date": "2018-03-03",
    "email": "josiefernandez@letpro.com",
    "phone": "+1 (876) 528-3577",
    "address": "100 Hendrix Street, Walker, Louisiana, 8172",
    "transactionNotes": "commodo fugiat reprehenderit esse culpa esse est aute aliqua cupidatat",
    "lineItems": [
      {
        "lineItemType": "product/service",
        "lineItemContent": "color",
        "lineItemValue": 128
      },
      {
        "lineItemType": "expense",
        "lineItemContent": "shave",
        "lineItemValue": 33
      },
      {
        "lineItemType": "expense",
        "lineItemContent": "wash",
        "lineItemValue": 127
      }
    ],
    "total": 456
  },
  {
    "owner": "Kitty",
    "client": "Le",
    "salon": "TELLIFLY",
    "date": "2016-02-16",
    "email": "lefernandez@tellifly.com",
    "phone": "+1 (965) 543-3952",
    "address": "603 Amersfort Place, Robinson, Connecticut, 6209",
    "transactionNotes": "dolor nostrud pariatur ut adipisicing fugiat irure laboris magna sint",
    "lineItems": [
      {
        "lineItemType": "expense",
        "lineItemContent": "nails",
        "lineItemValue": 77
      },
      {
        "lineItemType": "product/service",
        "lineItemContent": "haircut",
        "lineItemValue": 73
      },
      {
        "lineItemType": "product/service",
        "lineItemContent": "nails",
        "lineItemValue": 57
      }
    ],
    "total": 743
  },
  {
    "owner": "Robert",
    "client": "Cristina",
    "salon": "GADTRON",
    "date": "2015-09-25",
    "email": "cristinafernandez@gadtron.com",
    "phone": "+1 (974) 477-2582",
    "address": "109 Newel Street, Hiwasse, Guam, 4624",
    "transactionNotes": "qui culpa ullamco ea sit reprehenderit labore velit irure sunt",
    "lineItems": [
      {
        "lineItemType": "product/service",
        "lineItemContent": "haircut",
        "lineItemValue": 43
      },
      {
        "lineItemType": "expense",
        "lineItemContent": "color",
        "lineItemValue": 65
      },
      {
        "lineItemType": "product/service",
        "lineItemContent": "haircut",
        "lineItemValue": 74
      }
    ],
    "total": 524
  },
  {
    "owner": "Corinne",
    "client": "Keith",
    "salon": "BUZZWORKS",
    "date": "2018-01-30",
    "email": "keithfernandez@buzzworks.com",
    "phone": "+1 (886) 455-3838",
    "address": "886 Whitwell Place, Coalmont, Rhode Island, 979",
    "transactionNotes": "deserunt aute dolore eu id fugiat consectetur ea ut sit",
    "lineItems": [
      {
        "lineItemType": "expense",
        "lineItemContent": "wash",
        "lineItemValue": 46
      },
      {
        "lineItemType": "product/service",
        "lineItemContent": "color",
        "lineItemValue": 15
      },
      {
        "lineItemType": "expense",
        "lineItemContent": "color",
        "lineItemValue": 40
      }
    ],
    "total": 259
  },
  {
    "owner": "Sheri",
    "client": "Cotton",
    "salon": "ROCKYARD",
    "date": "2018-08-18",
    "email": "cottonfernandez@rockyard.com",
    "phone": "+1 (996) 497-2759",
    "address": "465 McKibbin Street, Garfield, Marshall Islands, 9396",
    "transactionNotes": "officia incididunt nulla est aute esse ut fugiat id quis",
    "lineItems": [
      {
        "lineItemType": "expense",
        "lineItemContent": "color",
        "lineItemValue": 52
      },
      {
        "lineItemType": "expense",
        "lineItemContent": "color",
        "lineItemValue": 34
      },
      {
        "lineItemType": "expense",
        "lineItemContent": "haircut",
        "lineItemValue": 40
      }
    ],
    "total": 253
  },
  {
    "owner": "Schultz",
    "client": "Carolyn",
    "salon": "ZEPITOPE",
    "date": "2018-11-24",
    "email": "carolynfernandez@zepitope.com",
    "phone": "+1 (983) 534-3320",
    "address": "364 Powers Street, Westphalia, California, 4097",
    "transactionNotes": "in ut enim voluptate amet aliqua qui id labore aliquip",
    "lineItems": [
      {
        "lineItemType": "product/service",
        "lineItemContent": "wash",
        "lineItemValue": 69
      },
      {
        "lineItemType": "expense",
        "lineItemContent": "haircut",
        "lineItemValue": 33
      },
      {
        "lineItemType": "expense",
        "lineItemContent": "shave",
        "lineItemValue": 48
      }
    ],
    "total": 437
  },
  {
    "owner": "Branch",
    "client": "Cheryl",
    "salon": "ZAYA",
    "date": "2018-10-28",
    "email": "cherylfernandez@zaya.com",
    "phone": "+1 (860) 501-3696",
    "address": "861 Ocean Court, Ernstville, Indiana, 8461",
    "transactionNotes": "duis laboris ex elit laborum ipsum elit nostrud dolore sit",
    "lineItems": [
      {
        "lineItemType": "product/service",
        "lineItemContent": "nails",
        "lineItemValue": 127
      },
      {
        "lineItemType": "expense",
        "lineItemContent": "shave",
        "lineItemValue": 110
      },
      {
        "lineItemType": "product/service",
        "lineItemContent": "nails",
        "lineItemValue": 4
      }
    ],
    "total": 760
  },
  {
    "owner": "Ochoa",
    "client": "Good",
    "salon": "NORSUL",
    "date": "2017-06-18",
    "email": "goodfernandez@norsul.com",
    "phone": "+1 (850) 479-2856",
    "address": "236 Utica Avenue, Rosine, Virginia, 1455",
    "transactionNotes": "culpa ex nostrud ipsum esse esse sint voluptate aliquip deserunt",
    "lineItems": [
      {
        "lineItemType": "product/service",
        "lineItemContent": "haircut",
        "lineItemValue": 12
      },
      {
        "lineItemType": "expense",
        "lineItemContent": "haircut",
        "lineItemValue": 140
      },
      {
        "lineItemType": "product/service",
        "lineItemContent": "wash",
        "lineItemValue": 134
      }
    ],
    "total": 629
  },
  {
    "owner": "Chan",
    "client": "Washington",
    "salon": "SHEPARD",
    "date": "2017-01-23",
    "email": "washingtonfernandez@shepard.com",
    "phone": "+1 (843) 594-3968",
    "address": "353 Amboy Street, Marbury, Hawaii, 8629",
    "transactionNotes": "ut labore id et esse cupidatat Lorem elit ad voluptate",
    "lineItems": [
      {
        "lineItemType": "product/service",
        "lineItemContent": "nails",
        "lineItemValue": 57
      },
      {
        "lineItemType": "product/service",
        "lineItemContent": "shave",
        "lineItemValue": 91
      },
      {
        "lineItemType": "product/service",
        "lineItemContent": "shave",
        "lineItemValue": 57
      }
    ],
    "total": 980
  },
  {
    "owner": "Tonya",
    "client": "Franco",
    "salon": "ZENTILITY",
    "date": "2016-08-27",
    "email": "francofernandez@zentility.com",
    "phone": "+1 (966) 459-3417",
    "address": "630 Devoe Street, Thynedale, Palau, 9043",
    "transactionNotes": "sunt qui consequat eu do ut ex ullamco qui dolore",
    "lineItems": [
      {
        "lineItemType": "expense",
        "lineItemContent": "haircut",
        "lineItemValue": 81
      },
      {
        "lineItemType": "expense",
        "lineItemContent": "color",
        "lineItemValue": 115
      },
      {
        "lineItemType": "expense",
        "lineItemContent": "haircut",
        "lineItemValue": 52
      }
    ],
    "total": 955
  },
  {
    "owner": "Patel",
    "client": "Roxanne",
    "salon": "BESTO",
    "date": "2015-05-28",
    "email": "roxannefernandez@besto.com",
    "phone": "+1 (828) 564-3466",
    "address": "210 Ross Street, Hollymead, Wisconsin, 1119",
    "transactionNotes": "aliquip dolor elit eiusmod pariatur aliquip excepteur ut adipisicing laboris",
    "lineItems": [
      {
        "lineItemType": "expense",
        "lineItemContent": "color",
        "lineItemValue": 5
      },
      {
        "lineItemType": "expense",
        "lineItemContent": "color",
        "lineItemValue": 55
      },
      {
        "lineItemType": "expense",
        "lineItemContent": "color",
        "lineItemValue": 139
      }
    ],
    "total": 881
  },
  {
    "owner": "Marjorie",
    "client": "Herminia",
    "salon": "EXPOSA",
    "date": "2018-03-07",
    "email": "herminiafernandez@exposa.com",
    "phone": "+1 (813) 483-2425",
    "address": "543 Tabor Court, National, North Carolina, 7815",
    "transactionNotes": "incididunt culpa irure incididunt id tempor pariatur Lorem aute eiusmod",
    "lineItems": [
      {
        "lineItemType": "expense",
        "lineItemContent": "haircut",
        "lineItemValue": 20
      },
      {
        "lineItemType": "expense",
        "lineItemContent": "color",
        "lineItemValue": 30
      },
      {
        "lineItemType": "expense",
        "lineItemContent": "wash",
        "lineItemValue": 101
      }
    ],
    "total": 246
  },
  {
    "owner": "Lang",
    "client": "Guthrie",
    "salon": "ZYTRAC",
    "date": "2019-12-28",
    "email": "guthriefernandez@zytrac.com",
    "phone": "+1 (876) 420-2337",
    "address": "998 Amber Street, Chesapeake, Michigan, 3199",
    "transactionNotes": "ad officia ullamco laboris mollit amet consectetur occaecat reprehenderit eiusmod",
    "lineItems": [
      {
        "lineItemType": "expense",
        "lineItemContent": "shave",
        "lineItemValue": 138
      },
      {
        "lineItemType": "expense",
        "lineItemContent": "wash",
        "lineItemValue": 109
      },
      {
        "lineItemType": "product/service",
        "lineItemContent": "haircut",
        "lineItemValue": 51
      }
    ],
    "total": 796
  },
  {
    "owner": "Rodriguez",
    "client": "Dee",
    "salon": "SULTRAXIN",
    "date": "2017-04-22",
    "email": "deefernandez@sultraxin.com",
    "phone": "+1 (825) 532-3123",
    "address": "175 Monitor Street, Wildwood, Maine, 3285",
    "transactionNotes": "sunt reprehenderit labore minim nulla nostrud commodo eiusmod ipsum commodo",
    "lineItems": [
      {
        "lineItemType": "expense",
        "lineItemContent": "haircut",
        "lineItemValue": 87
      },
      {
        "lineItemType": "product/service",
        "lineItemContent": "color",
        "lineItemValue": 92
      },
      {
        "lineItemType": "product/service",
        "lineItemContent": "haircut",
        "lineItemValue": 96
      }
    ],
    "total": 137
  },
  {
    "owner": "Gamble",
    "client": "Gould",
    "salon": "COMTRAIL",
    "date": "2015-04-08",
    "email": "gouldfernandez@comtrail.com",
    "phone": "+1 (976) 462-2277",
    "address": "134 Drew Street, Islandia, Oregon, 521",
    "transactionNotes": "do ad id veniam labore adipisicing fugiat commodo elit laboris",
    "lineItems": [
      {
        "lineItemType": "product/service",
        "lineItemContent": "haircut",
        "lineItemValue": 71
      },
      {
        "lineItemType": "expense",
        "lineItemContent": "wash",
        "lineItemValue": 95
      },
      {
        "lineItemType": "product/service",
        "lineItemContent": "haircut",
        "lineItemValue": 27
      }
    ],
    "total": 939
  },
  {
    "owner": "Carolina",
    "client": "Martinez",
    "salon": "MARQET",
    "date": "2014-10-15",
    "email": "martinezfernandez@marqet.com",
    "phone": "+1 (993) 596-2807",
    "address": "735 Kingsland Avenue, Robinette, Florida, 4261",
    "transactionNotes": "magna aute mollit reprehenderit et reprehenderit commodo enim nisi labore",
    "lineItems": [
      {
        "lineItemType": "product/service",
        "lineItemContent": "haircut",
        "lineItemValue": 14
      },
      {
        "lineItemType": "product/service",
        "lineItemContent": "nails",
        "lineItemValue": 87
      },
      {
        "lineItemType": "expense",
        "lineItemContent": "wash",
        "lineItemValue": 33
      }
    ],
    "total": 297
  },
  {
    "owner": "Cathryn",
    "client": "Yvette",
    "salon": "GALLAXIA",
    "date": "2020-03-10",
    "email": "yvettefernandez@gallaxia.com",
    "phone": "+1 (862) 469-3157",
    "address": "502 Noel Avenue, Richmond, Illinois, 6819",
    "transactionNotes": "labore Lorem cupidatat tempor aute dolore mollit exercitation id cupidatat",
    "lineItems": [
      {
        "lineItemType": "product/service",
        "lineItemContent": "shave",
        "lineItemValue": 49
      },
      {
        "lineItemType": "product/service",
        "lineItemContent": "color",
        "lineItemValue": 17
      },
      {
        "lineItemType": "product/service",
        "lineItemContent": "nails",
        "lineItemValue": 18
      }
    ],
    "total": 491
  },
  {
    "owner": "Brennan",
    "client": "Autumn",
    "salon": "ECRAZE",
    "date": "2017-11-22",
    "email": "autumnfernandez@ecraze.com",
    "phone": "+1 (938) 595-2086",
    "address": "908 Locust Avenue, Trail, Federated States Of Micronesia, 8203",
    "transactionNotes": "incididunt nisi commodo quis commodo minim id esse ad veniam",
    "lineItems": [
      {
        "lineItemType": "product/service",
        "lineItemContent": "wash",
        "lineItemValue": 132
      },
      {
        "lineItemType": "expense",
        "lineItemContent": "shave",
        "lineItemValue": 1
      },
      {
        "lineItemType": "expense",
        "lineItemContent": "wash",
        "lineItemValue": 112
      }
    ],
    "total": 697
  },
  {
    "owner": "Gladys",
    "client": "Deidre",
    "salon": "EXOSTREAM",
    "date": "2017-04-18",
    "email": "deidrefernandez@exostream.com",
    "phone": "+1 (854) 582-3193",
    "address": "638 Irwin Street, Innsbrook, Tennessee, 8236",
    "transactionNotes": "proident amet esse mollit id occaecat eiusmod pariatur laborum nulla",
    "lineItems": [
      {
        "lineItemType": "product/service",
        "lineItemContent": "nails",
        "lineItemValue": 103
      },
      {
        "lineItemType": "expense",
        "lineItemContent": "color",
        "lineItemValue": 72
      },
      {
        "lineItemType": "product/service",
        "lineItemContent": "haircut",
        "lineItemValue": 112
      }
    ],
    "total": 803
  },
  {
    "owner": "Alberta",
    "client": "Maxine",
    "salon": "SULTRAX",
    "date": "2019-02-22",
    "email": "maxinefernandez@sultrax.com",
    "phone": "+1 (822) 564-3816",
    "address": "976 Village Road, Villarreal, Washington, 2500",
    "transactionNotes": "tempor cillum proident est dolor eiusmod do commodo labore voluptate",
    "lineItems": [
      {
        "lineItemType": "expense",
        "lineItemContent": "shave",
        "lineItemValue": 96
      },
      {
        "lineItemType": "expense",
        "lineItemContent": "nails",
        "lineItemValue": 77
      },
      {
        "lineItemType": "product/service",
        "lineItemContent": "shave",
        "lineItemValue": 80
      }
    ],
    "total": 644
  },
  {
    "owner": "Carmen",
    "client": "Margarita",
    "salon": "GYNKO",
    "date": "2020-11-22",
    "email": "margaritafernandez@gynko.com",
    "phone": "+1 (950) 560-2928",
    "address": "238 Royce Street, Stockwell, Puerto Rico, 7021",
    "transactionNotes": "consequat incididunt non irure ullamco duis dolore reprehenderit id minim",
    "lineItems": [
      {
        "lineItemType": "product/service",
        "lineItemContent": "shave",
        "lineItemValue": 29
      },
      {
        "lineItemType": "product/service",
        "lineItemContent": "haircut",
        "lineItemValue": 130
      },
      {
        "lineItemType": "expense",
        "lineItemContent": "haircut",
        "lineItemValue": 52
      }
    ],
    "total": 247
  },
  {
    "owner": "Emilia",
    "client": "Ellison",
    "salon": "ZORK",
    "date": "2017-06-07",
    "email": "ellisonfernandez@zork.com",
    "phone": "+1 (878) 517-2102",
    "address": "596 Estate Road, Calvary, Texas, 2221",
    "transactionNotes": "occaecat adipisicing id consectetur aliqua elit commodo occaecat incididunt ut",
    "lineItems": [
      {
        "lineItemType": "expense",
        "lineItemContent": "color",
        "lineItemValue": 108
      },
      {
        "lineItemType": "expense",
        "lineItemContent": "nails",
        "lineItemValue": 93
      },
      {
        "lineItemType": "expense",
        "lineItemContent": "haircut",
        "lineItemValue": 29
      }
    ],
    "total": 130
  },
  {
    "owner": "Charles",
    "client": "Davis",
    "salon": "ZOGAK",
    "date": "2020-03-07",
    "email": "davisfernandez@zogak.com",
    "phone": "+1 (980) 565-2463",
    "address": "360 Moore Street, Vaughn, Alabama, 3932",
    "transactionNotes": "eu voluptate minim mollit eu magna voluptate excepteur magna nulla",
    "lineItems": [
      {
        "lineItemType": "expense",
        "lineItemContent": "wash",
        "lineItemValue": 136
      },
      {
        "lineItemType": "expense",
        "lineItemContent": "shave",
        "lineItemValue": 96
      },
      {
        "lineItemType": "product/service",
        "lineItemContent": "haircut",
        "lineItemValue": 102
      }
    ],
    "total": 736
  },
  {
    "owner": "Twila",
    "client": "Owen",
    "salon": "INQUALA",
    "date": "2017-12-04",
    "email": "owenfernandez@inquala.com",
    "phone": "+1 (901) 592-2015",
    "address": "402 Benson Avenue, Hailesboro, Mississippi, 7943",
    "transactionNotes": "exercitation nisi aliquip enim officia sunt mollit ex eu ipsum",
    "lineItems": [
      {
        "lineItemType": "product/service",
        "lineItemContent": "shave",
        "lineItemValue": 121
      },
      {
        "lineItemType": "product/service",
        "lineItemContent": "haircut",
        "lineItemValue": 117
      },
      {
        "lineItemType": "product/service",
        "lineItemContent": "color",
        "lineItemValue": 136
      }
    ],
    "total": 739
  },
  {
    "owner": "Conrad",
    "client": "Tillman",
    "salon": "PAPRIKUT",
    "date": "2017-12-21",
    "email": "tillmanfernandez@paprikut.com",
    "phone": "+1 (985) 570-2777",
    "address": "174 Conway Street, Savannah, South Carolina, 9677",
    "transactionNotes": "laborum consequat enim ad enim culpa sint fugiat aliqua ut",
    "lineItems": [
      {
        "lineItemType": "product/service",
        "lineItemContent": "color",
        "lineItemValue": 86
      },
      {
        "lineItemType": "expense",
        "lineItemContent": "haircut",
        "lineItemValue": 12
      },
      {
        "lineItemType": "product/service",
        "lineItemContent": "wash",
        "lineItemValue": 63
      }
    ],
    "total": 427
  },
  {
    "owner": "Keller",
    "client": "Sara",
    "salon": "ANACHO",
    "date": "2017-05-21",
    "email": "sarafernandez@anacho.com",
    "phone": "+1 (816) 443-3062",
    "address": "335 Turnbull Avenue, Sharon, Vermont, 8352",
    "transactionNotes": "fugiat laborum voluptate consequat id dolor do eu duis est",
    "lineItems": [
      {
        "lineItemType": "product/service",
        "lineItemContent": "haircut",
        "lineItemValue": 110
      },
      {
        "lineItemType": "product/service",
        "lineItemContent": "color",
        "lineItemValue": 89
      },
      {
        "lineItemType": "product/service",
        "lineItemContent": "wash",
        "lineItemValue": 20
      }
    ],
    "total": 498
  },
  {
    "owner": "Evans",
    "client": "Lucy",
    "salon": "NORSUP",
    "date": "2016-06-28",
    "email": "lucyfernandez@norsup.com",
    "phone": "+1 (821) 472-2078",
    "address": "314 Dekoven Court, Kilbourne, Colorado, 6505",
    "transactionNotes": "commodo aliqua enim culpa laborum ut eiusmod quis nisi cillum",
    "lineItems": [
      {
        "lineItemType": "product/service",
        "lineItemContent": "nails",
        "lineItemValue": 81
      },
      {
        "lineItemType": "product/service",
        "lineItemContent": "shave",
        "lineItemValue": 76
      },
      {
        "lineItemType": "product/service",
        "lineItemContent": "shave",
        "lineItemValue": 38
      }
    ],
    "total": 289
  },
  {
    "owner": "Louise",
    "client": "Weber",
    "salon": "RODEMCO",
    "date": "2020-02-01",
    "email": "weberfernandez@rodemco.com",
    "phone": "+1 (844) 457-3845",
    "address": "252 Gerry Street, Belleview, Iowa, 2682",
    "transactionNotes": "ullamco eu irure Lorem in esse deserunt commodo occaecat nisi",
    "lineItems": [
      {
        "lineItemType": "product/service",
        "lineItemContent": "haircut",
        "lineItemValue": 125
      },
      {
        "lineItemType": "expense",
        "lineItemContent": "nails",
        "lineItemValue": 45
      },
      {
        "lineItemType": "product/service",
        "lineItemContent": "nails",
        "lineItemValue": 15
      }
    ],
    "total": 840
  },
  {
    "owner": "Underwood",
    "client": "Roberson",
    "salon": "POSHOME",
    "date": "2020-01-11",
    "email": "robersonfernandez@poshome.com",
    "phone": "+1 (858) 508-3457",
    "address": "460 Bartlett Place, Mahtowa, Maryland, 289",
    "transactionNotes": "enim et adipisicing consequat aliquip ullamco adipisicing ipsum ea nisi",
    "lineItems": [
      {
        "lineItemType": "product/service",
        "lineItemContent": "shave",
        "lineItemValue": 6
      },
      {
        "lineItemType": "expense",
        "lineItemContent": "shave",
        "lineItemValue": 68
      },
      {
        "lineItemType": "product/service",
        "lineItemContent": "nails",
        "lineItemValue": 97
      }
    ],
    "total": 234
  },
  {
    "owner": "Robinson",
    "client": "Sue",
    "salon": "XELEGYL",
    "date": "2014-06-23",
    "email": "suefernandez@xelegyl.com",
    "phone": "+1 (972) 458-3731",
    "address": "372 Willoughby Street, Ventress, New Mexico, 5381",
    "transactionNotes": "adipisicing anim Lorem voluptate id qui do elit incididunt adipisicing",
    "lineItems": [
      {
        "lineItemType": "product/service",
        "lineItemContent": "haircut",
        "lineItemValue": 102
      },
      {
        "lineItemType": "product/service",
        "lineItemContent": "color",
        "lineItemValue": 98
      },
      {
        "lineItemType": "product/service",
        "lineItemContent": "nails",
        "lineItemValue": 6
      }
    ],
    "total": 400
  },
  {
    "owner": "Macias",
    "client": "Lee",
    "salon": "INRT",
    "date": "2017-05-30",
    "email": "leefernandez@inrt.com",
    "phone": "+1 (938) 458-3071",
    "address": "830 Foster Avenue, Thatcher, Arkansas, 6216",
    "transactionNotes": "exercitation non aliqua culpa laborum id quis exercitation Lorem sit",
    "lineItems": [
      {
        "lineItemType": "expense",
        "lineItemContent": "shave",
        "lineItemValue": 53
      },
      {
        "lineItemType": "expense",
        "lineItemContent": "haircut",
        "lineItemValue": 21
      },
      {
        "lineItemType": "product/service",
        "lineItemContent": "shave",
        "lineItemValue": 90
      }
    ],
    "total": 498
  },
  {
    "owner": "Craft",
    "client": "May",
    "salon": "CALLFLEX",
    "date": "2021-02-13",
    "email": "mayfernandez@callflex.com",
    "phone": "+1 (956) 593-3024",
    "address": "204 Jay Street, Rew, Massachusetts, 3921",
    "transactionNotes": "labore exercitation ad esse velit id adipisicing elit commodo nisi",
    "lineItems": [
      {
        "lineItemType": "expense",
        "lineItemContent": "haircut",
        "lineItemValue": 104
      },
      {
        "lineItemType": "product/service",
        "lineItemContent": "wash",
        "lineItemValue": 61
      },
      {
        "lineItemType": "expense",
        "lineItemContent": "wash",
        "lineItemValue": 112
      }
    ],
    "total": 989
  },
  {
    "owner": "Mia",
    "client": "Melody",
    "salon": "SENMAO",
    "date": "2017-08-27",
    "email": "melodyfernandez@senmao.com",
    "phone": "+1 (884) 591-3265",
    "address": "767 Lloyd Court, Rose, Virgin Islands, 4175",
    "transactionNotes": "magna Lorem aliqua ullamco incididunt excepteur reprehenderit consequat nostrud exercitation",
    "lineItems": [
      {
        "lineItemType": "expense",
        "lineItemContent": "wash",
        "lineItemValue": 129
      },
      {
        "lineItemType": "expense",
        "lineItemContent": "wash",
        "lineItemValue": 112
      },
      {
        "lineItemType": "product/service",
        "lineItemContent": "shave",
        "lineItemValue": 99
      }
    ],
    "total": 384
  },
  {
    "owner": "Vaughan",
    "client": "Castaneda",
    "salon": "ACCUPHARM",
    "date": "2016-02-17",
    "email": "castanedafernandez@accupharm.com",
    "phone": "+1 (986) 433-2215",
    "address": "299 Franklin Street, Sena, District Of Columbia, 5475",
    "transactionNotes": "dolore dolor mollit excepteur labore nulla veniam in excepteur dolore",
    "lineItems": [
      {
        "lineItemType": "expense",
        "lineItemContent": "color",
        "lineItemValue": 13
      },
      {
        "lineItemType": "expense",
        "lineItemContent": "nails",
        "lineItemValue": 56
      },
      {
        "lineItemType": "expense",
        "lineItemContent": "haircut",
        "lineItemValue": 125
      }
    ],
    "total": 112
  },
  {
    "owner": "Downs",
    "client": "Whitney",
    "salon": "RECRISYS",
    "date": "2016-05-04",
    "email": "whitneyfernandez@recrisys.com",
    "phone": "+1 (848) 483-2621",
    "address": "883 Rodney Street, Reinerton, New Jersey, 9793",
    "transactionNotes": "qui ut deserunt proident aliqua occaecat sint consequat tempor cillum",
    "lineItems": [
      {
        "lineItemType": "product/service",
        "lineItemContent": "nails",
        "lineItemValue": 122
      },
      {
        "lineItemType": "product/service",
        "lineItemContent": "wash",
        "lineItemValue": 6
      },
      {
        "lineItemType": "expense",
        "lineItemContent": "wash",
        "lineItemValue": 90
      }
    ],
    "total": 792
  },
  {
    "owner": "Curry",
    "client": "Cherry",
    "salon": "SOFTMICRO",
    "date": "2016-06-10",
    "email": "cherryfernandez@softmicro.com",
    "phone": "+1 (908) 571-3240",
    "address": "890 Covert Street, Rosewood, Wyoming, 569",
    "transactionNotes": "consequat est Lorem irure cillum elit ea labore ullamco consectetur",
    "lineItems": [
      {
        "lineItemType": "expense",
        "lineItemContent": "wash",
        "lineItemValue": 20
      },
      {
        "lineItemType": "product/service",
        "lineItemContent": "haircut",
        "lineItemValue": 55
      },
      {
        "lineItemType": "product/service",
        "lineItemContent": "nails",
        "lineItemValue": 32
      }
    ],
    "total": 466
  },
  {
    "owner": "Young",
    "client": "Cook",
    "salon": "ICOLOGY",
    "date": "2017-10-05",
    "email": "cookfernandez@icology.com",
    "phone": "+1 (854) 453-3018",
    "address": "538 Verona Place, Mappsville, South Dakota, 8008",
    "transactionNotes": "exercitation velit cillum enim laborum Lorem qui voluptate officia exercitation",
    "lineItems": [
      {
        "lineItemType": "product/service",
        "lineItemContent": "haircut",
        "lineItemValue": 69
      },
      {
        "lineItemType": "product/service",
        "lineItemContent": "nails",
        "lineItemValue": 40
      },
      {
        "lineItemType": "product/service",
        "lineItemContent": "shave",
        "lineItemValue": 129
      }
    ],
    "total": 763
  },
  {
    "owner": "Lelia",
    "client": "Claudette",
    "salon": "INDEXIA",
    "date": "2014-11-05",
    "email": "claudettefernandez@indexia.com",
    "phone": "+1 (920) 516-3041",
    "address": "620 Harrison Place, Bakersville, Arizona, 9749",
    "transactionNotes": "cupidatat dolor est nostrud do sint eiusmod dolor eiusmod magna",
    "lineItems": [
      {
        "lineItemType": "expense",
        "lineItemContent": "wash",
        "lineItemValue": 98
      },
      {
        "lineItemType": "product/service",
        "lineItemContent": "nails",
        "lineItemValue": 46
      },
      {
        "lineItemType": "expense",
        "lineItemContent": "wash",
        "lineItemValue": 59
      }
    ],
    "total": 994
  },
  {
    "owner": "Eliza",
    "client": "Valenzuela",
    "salon": "COMTENT",
    "date": "2021-03-09",
    "email": "valenzuelafernandez@comtent.com",
    "phone": "+1 (848) 518-2904",
    "address": "988 Emerson Place, Cornfields, Nebraska, 7191",
    "transactionNotes": "consectetur exercitation adipisicing ex reprehenderit officia aliqua sit dolore voluptate",
    "lineItems": [
      {
        "lineItemType": "product/service",
        "lineItemContent": "wash",
        "lineItemValue": 21
      },
      {
        "lineItemType": "product/service",
        "lineItemContent": "color",
        "lineItemValue": 80
      },
      {
        "lineItemType": "product/service",
        "lineItemContent": "haircut",
        "lineItemValue": 149
      }
    ],
    "total": 414
  },
  {
    "owner": "Julianne",
    "client": "Lacey",
    "salon": "ENTROFLEX",
    "date": "2016-04-02",
    "email": "laceyfernandez@entroflex.com",
    "phone": "+1 (872) 589-3683",
    "address": "975 Albemarle Terrace, Thermal, Ohio, 7394",
    "transactionNotes": "eiusmod sit proident labore qui exercitation esse officia cupidatat aliqua",
    "lineItems": [
      {
        "lineItemType": "product/service",
        "lineItemContent": "shave",
        "lineItemValue": 45
      },
      {
        "lineItemType": "expense",
        "lineItemContent": "haircut",
        "lineItemValue": 14
      },
      {
        "lineItemType": "expense",
        "lineItemContent": "wash",
        "lineItemValue": 133
      }
    ],
    "total": 943
  },
  {
    "owner": "Sherrie",
    "client": "Moss",
    "salon": "SPACEWAX",
    "date": "2019-10-25",
    "email": "mossfernandez@spacewax.com",
    "phone": "+1 (974) 450-3766",
    "address": "168 Diamond Street, Chloride, New York, 7908",
    "transactionNotes": "officia ex dolore eu minim nostrud do culpa velit cillum",
    "lineItems": [
      {
        "lineItemType": "expense",
        "lineItemContent": "nails",
        "lineItemValue": 111
      },
      {
        "lineItemType": "expense",
        "lineItemContent": "wash",
        "lineItemValue": 51
      },
      {
        "lineItemType": "product/service",
        "lineItemContent": "color",
        "lineItemValue": 115
      }
    ],
    "total": 611
  },
  {
    "owner": "Keisha",
    "client": "Jewell",
    "salon": "VINCH",
    "date": "2016-02-22",
    "email": "jewellfernandez@vinch.com",
    "phone": "+1 (838) 531-2222",
    "address": "752 Lorraine Street, Dodge, Northern Mariana Islands, 3617",
    "transactionNotes": "et sit ullamco enim non irure sunt fugiat reprehenderit velit",
    "lineItems": [
      {
        "lineItemType": "expense",
        "lineItemContent": "shave",
        "lineItemValue": 128
      },
      {
        "lineItemType": "product/service",
        "lineItemContent": "nails",
        "lineItemValue": 90
      },
      {
        "lineItemType": "product/service",
        "lineItemContent": "haircut",
        "lineItemValue": 63
      }
    ],
    "total": 163
  },
  {
    "owner": "Navarro",
    "client": "Desiree",
    "salon": "COMTEST",
    "date": "2016-06-01",
    "email": "desireefernandez@comtest.com",
    "phone": "+1 (845) 526-3107",
    "address": "308 Brooklyn Road, Martinsville, Kansas, 1320",
    "transactionNotes": "minim ipsum excepteur consectetur sint adipisicing dolor Lorem mollit nostrud",
    "lineItems": [
      {
        "lineItemType": "product/service",
        "lineItemContent": "wash",
        "lineItemValue": 2
      },
      {
        "lineItemType": "expense",
        "lineItemContent": "haircut",
        "lineItemValue": 123
      },
      {
        "lineItemType": "product/service",
        "lineItemContent": "color",
        "lineItemValue": 113
      }
    ],
    "total": 424
  },
  {
    "owner": "Davidson",
    "client": "Blanca",
    "salon": "UPLINX",
    "date": "2019-03-10",
    "email": "blancafernandez@uplinx.com",
    "phone": "+1 (832) 463-3207",
    "address": "139 Quentin Road, Martinez, Missouri, 4920",
    "transactionNotes": "proident deserunt eiusmod veniam cupidatat ad in occaecat eiusmod ex",
    "lineItems": [
      {
        "lineItemType": "expense",
        "lineItemContent": "nails",
        "lineItemValue": 54
      },
      {
        "lineItemType": "product/service",
        "lineItemContent": "shave",
        "lineItemValue": 37
      },
      {
        "lineItemType": "product/service",
        "lineItemContent": "haircut",
        "lineItemValue": 83
      }
    ],
    "total": 588
  },
  {
    "owner": "Justine",
    "client": "Cara",
    "salon": "LIMAGE",
    "date": "2014-08-23",
    "email": "carafernandez@limage.com",
    "phone": "+1 (914) 535-2023",
    "address": "982 Douglass Street, Ivanhoe, Montana, 5878",
    "transactionNotes": "culpa eiusmod veniam nulla pariatur ea Lorem aliqua exercitation do",
    "lineItems": [
      {
        "lineItemType": "product/service",
        "lineItemContent": "shave",
        "lineItemValue": 49
      },
      {
        "lineItemType": "expense",
        "lineItemContent": "color",
        "lineItemValue": 13
      },
      {
        "lineItemType": "product/service",
        "lineItemContent": "haircut",
        "lineItemValue": 82
      }
    ],
    "total": 689
  },
  {
    "owner": "Edna",
    "client": "Christa",
    "salon": "VIXO",
    "date": "2020-12-08",
    "email": "christafernandez@vixo.com",
    "phone": "+1 (815) 582-3288",
    "address": "947 Mayfair Drive, Fairfield, Idaho, 1357",
    "transactionNotes": "proident do voluptate mollit minim amet magna sit eiusmod aliquip",
    "lineItems": [
      {
        "lineItemType": "expense",
        "lineItemContent": "wash",
        "lineItemValue": 126
      },
      {
        "lineItemType": "expense",
        "lineItemContent": "haircut",
        "lineItemValue": 106
      },
      {
        "lineItemType": "product/service",
        "lineItemContent": "shave",
        "lineItemValue": 66
      }
    ],
    "total": 341
  },
  {
    "owner": "Morgan",
    "client": "Duke",
    "salon": "PYRAMIS",
    "date": "2016-11-03",
    "email": "dukefernandez@pyramis.com",
    "phone": "+1 (923) 549-3283",
    "address": "561 Hart Street, Crawfordsville, Kentucky, 3591",
    "transactionNotes": "amet excepteur do veniam consectetur tempor aute officia mollit laboris",
    "lineItems": [
      {
        "lineItemType": "expense",
        "lineItemContent": "wash",
        "lineItemValue": 65
      },
      {
        "lineItemType": "product/service",
        "lineItemContent": "haircut",
        "lineItemValue": 129
      },
      {
        "lineItemType": "product/service",
        "lineItemContent": "shave",
        "lineItemValue": 41
      }
    ],
    "total": 788
  },
  {
    "owner": "Maricela",
    "client": "Everett",
    "salon": "DIGIGEN",
    "date": "2016-01-27",
    "email": "everettfernandez@digigen.com",
    "phone": "+1 (918) 549-2212",
    "address": "807 Roebling Street, Austinburg, New Hampshire, 3109",
    "transactionNotes": "consectetur non cupidatat dolor eu proident laborum officia ipsum quis",
    "lineItems": [
      {
        "lineItemType": "product/service",
        "lineItemContent": "shave",
        "lineItemValue": 108
      },
      {
        "lineItemType": "product/service",
        "lineItemContent": "wash",
        "lineItemValue": 119
      },
      {
        "lineItemType": "expense",
        "lineItemContent": "wash",
        "lineItemValue": 142
      }
    ],
    "total": 265
  },
  {
    "owner": "Lesa",
    "client": "Beasley",
    "salon": "VERAQ",
    "date": "2015-09-21",
    "email": "beasleyfernandez@veraq.com",
    "phone": "+1 (826) 412-2409",
    "address": "597 Merit Court, Deltaville, Nevada, 6373",
    "transactionNotes": "magna ullamco cupidatat sit dolore officia dolore tempor ex eiusmod",
    "lineItems": [
      {
        "lineItemType": "product/service",
        "lineItemContent": "nails",
        "lineItemValue": 26
      },
      {
        "lineItemType": "product/service",
        "lineItemContent": "color",
        "lineItemValue": 90
      },
      {
        "lineItemType": "product/service",
        "lineItemContent": "haircut",
        "lineItemValue": 60
      }
    ],
    "total": 161
  },
  {
    "owner": "Slater",
    "client": "Aguirre",
    "salon": "ZILLA",
    "date": "2015-07-18",
    "email": "aguirrefernandez@zilla.com",
    "phone": "+1 (921) 476-3246",
    "address": "474 Tiffany Place, Independence, Alaska, 2104",
    "transactionNotes": "sint ex nostrud aute fugiat aliquip occaecat labore veniam exercitation",
    "lineItems": [
      {
        "lineItemType": "product/service",
        "lineItemContent": "nails",
        "lineItemValue": 124
      },
      {
        "lineItemType": "product/service",
        "lineItemContent": "haircut",
        "lineItemValue": 8
      },
      {
        "lineItemType": "expense",
        "lineItemContent": "wash",
        "lineItemValue": 18
      }
    ],
    "total": 616
  },
  {
    "owner": "Welch",
    "client": "Oneil",
    "salon": "XSPORTS",
    "date": "2018-07-29",
    "email": "oneilfernandez@xsports.com",
    "phone": "+1 (985) 484-3979",
    "address": "485 Dinsmore Place, Como, West Virginia, 9718",
    "transactionNotes": "nisi commodo amet laborum tempor labore reprehenderit ex proident aliquip",
    "lineItems": [
      {
        "lineItemType": "expense",
        "lineItemContent": "wash",
        "lineItemValue": 30
      },
      {
        "lineItemType": "expense",
        "lineItemContent": "haircut",
        "lineItemValue": 95
      },
      {
        "lineItemType": "expense",
        "lineItemContent": "wash",
        "lineItemValue": 16
      }
    ],
    "total": 775
  },
  {
    "owner": "Madelyn",
    "client": "Bessie",
    "salon": "BALUBA",
    "date": "2019-05-08",
    "email": "bessiefernandez@baluba.com",
    "phone": "+1 (981) 503-2242",
    "address": "365 Greene Avenue, Derwood, Oklahoma, 1202",
    "transactionNotes": "dolore do pariatur ea occaecat ut quis pariatur do Lorem",
    "lineItems": [
      {
        "lineItemType": "expense",
        "lineItemContent": "wash",
        "lineItemValue": 143
      },
      {
        "lineItemType": "product/service",
        "lineItemContent": "shave",
        "lineItemValue": 145
      },
      {
        "lineItemType": "expense",
        "lineItemContent": "color",
        "lineItemValue": 13
      }
    ],
    "total": 834
  },
  {
    "owner": "Herman",
    "client": "Anthony",
    "salon": "ZENCO",
    "date": "2020-07-24",
    "email": "anthonyfernandez@zenco.com",
    "phone": "+1 (865) 516-3974",
    "address": "220 Schenck Place, Graniteville, American Samoa, 5958",
    "transactionNotes": "do ipsum nostrud proident ullamco ex fugiat elit non do",
    "lineItems": [
      {
        "lineItemType": "expense",
        "lineItemContent": "color",
        "lineItemValue": 74
      },
      {
        "lineItemType": "expense",
        "lineItemContent": "haircut",
        "lineItemValue": 49
      },
      {
        "lineItemType": "expense",
        "lineItemContent": "haircut",
        "lineItemValue": 33
      }
    ],
    "total": 605
  },
  {
    "owner": "Morrow",
    "client": "Francine",
    "salon": "KLUGGER",
    "date": "2016-10-06",
    "email": "francinefernandez@klugger.com",
    "phone": "+1 (967) 400-3571",
    "address": "362 Burnett Street, Condon, Utah, 9402",
    "transactionNotes": "nostrud ad duis elit dolor do est eu enim anim",
    "lineItems": [
      {
        "lineItemType": "expense",
        "lineItemContent": "shave",
        "lineItemValue": 99
      },
      {
        "lineItemType": "expense",
        "lineItemContent": "color",
        "lineItemValue": 116
      },
      {
        "lineItemType": "product/service",
        "lineItemContent": "wash",
        "lineItemValue": 75
      }
    ],
    "total": 788
  },
  {
    "owner": "Frost",
    "client": "Bertie",
    "salon": "ELECTONIC",
    "date": "2020-09-03",
    "email": "bertiefernandez@electonic.com",
    "phone": "+1 (940) 404-3778",
    "address": "191 Union Avenue, Stevens, Minnesota, 1163",
    "transactionNotes": "quis ut officia amet est amet excepteur qui exercitation cupidatat",
    "lineItems": [
      {
        "lineItemType": "expense",
        "lineItemContent": "haircut",
        "lineItemValue": 125
      },
      {
        "lineItemType": "expense",
        "lineItemContent": "wash",
        "lineItemValue": 3
      },
      {
        "lineItemType": "expense",
        "lineItemContent": "haircut",
        "lineItemValue": 130
      }
    ],
    "total": 506
  },
  {
    "owner": "Mcdowell",
    "client": "Warner",
    "salon": "PIGZART",
    "date": "2018-02-11",
    "email": "warnerfernandez@pigzart.com",
    "phone": "+1 (846) 591-3601",
    "address": "925 Conover Street, Sunriver, North Dakota, 2986",
    "transactionNotes": "amet nulla Lorem laborum aliqua sint irure aute commodo excepteur",
    "lineItems": [
      {
        "lineItemType": "product/service",
        "lineItemContent": "shave",
        "lineItemValue": 76
      },
      {
        "lineItemType": "expense",
        "lineItemContent": "nails",
        "lineItemValue": 68
      },
      {
        "lineItemType": "expense",
        "lineItemContent": "shave",
        "lineItemValue": 24
      }
    ],
    "total": 373
  },
  {
    "owner": "Elizabeth",
    "client": "Atkinson",
    "salon": "UNIA",
    "date": "2015-07-24",
    "email": "atkinsonfernandez@unia.com",
    "phone": "+1 (805) 472-3821",
    "address": "218 Batchelder Street, Westmoreland, Delaware, 5744",
    "transactionNotes": "ad deserunt non incididunt ipsum sunt qui consequat enim incididunt",
    "lineItems": [
      {
        "lineItemType": "product/service",
        "lineItemContent": "wash",
        "lineItemValue": 44
      },
      {
        "lineItemType": "product/service",
        "lineItemContent": "haircut",
        "lineItemValue": 56
      },
      {
        "lineItemType": "product/service",
        "lineItemContent": "wash",
        "lineItemValue": 17
      }
    ],
    "total": 490
  },
  {
    "owner": "Barrera",
    "client": "Snyder",
    "salon": "CYTRAK",
    "date": "2016-03-18",
    "email": "snyderfernandez@cytrak.com",
    "phone": "+1 (868) 519-2969",
    "address": "171 Waldorf Court, Homeworth, Georgia, 3948",
    "transactionNotes": "enim adipisicing occaecat cillum sunt deserunt elit commodo labore quis",
    "lineItems": [
      {
        "lineItemType": "product/service",
        "lineItemContent": "nails",
        "lineItemValue": 112
      },
      {
        "lineItemType": "product/service",
        "lineItemContent": "color",
        "lineItemValue": 136
      },
      {
        "lineItemType": "product/service",
        "lineItemContent": "haircut",
        "lineItemValue": 28
      }
    ],
    "total": 928
  },
  {
    "owner": "Figueroa",
    "client": "Bettie",
    "salon": "CENTREXIN",
    "date": "2017-12-15",
    "email": "bettiefernandez@centrexin.com",
    "phone": "+1 (926) 571-3842",
    "address": "634 Sackett Street, Farmington, Louisiana, 8396",
    "transactionNotes": "ad commodo officia eiusmod labore ad incididunt nisi ad laboris",
    "lineItems": [
      {
        "lineItemType": "expense",
        "lineItemContent": "haircut",
        "lineItemValue": 103
      },
      {
        "lineItemType": "product/service",
        "lineItemContent": "haircut",
        "lineItemValue": 42
      },
      {
        "lineItemType": "expense",
        "lineItemContent": "nails",
        "lineItemValue": 71
      }
    ],
    "total": 809
  },
  {
    "owner": "Pearlie",
    "client": "Greta",
    "salon": "QUARMONY",
    "date": "2019-07-31",
    "email": "gretafernandez@quarmony.com",
    "phone": "+1 (860) 423-2226",
    "address": "135 Grand Avenue, Eggertsville, Connecticut, 9707",
    "transactionNotes": "incididunt ullamco exercitation ullamco cupidatat et tempor minim ad in",
    "lineItems": [
      {
        "lineItemType": "product/service",
        "lineItemContent": "wash",
        "lineItemValue": 53
      },
      {
        "lineItemType": "product/service",
        "lineItemContent": "color",
        "lineItemValue": 34
      },
      {
        "lineItemType": "expense",
        "lineItemContent": "haircut",
        "lineItemValue": 126
      }
    ],
    "total": 895
  },
  {
    "owner": "Cantrell",
    "client": "Small",
    "salon": "GINKOGENE",
    "date": "2020-10-07",
    "email": "smallfernandez@ginkogene.com",
    "phone": "+1 (835) 563-3385",
    "address": "969 Luquer Street, Masthope, Guam, 2725",
    "transactionNotes": "aliquip veniam ipsum aliqua duis adipisicing minim dolor dolor irure",
    "lineItems": [
      {
        "lineItemType": "product/service",
        "lineItemContent": "color",
        "lineItemValue": 107
      },
      {
        "lineItemType": "product/service",
        "lineItemContent": "color",
        "lineItemValue": 108
      },
      {
        "lineItemType": "expense",
        "lineItemContent": "nails",
        "lineItemValue": 80
      }
    ],
    "total": 552
  },
  {
    "owner": "Sweet",
    "client": "Ball",
    "salon": "MEDMEX",
    "date": "2020-10-27",
    "email": "ballfernandez@medmex.com",
    "phone": "+1 (867) 571-3225",
    "address": "186 Halleck Street, Lorraine, Rhode Island, 6916",
    "transactionNotes": "labore irure consequat in do aliquip enim ipsum fugiat occaecat",
    "lineItems": [
      {
        "lineItemType": "expense",
        "lineItemContent": "haircut",
        "lineItemValue": 134
      },
      {
        "lineItemType": "product/service",
        "lineItemContent": "nails",
        "lineItemValue": 127
      },
      {
        "lineItemType": "product/service",
        "lineItemContent": "haircut",
        "lineItemValue": 85
      }
    ],
    "total": 597
  },
  {
    "owner": "Minnie",
    "client": "Roy",
    "salon": "ANARCO",
    "date": "2019-03-19",
    "email": "royfernandez@anarco.com",
    "phone": "+1 (982) 418-3278",
    "address": "974 Fair Street, Floris, Marshall Islands, 1652",
    "transactionNotes": "qui ex magna velit amet ea exercitation nulla incididunt mollit",
    "lineItems": [
      {
        "lineItemType": "expense",
        "lineItemContent": "wash",
        "lineItemValue": 88
      },
      {
        "lineItemType": "expense",
        "lineItemContent": "color",
        "lineItemValue": 7
      },
      {
        "lineItemType": "product/service",
        "lineItemContent": "shave",
        "lineItemValue": 40
      }
    ],
    "total": 149
  },
  {
    "owner": "Debra",
    "client": "Oneill",
    "salon": "HONOTRON",
    "date": "2018-06-11",
    "email": "oneillfernandez@honotron.com",
    "phone": "+1 (865) 454-2716",
    "address": "488 Stillwell Place, Gwynn, California, 5367",
    "transactionNotes": "sit labore aute reprehenderit nisi cillum ut aliqua excepteur laboris",
    "lineItems": [
      {
        "lineItemType": "expense",
        "lineItemContent": "color",
        "lineItemValue": 143
      },
      {
        "lineItemType": "product/service",
        "lineItemContent": "haircut",
        "lineItemValue": 64
      },
      {
        "lineItemType": "product/service",
        "lineItemContent": "color",
        "lineItemValue": 31
      }
    ],
    "total": 331
  },
  {
    "owner": "Neva",
    "client": "Olive",
    "salon": "STROZEN",
    "date": "2018-10-20",
    "email": "olivefernandez@strozen.com",
    "phone": "+1 (854) 535-3297",
    "address": "930 Cambridge Place, Naomi, Indiana, 7237",
    "transactionNotes": "nulla sint commodo cupidatat do irure dolor amet dolore duis",
    "lineItems": [
      {
        "lineItemType": "expense",
        "lineItemContent": "color",
        "lineItemValue": 41
      },
      {
        "lineItemType": "expense",
        "lineItemContent": "color",
        "lineItemValue": 48
      },
      {
        "lineItemType": "expense",
        "lineItemContent": "nails",
        "lineItemValue": 70
      }
    ],
    "total": 312
  },
  {
    "owner": "Vicky",
    "client": "Kramer",
    "salon": "DANCITY",
    "date": "2014-11-28",
    "email": "kramerfernandez@dancity.com",
    "phone": "+1 (914) 568-2265",
    "address": "643 Carroll Street, Robbins, Virginia, 2173",
    "transactionNotes": "mollit fugiat id et nulla velit consequat occaecat eiusmod exercitation",
    "lineItems": [
      {
        "lineItemType": "product/service",
        "lineItemContent": "color",
        "lineItemValue": 94
      },
      {
        "lineItemType": "expense",
        "lineItemContent": "nails",
        "lineItemValue": 122
      },
      {
        "lineItemType": "expense",
        "lineItemContent": "shave",
        "lineItemValue": 113
      }
    ],
    "total": 514
  },
  {
    "owner": "Celina",
    "client": "Church",
    "salon": "PLASMOSIS",
    "date": "2016-01-03",
    "email": "churchfernandez@plasmosis.com",
    "phone": "+1 (860) 585-3555",
    "address": "978 Hamilton Walk, Belvoir, Hawaii, 6781",
    "transactionNotes": "ut aute quis ad ut non aute mollit enim magna",
    "lineItems": [
      {
        "lineItemType": "expense",
        "lineItemContent": "color",
        "lineItemValue": 74
      },
      {
        "lineItemType": "expense",
        "lineItemContent": "wash",
        "lineItemValue": 137
      },
      {
        "lineItemType": "expense",
        "lineItemContent": "shave",
        "lineItemValue": 66
      }
    ],
    "total": 904
  },
  {
    "owner": "Poole",
    "client": "James",
    "salon": "QUINEX",
    "date": "2016-09-22",
    "email": "jamesfernandez@quinex.com",
    "phone": "+1 (887) 430-2260",
    "address": "217 Nevins Street, Skyland, Palau, 9156",
    "transactionNotes": "cillum ad commodo veniam nisi ut non nulla cupidatat esse",
    "lineItems": [
      {
        "lineItemType": "expense",
        "lineItemContent": "color",
        "lineItemValue": 17
      },
      {
        "lineItemType": "product/service",
        "lineItemContent": "wash",
        "lineItemValue": 40
      },
      {
        "lineItemType": "expense",
        "lineItemContent": "color",
        "lineItemValue": 30
      }
    ],
    "total": 576
  },
  {
    "owner": "Burch",
    "client": "Rasmussen",
    "salon": "ZAJ",
    "date": "2020-04-18",
    "email": "rasmussenfernandez@zaj.com",
    "phone": "+1 (894) 500-3281",
    "address": "825 Heath Place, Tonopah, Wisconsin, 7071",
    "transactionNotes": "enim non eiusmod occaecat incididunt ipsum adipisicing ullamco sunt elit",
    "lineItems": [
      {
        "lineItemType": "product/service",
        "lineItemContent": "shave",
        "lineItemValue": 118
      },
      {
        "lineItemType": "expense",
        "lineItemContent": "nails",
        "lineItemValue": 130
      },
      {
        "lineItemType": "expense",
        "lineItemContent": "nails",
        "lineItemValue": 129
      }
    ],
    "total": 748
  },
  {
    "owner": "Sawyer",
    "client": "Ramos",
    "salon": "ZILLACON",
    "date": "2016-02-26",
    "email": "ramosfernandez@zillacon.com",
    "phone": "+1 (913) 473-3671",
    "address": "792 Sullivan Place, Vale, North Carolina, 5541",
    "transactionNotes": "pariatur commodo minim magna proident aute nulla aliqua commodo non",
    "lineItems": [
      {
        "lineItemType": "product/service",
        "lineItemContent": "wash",
        "lineItemValue": 1
      },
      {
        "lineItemType": "expense",
        "lineItemContent": "haircut",
        "lineItemValue": 143
      },
      {
        "lineItemType": "product/service",
        "lineItemContent": "wash",
        "lineItemValue": 123
      }
    ],
    "total": 453
  },
  {
    "owner": "Skinner",
    "client": "Pugh",
    "salon": "VOLAX",
    "date": "2020-12-27",
    "email": "pughfernandez@volax.com",
    "phone": "+1 (830) 464-2526",
    "address": "479 Melba Court, Marshall, Michigan, 5602",
    "transactionNotes": "laboris consectetur sunt et occaecat nisi fugiat Lorem cupidatat laboris",
    "lineItems": [
      {
        "lineItemType": "expense",
        "lineItemContent": "wash",
        "lineItemValue": 149
      },
      {
        "lineItemType": "expense",
        "lineItemContent": "color",
        "lineItemValue": 104
      },
      {
        "lineItemType": "expense",
        "lineItemContent": "nails",
        "lineItemValue": 149
      }
    ],
    "total": 458
  },
  {
    "owner": "Rutledge",
    "client": "Pierce",
    "salon": "FLEETMIX",
    "date": "2014-09-04",
    "email": "piercefernandez@fleetmix.com",
    "phone": "+1 (803) 551-2825",
    "address": "570 Bowery Street, Broadlands, Maine, 9998",
    "transactionNotes": "excepteur fugiat esse veniam voluptate adipisicing sint amet elit excepteur",
    "lineItems": [
      {
        "lineItemType": "expense",
        "lineItemContent": "color",
        "lineItemValue": 81
      },
      {
        "lineItemType": "product/service",
        "lineItemContent": "nails",
        "lineItemValue": 2
      },
      {
        "lineItemType": "expense",
        "lineItemContent": "nails",
        "lineItemValue": 75
      }
    ],
    "total": 250
  },
  {
    "owner": "Moran",
    "client": "Hilary",
    "salon": "GEOSTELE",
    "date": "2015-08-02",
    "email": "hilaryfernandez@geostele.com",
    "phone": "+1 (881) 535-2991",
    "address": "489 Orient Avenue, Belmont, Oregon, 9265",
    "transactionNotes": "excepteur excepteur officia anim elit anim nostrud commodo nostrud velit",
    "lineItems": [
      {
        "lineItemType": "expense",
        "lineItemContent": "shave",
        "lineItemValue": 12
      },
      {
        "lineItemType": "product/service",
        "lineItemContent": "wash",
        "lineItemValue": 126
      },
      {
        "lineItemType": "expense",
        "lineItemContent": "haircut",
        "lineItemValue": 58
      }
    ],
    "total": 134
  },
  {
    "owner": "Hilda",
    "client": "Luna",
    "salon": "ZAPHIRE",
    "date": "2018-09-19",
    "email": "lunafernandez@zaphire.com",
    "phone": "+1 (840) 591-3838",
    "address": "747 Forbell Street, Babb, Florida, 4424",
    "transactionNotes": "et minim incididunt velit nostrud voluptate commodo anim laborum pariatur",
    "lineItems": [
      {
        "lineItemType": "expense",
        "lineItemContent": "color",
        "lineItemValue": 18
      },
      {
        "lineItemType": "expense",
        "lineItemContent": "color",
        "lineItemValue": 81
      },
      {
        "lineItemType": "expense",
        "lineItemContent": "color",
        "lineItemValue": 18
      }
    ],
    "total": 959
  },
  {
    "owner": "Ashlee",
    "client": "Hahn",
    "salon": "NETERIA",
    "date": "2017-02-17",
    "email": "hahnfernandez@neteria.com",
    "phone": "+1 (884) 510-2229",
    "address": "818 Ludlam Place, Bellfountain, Illinois, 8511",
    "transactionNotes": "Lorem elit ea ex duis Lorem adipisicing dolor commodo eiusmod",
    "lineItems": [
      {
        "lineItemType": "product/service",
        "lineItemContent": "haircut",
        "lineItemValue": 113
      },
      {
        "lineItemType": "expense",
        "lineItemContent": "haircut",
        "lineItemValue": 34
      },
      {
        "lineItemType": "product/service",
        "lineItemContent": "color",
        "lineItemValue": 3
      }
    ],
    "total": 937
  },
  {
    "owner": "Aileen",
    "client": "Iris",
    "salon": "GEEKY",
    "date": "2021-02-28",
    "email": "irisfernandez@geeky.com",
    "phone": "+1 (853) 524-3745",
    "address": "857 Sutter Avenue, Eagleville, Federated States Of Micronesia, 439",
    "transactionNotes": "cillum enim dolore fugiat duis culpa aliquip est qui cillum",
    "lineItems": [
      {
        "lineItemType": "expense",
        "lineItemContent": "wash",
        "lineItemValue": 90
      },
      {
        "lineItemType": "product/service",
        "lineItemContent": "haircut",
        "lineItemValue": 119
      },
      {
        "lineItemType": "expense",
        "lineItemContent": "nails",
        "lineItemValue": 62
      }
    ],
    "total": 834
  },
  {
    "owner": "Marina",
    "client": "Bullock",
    "salon": "SUPREMIA",
    "date": "2020-03-31",
    "email": "bullockfernandez@supremia.com",
    "phone": "+1 (921) 435-2864",
    "address": "330 Himrod Street, Caroleen, Tennessee, 7364",
    "transactionNotes": "eiusmod irure sunt excepteur pariatur velit eiusmod nulla nostrud proident",
    "lineItems": [
      {
        "lineItemType": "product/service",
        "lineItemContent": "wash",
        "lineItemValue": 79
      },
      {
        "lineItemType": "product/service",
        "lineItemContent": "nails",
        "lineItemValue": 66
      },
      {
        "lineItemType": "expense",
        "lineItemContent": "shave",
        "lineItemValue": 45
      }
    ],
    "total": 316
  },
  {
    "owner": "Dionne",
    "client": "Jo",
    "salon": "TECHTRIX",
    "date": "2018-08-11",
    "email": "jofernandez@techtrix.com",
    "phone": "+1 (816) 562-2303",
    "address": "605 Dunham Place, Otranto, Washington, 6586",
    "transactionNotes": "duis ex esse sint enim nostrud reprehenderit elit aliqua consectetur",
    "lineItems": [
      {
        "lineItemType": "product/service",
        "lineItemContent": "color",
        "lineItemValue": 99
      },
      {
        "lineItemType": "expense",
        "lineItemContent": "haircut",
        "lineItemValue": 10
      },
      {
        "lineItemType": "product/service",
        "lineItemContent": "nails",
        "lineItemValue": 111
      }
    ],
    "total": 132
  },
  {
    "owner": "Queen",
    "client": "Toni",
    "salon": "GEEKWAGON",
    "date": "2018-04-21",
    "email": "tonifernandez@geekwagon.com",
    "phone": "+1 (851) 514-2286",
    "address": "155 Winthrop Street, Dubois, Puerto Rico, 2508",
    "transactionNotes": "ex in duis nisi tempor quis consectetur deserunt sint est",
    "lineItems": [
      {
        "lineItemType": "product/service",
        "lineItemContent": "nails",
        "lineItemValue": 142
      },
      {
        "lineItemType": "product/service",
        "lineItemContent": "wash",
        "lineItemValue": 97
      },
      {
        "lineItemType": "product/service",
        "lineItemContent": "haircut",
        "lineItemValue": 110
      }
    ],
    "total": 866
  },
  {
    "owner": "Kerri",
    "client": "Giles",
    "salon": "RETROTEX",
    "date": "2018-06-18",
    "email": "gilesfernandez@retrotex.com",
    "phone": "+1 (989) 437-2162",
    "address": "194 Bijou Avenue, Fairlee, Texas, 2296",
    "transactionNotes": "ipsum exercitation ipsum enim sit eiusmod mollit exercitation incididunt est",
    "lineItems": [
      {
        "lineItemType": "expense",
        "lineItemContent": "wash",
        "lineItemValue": 113
      },
      {
        "lineItemType": "product/service",
        "lineItemContent": "haircut",
        "lineItemValue": 87
      },
      {
        "lineItemType": "product/service",
        "lineItemContent": "haircut",
        "lineItemValue": 115
      }
    ],
    "total": 148
  },
  {
    "owner": "Lora",
    "client": "Williamson",
    "salon": "FISHLAND",
    "date": "2020-05-13",
    "email": "williamsonfernandez@fishland.com",
    "phone": "+1 (881) 434-2612",
    "address": "975 Garfield Place, Greensburg, Alabama, 9671",
    "transactionNotes": "id proident laboris commodo ipsum fugiat fugiat tempor laboris do",
    "lineItems": [
      {
        "lineItemType": "product/service",
        "lineItemContent": "nails",
        "lineItemValue": 127
      },
      {
        "lineItemType": "product/service",
        "lineItemContent": "haircut",
        "lineItemValue": 111
      },
      {
        "lineItemType": "product/service",
        "lineItemContent": "nails",
        "lineItemValue": 72
      }
    ],
    "total": 936
  },
  {
    "owner": "Melissa",
    "client": "Dunn",
    "salon": "DAISU",
    "date": "2020-03-04",
    "email": "dunnfernandez@daisu.com",
    "phone": "+1 (824) 407-2468",
    "address": "471 Williams Place, Kenwood, Mississippi, 8986",
    "transactionNotes": "esse dolor nisi aliquip ut elit eiusmod anim aute mollit",
    "lineItems": [
      {
        "lineItemType": "expense",
        "lineItemContent": "color",
        "lineItemValue": 117
      },
      {
        "lineItemType": "product/service",
        "lineItemContent": "shave",
        "lineItemValue": 57
      },
      {
        "lineItemType": "product/service",
        "lineItemContent": "wash",
        "lineItemValue": 124
      }
    ],
    "total": 696
  },
  {
    "owner": "Hobbs",
    "client": "Amalia",
    "salon": "ZERBINA",
    "date": "2016-06-25",
    "email": "amaliafernandez@zerbina.com",
    "phone": "+1 (877) 524-3509",
    "address": "676 Irving Place, Connerton, South Carolina, 6951",
    "transactionNotes": "deserunt duis sunt quis ex nisi do ipsum duis excepteur",
    "lineItems": [
      {
        "lineItemType": "expense",
        "lineItemContent": "color",
        "lineItemValue": 82
      },
      {
        "lineItemType": "product/service",
        "lineItemContent": "nails",
        "lineItemValue": 23
      },
      {
        "lineItemType": "expense",
        "lineItemContent": "nails",
        "lineItemValue": 94
      }
    ],
    "total": 286
  },
  {
    "owner": "Haney",
    "client": "Isabel",
    "salon": "VIAGREAT",
    "date": "2015-07-25",
    "email": "isabelfernandez@viagreat.com",
    "phone": "+1 (835) 566-2077",
    "address": "732 Wogan Terrace, Bodega, Vermont, 4279",
    "transactionNotes": "amet sint in dolore non magna est pariatur quis do",
    "lineItems": [
      {
        "lineItemType": "product/service",
        "lineItemContent": "color",
        "lineItemValue": 62
      },
      {
        "lineItemType": "product/service",
        "lineItemContent": "wash",
        "lineItemValue": 142
      },
      {
        "lineItemType": "expense",
        "lineItemContent": "shave",
        "lineItemValue": 114
      }
    ],
    "total": 118
  },
  {
    "owner": "Cash",
    "client": "Burton",
    "salon": "PIVITOL",
    "date": "2014-11-25",
    "email": "burtonfernandez@pivitol.com",
    "phone": "+1 (832) 540-2088",
    "address": "716 Gunnison Court, Caberfae, Colorado, 1729",
    "transactionNotes": "incididunt duis nisi Lorem proident laboris duis sint exercitation voluptate",
    "lineItems": [
      {
        "lineItemType": "product/service",
        "lineItemContent": "nails",
        "lineItemValue": 86
      },
      {
        "lineItemType": "product/service",
        "lineItemContent": "haircut",
        "lineItemValue": 108
      },
      {
        "lineItemType": "expense",
        "lineItemContent": "shave",
        "lineItemValue": 65
      }
    ],
    "total": 108
  },
  {
    "owner": "Potter",
    "client": "Debbie",
    "salon": "PROXSOFT",
    "date": "2014-10-09",
    "email": "debbiefernandez@proxsoft.com",
    "phone": "+1 (806) 556-3601",
    "address": "302 Lake Avenue, Delco, Iowa, 1180",
    "transactionNotes": "aliqua adipisicing amet tempor et consectetur incididunt minim laboris voluptate",
    "lineItems": [
      {
        "lineItemType": "product/service",
        "lineItemContent": "shave",
        "lineItemValue": 33
      },
      {
        "lineItemType": "product/service",
        "lineItemContent": "wash",
        "lineItemValue": 51
      },
      {
        "lineItemType": "expense",
        "lineItemContent": "nails",
        "lineItemValue": 108
      }
    ],
    "total": 871
  },
  {
    "owner": "Blanche",
    "client": "Vera",
    "salon": "XYMONK",
    "date": "2014-07-10",
    "email": "verafernandez@xymonk.com",
    "phone": "+1 (855) 504-3252",
    "address": "126 Bragg Court, Kennedyville, Maryland, 3409",
    "transactionNotes": "ex deserunt consequat magna voluptate sint pariatur anim nulla culpa",
    "lineItems": [
      {
        "lineItemType": "product/service",
        "lineItemContent": "haircut",
        "lineItemValue": 1
      },
      {
        "lineItemType": "product/service",
        "lineItemContent": "wash",
        "lineItemValue": 143
      },
      {
        "lineItemType": "expense",
        "lineItemContent": "haircut",
        "lineItemValue": 9
      }
    ],
    "total": 354
  },
  {
    "owner": "Diana",
    "client": "Norton",
    "salon": "COMVERGES",
    "date": "2015-10-16",
    "email": "nortonfernandez@comverges.com",
    "phone": "+1 (804) 425-3401",
    "address": "376 Flatbush Avenue, Cliffside, New Mexico, 4431",
    "transactionNotes": "quis cupidatat duis velit et labore dolore ea aute irure",
    "lineItems": [
      {
        "lineItemType": "expense",
        "lineItemContent": "color",
        "lineItemValue": 101
      },
      {
        "lineItemType": "product/service",
        "lineItemContent": "nails",
        "lineItemValue": 11
      },
      {
        "lineItemType": "product/service",
        "lineItemContent": "color",
        "lineItemValue": 61
      }
    ],
    "total": 600
  },
  {
    "owner": "Elva",
    "client": "Roberta",
    "salon": "FLUM",
    "date": "2017-10-05",
    "email": "robertafernandez@flum.com",
    "phone": "+1 (823) 552-3342",
    "address": "101 Imlay Street, Manila, Arkansas, 4434",
    "transactionNotes": "nostrud fugiat veniam culpa mollit do ea exercitation et occaecat",
    "lineItems": [
      {
        "lineItemType": "product/service",
        "lineItemContent": "wash",
        "lineItemValue": 56
      },
      {
        "lineItemType": "expense",
        "lineItemContent": "shave",
        "lineItemValue": 82
      },
      {
        "lineItemType": "expense",
        "lineItemContent": "shave",
        "lineItemValue": 29
      }
    ],
    "total": 684
  },
  {
    "owner": "Leah",
    "client": "Daniel",
    "salon": "PAPRICUT",
    "date": "2020-07-05",
    "email": "danielfernandez@papricut.com",
    "phone": "+1 (821) 401-3220",
    "address": "726 Clermont Avenue, Joes, Massachusetts, 8642",
    "transactionNotes": "consequat proident ad excepteur aliquip voluptate eiusmod nulla magna adipisicing",
    "lineItems": [
      {
        "lineItemType": "expense",
        "lineItemContent": "color",
        "lineItemValue": 138
      },
      {
        "lineItemType": "product/service",
        "lineItemContent": "color",
        "lineItemValue": 125
      },
      {
        "lineItemType": "product/service",
        "lineItemContent": "color",
        "lineItemValue": 49
      }
    ],
    "total": 589
  },
  {
    "owner": "Lizzie",
    "client": "Huff",
    "salon": "AMRIL",
    "date": "2016-08-18",
    "email": "hufffernandez@amril.com",
    "phone": "+1 (943) 561-2000",
    "address": "926 Downing Street, Ebro, Virgin Islands, 5266",
    "transactionNotes": "et veniam magna pariatur qui eiusmod ad quis ut excepteur",
    "lineItems": [
      {
        "lineItemType": "product/service",
        "lineItemContent": "wash",
        "lineItemValue": 130
      },
      {
        "lineItemType": "product/service",
        "lineItemContent": "color",
        "lineItemValue": 91
      },
      {
        "lineItemType": "product/service",
        "lineItemContent": "haircut",
        "lineItemValue": 59
      }
    ],
    "total": 557
  },
  {
    "owner": "Barr",
    "client": "Molly",
    "salon": "NEBULEAN",
    "date": "2017-08-04",
    "email": "mollyfernandez@nebulean.com",
    "phone": "+1 (848) 537-2669",
    "address": "555 Troy Avenue, Blairstown, District Of Columbia, 5440",
    "transactionNotes": "non laborum excepteur sint ex aliquip commodo exercitation labore culpa",
    "lineItems": [
      {
        "lineItemType": "product/service",
        "lineItemContent": "color",
        "lineItemValue": 124
      },
      {
        "lineItemType": "product/service",
        "lineItemContent": "nails",
        "lineItemValue": 91
      },
      {
        "lineItemType": "product/service",
        "lineItemContent": "nails",
        "lineItemValue": 18
      }
    ],
    "total": 679
  }
]

manyTransactions.forEach(transaction => {
  transaction.total = transaction.lineItems.reduce( (acc, v) => {return v.lineItemValue + acc}, 0);
})

module.exports.manyTransactions = manyTransactions;




const dates = [];
manyTransactions.forEach( (item, ind) => {
  dates.push({date: new Date(item.date)});
})
/* console.log(dates[0].date) */
dates.forEach((day, ind) => {
  day.ind = ind;
  day.stamp = day.date.getTime();
  day.date = day.date.toString();
/*   console.log(day.stamp); */
})
/* console.log(dates); */

const day2mil = 24*60*60*1000;
const thirtyDays2mil = 30*day2mil;
const year2mil = day2mil*365;

var start = new Date();
/* console.log(Date(start)) */
start.setHours(0,0,0,0);
/* console.log(typeof start) */
/* console.log(start.toString()) */

start = new Date(start.getTime() - year2mil);
/* console.log(start.toString()) */

var end = new Date();
end.setHours(23,59,59,999);
/* console.log(end.toString()) */

/* alert( start.toUTCString() + ':' + end.toUTCString() ); */

let result = dates.filter(function(obj){
  return obj.stamp >=start.getTime() && obj.stamp <=end.getTime();
})

const sortedResult = result.sort((a,b) =>{
  return a.stamp - b.stamp
});
const sortedTransactions = [];
sortedResult.forEach( (item, ind) => {
sortedTransactions[ind] = manyTransactions[item.ind];
})

// console.log(sortedResult);
// console.log(sortedTransactions);

module.exports.sortedTransactions = sortedTransactions;