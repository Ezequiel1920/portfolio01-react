import styles from './Presentation.module.css'
import ButtonA from './elements/ButtonA'

function Presentation() {
    return (
        <div className={styles.presentation} id="presentation">
            <h4><strong>Bem-vindo ao meu Portfólio</strong></h4>
            <h1>Olá, eu sou Ezequiel!</h1>
            <p>
            Estou animado para conectar com outros profissionais da área,<br/>
            compartilhar experiências e aprender com suas histórias e conhecimentos.<br/>
            Se você está interessado em tecnologia, inovação e desenvolvimento web,<br/>
            não hesite em me contatar. Estou sempre aberto a novas oportunidades e colaborações!
            </p>
            <ButtonA link='https://github.com/Ezequiel1920' text='Conecte-se comigo!'/>
        </div>
    )
}

export default Presentation