import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    name: 'Branches',
    url: '/branches',
    iconComponent: { name: 'cilSitemap' },
    /*badge: {
      color: '',
      text: 'NEW'
    }*/
  },
  {
    title: true,
    name: 'SysCo'
  },
  {
    name: 'Génie aérospatial',
    url: '/aerospatial',
    iconComponent: {name:'cilAirplaneMode' }
  },
  {
    name: 'Ingénierie automobile',
    url: '/automobile',
    linkProps: { fragment: 'someAnchor' },
    iconComponent: { name: 'cilCarAlt' }
  },
  {
    name: 'Génie civil',
    url: '/civil',
    linkProps: { fragment: 'someAnchor' },
    iconComponent: { name: 'cilBuilding' }
  },
  {
    name: 'Génie énergétique',
    url: '/energetique',
    linkProps: { fragment: 'someAnchor' },
    iconComponent: { name: 'cilFire' }
  },
  {
    name: 'Ingénierie mécanique',
    url: '/mecanique',
    linkProps: { fragment: 'someAnchor' },
    iconComponent: { name: 'cilCog' }
  },
  {
    name: 'Ingénieur industriel',
    url: '/industriel',
    linkProps: { fragment: 'someAnchor' },
    iconComponent: { name: 'cilIndustry' }
  },
  {
    name: 'Ingénierie nucléaire',
    url: '/nucleaire',
    linkProps: { fragment: 'someAnchor' },
    iconComponent: { name: 'cilGraph' }
  },
  {
    name: 'Ingénierie pétrolière',
    url: '/petroliere',
    linkProps: { fragment: 'someAnchor' },
    iconComponent: { name: 'cibShell' }
  },
  {
    name: 'SYSI',
    title: true
  },
  {
    name: 'Ingénierie informatique',
    url: 'informatique',
    iconComponent: { name: 'cilCode' },
  },
  {
    name: 'Ingénierie électrique',
    url: '/electrique',
    iconComponent: { name: 'cilBolt' },
  },
  {
    name: 'Ingénierie telecommunication',
    url: '/telecom',
    iconComponent: { name: 'cilRss' },
  },
  {
    title: true,
    name: 'EGES'
  },
  {
    name: "Gestion de l'ingénierie",
    url: '/gestion',
    iconComponent: { name: 'cilChartLine' },
  },
];
