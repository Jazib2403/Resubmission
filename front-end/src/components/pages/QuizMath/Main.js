import './Main.css';
import { MenuItem, TextField, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import Group from './Group';

const Main = ({ name, setName }) => {






    return (

        <div className='Content'>

            < img className='centreimage' src='imgMaths/AJ-Books-2.svg' alt='quiz image' />

            <div className='Options'>


                <span style={{ fontSize: 40 }} >Quiz Options</span>
                <div className='selections'>
                    <TextField label='Enter your name' variant='outlined'
                        onChange={(e) => setName(e.target.value)}
                    />
                    <TextField
                        select
                        label='Select Age' variant='outlined'
                    >
                        {
                            Group.map((grp) => (
                                <MenuItem key={grp.group} value={grp.value}>
                                    {grp.group}
                                </MenuItem>
                            ))


                        }

                    </TextField>





                    <Button component={Link} to="/Quiz"
                        variant='contained'
                        colour='inherit'
                        size='large'
                        onChange={(e) => setName(e.target.value)}>
                        Start
                    </Button>

                </div>
            </div>


        </div>





    );
};
export default Main;
