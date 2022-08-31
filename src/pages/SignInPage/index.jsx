import { useEffect, useState } from 'react'
import ButtonText from '@/components/common/Button/ButtonText'
import InputText from '@/components/common/Input/InputText'

const SignInPage = () => {
  const initialValue = {
    id: '',
    password: '',
  }
  const [formValues, setFormValues] = useState(initialValue)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormValues({ ...formValues, [name]: value })
  }

  const handleSignIn = (e) => {
    e.preventDefault()
  }

  useEffect(() => {
    console.log(formValues)
  }, [formValues])

  return (
    <div className="container">
      <h1>로그인</h1>
      <form onSubmit={handleSignIn}>
        <InputText
          type="text"
          name="id"
          placeholder="아이디"
          value={formValues.id}
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
