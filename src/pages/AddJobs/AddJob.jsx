import Swal from "sweetalert2";
import useAuth from "../../ContextProvider/useAuth";


const AddJob = () => {
    const {user} = useAuth();

    const handleJobSubmit = e => {
        e.preventDefault();
        const formInfo = new FormData(e.target);
        // console.log(formInfo.entries());
        const formDataInfo = Object.fromEntries(formInfo.entries());
        // console.log(formDataInfo);

        const {min, max, currency, ...newForm} = formDataInfo;
        console.log(newForm);
        newForm.salaryRange = {min, max, currency};
        newForm.responsibility = newForm.responsibility.split('\n');
        newForm.requirements = newForm.requirements.split('\n');
        console.log(newForm);

        fetch('http://localhost:5000/jobs',{
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newForm)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Your job has been saved",
                showConfirmButton: false,
                timer: 1500
              });
        })
    }
    return (
        <div className="">
            <div className="mx-auto card bg-base-100 w-full max-w-4xl shrink-0 shadow-2xl">
                <h2 className="text-2xl font-semibold mt-4 text-center">Add New Jobs</h2>
                <form onSubmit={handleJobSubmit} className="card-body">

                    {/* field for job title */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Job Title</span>
                        </label>
                        <input type="text" name="title" placeholder="title" className="input input-bordered" required />
                    </div>

                    {/* field for location */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Location</span>
                        </label>
                        <input type='text' name="location" placeholder="company location" className="input input-bordered" required />

                    </div>

                    {/* field for job type */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Job Type</span>
                        </label>
                        <select name="job_type" className="select select-bordered  w-full max-w-xs">
                            <option disabled selected>Select Your job type</option>
                            <option>On-site</option>
                            <option>Remote</option>
                            <option>Hybrid</option>
                        </select>

                    </div>

                    {/* form for category */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Category</span>
                        </label>
                        <select name="category" className="select select-bordered  w-full max-w-xs">
                            <option disabled selected>Select Your job Category</option>
                            <option>Engineering</option>
                            <option>Marketing</option>
                            <option>Content Writer</option>
                            <option>Finance</option>
                            <option>Data Science</option>
                            <option>Design</option>
                            <option>Teaching</option>
                            <option>Management</option>
                        </select>

                    </div>

                    {/*field for salary range */}

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3 items-end">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Salary Range</span>
                            </label>
                            <input type='text' name="min" placeholder="min" className="input input-bordered" required />

                        </div>

                        <div className="form-control">
                            <input type='text' name="max" placeholder="max" className="input input-bordered" required />

                        </div>

                        <div className="form-control">
                            <select name="currency" className="select select-bordered  w-full max-w-xs">
                                <option disabled selected>Currency</option>
                                <option>BDT</option>
                                <option>USD</option>
                                <option>INR</option>
                            </select>

                        </div>

                    </div>

                    {/* field for description */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Description</span>
                        </label>
                        <textarea name="description" placeholder='description' className="textarea textarea-bordered" required></textarea>

                    </div>

                    {/* field for company */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Company</span>
                        </label>
                        <input type='text' name="company" placeholder="Company Name" className="input input-bordered" required />

                    </div>

                    {/* field for requirements */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">requirements</span>
                        </label>
                        <textarea name="requirements" placeholder='write requirements in each line' className="textarea textarea-bordered" required></textarea>

                    </div>

                    {/* field for responsibilities */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Responsibilities</span>
                        </label>
                        <textarea name="responsibility" placeholder='write responsibilities in each line' className="textarea textarea-bordered" required></textarea>

                    </div>

                    {/* field for hr email */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type='email' defaultValue={user?.email} name="email" placeholder="hr email" className="input input-bordered" required />

                    </div>

                    {/* field for hr name */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">hr name</span>
                        </label>
                        <input type='text' defaultValue={user?.name} name="name" placeholder="hr Name" className="input input-bordered" required />

                    </div>

                    {/* field for company logo */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Company Logo</span>
                        </label>
                        <input type='url' name="logo" placeholder="upload company logo" className="input input-bordered" required />

                    </div>



                    {/* field for submit job */}
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Add Job</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddJob;