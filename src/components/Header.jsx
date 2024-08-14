import Image from "next/image";
import Logo from "@/image/logo.png"
export default function Header(){

    return (
    <>
        <header>
            
            <Image
            src={Logo}
            width={500}
            height={500}
            alt="Logo do forum"
            />
            
        </header>

    </>);
}