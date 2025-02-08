# Weather App 🌤️

Aplicación del clima hecha con React, que permite buscar una ciudad y obtener su clima actual y el pronóstico horario para la semana.

## 🚀 Características

- Búsqueda de ciudad con autocompletado.
- Obtención de coordenadas a partir del nombre de la ciudad.
- Consulta del clima actual y pronósticos usando las coordenadas.
- Pronóstico detallado por horas y días.
- Optimización con `useCallback` y `useMemo` para evitar renders innecesarios.

## 📡 APIs utilizadas

- **API de coordenadas**: Convierte un nombre de ciudad en latitud y longitud.
- **API del clima**: Obtiene el clima actual y los pronósticos a partir de coordenadas.