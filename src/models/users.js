import { query } from '../services/users';
export default {
    namespace: 'users',

    state: {
        list: [],
        currentItem: {},
        modalVisible: false, // 弹出窗的显示状态
        modalType: 'create', // 弹出窗的类型（添加用户，编辑用户）
    },
    // 订阅事件
    subscriptions: {
        setup({ dispatch, history }) {
            history.listen(location => {
                if (location.pathname === '/') {
                    dispatch({
                        type: 'query',
                        payload: {}
                    });
                }
            });
        },
    },
    // 异步处理数据(从后台获取),主要是控制数据流程
    effects: { 
        /* uery 第二个参数 *query({ payload }, { select, call, put })
         * 其中 call 和 put 是 dva 提供的方便操作 effects 的函数
         * 简单理解 call 是调用执行一个函数而 put 则是相当于 dispatch 执行一个 action
         * 而 select 则可以用来访问其它 model
         */
        *query({payload},{select, call, put}) {
            yield put({ type: 'showLoading' });
            const { data } = yield call(query,{state: 'all'});
            if(data) {
                yield put({
                    type: 'querySuccess',
                    payload: {
                        list: data.data
                    }
                })
            }

        },
        *create() {},
        *'delete'() {},
        *update() {},
    },
    // 处理数据同步,本质是修改model的state
    reducers: {
        showLoading(state, action){
            console.log(state)
            console.log(action)
            console.log("loading");
            // 如不返回，下面的querySuccess的state就接不到值了
            return { ...state, loading: true };
        },
        showModal() {},
        hideModal() {},
        // 使用静态数据返回
        querySuccess(state, action) {
            console.log('querySuccess action');
            console.log(action);
            console.log('querySuccess state');
            console.log({...state});
            return {...state,  ...action.payload, loading: false};
        },
        createSuccess() {},
        deleteSuccess() {},
        updateSuccess() {},
    }
}
