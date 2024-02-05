import styles from "./Intro.module.css";
const styleObj = {
    fontSize: '2.5rem',
}

const Intro = () => {
    return (
        <div className={styles.intro}>
            <picture className={styles.intro_img}>
            <source 
                srcSet="/img/image-intro-desktop.jpg"
                media="(min-width: 1024px)"/>
            <img 
                src="/img/image-intro-mobile.jpg"
                alt=""
                aria-hidden="true" />
            </picture>
            <div className={styles.intro_content}>
            <h1 style={styleObj}>የማህበር ቅዱሳን አባላት ፖርታል</h1>

            <p className={styles.description}>
                እንኳን ወደ ማህበረ ቅዱሳን አባል ፖርታል በደህና መጡ:: ለመመዝገብ ይህንን ቁልፍ ይጫኑ
            </p>
            <a href="/register">
                <button className={styles.view_plans_btn}>REGISTER</button>
            </a>
            </div>
        </div>
    )
}

export default Intro