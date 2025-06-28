import { Link } from 'react-router';
function NavBar() {
  return (
    <>
      <Link to="/" className="link-newtask">
        Task Manager
      </Link>
      <br />
      <Link to="/new-task">Add Task</Link>
      <br />
      <Link to="*">Project View</Link>
    </>
  );
}
export default NavBar;
