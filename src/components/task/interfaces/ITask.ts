import { Status } from '../../createTaskForm/Enums/status.enum';
import { ITaskDescription } from './ITaskDescription';
import { ITaskFooter } from './ITaskFooter';
import { ITaskHeader } from './ITaskHeader';

export interface ITask
  extends ITaskFooter,
    ITaskDescription,
    ITaskHeader {
  id?: string;
  priority?: string;
  status: Status;
}
