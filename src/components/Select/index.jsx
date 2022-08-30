import * as S from './style'

import React from 'react'

const Select = ({ defaultOption, options }) => {
  return (
    <S.Select>
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
