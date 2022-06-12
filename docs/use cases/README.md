# Модель прецедентів
** **




### Загальна схема
** **

<center style="
    border-radius:4px;
    border: 1px solid #cfd7e6;
    box-shadow: 0 1px 3px 0 rgba(89,105,129,.05), 0 1px 1px 0 rgba(0,0,0,.025);
    padding: 1em;"
>

@startuml

right header
    <font size=24 color=black>
end header

title
    <font size=18 color=black>Аналітичний портал
    <font size=16 color=black>Діаграма прецедентів
end title

actor "Менеджер" as Manager
actor "Тімлід" as Teamlead
actor "Розробник" as Developer


usecase "<b>UC_6-9</b>\nУпраління користувачами" as UC_1 #aaeeaa
usecase "<b>UC_3-5</b>\nУправління проектами" as UC_2 #aaeeaa

usecase "<b>UC_3</b>\nСтворити проект" as UC_3
usecase "<b>UC_4</b>\nМодифікувати існуючий проект" as UC_4
usecase "<b>UC_5</b>\nВидалити проект" as UC_5

usecase "<b>UC_6</b>\nДодати користувача" as UC_6 
usecase "<b>UC_7</b>\nВидалити користувача" as UC_7
usecase "<b>UC_8</b>\nНазначити роль користувача" as UC_8
usecase "<b>UC_9</b>\nЗмінити роль користувача" as UC_9


Manager -u-> UC_1
Manager -u-> Teamlead
Manager --> UC_2

UC_3 .u.> UC_2
UC_4 .u.> UC_2
UC_5 .u.> UC_2

UC_6 .u.> UC_1
UC_7 .u.> UC_1
UC_8 .u.> UC_1
UC_9 .u.> UC_1

usecase "<b>UC_18-19</b>\nУправління завданнями" as UC_10 #aaeeaa
usecase "<b>UC_18</b>\nВзяти завдання" as UC_11
usecase "<b>UC_14</b>\nЗмінити завдання" as UC_12

Developer -u-> UC_10
UC_11 .u.> UC_10


usecase "<b>UC_13-15</b>\nУправління артефактами" as UC_13 #aaeeaa
usecase "<b>UC_10-12,UC_16-17</b>\nУправління завданнями" as UC_14 #aaeeaa
usecase "<b>UC_19</b>\nЗміна статусу завдання" as UC_15
usecase "<b>UC_10</b>\nСтворення завдання" as UC_16
usecase "<b>UC_16</b>\nВиставлення дедлайну" as UC_17
usecase "<b>UC_12</b>\nВидалення завдання" as UC_18
usecase "<b>UC_13</b>\nДодавання артефакту" as UC_19
usecase "<b>UC_14</b>\nЗміна артефакту" as UC_20
usecase "<b>UC_15</b>\nВидалення артефакту" as UC_21
usecase "<b>UC_17</b>\nНазначити розробника на завдання" as UC_22

Teamlead -u-> Developer
Teamlead -u-> UC_13
Teamlead -u-> UC_14
UC_15 .u.> UC_10
UC_16 .u.> UC_14
UC_17 .u.> UC_14
UC_18 .u.> UC_14
UC_19 .u.> UC_13
UC_20 .u.> UC_13
UC_21 .u.> UC_13
UC_12 .u.> UC_14
UC_22 .u.> UC_14


right footer
    Аналітичний портал. Модель прецедентів.
    НТУУ КПІ ім.І.Сікорського
    Киів-2022
end footer
@enduml


</center>


### Teamlead
** **

<center style="
    border-radius:4px;
    border: 1px solid #cfd7e6;
    box-shadow: 0 1px 3px 0 rgba(89,105,129,.05), 0 1px 1px 0 rgba(0,0,0,.025);
    padding: 1em;"
>

@startuml

right header
    <font size=24 color=black>
end header

title
    <font size=18 color=black>Аналітичний портал
    <font size=16 color=black>Діаграма прецедентів
end title


actor "Тімлід" as Teamlead

usecase "Управління завданнями" as UC_1 #aaeeaa

usecase "Управління артефактами" as UC_8 #aaeeaa

usecase "Зміна статусу завдань" as UC_3

usecase "Додавання артефакту" as UC_4
usecase "Зміна артефакту" as UC_5
usecase "Видалення артефакту" as UC_7

usecase "Створення завдання" as UC_9
usecase "Зміна завдання" as UC_10
usecase "Видалення завдання" as UC_11

usecase "Виставлення дедлайнів" as UC_6

Teamlead --> UC_1
UC_3 .u.> UC_1
UC_6 .u.> UC_1
UC_9 .u.> UC_1
UC_10 .u.> UC_1
UC_11 .u.> UC_1

Teamlead --> UC_8
UC_4 .u.> UC_8
UC_5 .u.> UC_8
UC_7 .u.> UC_8




right footer
    Аналітичний портал. Модель прецедентів.
    НТУУ КПІ ім.І.Сікорського
    Киів-2022
end footer
@enduml



</center>



### Project Manager
** **

<center style="
    border-radius:4px;
    border: 1px solid #cfd7e6;
    box-shadow: 0 1px 3px 0 rgba(89,105,129,.05), 0 1px 1px 0 rgba(0,0,0,.025);
    padding: 1em;"
>

@startuml

right header
    <font size=24 color=black>
end header

title
    <font size=18 color=black>Аналітичний портал
    <font size=16 color=black>Діаграма прецедентів
end title


actor "Менеджер" as Manager

