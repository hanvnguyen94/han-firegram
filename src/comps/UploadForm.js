import React from 'react'
import { useState } from 'react'
import ProgressBar from './ProgressBar'

const UploadForm = () => {
	const [file, setFile] = useState(null)
	const [error, setError] = useState(null)

	const types = ['image/png', 'image/jpeg']

	const onChangeHandle = (e) => {
		let selected = e.target.files[0]

		// check types of input match with types array
		// means not allow user to input video or anything else
		if (selected && types.includes(selected.type)) {
			setFile(selected)
			setError(null)
		} else {
			setFile(null)
			setError('Please select an image file (png or jpeg)')
		}
	}

	return (
		<form>
			<label>
				<input type='file' onChange={onChangeHandle} />
				<span>+</span>
			</label>
			<div className='output'>
				{error && <div className='error'>{error}</div>}
				{file && <div>{file.name}</div>}
				{/* hide progress bar later on based on the below code */}
				{file && <ProgressBar file={file} setFile={setFile} />}
			</div>
		</form>
	)
}

export default UploadForm