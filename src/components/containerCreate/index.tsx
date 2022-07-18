import Create from '../Create';
import styles from './Container.module.scss';
import Image from "../Image";

export default function ContainerCreate(){
    return(
        <div className={styles.container}>
            <Create />
            <Image />
        </div>
    )
}