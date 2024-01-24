//@ts-nocheck
import { CalendarDesktop } from '@alfalab/core-components-calendar/desktop'
import { useCallback, useEffect, useMemo, useState } from 'react'

const Calendar = () => {
  const [value, setValue] = useState()

  const firstRadioValue = 'multiple'

  useEffect(() => {
    setValue()
  }, [firstRadioValue])

  const getDateString = useCallback((date) => {
    const day = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate()
    const month =
      date.getMonth() + 1 < 10
        ? `0${date.getMonth() + 1}`
        : date.getMonth() + 1
    const year = date.getFullYear()

    return `${day}.${month}.${year}`
  }, [])

  const selectedDate = useMemo(() => {
    const date = new Date(value)
    return getDateString(date)
  }, [value])

  const calendarStyles = {
    border: '1px solid rgba(233, 233, 235, 1)',
    borderRadius: '8px',
    boxShadow: `0px 20px 24px rgba(0, 0, 0, 0.08),
                    0px 12px 16px rgba(0, 0, 0, 0.04),
                    0px 4px 8px rgba(0, 0, 0, 0.04),
                    0px 0px 1px rgba(0, 0, 0, 0.04)`,
  }

  return (
    <div style={{ width: 344 }}>
      <div style={calendarStyles}>
        <CalendarDesktop
          value={value}
          responsive={true}
          onChange={setValue}
          selectorView={firstRadioValue === 'single' ? 'month-only' : 'full'}
          showCurrentYearSelector={true}
        />
      </div>
      <p style={{ marginTop: 32, marginBottom: 32 }}>
        Выбранная дата: {value && selectedDate}
      </p>
    </div>
  )
}

export default Calendar
