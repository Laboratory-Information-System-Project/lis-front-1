import Types from "../../ActionConstants";
import * as CollectingApi from "../../../api/CollectingApi";
//TODO 1

const PatientActions = {
    getPatientData: (patientName, visitStatus, searchCon) => async (dispatch) => {
        // dispatch({type: Types.GET_PATIENT_INFO});
        try {
            const result = await CollectingApi.findPatientInfo(patientName, visitStatus, searchCon);

            console.log(result);

            if (!result) throw new Error("can not read patient");

            dispatch({
                type: Types.GET_PATIENT_INFO,
                payload: result.data
            })
        } catch (error) {
            // console.log(error.toString());
        }
    },
}

export default PatientActions;
