import Button from '@/components/Button'
import Input from '@/components/Input'
import Select from '@/components/Select'
import SuccessModal from '@/components/SuccessModal'
import { useEffect, useState } from 'react'
import * as S from './style'

const SignUpPage = () => {
  const initialValue = {
    username: '',
    email: '',
    password: '',
    age: '',
    job: '',
  }
  const ageOptions = ['10대', '20대', '30대', '40대', '50대', '60대 이상']
  const jobOptions = ['청소년', '대학생', '직장인', '고령자', '무직']
  const [formValues, setFormValues] = useState(initialValue)
  const [formErrors, setFormErrors] = useState({})
  const [isSubmit, setIsSubmit] = useState(false)
  const [displayModal, setDisplayModal] = useState(false)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormValues({ ...formValues, [name]: value })
  }

  const handleSignUp = (e) => {
    e.preventDefault()
    setFormErrors(signUpValidate(formValues))
    setIsSubmit(true)
  }

  const signUpValidate = (values) => {
    const errors = {}
    const regex = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/
    if (!values.username) {
      errors.username = '이름을 입력해주세요!'
    }
    if (!values.email) {
      errors.email = '이메일을 입력해주세요!'
    } else if (!regex.test(values.email)) {
      errors.email = '올바른 이메일 형식이 아닙니다!'
    }
    if (!values.password) {
      errors.password = '비밀번호를 입력해주세요!'
    } else if (values.password.length < 4) {
      errors.password = '비밀번호는 4자리 이상으로 설정해주세요'
    }
    if (!values.age) {
      errors.age = '나이를 선택해주세요!'
    }
    if (!values.job) {
      errors.job = '직업을 선택해주세요!'
    }
    return errors
  }

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      setDisplayModal(true)
    }
  }, [formErrors, isSubmit])

  return (
    <S.Container className="container">
      <h1>회원가입</h1>
      <form onSubmit={handleSignUp}>
        <Input
          type="text"
          name="username"
          placeholder="이름"
          value={formValues.username}
          onChange={handleInputChange}
        />
        <p>{formErrors.username}</p>
        <Input
          type="text"
          name="email"
          placeholder="이메일"
          value={formValues.email}
          onChange={handleInputChange}
        />
        <p>{formErrors.email}</p>
        <Input
          type="text"
          name="password"
          placeholder="비밀번호"
          value={formValues.password}
          onChange={handleInputChange}
        />
        <p>{formErrors.password}</p>
        <Select
          name="age"
          id="age"
          value={formValues.age}
          onChange={handleInputChange}
          options={ageOptions}
          defaultOption="나이"
        />
        <p>{formErrors.age}</p>
        <Select
          name="job"
          id="job"
          value={formValues.job}
          onChange={handleInputChange}
          options={jobOptions}
          defaultOption="직업"
        />
        <p>{formErrors.job}</p>
        <Button type="submit" buttonText="회원가입" />
      </form>
      <SuccessModal
        title="회원가입을 성공했습니다"
        buttonText="로그인하기"
        displayModal={displayModal}
        setDisplayModal={setDisplayModal}
      />
    </S.Container>
  )
}

export default SignUpPage
