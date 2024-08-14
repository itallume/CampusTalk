import Image from "next/image";
import Logo from "@/image/logo.png"
import styles from "./Header.module.css"
import { CiSearch } from "react-icons/ci";

export default function Header(){

    return (
    <>
        <header
        
        className={styles.header}>
            <nav
            className={styles.nav}>
                <div className={styles.divImage}>
                    <Image
                    src={Logo}
                    alt="Logo do forum"
                    className={styles.image}
                    />
                </div>

                <div className={styles.divSearch}>
                    <label className={styles.label}>
                        <CiSearch className={styles.icon}/>
                        <input 
                        type="text" 
                        placeholder="Pesquise uma instituição"
                        className={styles.input}
                        />
                    </label>    
                </div>
                <div
                className={styles.divBotaoLogin}>
                    <div className={styles.divBotoes}>
                        <div className={styles.botaoReg}>Registrar-se</div>
                        <div className={styles.botaoLog}>Entrar</div>
                    </div>
                </div>
            </nav>
        </header>

    </>);
}