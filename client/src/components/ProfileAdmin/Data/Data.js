//  Sidebar Imports 
import {
    MdSettings,
    MdReceipt,
    MdRule,
    MdHome,
    MdHowToVote,
    MdPerson,
    MdPeople,
    MdOutlineShoppingCart,
    MdAdd,
    MdAttachMoney,
    MdGroupAdd
} from 'react-icons/md';



// Sidebar Data
export const SidebarData = [
    {
        icon: MdReceipt,
        heading: "Dashboard"
    },
    {
        icon: MdSettings,
        heading: "Mis Datos"
    },
    {
        icon: MdPerson,
        heading: "Usuarios"
    },
    {
        icon: MdGroupAdd,
        heading: "Agregar Fundaciones"
    },
    {
        icon: MdPeople,
        heading: "Fundaciones"
    },

    {
        icon: MdRule,
        heading: "Solicitudes"
    },
    {
        icon: MdAdd,
        heading: "Agregar Productos"
    },
    {
        icon: MdOutlineShoppingCart,
        heading: "Productos"
    },
    {
        icon: MdAttachMoney,
        heading: "Donaciones"
    }


];

//  MainDash Data
export const CardsData = [
    {
        title: "Solicitudes",
        color: {
            backGround: "linear-gradient(180deg, #bb67ff 0%, #c484f3 100%)",
            boxShadow: "0px 10px 20px 0px #e0c6f5",
        },
        barValue: 80,
        value: 10,
        png: MdHome,
        series: [
            {
                name: "Solicitudes",
                data: [3, 4, 2, 5, 4, 10, 10]
            },
        ],
    },
    {
        title: "Usuarios Nuevos",
        color: {
            backGround: "linear-gradient(180deg, #FF919D 0%, #FC929D 100%)",
            boxShadow: "0px 10px 20px 0px #FDC0C7",
        },
        barValue: 100,
        value: "30",
        png: MdHowToVote,
        series: [
            {
                name: "Usuarios Nuevos",
                data: [3, 4, 2, 5, 4, 10, 10]
            },
        ],
    },

];

