import Link from 'next/link'
import { useState } from 'react'
import fire from './file'
const Register = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const signup = e => {

    e.preventDefault()
    fire.auth().createUserWithEmailAndPassword(email, password).then((u) => {
      console.log(u)
    }).catch((err) => {
      console.log(err)
    })
  }


  return (
    <div>
      <div className="card">
        <div className="card-body">
          <form>
            <div className="form-group">
              <label for="exampleInputEmail1">Email address</label>
              <input type="email" className="form-control" placeholder="Enter Email"
                onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="form-group">
              <label for="exampleInputUsername1">Password</label>
              <input type="Password"  className="form-control" id="exampleInputUsername1" placeholder="Enter Password"
                onChange={(e) => setPassword(e.target.value)}/>
            </div>
            <div className="form-group">
              <label for="exampleInputPassword1">ConfirmPassword</label>
              <input type="Password" className="form-control" placeholder="Enter Password"
                onChange={(e) => setPassword(e.target.value)} />
            </div>
            <button type="submit" onClick={signup} className="btn btn-outline-success">
              <Link href="/">
                <a>Submit</a>
              </Link>
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
export default Register