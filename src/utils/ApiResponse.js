class ApiResponse {
  constructor(statusCode, message = "Sucess", data) {
    this.statusCode = statusCode;
    this.sucess = statusCode < 400;
    this.message = message;
    this.data = data;
  }
}

export { ApiResponse };
