import React from 'react';

const ViewJobs = ({ job }) => {
  const {
    title,
    description,
    location,
    jobType,
    category,
    applicationDeadline,
    company,
    company_logo
  } = job;

  return (
    <div className="max-w-sm mx-auto">
      <div className="card bg-white shadow-xl hover:shadow-2xl transition duration-300 ease-in-out border border-gray-200">
        <div className="flex items-center gap-4 p-4 border-b">
          <img
            src={company_logo}
            alt={`${company} logo`}
            className="w-14 h-14 object-contain rounded"
          />
          <div>
            <h3 className="text-lg font-semibold text-gray-800">{company}</h3>
            <p className="text-sm text-gray-500">{location}</p>
          </div>
        </div>

        <div className="p-4 space-y-2">
          <h2 className="text-xl font-bold text-black">{title}</h2>
          <p className="text-sm text-gray-700">{category} | {jobType}</p>
          <p className="text-sm text-gray-600 line-clamp-3">{description}</p>
          <p className="text-xs text-rose-600 font-medium">
            Deadline: {applicationDeadline}
          </p>
        </div>

        <div className="p-4 pt-0 flex justify-end">
          <button className="btn btn-sm btn-success text-white">
            Apply Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ViewJobs;
