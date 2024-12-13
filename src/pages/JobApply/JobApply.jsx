import { useNavigate, useParams } from "react-router-dom";
import useAuth from "../../ContextProvider/useAuth";
import Swal from "sweetalert2";


const JobApply = () => {
    const {id} = useParams();
    // console.log(id);
    const {user} = useAuth();
    // console.log(user.email);
    const navigate = useNavigate();
    const handleJobApply = e => {
        e.preventDefault();
        const form = e.target;
        const linkedIn = form.linkedIn.value;
        const github = form.github.value;
        const resume = form.resume.value;
        // console.log(linkedIn, github, resume);

        const jobApplication = {
            job_id: id,
            applicant_email : user.email,
            linkedIn,
            github,
            resume
        }
        
        fetch('http://localhost:5000/job-application', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(jobApplication)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Your work has been saved",
                showConfirmButton: false,
              });
            navigate('/myapplication');
        })
    }
    return (
        <div className="card bg-base-100 w-full max-w-lg mx-auto shrink-0 shadow-2xl">
            <form onSubmit={handleJobApply} className="card-body">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">LinkedIn URL</span>
                    </label>
                    <input type="url" name='linkedIn' placeholder="LinkedIn Url" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">GitHub Link</span>
                    </label>
                    <input type="url" name='github' placeholder="GitHub Link" className="input input-bordered" required />
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Resume Link</span>
                    </label>
                    <input type="url" name='resume' placeholder="Resume Link" className="input input-bordered" required />
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-primary">Submit</button>
                </div>
            </form>
        </div>
    );
};

export default JobApply;