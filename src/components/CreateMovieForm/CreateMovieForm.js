import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';

const CreateMovieForm = ( { addNewMovie }) => {
    const [url, setUrl] = useState("")
    const [urlError, setUrlError] = useState(false)
    const [title, setTitle] = useState("")
    const [titleError, setTitleError] = useState(false)
    const [subtitle, setSubtitle] = useState("")
    const [subtitleError, setSubtitleError] = useState(false)
    const [description, setDescription] = useState("")
    const [descriptionError, setDescriptionError] = useState(false)

    const handleSubmit = () =>{
        let movie = {
            id: uuidv4(),
            title,
            subtitle,
            description, 
            imageUrl:url,
            year:2020,
            rating:0,
            isDeletable: true,
        }

        resetErrorMessages();

        if(validateForm()){
            addNewMovie(movie)
            resetInputFields()
        }
    }

    const resetInputFields = () => {
        setUrl("")
        setTitle("")
        setSubtitle("")
        setDescription("")
    }

    const resetErrorMessages = () => {
        setUrlError(false)
        setTitleError(false)
        setSubtitleError(false)
        setDescriptionError(false)
    }

    const validateForm = () =>{
        if(url===""){
            setUrlError(true)
            return false
        }else if(title===""){
            setTitleError(true)
            return false
        }else if(subtitle===""){
            setSubtitleError(true)
            return false
        }else if(description===""){
            setDescriptionError(true)
            return false
        }

        return true;
    }

    return(
        <React.Fragment>
            <div className="form-group">
                <label>URL: </label>
                <input className="form-control" type='text' value={url} onChange={(e) => setUrl(e.target.value)}></input>
                {urlError && <label>Url is required field</label>}
            </div>
            <div className="form-group">
                <label>Title: </label>
                <input className="form-control" type='text' value={title} onChange={(e) => setTitle(e.target.value)}></input>
                {titleError && <label>Title is required field</label>}
            </div>
            <div className="form-group">
                <label>Subtitle: </label>
                <input className="form-control" type='text' value={subtitle} onChange={(e) => setSubtitle(e.target.value)}></input>
                {subtitleError && <label>Subtitle is required field</label>}
            </div>
            <div className="form-group">
                <label>Description: </label>
                <input className="form-control" type='text' value={description} onChange={(e) => setDescription(e.target.value)}></input>
                {descriptionError && <label>Description is required field</label>}
            </div>
            <div>
                <button className="btn btn-primary" onClick={() => handleSubmit()}>Add new movie</button>
            </div>
        </React.Fragment>
    )
 }

 export default CreateMovieForm;