import styles from './Skills.module.css'
import javascript from '../../image/skills/javascript.svg'
import html from '../../image/skills/html.svg'
import css from '../../image/skills/css.svg'
import react from '../../image/skills/react.svg'
import typescript from '../../image/skills/typescript.svg'

function Skills() {
    return (
        <div className={styles.skill} id="skills">
            <h1> Habilidades </h1>
            <p>Conheça um pouco das minhas principais habilidades e conhecimentos.</p>
            <div>
                <img src={javascript} />
                <img src={html} />
                <img src={css} />
                <img src={react} />
                <img src={typescript} />
            </div>
        </div>
    )
}

export default Skills