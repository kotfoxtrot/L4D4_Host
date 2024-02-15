# L4D4 Host

## Features of this project

- Retrieving a server image by ID

- Dynamically changing the image folder based on the season

- Stretching the image based on screen size

- To add a new image, it is necessary to include it in the `host.ejs` file, specifying the server ID and name.png

- By default, includes 4 seasons with an attached Photoshop `host.psd` file for editing or adding new images

- Docker file for deployment as a microservice behind a reverse proxy

- Availability of pre-existing images
```js
http://youdomain.com/host/:id
```
I recommend using subdomains host.youdomain.com

#
<img src='./PhotoshopFile/preview.gif' width='100%' >


# L4D4 Host

## Возможности данного проекта

- Получение изображения сервера по ID

- Динамически изменяет папку с изображением в зависимости от времени года

- Растягивание картинки в зависимости от размера экрана

- Для добавления нового изображения необходимо добавить его в `host.ejs` указав ID сервера и name.png

- По стандарту 4 сезона с приложенным `host.psd` файлом фотошопа для редактирования либо добавления новых изображений

- Файл Docker для поднятия как микросервис за обратным прокси

- Наличие уже готовых изображений
```js
http://твойдомен.com/host/:id
```
Рекомендую использовать поддомен host.твойдомен.com
