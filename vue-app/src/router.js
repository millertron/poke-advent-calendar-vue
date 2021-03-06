import Vue from 'vue'
import Router from 'vue-router'
import AdventCalendarView from './views/AdventCalendarView'
import HomeView from './views/HomeView'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView
        },
        {
            path: '/adventcalendar',
            name: 'keyless',
            component: HomeView
        },
        {
            path: '/adventcalendar/:key',
            name: 'adventcalendar',
            component: AdventCalendarView
        }
    ]
})
