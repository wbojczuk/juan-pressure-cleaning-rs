import Link from 'next/link';
import styles from './servicearea.module.css';

export default function ServiceArea(){
return (
 <div className={styles.serviceArea}>
    <div className={styles.textWrapper}>
        <h2>
            <span className="underline">Serving All</span> <br />
            <span className="underline">Of Pasco,</span> <br />
            <span className="underline">Florida!</span> <br />
        </h2>
        <Link className='main-link light' href={`/contact`}>Contact</Link>
    </div>
    <div className={styles.mapWrapper}>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d899116.3745265561!2d-83.14093976001827!3d28.323355574702724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88c2aebb637dd1df%3A0x26c25e2bec0a5ded!2sPasco%20County%2C%20FL!5e0!3m2!1sen!2sus!4v1732101012070!5m2!1sen!2sus" style={{"border":0}} allowFullScreen={false} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
    </div>
 </div>
)};