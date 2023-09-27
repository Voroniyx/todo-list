<template>
    <div class="m-8 p-8 rounded-md text-center">
        <div class="text-2xl">
            Du kannst Stories erstellen und diesen Todos zuweisen um diese Übersichtlich gebündelt zu haben
        </div>
        <div class="border-todo-dark-grey border-2 ">
            <template v-for="storie in dummyStories">
                <StorieElement :story="storie" />
            </template>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { Storie, Status } from '../main';
import StorieElement from './StorieElement.vue';

const dummyStories: Storie[] = [
    {
        id:0,
        name:"Test",
        todos: [
            {
                description:'Das ist eine Beschreibung',
                id:1,
                name:'Test',
                status:Status.GEPLANT
            }
        ]
    }
]
</script>