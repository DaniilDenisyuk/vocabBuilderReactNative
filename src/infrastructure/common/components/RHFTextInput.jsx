import { useController } from 'react-hook-form'
import FormTextInput from './FormTextInput'

export default function RHFTextInput({
  control,
  name,
  validMessage,
  disabled,
  ...rest
}) {
  const {
    field: { onChange, onBlur, value },
    fieldState: { isDirty, error }
  } = useController({ control, name, disabled })
  return (
    <FormTextInput
      onBlur={onBlur}
      onChangeText={onChange}
      value={value}
      isValid={isDirty && !error}
      isInvalid={!!error}
      validMessage={validMessage}
      invalidMessage={error}
      {...rest}
    />
  )
}
