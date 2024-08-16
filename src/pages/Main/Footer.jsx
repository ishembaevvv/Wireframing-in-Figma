import React from 'react'
import scss from '../../styles/MainStyles/Footer.module.scss'
import sampleLogo from '../../images/SampleLogo.png'
import FooterData from '../../Data/MainData/FooterData'

export default function Footer() {
	return (
		<div className={scss.container}>
			<ul className={scss.list_items}>
				<li>Mobile app</li>
				<li>Community</li>
				<li>Company</li>

				<li>
					<img src={sampleLogo} alt='logo' />
				</li>

				<li>Help desk</li>
				<li>Blog</li>
				<li>Resources</li>
			</ul>

			<div className={scss.hr}></div>

			<ul className={scss.contacts}>
				{FooterData.map((icon, id) => {
					return <li key={id}><img src={icon.iconContacts} alt="icon" /></li>
				})}
			</ul>

			<span>© Photo, Inc. 2019. We love our users!</span>
		</div>
	)
}
