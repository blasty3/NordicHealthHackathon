import React, { Component } from 'react'
import { Text, ScrollView, DeviceEventEmitter, Button, TouchableOpacity } from 'react-native'

import {GaiotaCareNativeBridge} from '../../GaiotaCareBridge'
import Events from '../../Constants/Events'
import Utils from '../../Utils/Utils'

import kantaFile from '../../DummyHealthData/ObservationData.json'


// Styles
export default class ConnectScreen extends Component {

  constructor() {
    super()
    this.state = {
        noiseLevelData: [],
        kantaMeasurement: [],
        kantaResp: "",
        icelandData: ""  //can be converted to object with JSON.parse?
    }

    DeviceEventEmitter.addListener(Events.USER_AUTH_ACCEPT, this.onUserAuthAccept)
    DeviceEventEmitter.addListener(Events.USER_AUTH_REJECT, this.onUserAuthReject)
    DeviceEventEmitter.addListener(Events.FILE_DATA, this.onReceiveData)
   }

  render () {
    return (
      <ScrollView style={{flex:1}}>
          <Text>ConnectScreen</Text>
          <Text> HealthResults {this.state.icelandData}  </Text>
          <Text> NoiseResults {this.state.noiseLevelData}  </Text>
          <Text> KantaResp {this.state.kantaResp}  </Text>
           <Text> KantaData {this.state.kantaMeasurement}  </Text>
          <Button title="IcelandHealth" onPress = {this.GetIcelandHealth}>  </Button>
          <Button title="NoiseData" onPress = {this.GetNoiseEnvironment}>  </Button>
          <Button title="UploadToKanta" onPress = {this.UploadObservationsToKanta}>  </Button>
          <Button title="DownloadFromKanta" onPress = {() => {this.GetAllPatientObservationsKanta("352186dd-8f66-4e7d-a7fd-9e257d4b7080")}}>  </Button>
        <TouchableOpacity
          onPress={() => {
            this.onConnectDigiMe()
          }}
        >
          <Text>Connect digi.me</Text>
        </TouchableOpacity>
      </ScrollView>
    )
  }

  onConnectDigiMe () {
    GaiotaCareNativeBridge.initSDK();
  }

  onUserAuthAccept (e: Event) {
    Utils.showMessage("Authenticate successfully, getting data...")
  }

  onUserAuthReject (e: Event) {
    Utils.showMessage("Authenticate rejected: " + e)
  }

  onReceiveData (e: Event) {
    Utils.showMessage("Data: " + e)
  }

// Connect to Iceland Directorate of Health API, obtain patient data
//patientID = 0206929999


  GetNoiseEnvironment = () => {
    fetch ("https://iot.fvh.fi/grafana/api/datasources/proxy/21/query?db=sentilo&q=SELECT%20mean(%22dBA%22)%20FROM%20%22LAeq%22%20WHERE%20(%22dev-id%22%20%3D%20%27TA120-T246182%27)%20AND%20time%20%3E%3D%20now()%20-%2090d%20GROUP%20BY%20time(2h)%20fill(linear)%3BSELECT%20mean(%22dBA%22)%20FROM%20%22LAeq1s%22%20WHERE%20(%22dev-id%22%20%3D%20%27TA120-T246182%27)%20AND%20time%20%3E%3D%20now()%20-%2090d%20GROUP%20BY%20time(2h)%20fill(linear)&epoch=ms")
    .then((response) => response.json())
    .then((jsonResult) => {
        //array of Objects

        /*
          0 : time (epoch)
          1 : average noise (decibel)

        */
        var noiseData = jsonResult.results[0].series[0]["values"]

        this.setState({
          noiseLevelData: noiseData
        })

      //return responseJson;
  })
}

/*
    // Connect to Iceland Directorate of Health API, obtain patient data 
//patientID = 0206929999

    Format results :
     {
          hospitalVisitHistory : [{
                "id": 14692,
               "appointmentId": 76138,
               "arrivalDate": "2019-03-07T10:13:10.984Z",
                "healthcareProvider": "Halldóra Vagnsdóttir",
              "typeOfHealthcare": "Interview",
              "location": "Landspítalinn Hringbraut"
      },
      {
              "id": 15014,
              "appointmentId": 77851,
              "arrivalDate": "2019-03-11T12:03:10.984Z",
            "healthcareProvider": "Landspítalinn Hringbraut",
            "typeOfHealthcare": "Diagnostic imaging",
            "location": "Röntgen Domus"
      }]
          treatmentStartTime :
          treatmentEndTime :
          diagnosisData :
          treatmentDescription :
          treatmentDetail :
          treatmentPlanType :
          medication : {
                  medicineName :
                            medicineForm =
                            medicineStrength =
                            medicineStrengthUnit =
                            instructions =
                        }
    }

*/

