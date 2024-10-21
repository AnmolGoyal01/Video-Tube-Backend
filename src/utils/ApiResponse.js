class ApiResponse {
  constructor(statusCode, data, message = "Sucess") {
    this.statusCode = statusCode;
    this.sucess = statusCode < 400;
    this.message = message;
    this.data = data;
  }
}

export { ApiResponse };
