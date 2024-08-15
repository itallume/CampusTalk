import Image from "next/image";
import Logo from "@/image/logo.png"
import styles from "@/components/styles/Header.module.css"
import { CiSearch } from "react-icons/ci";
import { FaBell } from "react-icons/fa";

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
                        <div className={styles.botaoLog}>Entrar</div>

                        <div class="relative inline-flex items-center p-3 text-sm font-medium text-center text-white rounded-lg focus:ring-4 focus:outline-none hover:bg-[#D4A256] hover:text-yellow-500">
                        <FaBell size={29} color={"black"}/> 
                      <div class="absolute inline-flex items-center justify-center w-4 h-4 text-xs font-bold text-black bg-yellow-500 border-2 border-black rounded-full -top-0.5 -end-0.5 "></div>
                        </div>

                    </div>
                </div>
            </nav>
        </header>

    </>);
}