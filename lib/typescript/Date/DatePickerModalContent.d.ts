import * as React from 'react';
import { BaseCalendarProps, CalendarDate, CalendarDates, MultiChange, MultiConfirm, RangeChange, SingleChange } from './Calendar';
import { HeaderContentProps, HeaderPickProps } from './DatePickerModalContentHeader';
export type LocalState = {
    startDate: CalendarDate;
    endDate: CalendarDate;
    date: CalendarDate;
    dates: CalendarDates;
};
interface DatePickerModalContentBaseProps {
    inputFormat?: string;
    locale: string;
    onDismiss: () => any;
    disableSafeTop?: boolean;
    saveLabelDisabled?: boolean;
    uppercase?: boolean;
}
export interface DatePickerModalContentRangeProps extends HeaderPickProps, BaseCalendarProps, DatePickerModalContentBaseProps {
    mode: 'range';
    startDate: CalendarDate;
    endDate: CalendarDate;
    onChange?: RangeChange;
    onConfirm: RangeChange;
    headerContentProps?: Partial<HeaderContentProps>;
}
export interface DatePickerModalContentSingleProps extends HeaderPickProps, BaseCalendarProps, DatePickerModalContentBaseProps {
    mode: 'single';
    date?: CalendarDate;
    onChange?: SingleChange;
    onConfirm: SingleChange;
    dateMode?: 'start' | 'end';
}
export interface DatePickerModalContentMultiProps extends HeaderPickProps, BaseCalendarProps, DatePickerModalContentBaseProps {
    mode: 'multiple';
    dates?: CalendarDates;
    onChange?: MultiChange;
    onConfirm: MultiConfirm;
}
export declare function DatePickerModalContent(props: DatePickerModalContentRangeProps | DatePickerModalContentSingleProps | DatePickerModalContentMultiProps): JSX.Element;
declare const _default: React.MemoExoticComponent<typeof DatePickerModalContent>;
export default _default;
