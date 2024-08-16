import React from 'react'
import scss from '../../styles/MainStyles/Header.module.scss'
import sampleLogo from '../../images/SampleLogo.png'
import { Link } from 'react-router-dom'

export default function Header() {
	return (
		<div className={scss.container}>
			<div className={scss.logo_box}>
				<img src={sampleLogo} alt='logo' />
			</div>

			<div className={scss.menu_box}>
				<ul>
					<li>Features</li>
					<li>Pricing</li>
					<li>Community</li>
					<li>Support</li>
				</ul>
			</div>

			<div className={scss.btns_box}>
				<button>Log in</button>
				<Link to='/singup'><button>Register</button></Link>
			</div>
		</div>
	)
}
