import { FC, useState } from 'react';
import { Report } from '../ReportCard/ReportCard';
import ReportList from '../ReportList/ReportList';
import styles from './ClientCard.module.scss';

export type Client = {
  id: number;
  name: string;
  reports: Array<Report>;
};

interface ClientCardProps {
  client: Client;
  onAddReport: () => void;
  onRemoveClient: () => void;
}

const ClientCard: FC<ClientCardProps> = ({ client, onAddReport, onRemoveClient }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className={styles.card}>
      <div>
        <h2>{client.name}</h2>
        <button onClick={onRemoveClient}>Remove</button>
      </div>
      <button onClick={() => setExpanded(!expanded)}>{expanded ? 'Collapse' : 'Expand'}</button>
      {expanded && (
        <div>
          <ReportList reports={client.reports} onAddReport={onAddReport} />
        </div>
      )}
    </div>
  );
};

export default ClientCard;
