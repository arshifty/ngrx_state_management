import Teacher from './Teacher';


export default class TeacherState {

    TeacherData: Array<Teacher>;  
    TeacherError: Error;
}

export const initializeState = (): TeacherState => {
  return { TeacherData: Array<Teacher>(),  TeacherError: null };
};
