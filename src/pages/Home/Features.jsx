import styles from "./Features.module.css"

const Features = () => {

    // eslint-disable-next-line react/prop-types
    function IconTitleText({ icon, title, text }) {
        return (
            <div className={styles.feature}>
                <img 
                    src={icon} 
                    alt=""
                    aria-hidden="true" 
                    className={styles.icon}
                />
                <p className={styles.subtitle}>{title}</p>
                <p className={styles.description}>{text}</p>
            </div>
        );
    }

    return (
        <section className={styles.features}>
            <h2 className={styles.title}>Our Services</h2>
            <div className={styles.wrapper}>
                <IconTitleText 
                    icon={"/img/icon-snappy-process.svg"}
                    title={"PlaceHolder"}
                    text={
                        "View our xyz portal."
                    }
                />
                <IconTitleText 
                    icon={"/img/icon-affordable-prices.svg"}
                    title={"PaceHolder"}
                    text={
                        "View our xyz portal.."
                    }
                />
                <IconTitleText 
                    icon={"/img/icon-people-first.svg"}
                    title={"PlaceHolder"}
                    text={
                        "View our xyz portal."
                    }
                />
                <IconTitleText 
                    icon={"/img/icon-people-first.svg"}
                    title={"PlaceHolder"}
                    text={
                        "View our xyz portal."
                    }
                />
               
            </div>
            
        </section>
    )
}

export default Features