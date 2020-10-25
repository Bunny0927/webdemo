<template>
  <div id="app">
    <PageHeader/>
      <router-view/>
    <PageFooter/>
  </div>
</template>

<script>
import PageFooter from './components/SomeControls/PageFooter'
import PageHeader from './components/SomeControls/PageHeader'
export default {
  name: 'App',
  components: {PageHeader, PageFooter}
}
</script>

<style>
</style>
