module.exports = {
    title: "Acquisitions, Inc",
    description: "A tale of synergy, office politics, & phat loot",

    themeConfig: {
        repo: 'owlmanatt/eberron-acq',
        editLinks: true,

        sidebar: [
            {
                title: 'Getting Started',
                collapsable: false,
                children: [
                    '',
                    'char-rules',
                    'resources',
                ].map(page => 'getting-started/' + page)
            },
            /*
            {
                title: "Adventures",
                collapsable: false,
                children: [
                    'waterdeep_2019'
                ].map(page => 'adventures/' + page),
            },
            */
        ]
    }
}