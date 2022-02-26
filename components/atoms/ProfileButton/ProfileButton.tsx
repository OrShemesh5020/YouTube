import Profile from './ProfileIcon.jpg'
import Image from 'next/image';
import styles from './ProfileButton.module.css'
const ProfileButton=()=>{
    return(
        <div onClick={clicked} className={styles.button}><Image className={styles.img} src={Profile} alt='profile icon'></Image></div>
        );
    }
    
    function clicked() {
        console.log('you clicked on the profile icon');
    }
    
    export default ProfileButton;