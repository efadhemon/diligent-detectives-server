import React, { useState } from 'react';
import './Admin.css'
import { useForm } from 'react-hook-form';
import {
    Switch,
    Route
} from "react-router-dom";
import Sidebar from '../../Shared/Sidebar/Sidebar';
import AddService from '../AddService/AddService';
import ClientList from '../ClientList/ClientList';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import ManageService from '../ManageService/ManageService';

const Admin = () => {

    const admin = JSON.parse(sessionStorage.getItem('admin')) || {};
    const loggedInUser = JSON.parse(sessionStorage.getItem('loggedInUser')) || {} ;


    const { register, handleSubmit,  errors } = useForm();

    const [error, setError] = useState(false);

    const onSubmit = data => {
        fetch(`http://localhost:4000/admin?email=${data.email}`)
        .then(res => res.json())
        .then(result => {
            sessionStorage.setItem('admin', JSON.stringify(data));
            window.location.reload()
        })
        .catch(err=> {
            setError(true);
        })
    };

    if (admin.email !== loggedInUser.email) {
        return (
            <div className="text-center mt-5">
                <h1>Please Verify that you are a admin</h1>
                <form className="mt-4" onSubmit={handleSubmit(onSubmit)}>
                    <input onChange={()=> setError(false)} className="verify-admin" placeholder="Enter your email" name="email" ref={register({ required: true })} />
                    <input className="verify-btn btn-brand" type="submit" value="Verify" />
                    {errors.email && <p className="text-warning">This field is required</p>}
                </form>
                {
                    error && <h1 className="text-danger mt-5">Your Are Not An Admin</h1>
                }
            </div>
        );
    }
    else {
        return (
            <div className="row margin-0">
                <div className="col-md-2 padding-0">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-10 padding-0">
                    <Switch>
                        <Route path="/admin/make-admin">
                            <MakeAdmin></MakeAdmin>
                        </Route>
                        <Route path="/admin/client-list">
                            <ClientList></ClientList>
                        </Route>
                        <Route path="/admin/add-service">
                            <AddService></AddService>
                        </Route>
                        <Route path="/admin/manage-service">
                            <ManageService></ManageService>
                        </Route>
                    </Switch>
                </div>
            </div>
        );
    }

};

export default Admin;