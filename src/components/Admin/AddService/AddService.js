import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const AddService = () => {
    const { register, handleSubmit, errors } = useForm();
    const [imageUrl, setImageUrl] = useState(null)

    const handleImageUpload = (event) => {
        const imageData = new FormData();
        imageData.set('key', '02ecc9ae74794902104116f47bebd708')
        imageData.append('image', event.target.files[0])

        axios.post('https://api.imgbb.com/1/upload', imageData)
            .then(function (response) {
                setImageUrl(response.data.data.display_url);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    const onSubmit = data => {
        if (imageUrl == null) {
            alert('Please Wait Image Url is processing')
        }
        else {
            const newService = { ...data, image: imageUrl }
            fetch('http://localhost:4000/addService', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(newService)
            })
                .then(res => res.json())
                .then(data => {
                    if (data) {
                        alert('Product Successfully Added')
                    }
                })
        }
    };

    return (
        <div>
            <div className="d-flex justify-content-between align-items-center mt-3 title-padding">
                <h1>Add Service</h1>
                <p className="text-center"><span>Design By</span> <br /> <span> Developer Emon</span></p>
            </div>
            <div className="bg-light padding-5">
                <form className="width-50" onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-group">
                        <label htmlFor="name">Service Name</label>
                        <input className="input" type="text" name="name" placeholder="type here" ref={register({ required: true })} id="name" />
                        {errors.name && <span>This field is required</span>}
                    </div>
                    <div className="form-group">
                        <label htmlFor="cost">Service Cost (only use number)</label>
                        <input className="input" type="text" name="cost" placeholder="type here" ref={register({ required: true })} id="cost" />
                        {errors.cost && <span>This field is required</span>}
                    </div>
                    <div className="form-group">
                        <label htmlFor="description">Your Comment</label>
                        <textarea className="input" type="text" name="description" placeholder="type here" ref={register({ required: true })} id="description" />
                        {errors.description && <span>This field is required</span>}
                    </div>
                    <div className="form-group">
                        <label htmlFor="upload-photo">Upload A Image</label>
                        <input className="input" type="file" onChange={handleImageUpload} id="upload-photo" required />
                    </div>
                    <div className="text-right">
                        <input className="btn-brand" type="submit" value="Submit" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddService;