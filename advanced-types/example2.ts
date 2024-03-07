// Type guard ответа

// Дано:
interface IPayment {
  sum: number,
  from: number,
  to: number
}

interface IPaymentRequest extends IPayment {
}

interface IDataSuccess extends IPayment {
  databaseId: number
}

interface IDataFailed {
  errorMessage: string,
  errorCode: number
}

enum PaymentStatus {
  Success = 'success',
  Failed = 'failed'
}

interface IResponseSuccess {
  status: PaymentStatus.Success,
  data: IDataSuccess
}

interface IResponseFailed {
  status: PaymentStatus.Failed,
  data: IDataFailed
}

// Необходимо сделать type guard на проверку isResponseSuccess. Если да, то вернуть databaseId

function isResponseSuccess(response: IResponseSuccess | IResponseFailed): response is IResponseSuccess {
  return (response as IResponseSuccess).status === PaymentStatus.Success
}

function getDatabaseId(response: IResponseSuccess | IResponseFailed): number {
  if (isResponseSuccess(response)) {
    return response.data.databaseId
  } else {
    throw new Error('Response status is failed')
  }
}

export {}

