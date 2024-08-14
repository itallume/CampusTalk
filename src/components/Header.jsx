import Image from "next/image";
import Logo from "@/image/logo.png"
import styles from "./Header.module.css"

export default function Header(){

    return (
    <>
        <header
        className={styles.Header}>
            
            <Image
            src={Logo}
            alt="Logo do forum"
            className={styles.Image}
            />
            
            <input 
            type="text" 
            placeholder="Pesquise uma instituição"/>
        </header>

    </>);
}