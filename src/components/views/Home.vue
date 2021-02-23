<template>
  <div>
      <div class="main">
        <div class="card">
          <div class="title">
            Please read....
          </div>
          <div class="card-body">
            <p>
              Welcome to ICT Cadre Career Management Portal,
              please ensure to fill in all your data and your documents for upload.
              You are also expected to print out a summary of your filled information and
              present yourself with it for verification.
            </p>
            <div class="card-footer " style="text-align: center">
              <router-link :to="{name:'staffInfo'}" class="btn btn-success">Click here to start
              </router-link>
            </div>
          </div>

        </div>
      </div>

  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.main {
  margin-left: 160px; /* Same as the width of the sidebar */
  padding-left: 55px;
  padding-right: 30px;
}

.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  max-width: 550px;
  margin: auto;
  /*text-align: center;*/
}

.title {
  font-size: 18px;
  margin: auto;
  padding: 20px;
}

.btn-success{
  background:#007d53;
  margin: auto;
  height: 35px;
}

p {
  text-decoration: none;
  font-size: 16px;
  color: black;
  margin: 10px;
  font-family: Garamond;
}

/* On screens that are less than 700px wide, make the view area flexible */
@media screen and (max-width: 700px) {
  .main {
    margin: auto;
    padding-right: 20px;
    padding-left: 20px;
  }
}
/* On screens that are less than 400px wide, make the view area below the sidebar */
@media screen and (max-width: 400px) {
  .main {
    margin: auto;
    padding-right: 10px;
    padding-left: 10px;
  }
}
</style>