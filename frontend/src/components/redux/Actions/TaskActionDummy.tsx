import {FETCH_TASK_SUCCESS_DUMMY} from '../Actions/TaskActionType';
import {API_URL} from '../../../constants';

// eslint-disable-next-line require-jsdoc
export function fetchTaskSuccessDummy() {
  return function(dispatch: any) {
    fetch(`${API_URL}/resources`)
        .then((response) => response.json())
        .then((TaskDataDummy) => dispatch({
          type: FETCH_TASK_SUCCESS_DUMMY,
          payload: TaskDataDummy,
        }));
  };
}

export default fetchTaskSuccessDummy
;
