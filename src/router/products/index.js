export default{
    path:'/products',
    // 在vue中@表示src目录
    component:() => import('@/components/products/Products.vue'),

    // 二级路由
    children:[
        {
            path:'smallt',
            name:'Smallt',
            component: () => import('@/components/products/WhiteSmallTseries.vue'),  
        },
        {
            path:'underwear',
            name:'Underwear',
            component: () => import('@/components/products/UnderwearSeries.vue')
        },
        {
            path:'trousers',
            name:'Trousers',
            component: () => import('@/components/products/TrousersSeries.vue')
        },
        {
            path:'sportseasydry',
            name:'Sportseasydry',
            component: () => import('@/components/products/SportsEasyDry.vue')
        },
        {
            path:'clothesseries',
            name:'Clothesseries',
            component: () => import('@/components/products/ClothesSeries.vue')
        }
    ]
}