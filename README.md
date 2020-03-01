# [Mesto]

## Yandex Praktikum (Alexey Sidorov, project 11) 

    Учебный проект созданный в процессе обучения в [Яндекс-Практикум],проектная работа 11 спринта курса "Инфраструктура веб-приложений". Является продолжением проектной работы 9 спринта курса "JavaScript — теория и практика". В рамках данной проектной работы сайт созданный при выполнении проетной работы 9 был собран с использованием [Webpack] и выложен на GitHub

## Использованные технологии
    - HTML
    - CSS
    - JS
    - Git
    - Webpack

## Запуск проекта
      Клонируйте репозиторий:
    $ git clone https://github.com/X-217/YandexPraktikum-11
      Запустите проект:
    $ npm run dev  
    
## История версий:    
    
### v0.0.3 - текущая версия:  [Mesto]

     исправлены замечания:
        - добавлена инструкция по развертыванию проекта
        - в package.json версия проекта изменена на корректную
        - в .gitignore отсутствует правило для исключения временных файлов ( /.idea)
        - исправлено название файла .nojekyll.js -> .nojekyll
        - из папки src удалены лишние файлы (случайно попавшие *.rar)
        - изменен  IP адрес запросов к серверу http://praktikum.tk — для локальной разработки, 
        https://praktikum.tk — для продакшн
        
### v0.0.2

     CSS-код минимизирован, проставлены вендорные префиксы.
     JS разбит на модули и переведён бабелем из ES6 в ES5.
     
### v0.0.1

    загружены исходные файлы проекта, настроен Webpack
    
    
[Mesto]: <https://x-217.github.io/YandexPraktikum-11/>
[Яндекс-Практикум]: <https://praktikum.yandex.ru/>
[Webpack]: <https://webpack.js.org/> 