
import { Col, Row, Spacer, Text } from '@nextui-org/react'
import React from 'react'

export const ContactData = () => {
  return (
      <Col>
        <Row align='center'>
            <i className="fa-solid fa-mobile-screen-button fa-2x" style={{ color: '#ff5959'}}></i>
            <Spacer x={1} />
            <Col css={{ml: 5}}>
                <Text b h4>
                    Phone
                </Text>
                <Text h6 color='#989898'>
                    +595 992 298947
                </Text>
            </Col>
        </Row>
        <Spacer y={2} />
        <Row align='center'>
        <i className="fa-solid fa-envelope fa-2x" style={{ color: '#ff5959'}}></i>
            <Spacer x={1} />
            <Col css={{ml: 2}}>
                <Text b h4>
                    Email
                </Text>
                <Text h6 color='#989898'>
                    ericlouteiro@gmail.com
                </Text>
            </Col>
        </Row>
        <Spacer y={2} />
        <Row align='center'>
        <i className="fa-solid fa-location-dot fa-2x" style={{ color: '#ff5959'}}></i>
            <Spacer x={1} />
            <Col css={{ml: 5}}>
                <Text b h4>
                    Location
                </Text>
                <Text h6 color='#989898'>
                    Asuncion - Paraguay
                </Text>
            </Col>
        </Row>
      </Col>
  )
}

