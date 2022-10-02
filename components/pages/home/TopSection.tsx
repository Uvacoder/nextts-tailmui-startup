/* eslint-disable react-hooks/exhaustive-deps */
import { SGrid } from '@styles/home/topSection';
import { CSH2, CSH5, CSH6 } from '@styles/common/typography';
import { CSVHCenter } from '@styles/common/common'
import React from 'react';

const TopSection = () => {

    return <SGrid>
        <div className="text-center space-y-2">
            <CSH6>Total Medicines</CSH6>
            <CSH5 bold>500</CSH5>
        </div>
        <div className="text-center space-y-2">
            <CSH6>Available Medicines</CSH6>
            <CSVHCenter className=" space-x-5">
                <CSH5 bold>117</CSH5>
                <div>
                    <CSH2>Amount</CSH2>
                    <CSH2 bold className="-mt-1.5">555159.31</CSH2>
                </div>
            </CSVHCenter>
        </div>
    </SGrid>
};

export default TopSection;
