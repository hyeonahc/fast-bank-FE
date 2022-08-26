import { useEffect, useState } from 'react'

const SignUpPage = () => {
  const initialValue = {
    username: '',
    email: '',
    password: '',
    age: '',
    job: '',
  }
  const [formValues, setFormValues] = useState(initialValue)
  const [formErrors, setFormErrors] = useState({})
  const [isSubmit, setIsSubmit] = useState(false)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormValues({ ...formValues, [name]: value })
  }

  const handleSignUp = (e) => {
    e.preventDefault()
    setFormErrors(signUpValidate(formValues))
  }

  const signUpValidate = (values) => {
    const errors = {}
    if (!values.username) {
      errors.username = '이름을 입력해주세요!'
    }
    if (!values.email) {
      errors.email = '이메일을 입력해주세요!'
    }
    if (!values.password) {
      errors.password = '비밀번호를 입력해주세요!'
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
    Object.keys(formErrors).length === 0
      ? setIsSubmit(true)
      : setIsSubmit(false)
  }, [formErrors])

  return (
    <div className="container">
      <h1>회원가입</h1>
      <form>
        <input
          type="text"
          name="username"
          placeholder="이름"
          value={formValues.username}
          onChange={handleInputChange}
        />
        <p>{formErrors.username}</p>
        <input
          type="text"
          name="email"
          placeholder="이메일"
          value={formValues.email}
          onChange={handleInputChange}
        />
        <p>{formErrors.email}</p>
        <input
          type="text"
          name="password"
          placeholder="비밀번호"
          value={formValues.password}
          onChange={handleInputChange}
        />
        <p>{formErrors.password}</p>
        <select
          name="age"
          id="age"
          value={formValues.age}
          onChange={handleInputChange}
        >
          <option value="" disabled selected>
            나이
          </option>
          <option value="10대">10대</option>
          <option value="20대">20대</option>
          <option value="30대">30대</option>
          <option value="40대">40대</option>
          <option value="50대">50대</option>
          <option value="60대 이상">60대 이상</option>
        </select>
        <p>{formErrors.age}</p>
        <select
          name="job"
          id="job"
          value={formValues.job}
          onChange={handleInputChange}
        >
          <option value="" disabled selected>
            직업
          </option>
          <option value="청소년">청소년</option>
          <option value="대학생">대학생</option>
          <option value="직장인">직장인</option>
          <option value="고령자">고령자</option>
          <option value="무직">무직</option>
        </select>
        <p>{formErrors.job}</p>
        <button onClick={handleSignUp}>회원가입</button>
      </form>
    </div>
  )
}

export default SignUpPage