usecase "Управління проектами" as UC_1 #aaeeaa

usecase "Створити проект" as UC_2
usecase "Модифікувати існуючий проект" as UC_3
usecase "Видалити проект" as UC_4

usecase "Управління коричтувачами" as UC_5 #aaeeaa

usecase "Додати користувача" as UC_6 
usecase "Видалити користувача" as UC_7
usecase "Назначити роль користувача" as UC_8
usecase "Змінити роль користувача" as UC_9

Manager --> UC_1
UC_2 .u.> UC_1
UC_3 .u.> UC_1
UC_4 .u.> UC_1

Manager --> UC_5
UC_6 .u.> UC_5
UC_7 .u.> UC_5
UC_8 .u.> UC_5
UC_9 .u.> UC_5

right footer
    Аналітичний портал. Модель прецедентів.
    НТУУ КПІ ім.І.Сікорського
    Киів-2022
end footer
@enduml


</center>
        
### Developer
** **        
<center style="
    border-radius:4px;
    border: 1px solid #cfd7e6;
    box-shadow: 0 1px 3px 0 rgba(89,105,129,.05), 0 1px 1px 0 rgba(0,0,0,.025);
    padding: 1em;"
>

@startuml

right header
    <font size=24 color=black>
end header

title
    <font size=18 color=black>Аналітичний портал
    <font size=16 color=black>Діаграма прецедентів
end title


actor "Розробник" as dev

usecase "Управління завданнями" as UC_1 #aaeeaa

usecase "Взяти завдання" as UC_2
usecase "Змінити статус завдання" as UC_3

dev --> UC_1
UC_2 .u.> UC_1
UC_3 .u.> UC_1


right footer
    Аналітичний портал. Модель прецедентів.
    НТУУ КПІ ім.І.Сікорського
    Киів-2022
end footer
@enduml
        
</center>
        
    
## Сценарії

***ID:*** UC-5

***НАЗВА:*** Видалення учасника.

***УЧАСНИКИ:*** Менеджер проекту, система.

***ПЕРЕДУМОВИ:*** Учасник є в проекті.

***РЕЗУЛЬТАТ:*** Учасника видалено з проекту.

***ВИКЛЮЧНІ СИТУАЦІЇ:*** 

CancelException - Натиснута кнопка "Скасувати".

***ОСНОВНИЙ СЦЕНАРІЙ:***

@startuml

    |Менеджер|
        start
        :Натискає на кнопку "Видалити учасника";
    |Система|
        :відкриває форму 
        підтвердження видалення учасника;
        note right #ffaaaa
        CancelException
        Натиснута кнопка "Скасувати"
        end note
    |Менеджер|
        :Натискає на кнопку "Підтвердити";
    |Система|
        :<b>Видаляє учасника</b> з проекту;
        :Сповіщує менеджера про видалення учасника;
    |Менеджер|
        stop;

@enduml

---

***ID:*** UC-6

***НАЗВА:*** Взяття завдання

***УЧАСНИКИ:*** Розробник, система.

***ПЕРЕДУМОВИ:*** Наявність завдання.

***РЕЗУЛЬТАТ:*** Завдання закріплено за розробником.

***ВИКЛЮЧНІ СИТУАЦІЇ:*** Немає

***ОСНОВНИЙ СЦЕНАРІЙ:***

@startuml

    |Розробник|
        start
        :Вибирає завдання, натискаючи на нього;
        :Вибирає себе виконувачем завдання;
    |Система|
        :<b>Добавляє розробника</b>
        <b>в ролі виконувача завдання</b>;
        :Сповіщує розробника про взяття завдання;
    |Розробник|
        stop;

@enduml

---

***ID:*** UC-7

***НАЗВА:*** Закріплення завдання

***УЧАСНИКИ:*** Тімлід, система.

***ПЕРЕДУМОВИ:*** Наявність завдання і розробника в проекті.

***РЕЗУЛЬТАТ:*** Завдання закріплено за розробником.

***ВИКЛЮЧНІ СИТУАЦІЇ:*** Немає

***ОСНОВНИЙ СЦЕНАРІЙ:***

@startuml

    |Тімлід|
        start
        :Вибирає завдання, натискаючи на нього;
        :Вибирає розробника виконувачем завдання;
    |Система|
        :<b>Закріплює завдання за розробником</b>;
        :Сповіщує тімліда про закріплення завдання;
    |Тімлід|
        stop;

@enduml

---

***ID:*** UC-8

***НАЗВА:*** Створити артефакт.

***УЧАСНИКИ:*** Учасник проекту, система.

***ПЕРЕДУМОВИ:*** Немає.

***РЕЗУЛЬТАТ:*** Створений артефакт.

***ВИКЛЮЧНІ СИТУАЦІЇ:***

ArtifactSizeException - Розмір файлу перевищує ліміт.

***ОСНОВНИЙ СЦЕНАРІЙ:***

@startuml

    |Учасник|
        start
        :Натискає на кнопку "Створити артефакт";
    |Система|
        :відкриває форму для створення артефакту;
    |Учасник|
        :Заповнює форму (назва артефакту, 
        опис), прикріплює файл;
        :Підтверджує відправку форми;
    |Система|
        :Перевіряє розмір прикріпленого файлу;
        note right #ffaaaa
        ArtifactSizeException
        розмір файлу перебільшує * МБ
        end note
        :<b>Створює артефакт</b>;
        :Сповіщує користувача про створення артефакту;
    |Учасник|
        stop;

@enduml
