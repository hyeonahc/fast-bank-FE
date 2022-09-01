import axios from 'axios'
import { useEffect, useState } from 'react'
import ButtonText from '@/components/common/Button/ButtonText'
import InputText from '@/components/common/Input/InputText'
import SelectWithOptions from '@/components/common/Select/SelectWithOptions'
import SuccessModal from '@/components/SuccessModal'
import * as S from './style'

const SignUpPage = () => {
  const initialValue = {
    name: '',
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
  const [displaySuccessModal, setDisplaySuccessModal] = useState(false)
  const [displaySignUpError, setDisplaySignUpError] = useState(false)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormValues({ ...formValues, [name]: value })
  }

  const removeInputSpaces = (e) => {
    const { name, value } = e.target
    setFormValues({ ...formValues, [name]: value.trim() })
  }

  const handleSignUp = (e) => {
    e.preventDefault()
    if (Object.values(formValues).indexOf('') > -1) {
      setFormErrors(signUpValidate(formValues))
    } else {
      requestSignUp()
    }
  }

  const requestSignUp = async () => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_SERVER_URL}/signup`,
        formValues,
      )
      setIsSubmit(true)
      setFormErrors(signUpValidate(formValues))
      setDisplaySignUpError(false)
      console.log('[SignUpPage/requestSignUp] response.data: ', response.data)
    } catch {
      setFormErrors(signUpValidate(formValues))
      setDisplaySignUpError(true)
    }
  }

  const signUpValidate = (values) => {
    const errors = {}
    const regex = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/
    if (!values.name) {
      errors.name = '이름을 입력해주세요!'
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
      setDisplaySuccessModal(true)
    }
  }, [formErrors, isSubmit])

  return (
    <S.Container>
      <h1>회원가입</h1>
      <form onSubmit={handleSignUp}>
        <InputText
          type="text"
          name="name"
          placeholder="이름"
          value={formValues.name}
          onChange={handleInputChange}
          onBlur={removeInputSpaces}
        />
        <p style={{ display: formErrors.name ? 'block' : 'none' }}>
          {formErrors.name}
        </p>
        <InputText
          type="text"
          name="email"
          placeholder="이메일"
          value={formValues.email}
          onChange={handleInputChange}
          onBlur={removeInputSpaces}
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
          onBlur={removeInputSpaces}
        />
        <p style={{ display: formErrors.password ? 'block' : 'none' }}>
          {formErrors.password}
        </p>
        <SelectWithOptions
          name="age"
          id="age"
          value={formValues.age}
          onChange={handleInputChange}
          options={ageOptions}
          defaultOption="나이"
        />
        <p style={{ display: formErrors.age ? 'block' : 'none' }}>
          {formErrors.age}
        </p>
        <SelectWithOptions
          name="job"
          id="job"
          value={formValues.job}
          onChange={handleInputChange}
          options={jobOptions}
          defaultOption="직업"
        />
        <p style={{ display: formErrors.job ? 'block' : 'none' }}>
          {formErrors.job}
        </p>
        <ButtonText type="submit" buttonText="회원가입" />
        <p style={{ display: displaySignUpError ? 'block' : 'none' }}>
          회원가입에 실패했습니다. 다시 시도해주세요.
        </p>
      </form>
      <SuccessModal
        title="회원가입을 성공했습니다"
        buttonText="로그인하기"
        displaySuccessModal={displaySuccessModal}
        setDisplaySuccessModal={setDisplaySuccessModal}
      />
    </S.Container>
  )
}

export default SignUpPage
