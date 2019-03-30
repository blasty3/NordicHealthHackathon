


GetPatientDataFromIceland = (patientID) => {

    fetch ("http://healthapi.hc.t.is/api/PatientData/GetPatient/"+patientID)
    .then((response) => response.json())
    .then((responseJson) => {

        return responseJson;
        //return responseJson;
    })
}

Extract