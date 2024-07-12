import ButtonB from './elements/ButtonB'
import styles from './Projects.module.css'
import Card from './elements/Card'
import landingPage from '../../image/projects/landingPage.png'
import DncWeather from '../../image/projects/DncWeather.png'
import landingccxp from '../../image/projects/landingccxp.png'
import gamerMataMosca from '../../image/projects/gamerMataMosca.png'

function Projects() {
    return (
        <div className={styles.projects} id="projects">
            <h1> Projetos </h1>
            <p> Cards </p>
            <Card
            img={landingPage}
            title='LandigPage Arquitetura'
            tech='HTML, CSS e JS'
            description='Desenvolvimento de uma Landig Page para projetos de arquitetura'
            repo='https://github.com/Ezequiel1920/projeto-landing-page-arquitetura'
            site='https://venerable-froyo-90058a.netlify.app/'
            />
            <Card
            img={DncWeather}
            title='DncWeather'
            tech='HTML, CSS e JS'
            description='Desenvolvimento de uma página, que capturar informações de um formulário e, utilizando o CEP e a localização (logradouro e latitude), fornecer a cidade, o bairro, o estado (UF) e a temperatura atual do ambiente.'
            repo='https://github.com/Ezequiel1920/Projeto-DncWeather?tab=readme-ov-file'
            site='https://spontaneous-tulumba-5e3d1b.netlify.app/'
            />
            <Card
            img={landingccxp}
            title='Landing Page CCXP'
            tech='HTML, CSS e JS'
            description='Desenvolvimento de uma landing page, que para determinado evento, há uma contagem regressiva para esse evento.'
            repo='https://github.com/Ezequiel1920/Landing-Page-CCPX'
            site='https://landing-page-ccpx.netlify.app/'
            />
            <Card
            img={gamerMataMosca}
            title='Jogo de matar mosquitos'
            tech='HTML, CSS e JS'
            description='Desenvolvimento de um jogo, de matar mosquitos, criado com javascript, css (tendo também, bootstrap) e html.'
            repo='https://github.com/Ezequiel1920/Jogo-mata-mosquitos?tab=readme-ov-file'
            site='https://dapper-pie-2bba47.netlify.app/'
            />
            <ButtonB text='Acesse meu repositório' link='https://github.com/Ezequiel1920'/>
        </div>
    )
}

export default Projects