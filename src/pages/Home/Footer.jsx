import styles from "./Footer.module.css"

const Footer = () => {

    const more = [
        {
            id: 1,
            title:"our company",
            links: [
                {id: 10, link: "how we work"},
            ]
        },
        {
            id: 2,
            title:"help me",
            links: [
                {id: 20, link: "faq"},
                {id: 21, link: "terms of use"},
                {id: 22, link: "privacy policy"},
                {id: 23, link: "cookies"}
            ]
        },
        {
            id: 3,
            title:"contact",
            links: [
                {id: 31, link: "support"},
                {id: 32, link: "live chat"}
            ]
        },
        {
            id: 4,
            title:"others",
            links: [
                {id: 40, link: "Volunteer"},
                {id: 41, link: "Charity"},
                {id: 42, link: "Member"}
            ]
        },
    ]

    return (
        <footer className={styles.footer}>
            <div className={styles.head}>
                <img 
                    src="/img/logo.svg" 
                    alt="insure logo"
                    className={styles.logo} 
                />
                <div className={styles.wrapper}>
                    <SocialIcon name={"facebook"}/>
                    <SocialIcon name={"twitter"}/>
                    <SocialIcon name={"pinterest"}/>
                    <SocialIcon name={"instagram"}/>
                </div>
            </div>
            <hr />
            <div className={styles.more}>
                <Lists />
            </div>
        </footer>
    )

    // eslint-disable-next-line react/prop-types
    function SocialIcon({ name }) {
        return (
            <a href="#">
                <img 
                    src={"/img/icon-" + name + ".svg"}
                    alt={name + " icon"}
                    className={styles.social}
                />
            </a>
        );
    }

    function Lists() {
        return (
            more.map((list) => {
                return (
                    <ul 
                        className={styles.more_list} 
                        key={list.id}
                    >
                        <li className={styles.title}>{list.title}</li>
                        {list.links.map((linkTxt) => {
                            return (
                                <li 
                                    key={linkTxt.id}
                                    className={styles.item}
                                >
                                    <a href="#" className={styles.redirect}>{linkTxt.link}</a>
                                </li>
                            )
                        })}
                    </ul>
                )
            })
        );
    }
}

export default Footer