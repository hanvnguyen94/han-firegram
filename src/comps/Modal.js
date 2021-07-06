import React from 'react'
import { motion } from 'framer-motion'

const Modal = ({ selectedImg, setSelectedImg }) => {
	// click outside img will trigger handleClick
	// => set img to null
	const handleClick = (e) => {
		// make sure modal ONLY disappear when click on the div
		// not the image itselft
		if (e.target.classList.contains('backdrop')) {
			setSelectedImg(null)
		}
	}

	return (
		<motion.div
			className='backdrop'
			onClick={handleClick}
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
		>
			<motion.img
				src={selectedImg}
				alt='enlarged pic'
				initial={{ y: '-100vh' }}
				animate={{ y: 0 }}
			/>
		</motion.div>
	)
}

export default Modal
