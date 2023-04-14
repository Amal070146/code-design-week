import React from 'react'


const map = () => {
    var latlng = [
      {
        country: "Albania",
        alpha2: "AL",
        alpha3: "ALB",
        num: 8,
        lat: 10.371594187526886,
        lng: 76.30393146547652,
        img: `https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg`,
      },
      {
        country: "Algeria",
        alpha2: "DZ",
        alpha3: "DZA",
        num: 12,
        lat: 10.370878597493242,
        lng: 76.30415595989462,
        img: `https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg`,
      },
      {
        country: "American Samoa",
        alpha2: "AS",
        alpha3: "ASM",
        num: 16,
        lat: 10.373497817477768,
        lng: 76.30593153666516,
        img: `https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg`,
      },
      {
        country: "Andorra",
        alpha2: "AD",
        alpha3: "AND",
        num: 20,
        lat: 42.5,
        lng: 1.6,
        img: `https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg`,
      },
      {
        country: "Angola",
        alpha2: "AO",
        alpha3: "AGO",
        num: 24,
        lat: -12.5,
        lng: 18.5,
        img: `https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg`,
      },
      {
        country: "Anguilla",
        alpha2: "AI",
        alpha3: "AIA",
        num: 660,
        lat: 18.25,
        lng: -63.1667,
        img: `https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg`,
      },
      {
        country: "Antarctica",
        alpha2: "AQ",
        alpha3: "ATA",
        num: 10,
        lat: -90,
        lng: 0,
        img: `https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg`,
      },
      {
        country: "Antigua and Barbuda",
        alpha2: "AG",
        alpha3: "ATG",
        num: 28,
        lat: 17.05,
        lng: -61.8,
        img: `https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg`,
      },
      {
        country: "Argentina",
        alpha2: "AR",
        alpha3: "ARG",
        num: 32,
        lat: -34,
        lng: -64,
        img: `https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg`,
      },
      {
        country: "Armenia",
        alpha2: "AM",
        alpha3: "ARM",
        num: 51,
        lat: 40,
        lng: 45,
        img: `https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg`,
      },
      {
        country: "Aruba",
        alpha2: "AW",
        alpha3: "ABW",
        num: 533,
        lat: 12.5,
        lng: -69.9667,
        img: `https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg`,
      },
      {
        country: "Australia",
        alpha2: "AU",
        alpha3: "AUS",
        num: 36,
        lat: -27,
        lng: 133,
        img: `https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg`,
      },
    ];
    const popupHtml = (image) => {
      return `
      <div style="display:flex;flex-direction:column">
        <span>Hello world!</span>
        <span>I am a popup.</span>
        <img src="${latlng[i].img}">
      </div>
      `;
    };
    var map = L.map("map").setView([10.373497817477768, 76.30593153666516], 15);
    L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 19,
      attribution:
        '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    }).addTo(map);
    for (var i = 0; i < latlng.length; i++) {
      var marker = L.marker([latlng[i].lat, latlng[i].lng]).addTo(map);
      marker.bindPopup(popupHtml(latlng[i].img));
    }
    const options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0,
    };

    function success(pos) {
      const crd = pos.coords;
      var marker = L.marker([crd.latitude, crd.longitude]).addTo(map);
    }

    function error(err) {
      console.warn(`ERROR(${err.code}): ${err.message}`);
    }
    window.addEventListener("load", (event) => {
      navigator.geolocation.getCurrentPosition(success, error, options);
    });
  return (
    <div id="map"></div>
  )
}

export default map