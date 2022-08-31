import Formular from './Formular.jsx'
import footer from '../styles/Footer.module.css'

function Footer(){

    return <footer className={footer.main}>
        
        <div className={footer.cv}>
            <div className={footer.section_cv}></div>
            <div className={footer.cv_container} >
                <a className={footer.cv_title}  href="../../cv.pdf" download="Jordi_Schaefer_CV.pdf">
                    Download CV
                    <p className={footer.cv_description} > .pdf (83KB)</p>
                </a>     
            </div>
        </div>

        <div className={footer.formular} >
            <div className={footer.section_formular}></div>
            <Formular/>
        </div>

        <div className={footer.icons} >
            <a href="https://github.com/JSchaefer21" style={{display: "table-cell"}} target="_blank" rel="noreferrer">
                <img className={footer.icons_logo}  src='../../github_logo.png' alt=''/>
            </a>
            <a href="https://www.linkedin.com/in/jordi-schaefer" style={{display: "table-cell"}} target="_blank" rel="noreferrer">
                <img className={footer.icons_logo}  src='../../linkedin_logo.png' alt=''/>
            </a>
        </div>

    </footer>
} 

export default Footer