import { createApp } from "vue";

import "../src/assets/style/style.css";

import App from "./App.vue";
import router from "./router/index";


const app = createApp(App);

app.use(router);

app.mount("#app");

export enum Status {
    GEPLANT,
    IM_GANGE,
    FERTIG,
}

export interface Todo {
    name: string,
    id: number,
    description: string,
    status:Status,

}

export interface Storie {
    name: string,
    id: number,
    todos: Todo[]
}
