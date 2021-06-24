import React, { useState } from "react";
import { render } from "react-dom";
import { storage } from "./firebase";

const ReactFirebaseFileUpload = () => {
	const [image, setImage] = useState(null);

    const [url, setUrl] = useState('');

	const handleChange = (e) => {
		if (e.target.files[0]) {
			setImage(e.target.files[0]);
		}
	};

	const handleUpload = () => {
		const uploadTask = storage.ref(`images/${image.name}`).put(image);
		uploadTask.on(
			"state-changed",
			(snapshot) => {},
			(error) => {
				console.log(error);
			},
			() => {
				storage
					.ref("images")
					.child(image.name)
					.getDownloadURL()
					.then(url => {
						setUrl(url);
					});
			}
		);
	};

	console.log("image: ", image);

	return (
		<div>
            <br />
			<input type="file" onChange={handleChange} />
			<button onClick={handleUpload}>Upload</button>
            <br />
            {url}
		</div>
	);
};

render(<ReactFirebaseFileUpload />, document.querySelector("#root"));
