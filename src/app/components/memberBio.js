import Image from "next/image"
import styles from '../about/about.module.css';

export default function MemberBio({ name, image, role, bio }) {
    return(
        <div className={styles.memberBio}>
            <Image src={image} alt={name} width='250' height='250' />
            <h2>{name}</h2>
            <h3>{role}</h3>
            <p>{bio}</p>
        </div>
    )
}