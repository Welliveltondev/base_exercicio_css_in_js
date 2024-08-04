import styles from './Hero.module.css'
import { HeroTitle } from './styles'

const Hero = () => (
  <form className={styles.form}>
    <div className="container">
      <HeroTitle>
        As melhores vagas para tecnologia, design e artes visuais.
      </HeroTitle>
    </div>
  </form>
)

export default Hero
