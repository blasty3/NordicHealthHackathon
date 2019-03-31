


class Helper {

  async GetPatientDataFromIceland(patientID) {

        fetch ("http://healthapi.hc.t.is/api/PatientData/GetPatient/"+patientID)
        .then((response) => response.json())
        .then((data) => {
           
          
          //var toReturn = [];

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
                      
                        result.treatmentDet = firstPlan[i]["treatment"][0];
    
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
    
               // return toReturn.push(result);
                
            //return responseJson;
        })
    }

    //ExtractDataFromIceland(jsonData){

     

      //}

      //}



    // Upload to personal health measurement to Kanta
    // Patient ID already available in :  352186dd-8f66-4e7d-a7fd-9e257d4b7080

    /*
        Data structure template


    */

    UploadObservationsKanta(){


      fetch("../App/DummyHealthData/ObservationData.json")
      .then((response) => response.json())
      .then((responseJson) => {

        for(i=0;i<responseJson.length;i++){

          fetch ("http://fhirsandbox.kanta.fi/phr-resourceserver/baseStu3/Observation", {
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(responseJson[i])
          });

        }
        
      })

        

      
      }

  GetAllPatientObservationsKanta(patientID){
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
    

}

const helper = new Helper();

export default helper;
// Connect to Iceland Directorate of Health API, obtain patient data 
//patientID = 0206929999
