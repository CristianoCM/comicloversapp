import { put } from 'redux-saga/effects';
import api from '../../services/api';
import { Types } from '../ducks/books';

function* booksSaga() {
  try {
    const { data: books } = yield api.get('/books/');

    yield put({
      type: Types.FETCH_ALL_SUCCESS,
      payload: {
        books,
      },
    });
  } catch (err) {
    yield put({
      type: Types.FETCH_ALL_FAIL,
      payload: {
        error: JSON.stringify(err),
      },
    });
  }
}

export default booksSaga;
