import React from 'react'
import { Button, TextField } from '@mui/material';
import CsTable from '@common/tables/CsTable';
import { CSContainer, CSVCenter } from '@styles/common/common';
import { CSH1, CSH4 } from '@styles/common/typography';
import { SGrid } from '@styles/showMedicine/showMedicine'
import ContainedSmallButton from '@common/buttons/ContainedSmallButton';


const ShowMedicine = () => {
    const data: any = [{
        _id: 1,
        name: 'Paracetamol',
        price: '100',
    },
    {
        _id: 2,
        name: 'Crocin',
        price: '200',
    },
    ]
    return (
        <CSContainer>
            <CSH4 bold>Show Medicine</CSH4>
            <div className="mt-10">
                <SGrid>
                    <div className="col-span-9">
                        <TextField
                            autoFocus
                            placeholder='Search medicine'
                            variant="outlined"
                            fullWidth
                            size="small"
                        />
                    </div>
                    <CSVCenter className='col-span-3 gap-2 ml-auto'>
                        <CSH1 bold>Total Medicines:</CSH1>
                        <CSH4 bold className="text-primary/80">200</CSH4>
                    </CSVCenter>
                </SGrid>
                <CsTable rowsData={data} action={(row: any) => <div className="flex space-x-3 justify-end">
                    <ContainedSmallButton className='bg-success' color="success">Edit</ContainedSmallButton>
                    <ContainedSmallButton className="bg-danger" color="error">Delete</ContainedSmallButton>
                </div>
                } />
            </div>
        </CSContainer>
    )
}

export default ShowMedicine