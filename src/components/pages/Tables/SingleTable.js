import { useSelector } from 'react-redux';
import { getTableById } from '../../../redux/tablesRedux';
import { useParams } from 'react-router-dom';

const SingleTable = () => {
  const { id } = useParams();
  const tableData = useSelector((state) => getTableById(state, id));

  return <h1>Table {tableData.id}</h1>;
};

export default SingleTable;
