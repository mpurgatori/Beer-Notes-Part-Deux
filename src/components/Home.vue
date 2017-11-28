<template>
    <header id="home">
        <section class="top-nav hidden-xs">
            <div class="container">
                <div class="row">
                    <div class="col-md-6">
                        <div class="top-left">

                            <ul>
                                <li><a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
                                <li><a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
                                <li><a href="#"><i class="fa fa-linkedin" aria-hidden="true"></i></a></li>
                                <li><a href="#"><i class="fa fa-vk" aria-hidden="true"></i></a></li>
                                <li><a href="#"><i class="fa fa-instagram" aria-hidden="true"></i></a></li>
                            </ul>

                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!--main-nav-->

        <div id="main-nav">

            <nav class="navbar">
                <div class="container">

                    <div class="navbar-header">
                        <a href="index.html" class="navbar-brand">beer notes</a>
                        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#ftheme">
                            <span class="sr-only">Toggle</span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                        </button>
                    </div>

                    <div class="navbar-collapse collapse" id="ftheme">

                        <ul class="nav navbar-nav navbar-right">
                            <li><a href="#sign-in">sign in</a></li>
                            <li><a href="#sign-up">sign up</a></li>
                        </ul>

                    </div>

                    <div class="search-form">
                        <form>
                            <input type="text" id="s" size="40" placeholder="Search..." />
                        </form>
                    </div>

                </div>
            </nav>
        </div>
    </header>
</template>
<script>
export default {
  name: 'Home',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
