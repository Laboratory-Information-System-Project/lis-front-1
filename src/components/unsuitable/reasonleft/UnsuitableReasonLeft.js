import React, { useCallback, useEffect, useState, memo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import TextSnippetOutlinedIcon from "@mui/icons-material/TextSnippetOutlined";  
import Modal from "../modal/Modal";
import { ToastContainer, toast } from 'react-toastify';
import SelectUserModal from "../modal/SelectUserModal";
import UnsuitableActions from '../../../redux/modules/Unsuitable/UnsuitableActions';

const UnsuitableReasonLeft = ({unsuitableInfo}) => {

    // 모달
    const [selectUser, setSelectUser] = useState(false);
    
    // 선택한 유저 정보
    const dispatch = useDispatch();
    const {oneUserInfo} = useSelector((state)=> state.oneUserInfo);
    const {unsuitableSampleInfo} = useSelector((state) => state.unsuitableSampleInfo);

    // selectBox
    const selectCategoryList = ["CU", "SU"];
    const selectReasonList = ["피가 적음", "피가 응고됨", "환자 몸이 안좋음", "금식인데 밥먹고옴", "아파요"];
    
    // unsuitableSampleInfo
    const [query, setQuery] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('');
    const [selectedReason, setSelectedReason] = useState('');
    const [sampleDetail, setSampleDetail] = useState([{}]);

    const onQueryChange = useCallback ((e) => {
        setQuery(e.target.value);
    }, [query]);

    const categoryHandler = (e) => {
        setSelectedCategory(e.target.value);
    }

    const reasonHandler = (e) => {
        setSelectedReason(e.target.value);
    }

    // 부적합사유 2로 데이터 추가
    let sampleBarcode;
    if(unsuitableInfo?.data?.length > 0 ){
        sampleBarcode = unsuitableInfo.data[0].bnum;
    }
    const employeeId = oneUserInfo.data.userId;
    const employeeAuthority = oneUserInfo.data.authority;

    const onAdd = (e) => { 
        e.preventDefault();
        if(!employeeId || !sampleBarcode || !selectedCategory || !selectedReason ) {
            toast.error("부적합 검체등록을 위한 정보를 입력해주세요!", {
                position: "top-right",
                autoClose: 2000,
                theme: "colored",
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true
            });
            return;
        } 
            setSampleDetail([...unsuitableSampleInfo.data,
            {sampleBarcode , employeeId , employeeAuthority , selectedCategory , selectedReason , query }]);
            
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
                    <span>김현민님</span>
                </div>
            </div>
            <form>
                <div className="select-reason">
                    <p>피통보자</p>
                        {oneUserInfo == undefined ?
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
                    <select onChange={categoryHandler} >
                        {selectCategoryList.map((item) => (
                            <option value={item} key={item}> 
                                {item}
                            </option>
                        ))}
                    </select>
                    <select onChange={reasonHandler}>
                        {selectReasonList.map((item) => (
                            <option value={item} key={item}>
                                {item}
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

        </div>
    )
}

export default memo(UnsuitableReasonLeft);