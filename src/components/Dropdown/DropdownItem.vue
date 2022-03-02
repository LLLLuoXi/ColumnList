<!--
 * @Author: luoxi
 * @LastEditTime: 2022-03-02 22:50:04
 * @LastEditors: your name
 * @Description: 
-->
<template>
  <li class="dropdownitem-container" :class="{ 'is-disabled': disabled }">
    <div class="slot"><slot></slot></div>
  </li>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "DropdownItem",
  props: {
    disabled: {
      type: Boolean,
      required: false,
    },
  },
  setup() {
    const isOpen = ref(false);
    const toggleOpen = () => {
      isOpen.value = !isOpen.value;
    };
    return {};
  },
});
</script>

<style >
.dropdownitem-container.is-disabled .slot * {
  color: #6c757d;
  pointer-events: none;
  background-color: transparent;
}
</style>