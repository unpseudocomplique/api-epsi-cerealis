import { useBody, useCookies, useQuery } from 'h3'
import * as hubspot from '@hubspot/api-client';

const hubspotClient = new hubspot.Client({
    apiKey: 'eu1-7270-c62b-424b-a5a3-0c815a4bffcc',
});



export default async (req) => {
    const body = await useBody(req)
    const { firstname, email } = body
    const contactObj = {
        properties: {
            firstname, email
        },
    };
    const createContactResponse = await hubspotClient.crm.contacts.basicApi.create(contactObj);
    console.log('createContactResponse', createContactResponse);

    return { createdUser: createContactResponse }
}