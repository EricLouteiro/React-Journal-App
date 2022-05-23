import { Card, Col, Container, Spacer, Text } from '@nextui-org/react'
import React from 'react'
import { ContactData } from './ContactData'
import { ContactFoms } from './ContactFoms'

export const Contact = () => {
  return (
    <Container className='main-container contact' id='contact'>
        <Card className='contact-card'>
            <Text b h2 css={{ml:10, mt: 20}}>Contact</Text>
            <Spacer />
            <Card.Body css={{ml: 15, flexDirection: 'row', paddingTop: '30px'}}>
                <Col css={{width:'auto', mr: '50px'}}>
                    <ContactData />
                </Col>
                <Col>
                    <ContactFoms />
                </Col>
            </Card.Body>
        </Card>
    </Container>
  )
}

