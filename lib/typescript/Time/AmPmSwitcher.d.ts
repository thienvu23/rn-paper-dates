import { PossibleInputTypes } from './timeUtils';
export default function AmPmSwitcher({ onChange, hours, inputType, }: {
    hours: number;
    onChange: (newHours: number) => any;
    inputType: PossibleInputTypes;
}): JSX.Element;
