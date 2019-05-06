<template>
    <div>
        <Header_top></Header_top>
        <div v-show="showRegister">
            <form class="aa-login-form" action="">
                <label for="">New Password<span>*</span></label>
                <input type="password" placeholder="Password">
            <label for="">Password Again<span>*</span></label>
            <input type="password" placeholder="Password">
            <button class="aa-browse-btn" type="submit">Set New Password</button>
        </form>
    </div>

    </div>
</template>

<script>
import Header_top from './header-top.vue'
import Header_middle from './header-middle.vue'
import Header_bottom from './header-bottom.vue'


export default {
    
}
</script>

<style>
    
</style>