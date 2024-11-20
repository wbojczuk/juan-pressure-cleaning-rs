"use client"
import { CSSProperties } from "react"
import styles from "./aboutus.module.css"
import Link from "next/link"

export default function AboutUs() {
  //@ts-check
  const cssProps = {"--width": "90%"} as CSSProperties
  return (
    <section className={styles.aboutUs}>
        <div className={styles.textWrapper}>
          <h4>About Us</h4>
            <h1><span className="underline">About Us</span></h1>

            <p>Juan Pressure Cleaning is a family-owned and operated pressure washing business proudly serving Pasco County. Licensed and insured, we specialize in house washes, driveway cleaning, pool enclosure care, vinyl fence cleaning, and rust removal. First-time customers enjoy a 15% discount, making it even easier to refresh and restore your property.</p>

            <Link className="main-link" href="/contact">Get a Quote</Link>
        </div>


        <div className={styles.imgWrapper}>
          <div className={styles.imgContainer}>
            <img src="/img/aboutus.png" alt="image of worker" className={styles.mainImg} />
            <div className={styles.imgStyle}></div>
          </div>
        </div>
    </section>
  )
}
