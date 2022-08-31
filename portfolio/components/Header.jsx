import header from '../styles/Header.module.css'

function Header(){

    return <header className={header.header}>
        <div className={header.polygon}>
        <img className={header.foto} src='../../foto_perfil.jpg' alt=''/>
        </div>

        <div className={header.container}>
        <h1 className={header.name}> Hello, I'm Jordi Schaefer </h1>
        <p className={header.name}> junior web developer </p>
        <p className={header.description}>Passionate about finding solutions to development challenges</p>
        </div>

        <div className={header.slide_lines}>
        <div className={header.line1}></div>
        <div className={header.line2}></div>
        <div className={header.line3}></div>
        <div className={header.line4}></div>
        </div>
    </header>
} 

export default Header