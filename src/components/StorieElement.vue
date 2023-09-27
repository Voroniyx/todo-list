
<template>
    <!-- On Click Open Detailed Storie View with Description and a little bit more. (Comments, url list to extern things and more) -->
    <div class="bg-slate-300 hover:bg-slate-400 my-2 mx-6 rounded">
        <div>
            <!-- Storie Icon + Progress Badge -->
            
        </div>
        <div> 
            <!-- Name, Todo Count -->
            <span>
                {{ story?.name }}
                <Badge color="#22e355" label="test" />
            </span>
        </div>
    </div>
</template>

<script setup lang="ts">
import { PropType } from 'vue';
import { Storie } from '../main';
import Badge from './Badge.vue'

defineProps({
    story: {} as PropType<Storie>,
})
</script>