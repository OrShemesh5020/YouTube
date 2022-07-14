import Logo from '../../atoms/Logo/Logo';
import Menu from '../Menu/Menu';
import Profile from '../../molecules/Profile/Profile';
import Search from '../../molecules/Search/Search';
import styles from './Header.module.css'
import Items from '../../../types/appMenuItems';

/*  */
const items:Items=[
    {
    id:1,
    iconSrc:'',
    title:"home page",
    href:'/home'
},
    {
    id:2,
    iconSrc:'',
    title:"what's new",
    href:'/'
},
    {
    id:3,
    iconSrc:'',
    title:'library',
    href:'/'
},
    {
    id:4,
    iconSrc:'',
    title:'history',
    href:'/'
},
    {
    id:5,
    iconSrc:'',
    title:'my videos',
    href:'/'
},
    {
    id:6,
    iconSrc:'',
    title:'continue watching',
    href:'/'
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