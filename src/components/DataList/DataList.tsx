import React, { FC } from 'react';
import DataItem, { DataItemType } from '../DataItem/DataItem';

interface DataListProps {
  dataItems: Array<DataItemType>;
}

const DataList: FC<DataListProps> = ({ dataItems }) => {
  return (
    <div>
      {dataItems.map((dataItem) => (
        <DataItem key={dataItem.id} dataItem={dataItem} />
      ))}
    </div>
  );
};

export default DataList;
