'use strict';
// 引入 mock js
const mockjs = require('mockjs');
module.exports = {
    'GET /api/users': function(req, res) {
        const mockData  = mockjs.mock({
            'data|5': [{
                'id|+1': 1,
                name: '@cname',
                'age|10-80': 10,
                address: '@region'
            }]
        })
        setTimeout(function() {
            res.json({
                success: true,
                data: mockData.data
            });
        }, 500);
    }
};
