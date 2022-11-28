import axios from "axios";
import { GATEWAY_URL } from "../utils/constants/Config";

export const getPrescribe = (barcode) =>{
    return axios.get(`${GATEWAY_URL}/data-service/patient/${barcode}`) // 환자 정보 조회
}

export const getCollect = (barcode)=>{
    return axios.get(`${GATEWAY_URL}/data-service/collect/${barcode}`)
}

export const insertData = ()=>{
    return axios.post(`${GATEWAY_URL}/inspection-service/insert`) //검체 접수
}