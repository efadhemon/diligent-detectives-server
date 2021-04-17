import React from 'react';
import { useForm } from 'react-hook-form';

const MakeAdmin = () => {

    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => {
        fetch('http://localhost:4000/addAdmin', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(admin => {
                if (admin) {
                    alert('Admin Successfully Added')
                    window.location.reload();
                }
            })
    };

    return (
        <div>
            <div className="d-flex justify-content-between align-items-center mt-3 title-padding">
                <h1>Make Admin</h1>
                <p className="text-center"><span>Design By</span> <br /> <span> Developer Emon</span></p>
            </div>
            <div className="bg-light padding-5">
                <div className="bg-white padding-5 border-radius-10">
                    <form className="width-50" onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-group">
                            <label htmlFor="name"><h6>Admin Name</h6></label>
                            <input className="input" type="text" name="name" placeholder="Admin name" ref={register({ required: true })} id="name" />
                            {errors.name && <span>This field is required</span>}
                        </div>
                        <div className="form-group">
                            <label htmlFor="email"><h6>Admin Email</h6></label>
                            <input className="input" type="email" name="email" placeholder="example@gmail.com" ref={register({ required: true })} id="email" />
                            {errors.email && <span>This field is required</span>}
                        </div>
                        <div className="text-right">
                            <input className="btn-brand" type="submit" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default MakeAdmin;