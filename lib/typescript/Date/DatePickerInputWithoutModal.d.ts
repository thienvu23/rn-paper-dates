import * as React from 'react';
declare const _default: React.ForwardRefExoticComponent<Pick<{
    inputMode: "end" | "start";
    locale: string;
    onChange: (date: Date | undefined) => void;
    value: Date | undefined;
    validRange?: import("./Calendar").ValidRangeType | undefined;
    withModal?: boolean | undefined;
    withDateFormatInLabel?: boolean | undefined;
    hideValidationErrors?: boolean | undefined;
    hasError?: boolean | undefined;
    onValidationError?: ((error: string | null) => void) | undefined;
    calendarIcon?: string | undefined;
    saveLabel?: string | undefined;
    saveLabelDisabled?: boolean | undefined;
    uppercase?: boolean | undefined;
    startYear?: number | undefined;
    endYear?: number | undefined;
    onChangeText?: ((text: string | undefined) => void) | undefined;
} & Omit<Pick<import("react-native").TextInputProps & React.RefAttributes<import("react-native").TextInput> & {
    mode?: "flat" | "outlined" | undefined;
    left?: React.ReactNode;
    right?: React.ReactNode;
    disabled?: boolean | undefined;
    label?: import("react-native-paper/lib/typescript/components/TextInput/types").TextInputLabelProp | undefined;
    placeholder?: string | undefined;
    error?: boolean | undefined;
    onChangeText?: Function | undefined;
    selectionColor?: string | undefined;
    underlineColor?: string | undefined;
    activeUnderlineColor?: string | undefined;
    outlineColor?: string | undefined;
    activeOutlineColor?: string | undefined;
    textColor?: string | undefined;
    dense?: boolean | undefined;
    multiline?: boolean | undefined;
    numberOfLines?: number | undefined;
    onFocus?: ((args: any) => void) | undefined;
    onBlur?: ((args: any) => void) | undefined;
    render?: ((props: import("react-native-paper/lib/typescript/components/TextInput/types").RenderProps) => React.ReactNode) | undefined;
    value?: string | undefined;
    style?: import("react-native").StyleProp<import("react-native").TextStyle>;
    theme: import("react-native-paper/lib/typescript/types").InternalTheme;
    testID?: string | undefined;
    outlineStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
    underlineStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
} & React.RefAttributes<{
    focus: () => void;
    clear: () => void;
    blur: () => void;
    isFocused: () => boolean;
    setNativeProps: (nativeProps: object) => void;
}>, "label" | "style" | "children" | "pointerEvents" | "allowFontScaling" | "numberOfLines" | "onLayout" | "onPressIn" | "onPressOut" | "testID" | "nativeID" | "maxFontSizeMultiplier" | "disabled" | "selectionColor" | "textBreakStrategy" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLabelledBy" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityLanguage" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "left" | "right" | "ref" | "key" | "hitSlop" | "removeClippedSubviews" | "collapsable" | "needsOffscreenAlphaCompositing" | "renderToHardwareTextureAndroid" | "focusable" | "shouldRasterizeIOS" | "isTVSelectable" | "hasTVPreferredFocus" | "tvParallaxProperties" | "tvParallaxShiftDistanceX" | "tvParallaxShiftDistanceY" | "tvParallaxTiltAngle" | "tvParallaxMagnification" | "onStartShouldSetResponder" | "onMoveShouldSetResponder" | "onResponderEnd" | "onResponderGrant" | "onResponderReject" | "onResponderMove" | "onResponderRelease" | "onResponderStart" | "onResponderTerminationRequest" | "onResponderTerminate" | "onStartShouldSetResponderCapture" | "onMoveShouldSetResponderCapture" | "onTouchStart" | "onTouchMove" | "onTouchEnd" | "onTouchCancel" | "onTouchEndCapture" | "onPointerEnter" | "onPointerEnterCapture" | "onPointerLeave" | "onPointerLeaveCapture" | "onPointerMove" | "onPointerMoveCapture" | "onPointerCancel" | "onPointerCancelCapture" | "onPointerDown" | "onPointerDownCapture" | "onPointerUp" | "onPointerUpCapture" | "value" | "mode" | "error" | "placeholder" | "onFocus" | "onBlur" | "onChange" | "onKeyPress" | "onScroll" | "defaultValue" | "spellCheck" | "autoCapitalize" | "autoCorrect" | "autoFocus" | "autoComplete" | "maxLength" | "textAlign" | "textAlignVertical" | "multiline" | "onContentSizeChange" | "scrollEnabled" | "textColor" | "dense" | "render" | "blurOnSubmit" | "caretHidden" | "contextMenuHidden" | "editable" | "keyboardType" | "onChangeText" | "onEndEditing" | "onSelectionChange" | "onSubmitEditing" | "onTextInput" | "placeholderTextColor" | "returnKeyType" | "secureTextEntry" | "selectTextOnFocus" | "selection" | "inputAccessoryViewID" | "clearButtonMode" | "clearTextOnFocus" | "dataDetectorTypes" | "enablesReturnKeyAutomatically" | "keyboardAppearance" | "passwordRules" | "rejectResponderTermination" | "selectionState" | "textContentType" | "cursorColor" | "importantForAutofill" | "disableFullscreenUI" | "inlineImageLeft" | "inlineImagePadding" | "returnKeyLabel" | "underlineColorAndroid" | "showSoftInputOnFocus" | "underlineColor" | "activeUnderlineColor" | "outlineColor" | "activeOutlineColor" | "outlineStyle" | "underlineStyle"> & {
    theme?: import("@callstack/react-theme-provider").$DeepPartial<unknown> | undefined;
}, "value" | "onChange" | "onChangeText"> & {
    modal?: ((params: {
        value: Date | undefined;
        locale: string;
        inputMode: "end" | "start";
        validRange: import("./Calendar").ValidRangeType | undefined;
        saveLabel: string | undefined;
        saveLabelDisabled: boolean | undefined;
        uppercase: boolean | undefined;
        startYear: number | undefined;
        endYear: number | undefined;
    }) => any) | undefined;
    inputButtons?: any;
}, "label" | "style" | "children" | "pointerEvents" | "allowFontScaling" | "numberOfLines" | "onLayout" | "onPressIn" | "onPressOut" | "testID" | "nativeID" | "maxFontSizeMultiplier" | "disabled" | "selectionColor" | "textBreakStrategy" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLabelledBy" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityLanguage" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "left" | "right" | "key" | "hitSlop" | "removeClippedSubviews" | "collapsable" | "needsOffscreenAlphaCompositing" | "renderToHardwareTextureAndroid" | "focusable" | "shouldRasterizeIOS" | "isTVSelectable" | "hasTVPreferredFocus" | "tvParallaxProperties" | "tvParallaxShiftDistanceX" | "tvParallaxShiftDistanceY" | "tvParallaxTiltAngle" | "tvParallaxMagnification" | "onStartShouldSetResponder" | "onMoveShouldSetResponder" | "onResponderEnd" | "onResponderGrant" | "onResponderReject" | "onResponderMove" | "onResponderRelease" | "onResponderStart" | "onResponderTerminationRequest" | "onResponderTerminate" | "onStartShouldSetResponderCapture" | "onMoveShouldSetResponderCapture" | "onTouchStart" | "onTouchMove" | "onTouchEnd" | "onTouchCancel" | "onTouchEndCapture" | "onPointerEnter" | "onPointerEnterCapture" | "onPointerLeave" | "onPointerLeaveCapture" | "onPointerMove" | "onPointerMoveCapture" | "onPointerCancel" | "onPointerCancelCapture" | "onPointerDown" | "onPointerDownCapture" | "onPointerUp" | "onPointerUpCapture" | "value" | "mode" | "error" | "placeholder" | "onFocus" | "onBlur" | "onChange" | "onKeyPress" | "onScroll" | "defaultValue" | "spellCheck" | "autoCapitalize" | "autoCorrect" | "autoFocus" | "autoComplete" | "maxLength" | "textAlign" | "textAlignVertical" | "multiline" | "onContentSizeChange" | "scrollEnabled" | "textColor" | "dense" | "render" | "blurOnSubmit" | "caretHidden" | "contextMenuHidden" | "editable" | "keyboardType" | "onChangeText" | "onEndEditing" | "onSelectionChange" | "onSubmitEditing" | "onTextInput" | "placeholderTextColor" | "returnKeyType" | "secureTextEntry" | "selectTextOnFocus" | "selection" | "inputAccessoryViewID" | "clearButtonMode" | "clearTextOnFocus" | "dataDetectorTypes" | "enablesReturnKeyAutomatically" | "keyboardAppearance" | "passwordRules" | "rejectResponderTermination" | "selectionState" | "textContentType" | "cursorColor" | "importantForAutofill" | "disableFullscreenUI" | "inlineImageLeft" | "inlineImagePadding" | "returnKeyLabel" | "underlineColorAndroid" | "showSoftInputOnFocus" | "underlineColor" | "activeUnderlineColor" | "outlineColor" | "activeOutlineColor" | "outlineStyle" | "underlineStyle" | "theme" | "locale" | "uppercase" | "validRange" | "startYear" | "endYear" | "calendarIcon" | "inputMode" | "onValidationError" | "saveLabel" | "saveLabelDisabled" | "withDateFormatInLabel" | "hasError" | "hideValidationErrors" | "modal" | "inputButtons" | "withModal"> & React.RefAttributes<unknown>>;
export default _default;
