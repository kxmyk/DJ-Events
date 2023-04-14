import styles from '../src/styles/Header.module.css'
import Link from 'next/link';

export default function Header() {
	return (
		<header className={styles.header}>
			<div className={styles.logo}>
				<Link href='/'>Dj Events</Link>
			</div>

			<nav>
				<ul>
					<li>
						<Link href='/events'>Event</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
};
