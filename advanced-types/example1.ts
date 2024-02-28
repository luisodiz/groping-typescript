/*
* // Запрос в виде платежа
{
	"sum": 10000,
	"from": 2,
	"to": 4
}
// Ответ
{
	"status": "success",
	"data": {
		"databaseId": 567,
		"sum": 10000,
		"from": 2,
		"to": 4
	}
},
{
	"status": "failed",
	"data": {
		"errorMessage": "Недостаточно средств",
		"errorCode": 4
	}
}
*
* */

// Необходимо типизировать запрос и ответ
interface IPayment {
  sum: number,
  from: number,
  to: number
}

interface IPaymentRequest extends IPayment {
}

enum PaymentStatus {
  Success = 'success',
  Failed = 'failed'
}

interface IPaymentSuccessData extends IPayment {
  databaseId: number
}

interface IPaymentFailedData {
  errorMessage: string,
  errorCode: number
}

interface IPaymentResponseSuccess {
  status: PaymentStatus.Success,
  data: IPaymentSuccessData
}

interface IPaymentResponseFailed {
  status: PaymentStatus.Failed,
  data: IPaymentFailedData
}

// Использование
// function get(): IPaymentResponseSuccess | IPaymentResponseFailed {
//   return {
//     status: PaymentStatus.Failed,
//     data: {}
//   }
// }

export {}