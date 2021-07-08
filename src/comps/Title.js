import React from 'react'
import { motion } from 'framer-motion'

const Title = () => {
	return (
		<div className='title'>
			<h1>Us and Keanu</h1>
			<motion.h2
				initial={{ opacity: 0, scale: 0, rotate: 0 }}
				animate={{ opacity: 1, scale: 1, rotate: 360 }}
				transition={{ delay: 1.5, duration: 2 }}
			>
				Happy 4th Anniversary {'🎉'}
			</motion.h2>
			<motion.p
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ delay: 2, duration: 3 }}
			>
				Lucky we don't hate each other...yet
			</motion.p>
			<motion.h2
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ delay: 2, duration: 3 }}
			>
				{'🎊🍻🍾🎈'}
			</motion.h2>
		</div>
	)
}

export default Title
