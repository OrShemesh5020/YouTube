import ProfileButton from "../../atoms/ProfileButton/ProfileButton";
import styles from './Profile.module.css'
const Profile=()=>{
    return(
        <div className={styles.wrapper}><ProfileButton/></div>
    );
}
export default Profile;