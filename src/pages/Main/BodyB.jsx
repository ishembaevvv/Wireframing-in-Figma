import React from 'react'
import scss from '../../styles/MainStyles/BodyB.module.scss'
import BodyBData from '../../Data/MainData/BodyBData.js'

export default function BodyB() {
	return (
		<div className={scss.container}>
			<div className={scss.content}>
				<h1 className={scss.title}>
					Snap photos and share like
					<br /> never before
				</h1>

				<div className={scss.body_render}>
					{BodyBData.map((body, id) => {
						return (
							<div key={id}>
								<h3>{body.title}</h3>
								<p>{body.desc}</p>
								<button>Learn more</button>
							</div>
						)
					})}
				</div>
			</div>
		</div>
	)
}
