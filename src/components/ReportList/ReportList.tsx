import { FC } from 'react';
import ReportCard, { Report } from '../ReportCard/ReportCard';

interface ReportListProps {
  reports?: Array<Report>;
  onAddReport: () => void;
}

const ReportList: FC<ReportListProps> = ({ reports, onAddReport }) => {
  return (
    <div>
      <button onClick={onAddReport}>Add Report</button>
      {reports && reports.length > 0 ? (
        reports.map((report) => <ReportCard key={report.id} report={report} />)
      ) : (
        // eslint-disable-next-line react/no-unescaped-entities
        <p>This client doesn\'t own any reports</p>
      )}
    </div>
  );
};

export default ReportList;
