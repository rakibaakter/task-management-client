
import { Link } from 'react-router-dom';
import PrimaryBtn from '../../Shared/Buttons/PrimaryBtn';

const AllTask = () => {
    return (
        <div>
            <Link to="/dashboard/create-task">
                <PrimaryBtn title="Add New Task" />
            </Link>
        </div>
    );
};

export default AllTask;