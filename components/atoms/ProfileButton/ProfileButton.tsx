import Profile from './ProfileIcon.jpg'
import Image from 'next/image';
import styles from './ProfileButton.module.css'
import { UserCircle } from 'phosphor-react';
const ProfileButton=({onClick}:{onClick:Function})=>{
    return(
        <div onClick={onClick} className={styles.button}><UserCircle size={'100%'} /></div>
        );
    }   
    export default ProfileButton;