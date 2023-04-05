import { Status } from '../../createTaskForm/Enums/status.enum';

export const emitCorrectColorandLabel = (
  status: Status,
): { color: string; label: string } => {
  switch (status) {
    case Status.todo:
      return { color: 'error.light', label: "Todo's" };
    case Status.inProgress:
      return {
        color: 'warning.light',
        label: 'in progress',
      };
    case Status.completed:
      return { color: 'success.light', label: 'completed' };
  }
};
