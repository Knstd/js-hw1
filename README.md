Домашнее задание к занятию «Основы синтаксиса, типы данных, условный оператор»
Цель задания:

В результате выполнения этого задания вы сможете сделать первые шаги в разработке на JavaScript: установите и настроите среду разработки VSCode, на практике используете базовые средства DevTools браузера, напишете простейшую игру с использованием базового синтаксиса JavaScript и средств ввода-вывода, предоставляемых браузером.

    Освоить базовые навыки работы в средствах разработки на JavaScript: инструменты разработчика браузера и среде разработки VSCode
    Освоить использование базового синтаксиса JavaScript и основных типов данных, а также запуск кода в среде браузера.

Чеклист готовности к домашнему заданию:

    Для выполнения задания и дальнейшего прохождения курса требуется компьютер с операционной системой Windows, MacOS или Linux с установленной последней версией браузера Chrome или FireFox.
    Для установки среды разработки VSCode могут потребоваться соответствующие права доступа в системе.

Инструкция к заданию:

    Изучите базовые возможности, предоставляемые инструментами разработчика браузера (открываются через меню браузера «Дополнительные инструменты\Инструменты разработчика»). Вкладки «Элементы» (просмотр актуального содержимого страницы и стилей), «Консоль» (отображение отладочного вывода и интерактивное выполнение кода), «Источники» (исходный текст скриптов и возможности отладки кода). Для наглядности можно открыть инструменты разработчика на вкладке с открытой страницей какого-либо известного вам сайта.
    Установите среду разработки VSCode, скачав дистрибутив с домашней страницы https://code.visualstudio.com. Воспользуйтесь инструкциями по установке для вашей операционной системы.
    Создайте в VSCode базовую страницу index.html, содержащую простой текст:

<p>Loading, please wait...</p>

Откройте ее в браузере как файл, посмотрите содержимое вкладки «Элементы» в инструментах разработчика.

    Добавьте на страницу index.html код простейшего скрипта:

   <script>
     document.write('Hello, world!');
     console.log('Hello, developers!');
   </script>

Перезагрузите вкладку в браузере. Посмотрите, как теперь выглядит страница на вкладке «Элементы» и вывод сообщения на вкладке «Консоль».

    Выполните Задание 1 ниже.

Инструменты/ дополнительные материалы, которые пригодятся для выполнения задания:

    Браузер Chrome или FireFox одной из последних версий.
    Среда разработки VSCode.

Задание 1

Замените код скрипта из шага 4 выше на собственную реализацию простейшей игры «Угадай число», в соответствии со следующим алгоритмом:

    загадать число, используя функцию Math.random(), сохранить его в переменную.

    Примечание: для получения случайного целого числа в диапазоне от 0 до 999, можно использовать следующую конструкцию: let n = Math.floor(Math.random() * 1000);

    для целей отладки вывести число в консоль, используя функцию console.log();

    предложить пользователю ввести число, используя функцию prompt() и проверку, что введено числовое значение, используя функцию isNaN();

    если введено не число, выдать соответсвующее сообщение с помощью функции alert();

    сравнить введенное число с загаданным;

    вывести пользователю результат угадывания в зависимости от сравнения с расшифровкой в случае не совпадения: «Больше» или «Меньше». Для вывода использовать функцию alert().

    Примечание: т.к. циклы мы будем изучать на следуюущем занятии, то достаточно реализовать одну итерацию игры. При желании вы можете посмотреть в онлайн-учебнике https://learn.javascript.ru/while-for описание простейшего цикла while, аналогичного уже известному вам в Python, и реализовать игру со множеством попыток.

Правила приема работы:

    Задание можно сдавать, прикрепляя в личном кабинете файл index.html с кодом игры.
    На дальнейших занятиях вам потребуется сдавать задание в виде ссылки на репозиторий в github, поэтому вы можете задание данного урока также сдавать в виде ссылки на репозиторий с кодом.

Критерии оценки:

    К заданию прикреплен файл index.html либо ссылка на репозиторий в github, содержащий файл index.html.
    В файле index.html должен содержаться код, который при запуске выполняет описанный в задании алгоритм игры.