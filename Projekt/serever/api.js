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
    con.query('Select * from user where email = ?'[pyt.params.email],(er,odp)=>{
     con.release()
      res.send(rows)
    })
  })
};

//usuniecie użytkownika
export const deleteUser=(pyt,res)=>{
  data.getConnection((er,con)=>{
    con.query('Delete from users where email = ?' ,[pyt.params.email], (er,odp)=>{
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

//jeden cytat
export const getCytat = (pyt, res) => {
  data.getConnection((er, con) => {
    con.query('SELECT tekst from cytaty Where Id = ?', [pyt.params.id], (er, odp) => {
      con.release()

      if (!er) {
        res.send(odp)
      } else {
        console.log(er)
      }
    })

  })
};

//caly czat
export const czat =(pyt,res) =>{
  data.getConnection((er,con)=>{
    con.query(`Select * from czat order by id desc LIMIT 4`,(er,odp)=>{
      con.release();
      if (!er) {
        res.send(odp)
      } else {
        console.log(er)
      }
    })
  })
};

//dodaj wiadomosc
export const addCzat = (pyt, res) => {
  data.getConnection((er, con) => {
    const params = pyt.body
    con.query('INSERT INTO czat SET ?', params, (er, odp) => {
      con.release()
      if (!er) {
        res.send(`Wiadomosc dodana`)
      } else {
        console.log(er)
      }
    })

  })
};

//dodanie to do
export const addTo = (pyt, res) => {
  data.getConnection((er, con) => {
    const params = pyt.body
    con.query('INSERT INTO to_do SET ?', params, (er, odp) => {
      con.release()
      if (!er) {
        res.send(`to do dodane`)
      } else {
        console.log(er)
      }
    })

  })
};

//pokazanie to do
export const toDo =(pyt,res) =>{
  data.getConnection((er,con)=>{
    con.query(`Select * from to_do`,(er,odp)=>{
      con.release();
      if (!er) {
        res.send(odp)
      } else {
        console.log(er)
      }
    })
  })
};

//usuniecie to do
export const deleToDo = (pyt, res) => {
  data.getConnection((err, con) => {
    con.query('DELETE from to_do WHERE id = ?', [pyt.params.id], (er, odp) => {
      con.release()
      if (!er) {
        res.send(`todo usunięte`)
      } else {
        console.log(er)
      }
    })

  })
};

// aktualizacja to do
export const updateToDo = (pyt, res) => {
  data.getConnection((er, con) => {
    console.log(pyt.params.id);
    con.query('UPDATE to_do SET zrobione = "zrobione" WHERE Id= ?', [pyt.params.id], (er, odp) => {
      con.release()

      if (!er) {
        res.send(`task zrobiony`)
      } else {
        console.log(er)
      }
    })

  })
};