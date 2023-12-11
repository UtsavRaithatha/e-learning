import Image from "next/image"

export const Logo = () => {
    return (
        <>
        <Image 
            height={44}
            width={44}
            alt="logo"
            src="/logo.svg"
        />
        <p>LOLearning</p>
        </>
    )
}