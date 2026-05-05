import './style/Init.css'

const Init = () => {
  return (
    <div className="init-wrapper">
      <section className='home'>
        <div className='home-content'>
          <h1>Não é sobre estar <span className='bold'>online</span>.</h1>
          <h1 className='highlight-home'>É sobre ir mais <span className='highlight-text'>longe.</span></h1>
          <div className='logo'><img src="/15Miles.svg" alt="" /> <h1>FIFTEEN MILES</h1></div>
        </div>
      </section>
    </div>
  )
}

export default Init