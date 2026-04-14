import './style/Init.css'
import Header from '../components/Header'

const Init = () => {
  return (
    <div className="init-wrapper">
      <Header />
      <div className="initial-section"></div>

      <div className='presentation'>
        <h1>Always <img src="/logo.svg" /> ahead </h1>
      </div>
    </div>
  )
}

export default Init