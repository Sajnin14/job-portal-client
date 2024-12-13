import { useEffect, useState } from "react";
import TopJob from "./TopJob";


const Jobs = () => {
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/jobs')
        .then(res => res.json())
        .then(data => setJobs(data))
    },[])
    return (
        <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {
                    jobs.map(job => <TopJob key={job._id} job={job}></TopJob>)
                }
            </div>
        </div>
    );
};

export default Jobs;