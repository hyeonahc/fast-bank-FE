import axios from 'axios'
import { useState, useEffect } from 'react'
import { saveName } from '@/modules/user'
import { useDispatch, useSelector } from 'react-redux'
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

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormValues({ ...formValues, [name]: value })
  }

  const RemoveInputSpaces = (e) => {
    const { name, value } = e.target
    setFormValues({ ...formValues, [name]: value.trim() })
  }

  const dispatch = useDispatch()

  const handleSignIn = async (e) => {
    e.preventDefault()
    setFormErrors(signInValidate(formValues))
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

  const signInValidate = (values) => {
    const errors = {}
    const regex = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/
    if (!values.email) {
      errors.email = '이메일을 입력해주세요!'
    } else if (!regex.test(values.email)) {
      errors.email = '올바른 이메일 형식이 아닙니다!'
    }
    if (!values.password) {
      errors.password = '비밀번호를 입력해주세요!'
    }
    return errors
  }

  return (
    <S.Container>
      <h1>로그인</h1>
      <form onSubmit={handleSignIn}>
        <InputText
          type="text"
          name="email"
          placeholder="이메일"
          value={formValues.email}
          onChange={handleInputChange}
          onBlur={RemoveInputSpaces}
        />
        <p style={{ display: formErrors.email ? 'block' : 'none' }}>
          {formErrors.email}
        </p>
        <InputText
          type="text"
          name="password"
          placeholder="비밀번호"
          value={formValues.password}
          onChange={handleInputChange}
          onBlur={RemoveInputSpaces}
        />
        <p style={{ display: formErrors.password ? 'block' : 'none' }}>
          {formErrors.password}
        </p>
        <ButtonText type="submit" buttonText="로그인" />
      </form>
    </S.Container>
  )
}

export default SignInPage
