import Link from "next/link";
import styles from "./navbar.module.css";
import { useRouter } from "next/router";
import { useState } from "react";
import Image from "next/image";

const Navbar = ({ username }) => {
    const [showDropdown, setShowDropdown] = useState(false);

    const router = useRouter();

    const handleOnClickHome = (e) => {
        e.preventDefault();
        router.push("/");
    }

    const handleOnClickMyList = (e) => {
        e.preventDefault();
        router.push("/browse/my-list");
    }

    const handleShowDropdown = (e) => {
        e.preventDefault();
        setShowDropdown(!showDropdown)
    }

    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <Link href="/" className={styles.logoLink}>
                    <div className={styles.logoWrapper}>
                        <Image src="/netflix_logo.svg" alt="netflix" width={111} height={30} />
                    </div>
                </Link>
                <ul className={styles.navItems}>
                    <li className={styles.navItem} onClick={handleOnClickHome}>Home</li>
                    <li className={styles.navItem2} onClick={handleOnClickMyList}>My List</li>
                </ul>

                <nav className={styles.navContainer}>
                    <div>
                        <button onClick={handleShowDropdown} className={styles.usernameBtn}>
                            <p className={styles.username}>{username}</p>
                            <Image src="/arrow_down.svg" alt="expand" width={24} height={24}/>
                        </button>

                        {showDropdown &&
                            <div className={styles.navDropdown}>
                                <div>
                                    <Link className={styles.linkName} href="/login">Sign out</Link>
                                    <div className={styles.lineWrapper}></div>
                                </div>
                            </div>}
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default Navbar;