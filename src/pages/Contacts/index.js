import { useContacts } from './useContacts'
import { ContactsTable } from './ContactsTable';

import { makeStyles, createStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';



const useStyles = makeStyles((theme) => createStyles({
    root: {
        marginTop: theme.spacing(4),
    },
    headContainer: {
        marginBottom: theme.spacing(3),
    },
}));

export const Contacts = () => {
    const classes = useStyles();
    const contacts = useContacts()



    return <div>
        <Container className={classes.root}>
            <Grid container>
                <Grid item xs={12} className={classes.headContainer}>
                    <Typography variant="h3" component="h1">
                        Contacts
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    {(() => {
                        if (contacts.isLoading) {
                            return <div>...Loading</div>
                        }
                        if (contacts.isError) {
                            return <div>...Error</div>
                        }
                        return <ContactsTable data={contacts.data} />
                    })()}
                </Grid>
            </Grid>
        </Container>
    </div>
}