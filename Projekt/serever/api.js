import { v4 as uuid } from "uuid";
import { createPool } from 'mysql'

const data = createPool({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'backend',
})


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

// wyswietlenie użytkownika
export const wszyscy = (pyt, res) => {
  data.getConnection((er, con) => {
    con.query('SELECT * from user', (er, odp) => {
      con.release();  
      res.send(odp)
    })
  })
};


//dodanie użytkownika
export const addUser =(pyt,res)=>{
  data.getConnection((er,con)=>{
    const par = pyt.body
    con.query('Insert into user set ?', par,(er,odp)=>
    con.release()
    )
  })
};

//wyświetlenie jednego użytkownika
export const getUser=(pyt,res)=>{
  data.getConnection((er,con)=>{
    con.query('Select * from user where email = ?'[pyt.par.email],(er,odp)=>{
     con.release()
      res.send(rows)
    })
  })
};

//usuniecie użytkownika
export const deleteUser=(pyt,res)=>{
  data.getConnection((er,con)=>{
    con.query('Delete from users where email = ?' ,[pyt.par.email], (er,odp)=>{
      con.release();
    })
  })
}

//logowanie
export const login = (req, res) => {
  data.getConnection((err, connection) => {

    const {email, password } = req.body
    console.log(password, email)
    connection.query('SELECT * from user Where Email = ? AND Password = ?', [email, password], (err, rows) => {
      connection.release()


      if (!err && rows.length === 1) {
        res.status(200).send({
          message: "Succesfuly login",
        });
      } else {
        res.status(400).send({
          message: "User not found ",
        });
        
      }
    })
  })
};