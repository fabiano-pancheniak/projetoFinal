import Login from "../Login"
import styles from './Container.module.scss';
import Image from "../Image";

export default function Container(){
    return(
        <div className={styles.fullSize}>
        <div className={styles.container}>
            <Login />
            <Image />
        </div>
        </div>
    )
}