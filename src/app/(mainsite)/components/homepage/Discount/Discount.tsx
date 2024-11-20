"use client"

import Link from 'next/link';
import styles from './discount.module.css';

export default function Discount(){
return (
 <div className={styles.believe}>

    <h2>15% Off!</h2>

    <p>For first-time customers</p>

    <Link className='main-link' href={"/contact"}>Contact Us</Link>
 
    <img src='/img/discount.png' alt='Image of house' className='bg-img' />
    <div className='shader' style={{backgroundColor: "rgba(0,0,0,0.71)"}}></div>
 </div>
)};