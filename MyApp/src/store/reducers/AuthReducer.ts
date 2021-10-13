import {SignUpRequest} from 'src/models/api/Auth';

const initialState = {
  isLoggedIn: false,
  name: '',
  password: '',
};

export default function SignUpReducer(
  state = initialState,
  action: {payload: SignUpRequest},
) {
  return {
    ...state,
    status: action.payload,
  };
}
