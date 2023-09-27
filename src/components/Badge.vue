<template>
    <span :class="`text-[${mainColor}] bg-[${bgColor}] border-[${mainColor}] border`" class="p-1 rounded max-w-fit font-bold ">
        {{ props.label }}
    </span>
</template>

<script setup lang="ts">
import { PropType } from 'vue';
import {hexToRgba} from '../functions/ColorHelper';

const props = defineProps({
    label: String as PropType<string>,
    color: String as PropType<string>
})

const mainColor = hexToRgba(props.color as string);
const bgColor = hexToRgba(props.color as string, 0.5);

</script>
