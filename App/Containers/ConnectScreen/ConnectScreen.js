import React, { Component } from 'react'
import {Text, View } from 'react-native'

// Styles
export default class ConnectScreen extends Component {

  constructor() {
    super()
    this.state = {
        noiseLevelData: [],
        heart: [],
        prescription: {},
        treatmentPlan: {},
        diagnosisData: []
    }
   }

  render () {
    return (
      <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
          <Text>ConnectScreen</Text>
      </View>
    )
  }
}

// Connect to Iceland Directorate of Health API, obtain patient data 
//patientID = 0206929999


export function GetPatientDataFromIceland(patientID) {

    fetch ("http://healthapi.hc.t.is/api/PatientData/GetPatient/"+patientID)
    .then((response) => response.json())
    .then((responseJson) => {

        return responseJson;
        //return responseJson;
    })
}

export function ExtractDataFromIceland(jsonData){

  var result = {}

   var allData =  jsonData.returnData["treatmentPlans"];

   result.treatmentStartTime = jsonData.returnData["treatmentPlans"]["startDate"];
   result.treatmentEndTime = jsonData.returnData["treatmentPlans"]["endDate"];
   
   //take the first plan only for now
        //array
        var firstPlan = allData[0]["treatmentItems"];

        for (i=0; i<firstPlan.length;i++){
            
            if( firstPlan[i]["treatmentType"] === "Non-pharmacological"){
                result.treatmentDescription = firstPlan[i]["treatmentDescription"];
              
                result.treatmentDet = firstPlan[i]["treatment"][0];

                result.treatmentPlanType = allData[0]["type"]
               

            }

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

  }

   //}



// Upload to personal health measurement to Kanta
// Patient ID already available in :  352186dd-8f66-4e7d-a7fd-9e257d4b7080

/*
    Data structure template


*/

export function UploadObservationsKanta(patientID, arrayOfMeasurements){

    for(i=0;i<arrayOfMeasurements.length;i++){

    }

  }

export function GetAllPatientObservationsKanta(patientID){
  fetch ("http://fhirsandbox.kanta.fi/phr-resourceserver/baseStu3/Observation?patient="+patientID+"&_pretty=true")
  .then((response) => response.json())
  .then((responseJson) => {

      return responseJson;
      //return responseJson;
  })
}

//Kaapelinaukio Helsinki Environmental Noise Sensor, unit in decibel (dB)
/*
    0 : time (epoch time)
    1 : mean (decibel)
*/
export function GetNoiseEnvironment(){
    fetch ("https://iot.fvh.fi/grafana/api/datasources/proxy/21/query?db=sentilo&q=SELECT%20mean(%22dBA%22)%20FROM%20%22LAeq%22%20WHERE%20(%22dev-id%22%20%3D%20%27TA120-T246182%27)%20AND%20time%20%3E%3D%20now()%20-%2090d%20GROUP%20BY%20time(2h)%20fill(linear)%3BSELECT%20mean(%22dBA%22)%20FROM%20%22LAeq1s%22%20WHERE%20(%22dev-id%22%20%3D%20%27TA120-T246182%27)%20AND%20time%20%3E%3D%20now()%20-%2090d%20GROUP%20BY%20time(2h)%20fill(linear)&epoch=ms")
    .then((response) => response.json())
    .then((responseJson) => {

      return responseJson;
      //return responseJson;
  })
}

