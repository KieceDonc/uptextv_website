function login(){
 location.href = 'https://id.twitch.tv/oauth2/authorize?client_id=0c36td77t9i3e1npj8gy6req93567o&redirect_uri=https://uptextv.com/redirectAuth.html&response_type=code&scope=user:read:email&claims={"id_token":{"email":null,"email_verified":null},"userinfo":{"picture":null}}';   
}