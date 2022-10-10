import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import styles from './tabs.module.css'
import { Link } from 'react-router-dom'

const useStyles = makeStyles({
    root: {
        flexGrow: 1,
    },
});

export default function CenteredTabs() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className={styles.title}>
            <h1>#todo</h1>
            <Paper className={classes.root}>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    indicatorColor="primary"
                    textColor="primary"
                    centered
                >
                    <Tab label="All" component={Link}
                        to={'/'} />
                    <Tab label="Active" component={Link}
                        to={'/Active'} />
                    <Tab label="Completed" component={Link}
                        to={'/Completed'} />
                </Tabs>
            </Paper>
        </div>
    );
}
