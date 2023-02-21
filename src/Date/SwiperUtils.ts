import type { MutableRefObject } from 'react'
import { useLatest } from '../utils'
import * as React from 'react'
import {
  addMonths,
  differenceInMonths,
  getRealIndex,
  startAtIndex,
} from './dateUtils'

export type RenderProps = {
  index: number
  onNext: () => any
  onPrev: () => any
}

export type SwiperProps = {
  initialIndex: number
  scrollMode: 'horizontal' | 'vertical'
  renderItem: (renderProps: RenderProps) => any
  renderHeader?: (renderProps: RenderProps) => any
  renderFooter?: (renderProps: RenderProps) => any
  selectedYear: number | undefined
  selectedMonth: number | undefined
}

export function useYearChange(
  onChange: (index: number | undefined) => void,
  {
    selectedYear,
    selectedMonth,
    currentIndexRef,
  }: {
    currentIndexRef: MutableRefObject<number>
    selectedMonth: number | undefined,
    selectedYear: number | undefined
  }
) {
  const onChangeRef = useLatest(onChange)
  React.useEffect(() => {
    if (selectedYear) {
      const currentIndex = currentIndexRef.current || 0
      let currentDate = addMonths(new Date(), getRealIndex(currentIndex))

      currentDate.setFullYear(selectedYear)
      if(selectedMonth) currentDate.setMonth(selectedMonth);
      
      const today = new Date()
      const months = differenceInMonths(today, currentDate)
      
      const newIndex = startAtIndex + months
      
      if (currentIndex !== newIndex) {
        onChangeRef.current(newIndex)
      }
    }
  }, [currentIndexRef, onChangeRef, selectedYear, selectedMonth])
}

