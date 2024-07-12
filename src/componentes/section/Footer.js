import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import styles from './Footer.module.css'

function Footer() {
    return (
        <div className={styles.footer}>
            <ul>
                <li><a href='#'><FaInstagram size={30}/></a></li>
                <li><a href='https://www.linkedin.com/in/ezequiel-de-vilhena-pantoja-85298623a/'><FaLinkedin size={30}/></a></li>
                <li><a href='https://github.com/Ezequiel1920'><FaGithub size={30}/></a></li>
            </ul>
            <p>ezequiel.pantoja1901@gmail.com</p>
            <p>Ezequiel de Vilhena Pantoja © 2024</p>
        </div>
    )
}

export default Footer