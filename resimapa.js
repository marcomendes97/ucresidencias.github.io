
        // Initialize and add the map
        function initMap() {
          // The location of Uluru
          var uluru = {lat: 40.20564, lng: -8.41955};
          var alegria = {lat: 40.20659, lng:  -8.42813};
          // The map, centered at Uluru
          var map = new google.maps.Map(
              document.getElementById('mapa'), {zoom: 14, center: uluru});
          // The marker, positioned at Uluru
          
          var marker = new google.maps.Marker({position: alegria, map: map});

          var infowindow = new google.maps.infowindow({
              content:"localização1"
          });
          infowindow.open(map, marker);
        }
          
            <script async defer
            src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBgDWH_VZSd0SftIOlCXE5jbpDYaYV6nDw&callback=initMap">
            </script>



        function openNav() {
                document.getElementById("mySidenav").style.width = "100%";
            }
            
            function closeNav() {
                document.getElementById("mySidenav").style.width = "0";
            }
         
