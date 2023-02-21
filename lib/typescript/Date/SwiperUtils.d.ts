import type { MutableRefObject } from 'react';
export type RenderProps = {
    index: number;
    onNext: () => any;
    onPrev: () => any;
};
export type SwiperProps = {
    initialIndex: number;
    scrollMode: 'horizontal' | 'vertical';
    renderItem: (renderProps: RenderProps) => any;
    renderHeader?: (renderProps: RenderProps) => any;
    renderFooter?: (renderProps: RenderProps) => any;
    selectedYear: number | undefined;
    selectedMonth: number | undefined;
};
export declare function useYearChange(onChange: (index: number | undefined) => void, { selectedYear, selectedMonth, currentIndexRef, }: {
    currentIndexRef: MutableRefObject<number>;
    selectedMonth: number | undefined;
    selectedYear: number | undefined;
}): void;
