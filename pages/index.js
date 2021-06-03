import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { useRouter } from 'next/router'
import Link from 'next/link'
import fire from './file'
import { useState } from 'react'

const Home = () => {

  const [email, setEmail] = useState('')

  const [password, setPassword] = useState('')
  const login = e => {

    e.preventDefault();
    fire.auth().signInWithEmailAndPassword(email, password).then((u) => {
      console.log(u)
    }).catch((err) => {
      console.log(err)
    })
  }

  return (

    <div className={styles.container}>
      <img className={styles.position} src="https://i.pinimg.com/736x/13/52/df/1352df430153bcf60f76e1fc1a7d598c.jpg" width="350" height="300" />
      <div className={styles.nameproject}>
        เว็บแอพพลิเคชั่นตรวจสถานะอุปกรณ์ทางการแพทย์
      </div>
      <div className="card">
        <div className="card-body">
          <form>
            <div className="form-group">
              <label for="exampleInputEmail1">Email address</label>
              <input type="email"  name="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"
                onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="form-group">
              <label for="exampleInputPassword1">Password</label>
              <input type="password" name="password" className="form-control" id="exampleInputPassword1" placeholder="Password"
                onChange={(e) => setPassword(e.target.value)} />
            </div>
            <button type="submit" onClick={login} className="btn btn-outline-success">
              <Link href="/page">
                <a>Log in</a>
              </Link>
            </button>
            <button type="submit" className="btn btn-outline-success">
              <Link href="/Register">
                <a>Sign up</a>
              </Link>
            </button>
          </form>
        </div>
      </div>

    </div>

  )
}
export default Home
