import { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './NewTask.module.css';
function NewTask({ handleNewTask }) {
  const [formTitle, setFormTitle] = useState('');
  const [formProject, setFormProject] = useState('');
  const [formAssignee, setFormAssignee] = useState('');
  const [formPriority, setFormPriority] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    if (
      !formTitle.trim() ||
      !formProject.trim() ||
      !formAssignee.trim() ||
      !formPriority
    ) {
      return;
    }
    handleNewTask({
      projectName: formTitle,
      priority: formPriority,
      dueDate: new Date().toLocaleDateString(),
      assignee: formAssignee,
      project: formProject,
    });

    setFormAssignee('');
    setFormProject('');
    setFormTitle('');
    setFormPriority('');
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className={styles.titleContainer}>
          <label htmlFor="item">Title</label>
          <input
            value={formTitle}
            type="text"
            id="item"
            onChange={(e) => setFormTitle(e.target.value)}
          />
          <label htmlFor="item2">Project</label>
          <input
            value={formProject}
            type="text"
            id="item2"
            onChange={(e) => setFormProject(e.target.value)}
          />
          <label htmlFor="item3">Assignee</label>
          <input
            value={formAssignee}
            type="text"
            id="item3"
            onChange={(e) => setFormAssignee(e.target.value)}
          />
          <label htmlFor="item4">Priority</label>
          <input
            value={formPriority}
            type="text"
            id="item4"
            onChange={(e) => setFormPriority(e.target.value)}
          />
        </div>
        <button className={styles.btn} type="submit">
          Add Task
        </button>
      </form>
    </>
  );
}
export default NewTask;

NewTask.propTypes = {
  handleNewTask: PropTypes.func.isRequired,
};
