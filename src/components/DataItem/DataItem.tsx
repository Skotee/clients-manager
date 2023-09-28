import React, { FC } from 'react';

export type DataItemType = {
  data: string;
  id: number;
};

interface DataItemProps {
  dataItem: DataItemType;
}

const DataItem: FC<DataItemProps> = ({ dataItem }) => {
  return (
    <div>
      <p>{dataItem.data}</p>
    </div>
  );
};

export default DataItem;
