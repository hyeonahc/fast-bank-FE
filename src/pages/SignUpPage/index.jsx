import axios from 'axios'
import { useCallback, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import ButtonStyled from '@/components/common/Button/ButtonText'
import InputText from '@/components/common/Input/InputText'
import SelectWithOptions from '@/components/common/Select/SelectWithOptions'
import SuccessModal from '@/components/SuccessModal'
import * as S from './style'

import { pagesFullPath } from '@/pages/pagesPath'

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
      setFormErrors(validateSignUp(formValues))
    } else {
      validateDuplicateEmail()
    }
  }

  const validateDuplicateEmail = async () => {
    const response = await axios.post(
      `${process.env.REACT_APP_SERVER_URL}/signup/check`,
      { email: formValues.email },
    )
    const emailIsAvailable = response.data.isAvailable
    if (!emailIsAvailable) {
      setFormErrors(validateSignUp(formValues, emailIsAvailable))
    } else {
      setFormErrors(validateSignUp(formValues))
      requestSignUp()
    }
  }

  const requestSignUp = async () => {
    if (formValues.password.length < 4) return
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_SERVER_URL}/signup`,
        formValues,
      )
      setFormErrors(validateSignUp(formValues))
      setDisplaySignUpError(false)
      setDisplaySuccessModal(true)
    } catch {
      setFormErrors(validateSignUp(formValues))
      setDisplaySignUpError(true)
    }
  }

  const validateSignUp = (values, emailIsAvailable = true) => {
    const errors = {}
    const regex = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/
    if (!values.name) {
      errors.name = '이름을 입력해주세요!'
    }
    if (!values.email) {
      errors.email = '이메일을 입력해주세요!'
    } else if (!regex.test(values.email)) {
      errors.email = '올바른 이메일 형식이 아닙니다!'
    } else if (!emailIsAvailable) {
      errors.email = '이미 등록된 이메일주소입니다!'
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

  const navigate = useNavigate()
  const onClickLogin = useCallback(() => {
    navigate(pagesFullPath.signin)
  }, [navigate])

  return (
    <>
      <S.Container>
        <h1>회원가입</h1>
        <form onSubmit={handleSignUp}>
          <div className="input-wrapper">
            <p className="label">Name</p>
            <InputText
              type="text"
              name="name"
              placeholder="이름을 입력해주세요"
              value={formValues.name}
              onChange={handleInputChange}
              onBlur={removeInputSpaces}
            />
            <p
              style={{ visibility: formErrors.name ? 'visible' : 'hidden' }}
              className="error-message"
            >
              {formErrors.name}
            </p>
          </div>
          <div className="input-wrapper">
            <p className="label">Email</p>
            <InputText
              type="text"
              name="email"
              placeholder="이메일을 입력해주세요"
              value={formValues.email}
              onChange={handleInputChange}
              onBlur={removeInputSpaces}
            />
            <p
              style={{ visibility: formErrors.email ? 'visible' : 'hidden' }}
              className="error-message"
            >
              {formErrors.email}
            </p>
          </div>
          <div className="input-wrapper">
            <p className="label">Password</p>
            <InputText
              type="password"
              name="password"
              placeholder="비밀번호 4자리 이상을 입력해주세요"
              value={formValues.password}
              onChange={handleInputChange}
              onBlur={removeInputSpaces}
            />
            <p
              style={{ visibility: formErrors.password ? 'visible' : 'hidden' }}
              className="error-message"
            >
              {formErrors.password}
            </p>
          </div>
          <div className="input-wrapper">
            <p className="label">Age</p>
            <SelectWithOptions
              name="age"
              id="age"
              value={formValues.age}
              onChange={handleInputChange}
              options={ageOptions}
              selectedDefault={formValues.age === ''}
              defaultOption="나이를 선택해주세요"
            />
            <p
              style={{ visibility: formErrors.age ? 'visible' : 'hidden' }}
              className="error-message"
            >
              {formErrors.age}
            </p>
          </div>
          <div className="input-wrapper">
            <p className="label">Job</p>
            <SelectWithOptions
              name="job"
              id="job"
              value={formValues.job}
              onChange={handleInputChange}
              options={jobOptions}
              selectedDefault={formValues.job === ''}
              defaultOption="직업을 선택해주세요"
            />
            <p
              style={{ visibility: formErrors.job ? 'visible' : 'hidden' }}
              className="error-message"
            >
              {formErrors.job}
            </p>
          </div>
          <ButtonStyled
            type="submit"
            buttonText="회원가입"
            style={{ width: '100%' }}
          />
          <p
            style={{ visibility: displaySignUpError ? 'visible' : 'hidden' }}
            className="error-message"
          >
            회원가입에 실패했습니다. 다시 시도해주세요.
          </p>
        </form>
      </S.Container>
      <SuccessModal
        title="회원가입을 성공했습니다 🙂"
        buttonText="로그인하기"
        displaySuccessModal={displaySuccessModal}
        setDisplaySuccessModal={setDisplaySuccessModal}
        onClickConfirm={onClickLogin}
      />
    </>
  )
}

export default SignUpPage
