import Profile from './ProfileIcon.jpg'
import Image from 'next/image';
import styles from './ProfileButton.module.css'
const ProfileButton=({onClick}:{onClick:Function})=>{
    return(
        <div onClick={onClick} className={styles.button}><Image className={styles.img} src={Profile} alt='profile icon'></Image></div>
        );
    }   
    export default ProfileButton;