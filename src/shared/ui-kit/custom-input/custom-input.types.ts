import { KeyboardTypeOptions, TextInputProps } from "react-native";

export interface CustomInputProps extends TextInputProps  {
  value: string;
  name: string;
  onChangeValue: (value: string) => void;
  errorMessage?: string | null;
  styleContainer?: object;
  styleInput?: object;
  placeholder?: string;
  keyboardType?: KeyboardTypeOptions | undefined;
}
