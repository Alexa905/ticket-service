<template>
    <header>
        <router-link :to="{ path: `/` }" replace>Book ticket</router-link>
        <router-link :to="{ path: `/order-history` }" replace>Order history</router-link>
    </header>
</template>

<script>
export default {
  name: 'Header',
};
</script>


<style scoped>
    header {
        background: #5e5e5e;
        padding: 10px;
        margin-bottom: 50px;
    }

    a {
        color: white;
        text-decoration: none;
        display: inline-block;
        text-align: center;
        margin: 0 20px;
    }

    .router-link-exact-active{
        font-weight: bold;
    }
</style>
