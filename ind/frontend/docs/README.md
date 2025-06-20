## Індивідуальне завдання
Це — React застосунок який дає підбірку 10-ти варіантів у вигляді назви, ціни та посилання на товар. Також застосунок має сортування за ціною (від меншої до більшої).

Використовується `SerpAPI` для отримання товарів.

Застосунок має `frontend` (клієнтську частину React) та `backend` (Node.js)

### React
Користувач вводить назву товару, клієнт формує запит на сервер, в результаті якого отримує масив з 10-ти об'єктів відсортованих за ціною. Дизайн зроблений у темному фоні з використанням синьо-жовтої кольорової палітри. Також дизайн передбачає повідомлення для інформації та посилання на github-репозиторій.

### Node.js
Приймає пошуковий запит з клієнта та надсилає йому масив товарів з 10 одиниць який відсортований за зростанням.
- Використовує `Express` для створення серверу
- Дозволяє фронтенду звертатись з іншого домену через `cors`
- Виконує HTTP-запит за допомогою `node-fetch`

### Як користуватись?
#### **API** 
По-перше, треба зареєструватись на сервісі `SerpApi` та отримати свій API ключ.
По-друге: створити файл `.env` у `backend/` і вставити туди:
```.env
SERPAPI_KEY=##API ключ##
```

>Примітка: замість `##API ключ##` потрібно вказати Ваш API ключ доступу який надається SerpAPI після реєстрації.

#### **Збірка та запуск сервера**
Знаходячись у директорії `backend/`
виконати:
```shell
npm install
```
для встановлення всіх залежностей з `package.json`.

Далі виконати:
```shell
node index.js
```
для запуску сервера ( це запустить сервер на локальному порту 4000)
Все, сервер працює, тепер необхідно відкрити новий shell та виконати *збірку та запуск клієнта*

#### **Збірка та запуск клієнта**
Знаходячись у `frontend/`
виконати: (аналогічно до збірки сервера)
```shell
npm install
```
 
 Далі для запуску виконати:
 ```shell
 npm start
 ```
 це запустить клієнта на локальному хості 3000

#### **Використання** 
- Необхідно у поле ввести назву товару який необхідно знайти.
- Далі — почекати поки сформується результат
- Якщо не спостерігається ніяких помилок, знизу, під полем вводу буде підбірка з 10-ти блоків, які, якщо натиснути на них, перенаправлять на магазин з товаром де вказані подробиці. Кожен блок підбірки має назву магазину та ціну. Ціни відсортовані у порядку зростання починаючи з крайнього лівого блоку.

### **Посилання**
Відео роботи застосунку: [https://youtu.be/Yguh723qp-s](https://youtu.be/Yguh723qp-s)
