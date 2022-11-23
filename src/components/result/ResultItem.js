import React, { useState, useCallback } from 'react';
import ResultModal from './ResultModal';
import { GoArrowUp, GoArrowDown } from 'react-icons/go';

const ResultItem = ({
    patientName,
    patientPhoneNumber,
    patientNo,
    registerDt,
    sampleName,
    prescribeDt,
    inspectionName,
    figures,
    baseline,
    unit,
    note,
    sampleNote,
    resultInfo,
}) => {
    const [modalOpen, setModalOpen] = useState(false);
    const openModal = () => {
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };

    const data = {
        patientName: patientName,
        patientNo: patientNo,
        patientPhoneNumber: patientPhoneNumber,
        figures: figures,
    };

    return (
        <>
            <ResultModal open={modalOpen} close={closeModal} data={data} />

            <tr>
                <td>{registerDt}</td>
                <td>{sampleName}</td>
                <td>{prescribeDt}</td>
                <td>{inspectionName}</td>
                <td>{figures}</td>
                <td>
                    {baseline} / {unit}
                </td>
                <td>
                    {figures > baseline ? (
                        <GoArrowUp className="arrow-up" />
                    ) : (
                        <GoArrowDown className="arrow-down" />
                    )}
                </td>
                <td>{note} </td>
                <td>{sampleNote}</td>
                <td>
                    <button
                        key={resultInfo.index}
                        className="sms-btn"
                        onClick={openModal}
                    >
                        SMS 발송
                    </button>
                </td>
                <div className="note-text">{note}</div>
                <div className="sampleNote-text">{sampleNote}</div>
            </tr>
        </>
    );
};

export default ResultItem;
