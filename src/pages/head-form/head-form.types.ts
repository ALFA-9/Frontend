export type TTaskDTO = {
  uuid: string
  title: string
  type: string
  method: string
  description: string
  period: string
  startDate: string
  endDate: string
}

export type TIDPDTO = {
  idpTitle: string
  tasks: TTaskDTO[]
}
