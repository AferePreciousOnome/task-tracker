import MyIconSunset from './MyIconSunset';
import StudentIcon from './StudentIcon';
import styles from './TaskItem.module.css';
import PropTypes from 'prop-types';

/*
Please create the <TaskItem /> component following the design from the Figma file.
Please make sure to add styles using CSS Modules.
Add the necessary props to the component.
*/

function TaskItem({ projectName, priority, dueDate, assignee, project }) {
  function colorBox() {
    if (priority === 'low') {
      return `${styles.btn} ${styles.btnGreen}`;
    }
    if (priority === 'medium') {
      return `${styles.btn} ${styles.btnYellow}`;
    }
    if (priority === 'high') {
      return `${styles.btn} ${styles.btnRed}`;
    }
  }

  return (
    <>
      <div className={styles.mainContainer}>
        <h4>{projectName}</h4>
        <div>
          <button className={colorBox()}>{priority}</button>
        </div>
        <div>
          <p className={styles.dueDate}>
            <span>
              <MyIconSunset />
            </span>
            {dueDate}
          </p>
        </div>

        <p className={styles.assignee}>
          <span>
            <StudentIcon />
          </span>
          {assignee}
        </p>

        <p className={styles.projectItem}>{project}</p>
      </div>
    </>
  );
}

TaskItem.propTypes = {
  projectName: PropTypes.string.isRequired,
  priority: PropTypes.oneOf(['low', 'medium', 'high']).isRequired,
  dueDate: PropTypes.string.isRequired,
  assignee: PropTypes.string.isRequired,
  project: PropTypes.string.isRequired,
};

export default TaskItem;
