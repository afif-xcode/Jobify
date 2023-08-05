import React from 'react'
import styled from 'styled-components'
import Wrapper from '../assets/wrappers/LandingPage'
import main from '../assets/images/main.svg'

import { Link } from 'react-router-dom'
import { Logo } from '../components'


const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo/>
      </nav>
      <div className="container page">
        <div className="info">
          <h1>
            job <span>tracking</span>
          </h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic non eveniet totam eligendi neque possimus assumenda dolorem porro numquam fuga, qui necessitatibus illo fugiat facere modi quia nobis, alias quae, quidem delectus unde! Laudantium id assumenda qui! Voluptatibus, harum. Ex a ducimus maiores libero sit ipsam, minima hic quae facere!
          </p>
          <Link to='/register' className='btn register-link'>
            Register
          </Link>
          <Link to='/login' className='btn'>
            Login / Demo User
          </Link>
        </div>
        <img src={main} alt="job hunt" className='img main-img' />
      </div>
    </Wrapper>
  )
}


export default Landing