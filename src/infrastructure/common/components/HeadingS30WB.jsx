import { StyleSheet } from 'react-native'
import Text from './Text'

const styles = StyleSheet.create({
  text: {
    fontWeight: 'bold',
    fontSize: 30,
    lineHeight: 32
  }
})

export default function HeadingS30WB({
  style,
  children,
  role = 'heading',
  ...rest
}) {
  return (
    <Text role={role} style={[styles.text, style]} {...rest}>
      {children}
    </Text>
  )
}
