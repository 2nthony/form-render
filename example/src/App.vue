<template>
  <div id="app">
    <section style="display: flex;">
      <ul style="margin-right: 1em;">
        <li>
          <router-link to="/">基本用法</router-link>
        </li>
      </ul>
      <router-view></router-view>
    </section>
  </div>
</template>

<style>
#app {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
</style>
