import axios from 'axios'
import logo from '@/assets/images/logo.png'
import { useState, useEffect } from 'react'
import { saveName } from '@/modules/user'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import ButtonText from '@/components/common/Button/ButtonText'
import InputText from '@/components/common/Input/InputText'
import * as S from './style'

const SignInPage = () => {
  const initialValue = {
    email: '',
    password: '',
  }
  const [formValues, setFormValues] = useState(initialValue)
  const [formErrors, setFormErrors] = useState({})
  const [displaySignInError, setDisplaySignInError] = useState(false)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormValues({ ...formValues, [name]: value })
  }

  const removeInputSpaces = (e) => {
    const { name, value } = e.target
    setFormValues({ ...formValues, [name]: value.trim() })
  }

  const dispatch = useDispatch()

  const handleSignIn = (e) => {
    e.preventDefault()
    if (Object.values(formValues).indexOf('') > -1) {
      setFormErrors(validateSignInValues(formValues))
    } else {
      requestSignIn()
    }
  }

  const navigate = useNavigate()

  const requestSignIn = async () => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_SERVER_URL}/login`,
        formValues,
      )
      console.log(response.data)
      setFormErrors(validateSignInValues(formValues))
      setDisplaySignInError(false)
      // update required: Update user to name when real server is connected
      const { accessToken, user } = response.data
      window.localStorage.setItem('accessToken', accessToken)
      dispatch(saveName(user.name))
      navigate('/')
    } catch (e) {
      setFormErrors(validateSignInValues(formValues))
      setDisplaySignInError(true)
    }
  }

  // test code: Check if name is saved in user module
  const name = useSelector((state) => state.user)
  useEffect(() => {
    console.log(name)
  }, [name])

  const validateSignInValues = (values) => {
    const errors = {}
    if (!values.email) {
      errors.email = '이메일을 입력해주세요!'
    }
    if (!values.password) {
      errors.password = '비밀번호를 입력해주세요!'
    }
    return errors
  }

  return (
    <S.Container>
      <img src={logo} alt="logo" />
      <form onSubmit={handleSignIn}>
        <p>Email</p>
        <InputText
          type="text"
          name="email"
          placeholder="이메일을 입력해주세요"
          value={formValues.email}
          onChange={handleInputChange}
          onBlur={removeInputSpaces}
        />
        <p style={{ display: formErrors.email ? 'block' : 'none' }}>
          {formErrors.email}
        </p>
        <p>Password</p>
        <InputText
          type="text"
          name="password"
          placeholder="비밀번호 4자리 이상을 입력해주세요"
          value={formValues.password}
          onChange={handleInputChange}
          onBlur={removeInputSpaces}
        />
        <p style={{ display: formErrors.password ? 'block' : 'none' }}>
          {formErrors.password}
        </p>
        <ButtonText type="submit" buttonText="로그인" />
        <p style={{ display: displaySignInError ? 'block' : 'none' }}>
          아이디가 존재하지 않거나 올바른 비밀번호가 아닙니다
        </p>
        <p>
          아직 계정이 없으신가요?
          <span onClick={() => navigate('/signup')}>회원가입</span>
        </p>
      </form>
    </S.Container>
  )
}

export default SignInPage
