import { useEffect, useState } from "react";
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

const useContacts = () => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        const getContacts = async () => {
            try {
                setIsLoading(true);
                const response = await fetch('https://randomuser.me/api/?results=200');
                const { results, error } = await response.json();
                if (error) {
                    throw new Error(error);
                }
                setData(results);
                setIsError(false);
            } catch (error) {
                setIsError(true);
            } finally {
                setIsLoading(false);
            }
        }
        getContacts();

    }, []);
    return {
        data,
        isLoading,
        isError
    }
}

export const Contacts = () => {
    const contacts = useContacts()

    if (contacts.isLoading) {
        return <div>...Loading</div>
    }
    if (contacts.isError) {
        return <div>...Error</div>
    }

    return <div>
        <Container container spacing={3}>
            <Grid item xs={12}>
                <div> Contacts {contacts.data[0].name.first}</div>
            </Grid> </Container>
    </div>
}