  GetIcelandHealth = () => {

    fetch ("http://healthapi.hc.t.is/api/PatientData/GetPatient/"+"0206929999")

    .then((response) => response.json())
        .then((data) => {

          var result= {};

          var allData =  data.returnData["treatmentPlans"];

          result.hospitalVisitHistory= data.returnData["arrivalData"];
          result.treatmentStartTime = data.returnData["treatmentPlans"]["startDate"];
          result.treatmentEndTime = data.returnData["treatmentPlans"]["endDate"];
          result.diagnosisData = data.returnData["diagnosisData"];

          //take the first plan only for now
                //array
                var firstPlan = allData[0]["treatmentItems"];

                for (i=0; i<firstPlan.length;i++){

                    if( firstPlan[i]["treatmentType"] === "Non-pharmacological"){



                        result.treatmentDescription = firstPlan[i]["treatmentDescription"];

                        result.treatmentDetail = firstPlan[i]["treatment"][0];

                        result.treatmentPlanType = allData[0]["type"]


                    } else

                    if(firstPlan[i]["treatmentType"] === "Pharmacological"){

                        for (j=0; j<firstPlan[i]["treatment"].length ; j++ ){
                            result.medication = {}
                            result.medication.medicineName = firstPlan[i]["treatment"][j]["description"]
                            result.medication.medicineForm = firstPlan[i]["treatment"][j]["form"]
                            result.medication.medicineStrength = firstPlan[i]["treatment"][j]["strength"]
                            result.medication.medicineStrengthUnit = firstPlan[i]["treatment"][j]["unit"]
                            result.medication.instructions = firstPlan[i]["treatment"][j]["instructions"]

                        }

                    }


                }



            this.setState({
                icelandData: JSON.stringify(result)
            })

        })
    
  }

  UploadObservationsToKanta = () =>{

  
    
  //  fetch("../../App/DummyHealthData/ObservationData.json")
  //  .then((response) => response.json())
  //  .then((responseJson) => {

      for(i=0;i<kantaFile.length;i++){

        fetch ("http://fhirsandbox.kanta.fi/phr-resourceserver/baseStu3/Observation", {
          method: 'POST',
          
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          
          body: JSON.stringify(kantaFile.Observations[i])
        }).then((response) => {
      

          })

       

      }

      
      
    //})
    

      

    
    }


    //Kanta patient ID : 352186dd-8f66-4e7d-a7fd-9e257d4b7080
  GetAllPatientObservationsKanta(patientID) {
    fetch ("http://fhirsandbox.kanta.fi/phr-resourceserver/baseStu3/Observation?patient="+patientID+"&_pretty=true")
    .then((response) => response.json())
    .then((responseJson) => {

        var arr = [];

        for (i=0;i<responseJson["total"];i++){

          var time = responseJson["entry"][i]["resource"]["effectiveDateTime"];
          var value = responseJson["entry"][i]["resource"]["valueQuantity"]["value"];

          arr.push(JSON.stringify({
              time : time,
              value : value
          }));

        }

        this.setState({
          kantaMeasurement: arr
        })

        //return responseJson;
    })
  }

  
  

}




