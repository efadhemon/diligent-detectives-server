import React from 'react';

const ClientDataTable = ({ client, index }) => {

    function updateStatus(e) {
        const newStatus = e.target.value;
        const id = e.target.id;

        fetch(`http://localhost:4000/updateStatus/${id}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ newStatus })
        })
            .then(res => res.json())
            .then(result => {
                if (result) {
                    alert('Status Change Successful')
                }
            })
    }

    return (
        <tr>
            <td>{index + 1}</td>
            <td>{client.client_name}</td>
            <td>{client.client_email}</td>
            <td>{client.serviceInfo.name}</td>
            <td>{client.paymentId}</td>
            <td>
                <select id={client._id} onChange={updateStatus}>
                    <option value={client.status}>{client.status}</option>
                    {client.status !== 'Pending' &&
                        <option value="Pending">Pending</option>
                    }
                    {client.status !== 'On going' &&
                        <option value="On going">On going</option>
                    }
                    {client.status !== 'Done' &&
                        <option value="Done">Done</option>
                    }
                </select>
            </td>
        </tr>
    );
};

export default ClientDataTable;