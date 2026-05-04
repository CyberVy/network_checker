export type Airport = {
    name: string
    city: string
    latitude: number
    longitude: number
}

export const CF_COLOS: string[] = [
    "ZRH",
    "ZDM",
    "ZAG",
    "YYZ",
    "YYC",
    "YXE",
    "YWG",
    "YVR",
    "YUL",
    "YOW",
    "YHZ",
    "XNH",
    "XAP",
    "WRO",
    "WDH",
    "WAW",
    "VTE",
    "VNO",
    "VIX",
    "VIE",
    "VCP",
    "URT",
    "ULN",
    "UIO",
    "UDI",
    "TXL",
    "TUN",
    "TPE",
    "TPA",
    "TNR",
    "TLV",
    "TLL",
    "TLH",
    "TIA",
    "TGU",
    "TBS",
    "SYD",
    "SUV",
    "STR",
    "STL",
    "STI",
    "SSA",
    "SOF",
    "SOD",
    "SMF",
    "SLC",
    "SKP",
    "SKG",
    "SJU",
    "SJP",
    "SJO",
    "SJK",
    "SJC",
    "SIN",
    "SGN",
    "SFO",
    "SEA",
    "SDQ",
    "SCL",
    "SAT",
    "SAP",
    "SAN",
    "RUN",
    "RUH",
    "RIX",
    "RIC",
    "REC",
    "RDU",
    "RAO",
    "QWJ",
    "QRO",
    "PTY",
    "PRG",
    "PPT",
    "POS",
    "POA",
    "PNH",
    "PMW",
    "PMO",
    "PIT",
    "PHX",
    "PHL",
    "PER",
    "PDX",
    "PBM",
    "PBH",
    "PAT",
    "OUA",
    "OTP",
    "OSL",
    "ORN",
    "ORF",
    "ORD",
    "OMA",
    "OKC",
    "OKA",
    "NVT",
    "NRT",
    "NQZ",
    "NQN",
    "NOU",
    "NJF",
    "NBO",
    "NAG",
    "MXP",
    "MUC",
    "MSQ",
    "MSP",
    "MRU",
    "MRS",
    "MPM",
    "MNL",
    "MLG",
    "MLE",
    "MLA",
    "MIA",
    "MFM",
    "MEX",
    "MEM",
    "MEL",
    "MDE",
    "MCT",
    "MCI",
    "MBA",
    "MAO",
    "MAN",
    "MAD",
    "MAA",
    "LYS",
    "LUX",
    "LUN",
    "LPB",
    "LOS",
    "LLW",
    "LLK",
    "LIS",
    "LIM",
    "LHR",
    "LHE",
    "LED",
    "LCA",
    "LAX",
    "LAS",
    "LAD",
    "KWI",
    "KUL",
    "KTM",
    "KNU",
    "KJA",
    "KIX",
    "KIN",
    "KHI",
    "KHH",
    "KGL",
    "KEF",
    "KCH",
    "KBP",
    "JOI",
    "JOG",
    "JNB",
    "JIB",
    "JHB",
    "JED",
    "JDO",
    "JAX",
    "IXC",
    "ISU",
    "IST",
    "ISB",
    "IND",
    "ICN",
    "IAH",
    "IAD",
    "HYD",
    "HRE",
    "HNL",
    "HKG",
    "HFA",
    "HEL",
    "HBA",
    "HAN",
    "HAM",
    "GYN",
    "GYE",
    "GYD",
    "GVA",
    "GUM",
    "GUA",
    "GRU",
    "GOT",
    "GND",
    "GIG",
    "GEO",
    "GDL",
    "GBE",
    "FUK",
    "FSD",
    "FRU",
    "FRA",
    "FOR",
    "FLN",
    "FIH",
    "FCO",
    "EZE",
    "EWR",
    "EVN",
    "EBL",
    "EBB",
    "DXB",
    "DUS",
    "DUR",
    "DUB",
    "DTW",
    "DPS",
    "DOH",
    "DMM",
    "DME",
    "DKR",
    "DFW",
    "DEN",
    "DEL",
    "DAR",
    "DAD",
    "DAC",
    "CZL",
    "CWB",
    "CRK",
    "CPT",
    "CPH",
    "COR",
    "COK",
    "CNX",
    "CNN",
    "CNF",
    "CMH",
    "CMB",
    "CLT",
    "CLO",
    "CLE",
    "CJB",
    "CHC",
    "CGY",
    "CGP",
    "CGK",
    "CGB",
    "CFC",
    "CEB",
    "CDG",
    "CCU",
    "CCP",
    "CBR",
    "CAW",
    "CAI",
    "BWN",
    "BUF",
    "BUD",
    "BTS",
    "BSR",
    "BSB",
    "BRU",
    "BOS",
    "BOM",
    "BOG",
    "BOD",
    "BNU",
    "BNE",
    "BNA",
    "BLR",
    "BKK",
    "BGW",
    "BGR",
    "BGI",
    "BEY",
    "BEL",
    "BEG",
    "BCN",
    "BAQ",
    "BAH",
    "AUS",
    "ATL",
    "ATH",
    "ASU",
    "ASK",
    "ARU",
    "ARN",
    "ARI",
    "ANC",
    "AMS",
    "AMM",
    "AMD",
    "ALG",
    "ALA",
    "AKX",
    "AKL",
    "AGR",
    "ADL",
    "ADD",
    "ADB",
    "ACC",
    "ABQ",
    "ABJ",
    "AAE."
]

