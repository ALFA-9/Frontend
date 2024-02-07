# Проект "ALFA-9"
SPA от фронтенда 9 команды ХАКАТОН+ по задаче от Альфа-Банка

Общее описание задачи: Нужно создать сервис, в рамках которого для сотрудников можно будет составить ИПР (индивидуальные планы развития), просматривать его и валидировать выполнение целей. 

[**Ссылка на сайт**](https://new.red-hand.ru/)

[**Макет Figma**](https://www.figma.com/file/AXLBBWgE91P41rGwLaIldz/Задача-Альфа-Банка?type=design&node-id=0%3A1&mode=design&t=5mc0w5G01q9YN5Z8-1)

[**Ссылка на скриншоты и билд (Яндекс Диск)**](https://disk.yandex.ru/d/hBjJ932l9TIJAA)


## Authors

- [Кирилл Красноруцкий](https://github.com/Red-Handed-Guy) [<span><img src="https://cdn-icons-png.flaticon.com/128/906/906377.png" height="25" align="center" alt="Telegram" title="Telegram" style="right" /></span>](https://t.me/Red_Handed_Guy) - Ответственный за координацию разработки и работу API. Сборка Webpak. Роутинг. Боковая навигация. Разработка страниц по путям: / , /employee/idp, /employee/competencies , /head/staff, /head/staff/:id
- [Елизавета Ананьева-Рященко](https://github.com/lizananeva) [<span><img src="https://cdn-icons-png.flaticon.com/128/906/906377.png" height="25" align="center" alt="Telegram" title="Telegram" style="right" /></span>](https://t.me/lizananeva) - Сформировала организацию и единый стиль именования фалов и папок внутри проекта. Header, Footer. Разработка страниц по путям: /employee/idp/form , /employee/idp/:id/tasks , /head/staff/:id/form, /head/staff/:id/:id/tasks
- [Александр Огородников](https://github.com/Zorkiy82) [<span><img src="https://cdn-icons-png.flaticon.com/128/906/906377.png" height="25" align="center" alt="Telegram" title="Telegram" style="right" /></span>](https://t.me/ogorodnikov_ao) - Разработка 60 % компонентов UI kit, в том числе самые трудоёмкие. Разработка страниц по путям: /head/stats , /head/staff/:id/form


## Installation
Для работы приложения необходимы версиии **Node v20.10.0**, **npm v10.2.3**

1) Скачать архив с ветки `main`, разархивировать

2) Перейти в разархивированную папку в терминале, установить зависимости командой 
```bash
  npm ci
```
3) Собрать билд командой 
```bash
  npm run build
```
4) Запустить билд командой
```bash
  npm run server
```


## Tech Stack

**Client:** 

![Static Badge](https://img.shields.io/badge/React-black?style=for-the-badge&logo=React)
![Static Badge](https://img.shields.io/badge/TypeScript-%232F74C0?style=for-the-badge&logo=TypeScript&logoColor=%23fff)
![Static Badge](https://img.shields.io/badge/Redux%2Ftoolkit-%237248B6?style=for-the-badge&logo=Redux&logoColor=%23fff)
![Static Badge](https://img.shields.io/badge/SCSS-%23C76395?style=for-the-badge&logo=SASS&logoColor=%23fff)
![Static Badge](https://img.shields.io/badge/HTML-gray?style=for-the-badge&logo=HTML5)
![Static Badge](https://img.shields.io/badge/Axios-%235728DD?style=for-the-badge&logo=Axios&logoColor=%23fff)


**Tools:**

![Static Badge](https://img.shields.io/badge/Git-black?style=for-the-badge&logo=Git&logoColor=%23fff&color=%23E84E31)
![Static Badge](https://img.shields.io/badge/Webpack-%2391CDF1?style=for-the-badge&logo=Webpack&logoColor=%23fff)


## Materials

1) **Libraries** 

- [TypeScript 5.3.3](https://www.npmjs.com/package/typescript)
- [React 18.2.0](https://react.dev/)
- [React-Router-Dom 6.21.2](https://www.npmjs.com/package/react-router-dom)
- [Redux/toolkit 2.0.1](https://redux-toolkit.js.org/)
- [Axios 1.6.5](https://www.npmjs.com/package/axios)
- [SASS 1.69.7](https://www.npmjs.com/package/sass)
- [Primereact 10.3.3](https://primereact.org/)
- [Uuid 9.0.1](https://www.npmjs.com/package/uuid)
- [Alfalab](https://core-ds.github.io/core-components/master/)

2) **Fonts**
- [Roboto](https://fonts.google.com/specimen/Roboto)

3) **SVG**
Все SVG взяты из макета [Figma](https://www.figma.com/file/AXLBBWgE91P41rGwLaIldz/Задача-Альфа-Банка?type=design&node-id=0%3A1&mode=design&t=5mc0w5G01q9YN5Z8-1)


## SCSS

Все основные SCSS константы лежат по пути src/styles/const.scss.
- и являются цветовой палитрой приложения. Все цвета взяты из макета Figma UI kit.

Все основные миксины лежат по пути src/styles/mixins.scss.
- начинающиеся с text - различные шрифты на основе Figma UI kit
- начинающиеся с reset - обнуление стандартных стилей

