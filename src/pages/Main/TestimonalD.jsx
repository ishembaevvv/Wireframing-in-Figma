import React from 'react'
import scss from '../../styles/MainStyles/TestimanalD.module.scss'
import TestimonalD_Data from '../../Data/MainData/TestimonalD_Data.js'

export default function TestimonalD() {
	return (
		<div className={scss.container}>
			<h1 className={scss.title}>You’re in good company</h1>

			<h3 className={scss.desc}>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
				<br />
				tempor incididunt ut labore
			</h3>

			<div className={scss.items}>
				{TestimonalD_Data.map((el, id) => {
					return <img key={id} src={el.img} alt='image-item' />
				})}
			</div>
		</div>
	)
}
