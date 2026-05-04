import './style/Init.css'

const Init = () => {
  return (
    <div className="init-wrapper">
      <section className='home'>
        <div className='left'>
          <img src="15Miles.svg" alt="" />
          <h1>Seja bem vindo à 15Miles</h1>
          <h3>A melhor experiência que o seu negócio poderia ter!</h3>
          <div className='mini-form'>
            <input type="text" placeholder="Digite seu email" />
            <button>Comunicar</button> 
          </div>
        </div>

        <div className='right'>
          <div className='best-project'>
            <h1>Nosso projeto destaque</h1>
            <a href="">Ver mais</a>
          </div>

          <div className='social-media'>
            <a href="https://www.facebook.com/15miles" target="_blank" rel="noopener noreferrer">
              <img src="facebook.svg" alt="Facebook" />
            </a>
            <a href="https://www.instagram.com/15miles" target="_blank" rel="noopener noreferrer">
              <img src="instagram.svg" alt="Instagram" />
            </a>
            <a href="https://www.twitter.com/15miles" target="_blank" rel="noopener noreferrer">
              <img src="twitter.svg" alt="Twitter" />
            </a>
          </div>

          <div className='responsible'>
            <h1>Responsável</h1>
            <img src="nathanael.jpg" alt="Nathanael Secundo Cardoso" />
            <h3>Nathanael Secundo Cardoso</h3>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Init