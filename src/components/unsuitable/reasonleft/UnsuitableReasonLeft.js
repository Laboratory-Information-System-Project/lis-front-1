import React, { useCallback, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import TextSnippetOutlinedIcon from "@mui/icons-material/TextSnippetOutlined";  
import Modal from "../modal/Modal";
import { ToastContainer, toast } from 'react-toastify';
import SelectUserModal from "../modal/SelectUserModal";
import UnsuitableActions from '../../../redux/modules/Unsuitable/UnsuitableActions';

const UnsuitableReasonLeft = ({sampleInfo, unsuitableReasonInfo}) => {

    // 모달
    const [selectUser, setSelectUser] = useState(false);
    
    // 선택한 유저 정보
    const dispatch = useDispatch();
    const {oneUserInfo} = useSelector((state)=> state.oneUserInfo);
    const {unsuitableSampleInfo} = useSelector((state) => state.unsuitableSampleInfo);

    // unsuitableSampleInfo
    const [query, setQuery] = useState('');
    const [selectedReason, setSelectedReason] = useState('');
    const [sampleDetail, setSampleDetail] = useState([{}]);

    const onQueryChange = useCallback ((e) => {
        setQuery(e.target.value);
    }, [query]);

    const reasonHandler = (e) => {
        setSelectedReason(e.target.value);
        console.log(e.target.value)
    }

    // 부적합사유 2로 데이터 추가
    let sampleBarcode;
    if(sampleInfo.data.barcode){
        sampleBarcode = sampleInfo.data.barcode;
    }

    const notifiedId = oneUserInfo.data.userId;

    let notificatorId = 'D003'
    let notificatorUserName = '김현민';

    const onAdd = (e) => { 
        e.preventDefault();
        // if(!notifiedId || !selectedReason || !sampleBarcode) {
        //     toast.error("부적합 검체등록 사유를 입력해주세요!", {
        //         position: "top-right",
        //         autoClose: 2000,
        //         theme: "colored",
        //         hideProgressBar: false,
        //         closeOnClick: true,
        //         pauseOnHover: true,
        //         draggable: true
        //     });
        //     return;
        // } 
        setSampleDetail([...unsuitableSampleInfo.data,
        {sampleBarcode, notifiedId, selectedReason, query, notificatorId}]);
    }

    useEffect(() => {
        dispatch(UnsuitableActions.getSample(sampleDetail));
        setQuery('');
    }, [sampleDetail]);

    return (
        <div className="unsuitable-wrap left">
            <div className="header-wrap">
                <div className="con-title">
                    <TextSnippetOutlinedIcon />
                    <p>부적합 사유</p>
                </div>
                <div>    
                    <span>{notificatorUserName}님</span>
                </div>
            </div>
            <form>
                <div className="select-reason">
                    <p>피통보자</p>
                        {oneUserInfo === undefined ?
                            <input readOnly="readOnly"  
                                    placeholder="피통보자 선택" 
                                    onClick={() => setSelectUser(!selectUser)} 
                            />:
                            <input readOnly="readOnly" 
                                    placeholder="피통보자 선택"  
                                    value={oneUserInfo.data.name} 
                                    onClick={() => setSelectUser(!selectUser)} 
                            />
                        }
                    <p>부적합 사유 선택</p>
                        <select onChange={reasonHandler}>
                            {unsuitableReasonInfo?.data?.length > 0 && unsuitableReasonInfo.data.map((item, key) => (
                                <option value={item.unsuitableReasonCode} key={key}> 
                                    {item.unsuitableReasonName}
                                </option>
                            ))}
                        </select>
                </div>
                <div className="write-reason">
                    <textarea placeholder="부적합 사유를 상세하게 작성해주세요."
                                onChange={onQueryChange}
                                value={query}   
                    ></textarea>
                    <button 
                        className="btn"
                        onClick={onAdd}
                    >추가</button>
                </div>
            </form>
            {selectUser && (
                    <Modal closeModal={() => setSelectUser(!selectUser)}>
                        <SelectUserModal closeModal={() => setSelectUser(!selectUser)}/>
                    </Modal>)}
                    <ToastContainer
                    position='top-right'
                    autoClose={2000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                />

        </div>
    );
}

export default UnsuitableReasonLeft;