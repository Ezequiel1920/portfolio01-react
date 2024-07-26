import styles from './Presentation.module.css'
import ButtonA from './elements/ButtonA'
import { useEffect, useState } from 'react'

function Presentation() {
    const [text, setText] = useState('');
    const toRotate = ['Ezequiel!', 'Desenvolvedor FullStack', 'Product Manager'];
    const [loop, setLoop] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const period = 100;
    const [delta, setDelta] = useState(100);

    useEffect(()=>{
        let ticker = setInterval(()=>{
            toType()
        }, delta)
        return()=>{clearInterval(ticker)}
    }, [text])

    const toType = () =>{
        let i = loop % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length +1);

        setText(updatedText);

        if(!isDeleting && updatedText === fullText){
            setIsDeleting(true);
            setDelta(period);
        }else if (isDeleting && updatedText === ''){
            setIsDeleting(false);
            setDelta(period);
            setLoop(loop+1);
        }
    }

    return (
        <div className={styles.presentation} id="presentation">
            <h4><strong>Bem-vindo ao meu Portfólio</strong></h4>
            <h1>Olá, eu sou {text}</h1>
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