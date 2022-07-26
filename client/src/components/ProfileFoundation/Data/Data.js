//  Sidebar Imports 
import {
    MdList,
    MdSettings,
    MdDisabledByDefault,
    MdOutgoingMail,
    MdPaid,
    MdPets,
    MdReorder,
    MdReceipt,
    MdRule,
    MdSchedule,
    MdHome,
    MdHowToVote
} from 'react-icons/md';

// USER FAKE IMAGES
import img1 from '../../../assets/fotoLauti.jpeg'

// Sidebar Data
export const SidebarData = [
    {
        icon: MdReceipt,
        heading: "Dashboard"
    },
    {
        icon: MdPets,
        heading: "Huellitas"
    },
    {
        icon: MdRule,
        heading: "Solicitudes"
    },
    {
        icon: MdSchedule,
        heading: "Historial"
    },
    {
        icon: MdOutgoingMail,
        heading: "Mensajes"
    },
    {
        icon: MdSettings,
        heading: "Configuración"
    },

];

//  MainDash Data
export const CardsData = [
    {
        title: "Adopciones",
        color: {
            backGround: "linear-gradient(180deg, #bb67ff 0%, #c484f3 100%)",
            boxShadow: "0px 10px 20px 0px #e0c6f5",
        },
        barValue: 70,
        value: 38,
        png: MdHome,
        series: [
            {
                name: "Adopciones",
                data: [3, 4, 2, 5, 4, 10, 10]
            },
        ],
    },
    {
        title: "Donaciones",
        color: {
            backGround: "linear-gradient(180deg, #FF919D 0%, #FC929D 100%)",
            boxShadow: "0px 10px 20px 0px #FDC0C7",
        },
        barValue: 60,
        value: "37,800",
        png: MdHowToVote,
        series: [
            {
                name: "Donaciones",
                data: [3, 4, 2, 5, 4, 10, 10]
            },
        ],
    },
    {
        title: "Gastos",
        color: {
            backGround:
                "linear-gradient(rgb(248, 212, 154) -146.42%, rgb(255 202 113) -46.42%)",
            boxShadow: "0px 10px 20px 0px #F9D59B",
        },
        barValue: 60,
        value: "48,600",
        png: MdPaid,
        series: [
            {
                name: "Gastos",
                data: [3, 4, 2, 5, 4, 10, 10]
            },
        ],
    },
];

export const UpdatesData = [
    {
        img: 'https://media-exp1.licdn.com/dms/image/C4E03AQG9fkb-aure_w/profile-displayphoto-shrink_800_800/0/1598918678672?e=1663804800&v=beta&t=zh4Mdtor8b7ajDKu_X4tghqY14Egm2czyMvn2_2n7DI',
        name: "Usuario 1",
        news: "Gracias al Usuario 1 por su gran contribucion!",
        time: "Hace unos segundos..."
    },
    {
        img: 'https://media-exp1.licdn.com/dms/image/C4E03AQG9fkb-aure_w/profile-displayphoto-shrink_800_800/0/1598918678672?e=1663804800&v=beta&t=zh4Mdtor8b7ajDKu_X4tghqY14Egm2czyMvn2_2n7DI',

        name: "Usuario 2",
        news: "Ahri esta con su nueva familia. Gracias Usuario 2!",
        time: "Ayer..."
    },
    {
        img: 'https://media-exp1.licdn.com/dms/image/C4E03AQG9fkb-aure_w/profile-displayphoto-shrink_800_800/0/1598918678672?e=1663804800&v=beta&t=zh4Mdtor8b7ajDKu_X4tghqY14Egm2czyMvn2_2n7DI',
        name: "Usuario 3",
        news: "Gracias al Usuario 3 por su gran contribucion!",
        time: "Hace algunas horas..."
    },

]