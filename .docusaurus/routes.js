import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/Metro-docs/blog',
    component: ComponentCreator('/Metro-docs/blog', '4ad'),
    exact: true
  },
  {
    path: '/Metro-docs/blog/archive',
    component: ComponentCreator('/Metro-docs/blog/archive', '088'),
    exact: true
  },
  {
    path: '/Metro-docs/blog/first-blog-post',
    component: ComponentCreator('/Metro-docs/blog/first-blog-post', 'fe0'),
    exact: true
  },
  {
    path: '/Metro-docs/blog/long-blog-post',
    component: ComponentCreator('/Metro-docs/blog/long-blog-post', '090'),
    exact: true
  },
  {
    path: '/Metro-docs/blog/mdx-blog-post',
    component: ComponentCreator('/Metro-docs/blog/mdx-blog-post', 'bb9'),
    exact: true
  },
  {
    path: '/Metro-docs/blog/tags',
    component: ComponentCreator('/Metro-docs/blog/tags', '7d6'),
    exact: true
  },
  {
    path: '/Metro-docs/blog/tags/docusaurus',
    component: ComponentCreator('/Metro-docs/blog/tags/docusaurus', '7e3'),
    exact: true
  },
  {
    path: '/Metro-docs/blog/tags/facebook',
    component: ComponentCreator('/Metro-docs/blog/tags/facebook', '1d2'),
    exact: true
  },
  {
    path: '/Metro-docs/blog/tags/hello',
    component: ComponentCreator('/Metro-docs/blog/tags/hello', '78d'),
    exact: true
  },
  {
    path: '/Metro-docs/blog/tags/hola',
    component: ComponentCreator('/Metro-docs/blog/tags/hola', '3b8'),
    exact: true
  },
  {
    path: '/Metro-docs/blog/welcome',
    component: ComponentCreator('/Metro-docs/blog/welcome', 'd8b'),
    exact: true
  },
  {
    path: '/Metro-docs/markdown-page',
    component: ComponentCreator('/Metro-docs/markdown-page', '4b0'),
    exact: true
  },
  {
    path: '/Metro-docs/docs',
    component: ComponentCreator('/Metro-docs/docs', '687'),
    routes: [
      {
        path: '/Metro-docs/docs/category/expaination--how-ot-works',
        component: ComponentCreator('/Metro-docs/docs/category/expaination--how-ot-works', 'f2c'),
        exact: true,
        sidebar: "introSidebar"
      },
      {
        path: '/Metro-docs/docs/category/getting-start',
        component: ComponentCreator('/Metro-docs/docs/category/getting-start', '8ea'),
        exact: true,
        sidebar: "introSidebar"
      },
      {
        path: '/Metro-docs/docs/explanation/client',
        component: ComponentCreator('/Metro-docs/docs/explanation/client', '5ba'),
        exact: true,
        sidebar: "introSidebar"
      },
      {
        path: '/Metro-docs/docs/explanation/config',
        component: ComponentCreator('/Metro-docs/docs/explanation/config', 'f16'),
        exact: true,
        sidebar: "introSidebar"
      },
      {
        path: '/Metro-docs/docs/explanation/extras',
        component: ComponentCreator('/Metro-docs/docs/explanation/extras', 'dc1'),
        exact: true,
        sidebar: "introSidebar"
      },
      {
        path: '/Metro-docs/docs/explanation/intro',
        component: ComponentCreator('/Metro-docs/docs/explanation/intro', '1f2'),
        exact: true,
        sidebar: "introSidebar"
      },
      {
        path: '/Metro-docs/docs/explanation/pipeline',
        component: ComponentCreator('/Metro-docs/docs/explanation/pipeline', '082'),
        exact: true,
        sidebar: "introSidebar"
      },
      {
        path: '/Metro-docs/docs/explanation/runner',
        component: ComponentCreator('/Metro-docs/docs/explanation/runner', '429'),
        exact: true,
        sidebar: "introSidebar"
      },
      {
        path: '/Metro-docs/docs/explanation/transformers',
        component: ComponentCreator('/Metro-docs/docs/explanation/transformers', '318'),
        exact: true,
        sidebar: "introSidebar"
      },
      {
        path: '/Metro-docs/docs/getting-stated/installation',
        component: ComponentCreator('/Metro-docs/docs/getting-stated/installation', 'a8d'),
        exact: true,
        sidebar: "introSidebar"
      },
      {
        path: '/Metro-docs/docs/getting-stated/running',
        component: ComponentCreator('/Metro-docs/docs/getting-stated/running', '353'),
        exact: true,
        sidebar: "introSidebar"
      },
      {
        path: '/Metro-docs/docs/getting-stated/your-own-pipeline',
        component: ComponentCreator('/Metro-docs/docs/getting-stated/your-own-pipeline', 'ade'),
        exact: true,
        sidebar: "introSidebar"
      },
      {
        path: '/Metro-docs/docs/intro',
        component: ComponentCreator('/Metro-docs/docs/intro', 'cd0'),
        exact: true,
        sidebar: "introSidebar"
      }
    ]
  },
  {
    path: '/Metro-docs/',
    component: ComponentCreator('/Metro-docs/', '357'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
