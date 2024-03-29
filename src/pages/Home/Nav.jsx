import styles from "./Nav.module.css"

const Nav = () => {
    
    const options = [
        {
            id: 0,
            text: "About"
        },
        {
            id: 1,
            text: "Blog"
        },
        {
            id: 2,
            text: "Contact"
        }
    ]

    const listOptions = options.map((option) => {
        return <li key={option.id}> <a href="#" className={styles.option}>{option.text}</a> </li>
    })

  return (
    <nav className={styles.nav}>
        <ul className={styles.list}>
            {listOptions}
        </ul>
        <a href="Login">
        <button className={styles.view_plans_btn_bar}>Log in</button>
        </a>
    </nav>
  )
}

export default Nav