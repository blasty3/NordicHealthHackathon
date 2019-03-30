import React, { Component } from 'react'
import {Text, ScrollView, View , Button} from 'react-native'


// Styles
export default class ConnectScreen extends Component {

  constructor() {
    super()
    this.state = {
        noiseLevelData: [],
        heartRate: [],
        icelandData: ""  //can be converted to object with JSON.parse?
    }
   }

  render () {
    return (
      <ScrollView style={{flex:1}}>
          <Text>ConnectScreen</Text>
          <Text> HealthResults {this.state.icelandData}  </Text>
          <Text> NoiseResults {this.state.noiseLevelData}  </Text>
          <Button title="IcelandHealth" onPress = {this.GetIcelandHealth}>  </Button>
          <Button title="NoiseData" onPress = {this.GetNoiseEnvironment}>  </Button>
      </ScrollView>
    )
  }

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
    Format results :
     {
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
    /*
     var dataPromise = helper.GetPatientDataFromIceland('0206929999');

     Promise.all(dataPromise).then(function(value){

          this.setState({icelandData: this.state.icelandData.concat(value)});

     });

     */

     

  }
  

}

// Connect to Iceland Directorate of Health API, obtain patient data 
//patientID = 0206929999

/*

  var dweet_prom1 = fetch(url).then(function(response) {
				if (!response.ok) {
					EnableSearchButton();
					throw Error(response.statusText);
				}
				return response;})
				.then((response) => response.json())
					.then(function(data){

						return data;


			 })

			 all_Query_Proms.push(dweet_prom1);

			 all_Query_Proms.push(Promise.all([dweet_prom1]).then(function(values){

*/


