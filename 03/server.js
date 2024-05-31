const http = require("http");

const routeHandler = require("./router");

//Создание HTTP сервера
const server = http.createServer(routeHandler);

//Запуск сервера на порту 5500
const PORT = 5500;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
