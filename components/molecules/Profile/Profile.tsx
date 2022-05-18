import ProfileButton from "../../atoms/ProfileButton/ProfileButton";
import styles from './Profile.module.css'
import classNames from 'classnames';
const Profile=({className}:{className:string})=>{
    return(
        <div className={classNames(styles.wrapper,className)}><ProfileButton/></div>
    );
}
export default Profile;