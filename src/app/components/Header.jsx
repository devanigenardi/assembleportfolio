"use client"

import styles from './Header.module.css'
import Image from 'next/image';

export function Header() {
    return (
        <section className="full">
            <header className={`flex py-5 md:py-10 px-4 justify-between ${styles.header}`}>
                <Image className={styles.imgLogo}
                    src="/header/assemble-logo.svg"
                    width={390}
                    height={85}
                    alt="Picture of the author"
                />
                <Image className={styles.imgPorfolio}
                    src="/header/assemble-portfolio-logo.png"
                    width={329}
                    height={85}
                    alt="Picture of the author"
                />
            </header>
        </section>
    )
}