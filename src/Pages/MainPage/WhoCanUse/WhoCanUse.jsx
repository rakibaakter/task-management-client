import { MdOutlineDeveloperMode } from "react-icons/md";
import { SiPrivateinternetaccess } from "react-icons/si";
import { RiTeamLine } from "react-icons/ri";
import { PiStudentFill } from "react-icons/pi";



const WhoCanUse = () => {
    return (
        <div id="canUse" className="mt-24 mb-24 px-2 md:px-12 lg:px-36">

            <h2 className="text-2xl uppercase tracking-widest font-semibold text-center mb-12 text-teal-600">Who Can Use It</h2>

            <div className="grid lg:grid-cols-2 gap-6">
                <div className="card card-compact  bg-teal-50 shadow-xl">
                    <MdOutlineDeveloperMode  className="text-7xl text-teal-600"/>

                    <div className="card-body">
                        <h2 className="card-title">Developers</h2>
                        <p>A task management system is crucial for developers, offering streamlined organization, collaboration, and efficiency in project workflows. It enables effective task breakdown, prioritization, and resource allocation, ensuring accountability and reducing errors. With adaptability to different methodologies, reminders, and centralized documentation, these systems enhance project delivery and continuous improvement in development processes.</p>
                    </div>
                </div>
                <div className="card card-compact  bg-teal-50 shadow-xl">
                    <SiPrivateinternetaccess  className="text-7xl text-teal-600"/>

                    <div className="card-body">
                        <h2 className="card-title">Interns</h2>
                        <p>Interns use task management systems to stay organized, prioritize tasks, and collaborate efficiently with their teams. These tools provide clear instructions, facilitate time management, and offer opportunities for feedback and skill development. By using task management systems, interns showcase professionalism, adaptability to workflows, and build a documented portfolio of their contributions, contributing to their overall learning and growth within the organization.</p>
                    </div>
                </div>
                <div className="card card-compact  bg-teal-50 shadow-xl">
                    <RiTeamLine  className="text-7xl text-teal-600"/>

                    <div className="card-body">
                        <h2 className="card-title">Team Leaders</h2>
                        <p>Task management systems empower team leaders by providing a centralized platform for assigning and tracking tasks, facilitating efficient communication, and ensuring team members stay on course. These tools enable streamlined leadership, effective resource allocation, and real-time project status updates, promoting transparency and informed decision-making. With quick access to performance metrics, team leaders can optimize workflows and enhance overall team efficiency.</p>
                    </div>
                </div>
                <div className="card card-compact  bg-teal-50 shadow-xl">
                    <PiStudentFill  className="text-7xl text-teal-600"/>

                    <div className="card-body">
                        <h2 className="card-title">Students</h2>
                        <p>Students benefit from task management systems as these tools help organize coursework, assignments, and deadlines efficiently. They provide a structured way to prioritize tasks, set reminders, and manage time effectively. With features for collaboration and file sharing, students can work on group projects seamlessly. It also offer a clear overview of progress and completion, reducing stress and promoting a more organized approach to studying. These tools are valuable for individual productivity and project management, ensuring students stay on top of their academic responsibilities.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhoCanUse;