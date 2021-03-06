// import User from './components/user/User.vue';
// import UserStart from './components/user/UserStart.vue';
// import UserDetail from './components/user/UserDetail.vue';
// import UserEdit from './components/user/UserEdit.vue';

import Home from './components/Home.vue';
import Header from './components/Header.vue';

const User = resolve => {
    require.ensure(["./components/user/User.vue"], () => {
        resolve(require("./components/user/User.vue"));
    }, "user");
};
const UserStart = resolve => {
    require.ensure(["./components/user/UserStart.vue"], () => {
        resolve(require("./components/user/UserStart.vue"));
    }, "user");
};
const UserEdit = resolve => {
    require.ensure(["./components/user/UserEdit.vue"], () => {
        resolve(require("./components/user/UserEdit.vue"));
    }, "user");
};
const UserDetail = resolve => {
    require.ensure(["./components/user/UserDetail.vue"], () => {
        resolve(require("./components/user/UserDetail.vue"));
    }, "user");
};

export const routes = [{
        path: '/',
        components: {
            default: Home,
            "header-top": Header
        },
        name: "home"
    },
    {
        path: '/user',
        components: {
            default: User,
            "header-bottom": Header
        },
        beforeEnter: (to, from, next) => {
            next(true); // Também determina o acesso as rotas filhas
        },
        children: [{
                path: "",
                component: UserStart
            },
            {
                path: ":id",
                component: UserDetail,
                beforeEnter: (to, from, next) => {
                    console.log("inside route setup");
                    next();
                }
            },
            {
                path: ":id/edit",
                component: UserEdit,
                name: "userEdit"
            }
        ]
    },
    {
        path: "/redirect-me",
        redirect: {
            name: "home"
        }
    },
    {
        path: "*",
        redirect: "/"
    }
];