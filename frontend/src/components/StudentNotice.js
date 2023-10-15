import React from 'react';

const StudentNotice = ({ notices, isDarkTheme }) => {
  if (!notices || notices.length === 0) {
    return <div>No notices available.</div>;
  }

  const containerClass = isDarkTheme ? 'bg-dark text-white' : ''; // Apply background color to the container

  return (

    <div className={containerClass}>
      <h2>Student Notices</h2>
      <ul className="list-group bg-dark">
        {notices.map((notice, index) => (
          <li key={index} className="list-group-item">
            <a
              href={notice.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`text-decoration-none ${isDarkTheme ? 'text-primary ' : 'text-dark'}`}
            >
              {notice.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StudentNotice;
