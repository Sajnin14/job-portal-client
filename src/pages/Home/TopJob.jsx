
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const TopJob = ({ job }) => {
    const {_id, company_logo, requirements, company, description, salaryRange, title, location } = job;
    return (
        <div>
            <div className="card bg-base-100 shadow-xl py-3">
                <div className='flex gap-2'>
                    <figure>
                        <img
                            className='w-16'
                            src={company_logo}
                            alt="Shoes" />
                    </figure>
                    <div>
                        <h3 className="text-2xl font-bold">{company}</h3>
                        <p>{location}</p>
                    </div>
                </div>
                <div className="card-body">
                    <h2 className="card-title">
                        {title}
                        <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <p>{description}</p>
                    <div className='flex gap-1 flex-wrap items-center'>
                        {
                            requirements.map((req, idx) => <p className='py-1 px-2 text-center border border-gray-600 rounded-lg' key={idx}>{req}</p>)
                        }
                    </div>
                    <div className="card-actions flex items-center">
                        <p>Salary: {salaryRange.min} - {salaryRange.max} {salaryRange.currency}</p>
                        <Link to={`/jobs/${_id}`}><p><button className="btn btn-secondary">Apply</button></p></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

TopJob.propTypes = {
    job: PropTypes.object
}
export default TopJob;