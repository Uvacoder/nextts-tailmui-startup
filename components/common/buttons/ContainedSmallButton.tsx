import { Button } from '@mui/material'
import React from 'react'

const ContainedSmallButton = ({ ...props }) => {
    return (
        <Button disableElevation variant="contained" size="small" {...props}>Edit</Button>
    )
}

export default ContainedSmallButton