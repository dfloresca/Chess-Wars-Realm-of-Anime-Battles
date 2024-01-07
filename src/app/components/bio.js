import Image from "next/image";
import MemberBio from "./memberBio";
import styles from '../about.module.css';
const teamArray = [
    { name: "Glenda Floresca", image: '/Glenda.png', role: "CEO / Founder", bio: "The founder of Floresca Threads. It is her talents that are on display when you make a purchase with us. She began sewing at a young age and has been self taught since adulthood. Her skills include sewing(creation of objects), alterations, pattern making, embroidery(hand and machine) as well as various Cricut projects including sublimation and iron on appliques"},
    { name: "Daniel Floresca", image: '/Daniel.png', role: "CTO / Co-Founder", bio: "The man behind the tech as well as co-Founder of Floresca Threads. Daniel takes care of the computer stuff like web development and programming of the advanced machines. He also seeks out clients to help the business grow whenever he can."}
]
export default function Bio() {
    const displayTeamArray = teamArray.map((member, idx) => {
        return <MemberBio image={member.image} name={member.name} role={member.role} bio={member.bio} key={idx} />
    })
    return (
        <div className={styles.bio}>
            {displayTeamArray}
        </div>
    )
}