// we did not use Capital letter here because it is not component
//when we create components of our app we have to use capital letter

//we will use it in click to take user to auth page

export const authEndpoint = "https://accounts.spotify.com/authorize";
//after authentication is successful it will take us back to our home page
const redirectUri = "http://localhost:3000/";

const clientId = "7589e94dacab45a0bea5618c24004604";

//scope means that we are gonna get allowance for specific scopes and show it

const scopes = [
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
  "user-modify-playback-state",
];

export const getTokenFromResponse = () => {
  return window.location.hash
    .substring(1)
    .split("&")
    .reduce((initial, item) => {
      var parts = item.split("=");
      initial[parts[0]] = decodeURIComponent(parts[1]);

      return initial;
    }, {});
};

//backtick using becaues we wanna use javascript and string together
export const accessUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;
