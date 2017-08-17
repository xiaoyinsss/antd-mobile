import React, { PropTypes } from 'react';

// 使用antd的UI组件
import {Table} from 'antd-mobile';
const  UserList = ({dataSource, loading}) => {
    const columns = [{
        title: '姓名',
        dataIndex: 'name',
        key: 'name',
        render: (text) => (<a href="#">{text}</a>)
        // render: function(text) {
        //   return  <a href="#">{text}</a>
        // }
    }, {
        title: '年龄',
        dataIndex: 'age',
        key: 'age'
    }, {
        title: '住址',
        dataIndex: 'address',
        key: 'address'
    }, {
        title: '操作',
        dataIndex: 'operation',
        key: 'operation',
        render: (text,record) => (
            <p>
                <a onClick = {() => {}}> 编辑 </a>
                &nbsp;
                <a onClick = {() => {}}> 删除 </a>
            </p>
        )
        // render: function(text,record) {
        //     return  <p>
        //                 <a onClick = {() => {}}> 编辑 </a>
        //                 &nbsp;
        //                 <a onClick = {() => {}}> 删除 </a>
        //             </p>
        // }
    }];

    return ( 
        <div> 
         <Table
            columns={columns}
            dataSource={dataSource}
          />
        </div>
    )
}

export default UserList;
