import Logo from '../../atoms/Logo/Logo';
import Menu from '../Menu/Menu';
import Profile from '../../molecules/Profile/Profile';
import Search from '../../molecules/Search/Search';
import styles from './Header.module.css'
import Items from '../../../types/appMenuItems';
import { Compass, House, MonitorPlay, PresentationChart } from 'phosphor-react';

/*  */
const items:Items=[
    {
    id:1,
    iconSrc:'',
    title:"Home",
    href:'/home',
    iconClass: <House size={24} weight="thin" />
},
{
    id:2,
    iconSrc:'',
    title:"Explore",
    href:'/',
    iconClass:<Compass size={24} weight="thin" />
},
{
    id:3,
    iconSrc:'',
    title:'Shorts',
    href:'/',
    iconClass: <MonitorPlay size={24} weight="thin" />
},
{
    id:4,
    iconSrc:'',
    title:'Subscriptions',
    href:'/',
    iconClass: <PresentationChart size={24} weight="thin" />
},
{
    id:5,
    iconSrc:'',
    title:'my videos',
    href:'/',
    iconClass: <House size={24} weight="fill" />
},
{
    id:6,
    iconSrc:'',
    title:'continue watching',
    href:'/',
    iconClass: <House size={24} weight="fill" />
},
]
const Header=()=>{
    return(
        <div className={styles.header}>
                <Menu items={items} wrspperClass={styles.wrapperMenu}/>
                <Search className={styles.search}/>
                <Profile className={styles.profile}/>
        </div>
    );

};
export default Header;