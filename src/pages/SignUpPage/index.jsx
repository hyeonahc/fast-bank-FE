import { useState } from 'react'

const SignUpPage = () => {
  const initialValue = {
    username: '',
    email: '',
    password: '',
    age: '',
    job: '',
  }
  const [formValues, setFormValues] = useState(initialValue)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormValues({ ...formValues, [name]: value })
  }

  const handleSignUp = (e) => {
    e.preventDefault()
  }

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
        <input
          type="text"
          name="email"
          placeholder="이메일"
          value={formValues.email}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="password"
          placeholder="비밀번호"
          value={formValues.password}
          onChange={handleInputChange}
        />
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
        <button onClick={handleSignUp}>회원가입</button>
      </form>
    </div>
  )
}

export default SignUpPage
