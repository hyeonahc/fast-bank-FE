import * as S from './style'

const Select = ({ defaultOption, options, ...props }) => {
  return (
    <S.Select {...props}>
      <option value="" disabled>
        {defaultOption}
      </option>
      {options.map((option) => (
        <option value={option} key={option}>
          {option}
        </option>
      ))}
    </S.Select>
  )
}

export default Select
