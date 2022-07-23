export default async function(loc) {
  let link = `https://api.openweathermap.org/data/2.5/weather?q=${loc}&units=metric&appid=30d40237d84197b89eb676962a53e8c6`

  let response = await fetch(link);
  if (response.status == 200) {
    let json = await response.json();
    return json;
  }
}