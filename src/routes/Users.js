import React, { PropTypes } from 'react';

// 引入 connect 工具函数
import { connect } from 'dva';

// Users 的 Presentational Component
import UserList from '../components/Users/UserList';
import UserSearch from '../components/Users/UserSearch';
import UserModal from '../components/Users/UserModal';

// 引入对应的样式
// 可以暂时新建一个空的
import styles from './Users.scss';

var Users = ({ location, dispatch, users }) => {
    console.log("Users header")
    console.log(users)
    const userSearchProps = {};
    const userListProps = {
        dataSource: users.list,
        loading: users.loading
    };
    const userModalProps = {};

    return (
        < div className = { styles.red } > { /* 用户筛选搜索框 */ }
            < UserSearch {...userSearchProps }/> { /* 用户信息展示列表 */ }
            < UserList {...userListProps }/> { /* 添加用户 & 修改用户弹出的浮层 */ }
            < UserModal {...userModalProps }/>
      </div>
    );
}

Users.propTypes = {};

function mapStateToProps({ users }) {
    console.log("Users footer")
    console.log(users)
    return { users };
}
export default connect(mapStateToProps)(Users);
