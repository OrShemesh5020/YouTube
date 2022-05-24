import Logo from '../../atoms/Logo/Logo';
import Menu from '../Menu/Menu';
import Profile from '../../molecules/Profile/Profile';
import Search from '../../molecules/Search/Search';
import styles from './Header.module.css'

const items=[
    {
    iconSrc:'',
    title:"home page",
    href:'/home'
},
    {
    iconSrc:'',
    title:"what's new",
    href:'/'
},
    {
    iconSrc:'',
    title:'library',
    href:'/'
},
    {
    iconSrc:'',
    title:'history',
    href:'/'
},
    {
    iconSrc:'',
    title:'my videos',
    href:'/'
},
    {
    iconSrc:'',
    title:'continue watching',
    href:'/'
},
]
const Header=()=>{
    return(
        <div className={styles.header}>
                <Menu items={items} className={styles.menu}/>
                <Logo className={styles.logo}/>
                <Search className={styles.search}/>
                <Profile className={styles.profile}/>
        </div>
    );

};
export default Header;