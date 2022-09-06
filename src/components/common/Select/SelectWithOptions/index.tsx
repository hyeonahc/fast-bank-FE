import { ComponentPropsWithoutRef, forwardRef } from 'react';

import Select, { SelectRefType } from '../';
import styled from 'styled-components';

const OptionDefaultStyled = styled.option(({ theme }) => ({
  color: theme.colors.inputPlaceholder,
}));

type Props = {
  selectedDefault: boolean;
  defaultOption: string;
  options: string[];
} & ComponentPropsWithoutRef<typeof Select>;

const SelectWithOptions = forwardRef<SelectRefType, Props>(
  ({ defaultOption, defaultValue, options, ...props }, ref) => {
    return (
      <Select {...props} ref={ref}>
        <OptionDefaultStyled value="" disabled>
          {defaultOption}
        </OptionDefaultStyled>
        {options.map((option) => (
          <option value={option} key={option}>
            {option}
          </option>
        ))}
      </Select>
    );
  },
);

export default SelectWithOptions;
