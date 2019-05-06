<template>
    <!-- Login Modal -->  
  <div class="modal fade" id="login-modal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">                      
        <div class="modal-body">
        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
        <button class="aa-browse-btn" type="submit" v-on:click="showLogin = true; showRegister = false">Login</button>
        <button class="aa-browse-btn" type="submit" v-on:click="showLogin = false; showRegister = true">Register</button>
        <div v-show="showLogin">
            <form class="aa-login-form" action="">
                <label for="">Phone Number<span>*</span></label>
                <input type="text" placeholder="Username or email">
                <label for="">Password<span>*</span></label>
                <input type="password" placeholder="Password">
                <button class="aa-browse-btn" type="submit">Login</button>
                <label for="rememberme" class="rememberme"><input type="checkbox" id="rememberme"> Remember me </label>
                <p class="aa-lost-password"><a href="#">Lost your password?</a></p>
                <div class="aa-register-now">
                Don't have an account?<a href="account.html">Register now!</a>
                </div>
            </form>
        </div>
        <div v-show="showRegister">
            <form class="aa-login-form" action="">
                <label for="">Name<span>*</span></label>
                <input type="text" placeholder="Username or email">
                <label for="">Surname<span>*</span></label>
                <input type="text" placeholder="Username or email">
                <label for="">Phone Number<span>*</span></label>
                <input type="text" placeholder="Password">
                <label for="">Password<span>*</span></label>
                <input type="password" placeholder="Password">
                <label for="">Password Again<span>*</span></label>
                <input type="password" placeholder="Password">
                <button class="aa-browse-btn" type="submit">Register</button>
            </form>
        </div>
        
        </div>                        
      </div><!-- /.modal-content -->
    </div><!-- /.modal-dialog -->
  </div>      
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            res: undefined,
            showLogin : true,
            showRegister : false
        }
    },
    methods: {
        addUser(){
            var vm = this;

            let uri = 'http://127.0.0.1:8000/api/customer/new/';
            this.axios.post(uri, {

            })
            .then((result) => {
                vm.data.res = result.data;
            })
        }
    },
}
</script>

<style>
    
</style>