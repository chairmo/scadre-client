<template>
<div class="login">
  <div id="okta-signin-container">

  </div>
</div>
</template>

<script>
import OktaSignin from '@okta/okta-signin-widget'

import '@okta/okta-signin-widget/dist/css/okta-sign-in.min.css'
import sampleConfig from '../services/config'


export default {
name: "login",
  mounted: function () {
  this.$nextTick(function (){
    this.widget = new OktaSignin({
      baseUrl: sampleConfig.oidc.issuer.split('/oauth2')[0],
      clientId: sampleConfig.oidc.clientId,
      redirectUri: sampleConfig.oidc.redirectUri,
      logo: require('@/assets/logo.png'),
      i18n: {
        en: {
          'primaryauth.title': 'Sign in to CommTech'
        }
      },
      authParams: {
        pkce: true,
        issuer: sampleConfig.oidc.issuer,
        display: 'page',
        scopes: sampleConfig.oidc.scopes
      },
      features: {
        registration: true
      }
    })

    this.widget.renderEl(
        { el: '#okta-signin-container' },
        () => {},
        (err) => { throw err}
    )
  })
  },
  destroyed() {
  this.widget.remove()
  }
}
</script>

<style scoped>

</style>