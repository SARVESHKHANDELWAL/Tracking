// const api_key = "ee824fdbac6d880a2b41f84730a7fefd63d530bd";  //(vi07_dhrutik)
// const api_key ="e2fca1cd5c1abbd410f5d8780c11043243a50baf"; (PS07_SARVESH)
   const api_key = "42387f68ab1ad790c7a1c3b0161cf8f92161c85e"; //(vi07_sarvesh)

 const api_url = "https://services.marinetraffic.com/api/etatoport/" + api_key + "?protocol=json&msgtype=extended&v=1";

// const api_url = "https://services.marinetraffic.com/api/voyageforecast/" + api_key;
// const api_url = "https://services.marinetraffic.com/api/vfcshipment/" + api_key;
// const api_url = "https://services.marinetraffic.com/api/exportvessel/" + api_key + "/?v=1&timespan=2&protocol=json&msgtype=full";

// mmsi = 441582000
// port = 5496


async function getapi(url) {
  
  // const shipment_id = document.getElementById("shipmentId").value;
  // url += "&shipid=" + shipment_id;
  const shipment_id = document.getElementById("shipmentId").value;
  const port_id = document.getElementById("portId").value;
  url += "&mmsi=" + shipment_id + "&portid=" + port_id;

  if(shipment_id == null || port_id == null || shipment_id == "" || port_id == ""){
    console.log("MMSI Id and Port Id both are  required");
    alert("MMSI Id and Port Id both are  required");
    return;
  }

  // console.log(shipment_id, port_id);
  // console.log(url);
  
  const response = await fetch(url);  
  var json_data = await response.json();

  // var data = ['420760', '441582000', '9256987', '2736', 'ULSAN', 'KRUSN', '2022-03-28 00:21:00', 'FUJAIRAH', 'AEFJR', '2022-07-02 09:50:58', '5554', '8443', '149', '110', '209', 'IN_BALLAST', 'LINESTRING (69.6707 16.1695, 44.1886 12.5997, 44.1…3147 23.6863, -75.3153 23.6861, -75.7646 23.5234)', '', 0, 0];

  var keys = ["SHIP_ID","MMSI","IMO","LAST_PORT_ID","LAST_PORT","LAST_PORT_UNLOCODE","LAST_PORT_TIME","NEXT_PORT_NAME","NEXT_PORT_UNLOCODE","ETA_PORT_NAME","ETA_PORT_UNLOCODE","ETA_CALC","DISTANCE_TRAVELLED","DISTANCE_TO_GO","SPEED_CALC","DRAUGHT","DRAUGHT_MAX","LOAD_STATUS_NAME","ROUTE","ETD_CALC","TIME_ANCH","TIME_PORT"]; 
  var data = json_data[0];

  console.log(data);
  
  for (var i = 0; i < data.length; i++){
    var tr = document.createElement('tr');    
    var td1 = document.createElement('td');
    var td2 = document.createElement('td');
    td1.innerHTML = keys[i];
    td2.innerHTML = data[i];
    tr.appendChild(td1);
    tr.appendChild(td2);
    document.getElementById('data').appendChild(tr);
  }
}

function fetch_details(){
  console.log("fetching details ...");
  getapi(api_url);
}
