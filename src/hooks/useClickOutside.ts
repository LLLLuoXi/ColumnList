/*
 * @Author: luoxi
 * @LastEditTime: 2022-03-03 22:41:35
 * @LastEditors: your name
 * @Description: 判断是否再 elementRef 外面区域点击
 */

import { ref, onMounted, onUnmounted, Ref } from "vue";

const useClickOutside = (elementRef: Ref<null | HTMLElement>) => {
  let isClickOutside = ref(false);
  const handler = (e: MouseEvent) => {
    if (elementRef.value) {
      if (elementRef.value.contains(e.target as HTMLElement)) {
        isClickOutside.value = false;
      } else {
        isClickOutside.value = true;
      }
    }
  };

  onMounted(() => {
    document.addEventListener("click", handler);
  }),
    onUnmounted(() => {
      document.removeEventListener("click", handler);
    });

  return isClickOutside;
};

export default useClickOutside;
