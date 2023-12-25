import { FaCheckCircle } from "react-icons/fa";

const Features = () => {
    return (
        <div id="feature" className="mt-24 px-2 md:px-12 lg:px-36">

            <h2 className="text-2xl uppercase tracking-widest font-semibold text-center mb-12 text-teal-600">Features</h2>
        
            <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
  <li>
    <div className="timeline-middle">
      <FaCheckCircle />
    </div>
    <div className="timeline-start md:text-end mb-10">
      <div className="text-lg font-black">Deadline</div>
      User can add task with deadline so that they can be alert and finish work timely 
    </div>
    <hr/>
  </li>
  <li>
    <hr />
    <div className="timeline-middle">
      <FaCheckCircle />
    </div>
    <div className="timeline-end mb-10">
      <div className="text-lg font-black">Priority</div>
      User can define their works based on priority(low, medium , and high). By this feature user can be able to do their high priority work first.
    </div>
    <hr />
  </li>
  <li>
    <hr />
    <div className="timeline-middle">
      <FaCheckCircle />
    </div>
    <div className="timeline-start md:text-end mb-10">
      <div className="text-lg font-black">Update Status</div>
      User can update their task list from to-do to on-going , on-going to complete so that they can move to work easily.
    </div>
    <hr />
  </li>
  <li>
    <hr />
    <div className="timeline-middle">
      <FaCheckCircle />
    </div>
    <div className="timeline-end mb-10">
      <div className="text-lg font-black">Deletion</div>
      If a task become not to do or already completed , user can delete the task from his list easily.
    </div>
    <hr />
  </li>
</ul>
        </div>
    );
};

export default Features;