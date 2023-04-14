import styles from '../src/styles/Footer.module.css'
import Link from 'next/link';

export default function Footer() {
	return (
		<footer className={styles.footer}>
			<p>Copyright &copy; DJ Events 2023</p>
			<p>
				<Link href='/about'>About This Project</Link>
			</p>
		</footer>
	);
};

