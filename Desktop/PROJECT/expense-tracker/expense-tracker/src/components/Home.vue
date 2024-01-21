<template>

<div class="container-fluid">
  <div class="row">
      <h1>Manage Spending  <br>Money Effectively <br>and Efficiency</h1>
      <h3>Best way to save your money</h3>
      <h5>With our easy to use platform you can track your income and expenses, set budget and plan for your <br>
        funancial future. Say goodbye to financial stress and yes to financial freedom </h5>
        <button type="button" class="btn  btn-success  btn-sm mt-2">Click here to explore</button>
      </div>
    </div>
    <div class="row bg-light mt-5">
      <div class="col-md-3 midlogo"><h6>Supported by international finance manager</h6></div>
      <div class="col-md-3"><img src="../assets/Paypal-logo.png" class="img-fluid"  alt="pay"></div>
      <div class="col-md-3"><img src="../assets/VISA-logo.png"  class="img-fluid" alt="pay"></div>
      <div class="col-md-3"><img src="../assets/images (1).png"  class="img-fluid" alt=""></div>
    </div>

      <div class="row mt-5 midText">
        <div class="col">
          <h2>Together with AI assistant who manage <br> your finances optimally</h2>
          <h5>Expensely uses AI technology that can help you manage your finances </h5>
        </div>
      </div>

      <div class="row mt-5 bg-light">
        <div class="col-md-4 midBox mb-4">
          <div class="col-md-3"><img src="../assets/Paypal-logo.png" class="img-fluid"  alt="pay"></div>
          <h3>Multilevel security</h3>
          <h6>Protect your financial status with features like <br> multi-factor aunthetification and
          granular <br> employee permision </h6>
        </div>
        <div class="col-md-4 midBox mb-4">
          <div class="col-md-3"><img src="../assets/Paypal-logo.png" class="img-fluid"  alt="pay"></div>
          <h3>Trusted Experience</h3>
          <h6>Apply in minutes and recieved account<br> Approval within hours, This access all the <br> 
          cash management essentials in one digital <br>platform</h6>
        </div>
        <div class="col-md-4 midBox mb-4">
          <div class="col-md-3"><img src="../assets/Paypal-logo.png" class="img-fluid"  alt="pay"></div>
          <h3>Structured Outreach</h3>
          <h6>Expensely offers around clock support to<br> answer most pressing question and <br> propel your business forward </h6>
        </div>
      </div>

      <div class="row bg-dark client">
        <div class="col">
          <h3 class="mt-3">Why they love Expensely</h3>
          <h5>This are words of those who have manage their finances and expenses</h5>              
          <div class="row mt-5">
              <div class="col-md-5 review ">
                  <h6>Expensely really help me to manage my finance.<br>Now my finances are well managed
                  without <br>excess expenses. I highly recomend this, <br> am highlt satisfied</h6>
                  <p class="mt-5"> <img src="../assets/chess.png" alt="" class="img-fluid"> Doni Sarmoyo <br>Finance Manager at Youtube</p>
              </div>
              <div class="col-md-2"></div>
              <div class="col-md-5 mt-5 review ">
                  <h6>Expensely really help me to manage my finance.<br>Now my finances are well managed
                  without <br> excess expenses. I highly recomend this,<br> am highlt satisfied</h6>
                  <p class="mt-5"> <img src="../assets/model.png" alt="" class="img-fluid"> Doni Sarmoyo <br>Finance Manager at Youtube</p>
              </div>
            </div>
          </div>
      </div>


      <div class="row blog mt-5">
        <div class="col-md-4 p-3">
          <h1 class="exp">Explore and spread <br> our blog</h1>
            <div class="input-group">
              <input type="text" placeholder="Enter your Email" class="form-control p-3">
                <button  type="button" class="btn btn-success">Subscribe</button>
              </div>
            </div>
            <div class="col"></div>
          <div class="col-md-4 mt-3">
            <h5 class="p-3">Follow our development and the blogs <br> we provide.lots of  interesting article about <br>finance and entertainment  technology
              <br>has been  the industry's standard dummy <br>text over sincethe 1500's when an  unknown <br>printer took 
            a galley of type and scrambled<br> it to make a type specimen book </h5>
          </div>
      </div>

      <div class="row mt-5 foot">
          <div class="col mt-3">
            <div>
            <p> <img src="../assets/EXPENSELY.png" alt="">EXPENSELY</p>
            <p class="p-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. <br>
              Vitae, dolores odit beatae adipisci corporis voluptas. <br>
               Voluptatum sequi explicabo quibusdam dolors. <br></p>
            </div>
          </div>

          <div class="col-md-2">
            <ul>
              <li><h5>ABOUT</h5> </li>
              <li>About us</li>
              <li> Features</li>
              <li>Blog</li>
              <li>Pricing</li>
            </ul>
          </div>
          <div class="col-md-2">
            <ul>
              <li><h5>Company</h5> </li>
              <li>How we work</li>
              <li>Press Room</li>
              <li>Jobs</li>
              <li>Community</li>
            </ul>
          </div>
          <div class="col-md-2">
            <ul>
              <li><h5>Legal</h5> </li>
              <li>Terms of use</li>
              <li>Privacy Policy</li>
              <li>Security Policy</li>
              <li>Cookies Settings</li>
            </ul>
          </div>
          
      </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
h1 {
  /* font-size: 70px; */
  /* line-height: 90px; */
  padding: 10px;
}
h6 {
  white-space: nowrap;
}
.midlogo{
  margin-top: 80px;
}
.midText, h2 {
  text-align: center;
  color: black;
}
.midBox{
  box-shadow:rgba(5, 5, 5, 0.20) 3px 3px 8px;
  padding: 20px;
}
.midBox h6 {
  /* box-shadow:rgba(5, 5, 5, 0.50) 5px 5px 8px; */
  padding: 20px;
}
.review{
  border-radius: 15px;
  color: #fff;
  padding: 20px;
  background-color: #198754;
}
.client{
  color: white;
  padding: 20px;
}
.blog{
    white-space: nowrap;
    /* padding: 20px; */
}
ul li {
  padding: 10px;
  font-size: 1rem;
  list-style: none;
  cursor: pointer;
}
.foot {
  background-color: whitesmoke;
}
input {
  padding: 3px;
}
button {
  border-radius: 30px;
}

</style>
