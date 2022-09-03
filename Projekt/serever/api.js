import { v4 as uuid } from "uuid";
import { createPool } from 'mysql'

const data = createPool({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'backend',
})


export const wszyscy = (pyt, res) => {
  data.getConnection((er, con) => {
    con.query('SELECT * from user', (er, odp) => {
      con.release();  
      res.send(odp)
    })
  })
};

//dodanie pogody
export const addTemp =(pyt,res) =>{
  data.getConnection((er,con)=>{
    const par = pyt.body
    con.query('insert into pogoda set?', par, (er,odp)=>{
      con.release();
      res.send(odp);
    })
  })
};

//wyświetlenie pgody
export const temp =(pyt,res)=>{
  data.getConnection((er,con)=>{
    con.query('Select * from pogoda ORDER BY id DESC LIMIT 5', (er,odp)=>{
      con.release();
      res.send(odp);
    })
  })
}
