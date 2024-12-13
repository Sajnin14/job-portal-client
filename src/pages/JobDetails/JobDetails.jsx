import { Link, useLoaderData} from "react-router-dom";


const JobDetails = () => {
    const loader = useLoaderData();
    
    return (
        <div className="w-11/12 mx-auto space-y-4">

            <h3 className="text-3xl font-bold">{loader.title}</h3>
            <div className="flex gap-3">
                <img src={loader.company_logo} alt="" />
                <div>
                    <p>{loader.company}</p>
                    <p>{loader.description}</p>
                    <p>{loader.location}</p>
                </div>
            </div>
            <p>Salary: {loader.salaryRange.min} - {loader.salaryRange.max}</p>
            <p>{loader.category}</p>
            <p>{loader.jobType}</p>
            <p className="font-semibold">{loader.applicationDeadline}</p>
            <p className="font-semibold">Requirements:</p>
            {loader.requirements.map((req, idx) => <li key={idx}>{req}</li>)}
    
            <p className="font-semibold">Responsibilities:</p>
            {loader.responsibilities.map((res, idx) => <li key={idx}>{res}</li>)}

            <Link to={`/jobApply/${loader._id}`}><button className="btn btn-secondary">Apply Now</button></Link>

        </div>
    );
};

export default JobDetails;