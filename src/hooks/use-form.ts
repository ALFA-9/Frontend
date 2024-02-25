import { useState, ChangeEvent, FormEvent } from 'react'

export interface IValues {
  [name: string]: string
}

export const useForm = (inputValues: IValues = {}) => {
  const [values, setValues] = useState(inputValues)

  const handleChange = (
    event:
      | ChangeEvent<HTMLInputElement | HTMLSelectElement>
      | FormEvent<HTMLParagraphElement>,
  ) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const { id, name, value, type, checked, textContent, role }: any =
      event.target

    if (type === 'radio') {
      setValues({ ...values, [name]: value })
    } else {
      setValues({
        ...values,
        [id || name]:
          type === 'checkbox'
            ? checked
            : role === 'textaria'
              ? textContent
              : value,
      })
    }
  }

  return { values, setValues, handleChange }
}
