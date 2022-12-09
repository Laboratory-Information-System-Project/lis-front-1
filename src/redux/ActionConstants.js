const UnsuitableType = {
    GET_SAMPLE: 'GET_SAMPLE',
    GET_SAMPLE_SUCCESS: 'GET_SAMPLE_SUCCESS',
    GET_SAMPLE_FAILURE: 'GET_SAMPLE_FAILURE',

    GET_SAMPLES: 'GET_SAMPLES',
    GET_SAMPLES_SUCCESS: 'GET_SAMPLES_SUCCESS',
    GET_SAMPLES_FAILURE: 'GET_SAMPLES_FAILURE',

    GET_UNSUITABLE_SAMPLE: 'GET_UNSUITABLE_SAMPLE',
    GET_UNSUITABLE_SAMPLE_SUCCESS: 'GET_UNSUITABLE_SAMPLE_SUCCESS',
    GET_UNSUITABLE_SAMPLE_FAILURE: 'GET_UNSUITABLE_SAMPLE_FAILURE',

    GET_UNSUITABLE_SAMPLES: 'GET_UNSUITABLE_SAMPLES',
    GET_UNSUITABLE_SAMPLES_SUCCESS: 'GET_UNSUITABLE_SAMPLES_SUCCESS',
    GET_UNSUITABLE_SAMPLES_FAILURE: 'GET_UNSUITABLE_SAMPLES_FAILURE',

    POST_UNSUITABLE_SAMPLE: 'POST_UNSUITABLE_SAMPLE',
    POST_UNSUITABLE_SAMPLE_SUCCESS: 'POST_UNSUITABLE_SAMPLE_SUCCESS',
    POST_UNSUITABLE_SAMPLE_FAILURE: 'POST_UNSUITABLE_SAMPLE_FAILURE',

    GET_UNSUITABLE_REASON: 'GET_UNSUITABLE_REASON',
    GET_UNSUITABLE_REASON_SUCCESS: 'GET_UNSUITABLE_REASON_SUCCESS',
    GET_UNSUITABLE_REASON_FAILURE: 'GET_UNSUITABLE_REASON_FAILURE',
}

const PrescribeType = {
    GET_PRESCRIBE: 'GET_PRESCRIBE',
    GET_PRESCRIBE_SUCCESS: 'GET_PRESCRIBE_SUCCESS',
    GET_PRESCRIBE_FAILURE: 'GET_PRESCRIBE_FAILURE',

    GET_PRESCRIBES: 'GET_PRESCRIBES',
    GET_PRESCRIBES_SUCCESS: 'GET_PRESCRIBES_SUCCESS',
    GET_PRESCRIBES_FAILURE: 'GET_PRESCRIBES_FAILURE',
};

const UserType = {
    GET_USER: 'GET_USER',
    GET_USER_SUCCESS: 'GET_USER_SUCCESS',
    GET_USER_FAILURE: 'GET_USER_FAILURE',

    GET_USERS: 'GET_USERS',
    GET_USERS_SUCCESS: 'GET_USERS_SUCCESS',
    GET_USERS_FAILURE: 'GET_USERS_FAILURE',
};

const ResultType = {
    GET_RESULT: 'GET_RESULT',
    GET_RESULT_SUCCESS: 'GET_RESULT_SUCCESS',
    GET_RESULT_FAILURE: 'GET_RESULT_FAILURE',

    GET_RESULTS: 'GET_RESULTS',
    GET_RESULTS_SUCCESS: 'GET_RESULTS_SUCCESS',
    GET_RESULTS_FAILURE: 'GET_RESULTS_FAILURE',

    POST_RESULT_SMS: 'POST_RESULT_SMS',
    POST_RESULT_SMS_SUCCESS: 'POST_RESULT_SMS_SUCCESS',
    POST_RESULT_SMS_FAILURE: 'POST_RESULT_SMS_FAILURE',
};

const ModalType = {
    RESULT_MODAL_ON: 'RESULT_MODAL_ON',
    RESULT_MODAL_OFF: 'RESULT_MODAL_OFF',
};

const DateSearchType = {
    GET_SEARCH_RESULTS: 'GET_SEARCH_RESULT',
    GET_SEARCH_RESULTS_SUCCESS: 'GET_SEARCH_RESULT_SUCCESS',
    GET_SEARCH_RESULTS_FAILURE: 'GET_SEARCH_RESULT_FAILURE',
};

