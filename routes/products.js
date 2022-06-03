const express = require('express');
const router = express.Router();

router.get('/:id', (req, res) => {
  // console.log(req.params.id);

  let sql = `SELECT * FROM products`;

  req.app.locals.con.query(sql, (error, result) => {
    let list = [];
    for (let i = 0; i < result.length; i++) {
      if (result[i].productLine == req.params.id) {
        list.push(result[i].productName);
      }
    }

    if (error) {
      console.log('error', error);
    }
    res.send(list);
  });
});

module.exports = router;
