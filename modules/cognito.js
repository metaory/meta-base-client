/* eslint-disable */
module.exports = function CognitoModule({verification}) {
  console.log('CognitoModule', verification)
  console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>')
  // export const navHosted = (verification) => {
    console.log('NAVHOSTED', verification)
    // https://meta-base.auth.ap-southeast-1.amazoncognito.com/login?response_type=token&client_id=15mgmu4gi5i6n0km4tiof7hl7a&redirect_uri=https://afb71f90.ngrok.io/auth/callback&state=222&scope=openid profile
    console.log('PROCESS.ENV.AWS_COGNITO_USER_POOL_DOMAIN', process.env.AWS_COGNITO_USER_POOL_DOMAIN)
    const domain = process.env.AWS_COGNITO_USER_POOL_DOMAIN
    const clientId = process.env.AWS_COGNITO_CLIENT_ID
    const type = 'token'
    const scope = encodeURIComponent('openid profile')
    const callback = window.location.protocol + '//' + window.location.host + '/authenticate'
    const url = 'https://' + domain + '/login?response_type=' + type + '&client_id=' + clientId + '&redirect_uri=' + callback + '&state=' + verification + '&scope=' + scope
    console.log('URL', url)
    window.location.href = url
  // }
}
