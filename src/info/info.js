
import React, { Component } from 'react';



class Info extends Component {
  render() {
    return (
      <div class="text">
        <p>Целью ВКР является создание информационной технологии распознавания машиностроительных узлов и деталей. Для этого необходимо применить распознавание изображений. Технология распознавания изображений – информационная технология, созданная для получения, понимания, обработки и анализа фотографий из реального мира, с дальнейшим преобразованием их в цифровой вид. В эту область вовлечены машинное обучение, расширение базы знаний, интеллектуальный анализ данных, распознавание образов.</p>
        <p>Выбор темы обусловлен тем, что технологии распознавания образов – весьма актуальная тема для разработки различного ПО. Распознавание изображений используется в военном деле, в медицине, в промышленности, в сфере развлечений и в других областях. На бакалавриате я учился по программе «Интеграция и программирование в САПР», потому что мне всегда было интересно машиностроение. Поэтому я решил связать эти две области: машиностроительную промышленность и информационные технологии распознавания образов в своей выпускной квалификационной работе.
        Распознавание образов — это отнесение исходных данных к определённому классу с помощью выделения существенных признаков, характеризующих эти данные, из общей массы данных. Существует 3 группы методов распознавания образов:</p>
        <ol>
        <li>Сравнение с образцом. Объекты классифицируются по ближайшему среднему или по расстоянию до ближайшего соседа в пространстве признаков.</li>
        <li>Статистические методы. Объекты классифицируются на основе статистики вероятности принадлежности объекта к определённому классу при определённых значениях его признаков. Данная группа хороша тем, что можно в любой момент добавлять в базу данных новые образцы, потому что вычисляются расстояния до всех объектов в БД и находится минимальное.</li>
        <li>Нейронные сети. Отдельный класс методов распознавания, при котором создаётся ПО, способное к «обучению» (искусственная нейронная сеть). Благодаря обучаемости ИНС их практически не нужно программировать в отличие от предыдущих групп методов.</li>
        </ol>
        Сейчас чаще всего используются ИНС, поскольку их проще создавать, чем системы из первых двух групп благодаря специальным библиотекам в программировании.
        Разработка искусственных нейронных сетей началась в начале ХХ века, но получила распространение только в 1990-х годах с развитием вычислительной техники. Особую популярность они приобрели после 2010 года. В скором времени, по оценкам и прогнозам профессионалов, ИНС будут уверенно применяться в робототехнике, в машиностроении и в других совершенно разных сферах человеческой деятельности.
        Распознавание образов широко используется в сфере информационных технологий. Вот наиболее частые примеры решения рассматриваемой задачи:<br />
        <ul>
        <li>распознавание символов;</li>
        <li>распознавание лиц;</li>
        <li>установление диагнозов в медицине;</li>
        <li>классификация документов;</li>
        <li>распознавание речи;</li>
        <li>прогноз погоды;</li>
        <li>распознавание изображений.</li>
        </ul>
        В рамках темы данной ВКР необходимо использовать последний пункт, так как машиностроительные узлы и детали представляются в виде 2D и 3D изображений.
        Нейронные сети делятся на две группы по способу обучения: обучение с учителем и без. Сейчас используются 4 основных вида нейронных сетей:<br />
        1.	Свёрточные сети. Используются для распознавания образов.<br />
        2.	Рекуррентные сети. Используются для распознавания текста и речи.<br />
        3.	Сети Кохонена. Используются для классификации, оптимизации и анализа данных.<br />
        4.	Сети Хопфилда. Используются для фильтрации и оптимизации.<br />
        <br />
        Этих видов существует множество. Для распознавания изображений, как правило, используются свёрточные сети, потому что они дают меньший процент ошибок при решении этой задачи. Архитектура ИНС часто разрабатывается на языке Python с помощью специальных библиотек, таких как Tersorflow и Keras, либо на других языках программирования.
        Сейчас в сети Интернет есть много примеров как ИНС распознавания изображений, так и наборов данных (датасетов) и различными изображениями, но совершенно нет датасетов с машиностроительными деталями или узлами, хотя это направление использования технологии распознавания весьма перспективно. Мною было принято решение создать датасет машиностроительных узлов и деталей, а также веб-сервис для работы с ним. Датасет будет содержать изображения деталей и узлов, а также метаданные, в которых будут хранится теги, по которым элементы можно будет находить и классифицировать.
        Результат разработки будет использоваться для распознавания узлов и деталей на машиностроительных чертежах.
        Функционал веб-сервиса выбран следующий:<br />
        1.	Поиск объектов в базе данных.<br />
        2.	Распознавание соответствующих объектов на изображениях.<br />
        3.	Классификация объектов в БД.<br />
        4.	Кластеризация объектов в БД.<br />
        <br />
        Выбор функционала обусловлен тем, что так пользователю полученного сайта будет удобнее работать с датасетом. Конечными пользователями результата выполнения ВКР являются разработчики программного обеспечения и люди, которым требуется распознать определённые детали на машиностроительном чертеже. Важность для них данного продукта объясняется популярностью технологий распознавания в машиностроении и отсутствием аналогов в свободном доступе на сегодняшний день. Например, эту технологию можно применить на производственных предприятиях, где используются информационные технологии.
        В итоге, цель работы состоит в выполнении следующих задач:<br />
        1.	Сбор изображений чертежей.<br />
        2.	Создание структуры набора данных.<br />
        3.	Создание файлов с метаданными. Данные будут храниться в формате CSV.<br />
        4.	Разработка сайта.<br />
        1)	добавление поиска в БД;<br />
        2)	добавление классификации;<br />
        3)	добавление кластеризации;<br />
        4)	добавление распознавания деталей.<br />

      </div>
    )
  }
}

export default Info