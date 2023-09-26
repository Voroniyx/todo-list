<template>
    <div class="max-h-[150px] text-2xl text-white bg-slate-500 text-center">
        Todo List
    </div>
    <div class="mt-3">
        <div class="w-full text-center">
            <span class="bg-blue-700 rounded-2xl m-2 p-1 tooltip">
                Stories
                <p class="bg-black absolute !min-w-fit text-white p-1 rounded tooltiptext">Du kannst Stories erstellen und diesen Todos zuweisen</p>
            </span>
            <span>
                Todos
                <p>Todos sind unterpunkte die Stories zugewiesen werden können</p>
            </span>
            <span>
                Erledigt
                <p>Hier werden alle Erledigten Todos angezeigt</p>
            </span>

            <!-- 
                TODO: Detail View für Stories
                TODO: Detail View für Todos
                TODO: Unterstreichen, etc... für Todos
                TODO: Bagdes entwwicklen (Fertig, Im Gange, etc...)
                TODO: Fortschrittbalken erstellen jenachdem wie viele todos einer stories angeschlossen wurde
            -->

        </div>
    </div>
</template>

<style scoped>
/* Tooltip container */
.tooltip {
  position: relative;
  display: inline-block;
  border-bottom: 1px dotted black; /* If you want dots under the hoverable text */
}

/* Tooltip text */
.tooltip .tooltiptext {
  visibility: hidden;
  background-color: black;
  color: #fff;
  text-align: center;
  padding: 5px 0;
  border-radius: 6px;
 
  /* Position the tooltip text - see examples below! */
  position: absolute;
  z-index: 1;
}

.tooltip .tooltiptext {
  bottom: 100%;
  left: 50%;
  margin-left: -35px; /* Use half of the width (120/2 = 60), to center the tooltip */
}

.tooltip .tooltiptext::after {
  content: " ";
  position: absolute;
  top: 100%; /* At the bottom of the tooltip */
  left: 50%;
  margin-left: -5px;
  border-width: 5px;
  border-style: solid;
  border-color: black transparent transparent transparent;
}

/* Show the tooltip text when you mouse over the tooltip container */
.tooltip:hover .tooltiptext {
  visibility: visible;
}
</style>

<script setup lang="ts">
import {ref} from 'vue';

const showToolTipStoires = ref(false);

</script>