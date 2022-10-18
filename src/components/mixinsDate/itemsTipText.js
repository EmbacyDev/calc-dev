export default {
  data() {
    return {
      LayoutOption: [
        {
          title: 'Basic',
          text: 'This is how majority of industry standard website look like. eg:',
          links: [
            {
              href: 'https://www.slash.com/',
              linkName: 'slash.com'
            },
            {
              href: 'https://www.multigate.io/',
              linkName: 'multigate.io'
            }
          ]
        },
        {
          title: 'Custom',
          text: 'Choose this if you have something crazy in mind or find your task complex. eg:',
          links: [
            {
              href: 'https://quasar.moscow/',
              linkName: 'quasar.moscow'
            },
            {
              href: 'https://seen.io/',
              linkName: 'seen.io'
            }
          ]
        }
      ],
      NumberOfUnique: [
        {
          title: '',
          text: 'Pages that we need to build from scratch.',
          links: ''
        }
      ],
      NumberOfTemplate: [
        {
          title: '',
          text: 'Template pages share the design layout, only content varies.',
          links: ''
        }
      ],
      MotionDesign: [
        {
          title: 'Base interactions',
          text: 'Mouse hover, fade in and outs, interactions, transitions',
          links: ''
        },
        {
          title: 'Interactions + motion design',
          text: 'When you need us to make some custom animations for you. Like',
          links: [
            {
              href: 'https://quasar.moscow/',
              linkName: 'quasar.moscow'
            },
            {
              href: 'https://www.visionsdao.io/',
              linkName: 'visionsdao.io'
            },
            {
              href: 'https://seen.io/',
              linkName: 'seen.io'
            }
          ]
        },
        {
          title: 'Use my stuff',
          text: 'Choose this if you take care of animations on your end. This scenario also includes basic interactions.',
          links: ''
        }
      ],
      Integrations: [
        {
          title: '',
          text: 'Which apps or services we are connecting?',
          links: ''
        }
      ],
      WebsiteHosting: [
        {
          title: '',
          text: 'Do you need website deployment on hosting',
          links: ''
        }
      ],
      HostWebsite: [
        {
          title: '',
          text: 'Webflow is a go-to option, however, it is not an issue to deliver package if you go for an external solution',
          links: ''
        }
      ]
    };
  }
};
