<template>
  <div class="max-h-[150px] text-2xl text-white bg-slate-500 text-center">
    Todo List
  </div>
  <div class="mt-12">
    <div class="w-full text-center text-white text-4xl">
      <button class="bg-todo-info hover:bg-opacity-75 hover:cursor-pointer m-2 p-2 pl-3 rounded-3xl text-center">
        <img src="../assets/svg/storie.svg" width="36" class="inline-flex mb-2"> Stories
      </button>
      <button class="bg-todo-success hover:bg-opacity-75 hover:cursor-pointer m-2 p-2 pl-3 rounded-3xl">
        <img src="../assets/svg/todo.svg" width="36" class="inline-flex pb-3"> Todos
      </button>
      <button class="bg-todo-grey bg-opacity-50 hover:bg-opacity-75 hover:cursor-pointer m-2 p-2 pl-3 rounded-3xl">
        <img src="../assets/svg/done.svg" width="36" class="inline-flex pb-3"> Erledigt
      </button>

      <!-- 
                TODO: Detail View für Stories
                TODO: Detail View für Todos (PopUp)
                TODO: Unterstreichen, etc... für Todos
                TODO: Bagdes entwwicklen (Fertig, Im Gange, etc...)
                TODO: Fortschrittbalken erstellen jenachdem wie viele todos einer stories angeschlossen wurde
                TODO: Im Todos tab ein Badge an das Todo machen, was den Namen der Storie enthält
                TODO: Anstelle von ToolTips einfach eine Beschreibung in den jeweiligen tab packen
                TODO: Als Beschreibung: 
                <p>Todos sind unterpunkte die Stories zugewiesen werden können</p>
                <p class="bg-black absolute !min-w-fit text-white p-1 rounded">Du kannst Stories erstellen und diesen Todos zuweisen</p>
                <p>Hier werden alle Erledigten Todos angezeigt</p>
            -->



    </div>
  </div>
  <div>
    <Stories />
  </div>
</template>

<script lang="ts" setup>
import Stories from '../components/Stories.vue'
</script>