import React, { useEffect, useState } from 'react';
import ClientDataTable from './ClientDataTable';

const ClientList = () => {
    const [clients, setClients] = useState([])

    useEffect(() => {
        fetch(`http://localhost:4000/clients`)
            .then(res => res.json())
            .then(data => setClients(data));
    }, [])

    return (
        <div>
            <div className="d-flex justify-content-between align-items-center mt-3 title-padding">
                <h1>Client List</h1>
                <p className="text-center"><span>Design By</span> <br/> <span> Developer Emon</span></p>
            </div>
            <div className="bg-light padding-5">
                <div className="bg-white p-3 border-radius-10">
                    <table className="table table-borderless">
                        <thead className="bg-light">
                            <tr>
                                <th className="text-secondary text-left" scope="col">Sr No</th>
                                <th className="text-secondary" scope="col">Client Name</th>
                                <th className="text-secondary" scope="col">Client Email</th>
                                <th className="text-secondary" scope="col">Service Name</th>
                                <th className="text-secondary" scope="col">PaymentId</th>
                                <th className="text-secondary" scope="col">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                clients.map((client, index) => <ClientDataTable client={client} index={index} key={client._id}></ClientDataTable>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ClientList;