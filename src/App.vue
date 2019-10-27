<template>
  <!-- <div class="page-wrapper">
    <div class="container" style="margin-top: 25px;margin-left: 50px;">
     <div class="row">
      <div class="col-md-10" style="float: right;">
        <router-link to="/login">Sign In</router-link>
        <router-link to="/register">Sign Up</router-link>
     </div>
   </div>
 </div>
</div> -->
<div class="main-div">
  <ul>
      <li class="home-active"><a href="#"><span class="fa fa-home"></span>Home</a></li>
      <li><a href="#"><span class="fa fa-users"></span>About Us</a>
          <div class="home-sub-menu-1">
              <ul>
                  <li><a href="#">Abt 1</a></li>
                  <li><a href="#">Abt 2</a></li>
                  <li><a href="#">Abt 3</a></li>
              </ul>
          </div>
      </li>
      <li><a href="#"><span class="fa fa-clone"></span>Services</a>
          <div class="home-sub-menu-1">
              <ul>
                  <li><a href="#">Service 1</a></li>
                  <li class="home-hover-me"><a href="#">Service 2</a><span class="fa fa-angle-right"></span>
                      <div class="home-sub-menu-2">
                          <ul>
                              <li><a href="#">Sub Service 1</a></li>
                              <li><a href="#">Sub Service 2</a></li>
                              <li><a href="#">Sub Service 3</a></li>
                          </ul>
                      </div>
                  </li>
                  <li><a href="#">Service 3</a></li>
              </ul>
          </div>
      </li>
      <li><a href="#"><span class="fa fa-building"></span>Departments</a></li>
      <li><a href="#"><span class="fa fa-stethoscope"></span>Doctors</a></li>
      <li><a href="#"><span class="fa fa-star"></span>Reviews</a></li>
      <li><a href="#"><span class="fa fa-phone"></span>Contact Us</a></li>
  </ul>
    <a href="" style="margin-left: 90px;"><router-link to="/login">Sign In</router-link></a>
    <a href=""><router-link to="/register"> | Sign Up</router-link></a>

</div>
</template>
<script>
    $(document).on('click', 'ul li',function(){
        $(this).addClass('home-active').siblings().removeClass('home-active')
    });
</script> 

