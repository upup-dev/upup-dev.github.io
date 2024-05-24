import {
    design,
    eCommerce,
    edtech,
    fintech,
    healthcare, hostingDevops,
    industries, mobileDevelopment,
    services,
    webApplications, websites
} from "@/app/data/variables";

export const navigation = [
    {id: 0, title: 'Industries', path: '', arrow: true, submenu: [
            {
                id: 0,
                title: 'Fintech',
                path: `/${industries}/${fintech}`
            },
            {
                id: 1,
                title: 'Healthcare',
                path: `/${industries}/${healthcare}`
            },
            {
                id: 2,
                title: 'EdTech',
                path: `/${industries}/${edtech}`
            },
            {
                id: 3,
                title: 'E-commerce',
                path: `/${industries}/${eCommerce}`
            }
        ]},
    {id: 1, title: 'Services', path: '', arrow: true, submenu: [
            {
                id: 0,
                title: 'UX/UI Design',
                path: `/${services}/${design}`
            },
            {
                id: 1,
                title: 'Web Applications',
                path: `/${services}/${webApplications}`
            },
            {
                id: 2,
                title: 'WebSites',
                path: `/${services}/${websites}`
            },
            {
                id: 3,
                title: 'Mobile Development',
                path: `/${services}/${mobileDevelopment}`
            },
            {
                id: 4,
                title: 'Hosting & DevOps',
                path: `/${services}/${hostingDevops}`
            },
        ]},
    {id: 2, title: 'Engagement Models', path: '', arrow: true, submenu: [
            {
                id: 0,
                title: 'Dedicated Team',
                path: '/ux-ui-design'
            },
            {
                id: 1,
                title: 'Outsourcing model',
                path: '/ux-ui-design'
            },
            {
                id: 2,
                title: 'Time & Materials model',
                path: '/ux-ui-design'
            },
            {
                id: 3,
                title: 'Fixed price',
                path: '/ux-ui-design'
            },
            {
                id: 4,
                title: 'Outstaffing model',
                path: '/ux-ui-design'
            },
        ]},
    {id: 3, title: 'Portfolio', path: '/portfolio', arrow: false},
    {id: 4, title: 'About Us', path: '/about', arrow: false},
];