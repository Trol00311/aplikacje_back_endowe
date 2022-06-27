import { v4 as uuid } from "uuid";
import { createPool } from 'mysql'



const pool = createPool({
  connectionLimit: 10,
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'nodejs',
})



//Single user

export const getUser = (req, res) => {
  pool.getConnection((err, connection) => {
    if (err) throw err


    connection.query('SELECT * from users Where Id = ?', [req.params.id], (err, rows) => {
      connection.release()

      if (!err) {
        res.send(rows)
      } else {
        console.log(err)
      }
    })

  })
};

//All users

export const allUsers = (req, res) => {
  pool.getConnection((err, connection) => {
    if (err) throw err
    connection.query('SELECT * from users', (err, rows) => {
      connection.release()

      if (!err) {
        res.send(rows)
      } else {
        console.log(err)
      }
    })

  })
};



//Delete user


export const removeUser = (req, res) => {
  pool.getConnection((err, connection) => {
    if (err) throw err
    connection.query('DELETE from users WHERE id = ?', [req.params.id], (err, rows) => {
      connection.release()

      if (!err) {
        res.send(`User with  id ${[req.params.id]} has been deleted`)
      } else {
        console.log(err)
      }
    })

  })
};


//Add user

export const addUser = (req, res) => {
  pool.getConnection((err, connection) => {
    if (err) throw err
    const params = req.body
    connection.query('INSERT INTO users SET ?', params, (err, rows) => {
      connection.release()

      if (!err) {
        res.send(`User with  name ${params.Name} has been added`)
      } else {
        console.log(err)
      }
    })

  })
};

//Update user

export const modernizeUser = (req, res) => {
  pool.getConnection((err, connection) => {
    if (err) throw err

    const { Id, Name, Email, Contact } = req.body

    connection.query('UPDATE users SET Name = ?,Email = ?,Contact = ? WHERE Id= ?', [Name, Email, Contact, Id], (err, rows) => {
      connection.release()

      if (!err) {
        res.send(`User with  name ${Name} has been changed`)
      } else {
        console.log(err)
      }
    })

  })
};

