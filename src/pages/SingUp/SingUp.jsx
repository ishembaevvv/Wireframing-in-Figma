import React from 'react'
import scss from '../../styles/SingStyles/SingUp.module.scss'
import { Link } from 'react-router-dom'

export default function SingUp() {
	return (
		<div className={scss.container}>
			<div className={scss.box}>
				<h1>Sign up for a free account</h1>

				<div className={scss.sing}>
					<div className={scss.name_inps}>
						<input type='text' placeholder='First name' />
						<input type='text' placeholder='Last name' />
					</div>

					<input type='text' placeholder='Email address' />
					<input type='text' placeholder='Create password' />
				</div>

				<Link to='/'><button>Register</button></Link>
			</div>
		</div>
	)
}
