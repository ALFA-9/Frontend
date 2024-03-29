import { v4 as uuidv4 } from 'uuid'
import { TTaskDTO } from './head-form.types'

export const getObjectFromEvent = (
  e:
    | React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
    | React.FormEvent<HTMLParagraphElement | HTMLFieldSetElement>,
  payload?: unknown,
) => {
  if (!payload) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const { id, name, value, type, checked, textContent, role }: any = e.target

    if (type === 'radio') {
      return { [name]: value }
    } else {
      return {
        [id || name]:
          type === 'checkbox'
            ? checked
            : role === 'textaria'
              ? textContent
              : value,
      }
    }
  }

  if (payload) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const { name, value }: any = payload
    return {
      [name]: value,
    }
  }
}

export const getNewDefaultTaskDTO = (): TTaskDTO => {
  return {
    uuid: uuidv4(),
    title: '',
    type: 'Самостоятельное обучение',
    method: 'Собеседование',
    description: '',
    period: 'other',
    startDate: '',
    endDate: '',
  }
}
