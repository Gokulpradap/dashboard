import {BiCube, BiSolidOffer, BiSolidDashboard} from "react-icons/bi";
import {BsPerson} from "react-icons/bs";
import {TbCoins, TbHelpSquare} from "react-icons/tb";
import img1 from "./assets/img1.jpg"
import img2 from "./assets/img2.jpg"
import img3 from "./assets/img3.jpg"
import img4 from "./assets/img4.jpg"

export const navHeading = [
    {
        logo : <BiSolidDashboard/>,
        heading: "Dashboard",
        link:"#"
    },
    {
        logo : <BiCube/>,
        heading: "Product",
        link:"#"
    },
    {
        logo : <BsPerson/>,
        heading: "Customers",
        link:"#"
    },
    {
        logo : <TbCoins/>,
        heading: "Income",
        link:"#"
    },
    {
        logo : <BiSolidOffer/>,
        heading: "Promote",
        link:"#"
    },
    {
        logo : <TbHelpSquare/>,
        heading: "Help",
        link:"#"
    },
]

export const product = [
    {
        img:img1,
        name : "River",
        content:"lorem ipsum dolor sit amet, consectetur adipiscing elit",
        stack:"32",
        price:"45.99",
        total:"20",
    },
    {
        img:img2,
        name : "Flower",
        content:"lorem ipsum dolor sit amet, consectetur adipiscing elit",
        stack:"32",
        price:"45.99",
        total:"20",
    },
    {
        img:img3,
        name : "Bee",
        content:"lorem ipsum dolor sit amet, consectetur adipiscing elit",
        stack:"32",
        price:"45.99",
        total:"20",
    },
    {
        img:img4,
        name : "Spider",
        content:"lorem ipsum dolor sit amet, consectetur adipiscing elit",
        stack:"32",
        price:"45.99",
        total:"20",
    }
]
