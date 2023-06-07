export const KAKAO_CLIENT_ID = process.env.NEXT_PUBLIC_KAKAO_CLIENT_ID;
export const OAUTH_REDIRECT_URI = "http://localhost:3000/test/kakao";
export const KAKAO_TEST_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${KAKAO_CLIENT_ID}&redirect_uri=${OAUTH_REDIRECT_URI}&response_type=code&scope=account_email,`;
export const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize`;
export const KAKAO_AUTH_LOGOUT = `https://kauth.kakao.com/oauth/logout?client_id=${KAKAO_CLIENT_ID}&logout_redirect_uri=${OAUTH_REDIRECT_URI}`;
