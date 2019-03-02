window.executeHome = () => {
  var ctx = document.getElementById("myChart").getContext("2d");
  var myChart = new Chart(ctx, {
    type: "line",
    data: {
      labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
      datasets: [
        {
          label: "# of Votes",
          data: [10, 19, 3, 5, 2, 3],
          backgroundColor: [
            "rgba(255, 99, 132, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(255, 206, 86, 0.2)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(153, 102, 255, 0.2)",
            "rgba(255, 159, 64, 0.2)"
          ],
          borderColor: [
            "rgba(255,99,132,1)",
            "rgba(54, 162, 235, 1)",
            "rgba(255, 206, 86, 1)",
            "rgba(75, 192, 192, 1)",
            "rgba(153, 102, 255, 1)",
            "rgba(255, 159, 64, 1)"
          ],
          borderWidth: 1
        }
      ]
    },
    options: {
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true
            }
          }
        ]
      }
    }
  });
};
function initMap() {
  // Map Options
  let options = {
    zoom: 8,
    center: {
      lat: 42.3601,
      lng: -71.0589
    }
  };
  // New Map
  let map = new google.maps.Map(document.getElementById("map"), options);

  // // Add Marker
  // let marker=new google.maps.Marker({
  //   position:{
  //      lat:42.4668,
  //      lng:-70.9495
  //   },
  //   map:map,
  //   icon:'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png'
  // })

  // let infoWindow=new google.maps.InfoWindow({
  //   content:'<h1>Lynn MA</h1>'
  // })

  // marker.addListener('click',()=>{
  //   infoWindow.open(map,marker);
  // })

  addMarker({
    coords: {
      lat: 42.4668,
      lng: -70.9495
    },
    iconImage:
      "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png",
    content: "<h1>Lynn MA</h1>"
  });
  addMarker({
    coords: {
      lat: 42.8584,
      lng: -70.93
    },
    content: "<h1>Amesbury MA</h1>"
  });
  addMarker({
    coords: {
      lat: 42.7762,
      lng: -71.0773
    }
  });
  // Add Marker Function
  function addMarker(props) {
    console.log(props);
    let marker = new google.maps.Marker({
      position: props.coords,
      map: map,
      icon: props.iconImage
    });

    // Check content
    if (props.content) {
      let infoWindow = new google.maps.InfoWindow({
        content: props.content
      });

      marker.addListener("click", () => {
        infoWindow.open(map, marker);
      });
    }
  }
}
