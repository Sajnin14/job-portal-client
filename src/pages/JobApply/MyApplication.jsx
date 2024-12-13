import { useEffect, useState } from "react";
import useAuth from "../../ContextProvider/useAuth";



const MyApplication = () => {
    const { user } = useAuth();
    // const email = user.email;
    const [apply, setApply] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/job-application?email=${user.email}`)
            .then(res => res.json())
            .then(data => {
                setApply(data);
                console.log(data);
            })
    }, [user.email])
    return (
        <div>
            <h3>My application: {apply.length} </h3>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
                            <th></th>
                        </tr>
                    </thead>
                    {
                        apply.map((app, idx) => <tbody key={idx}>
                        {/* row 1 */}
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <td>
                                <div className="flex items-center gap-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle h-12 w-12">
                                            <img
                                                src={app.company_logo}
                                                alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold">{app.company}</div>
                                        <div className="text-sm opacity-50">United States</div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                Zemlak, Daniel and Leannon
                                <br />
                                <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
                            </td>
                            <td>Purple</td>
                            <th>
                                <button className="btn btn-ghost btn-xs">details</button>
                            </th>
                        </tr>
                        
                        
                    </tbody>)
                    }
                    
                    
                </table>
            </div>

        </div>
    );
};

export default MyApplication;