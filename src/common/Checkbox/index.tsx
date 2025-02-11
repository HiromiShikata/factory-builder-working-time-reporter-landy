import { Checkbox } from "antd";
import { CheckboxGroup } from "./styles";

interface CheckboxProps {
  name: string;
  options: string[];
  values: string[];
  onChange: (checkedValues: string[]) => void;
}

const CheckboxGroupComponent = ({ name, options, values, onChange }: CheckboxProps) => {
  return (
    <CheckboxGroup>
      <Checkbox.Group
        name={name}
        options={options}
        value={values}
        onChange={(checkedValues) => onChange(checkedValues as string[])}
      />
    </CheckboxGroup>
  );
};

export default CheckboxGroupComponent;
