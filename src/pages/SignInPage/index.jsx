import axios from 'axios'
import { useState, useEffect } from 'react'
import { saveName } from '@/modules/user'
import { useDispatch, useSelector } from 'react-redux'
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

  const dispatch = useDispatch()

  const handleSignIn = async (e) => {
    e.preventDefault()
    try {
      console.log(formValues)
      const response = await axios.post(
        'http://localhost:8000/login',
        formValues,
      )
      console.log(response.data)
      // update required: Update user to name when real server is connected
      const { accessToken, user } = response.data
      window.localStorage.setItem('accessToken', accessToken)
      console.log(user.name)
      dispatch(saveName(user.name))
    } catch (e) {
      console.log('error')
    }
  }

  // test code: Check if name is saved in user module
  const name = useSelector((state) => state.user)
  useEffect(() => {
    console.log(name)
  }, [name])

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
