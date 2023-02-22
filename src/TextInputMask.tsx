import * as React from 'react'
import { TextInput } from 'react-native-paper'

const splitCharacters = ['-', '/', '.', '年', ' ']
function detectCharacter(mask: string): string {
  const c = splitCharacters.find((ch) => mask.includes(ch))
  return c || ''
}

function enhanceTextWithMask(
  text: string,
  mask: string,
  previousValue: string
): string {
  const isBackSpace = previousValue.length > text.length
  const splitCharacter = detectCharacter(mask)

  const maskParts = mask.split(splitCharacter)
  const textParts = text.split(splitCharacter)

  let finalString: string[] = []
  for (let maskPartIndex = 0; maskPartIndex < mask.length; maskPartIndex++) {
    let partString: string[] = []

    const maskPart = maskParts[maskPartIndex]
    const textPart = textParts[maskPartIndex]
    if (!textPart) {
      continue
    }

    for (
      let maskDigitIndex = 0;
      maskDigitIndex < maskPart.length;
      maskDigitIndex++
    ) {
      const currentCharacter = textPart[maskDigitIndex]

      if (isBackSpace && currentCharacter === undefined) {
        continue
      }

      const character = textPart[maskDigitIndex]

      if (character !== undefined) {
        partString.push(character)
      }
    }

    finalString.push(partString.join(''))
  }

  const lastPart = finalString[finalString.length - 1]
  const lastMaskPart = maskParts[finalString.length - 1]
  if (
    // if mask is completed
    finalString.length !== maskParts.length &&
    // or ...
    lastPart &&
    lastMaskPart &&
    lastPart.length === lastMaskPart.length
  ) {
    return (
      finalString.join(splitCharacter) + (isBackSpace ? '' : splitCharacter)
    )
  }
  return finalString.join(splitCharacter)
}

const regexMask = RegExp(/\W+/g);
const regexText = RegExp(/\D+/g);

function TextInputWithMask(
  {
    onChangeText,
    onChange,
    value,
    mask,
    ...rest
  }: React.ComponentProps<typeof TextInput> & { mask: string; value: string },
  ref: any
) {
  const [controlledValue, setControlledValue] = React.useState<string>(
    value || ''
  )
  const countCharOfMask = React.useRef(mask.match(regexMask)?.length || 0);
  const keyPress = React.useRef<string>();

  const onKeyPress = (e: any) => {
    keyPress.current = e.nativeEvent.key;
  }

  const onInnerChange = (text: string) => {
    const countNotDigitText = text.match(regexText)?.length || 0;

    if ((text.length >= mask.length - (countCharOfMask.current - countNotDigitText)) && keyPress.current !== 'Backspace') {
      onChangeText && onChangeText(text)
    }
    setControlledValue(text)
  }

  const onInnerBlur = () => {
    const enhancedText = enhanceTextWithMask(value, mask, controlledValue)
    setControlledValue(enhancedText)
  }

  React.useEffect(() => {
    setControlledValue(value || '')
  }, [value])

  return (
    <TextInput
      ref={ref}
      {...rest}
      value={controlledValue}
      onChangeText={onInnerChange}
      onKeyPress={onKeyPress}
      onChange={(e) => {
        onChange && onChange(e)
      }}
      onBlur={onInnerBlur}
    />
  )
}

export default React.forwardRef(TextInputWithMask)
