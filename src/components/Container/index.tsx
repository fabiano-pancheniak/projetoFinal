import Title from "../Title"
import styles from './Container.module.scss';
import Image from "../Image";

export default function Container(){
    return(
        <div className={styles.container}>
            <Title />
            <Image />
        </div>
    )
}