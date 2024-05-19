<template>
    <div class="map-container">
        <div id="map"></div>
    </div>
</template>
<script>
export default {
    mounted() {
        this.initializeMap();
    },
    methods: {
        initializeMap() {
            // Inicializar el mapa con la biblioteca de mapas elegida (por ejemplo, Mapbox)
            mapboxgl.accessToken = 'TU_ACCESS_TOKEN';
            const map = new mapboxgl.Map({
                container: 'map',
                style: 'mapbox://styles/mapbox/streets-v11',
                center: [-74.5, 40], // Coordenadas iniciales del mapa
                zoom: 9 // Nivel de zoom inicial
            });

            // Obtener la posición actual del usuario
            navigator.geolocation.getCurrentPosition(position => {
                const { latitude, longitude } = position.coords;

                // Mostrar un marcador en la posición actual del usuario
                new mapboxgl.Marker().setLngLat([longitude, latitude]).addTo(map);
            });
        }
    }
};
</script>

<style>
.map-container {
    width: 100%;
    height: 400px;
}

#map {
    width: 100%;
    height: 100%;
}
</style>
