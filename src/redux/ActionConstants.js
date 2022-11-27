
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
}

const PrescribeType = {
    GET_PRESCRIBE: 'GET_PRESCRIBE',
    GET_PRESCRIBE_SUCCESS: 'GET_PRESCRIBE_SUCCESS',
    GET_PRESCRIBE_FAILURE: 'GET_PRESCRIBE_FAILURE',
    
    GET_PRESCRIBES: 'GET_PRESCRIBES',
    GET_PRESCRIBES_SUCCESS: 'GET_PRESCRIBES_SUCCESS',
    GET_PRESCRIBES_FAILURE: 'GET_PRESCRIBES_FAILURE',
}

const UserType = {
    GET_USER: 'GET_USER',
    GET_USER_SUCCESS: 'GET_USER_SUCCESS',
    GET_USER_FAILURE: 'GET_USER_FAILURE',
    
    GET_USERS: 'GET_USERS',
    GET_USERS_SUCCESS: 'GET_USERS_SUCCESS',
    GET_USERS_FAILURE: 'GET_USERS_FAILURE',

}

const ResultType = {
    GET_RESULT: 'GET_RESULT',
    GET_RESULT_SUCCESS: 'GET_RESULT_SUCCESS',
    GET_RESULT_FAILURE: 'GET_RESULT_FAILURE',

    GET_RESULTS: 'GET_RESULTS',
    GET_RESULTS_SUCCESS: 'GET_RESULTS_SUCCESS',
    GET_RESULTS_FAILURE: 'GET_RESULTS_FAILURE',    
}

const ModalType = {
    RESULT_MODAL_ON: "RESULT_MODAL_ON",
    RESULT_MODAL_OFF: "RESULT_MODAL_OFF"
}

const DateSearchType = {
    GET_SEARCH_RESULTS: 'GET_SEARCH_RESULT',
    GET_SEARCH_RESULTS_SUCCESS: 'GET_SEARCH_RESULT_SUCCESS',
    GET_SEARCH_RESULTS_FAILURE: 'GET_SEARCH_RESULT_FAILURE'
}

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
    ...UpdateConclusionType
}


export default Types;