class ApiResponse {
  constructor(statusCode, message = "Sucess", data) {
    this.message = message;
    this.statusCode = statusCode;
    this.sucess = statusCode < 400;
    this.data = data;
  }
}
