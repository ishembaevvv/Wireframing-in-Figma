import React from 'react'
import scss from '../../styles/MainStyles/Player.module.scss'

export default function Player() {
	return (
		<div className={scss.container}>
			<div className={scss.pause_player}>
				<div></div>
			</div>

			<div className={scss.content}>
				<h1 className={scss.title}>
					The largest community of photo enthusiasts
				</h1>

				<button className={scss.btn}>Join Today</button>
			</div>
		</div>
	)
}
