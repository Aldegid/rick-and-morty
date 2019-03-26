import { Main } from "../Components/Main";
import { NotFound } from "../Components/NotFound";
import Users from "../Components/Users/Users";
import User from "../Components/User/User";
import Login from "../Components/Login/Login";
import Posts from "../Components/Posts/Posts";
import { isLogged } from "../guards/guards";
import Characters from "../Components/Characters/Characters";
import CharacterCard from "../Components/CharacterCard/CharacterCard";


export const routes = [
    {
        path: '',
        component: Main
    },
    {
        path: 'users',
        component: Users,
        // guards: [ isLogged ]
    },
    {
        path: 'user/:id',
        component: User
    },
    {
        path: 'char/:id',
        component: CharacterCard
    },
    {
        path: 'chars',
        component: Characters
    },
    {
        path: 'login',
        component: Login
    },
    {
        path: 'posts',
        component: Posts,
        // guards: [ isLogged ]
    },
    {
        path: '**',
        component: NotFound
    }
];
