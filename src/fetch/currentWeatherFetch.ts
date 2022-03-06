const currentWeatherFetch = async (lat: string,lon: string) => {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly,alerts&appid=44c8face710b95a8bc280b9e5c3cc9d0&units=metric&lang=ru`
    );
    const result = await response.json();
    return result ?? {};
  } catch (error) {
    console.error("Ошибка:", error);
  }
};

export default currentWeatherFetch;
