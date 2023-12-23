import Image from "next/image"

export default function MemberBio({ name, image, role, bio }) {
    return(
        <div>
            <h2>{name}</h2>
            <Image src={image} alt={name} width='250' height='250' />
            <h3>{role}</h3>
            <p>{bio}</p>
        </div>
    )
}