const InsertResultType = {
    GET_INSERTRESULTS: 'GET_INSERTRESULTS',
    GET_INSERTRESULTS_SUCCESS: 'GET_INSERTRESULTS_SUCCESS',
    GET_INSERTRESULTS_FAILURE: 'GET_INSERTRESULTS_FAILURE',
};

const RealInsertType = {
    GET_REALINSERT: 'GET_REALINSERT',
    GET_REALINSERT_SUCCESS: 'GET_REALINSERT_SUCCESS',
    GET_REALINSERT_FAILURE: 'GET_REALINSERT_FAILURE',
};

const ChangeResultInfoType = {
    GET_CHANGERESULT: 'GET_CHANGERESULT',
    GET_CHANGERESULT_SUCCESS: 'GET_CHANGERESULT_SUCCESS',
    GET_CHANGERESULT_FAILURE: 'GET_CHANGERESULT_FAILURE',
};
const SearchRegisterType={
    GET_SEARCH_REGISTER: 'GET_SEARCH_REGISTER',
    GET_SEARCH_REGISTER_SUCCESS: 'GET_SEARCH_REGISTER_SUCCESS',
    GET_SEARCH_REGISTER_FAILURE: 'GET_SEARCH_REGISTER_FAILURE'
}

const SearchInspectionType={
    GET_SEARCH_INSPECTION: 'GET_SEARCH_INSPECTION',
    GET_SEARCH_INSPECTION_SUCCESS: 'GET_SEARCH_INSPECTION_SUCCESS',
    GET_SEARCH_INSPECTION_FAILURE: 'GET_SEARCH_INSPECTION_FAILURE'
}

const InsertConclusionType={
    POST_INSERT_CONCLUSION : 'POST_INSERT_CONCLUSION',
    POST_INSERT_CONCLUSION_SUCCESS: 'POST_INSERT_CONCLUSION_SUCCESS',
    POST_INSERT_CONCLUSION_FAILURE: 'POST_INSERT_CONCLUSION_FAILURE'
}
const ListinfoplusType = {
    GET_SEARCH_RESULT_COLLET: 'GET_SEARCH_RESULT_COLLET',
    GET_SEARCH_RESULT_COLLET_SUCCESS: 'GET_SEARCH_RESULT_COLLET_SUCCESS',
    GET_SEARCH_RESULT_COLLET_FAILURE: 'GET_SEARCH_RESULT_COLLET_FAILURE',
    GET_SEARCH_RESULT_PATIENT: 'GET_SEARCH_RESULT_PATIENT',
    GET_SEARCH_RESULT_PATIENT_SUCCESS: 'GET_SEARCH_RESULT_PATIENT_SUCCESS',
    GET_SEARCH_RESULT_PATIENT_FAILURE: 'GET_SEARCH_RESULT_PATIENT_FAILURE'
}

const SearchConclusionType={
    GET_SEARCH_CONCLUSION: 'GET_SEARCH_CONCLUSION',
    GET_SEARCH_CONCLUSION_SUCCESS: 'GET_SEARCH_CONCLUSION_SUCCESS',
    GET_SEARCH_CONCLUSION_FAILURE: 'GET_SEARCH_CONCLUSION_FAILURE'
}

const UpdateConclusionType={
    PUT_UPDATE_CONCLUSION: 'PUT_UPDATE_CONCLUSION',
    PUT_UPDATE_CONCLUSION_SUCCESS: 'PUT_UPDATE_CONCLUSION_SUCCESS',
    PUT_UPDATE_CONCLUSION_FAILURE: 'PUT_UPDATE_CONCLUSION_FAILURE'
}

const PatientInfoType={
    GET_PATIENT_INFO: 'GET_PATIENT_INFO',
    GET_USER_INFO: 'GET_USER_INFO',
    GET_PRESCRIBE_INFO: 'GET_PRESCRIBE_INFO',
    POST_NEW_BARCODE:'POST_NEW_BARCODE',
    CANCEL_BARCODE: 'CANCEL_BARCODE',
    PUT_COLLECTING_DATA:'PUT_COLLECTING_DATA',
    CANCEL_COLLECTING: 'CANCEL_COLLECTING'
}


const Types = {
    ...ResultType,
    ...ModalType,
    ...DateSearchType,
    ...UnsuitableType,
    ...PrescribeType,
    ...UserType,
    ...SearchRegisterType,
    ...SearchInspectionType,
    ...InsertConclusionType,
    ...SearchConclusionType,
    ...UpdateConclusionType,
    ...InsertResultType,
    ...RealInsertType,
    ...ChangeResultInfoType,
    ...ListinfoplusType,
    ...PatientInfoType
}

export default Types;
