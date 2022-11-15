
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

const InsertResultType ={
    GET_INSERTRESULTS: 'GET_INSERTRESULTS',
    GET_INSERTRESULTS_SUCCESS: 'GET_INSERTRESULTS_SUCCESS',
    GET_INSERTRESULTS_FAILURE: 'GET_INSERTRESULTS_FAILURE'
}

const RealInsertType ={
    GET_REALINSERT: 'GET_REALINSERT',
    GET_REALINSERT_SUCCESS: 'GET_REALINSERT_SUCCESS',
    GET_REALINSERT_FAILURE: 'GET_REALINSERT_FAILURE'
}

const ChangeResultInfoType={
    GET_CHANGERESULT: 'GET_CHANGERESULT',
    GET_CHANGERESULT_SUCCESS: 'GET_CHANGERESULT_SUCCESS',
    GET_CHANGERESULT_FAILURE: 'GET_CHANGERESULT_FAILURE'
}

const Types = {
    ...ResultType,
    ...ModalType,
    ...DateSearchType,
    ...UnsuitableType,
    ...PrescribeType,
    ...UserType,
    ...InsertResultType,
    ...RealInsertType,
    ...ChangeResultInfoType
}


export default Types;