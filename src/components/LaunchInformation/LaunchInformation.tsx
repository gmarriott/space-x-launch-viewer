import React from 'react';

interface LaunchInformationProps {
  className: string;
  launch_success: boolean;
  details: string;
  article: string;
}

export const LaunchInformation = ({
  className,
  launch_success,
  details,
  article,
}: LaunchInformationProps) => {
  return (
    <div className={className}>
      <div className="accordion-content">
        <span>
          Launch Status:{' '}
          {launch_success
            ? 'This launch was a success'
            : 'This launch was unsuccessful'}
        </span>
        <br />
        <br />
        <span>
          Launch Details:{' '}
          {details === null
            ? 'There are no details on this launch.'
            : details}
        </span>
        <br />
        <br />
        {article === null ? (
          <p>No articles yet published regarding this launch</p>
        ) : (
          <span>
            Launch coverage:&nbsp;
            <a
              className="article-link"
              target="_blank"
              href={article}
              rel="noreferrer"
            >
              Available article on launch
            </a>
          </span>
        )}
      </div>
    </div>
  );
};