export const AIRPORTS: Record<string, Airport> = {
    "KEF": {
        "name": "Keflavik International Airport",
        "city": "Reykjavik",
        "latitude": 63.9850006104,
        "longitude": -22.6056003571
    },
    "YHZ": {
        "name": "Halifax / Stanfield International Airport",
        "city": "Halifax",
        "latitude": 44.8807983398,
        "longitude": -63.5085983276
    },
    "YOW": {
        "name": "Ottawa Macdonald-Cartier International Airport",
        "city": "Ottawa",
        "latitude": 45.3224983215,
        "longitude": -75.6691970825
    },
    "YUL": {
        "name": "Montreal / Pierre Elliott Trudeau International Airport",
        "city": "Montreal",
        "latitude": 45.4706001282,
        "longitude": -73.7407989502
    },
    "YVR": {
        "name": "Vancouver International Airport",
        "city": "Vancouver",
        "latitude": 49.193901062,
        "longitude": -123.1839981079
    },
    "YWG": {
        "name": "Winnipeg / James Armstrong Richardson International Airport",
        "city": "Winnipeg",
        "latitude": 49.9099998474,
        "longitude": -97.2398986816
    },
    "YXE": {
        "name": "Saskatoon John G. Diefenbaker International Airport",
        "city": "Saskatoon",
        "latitude": 52.1707992554,
        "longitude": -106.6999969482
    },
    "YYC": {
        "name": "Calgary International Airport",
        "city": "Calgary",
        "latitude": 51.113899231,
        "longitude": -114.0199966431
    },
    "YYZ": {
        "name": "Lester B. Pearson International Airport",
        "city": "Toronto",
        "latitude": 43.6772003174,
        "longitude": -79.6305999756
    },
    "ALG": {
        "name": "Houari Boumediene Airport",
        "city": "Algiers",
        "latitude": 36.6910018921,
        "longitude": 3.2154099941
    },
    "CZL": {
        "name": "Mohamed Boudiaf International Airport",
        "city": "Constantine",
        "latitude": 36.2760009766,
        "longitude": 6.6203899384
    },
    "ORN": {
        "name": "Es Senia Airport",
        "city": "Oran",
        "latitude": 35.6239013672,
        "longitude": -0.6211829782
    },
    "OUA": {
        "name": "Ouagadougou Airport",
        "city": "Ouagadougou",
        "latitude": 12.3531999588,
        "longitude": -1.5124200583
    },
    "ACC": {
        "name": "Kotoka International Airport",
        "city": "Accra",
        "latitude": 5.6051898003,
        "longitude": -0.1667860001
    },
    "ABJ": {
        "name": "Port Bouet Airport",
        "city": "Abidjan",
        "latitude": 5.2613902092,
        "longitude": -3.9262900352
    },
    "ASK": {
        "name": "Yamoussoukro Airport",
        "city": "Yamoussoukro",
        "latitude": 6.9031701088,
        "longitude": -5.3655800819
    },
    "LOS": {
        "name": "Murtala Muhammed International Airport",
        "city": "Lagos",
        "latitude": 6.5773701668,
        "longitude": 3.321160078
    },
    "TUN": {
        "name": "Tunis Carthage International Airport",
        "city": "Tunis",
        "latitude": 36.8510017395,
        "longitude": 10.2271995544
    },
    "BRU": {
        "name": "Brussels Airport",
        "city": "Brussels",
        "latitude": 50.9014015198,
        "longitude": 4.4844398499
    },
    "FRA": {
        "name": "Frankfurt am Main International Airport",
        "city": "Frankfurt-am-Main",
        "latitude": 50.0264015198,
        "longitude": 8.543129921
    },
    "HAM": {
        "name": "Hamburg Airport",
        "city": "Hamburg",
        "latitude": 53.6304016113,
        "longitude": 9.9882297516
    },
    "DUS": {
        "name": "Dusseldorf International Airport",
        "city": "Dusseldorf",
        "latitude": 51.2895011902,
        "longitude": 6.7667798996
    },
    "MUC": {
        "name": "Munich International Airport",
        "city": "Munich",
        "latitude": 48.3538017273,
        "longitude": 11.7861003876
    },
    "STR": {
        "name": "Stuttgart Airport",
        "city": "Stuttgart",
        "latitude": 48.6898994446,
        "longitude": 9.2219600677
    },
    "TXL": {
        "name": "Berlin-Tegel International Airport",
        "city": "Berlin",
        "latitude": 52.5597000122,
        "longitude": 13.2876996994
    },
    "TLL": {
        "name": "Tallinn Airport",
        "city": "Tallinn",
        "latitude": 59.4132995605,
        "longitude": 24.8327999115
    },
    "HEL": {
        "name": "Helsinki Vantaa Airport",
        "city": "Helsinki",
        "latitude": 60.317199707,
        "longitude": 24.963300705
    },
    "MAN": {
        "name": "Manchester Airport",
        "city": "Manchester",
        "latitude": 53.3536987305,
        "longitude": -2.2749500275
    },
    "LHR": {
        "name": "London Heathrow Airport",
        "city": "London",
        "latitude": 51.4706001282,
        "longitude": -0.4619410038
    },
    "AMS": {
        "name": "Amsterdam Airport Schiphol",
        "city": "Amsterdam",
        "latitude": 52.3086013794,
        "longitude": 4.7638897896
    },
    "DUB": {
        "name": "Dublin Airport",
        "city": "Dublin",
        "latitude": 53.4212989807,
        "longitude": -6.270070076
    },
    "CPH": {
        "name": "Copenhagen Kastrup Airport",
        "city": "Copenhagen",
        "latitude": 55.6179008484,
        "longitude": 12.6560001373
    },
    "LUX": {
        "name": "Luxembourg-Findel International Airport",
        "city": "Luxembourg",
        "latitude": 49.6265983582,
        "longitude": 6.211520195
    },
    "OSL": {
        "name": "Oslo Gardermoen Airport",
        "city": "Oslo",
        "latitude": 60.193901062,
        "longitude": 11.100399971
    },
    "WAW": {
        "name": "Warsaw Chopin Airport",
        "city": "Warsaw",
        "latitude": 52.1656990051,
        "longitude": 20.9671001434
    },
    "WRO": {
        "name": "Copernicus Wroclaw Airport",
        "city": "Wroclaw",
        "latitude": 51.1026992798,
        "longitude": 16.885799408
    },
    "GOT": {
        "name": "Gothenburg-Landvetter Airport",
        "city": "Gothenburg",
        "latitude": 57.6627998352,
        "longitude": 12.279800415
    },
    "ARN": {
        "name": "Stockholm-Arlanda Airport",
        "city": "Stockholm",
        "latitude": 59.6519012451,
        "longitude": 17.9186000824
    },
    "RIX": {
        "name": "Riga International Airport",
        "city": "Riga",
        "latitude": 56.9235992432,
        "longitude": 23.9710998535
    },
    "VNO": {
        "name": "Vilnius International Airport",
        "city": "Vilnius",
        "latitude": 54.6341018677,
        "longitude": 25.2858009338
    },
    "CPT": {
        "name": "Cape Town International Airport",
        "city": "Cape Town",
        "latitude": -33.9648017883,
        "longitude": 18.6016998291
    },
    "DUR": {
        "name": "King Shaka International Airport",
        "city": "Durban",
        "latitude": -29.6144444444,
        "longitude": 31.1197222222
    },
    "JNB": {
        "name": "O. R. Tambo International Airport",
        "city": "Johannesburg",
        "latitude": -26.133333,
        "longitude": 28.25
    },
    "GBE": {
        "name": "Sir Seretse Khama International Airport",
        "city": "Gaborone",
        "latitude": -24.5552005768,
        "longitude": 25.9181995392
    },
    "MRU": {
        "name": "Sir Seewoosagur Ramgoolam International Airport",
        "city": "Port Louis",
        "latitude": -20.4302005768,
        "longitude": 57.6836013794
    },
    "LUN": {
        "name": "Kenneth Kaunda International Airport",
        "city": "Lusaka",
        "latitude": -15.3308000565,
        "longitude": 28.4526004791
    },
    "RUN": {
        "name": "Roland Garros Airport",
        "city": "St Denis",
        "latitude": -20.8871002197,
        "longitude": 55.5102996826
    },
    "TNR": {
        "name": "Ivato Airport",
        "city": "Antananarivo",
        "latitude": -18.7968997955,
        "longitude": 47.4788017273
    },
    "LAD": {
        "name": "Quatro De Fevereiro Airport",
        "city": "Luanda",
        "latitude": -8.8583698273,
        "longitude": 13.2312002182
    },
    "MPM": {
        "name": "Maputo Airport",
        "city": "Maputo",
        "latitude": -25.9207992554,
        "longitude": 32.5726013184
    },
    "HRE": {
        "name": "Harare International Airport",
        "city": "Harare",
        "latitude": -17.9318008423,
        "longitude": 31.0928001404
    },
    "LLW": {
        "name": "Lilongwe International Airport",
        "city": "Lilongwe",
        "latitude": -13.7894001007,
        "longitude": 33.78099823
    },
    "WDH": {
        "name": "Hosea Kutako International Airport",
        "city": "Windhoek",
        "latitude": -22.4799003601,
        "longitude": 17.4708995819
    },
    "FIH": {
        "name": "Ndjili International Airport",
        "city": "Kinshasa",
        "latitude": -4.3857498169,
        "longitude": 15.4446001053
    },
    "DKR": {
        "name": "Leopold Sedar Senghor International Airport",
        "city": "Dakar",
        "latitude": 14.7397003174,
        "longitude": -17.4902000427
    },
    "ADD": {
        "name": "Bole International Airport",
        "city": "Addis Ababa",
        "latitude": 8.9778900147,
        "longitude": 38.7993011475
    },
    "JIB": {
        "name": "Djibouti-Ambouli Airport",
        "city": "Djibouti City",
        "latitude": 11.5473003387,
        "longitude": 43.1595001221
    },
    "CAI": {
        "name": "Cairo International Airport",
        "city": "Cairo",
        "latitude": 30.1219005585,
        "longitude": 31.4055995941
    },
    "NBO": {
        "name": "Jomo Kenyatta International Airport",
        "city": "Nairobi",
        "latitude": -1.319239974,
        "longitude": 36.9277992249
    },
    "MBA": {
        "name": "Mombasa Moi International Airport",
        "city": "Mombasa",
        "latitude": -4.0348300934,
        "longitude": 39.5942001343
    },
    "KGL": {
        "name": "Kigali International Airport",
        "city": "Kigali",
        "latitude": -1.9686299563,
        "longitude": 30.1394996643
    },
    "DAR": {
        "name": "Mwalimu Julius K. Nyerere International Airport",
        "city": "Dar es Salaam",
        "latitude": -6.8781099319,
        "longitude": 39.2025985718
    },
    "EBB": {
        "name": "Entebbe International Airport",
        "city": "Kampala",
        "latitude": 0.0423859991,
        "longitude": 32.4435005188
    },
    "ABQ": {
        "name": "Albuquerque International Sunport Airport",
        "city": "Albuquerque",
        "latitude": 35.0401992798,
        "longitude": -106.6090011597
    },
    "ATL": {
        "name": "Hartsfield Jackson Atlanta International Airport",
        "city": "Atlanta",
        "latitude": 33.6366996765,
        "longitude": -84.4281005859
    },
    "AUS": {
        "name": "Austin Bergstrom International Airport",
        "city": "Austin",
        "latitude": 30.1944999695,
        "longitude": -97.6698989868
    },
    "BGR": {
        "name": "Bangor International Airport",
        "city": "Bangor",
        "latitude": 44.8073997498,
        "longitude": -68.8281021118
    },
    "BNA": {
        "name": "Nashville International Airport",
        "city": "Nashville",
        "latitude": 36.1245002747,
        "longitude": -86.6781997681
    },
    "BOS": {
        "name": "General Edward Lawrence Logan International Airport",
        "city": "Boston",
        "latitude": 42.36429977,
        "longitude": -71.00520325
    },
    "BUF": {
        "name": "Buffalo Niagara International Airport",
        "city": "Buffalo",
        "latitude": 42.94049835,
        "longitude": -78.73220062
    },
    "CLE": {
        "name": "Cleveland Hopkins International Airport",
        "city": "Cleveland",
        "latitude": 41.4117012024,
        "longitude": -81.8498001099
    },
    "CLT": {
        "name": "Charlotte Douglas International Airport",
        "city": "Charlotte",
        "latitude": 35.2140007019,
        "longitude": -80.9430999756
    },
    "CMH": {
        "name": "John Glenn Columbus International Airport",
        "city": "Columbus",
        "latitude": 39.9980010986,
        "longitude": -82.8918991089
    },
    "DEN": {
        "name": "Denver International Airport",
        "city": "Denver",
        "latitude": 39.8616981506,
        "longitude": -104.672996521
    },
    "DFW": {
        "name": "Dallas Fort Worth International Airport",
        "city": "Dallas-Fort Worth",
        "latitude": 32.8968009949,
        "longitude": -97.0380020142
    },
    "DTW": {
        "name": "Detroit Metropolitan Wayne County Airport",
        "city": "Detroit",
        "latitude": 42.2123985291,
        "longitude": -83.3534011841
    },
    "EWR": {
        "name": "Newark Liberty International Airport",
        "city": "Newark",
        "latitude": 40.6925010681,
        "longitude": -74.1687011719
    },
    "FSD": {
        "name": "Joe Foss Field Airport",
        "city": "Sioux Falls",
        "latitude": 43.5820007324,
        "longitude": -96.741897583
    },
    "IAD": {
        "name": "Washington Dulles International Airport",
        "city": "Dulles",
        "latitude": 38.94449997,
        "longitude": -77.45580292
    },
    "IAH": {
        "name": "George Bush Intercontinental Houston Airport",
        "city": "Houston",
        "latitude": 29.9843997955,
        "longitude": -95.3414001465
    },
    "IND": {
        "name": "Indianapolis International Airport",
        "city": "Indianapolis",
        "latitude": 39.717300415,
        "longitude": -86.2944030762
    },
    "JAX": {
        "name": "Jacksonville International Airport",
        "city": "Jacksonville",
        "latitude": 30.4941005707,
        "longitude": -81.6878967285
    },
    "LAS": {
        "name": "Harry Reid International Airport",
        "city": "Las Vegas",
        "latitude": 36.08010101,
        "longitude": -115.1520004
    },
    "LAX": {
        "name": "Los Angeles International Airport",
        "city": "Los Angeles",
        "latitude": 33.94250107,
        "longitude": -118.4079971
    },
    "MCI": {
        "name": "Kansas City International Airport",
        "city": "Kansas City",
        "latitude": 39.2975997925,
        "longitude": -94.7138977051
    },
    "MEM": {
        "name": "Memphis International Airport",
        "city": "Memphis",
        "latitude": 35.0424003601,
        "longitude": -89.9766998291
    },
    "MIA": {
        "name": "Miami International Airport",
        "city": "Miami",
        "latitude": 25.7931995392,
        "longitude": -80.2906036377
    },
    "MSP": {
        "name": "Minneapolis-St Paul International/Wold-Chamberlain Airport",
        "city": "Minneapolis",
        "latitude": 44.8819999695,
        "longitude": -93.2218017578
    },
    "OKC": {
        "name": "Will Rogers World Airport",
        "city": "Oklahoma City",
        "latitude": 35.3931007385,
        "longitude": -97.6007003784
    },
    "OMA": {
        "name": "Eppley Airfield",
        "city": "Omaha",
        "latitude": 41.3031997681,
        "longitude": -95.8940963745
    },
    "ORD": {
        "name": "Chicago O'Hare International Airport",
        "city": "Chicago",
        "latitude": 41.97859955,
        "longitude": -87.90480042
    },
    "ORF": {
        "name": "Norfolk International Airport",
        "city": "Norfolk",
        "latitude": 36.8945999146,
        "longitude": -76.2012023926
    },
    "PDX": {
        "name": "Portland International Airport",
        "city": "Portland",
        "latitude": 45.58869934,
        "longitude": -122.5979996
    },
    "PHL": {
        "name": "Philadelphia International Airport",
        "city": "Philadelphia",
        "latitude": 39.8718986511,
        "longitude": -75.2410964966
    },
    "PHX": {
        "name": "Phoenix Sky Harbor International Airport",
        "city": "Phoenix",
        "latitude": 33.434299469,
        "longitude": -112.0120010376
    },
    "PIT": {
        "name": "Pittsburgh International Airport",
        "city": "Pittsburgh",
        "latitude": 40.49150085,
        "longitude": -80.23290253
    },
    "RDU": {
        "name": "Raleigh Durham International Airport",
        "city": "Raleigh/Durham",
        "latitude": 35.8776016235,
        "longitude": -78.7874984741
    },
    "RIC": {
        "name": "Richmond International Airport",
        "city": "Richmond",
        "latitude": 37.5051994324,
        "longitude": -77.3197021484
    },
    "SAN": {
        "name": "San Diego International Airport",
        "city": "San Diego",
        "latitude": 32.7336006165,
        "longitude": -117.1900024414
    },
    "SAT": {
        "name": "San Antonio International Airport",
        "city": "San Antonio",
        "latitude": 29.533700943,
        "longitude": -98.4698028564
    },
    "SEA": {
        "name": "Seattle Tacoma International Airport",
        "city": "Seattle",
        "latitude": 47.4490013123,
        "longitude": -122.3089981079
    },
    "SFO": {
        "name": "San Francisco International Airport",
        "city": "San Francisco",
        "latitude": 37.6189994812,
        "longitude": -122.375
    },
    "SJC": {
        "name": "Norman Y. Mineta San Jose International Airport",
        "city": "San Jose",
        "latitude": 37.3625984192,
        "longitude": -121.9290008545
    },
    "SLC": {
        "name": "Salt Lake City International Airport",
        "city": "Salt Lake City",
        "latitude": 40.7883987427,
        "longitude": -111.9779968262
    },
    "SMF": {
        "name": "Sacramento International Airport",
        "city": "Sacramento",
        "latitude": 38.695400238,
        "longitude": -121.591003418
    },
    "STL": {
        "name": "Lambert St Louis International Airport",
        "city": "St Louis",
        "latitude": 38.7486991882,
        "longitude": -90.3700027466
    },
    "TLH": {
        "name": "Tallahassee Regional Airport",
        "city": "Tallahassee",
        "latitude": 30.3964996338,
        "longitude": -84.3503036499
    },
    "TPA": {
        "name": "Tampa International Airport",
        "city": "Tampa",
        "latitude": 27.9755001068,
        "longitude": -82.533203125
    },
    "TIA": {
        "name": "Tirana International Airport Mother Teresa",
        "city": "Tirana",
        "latitude": 41.4146995544,
        "longitude": 19.7206001282
    },
    "SOF": {
        "name": "Sofia Airport",
        "city": "Sofia",
        "latitude": 42.6966934204,
        "longitude": 23.4114360809
    },
    "LCA": {
        "name": "Larnaca International Airport",
        "city": "Larnarca",
        "latitude": 34.8750991821,
        "longitude": 33.6249008179
    },
    "ZAG": {
        "name": "Zagreb Airport",
        "city": "Zagreb",
        "latitude": 45.7429008484,
        "longitude": 16.0687999725
    },
    "BCN": {
        "name": "Barcelona International Airport",
        "city": "Barcelona",
        "latitude": 41.2971000671,
        "longitude": 2.0784599781
    },
    "MAD": {
        "name": "Madrid Barajas International Airport",
        "city": "Madrid",
        "latitude": 40.4936,
        "longitude": -3.56676
    },
    "BOD": {
        "name": "Bordeaux-Merignac (BA 106) Airport",
        "city": "Bordeaux/Merignac",
        "latitude": 44.8283004761,
        "longitude": -0.7155560255
    },
    "LYS": {
        "name": "Lyon Saint-Exupery Airport",
        "city": "Lyon",
        "latitude": 45.726398468,
        "longitude": 5.0908298492
    },
    "MRS": {
        "name": "Marseille Provence Airport",
        "city": "Marseille",
        "latitude": 43.439271922,
        "longitude": 5.2214241028
    },
    "CDG": {
        "name": "Charles de Gaulle International Airport",
        "city": "Paris",
        "latitude": 49.0127983093,
        "longitude": 2.5499999523
    },
    "ATH": {
        "name": "Eleftherios Venizelos International Airport",
        "city": "Athens",
        "latitude": 37.9364013672,
        "longitude": 23.9444999695
    },
    "SKG": {
        "name": "Thessaloniki Macedonia International Airport",
        "city": "Thessaloniki",
        "latitude": 40.5196990967,
        "longitude": 22.9708995819
    },
    "BUD": {
        "name": "Budapest Ferenc Liszt International Airport",
        "city": "Budapest",
        "latitude": 47.4369010925,
        "longitude": 19.2555999756
    },
    "PMO": {
        "name": "Palermo / Punta Raisi Airport",
        "city": "Palermo",
        "latitude": 38.1759986877,
        "longitude": 13.0909996033
    },
    "MXP": {
        "name": "Malpensa International Airport",
        "city": "Milan",
        "latitude": 45.6305999756,
        "longitude": 8.7281103134
    },
    "FCO": {
        "name": "Leonardo Da Vinci (Fiumicino) International Airport",
        "city": "Rome",
        "latitude": 41.8045005798,
        "longitude": 12.2508001328
    },
    "PRG": {
        "name": "Vaclav Havel Airport",
        "city": "Prague",
        "latitude": 50.1007995605,
        "longitude": 14.2600002289
    },
    "TLV": {
        "name": "Ben Gurion International Airport",
        "city": "Tel Aviv",
        "latitude": 32.0113983154,
        "longitude": 34.8866996765
    },
    "HFA": {
        "name": "Haifa International Airport",
        "city": "Haifa",
        "latitude": 32.8093986511,
        "longitude": 35.0430984497
    },
    "MLA": {
        "name": "Luqa Airport",
        "city": "Luqa",
        "latitude": 35.857498,
        "longitude": 14.4775
    },
    "VIE": {
        "name": "Vienna International Airport",
        "city": "Vienna",
        "latitude": 48.1102981567,
        "longitude": 16.5697002411
    },
    "LIS": {
        "name": "Lisbon Portela Airport",
        "city": "Lisbon",
        "latitude": 38.7812995911,
        "longitude": -9.1359195709
    },
    "OTP": {
        "name": "Henri Coanda International Airport",
        "city": "Bucharest",
        "latitude": 44.5722007751,
        "longitude": 26.1021995544
    },
    "GVA": {
        "name": "Geneva Cointrin International Airport",
        "city": "Geneva",
        "latitude": 46.2380981445,
        "longitude": 6.1089501381
    },
    "ZRH": {
        "name": "Zurich Airport",
        "city": "Zurich",
        "latitude": 47.4646987915,
        "longitude": 8.5491695404
    },
    "ADB": {
        "name": "Adnan Menderes International Airport",
        "city": "Izmir",
        "latitude": 38.2924003601,
        "longitude": 27.156999588
    },
    "IST": {
        "name": "Istanbul Airport",
        "city": "Arnavutkoy",
        "latitude": 41.262222,
        "longitude": 28.727778
    },
    "SKP": {
        "name": "Skopje Alexander the Great Airport",
        "city": "Skopje",
        "latitude": 41.9616012573,
        "longitude": 21.6214008331
    },
    "BEG": {
        "name": "Belgrade Nikola Tesla Airport",
        "city": "Belgrad",
        "latitude": 44.8184013367,
        "longitude": 20.3090991974
    },
    "BTS": {
        "name": "M. R. Stefanik Airport",
        "city": "Bratislava",
        "latitude": 48.1702003479,
        "longitude": 17.2126998901
    },
    "SDQ": {
        "name": "Las Americas International Airport",
        "city": "Santo Domingo",
        "latitude": 18.4297008514,
        "longitude": -69.6688995361
    },
    "STI": {
        "name": "Cibao International Airport",
        "city": "Santiago",
        "latitude": 19.4060993195,
        "longitude": -70.6046981812
    },
    "GUA": {
        "name": "La Aurora Airport",
        "city": "Guatemala City",
        "latitude": 14.5832996368,
        "longitude": -90.5274963379
    },
    "SAP": {
        "name": "Ramon Villeda Morales International Airport",
        "city": "La Mesa",
        "latitude": 15.4525995255,
        "longitude": -87.9235992432
    },
    "TGU": {
        "name": "Toncontin International Airport",
        "city": "Tegucigalpa",
        "latitude": 14.0608997345,
        "longitude": -87.2172012329
    },
    "KIN": {
        "name": "Norman Manley International Airport",
        "city": "Kingston",
        "latitude": 17.9356994629,
        "longitude": -76.7874984741
    },
    "GDL": {
        "name": "Don Miguel Hidalgo Y Costilla International Airport",
        "city": "Guadalajara",
        "latitude": 20.5217990875,
        "longitude": -103.3109970093
    },
    "MEX": {
        "name": "Licenciado Benito Juarez International Airport",
        "city": "Mexico City",
        "latitude": 19.4363002777,
        "longitude": -99.0720977783
    },
    "QRO": {
        "name": "Queretaro Intercontinental Airport",
        "city": "Queretaro",
        "latitude": 20.6173000336,
        "longitude": -100.185997009
    },
    "PTY": {
        "name": "Tocumen International Airport",
        "city": "Tocumen",
        "latitude": 9.0713596344,
        "longitude": -79.3834991455
    },
    "SJO": {
        "name": "Juan Santamaria International Airport",
        "city": "San Jose",
        "latitude": 9.9938602448,
        "longitude": -84.2088012695
    },
    "SUV": {
        "name": "Nausori International Airport",
        "city": "Nausori",
        "latitude": -18.0433006287,
        "longitude": 178.5590057373
    },
    "PPT": {
        "name": "Faa'a International Airport",
        "city": "Papeete",
        "latitude": -17.5536994934,
        "longitude": -149.606994629
    },
    "NOU": {
        "name": "La Tontouta International Airport",
        "city": "Noumea",
        "latitude": -22.0146007538,
        "longitude": 166.2129974365
    },
    "AKL": {
        "name": "Auckland International Airport",
        "city": "Auckland",
        "latitude": -37.0080986023,
        "longitude": 174.7920074463
    },
    "CHC": {
        "name": "Christchurch International Airport",
        "city": "Christchurch",
        "latitude": -43.4893989563,
        "longitude": 172.5319976807
    },
    "BAH": {
        "name": "Bahrain International Airport",
        "city": "Manama",
        "latitude": 26.2707996368,
        "longitude": 50.6335983276
    },
    "DMM": {
        "name": "King Fahd International Airport",
        "city": "Ad Dammam",
        "latitude": 26.471200943,
        "longitude": 49.7979011536
    },
    "JED": {
        "name": "King Abdulaziz International Airport",
        "city": "Jeddah",
        "latitude": 21.679599762,
        "longitude": 39.15650177
    },
    "RUH": {
        "name": "King Khaled International Airport",
        "city": "Riyadh",
        "latitude": 24.9575996399,
        "longitude": 46.6987991333
    },
    "AMM": {
        "name": "Queen Alia International Airport",
        "city": "Amman",
        "latitude": 31.7226009369,
        "longitude": 35.9931983948
    },
    "KWI": {
        "name": "Kuwait International Airport",
        "city": "Kuwait City",
        "latitude": 29.226600647,
        "longitude": 47.9688987732
    },
    "BEY": {
        "name": "Beirut Rafic Hariri International Airport",
        "city": "Beirut",
        "latitude": 33.8208999634,
        "longitude": 35.4883995056
    },
    "DXB": {
        "name": "Dubai International Airport",
        "city": "Dubai",
        "latitude": 25.2527999878,
        "longitude": 55.3643989563
    },
    "MCT": {
        "name": "Muscat International Airport",
        "city": "Muscat",
        "latitude": 23.5932998657,
        "longitude": 58.2844009399
    },
    "ISB": {
        "name": "Islamabad International Airport",
        "city": "Islamabad",
        "latitude": 33.5490833333333,
        "longitude": 72.82565
    },
    "KHI": {
        "name": "Jinnah International Airport",
        "city": "Karachi",
        "latitude": 24.9064998627,
        "longitude": 67.1607971191
    },
    "LHE": {
        "name": "Alama Iqbal International Airport",
        "city": "Lahore",
        "latitude": 31.5216007233,
        "longitude": 74.4036026001
    },
    "BGW": {
        "name": "Baghdad International Airport",
        "city": "Baghdad",
        "latitude": 33.2625007629,
        "longitude": 44.2346000671
    },
    "EBL": {
        "name": "Erbil International Airport",
        "city": "Arbil",
        "latitude": 36.2375984192,
        "longitude": 43.9631996155
    },
    "BSR": {
        "name": "Basrah International Airport",
        "city": "Basrah",
        "latitude": 30.5491008759,
        "longitude": 47.6621017456
    },
    "NJF": {
        "name": "Al Najaf International Airport",
        "city": "Najaf",
        "latitude": 31.989722,
        "longitude": 44.404167
    },
    "ISU": {
        "name": "Sulaymaniyah International Airport",
        "city": "Sulaymaniyah",
        "latitude": 35.5617485046,
        "longitude": 45.3167381287
    },
    "DOH": {
        "name": "Hamad International Airport",
        "city": "Doha",
        "latitude": 25.2605946,
        "longitude": 51.6137665
    },
    "ANC": {
        "name": "Ted Stevens Anchorage International Airport",
        "city": "Anchorage",
        "latitude": 61.1744003296,
        "longitude": -149.9960021973
    },
    "GUM": {
        "name": "Antonio B. Won Pat International Airport",
        "city": "Hagatna",
        "latitude": 13.4834003448,
        "longitude": 144.796005249
    },
    "HNL": {
        "name": "Honolulu International Airport",
        "city": "Honolulu",
        "latitude": 21.3187007904,
        "longitude": -157.9219970703
    },
    "KHH": {
        "name": "Kaohsiung International Airport",
        "city": "Kaohsiung City",
        "latitude": 22.5771007538,
        "longitude": 120.3499984741
    },
    "TPE": {
        "name": "Taiwan Taoyuan International Airport",
        "city": "Taipei",
        "latitude": 25.0776996613,
        "longitude": 121.233001709
    },
    "NRT": {
        "name": "Narita International Airport",
        "city": "Tokyo",
        "latitude": 35.7647018433,
        "longitude": 140.3860015869
    },
    "KIX": {
        "name": "Kansai International Airport",
        "city": "Osaka",
        "latitude": 34.4272994995,
        "longitude": 135.2440032959
    },
    "FUK": {
        "name": "Fukuoka Airport",
        "city": "Fukuoka",
        "latitude": 33.585899353,
        "longitude": 130.4510040283
    },
    "ICN": {
        "name": "Incheon International Airport",
        "city": "Seoul",
        "latitude": 37.4691009521,
        "longitude": 126.4509963989
    },
    "OKA": {
        "name": "Naha Airport",
        "city": "Naha",
        "latitude": 26.1958007812,
        "longitude": 127.646003723
    },
    "CRK": {
        "name": "Clark International Airport",
        "city": "Angeles City",
        "latitude": 15.1859998703,
        "longitude": 120.559997559
    },
    "MNL": {
        "name": "Ninoy Aquino International Airport",
        "city": "Manila",
        "latitude": 14.508600235,
        "longitude": 121.019996643
    },
    "CGY": {
        "name": "Laguindingan Airport",
        "city": "Laguindingan",
        "latitude": 8.612338251,
        "longitude": 124.4576908
    },
    "CEB": {
        "name": "Mactan Cebu International Airport",
        "city": "Lapu-Lapu City",
        "latitude": 10.3074998856,
        "longitude": 123.9789962769
    },
    "COR": {
        "name": "Ingeniero Ambrosio Taravella Airport",
        "city": "Cordoba",
        "latitude": -31.323600769,
        "longitude": -64.2080001831
    },
    "EZE": {
        "name": "Ministro Pistarini International Airport",
        "city": "Ezeiza",
        "latitude": -34.8222,
        "longitude": -58.5358
    },
    "NQN": {
        "name": "Presidente Peron Airport",
        "city": "Neuquen",
        "latitude": -38.9490013123,
        "longitude": -68.1557006836
    },
    "ARU": {
        "name": "Aracatuba Airport",
        "city": "Aracatuba",
        "latitude": -21.1413002014,
        "longitude": -50.4247016907
    },
    "BEL": {
        "name": "Val de Cans/Julio Cezar Ribeiro International Airport",
        "city": "Belem",
        "latitude": -1.3792500496,
        "longitude": -48.4762992859
    },
    "BSB": {
        "name": "Presidente Juscelino Kubistschek International Airport",
        "city": "Brasilia",
        "latitude": -15.8691673279,
        "longitude": -47.9208335876
    },
    "CFC": {
        "name": "Caçador Airport",
        "city": "Caçador",
        "latitude": -26.788056,
        "longitude": -50.939999
    },
    "CNF": {
        "name": "Tancredo Neves International Airport",
        "city": "Belo Horizonte",
        "latitude": -19.6244430542,
        "longitude": -43.9719429016
    },
    "XAP": {
        "name": "Chapeco Airport",
        "city": "Chapeco",
        "latitude": -27.1341991425,
        "longitude": -52.6566009521
    },
    "CAW": {
        "name": "Bartolomeu Lisandro Airport",
        "city": "Campos Dos Goytacazes",
        "latitude": -21.698299408,
        "longitude": -41.301700592
    },
    "CWB": {
        "name": "Afonso Pena Airport",
        "city": "Curitiba",
        "latitude": -25.5284996033,
        "longitude": -49.1758003235
    },
    "CGB": {
        "name": "Marechal Rondon Airport",
        "city": "Cuiaba",
        "latitude": -15.6528997421,
        "longitude": -56.1166992188
    },
    "MAO": {
        "name": "Eduardo Gomes International Airport",
        "city": "Manaus",
        "latitude": -3.0386099815,
        "longitude": -60.0497016907
    },
    "FLN": {
        "name": "Hercilio Luz International Airport",
        "city": "Florianopolis",
        "latitude": -27.6702785492,
        "longitude": -48.5525016785
    },
    "FOR": {
        "name": "Pinto Martins International Airport",
        "city": "Fortaleza",
        "latitude": -3.7762799263,
        "longitude": -38.5326004028
    },
    "GIG": {
        "name": "Galeao - Antonio Carlos Jobim International Airport",
        "city": "Rio De Janeiro",
        "latitude": -22.8099994659,
        "longitude": -43.2505569458
    },
    "GYN": {
        "name": "Santa Genoveva Airport",
        "city": "Goiania",
        "latitude": -16.6319999695,
        "longitude": -49.2206993103
    },
    "GRU": {
        "name": "Guarulhos - Governador Andre Franco Montoro International Airport",
        "city": "Sao Paulo",
        "latitude": -23.4355564117,
        "longitude": -46.4730567932
    },
    "JDO": {
        "name": "Orlando Bezerra de Menezes Airport",
        "city": "Juazeiro Do Norte",
        "latitude": -7.2189598084,
        "longitude": -39.2700996399
    },
    "JOI": {
        "name": "Lauro Carneiro de Loyola Airport",
        "city": "Joinville",
        "latitude": -26.2245006561,
        "longitude": -48.7974014282
    },
    "VCP": {
        "name": "Viracopos International Airport",
        "city": "Campinas",
        "latitude": -23.0074005127,
        "longitude": -47.1344985962
    },
    "NVT": {
        "name": "Ministro Victor Konder International Airport",
        "city": "Navegantes",
        "latitude": -26.8799991608,
        "longitude": -48.6514015198
    },
    "POA": {
        "name": "Salgado Filho Airport",
        "city": "Porto Alegre",
        "latitude": -29.9944000244,
        "longitude": -51.1713981628
    },
    "PMW": {
        "name": "Brigadeiro Lysias Rodrigues Airport",
        "city": "Palmas",
        "latitude": -10.2915000916,
        "longitude": -48.3569984436
    },
    "REC": {
        "name": "Guararapes - Gilberto Freyre International Airport",
        "city": "Recife",
        "latitude": -8.1264896393,
        "longitude": -34.9235992432
    },
    "RAO": {
        "name": "Leite Lopes Airport",
        "city": "Ribeirao Preto",
        "latitude": -21.1363887787,
        "longitude": -47.7766685486
    },
    "SJK": {
        "name": "Professor Urbano Ernesto Stumpf Airport",
        "city": "Sao Jose Dos Campos",
        "latitude": -23.2292003632,
        "longitude": -45.8614997864
    },
    "SJP": {
        "name": "Sao Jose do Rio Preto Airport",
        "city": "Sao Jose Do Rio Preto",
        "latitude": -20.8166007996,
        "longitude": -49.40650177
    },
    "SSA": {
        "name": "Deputado Luiz Eduardo Magalhaes International Airport",
        "city": "Salvador",
        "latitude": -12.908623960607166,
        "longitude": -38.3228798872924
    },
    "UDI": {
        "name": "Ten. Cel. Aviador Cesar Bombonato Airport",
        "city": "Uberlandia",
        "latitude": -18.8836116791,
        "longitude": -48.225276947
    },
    "VIX": {
        "name": "Eurico de Aguiar Salles Airport",
        "city": "Vitoria",
        "latitude": -20.2580566406,
        "longitude": -40.2863883972
    },
    "ARI": {
        "name": "Chacalluta Airport",
        "city": "Arica",
        "latitude": -18.3484992981,
        "longitude": -70.3386993408
    },
    "SCL": {
        "name": "Comodoro Arturo Merino Benitez International Airport",
        "city": "Santiago",
        "latitude": -33.3930015564,
        "longitude": -70.7857971191
    },
    "CCP": {
        "name": "Carriel Sur Airport",
        "city": "Concepcion",
        "latitude": -36.7727012634,
        "longitude": -73.0631027222
    },
    "SOD": {
        "name": "Sorocaba Airport",
        "city": "Sorocaba",
        "latitude": -23.4780006409,
        "longitude": -47.4900016785
    },
    "GYE": {
        "name": "Simon Bolivar International Airport",
        "city": "Guayaquil",
        "latitude": -2.15741992,
        "longitude": -79.8835983276
    },
    "UIO": {
        "name": "Nuevo Aeropuerto Internacional Mariscal Sucre",
        "city": "Quito",
        "latitude": -0.1291666667,
        "longitude": -78.3575
    },
    "ASU": {
        "name": "Silvio Pettirossi International Airport",
        "city": "Asuncion",
        "latitude": -25.2399997711,
        "longitude": -57.5200004578
    },
    "BOG": {
        "name": "El Dorado International Airport",
        "city": "Bogota",
        "latitude": 4.70159,
        "longitude": -74.1469
    },
    "BAQ": {
        "name": "Ernesto Cortissoz International Airport",
        "city": "Barranquilla",
        "latitude": 10.8896,
        "longitude": -74.7808
    },
    "CLO": {
        "name": "Alfonso Bonilla Aragon International Airport",
        "city": "Cali",
        "latitude": 3.54322,
        "longitude": -76.3816
    },
    "MDE": {
        "name": "Jose Maria Cordova International Airport",
        "city": "Rionegro",
        "latitude": 6.16454,
        "longitude": -75.4231
    },
    "LPB": {
        "name": "El Alto International Airport",
        "city": "La Paz / El Alto",
        "latitude": -16.513299942,
        "longitude": -68.1922988892
    },
    "PBM": {
        "name": "Johan Adolf Pengel International Airport",
        "city": "Zandery",
        "latitude": 5.4528298378,
        "longitude": -55.1878013611
    },
    "LIM": {
        "name": "Jorge Chavez International Airport",
        "city": "Lima",
        "latitude": -12.021900177,
        "longitude": -77.1143035889
    },
    "BNU": {
        "name": "Blumenau Airport",
        "city": "Blumenau",
        "latitude": -26.8306007385,
        "longitude": -49.0903015137
    },
    "GEO": {
        "name": "Cheddi Jagan International Airport",
        "city": "Georgetown",
        "latitude": 6.4985499382,
        "longitude": -58.2541007996
    },
    "BGI": {
        "name": "Sir Grantley Adams International Airport",
        "city": "Bridgetown",
        "latitude": 13.0746002197,
        "longitude": -59.4925003052
    },
    "GND": {
        "name": "Point Salines International Airport",
        "city": "Saint George's",
        "latitude": 12.0041999817,
        "longitude": -61.7862014771
    },
    "SJU": {
        "name": "Luis Munoz Marin International Airport",
        "city": "San Juan",
        "latitude": 18.4393997192,
        "longitude": -66.0018005371
    },
    "POS": {
        "name": "Piarco International Airport",
        "city": "Port of Spain",
        "latitude": 10.5953998566,
        "longitude": -61.3372001648
    },
    "ALA": {
        "name": "Almaty Airport",
        "city": "Almaty",
        "latitude": 43.3521003723,
        "longitude": 77.0404968262
    },
    "NQZ": {
        "name": "Astana International Airport",
        "city": "Astana",
        "latitude": 51.0222015381,
        "longitude": 71.4669036865
    },
    "AKX": {
        "name": "Aktobe Airport",
        "city": "Aktyubinsk",
        "latitude": 50.2458000183,
        "longitude": 57.2066993713
    },
    "GYD": {
        "name": "Heydar Aliyev International Airport",
        "city": "Baku",
        "latitude": 40.4674987793,
        "longitude": 50.0466995239
    },
    "LLK": {
        "name": "Lankaran International Airport",
        "city": "Lankaran",
        "latitude": 38.7463989258,
        "longitude": 48.8180007935
    },
    "EVN": {
        "name": "Zvartnots International Airport",
        "city": "Yerevan",
        "latitude": 40.1473007202,
        "longitude": 44.3959007263
    },
    "TBS": {
        "name": "Tbilisi International Airport",
        "city": "Tbilisi",
        "latitude": 41.6692008972,
        "longitude": 44.95470047
    },
    "KBP": {
        "name": "Boryspil International Airport",
        "city": "Kiev",
        "latitude": 50.3450012207,
        "longitude": 30.8946990967
    },
    "LED": {
        "name": "Pulkovo Airport",
        "city": "St. Petersburg",
        "latitude": 59.8003005981,
        "longitude": 30.2625007629
    },
    "MSQ": {
        "name": "Minsk International Airport",
        "city": "Minsk",
        "latitude": 53.8824996948,
        "longitude": 28.0307006836
    },
    "KJA": {
        "name": "Yemelyanovo Airport",
        "city": "Krasnoyarsk",
        "latitude": 56.1729011536,
        "longitude": 92.4933013916
    },
    "DME": {
        "name": "Domodedovo International Airport",
        "city": "Moscow",
        "latitude": 55.4087982178,
        "longitude": 37.9062995911
    },
    "AMD": {
        "name": "Sardar Vallabhbhai Patel International Airport",
        "city": "Ahmedabad",
        "latitude": 23.0771999359,
        "longitude": 72.6346969604
    },
    "BOM": {
        "name": "Chhatrapati Shivaji International Airport",
        "city": "Mumbai",
        "latitude": 19.0886993408,
        "longitude": 72.8678970337
    },
    "NAG": {
        "name": "Dr. Babasaheb Ambedkar International Airport",
        "city": "Naqpur",
        "latitude": 21.0921993256,
        "longitude": 79.047203064
    },
    "CMB": {
        "name": "Bandaranaike International Colombo Airport",
        "city": "Colombo",
        "latitude": 7.1807599068,
        "longitude": 79.8841018677
    },
    "PNH": {
        "name": "Phnom Penh International Airport",
        "city": "Phnom Penh",
        "latitude": 11.5466003418,
        "longitude": 104.84400177
    },
    "CCU": {
        "name": "Netaji Subhash Chandra Bose International Airport",
        "city": "Kolkata",
        "latitude": 22.6546993256,
        "longitude": 88.4467010498
    },
    "KNU": {
        "name": "Kanpur Airport",
        "city": "Kanpur",
        "latitude": 26.399462,
        "longitude": 80.42695
    },
    "PAT": {
        "name": "Lok Nayak Jayaprakash Airport",
        "city": "Patna",
        "latitude": 25.591299057,
        "longitude": 85.0879974365
    },
    "CGP": {
        "name": "Shah Amanat International Airport",
        "city": "Chittagong",
        "latitude": 22.2495994568,
        "longitude": 91.8133010864
    },
    "DAC": {
        "name": "Dhaka / Hazrat Shahjalal International Airport",
        "city": "Dhaka",
        "latitude": 23.843347,
        "longitude": 90.397783
    },
    "HKG": {
        "name": "Chek Lap Kok International Airport",
        "city": "Hong Kong",
        "latitude": 22.3089008331,
        "longitude": 113.915000916
    },
    "AGR": {
        "name": "Agra Airport",
        "city": "",
        "latitude": 27.1557998657,
        "longitude": 77.960899353
    },
    "IXC": {
        "name": "Chandigarh Airport",
        "city": "Chandigarh",
        "latitude": 30.673500061,
        "longitude": 76.7884979248
    },
    "DEL": {
        "name": "Indira Gandhi International Airport",
        "city": "New Delhi",
        "latitude": 28.5664997101,
        "longitude": 77.1031036377
    },
    "VTE": {
        "name": "Wattay International Airport",
        "city": "Vientiane",
        "latitude": 17.9883003235,
        "longitude": 102.56300354
    },
    "MFM": {
        "name": "Macau International Airport",
        "city": "Taipa",
        "latitude": 22.1495990753,
        "longitude": 113.5920028687
    },
    "KTM": {
        "name": "Tribhuvan International Airport",
        "city": "Kathmandu",
        "latitude": 27.6965999603,
        "longitude": 85.3591003418
    },
    "BLR": {
        "name": "Bengaluru International Airport",
        "city": "Bangalore",
        "latitude": 13.1978998184,
        "longitude": 77.7062988281
    },
    "CJB": {
        "name": "Coimbatore International Airport",
        "city": "Coimbatore",
        "latitude": 11.029999733,
        "longitude": 77.0434036255
    },
    "COK": {
        "name": "Cochin International Airport",
        "city": "Cochin",
        "latitude": 10.1520004272,
        "longitude": 76.4019012451
    },
    "HYD": {
        "name": "Rajiv Gandhi International Airport Shamshabad",
        "city": "Hyderabad",
        "latitude": 17.2313175201,
        "longitude": 78.4298553467
    },
    "CNN": {
        "name": "Kannur International Airport",
        "city": "Mattanur",
        "latitude": 11.92,
        "longitude": 75.55
    },
    "MAA": {
        "name": "Chennai International Airport",
        "city": "Chennai",
        "latitude": 12.9900054932,
        "longitude": 80.1692962646
    },
    "PBH": {
        "name": "Paro Airport",
        "city": "Paro",
        "latitude": 27.4032001495,
        "longitude": 89.4245986938
    },
    "MLE": {
        "name": "Male International Airport",
        "city": "Male",
        "latitude": 4.1918301582,
        "longitude": 73.5290985107
    },
    "BKK": {
        "name": "Suvarnabhumi Airport",
        "city": "Bangkok",
        "latitude": 13.6810998917,
        "longitude": 100.7470016479
    },
    "CNX": {
        "name": "Chiang Mai International Airport",
        "city": "Chiang Mai",
        "latitude": 18.7667999268,
        "longitude": 98.962600708
    },
    "URT": {
        "name": "Surat Thani Airport",
        "city": "Surat Thani",
        "latitude": 9.1325998306,
        "longitude": 99.135597229
    },
    "DAD": {
        "name": "Da Nang International Airport",
        "city": "Da Nang",
        "latitude": 16.0438995361,
        "longitude": 108.1989974976
    },
    "HAN": {
        "name": "Noi Bai International Airport",
        "city": "Hanoi",
        "latitude": 21.221200943,
        "longitude": 105.8069992065
    },
    "SGN": {
        "name": "Tan Son Nhat International Airport",
        "city": "Ho Chi Minh City",
        "latitude": 10.8187999725,
        "longitude": 106.652000427
    },
    "DPS": {
        "name": "Ngurah Rai (Bali) International Airport",
        "city": "Denpasar-Bali Island",
        "latitude": -8.748169899,
        "longitude": 115.1669998169
    },
    "MLG": {
        "name": "Abdul Rachman Saleh Airport",
        "city": "Malang-Java Island",
        "latitude": -7.9265599251,
        "longitude": 112.714996338
    },
    "JOG": {
        "name": "Adi Sutjipto International Airport",
        "city": "Yogyakarta-Java Island",
        "latitude": -7.7881798744,
        "longitude": 110.4319992065
    },
    "KCH": {
        "name": "Kuching International Airport",
        "city": "Kuching",
        "latitude": 1.4846999645,
        "longitude": 110.3470001221
    },
    "BWN": {
        "name": "Brunei International Airport",
        "city": "Bandar Seri Begawan",
        "latitude": 4.9442000389,
        "longitude": 114.9280014038
    },
    "CGK": {
        "name": "Soekarno-Hatta International Airport",
        "city": "Jakarta",
        "latitude": -6.1255698204,
        "longitude": 106.65599823
    },
    "JHB": {
        "name": "Senai International Airport",
        "city": "Senai",
        "latitude": 1.6413099766,
        "longitude": 103.6699981689
    },
    "KUL": {
        "name": "Kuala Lumpur International Airport",
        "city": "Kuala Lumpur",
        "latitude": 2.745579958,
        "longitude": 101.7099990845
    },
    "SIN": {
        "name": "Singapore Changi International Airport",
        "city": "Singapore",
        "latitude": 1.3501900434,
        "longitude": 103.9940032959
    },
    "BNE": {
        "name": "Brisbane International Airport",
        "city": "Brisbane",
        "latitude": -27.3841991425,
        "longitude": 153.1170043945
    },
    "HBA": {
        "name": "Hobart International Airport",
        "city": "Hobart",
        "latitude": -42.836101532,
        "longitude": 147.509994507
    },
    "MEL": {
        "name": "Melbourne International Airport",
        "city": "Melbourne",
        "latitude": -37.6733016968,
        "longitude": 144.8430023193
    },
    "ADL": {
        "name": "Adelaide International Airport",
        "city": "Adelaide",
        "latitude": -34.9449996948,
        "longitude": 138.5310058594
    },
    "PER": {
        "name": "Perth International Airport",
        "city": "Perth",
        "latitude": -31.9402999878,
        "longitude": 115.9670028687
    },
    "CBR": {
        "name": "Canberra International Airport",
        "city": "Canberra",
        "latitude": -35.3069000244,
        "longitude": 149.1950073242
    },
    "SYD": {
        "name": "Sydney Kingsford Smith International Airport",
        "city": "Sydney",
        "latitude": -33.9460983276,
        "longitude": 151.1770019531
    },
    "ULN": {
        "name": "Chinggis Khaan International Airport",
        "city": "Ulan Bator",
        "latitude": 47.8431015015,
        "longitude": 106.766998291
    }
}

export function get_coords_by_iata(iata: string): [number, number] | null{
    const airport = AIRPORTS[iata.toUpperCase()]
    return airport ? [airport.latitude, airport.longitude] : null
}
