<template>
	<div>
		<div class="aa-header-top">
      	<div class="container">
        	<div class="row">
        	  <div class="col-md-12">
            	<div class="aa-header-top-area">
              		<div class="aa-header-top-left">
                <!-- start language -->
                		<div class="aa-language">
                  			<div class="dropdown">
                    			<a class="btn dropdown-toggle" href="#" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                      			<img src="img/flag/english.jpg" alt="english flag">ENGLISH
                      			<span class="caret"></span>
                    			</a>
                    			<ul class="dropdown-menu" aria-labelledby="dropdownMenu1">
                      				<li><a href="#"><img src="img/flag/french.jpg" alt="">FRENCH</a></li>
                      				<li><a href="#"><img src="img/flag/english.jpg" alt="">ENGLISH</a></li>
                    			</ul>
                  			</div>
                		</div>
                <!-- / language -->

                <!-- start currency -->
                	<div class="aa-currency">
                  		<div class="dropdown">
                    		<a class="btn dropdown-toggle" href="#" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                      			<i class="fa fa-usd"></i>USD
                      			<span class="caret"></span>
                    		</a>
                    		<ul class="dropdown-menu" aria-labelledby="dropdownMenu1">
                      			<li><a href="#"><i class="fa fa-euro"></i>EURO</a></li>
                      			<li><a href="#"><i class="fa fa-jpy"></i>YEN</a></li>
                    		</ul>
                  		</div>
                	</div>
                <!-- / currency -->
                <!-- start cellphone -->
                	<div class="cellphone hidden-xs">
                  		<p><span class="fa fa-phone"></span>00-62-658-658</p>
                	</div>
                <!-- / cellphone -->
              	</div>
              <!-- / header top left -->
              	<div class="aa-header-top-right">
                	<ul class="aa-head-top-nav-right">
                  		<li><a href="account.html">My Account</a></li>
                  		<li class="hidden-xs"><a href="wishlist.html">Wishlist</a></li>
                  		<li class="hidden-xs"><a href="cart.html">My Cart</a></li>
                  		<li class="hidden-xs"><a href="checkout.html">Checkout</a></li>
                  		<li><a href="" data-toggle="modal" data-target="#login-modal">Login</a></li>
                	</ul>
             	 </div>
            	</div>
          	</div>
        </div>
      	</div>
    </div>
	<div class="modal fade" id="login-modal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">                      
        <div class="modal-body">
        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
          <h4>Login or Register</h4>
          <form class="aa-login-form" action="">
            <label for="">Username or Email address<span>*</span></label>
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
      </div><!-- /.modal-content -->
    </div><!-- /.modal-dialog -->
  </div>
</div>		 
</template>

<script>
export default {
    
}
</script>

<style>
    
</style>