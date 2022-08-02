import {Button } from '@mui/material';
import { Link } from 'react-router-dom';
const Last = () => {
    return (
        <div className="Last">
            <span className='Title'>Your Score: </span>
            <Button
            component={Link} to="/"
            variant='contained' 
            colour= 'secondary' 
            size='large'>
            
            </Button>
        </div>
    )
}
export default Last;