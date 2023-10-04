import React from 'react'
import './Axios.css';

import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

import { deleteUser } from './UserReducer';

export default function Home() {

    const users = useSelector((state) => state.users);
    console.log(users);
    const dispatch = useDispatch();

    const handleDelete = (id) => {
        dispatch(deleteUser({id: id}))
    }


    return (
        <div>
            <div className="container col-lg-8">
                <h2>Order history</h2>
                <Link to='/createAxios' className='btn btn-success my-3'>Create +</Link>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user, index) => (
                            <tr key={index}>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>
                                    <Link to={`/editAxios/${user.id}`} className='btn btn-sm btn-primary'>Edit</Link>
                                    <button onClick={() => handleDelete(user.id)} className='btn btn-sm btn-danger ms'>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
