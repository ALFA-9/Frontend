import { FC, useEffect, useRef, useState } from 'react'
import styles from './input-type-select.module.scss'

interface IInputTypeSelect
  extends React.SelectHTMLAttributes<HTMLSelectElement> {
  extraClass?: string,
  outerClass?: string,
  label?: string
}

const InputTypeSelect: FC<IInputTypeSelect> = ({
  extraClass = '',
  outerClass = '',
  label = '',
  onChange = () => {},
  ...SelectHTMLAttributes
}) => {
  const [inputValue, setInputValue] = useState('')
  const [optionItems, setOptionItems] = useState<
    Array<{
      value: string
      key: string
      disabled: boolean
    }>
  >([])

  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  const selectRef = useRef<HTMLSelectElement>(null)

  useEffect(() => {
    const childElementCount = selectRef.current?.childElementCount || 0
    const childItems = []
    for (let i = 0; i < childElementCount; i += 1) {
      const { value, disabled } = selectRef.current?.[i] as HTMLOptionElement
      childItems.push({ value, key: value + i, disabled })
    }

    setOptionItems(childItems)
    setInputValue(String(SelectHTMLAttributes.value || childItems[0].value))
  }, [])

  useEffect(() => {
    onChange({
      target: {
        name: SelectHTMLAttributes.name,
        value: inputValue,
        type: 'select',
      },
    } as React.ChangeEvent<HTMLSelectElement>)
  }, [inputValue])

  const handleOnChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target
    setInputValue(value)
  }

  const handleSelectItem = (value: string, disabled: boolean) => {
    if (!disabled) {
      setInputValue(value)
      setIsDropdownOpen(false)
    }
  }

  const handleOverlayClick = () => {
    setIsDropdownOpen(false)
  }

  const handleSelectKeyDown = (e: React.KeyboardEvent<HTMLSelectElement>) => {
    const { code } = e

    if (code === 'Enter' || code === 'Space') {
      e.preventDefault()
      setIsDropdownOpen(!isDropdownOpen)
    }

    if (code === 'Escape') {
      e.preventDefault()
      setIsDropdownOpen(false)
    }

    if (code === 'Tab') {
      setIsDropdownOpen(false)
    }
  }

  return (
    <>
      {isDropdownOpen && (
        <div onClick={handleOverlayClick} className={styles.overlay} />
      )}
      <label htmlFor={SelectHTMLAttributes.id} className={`${styles.label} ${outerClass}`}>
        <p className={styles.label_text}>{label}</p>
        <select
          {...SelectHTMLAttributes}
          value={inputValue}
          onChange={handleOnChange}
          onKeyDown={handleSelectKeyDown}
          ref={selectRef}
          className={`${styles.select} ${extraClass}`}
        />
        <div className={styles.wraper}>
          <div
            className={`${styles.input} ${
              isDropdownOpen ? styles.input_open : ''
            }`}
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
            <p className={styles.text}>{inputValue}</p>
          </div>
          {isDropdownOpen && (
            <div className={styles.dropDown}>
              <div
                className={styles.optionWraper}
                style={{
                  maxHeight: `${
                    SelectHTMLAttributes.size
                      ? `${48 * SelectHTMLAttributes.size}px`
                      : `calc(48px * 5 )`
                  }`,
                }}>
                {optionItems.map(({ value, key, disabled }) => {
                  return (
                    <div
                      key={key}
                      onClick={() => handleSelectItem(value, disabled)}
                      className={`${
                        disabled
                          ? styles.dropDownItem_disabled
                          : styles.dropDownItem
                      } ${
                        value === inputValue ? styles.dropDownItem_select : ''
                      }`}>
                      <p className={styles.dropDownItem_text}>{value}</p>
                    </div>
                  )
                })}
              </div>
            </div>
          )}
        </div>
      </label>
    </>
  )
}

export default InputTypeSelect
