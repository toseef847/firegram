import React, { useState } from 'react';
import PorgressBar from './ProgressBar';

const UploadForm = (props) => {

    const [file, setFile] = useState(null);
    const [error, setError] = useState(null);

    const types = ['image/jpeg','image/png','image/jpg'];

    const changeHandler = (e) => {
        let selectedItems = e.target.files[0];
        if (selectedItems && types.includes(selectedItems.type)){
            setFile(selectedItems);
            setError(null);
        }
        else {
            setError('Please selected an image file.');
            setFile(null);
        }
    }
    return(
        <div className="form_cont">
            <form>
                <label>
                    <input type="file" onChange={changeHandler}/>
                    <span>+</span>
                </label>
                <div className="output">
                    { error && <div className="error">{ error }</div>}
                    { file && <div className="file">{ file.name }</div>}
                    {file && <PorgressBar file={file} setFile={setFile}/>}
                </div>
            </form>
        </div>
    )
}

export default UploadForm;