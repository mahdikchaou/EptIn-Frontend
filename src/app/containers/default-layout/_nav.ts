import { INavData } from '@coreui/angular';
export const navItems: INavData[] = [
  {
    name: 'Branches',
    url: '/branches',
    icon:'cilSitemap',
  },
  {
    title: true,
    name: 'SysCo'
  },
  {
    name: 'Aerospace Engineering',
    url: '/aerospatial',
    icon:'cilAirplaneMode'
  },
  {
    name: 'Automobile Engineering',
    url: '/automobile',
    linkProps: { fragment: 'someAnchor' },
    icon: 'cilCarAlt'
  },
  {
    name: 'Civil Engineering',
    url: '/civil',
    linkProps: { fragment: 'someAnchor' },
    icon: 'cilBuilding'
  },
  {
    name: 'Energy engineering',
    url: '/energetique',
    linkProps: { fragment: 'someAnchor' },
    icon: 'cilFire'
  },
  {
    name: 'Mechanical Engineering',
    url: '/mecanique',
    linkProps: { fragment: 'someAnchor' },
    icon: 'cilCog'
  },
  {
    name: 'Industrial Engineering',
    url: '/industriel',
    linkProps: { fragment: 'someAnchor' },
    icon: 'cilIndustry'
  },
  {
    name: 'Nuclear Engineering',
    url: '/nucleaire',
    linkProps: { fragment: 'someAnchor' },
    icon: 'cilGraph'
  },
  {
    name: 'Hydraulic Engineering',
    url: '/petroliere',
    linkProps: { fragment: 'someAnchor' },
    icon: 'cibShell'
  },
  {
    name: 'SYSI',
    title: true
  },
  {
    name: 'Computer Engineering',
    url: 'informatique',
    icon: 'cilCode',
  },
  {
    name: 'Electrical Engineering',
    url: '/electrique',
    icon: 'cilBolt',
  },
  {
    name: 'Telecommunication Engineering',
    url: '/telecom',
    icon: 'cilRss' ,
  },
  {
    title: true,
    name: 'EGES'
  },
  {
    name: "Engineering Management",
    url: '/gestion',
    icon: 'cilChartLine',
  },
];
