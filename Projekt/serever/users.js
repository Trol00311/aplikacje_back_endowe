import { v4 as uuid } from "uuid";
import { createPool } from 'mysql'

const data = createPool({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'backend',
})

//wszyscy użytkownicy
export const wszyscy = (pyt, res) => {
  data.getConnection((er, connection) => {
    connection.query('SELECT * from user', (er, odp) => {
        res.send(odp)
    })
  })
};
