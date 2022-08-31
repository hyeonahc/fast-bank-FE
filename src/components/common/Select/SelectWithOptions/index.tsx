import { ComponentPropsWithoutRef, forwardRef } from 'react';

import Select, { SelectRefType } from '../index';

type Props = {
  defaultOption: string;
  options: string[];
} & ComponentPropsWithoutRef<typeof Select>;

const SelectWithOptions = forwardRef<SelectRefType, Props>(
  ({ defaultOption, options, ...props }, ref) => {
    return (
      <Select {...props} ref={ref}>
        <option value="" disabled>
          {defaultOption}
        </option>
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
