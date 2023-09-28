import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Stack, Container } from '@mui/material';
import uniqueId from 'lodash/uniqueId';

import Header from './components/Header/Header';
import ClientList from './components/ClientList/ClientList';
import { addClient, removeClient, filterClients, setClients } from './slices/clientsSlice';
import { addReport } from './slices/reportsSlice';
import { useGetClientsQuery, useCreateClientMutation, useDeleteClientMutation, useCreateReportMutation } from './api';
import { generateName } from './utils';

const App = () => {
  const { data: clients, isLoading, isError } = useGetClientsQuery(null);
  const dispatch = useDispatch();
  const [createClient] = useCreateClientMutation();
  const [createReport] = useCreateReportMutation();
  const [deleteClient] = useDeleteClientMutation();

  useEffect(() => {
    dispatch(setClients(clients || []));
  }, [dispatch, clients]);

  const handleAddClient = async () => {
    try {
      const newClientData = {
        id: uniqueId(),
        name: generateName(),
      };
      dispatch(addClient(newClientData));
      await createClient(newClientData).unwrap();
    } catch (error) {
      console.log('error', error);
    }
  };

  const handleRemoveClient = async (clientId: number) => {
    dispatch(removeClient(clientId));
    await deleteClient(clientId);
  };

  const handleAddReport = async (clientId: number) => {
    try {
      const newReportData = {
        id: Date.now(),
        clientId,
        title: `Report ${Math.floor(Math.random() * 1000)}`,
      };
      await createReport(newReportData).unwrap();
      dispatch(addReport(newReportData));
    } catch (error) {
      console.log('error', error);
    }
  };

  const handleSearch = (searchTerm: string) => {
    filterClients(searchTerm);
  };

  return (
    <Container sx={{ py: 2, position: 'relative' }}>
      <Stack gap={1} my={2}>
        <div>
          <Header onAddClient={handleAddClient} onSearch={handleSearch} />
          {isLoading ? (
            <b> Loading .. </b>
          ) : isError ? (
            // eslint-disable-next-line react/no-unescaped-entities
            <b>There's an error</b>
          ) : clients ? (
            <ClientList clients={clients} onAddReport={handleAddReport} onRemoveClient={handleRemoveClient} />
          ) : null}
        </div>
      </Stack>
    </Container>
  );
};

export default App;
