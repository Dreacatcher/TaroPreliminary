import * as homeApi from './service';

export default {
  namespace: 'user',
  state: {
    banner: [],
    brands: [],
    products_list: [],
    page: 1,
  },
  effects: {
   
    // * product(_, {call, put, select}) {
    //   const { page, products_list } = yield select(state => state.home);
    //   const { status, data } = yield call(homeApi.product, {
    //     page,
    //     mode: 1,
    //     type: 0,
    //     filter: 'sort:recomm|c:330602',
    //   });
    //   if (status === 'ok') {
    //     yield put({ type: 'save',payload: {
    //       products_list: page > 1 ? [...products_list,...data.rows] : data.rows,
    //     } });
    //   }
    // }
  },
  reducers: {
    save(state, { payload }) {
      return {...state, ...payload};
    },
  },
};
