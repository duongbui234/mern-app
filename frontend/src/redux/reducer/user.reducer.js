import userActionType from '../type/user.type';

export const loginReducer = (state = {}, action) => {
  switch (action.type) {
    case userActionType.LOGIN_REQUEST:
    case userActionType.REGISTER_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case userActionType.LOGIN_SUCCESS:
    case userActionType.REGISTER_SUCCESS:
      localStorage.setItem('userInfo', JSON.stringify(action.payload));
      return {
        ...state,
        isLoading: false,
        user: action.payload,
      };
    case userActionType.LOGIN_ERROR:
    case userActionType.REGISTER_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    case userActionType.LOGOUT:
      return {};
    default:
      return state;
  }
};
