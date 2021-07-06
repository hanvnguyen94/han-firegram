import React, { useEffect } from 'react'
import useStorage from '../hooks/useStorage'
import { motion } from 'framer-motion'

const ProgressBar = ({ file, setFile }) => {
	// fire the useStorage hook => create reference, progress % // and url for the uploaded file
	const { url, progress } = useStorage(file)

	useEffect(() => {
		// check valid url so we can hide progress bar
		if (url) {
			// setFile to null so progress bar won't show
			setFile(null)
		}
	}, [url, setFile])

	return (
		<motion.div
			className='progress-bar'
			initial={{ width: 0 }}
			animate={{ width: progress + '%' }}
		></motion.div>
	)
}

export default ProgressBar
