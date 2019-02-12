<template>
    <div>
        <img :src="column_type==='CATEGORY_01' ? 'https://mathtab.com/app_images/10bcdf4/8ee607a/c770b1e27b.png'
        : ''" alt="">
    </div>
</template>

<script>
    export default {
        name: "ColumnLoading",
        props: ['column_type']
    }
</script>

<style scoped>

</style>
