import createReducer from './createReducer'
import v4 from 'uuid/v4'

const reducer = createReducer(v4);

export default reducer;