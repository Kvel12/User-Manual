import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '0de'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', 'ea2'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', '73e'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', '458'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '5a3'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '8ed'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '446'),
    exact: true
  },
  {
    path: '/donation',
    component: ComponentCreator('/donation', '595'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', '1d4'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', '7c8'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', '7dd'),
            routes: [
              {
                path: '/docs/Guia de Usuario/Accesibilidad/',
                component: ComponentCreator('/docs/Guia de Usuario/Accesibilidad/', '80e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Guia de Usuario/Asistencia de Código y Herramientas de Productividad/CodeNavigation',
                component: ComponentCreator('/docs/Guia de Usuario/Asistencia de Código y Herramientas de Productividad/CodeNavigation', '0a4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Guia de Usuario/Asistencia de Código y Herramientas de Productividad/Emmet',
                component: ComponentCreator('/docs/Guia de Usuario/Asistencia de Código y Herramientas de Productividad/Emmet', '225'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Guia de Usuario/Asistencia de Código y Herramientas de Productividad/Intellisense',
                component: ComponentCreator('/docs/Guia de Usuario/Asistencia de Código y Herramientas de Productividad/Intellisense', '714'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Guia de Usuario/Asistencia de Código y Herramientas de Productividad/Refactorización',
                component: ComponentCreator('/docs/Guia de Usuario/Asistencia de Código y Herramientas de Productividad/Refactorización', '6ce'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Guia de Usuario/Asistencia de Código y Herramientas de Productividad/Snippets',
                component: ComponentCreator('/docs/Guia de Usuario/Asistencia de Código y Herramientas de Productividad/Snippets', '41e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Guia de Usuario/Conceptos básicos/Edición básica',
                component: ComponentCreator('/docs/Guia de Usuario/Conceptos básicos/Edición básica', 'ab1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Guia de Usuario/Depuración y Pruebas/Depuración',
                component: ComponentCreator('/docs/Guia de Usuario/Depuración y Pruebas/Depuración', '6d8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Guia de Usuario/Depuración y Pruebas/Pruebas',
                component: ComponentCreator('/docs/Guia de Usuario/Depuración y Pruebas/Pruebas', '201'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Guia de Usuario/Extensiones/Tienda de Extensiones',
                component: ComponentCreator('/docs/Guia de Usuario/Extensiones/Tienda de Extensiones', '2aa'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Guia de Usuario/Gestión de Espacios de Trabajo/Espacios de Trabajo',
                component: ComponentCreator('/docs/Guia de Usuario/Gestión de Espacios de Trabajo/Espacios de Trabajo', '0da'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/introduction',
                component: ComponentCreator('/docs/introduction', '457'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', '9b8'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
