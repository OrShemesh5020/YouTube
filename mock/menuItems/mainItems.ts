import Items from "../../types/appMenuItems";
import { Compass, House, MonitorPlay, PresentationChart } from 'phosphor-react';


const mainItems: Items = [
    {
        id: 1,
        iconSrc: '',
        title: 'Home',
        href: '/home',
        iconClass: <House size={ 24} weight = "thin" />
},
{
    id: 2,
        iconSrc: '',
            title: "Explore",
                href: '/',
                    iconClass: <Compass size={ 24 } weight = "thin" />
},
{
    id: 3,
        iconSrc: '',
            title: 'Shorts',
                href: '/',
                    iconClass: <MonitorPlay size={ 24 } weight = "thin" />
},
{
    id: 4,
        iconSrc: '',
            title: 'Subscriptions',
                href: '/',
                    iconClass: <PresentationChart size={ 24 } weight = "thin" />
},
{
    id: 5,
        iconSrc: '',
            title: 'my videos',
                href: '/',
                    iconClass: <House size={ 24 } weight = "fill" />
},
{
    id: 6,
        iconSrc: '',
            title: 'continue watching',
                href: '/',
                    iconClass: <House size={ 24 } weight = "fill" />
},
]
export default mainItems;