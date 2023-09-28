import { FC, useState } from 'react';
import { DataItemType } from '../DataItem/DataItem';
import DataList from '../DataList/DataList';

export type Report = {
  id: number;
  title: string;
  dataItems: Array<DataItemType>;
};

interface ReportCardProps {
  report: Report;
}

const ReportCard: FC<ReportCardProps> = ({ report }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div>
      <div>
        <h3>{report.title}</h3>
      </div>
      <button onClick={() => setExpanded(!expanded)}>{expanded ? 'Collapse' : 'Expand'}</button>
      {expanded && (
        <div className="report-details">
          <DataList dataItems={report.dataItems} />
        </div>
      )}
    </div>
  );
};

export default ReportCard;
