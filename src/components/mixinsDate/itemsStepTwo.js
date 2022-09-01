export default {
  data() {
    return {
      quest1: [
        {
          id: 'radio-1',
          title: 'кастомный',
          value: 3000,
          checked: true
        },
        {
          id: 'radio-2',
          title: 'простой',
          value: 2000
        }
      ],
      quest2: {
        id: 'quest2-number',
        title: 'Кол-во шаблонных страниц',
        value: 1
      },
      quest3: {
        id: 'quest3-number',
        title: 'Кол-во уникальных страниц',
        value: 1
      },
      quest4: [
        {
          id: 'radio-3',
          title: 'Десктоп/мобайл',
          value: 2000,
          checked: true
        },
        {
          id: 'radio-4',
          title: 'Десктоп/мобайл+таблет',
          value: 2500
        },
        {
          id: 'radio-5',
          title: 'Other',
          value: 2500
        }
      ],
      quest5: [
        {
          id: 'radio-6',
          title: 'Базовые интерации',
          value: 0,
          checked: true
        },
        {
          id: 'radio-7',
          title: 'Ваша готовая анимация',
          value: 350
        },
        {
          id: 'radio-8',
          title: 'Интерации и дизайн анимаций',
          value: 2500
        }
      ],
      quest6: [
        {
          id: 'check-1',
          title: 'Blog',
          value: 451,
          checked: false
        },
        {
          id: 'check-2',
          title: 'Cases',
          value: 452,
          checked: false
        },
        {
          id: 'check-3',
          title: 'News',
          value: 453,
          checked: false
        },
        {
          id: 'check-4',
          title: 'Vacancy',
          value: 454,
          checked: false
        },
        {
          id: 'check-5',
          title: 'База знаний',
          value: 455,
          checked: false
        }
      ]
    };
  }
};
