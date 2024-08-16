import React from 'react'
import scss from '../../styles/MainStyles/BodyE.module.scss'
import bodyF from '../../images/bodyF.jpg'

export default function BodyF() {
	return (
		<div className={scss.container}>
			<div className={scss.content}>
				<h3>Sed ut perspiciatis unde omnis</h3>
				<p>
					Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
					fugit, sed quia consequuntur magni dolores eos qui ratione
					voluptatem sequi nesciunt. Neque porro quisquam est, qui
					dolorem.
				</p>
			</div>

			<img className={scss.image} src={bodyF} alt='photo' />
		</div>
	)
}
