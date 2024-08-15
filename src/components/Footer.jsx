import FooterStyles from '@/components/styles/FooterStyles.module.css';
export default function Footer() {

    return(
    <>
        <footer className={FooterStyles.gridcontainer}>
            <div className="grid-item">Ajuda</div>
            <div className="grid-item">Sobre</div>
            <div className="grid-item">Contato</div>
            <div className="grid-item">Termos de Uso</div>
            <div className="grid-item">Cookies</div>
        </footer>
    </>);
}