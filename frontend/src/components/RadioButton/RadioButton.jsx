import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import "./RadioButton.css"

const RadioButton = () => {
    return(
        <FormControl>
            <FormLabel id="demo-row-radio-buttons-group-label">Filtrar</FormLabel>
            <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
            >
                <FormControlLabel value="Todos" control={<Radio />} label="Todos" />
                <FormControlLabel value="Importantes" control={<Radio />} label="Importantes" />
                <FormControlLabel value="Normais" control={<Radio />} label="Normais" />
            </RadioGroup>
        </FormControl>
    )
}

export default RadioButton;