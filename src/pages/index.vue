<script setup lang="ts">
</script>

<template>
  <div>
    <h1 class="text-6xl font-bold underline mb-4 text-green-800 dark:text-green-100">
      Noodle <div class="inline-block border border-green-50" i-carbon:noodle-bowl />
    </h1>
    <p class="text-sm text-green-600 font-light dark:text-green-200">
      Wordle but only numbers and chaos (also cheating.)
    </p>

    <div class="w-full p-8 md:w-2/3 lg:w-1/2 xl:w-1/3 2xl:w-1/4 my-4 mx-auto grid grid-cols-4 grid-rows-4 gap-4">
      <div class="border-green-400 flex rounded border aspect-square justify-center items-center font-bold text-lg" />
      <div class="border-green-400 flex rounded border aspect-square justify-center items-center font-bold text-lg" />
      <div class="border-green-400 flex rounded border aspect-square justify-center items-center font-bold text-lg" />
      <div class="border-green-400 flex rounded border aspect-square justify-center items-center font-bold text-lg" />
    </div>

    <div class="flex flex-col items-center">
      <label for="guess" class="text-green-600 dark:text-green-50 mb-4">Input your guess here</label>
      <input id="guess" class="text-black dark:(text-green-50 bg-transparent) px-3 py-2 border border-green-500" type="number" name="guess">
    </div>
  </div>
</template>
