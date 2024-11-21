"use client"
import { CSSProperties } from "react"
import styles from "./aboutcontent.module.css"
import Link from "next/link"

export default function AboutContent() {
  //@ts-check
  const cssProps = {"--width": "90%"} as CSSProperties
  return (
    <section className={styles.aboutUs}>
        <div className={styles.textWrapper}>
          <h4>About Us</h4>
            <h1><span className="underline">About Us</span></h1>

            <p>Juan Pressure Cleaning, a family-owned and licensed business in Pasco County, offers expert house washing, driveway cleaning, pool enclosures, vinyl fence cleaning, and rust removal. Enjoy a 15% discount as a first-time customer and let us leave your property sparkling clean!</p>

            <Link className="main-link" href="/contact">Get a Quote</Link>
        </div>


        <div className={styles.imgWrapper}>
          <div className={styles.imgContainer}>
            <img src="/img/aboutcontent.webp" alt="image of worker" className={styles.mainImg} />
            <div className={styles.imgStyle}></div>
          </div>
        </div>
    </section>
  )
}
