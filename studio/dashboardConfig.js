export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-eleventy-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f2f04d317794bfe7766abd2',
                  title: 'Sanity Studio',
                  name: 'sanity-eleventy-blog-studio-dpjeazpx',
                  apiId: '70797f57-b3b9-460f-a257-c74e18ca9680'
                },
                {
                  buildHookId: '5f2f04d3fe29513f8f573d24',
                  title: 'Blog Website',
                  name: 'sanity-eleventy-blog-web-smwgum4k',
                  apiId: '3d31bee9-0236-4d61-be0a-bcebf42299e7'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/jdlynn/sanity-eleventy-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-eleventy-blog-web-smwgum4k.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
