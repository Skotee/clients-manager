import { FC } from 'react';
import ClientCard, { Client } from '../ClientCard/ClientCard';
import styles from './ClientList.module.scss';

interface ClientsListProps {
  clients?: Array<Client>;
  onAddReport: (id: number) => void;
  onRemoveClient: (id: number) => void;
}

const ClientList: FC<ClientsListProps> = ({ clients, onAddReport, onRemoveClient }) => {
  return (
    <div className={styles.clientList}>
      {clients && clients.length > 0 ? (
        clients.map((client) => (
          <ClientCard
            key={client.id}
            client={client}
            onAddReport={() => onAddReport(client.id)}
            onRemoveClient={() => onRemoveClient(client.id)}
          />
        ))
      ) : (
        <p>There is no clients in the list</p>
      )}
    </div>
  );
};

export default ClientList;
