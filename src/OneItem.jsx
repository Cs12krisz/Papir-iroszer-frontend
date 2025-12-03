import { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"


const OneItemCard = ({item}) => (
    <>
    <div className="card-container">
        <div className="card">
            <div className="card-body">
                <h1>
                    {item.name}
                </h1>
                <h2>
                    {item.price} Ft
                </h2>
                <br/>
                <Link to="/items">Vissza</Link>
            </div>
        </div>
    </div>
    </>
);



export const OneItem = () => {
    const [adat, setAdat] = useState()
    const params = useParams()
    const id = params.itemId;

    useEffect(() => {
        fetch(`192.168.50.49:3005/items/${id}`)
        .then((response) => (response.ok ? response.json() : []))
        .then((tartalom) => setAdat(tartalom))
    }, [id]);

    setAdat([
    {
        "id": "a12",
        "name": "Ceruza",
        "price": 120
    },
    {
        "id": "b99",
        "name": "Toll",
        "price": 350
    },
    {
        "id": "x01",
        "name": "Radír",
        "price": 200
    },
    {
        "id": "c14",
        "name": "Filctoll",
        "price": 490
    },
    {
        "id": "d22",
        "name": "Vonalzó",
        "price": 250
    },
    {
        "id": "e31",
        "name": "Zsírkréta",
        "price": 780
    },
    {
        "id": "f47",
        "name": "Tűzőgép",
        "price": 1350
    },
    {
        "id": "g58",
        "name": "Gemkapocs készlet",
        "price": 299
    },
    {
        "id": "h63",
        "name": "Spirál füzet",
        "price": 890
    },
    {
        "id": "i70",
        "name": "Kockás füzet",
        "price": 650
    },
    {
        "id": "j81",
        "name": "Sima füzet",
        "price": 620
    },
    {
        "id": "k92",
        "name": "Gyűrűs mappa",
        "price": 1790
    },
    {
        "id": "l03",
        "name": "Papírvágó",
        "price": 2350
    },
    {
        "id": "m19",
        "name": "Kisolló",
        "price": 520
    },
    {
        "id": "n28",
        "name": "Nagyolló",
        "price": 890
    },
    {
        "id": "o39",
        "name": "Cellux",
        "price": 310
    },
    {
        "id": "p44",
        "name": "Post-it jegyzet",
        "price": 590
    },
    {
        "id": "q57",
        "name": "Ragasztó stift",
        "price": 480
    },
    {
        "id": "r66",
        "name": "Folyékony ragasztó",
        "price": 540
    },
    {
        "id": "s75",
        "name": "Tolltartó",
        "price": 2300
    },
    {
        "id": "t86",
        "name": "Grafit ceruza 2B",
        "price": 160
    },
    {
        "id": "u97",
        "name": "Grafit ceruza HB",
        "price": 150
    },
    {
        "id": "v08",
        "name": "Festék készlet",
        "price": 3200
    },
    {
        "id": "w21",
        "name": "Ecset készlet",
        "price": 1450
    },
    {
        "id": "y33",
        "name": "Képkeret A4",
        "price": 1290
    },
    {
        "id": "z42",
        "name": "Akvarell papír",
        "price": 2190
    },
    {
        "id": "aa11",
        "name": "Jegyzetfüzet",
        "price": 990
    },
    {
        "id": "ab22",
        "name": "Tűzőkapocs csomag",
        "price": 390
    },
    {
        "id": "ac33",
        "name": "Színes papír",
        "price": 490
    },
    {
        "id": "ad44",
        "name": "Vonalkód címke",
        "price": 650
    },
    {
        "id": "ae55",
        "name": "Írólap csomag",
        "price": 1390
    },
    {
        "id": "af66",
        "name": "Fénymásoló papír",
        "price": 1790
    },
    {
        "id": "ag77",
        "name": "Tollbetét",
        "price": 260
    },
    {
        "id": "ah88",
        "name": "Mechanikus ceruza",
        "price": 1250
    },
    {
        "id": "ai99",
        "name": "Mechanikus ceruza betét",
        "price": 350
    },
    {
        "id": "aj10",
        "name": "Asztali tartó",
        "price": 550
    },
    {
        "id": "ak20",
        "name": "Matrica csomag",
        "price": 780
    },
    {
        "id": "al30",
        "name": "Konferencia mappa",
        "price": 3490
    },
    {
        "id": "am40",
        "name": "Tollkészlet",
        "price": 2490
    },
    {
        "id": "an50",
        "name": "Gyurma készlet",
        "price": 890
    },
    {
        "id": "ao60",
        "name": "Ecsetmosó",
        "price": 690
    },
    {
        "id": "ap70",
        "name": "Festőpaletta",
        "price": 760
    },
    {
        "id": "aq80",
        "name": "Olajfesték készlet",
        "price": 6800
    },
    {
        "id": "ar90",
        "name": "Tűfilc",
        "price": 420
    },
    {
        "id": "as01",
        "name": "Nyomtatópapír",
        "price": 1990
    },
    {
        "id": "at02",
        "name": "Boríték C6",
        "price": 120
    },
    {
        "id": "au03",
        "name": "Boríték LC5",
        "price": 180
    },
    {
        "id": "av04",
        "name": "Háttértábla",
        "price": 750
    },
    {
        "id": "aw05",
        "name": "Mappa gumis",
        "price": 890
    },
    {
        "id": "ax06",
        "name": "Iratpapucs",
        "price": 990
    },
    {
        "id": "ay07",
        "name": "Színes jelölő",
        "price": 390
    },
    {
        "id": "az08",
        "name": "Rajztábla",
        "price": 2490
    },
    {
        "id": "ba09",
        "name": "Nyomtató tinta",
        "price": 8900
    },
    {
        "id": "bb10",
        "name": "Tinta patron",
        "price": 7600
    },
    {
        "id": "bc11",
        "name": "Papírkosár",
        "price": 1990
    },
    {
        "id": "bd12",
        "name": "Papírvágó kés",
        "price": 1290
    },
    {
        "id": "be13",
        "name": "Gumis könyv",
        "price": 1190
    },
    {
        "id": "bf14",
        "name": "Taskalap",
        "price": 330
    },
    {
        "id": "bg15",
        "name": "Címkeíró",
        "price": 4990
    },
    {
        "id": "bh16",
        "name": "Kreatív karton",
        "price": 790
    },
    {
        "id": "bi17",
        "name": "Rendező mappa",
        "price": 1390
    },
    {
        "id": "bj18",
        "name": "Jegyzettömb",
        "price": 450
    },
    {
        "id": "bk19",
        "name": "Papír csipesz",
        "price": 299
    },
    {
        "id": "bl20",
        "name": "Doboz A5",
        "price": 990
    },
    {
        "id": "bm21",
        "name": "Doboz A4",
        "price": 1490
    },
    {
        "id": "bn22",
        "name": "Tartó doboz",
        "price": 1890
    },
    {
        "id": "bo23",
        "name": "Kihúzó",
        "price": 590
    },
    {
        "id": "bp24",
        "name": "Tollhegy készlet",
        "price": 330
    },
    {
        "id": "bq25",
        "name": "Kréta",
        "price": 490
    },
    {
        "id": "br26",
        "name": "Krétatábla",
        "price": 3490
    },
    {
        "id": "bs27",
        "name": "Vizesblokk tál",
        "price": 1290
    },
    {
        "id": "bt28",
        "name": "Mini ragasztó",
        "price": 330
    },
    {
        "id": "bu29",
        "name": "Kartonkés",
        "price": 430
    },
    {
        "id": "bv30",
        "name": "Másolópapír csomag",
        "price": 2490
    },
    {
        "id": "ca31",
        "name": "Körző",
        "price": 1290
    },
    {
        "id": "cb32",
        "name": "Tervező füzet",
        "price": 1690
    },
    {
        "id": "cc33",
        "name": "Spirál jegyzet",
        "price": 790
    },
    {
        "id": "cd34",
        "name": "Golyóstoll kék",
        "price": 240
    },
    {
        "id": "ce35",
        "name": "Golyóstoll piros",
        "price": 240
    },
    {
        "id": "cf36",
        "name": "Golyóstoll fekete",
        "price": 240
    },
    {
        "id": "cg37",
        "name": "Szövegkiemelő",
        "price": 520
    },
    {
        "id": "ch38",
        "name": "Kreatív ragasztó",
        "price": 990
    },
    {
        "id": "ci39",
        "name": "Dekor papír",
        "price": 1290
    },
    {
        "id": "cj40",
        "name": "Pausz papír",
        "price": 490
    },
    {
        "id": "ck41",
        "name": "Varrótű",
        "price": 290
    },
    {
        "id": "cl42",
        "name": "Fonal készlet",
        "price": 1350
    },
    {
        "id": "cm43",
        "name": "Hegyező",
        "price": 260
    },
    {
        "id": "cn44",
        "name": "Sarokvédő",
        "price": 180
    },
    {
        "id": "co45",
        "name": "Kartonlap",
        "price": 250
    },
    {
        "id": "cp46",
        "name": "Kreatív szalag",
        "price": 460
    },
    {
        "id": "cq47",
        "name": "Alkoholos filc",
        "price": 780
    },
    {
        "id": "cr48",
        "name": "Fóliatasak",
        "price": 390
    },
    {
        "id": "cs49",
        "name": "Fóliahegesztő",
        "price": 9800
    },
    {
        "id": "ct50",
        "name": "Táblafilc",
        "price": 390
    },
    {
        "id": "cu51",
        "name": "Whiteboard törlő",
        "price": 690
    },
    {
        "id": "cv52",
        "name": "Whiteboard spray",
        "price": 1190
    },
    {
        "id": "cw53",
        "name": "Plasztik lap",
        "price": 320
    },
    {
        "id": "cx54",
        "name": "Dosszié",
        "price": 230
    },
    {
        "id": "cy55",
        "name": "Kulcstartó",
        "price": 490
    },
    {
        "id": "cz56",
        "name": "Asztali óra",
        "price": 3490
    },
    {
        "id": "da57",
        "name": "Hűtőmágnes",
        "price": 690
    },
    {
        "id": "db58",
        "name": "Naptár",
        "price": 1890
    },
    {
        "id": "dc59",
        "name": "Határidőnapló",
        "price": 2190
    },
    {
        "id": "dd60",
        "name": "Kártyatartó",
        "price": 760
    },
    {
        "id": "de61",
        "name": "Szögmérő",
        "price": 490
    },
    {
        "id": "df62",
        "name": "Iratsín",
        "price": 230
    },
    {
        "id": "dg63",
        "name": "Névjegykártya",
        "price": 170
    },
    {
        "id": "dh64",
        "name": "Nyomtatott címke",
        "price": 650
    },
    {
        "id": "di65",
        "name": "Árazó",
        "price": 3990
    },
    {
        "id": "dj66",
        "name": "Árazó címke",
        "price": 580
    },
    {
        "id": "dk67",
        "name": "Fali táblatartó",
        "price": 1990
    },
    {
        "id": "dl68",
        "name": "Könyvtámasz",
        "price": 1390
    },
    {
        "id": "dm69",
        "name": "Gumis dosszié",
        "price": 1090
    },
    {
        "id": "dn70",
        "name": "Gumis tasak",
        "price": 390
    },
    {
        "id": "do71",
        "name": "Iratrendező",
        "price": 1490
    },
    {
        "id": "dp72",
        "name": "Könyvkötő lap",
        "price": 490
    },
    {
        "id": "dq73",
        "name": "Könyvkötő fólia",
        "price": 990
    },
    {
        "id": "dr74",
        "name": "Jegyzet marker",
        "price": 340
    },
    {
        "id": "ds75",
        "name": "Pecsét",
        "price": 2490
    },
    {
        "id": "dt76",
        "name": "Pecsétpárna",
        "price": 1190
    },
    {
        "id": "du77",
        "name": "Kreatív ecset",
        "price": 780
    },
    {
        "id": "dv78",
        "name": "Rajzszén",
        "price": 890
    },
    {
        "id": "dw79",
        "name": "Képkeret fa",
        "price": 2590
    },
    {
        "id": "dx80",
        "name": "Kifestő készlet",
        "price": 990
    },
    {
        "id": "dy81",
        "name": "Varrókészlet",
        "price": 1490
    },
    {
        "id": "dz82",
        "name": "Tűpárna",
        "price": 650
    },
    {
        "id": "ea83",
        "name": "Ragasztószalag széles",
        "price": 520
    },
    {
        "id": "eb84",
        "name": "Ragasztószalag vékony",
        "price": 310
    },
    {
        "id": "ec85",
        "name": "Spirál könyv",
        "price": 890
    },
    {
        "id": "ed86",
        "name": "Kártyacsomag",
        "price": 990
    },
    {
        "id": "ee87",
        "name": "Montex filc",
        "price": 240
    },
    {
        "id": "ef88",
        "name": "Táblakréta",
        "price": 490
    },
    {
        "id": "eg89",
        "name": "Folyékony tinta",
        "price": 1790
    },
    {
        "id": "eh90",
        "name": "Textil filc",
        "price": 890
    },
    {
        "id": "ei91",
        "name": "Zsineg",
        "price": 290
    },
    {
        "id": "ej92",
        "name": "Műanyag doboz",
        "price": 1390
    },
    {
        "id": "ek93",
        "name": "Tűzőkapocs erős",
        "price": 490
    },
    {
        "id": "el94",
        "name": "Gumikarika",
        "price": 190
    },
    {
        "id": "em95",
        "name": "Kapocskiszedő",
        "price": 330
    },
    {
        "id": "en96",
        "name": "Címkefólia",
        "price": 390
    },
    {
        "id": "eo97",
        "name": "Spirál műanyag",
        "price": 250
    },
    {
        "id": "ep98",
        "name": "Festék patron",
        "price": 4900
    },
    {
        "id": "eq99",
        "name": "Hőpapír tekercs",
        "price": 890
    },
    {
        "id": "er01",
        "name": "Kártyavágó",
        "price": 2190
    },
    {
        "id": "es02",
        "name": "Matrica nagy",
        "price": 690
    },
    {
        "id": "et03",
        "name": "Textil ragasztó",
        "price": 1290
    },
    {
        "id": "eu04",
        "name": "Üvegtoll",
        "price": 4900
    },
    {
        "id": "ev05",
        "name": "Művész ecset",
        "price": 1590
    },
    {
        "id": "ew06",
        "name": "Rafia",
        "price": 390
    },
    {
        "id": "ex07",
        "name": "Filc marker",
        "price": 320
    },
    {
        "id": "ey08",
        "name": "Kártya tok",
        "price": 260
    },
    {
        "id": "ez09",
        "name": "Kreatív doboz",
        "price": 2290
    }
])

    
    return(
    <>
        <h1>Egy eszköz</h1>
        <OneItemCard item={adat} />
    </>
    );
}