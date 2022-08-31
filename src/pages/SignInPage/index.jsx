import axios from 'axios'
import { useState } from 'react'
import ButtonText from '@/components/common/Button/ButtonText'
import InputText from '@/components/common/Input/InputText'

const SignInPage = () => {
  const initialValue = {
    email: '',
    password: '',
  }
  const [formValues, setFormValues] = useState(initialValue)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormValues({ ...formValues, [name]: value })
  }

  const handleSignIn = async (e) => {
    e.preventDefault()
    try {
      console.log(formValues)
      const response = await axios.post(
        'http://localhost:8000/login',
        formValues,
      )
      console.log(response.data)
      const { accessToken } = response.data
      window.localStorage.setItem('accessToken', accessToken)
    } catch (e) {
      console.log('error')
    }
  }

  return (
    <div className="container">
      <h1>로그인</h1>
      <form onSubmit={handleSignIn}>
        <InputText
          type="text"
          name="email"
          placeholder="이메일"
          value={formValues.email}
          onChange={handleInputChange}
        />
        <InputText
          type="text"
          name="password"
          placeholder="비밀번호"
          value={formValues.password}
          onChange={handleInputChange}
        />
        <ButtonText type="submit" buttonText="로그인" />
      </form>
    </div>
  )
}

export default SignInPage
