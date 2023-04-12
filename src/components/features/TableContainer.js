import { useSelector } from 'react-redux';
import { getAllTables } from '../../redux/tablesRedux';
import TableCard from './TableCard';

const TableContainer = () => {
  const allTables = useSelector(getAllTables);

  return (
    <>
      <div className="mt-5">
        {allTables.map((table, index) => (
          <div key={index}>
            <TableCard key={index} id={table.id} status={table.status} />
          </div>
        ))}
      </div>
    </>
  );
};

export default TableContainer;
