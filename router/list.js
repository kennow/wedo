const express = require('express')
const router = express.Router()
const List = require('../models/lists')
  //用户注册
router.post('/register', (req, res) => {
    List.create(req.body, (err, user) => {
      if (err) {
        res.json(err)
      } else {
        res.json('注册成功！')
      }
    })
  })
  //用户登录
router.post('/login', (req, res) => {
  List.find({
      user: req.body.user
    })
    .then(lists => {
      if (req.body.password == lists[0].password) {
        console.log("登录成功")
        if (req.session.user !== req.body.user) {
          req.session.user = req.body.user
          res.cookie('wedo', req.body.user, {
            expires: new Date(Date.now() + 1000 * 60 * 60 * 2)
          })
        }
        res.json(lists[0].user)
      } else {
        console.log("密码错误")
        res.json(null)
      }
    })
    .catch(err => {
      res.json(err)
    })
})

router.get('/logout', (req, res) => {
    res.clearCookie('wedo')
    res.clearCookie('connect.sid')
    res.json('成功登出！')
  })
  //获取用户信息
router.get('/user', (req, res) => {
  List.find({
      user: req.session.user
    })
    .then(lists => {
      res.json(lists[0].user)
    })
    .catch(err => {
      res.json(err)
    })
})

//查看清单
router.get('/list', (req, res) => {
    List.find({
        user: req.session.user
      })
      .then(lists => {
        res.json(lists[0].lists)
      })
      .catch(err => {
        res.json(err)
      })
  })
  //添加清单
router.post('/list', (req, res) => {
    List.update({
      user: req.session.user
    }, {
      '$push': {
        lists: req.body
      }
    }, (err, list) => {
      if (err) {
        res.json(err)
      } else {
        res.json(list)
      }
    })
  })
  //通过ObjectId查询单个list
router.get('/list/:id', (req, res) => {
    List.find({
        user: req.session.user,
        "lists._id": req.params.id
      })
      .then(lists => {
        let tmplists = lists[0].lists
        let list = tmplists.filter(function (item, index) {
          if (item._id == req.params.id) {
            return item
          }
        })
        res.json(list[0])
      })
      .catch(err => {
        res.json(err)
      })
  })
  // router.get('/list/:id', (req, res) => {
  // 	List.findById(req.params.id)
  // 	.then(list => {
  // 		res.json(list)
  // 	})
  // 	.catch(err => {
  // 		res.json(err)
  // 	})
  // })

//更新list
router.put('/list/:id', (req, res) => {
    List.findOneAndUpdate({
        user: req.session.user,
        "lists._id": req.params.id
      }, {
        $set: {
          "lists.$.title": req.body.title,
          "lists.$.details": req.body.details,
          "lists.$.create_at": req.body.create_at,
          "lists.$.update_at": req.body.update_at,
          "lists.$.isChecked": req.body.isChecked
        }
      }, {
        new: true
      })
      .then(list => res.json(list))
      .catch(err => res.json(err))
  })
  //删除列表
router.post('/delete/:id', (req, res) => {
  List.update({
    user: req.session.user,
    "lists._id": req.params.id
  }, {
    "$pull": {
      lists: {
        _id: req.params.id
      }
    }
  }, (err, list) => {
    if (err) {
      res.json(err)
    } else {
      res.json(list)
    }
  })
})

module.exports = router