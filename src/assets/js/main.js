import nunjucks from ("nunjucks")

nunjucks.render(
    'nav.html', 
    {
        navs: [
            {
                name: "Speed",
                link: '',
                submenu: [
                    {
                        name: 'Post',
                        link: ''
                    },
                    {
                        name: 'Test',
                        link: ''
                    }
                ]
            },
            {
                name: "Speed",
                link: '',
                submenu: [
                    {
                        name: 'Post',
                        link: ''
                    },
                    {
                        name: 'Test',
                        link: ''
                    }
                ]
            },
            {
                name: "Speed",
                link: '',
                submenu: [
                    {
                        name: 'Post',
                        link: ''
                    },
                    {
                        name: 'Test',
                        link: ''
                    }
                ]
            },
            {
                name: "Speed",
                link: '',
                submenu: [
                    {
                        name: 'Post',
                        link: ''
                    },
                    {
                        name: 'Test',
                        link: ''
                    }
                ]
            },
        ]
    }
)